# Database Migration: Supabase → Neon

**Date:** January 2025  
**Change:** Updated implementation plan to use Neon PostgreSQL database instead of Supabase

---

## Changes Made

### Database Provider
- **Before:** Supabase (PostgreSQL with built-in features)
- **After:** Neon Database (PostgreSQL with connection pooling)

### Connection String
```
DATABASE_URL= STORED IN .ENV & NETLIFY

### Key Technical Changes

1. **Database Client**
   - **Before:** `@supabase/supabase-js` client library
   - **After:** `@neondatabase/serverless` (Neon serverless driver - [official recommendation](https://neon.com/docs/guides/netlify-functions))
   - **File:** `netlify/functions/utils/db.ts` (for Netlify Functions)
   - **Pattern:** Frontend → Netlify Functions → Neon Database (no direct DB access from frontend)

2. **Edge Functions**
   - **Before:** Supabase Edge Functions (Deno runtime)
   - **After:** Netlify Functions (Node.js runtime)
   - **Location:** `netlify/functions/` instead of `supabase/functions/`

3. **Migrations**
   - **Before:** `supabase/migrations/`
   - **After:** `migrations/` (root level)
   - **Tool:** Can use `node-pg-migrate`, `knex`, or run SQL directly

4. **Webhooks**
   - **Before:** Supabase database webhooks
   - **After:** Application-level webhooks via Netlify Functions
   - **Alternative:** PostgreSQL NOTIFY/LISTEN or n8n polling

5. **n8n Integration**
   - **Before:** Supabase node in n8n
   - **After:** PostgreSQL node in n8n (connects to Neon)

### Files Updated

- ✅ `_aiwk/plan/implementation-plan.md` - Complete update
- ✅ `_aiwk/plan/implementation-summary.md` - Updated references
- ✅ `_aiwk/todos.md` - All tasks updated

### What Stays the Same

- Database schema (all 4 tables remain identical)
- Migration SQL files (same structure)
- Application logic (only connection method changes)
- n8n workflows (only connection method changes)

### Implementation Notes

1. **Neon Serverless Driver:** Use `@neondatabase/serverless` package (optimized for serverless)
2. **Connection Pooling:** Neon uses a pooler by default (recommended for serverless)
3. **SSL:** Required (`sslmode=require`)
4. **Migrations:** Can run via Neon dashboard SQL editor or migration tool
5. **Backups:** Neon provides automatic backups
6. **Security:** Use application-level security instead of RLS (or implement RLS manually)
7. **Architecture:** Frontend calls Netlify Functions, which connect to Neon (no direct DB access)

### Official Integration Guide

Follow the [official Neon + Netlify integration guide](https://neon.com/docs/guides/netlify-functions) for best practices:
- Use `neon()` function from `@neondatabase/serverless`
- Use tagged template literals for SQL queries
- Set `DATABASE_URL` environment variable
- Test locally with `netlify dev`

### Next Steps

1. Install Neon serverless driver:
   ```bash
   npm install @neondatabase/serverless
   ```

2. Create database utility for Netlify Functions (`netlify/functions/utils/db.ts`):
   ```javascript
   import { neon } from '@neondatabase/serverless';
   export const sql = neon(process.env.DATABASE_URL);
   ```

3. Follow the [official integration guide](https://neon.com/docs/guides/netlify-functions) for implementation details

3. Update environment variables:
   - Remove: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
   - Add: `DATABASE_URL`

4. Test database connection

5. Run migrations on Neon database

---

**Status:** ✅ All documentation updated  
**Ready for Implementation:** Yes

