# AI-Powered Lead Generation Platform - Implementation Guide

**Status:** Phase 1 & 2 Complete (Foundation & Frontend)
**Date:** January 2025

---

## What's Been Implemented

### Phase 1: Foundation & Database ✅

**Database Schema:**
- Created 4 database tables in `migrations/`:
  - `001_initial_schema.sql` - Creates all 4 tables (leads, businesses, lead_handoffs, prospect_businesses)
  - `002_indexes_and_triggers.sql` - Performance indexes and updated_at triggers

**TypeScript Types:**
- `src/types/landing.ts` - Landing page component types
- `src/types/database.ts` - Database model types

**Netlify Functions:**
- `netlify/functions/utils/db.ts` - Neon database connection utility
- `netlify/functions/lead-webhook/lead-webhook.mts` - Lead capture webhook endpoint
- Uses `@neondatabase/serverless` driver (installed)

**Configuration:**
- `src/config/businesses.ts` - All 4 service business configurations
- `.env.local.template` - Environment variables template
- `netlify.toml` - Updated with functions directory

### Phase 2: Frontend Landing Pages ✅

**Components Created:**
- `src/components/landing/LandingTemplate.tsx` - Main template
- `src/components/landing/ServiceForm.tsx` - Lead capture form
- `src/components/landing/ServiceCard.tsx` - Service display card
- `src/components/landing/CTASection.tsx` - Call-to-action section
- `src/components/landing/index.ts` - Barrel exports

**Pages Created:**
- `src/pages/landing/HandymanLanding.tsx` - Tampa Home Fix
- `src/pages/landing/AVLanding.tsx` - TechEase Tampa
- `src/pages/landing/PoolLanding.tsx` - ClearWater Pool Care
- `src/pages/landing/GarageLanding.tsx` - GarageRescue Tampa

**Hooks:**
- `src/hooks/useLeadSubmission.ts` - Lead form submission logic

**Routes Added:**
- `/tampa-smarthome` - Handyman services
- `/tampa-techguard` - AV/Tech services
- `/tampa-pool` - Pool care services
- `/tampa-garage` - Garage organization

---

## Next Steps (To Complete the Platform)

### Immediate: Deploy Database Schema

1. **Run Migrations on Neon Database:**
   - Go to [Neon Console](https://console.neon.tech)
   - Select your database
   - Open SQL Editor
   - Run `migrations/001_initial_schema.sql`
   - Run `migrations/002_indexes_and_triggers.sql`

2. **Configure Environment Variables:**
   - Copy `.env.local.template` to `.env.local`
   - Fill in your actual API keys and connection strings
   - Add same variables to Netlify Dashboard → Site Settings → Environment Variables

### Phase 3: Backend (1-2 weeks)

**Priority: High**

- [ ] Test lead-webhook function locally with `netlify dev`
- [ ] Deploy to Netlify and test webhook endpoint
- [ ] Set up database webhook triggers (optional) or use n8n polling

### Phase 4: AI Agents (2-3 weeks)

**Priority: High**

- [ ] Sign up for Lindy.ai account
- [ ] Configure inbound agent with multi-business detection
- [ ] Set up SMS keyword routing (HANDY, AV, POOL, GARAGE)
- [ ] Choose and configure outbound qualification agent (Lindy/Bland/Vapi)
- [ ] Test and refine agent prompts

### Phase 5: Automation Workflows (2-3 weeks)

**Priority: High**

- [ ] Set up n8n instance (cloud or self-hosted)
- [ ] Create "New Lead Processing" workflow
- [ ] Create "Qualified Lead Handoff" workflow
- [ ] Set up notification system (Twilio SMS)
- [ ] Test end-to-end flows

### Phase 6: Business Prospecting (2-3 weeks)

**Priority: Medium**

- [ ] Set up Google Maps API
- [ ] Create business discovery workflow
- [ ] Set up enrichment APIs (Apollo, Hunter)
- [ ] Create outreach campaign workflows
- [ ] Implement opt-in processing

### Phase 7: Testing & QA (1-2 weeks)

**Priority: Critical before launch**

- [ ] Unit tests for hooks and utilities
- [ ] Integration tests for API endpoints
- [ ] Test all 4 landing pages
- [ ] Test lead submission flows
- [ ] Performance testing
- [ ] Security audit

### Phase 8: Launch (1 week)

**Priority: Critical**

- [ ] Deploy to production
- [ ] Test all integrations in production
- [ ] Soft launch with monitoring
- [ ] Full launch

---

## Current Architecture

```
Frontend (React + TypeScript)
    ↓
Netlify Functions (lead-webhook)
    ↓
Neon Database (PostgreSQL)
    ↓
n8n Workflows (when configured)
    ↓
AI Agents + Business Handoff
```

---

## Testing the Implementation

### 1. Test Landing Pages Locally

```bash
npm run dev
```

Then visit:
- http://localhost:5173/tampa-smarthome
- http://localhost:5173/tampa-techguard
- http://localhost:5173/tampa-pool
- http://localhost:5173/tampa-garage

### 2. Test Netlify Functions Locally

```bash
# Install Netlify CLI if not already installed
npm install -g netlify-cli

# Login to Netlify
netlify login

# Start local dev server with functions
netlify dev
```

Then test the webhook:
```bash
curl -X POST http://localhost:8888/.netlify/functions/lead-webhook \
  -H "Content-Type: application/json" \
  -d '{
    "business_type": "handyman",
    "name": "Test User",
    "phone": "8135551234",
    "email": "test@example.com",
    "service_needed": "General Repairs",
    "source": "web"
  }'
```

### 3. Deploy to Netlify

```bash
# Build locally first
npm run build

# Deploy to Netlify
netlify deploy --prod
```

---

## Important Files & Locations

**Database:**
- `migrations/001_initial_schema.sql` - Main schema
- `migrations/002_indexes_and_triggers.sql` - Indexes and triggers

**Backend:**
- `netlify/functions/lead-webhook/lead-webhook.mts` - Webhook endpoint
- `netlify/functions/utils/db.ts` - DB connection

**Frontend:**
- `src/pages/landing/` - Landing page components
- `src/components/landing/` - Reusable components
- `src/config/businesses.ts` - Business configurations
- `src/types/` - TypeScript definitions

**Configuration:**
- `.env.local.template` - Environment variables template
- `netlify.toml` - Netlify configuration
- `package.json` - Dependencies

---

## Dependencies Installed

```json
{
  "@neondatabase/serverless": "^0.x.x"
}
```

---

## API Keys Needed

Before deploying, obtain these API keys:

1. **Neon Database** - Already configured
   - Connection string in `.env.local.template`

2. **Lindy.ai** (~$99-299/month)
   - Sign up at https://lindy.ai
   - Get API key and phone number

3. **n8n** (Free self-hosted or ~$20/month cloud)
   - Set up at https://n8n.io or self-host
   - Create webhook URLs

4. **Twilio** (Pay-as-you-go)
   - Sign up at https://twilio.com
   - Get Account SID, Auth Token, and phone number

5. **Google Maps API** (First $200/month free)
   - Get key from Google Cloud Console

---

## Support & Documentation

- **Full Implementation Plan:** `_aiwk/plan/implementation-plan.md`
- **PRD:** `_aiwk/prd/ai-powered-bus-transformation.md`
- **Neon Integration:** `_aiwk/plan/neon-netlify-integration.md`
- **Business Briefs:** `_aiwk/prd/business_files/`

---

**Implementation Status:** Foundation Complete (Phases 1-2) ✅
**Next Milestone:** Deploy database + Configure AI agents
**Last Updated:** January 2025
