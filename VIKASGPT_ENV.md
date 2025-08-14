# VikasGPT Environment Variables Setup

## Required Environment Variables for Netlify

Add these environment variables in your Netlify dashboard under Site Settings > Environment Variables:

### OpenAI Configuration
```
OPENAI_API_KEY=your_openai_api_key_here
```

### Airtable Configuration
```
AIRTABLE_API_KEY=your_airtable_pat_here
AIRTABLE_BASE_ID=appTOLDWsdIbz7N7R
```

## Airtable Setup Instructions

### 1. Create Tables in Your Airtable Base

#### Domains Table
- `domain` (Single line text, Primary field) - e.g., "vikasbhatia.io"
- `project_name` (Single line text)
- `site_key` (Single line text, optional)
- `status` (Single select: Active, Paused)

#### Leads Table
- `lead_id` (Single line text, Primary field)
- `created_at` (Date/time)
- `status` (Single select: New, Qualifying, Qualified, Not a Fit, Abandoned)
- `contact_name` (Single line text)
- `role` (Single line text)
- `email` (Email)
- `linkedin` (URL)
- `company_name` (Single line text)
- `industry` (Single line text)
- `company_size` (Single line text)
- `problem_summary` (Long text)
- `urgency` (Single select: This week, 2–4 weeks, This quarter, Flexible)
- `timeline_date` (Date)
- `decision_makers` (Long text)
- `budget_context` (Long text)
- `next_step` (Long text)
- `ip_address` (Single line text)
- `abuse_strikes` (Number)
- `source` (Single line text)
- `Domains` (Link to another record - link to Domains table)

#### Conversations Table
- `conv_id` (Single line text, Primary field)
- `lead_id` (Single line text)
- `turn_index` (Number)
- `role` (Single select: user, assistant)
- `message` (Long text)
- `extracted_fields_json` (Long text)
- `abuse_flag` (Checkbox)
- `timestamp` (Date/time)
- `Domains` (Link to another record - link to Domains table)

#### AbuseLogs Table
- `lead_id` (Single line text, Primary field)
- `turn_index` (Number)
- `ip_address` (Single line text)
- `message` (Long text)
- `strike_number` (Number)
- `timestamp` (Date/time)
- `Domains` (Link to another record - link to Domains table)

### 2. Add Initial Domain Record

In the Domains table, create a record:
- `domain`: "vikasbhatia.info"
- `project_name`: "Portfolio"
- `status`: "Active"

## Testing the Setup

1. Deploy to Netlify with the environment variables set
2. Visit the VikasGPT page on your site
3. Start a conversation to test the integration
4. Check Airtable to confirm data is being logged

## Security Notes

- Never commit API keys to your repository
- Use Netlify's environment variables for all sensitive data
- The Edge Functions will automatically have access to these environment variables
- Ensure your Airtable API key has appropriate permissions (read/write to the specified base)