import type { Context } from "https://edge.netlify.com/";

// Types
interface ChatRequest {
  leadId?: string;
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
const OPENAI_ASSISTANT_ID = Deno.env.get('OPENAI_ASSISTANT_ID'); // You'll need to create this

// Persona and system instructions
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
    const { leadId, messages } = body;

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

    // Call OpenAI to get response
    const aiResponse = await getOpenAIResponse(messages);
    
    // Extract qualification fields from conversation
    const extractedFields = await extractLeadFields(messages, aiResponse);
    
    // Save/update lead in Airtable
    await upsertLead(currentLeadId, extractedFields, domain, clientIP);
    
    // Save conversation turn
    await saveConversation(currentLeadId, messages, aiResponse, domain);

    return new Response(JSON.stringify({ 
      leadId: currentLeadId, 
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

async function getOpenAIResponse(messages: any[]): Promise<string> {
  if (!OPENAI_API_KEY) {
    return "I'm currently in demo mode. In production, I'll help qualify your cybersecurity and compliance needs.";
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: PERSONA_CORE },
          ...messages
        ],
        temperature: 0.6,
        max_tokens: 200,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API error:', error);
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
  
  const leadData = {
    lead_id: leadId,
    ...fields,
    ip_address: ip,
    source: 'Portfolio Chat',
    status: fields.company_name ? 'Qualifying' : 'New',
    // You'll need to get the domain record ID from Domains table
    // Domains: [domainRecordId]
  };

  if (existingData.records && existingData.records.length > 0) {
    // Update existing lead
    await fetch(`${url}/${existingData.records[0].id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields: leadData }),
    });
  } else {
    // Create new lead
    await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        records: [{ fields: { ...leadData, created_at: new Date().toISOString() } }] 
      }),
    });
  }
  } catch (error) {
    console.error('Error upserting lead:', error);
    console.log('Please ensure the Leads table exists with the correct fields');
  }
}

async function saveConversation(leadId: string, messages: any[], response: string, domain: string): Promise<void> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.log('Airtable credentials missing - skipping conversation save');
    return;
  }

  try {
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Conversations`;
  
  const records = [];
  
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
        timestamp: new Date().toISOString(),
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
      timestamp: new Date().toISOString(),
      // Domains: [domainRecordId]
    }
  });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ records }),
    });
    
    if (!response.ok) {
      console.error('Airtable Conversations table error:', response.status, response.statusText);
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

async function logAbuse(leadId: string, message: string, strikes: number, ip: string, domain: string): Promise<void> {
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
          timestamp: new Date().toISOString(),
          // Domains: [domainRecordId]
        }
      }]
    }),
  });
}