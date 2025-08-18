import type { Context } from "https://edge.netlify.com/";

// Types
interface ChatRequest {
  leadId?: string;
  threadId?: string; // For OpenAI Assistant conversation continuity
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

interface LeadFields {
  company_name?: string;
  industry?: string;
  contact_name?: string;
  role?: string;
  email?: string;
  linkedin?: string;
  problem_summary?: string;
  urgency?: 'This week' | '2–4 weeks' | 'This quarter' | 'Flexible' | '';
  decision_makers?: string;
  budget_context?: string;
  timeline_date?: string;
}

// Environment variables
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
const AIRTABLE_API_KEY = Deno.env.get('AIRTABLE_API_KEY');
const AIRTABLE_BASE_ID = Deno.env.get('AIRTABLE_BASE_ID');
const OPENAI_ASSISTANT_ID = 'asst_qKqJtGBA328VCB2An5Nk0JyD'; // Your OpenAI Assistant ID

// NOTE: The following persona is not used when using the Assistant API
// The assistant's instructions are configured directly in OpenAI's Assistant settings
// Keeping this for reference or fallback to Chat Completions API
const PERSONA_CORE = `You are "Vikas," an executive-facing cybersecurity & AI advisor who helps B2B companies close deals faster by de-risking compliance and security.
Voice: concise, warm, curious, value-first. No emojis.
Mission: qualify inbound visitors and decide fit. Lead the conversation with smart discovery questions.
Extract: company_name, industry, contact_name, role, email/LinkedIn (if offered), problem_summary, current_state, urgency, decision_makers, budget_context (never mention price), timeline, blockers.
Always one question per turn.
Handle inappropriate content: strike 1 = humorous deflection + log, strike 2 = show IP + remind skill set + log.
Pivot from price questions to value/outcomes.
Stop after ~12 turns or once qualified; propose a short intro call.`;

// Abuse detection regex
const ABUSE_REGEX = /\b(kill|hate|slur|sexual|explicit|threat|fuck|shit|damn|bitch|ass|stupid|idiot)\b/i;

export default async function handler(req: Request, context: Context) {
  console.log('Edge function called:', req.method, req.url);
  
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*', // In production, restrict to your domains
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers,
    });
  }

  try {
    // Extract domain from request
    const origin = req.headers.get('origin') || req.headers.get('referer') || '';
    const domain = new URL(origin || 'https://unknown').hostname;
    
    // Get client IP
    const clientIP = context.ip || req.headers.get('x-forwarded-for') || 'unknown';

    // Parse request body
    const body: ChatRequest = await req.json();
    const { leadId, threadId, messages } = body;

    // Generate or use existing lead ID
    const currentLeadId = leadId || crypto.randomUUID();

    // Check for abuse in last user message
    let abuseStrikes = 0;
    let abuseDetected = false;
    
    if (messages.length > 0) {
      const lastUserMessage = messages[messages.length - 1];
      if (lastUserMessage.role === 'user' && ABUSE_REGEX.test(lastUserMessage.content)) {
        abuseDetected = true;
        // Get current strikes from Airtable (simplified for now)
        abuseStrikes = await getAbuseStrikes(currentLeadId);
        abuseStrikes++;
        await logAbuse(currentLeadId, lastUserMessage.content, abuseStrikes, clientIP, domain);
      }
    }

    // Handle abuse response
    if (abuseDetected) {
      let response = '';
      if (abuseStrikes === 1) {
        response = "Hey there! Let's keep this professional and productive. How can I help you with your cybersecurity or compliance challenges?";
      } else if (abuseStrikes >= 2) {
        response = `I notice you're connecting from ${clientIP}. As someone with 25+ years in cybersecurity, I have the skills to identify bad actors. Let's redirect this conversation to something productive - how can I help your organization with security or compliance?`;
      }
      
      await saveConversation(currentLeadId, messages, response, domain);
      
      return new Response(JSON.stringify({ 
        leadId: currentLeadId, 
        reply: response,
        abuseDetected: true,
        strikes: abuseStrikes
      }), { headers });
    }

    // Call OpenAI Assistant to get response
    const { reply: aiResponse, threadId: currentThreadId } = await getOpenAIResponse(messages, threadId);
    
    // Extract qualification fields from conversation
    const extractedFields = await extractLeadFields(messages, aiResponse);
    
    // Save/update lead in Airtable
    await upsertLead(currentLeadId, extractedFields, domain, clientIP);
    
    // Save conversation turn
    await saveConversation(currentLeadId, messages, aiResponse, domain);

    return new Response(JSON.stringify({ 
      leadId: currentLeadId,
      threadId: currentThreadId,
      reply: aiResponse 
    }), { headers });

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: "I apologize, but I'm having technical difficulties. Please try again in a moment."
    }), {
      status: 500,
      headers,
    });
  }
}

