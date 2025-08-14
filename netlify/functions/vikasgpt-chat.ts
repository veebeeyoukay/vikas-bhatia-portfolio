import { Handler } from '@netlify/functions';
import axios from 'axios';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  sessionId?: string;
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';
const OPENAI_MAX_TOKENS = parseInt(process.env.OPENAI_MAX_TOKENS || '1000');
const OPENAI_TEMPERATURE = parseFloat(process.env.OPENAI_TEMPERATURE || '0.7');

// System prompt for VikasGPT
const SYSTEM_PROMPT = `You are VikasGPT, an AI assistant representing Vikas Bhatia, a cybersecurity executive and strategic technology leader with over 25 years of experience. 

Your knowledge base includes:
- 25+ years of cybersecurity and technology leadership experience
- Expertise across 130+ organizations in 15+ industries
- Certifications: QTE (Boardroom Qualified Technology Expert), C|CISO, CISSP, CIPP
- Education: BA Hons. Economics from Kingston University, UK
- Specializations: Cybersecurity Strategy, Digital Transformation, Risk Management, Security Architecture, Executive Advisory
- Industries: Financial Services, Healthcare, Technology, Manufacturing, Retail, Government

You should:
1. Answer questions about Vikas's experience, qualifications, and services
2. Provide insights on cybersecurity best practices and strategies
3. Discuss technology leadership and digital transformation topics
4. Be professional, knowledgeable, and helpful
5. When appropriate, suggest scheduling a meeting for detailed consultations

You should NOT:
1. Make up information not provided in your knowledge base
2. Provide specific security vulnerabilities or hacking techniques
3. Share personal contact information beyond what's publicly available
4. Make commitments on behalf of Vikas`;

export const handler: Handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { messages, sessionId }: ChatRequest = JSON.parse(event.body || '{}');

    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid request: messages array required' }),
      };
    }

    if (!OPENAI_API_KEY) {
      // Return fallback response if no API key
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          response: getFallbackResponse(messages[messages.length - 1].content),
          sessionId: sessionId || generateSessionId(),
        }),
      };
    }

    // Call OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: OPENAI_MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ],
        max_tokens: OPENAI_MAX_TOKENS,
        temperature: OPENAI_TEMPERATURE,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response: response.data.choices[0].message.content,
        sessionId: sessionId || generateSessionId(),
      }),
    };

  } catch (error: any) {
    console.error('Error in vikasgpt-chat function:', error);

    // Return fallback response on error
    if (error.response?.status === 401) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          response: 'API configuration error. Using fallback responses.',
          sessionId: generateSessionId(),
        }),
      };
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        response: getFallbackResponse(''),
        sessionId: generateSessionId(),
      }),
    };
  }
};

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function getFallbackResponse(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('experience') || lowerQuery.includes('background')) {
    return "Vikas Bhatia brings over 25 years of experience in cybersecurity and technology leadership. He has worked with 130+ organizations across 15+ industries, from Fortune 500 companies to innovative startups. His expertise spans cybersecurity strategy, digital transformation, risk management, and executive advisory services.";
  }
  
  if (lowerQuery.includes('certification') || lowerQuery.includes('qualified')) {
    return "Vikas holds several prestigious certifications including Boardroom Qualified Technology Expert (QTE), C|CISO, CISSP, and CIPP. These certifications demonstrate his comprehensive expertise in cybersecurity, governance, and privacy. He also holds a BA Hons. in Economics from Kingston University, UK.";
  }
  
  if (lowerQuery.includes('service') || lowerQuery.includes('help') || lowerQuery.includes('offer')) {
    return "Vikas offers comprehensive cybersecurity and technology leadership services including:\n\n• Cybersecurity Strategy & Advisory\n• Security Architecture & Design\n• Digital Transformation Security\n• Risk Management & Compliance\n• Executive Coaching & Training\n• Board Advisory Services\n\nHe specializes in helping organizations build resilient, future-ready security programs that enable business growth while managing risk intelligently.";
  }
  
  if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('schedule')) {
    return "You can connect with Vikas through several channels:\n\n• LinkedIn: linkedin.com/in/vikasbhatiauk\n• Schedule a meeting: Click the 'Schedule Meeting' button in the navigation\n• View his resume for detailed background information\n\nVikas is available for consulting engagements, advisory roles, and speaking opportunities.";
  }
  
  return "That's an interesting question! Based on Vikas's extensive experience in cybersecurity and technology leadership, I can help you explore topics related to:\n\n• Cybersecurity strategy and architecture\n• Digital transformation initiatives\n• Risk management and compliance\n• Technology leadership best practices\n• Board advisory and governance\n\nWhat specific aspect would you like to know more about?";
}