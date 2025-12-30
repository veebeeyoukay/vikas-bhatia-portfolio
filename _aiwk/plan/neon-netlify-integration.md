# Neon + Netlify Integration Guide

**Reference:** [Official Neon Documentation](https://neon.com/docs/guides/netlify-functions)

This document outlines the specific implementation details for integrating Neon database with Netlify Functions, following the official best practices.

---

## Key Principles

1. **Use Neon Serverless Driver:** `@neondatabase/serverless` is optimized for serverless environments
2. **No Direct DB Access from Frontend:** Frontend calls Netlify Functions, which connect to Neon
3. **Connection Pooling:** Neon's pooler is built-in and recommended for serverless
4. **Environment Variables:** Use `DATABASE_URL` for connection string

---

## Installation

```bash
npm install @neondatabase/serverless
```

---

## Database Connection Pattern

### For Netlify Functions

```javascript
// netlify/functions/utils/db.ts or .mjs
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);
```

### Usage in Functions

```javascript
// netlify/functions/lead-webhook/lead-webhook.mjs
import { neon } from '@neondatabase/serverless';

export async function handler(event) {
  const sql = neon(process.env.DATABASE_URL);
  
  try {
    // Use tagged template literals for queries
    const result = await sql`
      INSERT INTO leads (name, phone, email)
      VALUES (${name}, ${phone}, ${email})
      RETURNING id
    `;
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ success: true, id: result[0].id }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
```

---

## Frontend Pattern

**Important:** Frontend should NOT connect directly to the database. Instead, call Netlify Functions:

```typescript
// src/hooks/useLeadSubmission.ts
const response = await fetch('/.netlify/functions/lead-webhook', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## Environment Variables

### Local Development

Create `.env` file:
```env
DATABASE_URL=postgresql://neondb_owner:npg_7LJM9ruywBQc@ep-wispy-poetry-ah9dq3xi-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### Netlify Production

Set via Netlify CLI:
```bash
netlify env:set DATABASE_URL "postgresql://..."
```

Or via Netlify Dashboard:
1. Go to Site Settings → Environment Variables
2. Add `DATABASE_URL` with your connection string

---

## Testing Locally

```bash
# Install Netlify CLI globally
npm install netlify-cli -g

# Login to Netlify
netlify login

# Start local dev server (reads .env file)
netlify dev
```

The `netlify dev` command will:
- Start local server
- Load environment variables from `.env`
- Make functions available at `/.netlify/functions/function-name`

---

## Function File Structure

### Option 1: JavaScript with .mjs extension

```
netlify/functions/
  └── lead-webhook/
      └── lead-webhook.mjs
```

### Option 2: TypeScript

```
netlify/functions/
  └── lead-webhook/
      └── lead-webhook.ts
```

For TypeScript, ensure `netlify.toml` is configured:
```toml
[build]
  functions = "netlify/functions"
```

---

## Connection String Details

Your Neon connection string:
```
postgresql://neondb_owner:npg_7LJM9ruywBQc@ep-wispy-poetry-ah9dq3xi-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

**Key Points:**
- Uses `pooler` endpoint (recommended for serverless)
- SSL mode: `require`
- Channel binding: `require`

---

## Query Patterns

### Tagged Template Literals (Recommended)

```javascript
const result = await sql`
  SELECT * FROM leads 
  WHERE business_type = ${businessType}
  AND status = 'new'
`;
```

### Parameterized Queries

```javascript
const result = await sql(
  'SELECT * FROM leads WHERE id = $1',
  [leadId]
);
```

---

## Error Handling

```javascript
try {
  const result = await sql`...`;
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
} catch (error) {
  console.error('Database error:', error);
  return {
    statusCode: 500,
    body: JSON.stringify({ 
      error: 'Database operation failed',
      message: error.message 
    }),
  };
}
```

---

## CORS Configuration

For functions called from frontend:

```javascript
return {
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Or specific domain
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
  body: JSON.stringify(data),
};
```

---

## Best Practices

1. **Always use connection pooler endpoint** for serverless
2. **Use tagged template literals** for SQL queries (prevents SQL injection)
3. **Handle errors gracefully** with try/catch
4. **Set proper CORS headers** for frontend calls
5. **Use environment variables** for connection strings (never hardcode)
6. **Test locally** with `netlify dev` before deploying
7. **Monitor function logs** in Netlify dashboard

---

## Resources

- [Official Neon + Netlify Guide](https://neon.com/docs/guides/netlify-functions)
- [Neon Serverless Driver Docs](https://neon.com/docs/serverless/serverless-driver)
- [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
- [Netlify CLI Docs](https://docs.netlify.com/cli/get-started/)

---

**Last Updated:** January 2025  
**Status:** Following official Neon recommendations