async function getOpenAIResponse(messages: any[], threadId?: string): Promise<{ reply: string; threadId: string }> {
  if (!OPENAI_API_KEY) {
    return {
      reply: "I'm currently in demo mode. In production, I'll help qualify your cybersecurity and compliance needs.",
      threadId: threadId || 'demo-thread'
    };
  }

  try {
    let currentThreadId = threadId;
    
    // Create thread if not exists
    if (!currentThreadId) {
      const threadResponse = await fetch('https://api.openai.com/v1/threads', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify({})
      });
      
      if (!threadResponse.ok) {
        throw new Error(`Failed to create thread: ${threadResponse.statusText}`);
      }
      
      const threadData = await threadResponse.json();
      currentThreadId = threadData.id;
    }
    
    // Get the last user message
    const lastUserMessage = messages[messages.length - 1];
    if (!lastUserMessage || lastUserMessage.role !== 'user') {
      throw new Error('No user message found');
    }
    
    // Add message to thread
    const messageResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({
        role: 'user',
        content: lastUserMessage.content
      })
    });
    
    if (!messageResponse.ok) {
      throw new Error(`Failed to add message: ${messageResponse.statusText}`);
    }
    
    // Run the assistant
    const runResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/runs`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({
        assistant_id: OPENAI_ASSISTANT_ID
      })
    });
    
    if (!runResponse.ok) {
      throw new Error(`Failed to run assistant: ${runResponse.statusText}`);
    }
    
    const runData = await runResponse.json();
    const runId = runData.id;
    
    // Poll for completion
    let runStatus = 'in_progress';
    let attempts = 0;
    const maxAttempts = 30; // 30 seconds timeout
    
    while (runStatus === 'in_progress' || runStatus === 'queued') {
      if (attempts >= maxAttempts) {
        throw new Error('Assistant run timeout');
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      
      const statusResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/runs/${runId}`, {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'OpenAI-Beta': 'assistants=v2'
        }
      });
      
      if (!statusResponse.ok) {
        throw new Error(`Failed to check run status: ${statusResponse.statusText}`);
      }
      
      const statusData = await statusResponse.json();
      runStatus = statusData.status;
      
      if (runStatus === 'failed' || runStatus === 'cancelled' || runStatus === 'expired') {
        throw new Error(`Assistant run ${runStatus}`);
      }
      
      attempts++;
    }
    
    // Get the assistant's response
    const messagesResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/messages`, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v2'
      }
    });
    
    if (!messagesResponse.ok) {
      throw new Error(`Failed to get messages: ${messagesResponse.statusText}`);
    }
    
    const messagesData = await messagesResponse.json();
    const assistantMessage = messagesData.data.find((msg: any) => msg.role === 'assistant');
    
    if (!assistantMessage) {
      throw new Error('No assistant response found');
    }
    
    // Extract text content from the assistant message
    const textContent = assistantMessage.content.find((c: any) => c.type === 'text');
    const reply = textContent ? textContent.text.value : 'I apologize, but I was unable to generate a response.';
    
    return {
      reply,
      threadId: currentThreadId!
    };
  } catch (error) {
    console.error('OpenAI Assistant API error:', error);
    throw error;
  }
}

async function extractLeadFields(messages: any[], latestResponse: string): Promise<LeadFields> {
  if (!OPENAI_API_KEY) return {};

  try {
    const conversation = [...messages, { role: 'assistant', content: latestResponse }]
      .map(m => `${m.role}: ${m.content}`)
      .join('\n');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'Extract lead qualification fields from this conversation. Return ONLY valid JSON with these fields: company_name, industry, contact_name, role, email, linkedin, problem_summary, urgency, decision_makers, budget_context, timeline_date. Leave empty string for unknown fields.'
          },
          {
            role: 'user',
            content: conversation
          }
        ],
        temperature: 0,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // Parse JSON from response
    try {
      return JSON.parse(content);
    } catch {
      // If JSON parsing fails, return empty object
      return {};
    }
  } catch (error) {
    console.error('Field extraction error:', error);
    return {};
  }
}

async function upsertLead(leadId: string, fields: LeadFields, domain: string, ip: string): Promise<void> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.log('Airtable credentials missing - skipping lead upsert');
    return;
  }
  console.log('Upserting lead:', leadId, fields);

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Leads`;
  
  try {
    // Check if lead exists
    const filterFormula = encodeURIComponent(`{lead_id}='${leadId}'`);
    const existingLead = await fetch(`${url}?filterByFormula=${filterFormula}`, {
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      },
    });

    if (!existingLead.ok) {
      console.error('Airtable Leads table error:', existingLead.status, existingLead.statusText);
      console.log('Make sure the Leads table exists in your Airtable base');
      return;
    }

    const existingData = await existingLead.json();
    console.log('Existing lead data:', existingData);
  
  // Clean up empty fields that Airtable can't accept
  const cleanedFields = Object.entries(fields).reduce((acc, [key, value]) => {
    // Skip empty strings for date fields and other fields that can't accept empty strings
    if (key === 'timeline_date' && value === '') {
      return acc;
    }
    // Keep non-empty values
    if (value !== '') {
      acc[key] = value;
    }
    return acc;
  }, {} as any);

  const leadData = {
    lead_id: leadId,
    ...cleanedFields,
    ip_address: ip,
    source: 'Portfolio Chat',
    status: fields.company_name ? 'Qualifying' : 'New',
    // You'll need to get the domain record ID from Domains table
    // Domains: [domainRecordId]
  };

  if (existingData.records && existingData.records.length > 0) {
    // Update existing lead
    const updateResponse = await fetch(`${url}/${existingData.records[0].id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields: leadData }),
    });
    if (!updateResponse.ok) {
      const errorBody = await updateResponse.text();
      console.error('Error updating lead:', updateResponse.status, errorBody);
    }
  } else {
    // Create new lead
    const createResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        records: [{ fields: leadData }] 
      }),
    });
    if (!createResponse.ok) {
      const errorBody = await createResponse.text();
      console.error('Error creating lead:', createResponse.status, errorBody);
      console.error('Attempted to create with:', JSON.stringify({ records: [{ fields: leadData }] }));
    }
  }
  } catch (error) {
    console.error('Error upserting lead:', error);
    console.log('Please ensure the Leads table exists with the correct fields');
  }
}

async function saveConversation(leadId: string, messages: any[], response: string, _domain: string): Promise<void> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.log('Airtable credentials missing - skipping conversation save');
    return;
  }

  try {
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Conversations`;
  
  const records: any[] = [];
  
  // Save user message if present
  if (messages.length > 0) {
    const lastMessage = messages[messages.length - 1];
    records.push({
      fields: {
        conv_id: crypto.randomUUID(),
        lead_id: leadId,
        turn_index: messages.length,
        role: lastMessage.role,
        message: lastMessage.content,
        // timestamp is auto-populated by Airtable (Created time field)
        // Domains: [domainRecordId]
      }
    });
  }
  
  // Save assistant response
  records.push({
    fields: {
      conv_id: crypto.randomUUID(),
      lead_id: leadId,
      turn_index: messages.length + 1,
      role: 'assistant',
      message: response,
      // timestamp is auto-populated by Airtable (Created time field)
      // Domains: [domainRecordId]
    }
  });

    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ records }),
    });
    
    if (!apiResponse.ok) {
      const errorBody = await apiResponse.text();
      console.error('Airtable Conversations table error:', apiResponse.status, apiResponse.statusText);
      console.error('Error details:', errorBody);
      console.log('Request body was:', JSON.stringify({ records }));
      console.log('Make sure the Conversations table exists in your Airtable base');
    }
  } catch (error) {
    console.error('Error saving conversation:', error);
    console.log('Please ensure the Conversations table exists with the correct fields');
  }
}

