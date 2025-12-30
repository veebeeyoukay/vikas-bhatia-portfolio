import { Handler } from '@netlify/functions';
import { neon } from '@neondatabase/serverless';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
};

interface LeadData {
  business_type: 'handyman' | 'av' | 'pool' | 'garage';
  name: string;
  phone: string;
  email?: string;
  address?: string;
  city?: string;
  zip_code?: string;
  service_needed: string;
  service_details?: Record<string, unknown>;
  timeline?: string;
  budget_range?: string;
  source: 'web' | 'lindy_call' | 'lindy_sms' | 'whatsapp';
  source_keyword?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

function detectBusinessType(text: string): 'handyman' | 'av' | 'pool' | 'garage' {
  const lower = (text || '').toLowerCase();
  if (lower.includes('handy') || lower.includes('repair') || lower.includes('fix')) return 'handyman';
  if (lower.includes('av') || lower.includes('tv') || lower.includes('tech') || lower.includes('wifi')) return 'av';
  if (lower.includes('pool') || lower.includes('swim')) return 'pool';
  if (lower.includes('garage') || lower.includes('clutter') || lower.includes('organiz')) return 'garage';
  return 'handyman';
}

async function triggerN8nWorkflow(lead: any) {
  const n8nWebhookUrl = process.env.N8N_NEW_LEAD_WEBHOOK;
  if (!n8nWebhookUrl) return;

  try {
    await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead)
    });
  } catch (error) {
    console.error('Failed to trigger n8n workflow:', error);
  }
}

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const sql = neon(process.env.DATABASE_URL || '');

    const body: LeadData = JSON.parse(event.body || '{}');

    // Determine business type from keyword or explicit field
    const businessType = body.business_type || detectBusinessType(body.source_keyword || body.service_needed || '');

    // Insert lead into database
    const result = await sql`
      INSERT INTO leads (
        business_type, name, phone, email, address, city, zip_code,
        service_needed, service_details, timeline, budget_range,
        source, source_keyword, utm_source, utm_medium, utm_campaign,
        status
      ) VALUES (
        ${businessType}, ${body.name}, ${body.phone}, ${body.email || null},
        ${body.address || null}, ${body.city || 'Tampa'}, ${body.zip_code || null},
        ${body.service_needed}, ${JSON.stringify(body.service_details || {})},
        ${body.timeline || null}, ${body.budget_range || null},
        ${body.source}, ${body.source_keyword || null},
        ${body.utm_source || null}, ${body.utm_medium || null}, ${body.utm_campaign || null},
        'new'
      )
      RETURNING id, business_type, name, phone, service_needed, created_at
    `;

    if (result.length === 0) {
      throw new Error('Failed to insert lead');
    }

    const lead = result[0];

    // Trigger n8n workflow for outbound qualification
    await triggerN8nWorkflow(lead);

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        lead_id: lead.id,
        message: 'Lead captured successfully'
      }),
    };
  } catch (error: any) {
    console.error('Error processing lead:', error);
    return {
      statusCode: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Failed to process lead',
        message: error.message
      }),
    };
  }
};
