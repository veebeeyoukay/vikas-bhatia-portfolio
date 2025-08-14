import { Handler } from '@netlify/functions';
import axios from 'axios';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface SaveRequest {
  sessionId: string;
  messages: ChatMessage[];
  metadata?: {
    userAgent?: string;
    referrer?: string;
  };
}

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || 'appTOLDWsdIbz7N7R';
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Conversations';

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
    const { sessionId, messages, metadata }: SaveRequest = JSON.parse(event.body || '{}');

    if (!sessionId || !messages) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid request: sessionId and messages required' }),
      };
    }

    if (!AIRTABLE_API_KEY) {
      console.log('Airtable API key not configured, skipping save');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          success: false,
          message: 'Conversation logging not configured' 
        }),
      };
    }

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

    const response = await axios.post(
      airtableUrl,
      {
        records: [
          {
            fields: {
              SessionID: sessionId,
              Messages: JSON.stringify(messages),
              Timestamp: new Date().toISOString(),
              UserAgent: metadata?.userAgent || '',
              Referrer: metadata?.referrer || '',
            }
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        recordId: response.data.records[0].id,
      }),
    };

  } catch (error: any) {
    console.error('Error saving to Airtable:', error.response?.data || error.message);

    // Don't fail the whole operation if Airtable save fails
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Failed to save conversation',
        error: error.response?.data?.error?.type || error.message,
      }),
    };
  }
};