async function getAbuseStrikes(leadId: string): Promise<number> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) return 0;

  const filterFormula = encodeURIComponent(`{lead_id}='${leadId}'`);
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Leads?filterByFormula=${filterFormula}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      },
    });
    
    const data = await response.json();
    if (data.records && data.records.length > 0) {
      return data.records[0].fields.abuse_strikes || 0;
    }
  } catch (error) {
    console.error('Error getting abuse strikes:', error);
  }
  
  return 0;
}

async function logAbuse(leadId: string, message: string, strikes: number, ip: string, _domain: string): Promise<void> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) return;

  // Update lead with abuse strikes
  const leadsUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Leads`;
  const filterFormula = encodeURIComponent(`{lead_id}='${leadId}'`);
  const existingLead = await fetch(`${leadsUrl}?filterByFormula=${filterFormula}`, {
    headers: {
      'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
    },
  });

  const existingData = await existingLead.json();
  console.log('Existing lead data:', existingData);
  if (existingData.records && existingData.records.length > 0) {
    await fetch(`${leadsUrl}/${existingData.records[0].id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        fields: { 
          abuse_strikes: strikes,
          ip_address: ip 
        } 
      }),
    });
  }

  // Log to AbuseLogs table
  const abuseUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/AbuseLogs`;
  await fetch(abuseUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [{
        fields: {
          lead_id: leadId,
          ip_address: ip,
          message: message,
          strike_number: strikes,
          // timestamp is auto-populated by Airtable (Created time field)
          // Domains: [domainRecordId]
        }
      }]
    }),
  });
}