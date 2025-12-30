# Tampa Service Businesses - Lead Generation Platform

AI-powered lead generation platform for four virtual service businesses in Tampa Bay area.

## Businesses

1. **Tampa Home Fix** - Handyman services at `/tampa-handyman`
2. **TechEase Tampa** - AV/Tech services at `/tampa-av`
3. **ClearWater Pool Care** - Pool maintenance at `/tampa-pool`
4. **GarageRescue Tampa** - Garage organization at `/tampa-garage`

## Implementation Status

✅ **Phase 1 Complete:** Database schema & backend infrastructure
✅ **Phase 2 Complete:** Landing pages & frontend components

See `implementation-guide.md` for detailed status and next steps.

## Quick Start

### 1. Set Up Environment

```bash
# Copy environment template
cp .env.local.template .env.local

# Edit .env.local with your actual credentials
```

### 2. Deploy Database

Run the SQL migrations in your Neon database:
- `migrations/001_initial_schema.sql`
- `migrations/002_indexes_and_triggers.sql`

### 3. Test Locally

```bash
# Start dev server
npm run dev

# Visit landing pages
http://localhost:5173/tampa-handyman
http://localhost:5173/tampa-av
http://localhost:5173/tampa-pool
http://localhost:5173/tampa-garage
```

### 4. Test Functions

```bash
# Start Netlify dev server
netlify dev

# Test webhook endpoint
curl -X POST http://localhost:8888/.netlify/functions/lead-webhook \
  -H "Content-Type: application/json" \
  -d '{"business_type":"handyman","name":"Test","phone":"8135551234","service_needed":"Test","source":"web"}'
```

## Architecture

```
User visits landing page
    ↓
Fills out form
    ↓
Frontend calls Netlify Function
    ↓
Function saves to Neon Database
    ↓
Triggers n8n workflow
    ↓
AI agent calls for qualification
    ↓
Qualified leads sent to businesses
```

## Key Files

- `src/pages/landing/` - 4 landing pages
- `src/components/landing/` - Reusable components
- `src/config/businesses.ts` - Business configurations
- `netlify/functions/lead-webhook/` - API endpoint
- `migrations/` - Database schema

## Documentation

- `implementation-guide.md` - Full implementation status
- `../plan/implementation-plan.md` - Complete project plan
- `../prd/ai-powered-bus-transformation.md` - Product requirements

## Next Steps

1. Deploy database migrations
2. Configure Lindy.ai agents
3. Set up n8n workflows
4. Begin business prospecting

For detailed instructions, see `implementation-guide.md`.
