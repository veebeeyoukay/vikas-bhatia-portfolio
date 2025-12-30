# n8n Workflow: Dynamic Business Prospecting System

## Overview

This document outlines the n8n workflow for automatically identifying, enriching, and reaching out to traditional businesses (baby boomer-owned) in the Tampa Bay area who could benefit from AI transformation services. The workflow provides them with free qualified leads as a value-first entry point.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          PROSPECTING PIPELINE                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│  │   DISCOVER  │───▶│   ENRICH    │───▶│  OUTREACH   │───▶│  NURTURE    │  │
│  │  Businesses │    │    Data     │    │  Campaign   │    │  & Convert  │  │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘  │
│         │                 │                  │                  │          │
│         ▼                 ▼                  ▼                  ▼          │
│  Google Maps API    Apollo/Hunter      Email + SMS         Lead Delivery   │
│  Yelp Scraping      Business Age       Multi-touch          AI Demo        │
│  Yellow Pages       Tech Stack         Personalization      Consultation   │
│                     Owner Info                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Workflow 1: Business Discovery

### Trigger Options

**Option A: Scheduled (Recommended)**
- Run daily or weekly
- Covers different business types on rotation
- Avoids API rate limits

**Option B: Manual**
- Trigger when you want to prospect a new area
- Use for specific targeting

### Discovery Flow

```json
{
  "name": "Business Discovery - Tampa Services",
  "nodes": [
    {
      "name": "Schedule Trigger",
      "type": "n8n-nodes-base.scheduleTrigger",
      "position": [250, 300],
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "days",
              "daysInterval": 1,
              "triggerAtHour": 6
            }
          ]
        }
      }
    },
    {
      "name": "Get Business Type for Today",
      "type": "n8n-nodes-base.function",
      "position": [450, 300],
      "parameters": {
        "functionCode": "// Rotate through business types\nconst types = [\n  { type: 'handyman', searchTerms: ['handyman', 'home repair', 'mr handyman'] },\n  { type: 'av', searchTerms: ['tv mounting', 'home theater installation', 'smart home installer'] },\n  { type: 'pool', searchTerms: ['pool service', 'pool cleaning', 'above ground pool'] },\n  { type: 'garage', searchTerms: ['garage organization', 'junk removal', 'garage cleanout'] }\n];\n\nconst dayOfWeek = new Date().getDay();\nconst todayType = types[dayOfWeek % types.length];\n\nreturn [{ json: todayType }];"
      }
    },
    {
      "name": "Google Maps Search",
      "type": "n8n-nodes-base.httpRequest",
      "position": [650, 300],
      "parameters": {
        "url": "https://maps.googleapis.com/maps/api/place/textsearch/json",
        "method": "GET",
        "qs": {
          "query": "={{$json.searchTerms[0]}} Tampa FL",
          "key": "={{$env.GOOGLE_MAPS_API_KEY}}"
        }
      }
    },
    {
      "name": "Get Place Details",
      "type": "n8n-nodes-base.httpRequest",
      "position": [850, 300],
      "parameters": {
        "url": "https://maps.googleapis.com/maps/api/place/details/json",
        "method": "GET",
        "qs": {
          "place_id": "={{$json.place_id}}",
          "fields": "name,formatted_address,formatted_phone_number,website,rating,user_ratings_total,opening_hours",
          "key": "={{$env.GOOGLE_MAPS_API_KEY}}"
        }
      }
    },
    {
      "name": "Filter & Format",
      "type": "n8n-nodes-base.function",
      "position": [1050, 300],
      "parameters": {
        "functionCode": "// Filter for businesses likely to be traditional/boomer-owned\n// Indicators: low review count, no website, basic presence\n\nconst businesses = items.map(item => {\n  const d = item.json.result;\n  \n  // Score for 'traditional business' likelihood\n  let traditionalScore = 0;\n  if (!d.website) traditionalScore += 30;\n  if (d.user_ratings_total < 50) traditionalScore += 20;\n  if (d.user_ratings_total < 20) traditionalScore += 20;\n  // Businesses operating 10+ years more likely boomer-owned\n  // (Would need additional data source for this)\n  \n  return {\n    json: {\n      business_name: d.name,\n      phone: d.formatted_phone_number,\n      address: d.formatted_address,\n      website: d.website || null,\n      rating: d.rating,\n      review_count: d.user_ratings_total,\n      google_place_id: item.json.place_id,\n      traditional_score: traditionalScore,\n      business_type: $('Get Business Type for Today').first().json.type\n    }\n  };\n}).filter(b => b.json.traditional_score >= 30);\n\nreturn businesses;"
      }
    },
    {
      "name": "Check If Already Exists",
      "type": "n8n-nodes-base.supabase",
      "position": [1250, 300],
      "parameters": {
        "operation": "getAll",
        "tableId": "prospect_businesses",
        "filters": {
          "google_place_id": "={{$json.google_place_id}}"
        }
      }
    },
    {
      "name": "Insert New Prospects",
      "type": "n8n-nodes-base.supabase",
      "position": [1450, 300],
      "parameters": {
        "operation": "insert",
        "tableId": "prospect_businesses",
        "fieldsToSend": {
          "business_type": "={{$json.business_type}}",
          "company_name": "={{$json.business_name}}",
          "phone": "={{$json.phone}}",
          "website": "={{$json.website}}",
          "address": "={{$json.address}}",
          "google_place_id": "={{$json.google_place_id}}",
          "google_rating": "={{$json.rating}}",
          "google_review_count": "={{$json.review_count}}",
          "outreach_status": "new"
        }
      }
    }
  ]
}
```

### Alternative Data Sources

#### Yelp Fusion API
```javascript
// Yelp search for additional coverage
const yelpSearch = await fetch('https://api.yelp.com/v3/businesses/search', {
  headers: { 'Authorization': `Bearer ${YELP_API_KEY}` },
  qs: {
    term: 'handyman',
    location: 'Tampa, FL',
    limit: 50,
    sort_by: 'review_count' // Lower review count = more traditional
  }
});
```

#### Web Scraping (Apify)
For sources without APIs (Yellow Pages, Angi, etc.), use Apify actors:
- `yellow-pages-scraper`
- `google-maps-scraper`
- Custom scrapers for local directories

---

## Workflow 2: Business Enrichment

### Purpose
Add contact information, owner details, and tech stack data to qualify prospects.

### Enrichment Flow

```json
{
  "name": "Business Enrichment Pipeline",
  "nodes": [
    {
      "name": "Get Unenriched Prospects",
      "type": "n8n-nodes-base.supabase",
      "position": [250, 300],
      "parameters": {
        "operation": "getAll",
        "tableId": "prospect_businesses",
        "filters": {
          "enrichment_status": "pending",
          "outreach_status": "new"
        },
        "limit": 50
      }
    },
    {
      "name": "Apollo Person Search",
      "type": "n8n-nodes-base.httpRequest",
      "position": [450, 300],
      "parameters": {
        "url": "https://api.apollo.io/v1/mixed_people/search",
        "method": "POST",
        "headers": {
          "X-Api-Key": "={{$env.APOLLO_API_KEY}}"
        },
        "body": {
          "organization_names": ["={{$json.company_name}}"],
          "person_titles": ["owner", "president", "founder", "ceo"],
          "person_locations": ["Tampa, Florida"]
        }
      }
    },
    {
      "name": "Hunter Email Finder",
      "type": "n8n-nodes-base.httpRequest",
      "position": [450, 450],
      "parameters": {
        "url": "https://api.hunter.io/v2/domain-search",
        "method": "GET",
        "qs": {
          "domain": "={{$json.website ? new URL($json.website).hostname : ''}}",
          "api_key": "={{$env.HUNTER_API_KEY}}"
        }
      }
    },
    {
      "name": "BuiltWith Tech Stack",
      "type": "n8n-nodes-base.httpRequest",
      "position": [450, 600],
      "parameters": {
        "url": "https://api.builtwith.com/v14/api.json",
        "method": "GET",
        "qs": {
          "KEY": "={{$env.BUILTWITH_API_KEY}}",
          "LOOKUP": "={{$json.website}}"
        }
      },
      "notes": "Optional: Identify if they use outdated tech"
    },
    {
      "name": "Merge Enrichment Data",
      "type": "n8n-nodes-base.function",
      "position": [700, 450],
      "parameters": {
        "functionCode": "// Combine data from all sources\nconst prospect = $input.first().json;\nconst apollo = $('Apollo Person Search').first().json;\nconst hunter = $('Hunter Email Finder').first().json;\nconst builtwith = $('BuiltWith Tech Stack').first().json;\n\nreturn [{\n  json: {\n    id: prospect.id,\n    owner_name: apollo?.people?.[0]?.name || null,\n    owner_email: apollo?.people?.[0]?.email || hunter?.emails?.[0]?.value || null,\n    owner_linkedin: apollo?.people?.[0]?.linkedin_url || null,\n    email_confidence: hunter?.emails?.[0]?.confidence || 0,\n    tech_stack: builtwith?.Results?.[0]?.technologies?.map(t => t.Name) || [],\n    uses_outdated_tech: checkOutdatedTech(builtwith),\n    enrichment_status: 'complete',\n    enriched_at: new Date().toISOString()\n  }\n}];\n\nfunction checkOutdatedTech(bw) {\n  const outdated = ['WordPress 4', 'jQuery 1', 'PHP 5'];\n  const techs = bw?.Results?.[0]?.technologies || [];\n  return techs.some(t => outdated.some(o => t.Name.includes(o)));\n}"
      }
    },
    {
      "name": "Update Prospect",
      "type": "n8n-nodes-base.supabase",
      "position": [900, 450],
      "parameters": {
        "operation": "update",
        "tableId": "prospect_businesses",
        "fieldsToSend": {
          "owner_name": "={{$json.owner_name}}",
          "email": "={{$json.owner_email}}",
          "enrichment_data": "={{JSON.stringify($json)}}",
          "enrichment_status": "complete"
        },
        "filters": {
          "id": "={{$json.id}}"
        }
      }
    }
  ]
}
```

---

## Workflow 3: Outreach Campaign

### Multi-Touch Sequence

The outreach follows a value-first approach: offer free qualified leads, then transition to AI transformation services.

### Campaign Structure

**Touch 1: Initial Email (Day 0)**
**Touch 2: SMS Follow-up (Day 2)**
**Touch 3: Value Email - Case Study (Day 5)**
**Touch 4: Phone Call Attempt (Day 7)**
**Touch 5: Final Email (Day 10)**

### Outreach Flow

```json
{
  "name": "Prospect Outreach Campaign",
  "nodes": [
    {
      "name": "Get Ready Prospects",
      "type": "n8n-nodes-base.supabase",
      "position": [250, 300],
      "parameters": {
        "operation": "getAll",
        "tableId": "prospect_businesses",
        "filters": {
          "outreach_status": "new",
          "enrichment_status": "complete",
          "email": { "neq": null }
        },
        "limit": 20
      }
    },
    {
      "name": "Personalize Message",
      "type": "n8n-nodes-base.function",
      "position": [450, 300],
      "parameters": {
        "functionCode": "const prospect = $input.first().json;\n\n// Create personalized outreach based on business type\nconst templates = {\n  handyman: {\n    subject: 'Free Qualified Leads for {{company_name}}?',\n    hook: 'homeowners in Tampa looking for handyman help',\n    pain: 'spending time finding customers instead of doing the work you love'\n  },\n  av: {\n    subject: 'TV Mounting Leads for {{company_name}} - Free?',\n    hook: 'people in Tampa who need help with their tech setup',\n    pain: 'marketing and answering calls instead of doing installations'\n  },\n  pool: {\n    subject: 'Pool Service Leads for {{company_name}}?',\n    hook: 'Tampa pool owners looking for reliable service',\n    pain: 'drumming up business instead of keeping pools clear'\n  },\n  garage: {\n    subject: 'Garage Organization Leads - Free Trial?',\n    hook: 'overwhelmed homeowners ready to reclaim their garages',\n    pain: 'finding customers who are actually ready to act'\n  }\n};\n\nconst t = templates[prospect.business_type];\n\nreturn [{\n  json: {\n    ...prospect,\n    email_subject: t.subject.replace('{{company_name}}', prospect.company_name),\n    email_hook: t.hook,\n    email_pain: t.pain\n  }\n}];"
      }
    },
    {
      "name": "Send Initial Email",
      "type": "n8n-nodes-base.emailSend",
      "position": [650, 300],
      "parameters": {
        "fromEmail": "vikas@vikasbhatia.info",
        "toEmail": "={{$json.email}}",
        "subject": "={{$json.email_subject}}",
        "text": "Hi {{$json.owner_name || 'there'}},\n\nI run a small marketing experiment in Tampa and I've got {{$json.email_hook}} — people who've already expressed interest and are ready to get quotes.\n\nI'm looking for 3-5 reputable local businesses to send these leads to. Completely free, no strings.\n\nWhy? I'm testing some new tech and need real businesses to see if it works. You get free leads. I get data. Win-win.\n\nInterested? Just reply 'YES' and I'll add you to the list.\n\nBest,\nVikas\n\nP.S. - You can opt out anytime. And I promise, no spam — just leads."
      }
    },
    {
      "name": "Update Status",
      "type": "n8n-nodes-base.supabase",
      "position": [850, 300],
      "parameters": {
        "operation": "update",
        "tableId": "prospect_businesses",
        "fieldsToSend": {
          "outreach_status": "contacted",
          "outreach_attempts": "={{$json.outreach_attempts + 1}}",
          "last_outreach_at": "={{new Date().toISOString()}}"
        },
        "filters": {
          "id": "={{$json.id}}"
        }
      }
    },
    {
      "name": "Schedule SMS Follow-up",
      "type": "n8n-nodes-base.wait",
      "position": [850, 450],
      "parameters": {
        "amount": 2,
        "unit": "days"
      }
    },
    {
      "name": "Send SMS",
      "type": "n8n-nodes-base.twilio",
      "position": [1050, 450],
      "parameters": {
        "operation": "send",
        "from": "={{$env.TWILIO_PHONE}}",
        "to": "={{$json.phone}}",
        "message": "Hi {{$json.owner_name || 'there'}} - sent you an email about free leads for {{$json.company_name}}. Worth a look? Reply YES if interested. -Vikas"
      }
    }
  ]
}
```

### Email Templates

#### Touch 1: Initial Outreach
```
Subject: Free Qualified Leads for [Company Name]?

Hi [Owner Name],

I run a small marketing experiment in Tampa and I've got [hook based on business type] — people who've already expressed interest and are ready to get quotes.

I'm looking for 3-5 reputable local businesses to send these leads to. Completely free, no strings.

Why? I'm testing some new tech and need real businesses to see if it works. You get free leads. I get data. Win-win.

Interested? Just reply "YES" and I'll add you to the list.

Best,
Vikas

P.S. - You can opt out anytime. And I promise, no spam — just leads.
```

#### Touch 3: Value Email with Social Proof
```
Subject: Re: Free Qualified Leads for [Company Name]?

Hi [Owner Name],

Quick follow-up on my last email.

Just sent [Business Type] leads to [Another Business Name] this week — they closed 2 out of 3. Not bad for free leads.

Still have spots open if you want in. Just reply "YES" and I'll send the next qualified lead your way.

No cost. No obligation. Just leads.

Best,
Vikas
```

#### Touch 5: Final Email
```
Subject: Last call - free leads for [Company Name]

Hi [Owner Name],

Final check-in on the free lead program.

I've got a [pool service / handyman / etc.] lead in [City/Zip] that needs to go to someone. Happy to send it your way if you want it.

Just reply "YES" and it's yours.

If not, no worries — just wanted to make sure you had the chance before I move on.

Best,
Vikas
```

---

## Workflow 4: Opt-In Processing

### Trigger: Email Reply or SMS Response

```json
{
  "name": "Process Opt-In Response",
  "nodes": [
    {
      "name": "Email Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "parameters": {
        "path": "email-response",
        "method": "POST"
      },
      "notes": "Configure email forwarding to this webhook"
    },
    {
      "name": "Parse Response",
      "type": "n8n-nodes-base.function",
      "position": [450, 300],
      "parameters": {
        "functionCode": "const email = $input.first().json;\n\n// Check if it's a positive response\nconst positivePatterns = ['yes', 'interested', 'sign me up', 'add me', 'sounds good', 'let\\'s do it'];\nconst body = (email.text || email.body || '').toLowerCase();\n\nconst isPositive = positivePatterns.some(p => body.includes(p));\n\nreturn [{\n  json: {\n    from_email: email.from,\n    is_opt_in: isPositive,\n    response_text: body\n  }\n}];"
      }
    },
    {
      "name": "If Opted In",
      "type": "n8n-nodes-base.if",
      "position": [650, 300],
      "parameters": {
        "conditions": {
          "boolean": [
            {
              "value1": "={{$json.is_opt_in}}",
              "value2": true
            }
          ]
        }
      }
    },
    {
      "name": "Find Prospect",
      "type": "n8n-nodes-base.supabase",
      "position": [850, 200],
      "parameters": {
        "operation": "getAll",
        "tableId": "prospect_businesses",
        "filters": {
          "email": "={{$json.from_email}}"
        }
      }
    },
    {
      "name": "Create Business Record",
      "type": "n8n-nodes-base.supabase",
      "position": [1050, 200],
      "parameters": {
        "operation": "insert",
        "tableId": "businesses",
        "fieldsToSend": {
          "business_type": "={{$json.business_type}}",
          "company_name": "={{$json.company_name}}",
          "owner_name": "={{$json.owner_name}}",
          "phone": "={{$json.phone}}",
          "email": "={{$json.email}}",
          "opted_in": true,
          "opt_in_date": "={{new Date().toISOString()}}",
          "lead_credits": 3
        }
      }
    },
    {
      "name": "Update Prospect Status",
      "type": "n8n-nodes-base.supabase",
      "position": [1050, 350],
      "parameters": {
        "operation": "update",
        "tableId": "prospect_businesses",
        "fieldsToSend": {
          "outreach_status": "opted_in"
        },
        "filters": {
          "email": "={{$json.from_email}}"
        }
      }
    },
    {
      "name": "Send Welcome Email",
      "type": "n8n-nodes-base.emailSend",
      "position": [1250, 200],
      "parameters": {
        "fromEmail": "vikas@vikasbhatia.info",
        "toEmail": "={{$json.email}}",
        "subject": "You're in! Here's what happens next",
        "text": "Hi {{$json.owner_name}},\n\nAwesome — you're in the free lead program!\n\nHere's how it works:\n\n1. When I get a qualified lead in your service area, I'll text or email you the details\n2. You decide if you want to follow up (no pressure)\n3. If you close the job, great! If not, no worries\n\nI'll start sending leads your way as they come in. Your first 3 are completely free — consider it a trial run.\n\nQuick question: What ZIP codes or areas do you prefer to work in? Just reply with your service area and I'll make sure to match you with nearby leads.\n\nTalk soon,\nVikas\n\nP.S. - Feel free to text me at [phone] if you have questions."
      }
    },
    {
      "name": "Notify Vikas",
      "type": "n8n-nodes-base.twilio",
      "position": [1250, 350],
      "parameters": {
        "operation": "send",
        "from": "={{$env.TWILIO_PHONE}}",
        "to": "+1XXXXXXXXXX",
        "message": "🎉 New business opted in: {{$json.company_name}} ({{$json.business_type}})"
      }
    }
  ]
}
```

---

## Workflow 5: Lead Handoff to Opted-In Businesses

### Trigger: Qualified Lead Ready for Handoff

```json
{
  "name": "Lead Handoff to Partner Business",
  "nodes": [
    {
      "name": "Qualified Lead Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "parameters": {
        "path": "qualified-lead",
        "method": "POST"
      }
    },
    {
      "name": "Find Matching Business",
      "type": "n8n-nodes-base.supabase",
      "position": [450, 300],
      "parameters": {
        "operation": "getAll",
        "tableId": "businesses",
        "filters": {
          "business_type": "={{$json.business_type}}",
          "opted_in": true,
          "lead_credits": { "gt": 0 }
        },
        "options": {
          "orderBy": "last_lead_sent",
          "order": "asc"
        },
        "limit": 1
      }
    },
    {
      "name": "Prepare Lead Summary",
      "type": "n8n-nodes-base.function",
      "position": [650, 300],
      "parameters": {
        "functionCode": "const lead = $('Qualified Lead Webhook').first().json;\nconst business = $input.first().json;\n\nconst summary = `\n🔔 NEW LEAD for ${business.company_name}\n\nCustomer: ${lead.name}\nPhone: ${lead.phone}\nService: ${lead.service_needed}\nArea: ${lead.zip_code || lead.city}\nTimeline: ${lead.timeline}\nBudget: ${lead.budget_range || 'Not specified'}\n\nNotes: ${lead.qualification_notes || 'None'}\n\n💡 Reply ACCEPT to claim this lead or PASS to skip.\n`;\n\nreturn [{\n  json: {\n    business_id: business.id,\n    business_phone: business.phone,\n    business_email: business.email,\n    business_name: business.company_name,\n    preferred_contact: business.preferred_contact,\n    lead_id: lead.id,\n    lead_summary: summary\n  }\n}];"
      }
    },
    {
      "name": "Send via Preferred Method",
      "type": "n8n-nodes-base.switch",
      "position": [850, 300],
      "parameters": {
        "rules": [
          {
            "conditions": [
              {
                "field": "={{$json.preferred_contact}}",
                "operation": "equals",
                "value": "sms"
              }
            ],
            "output": 0
          },
          {
            "conditions": [
              {
                "field": "={{$json.preferred_contact}}",
                "operation": "equals",
                "value": "email"
              }
            ],
            "output": 1
          }
        ]
      }
    },
    {
      "name": "Send SMS",
      "type": "n8n-nodes-base.twilio",
      "position": [1050, 200],
      "parameters": {
        "operation": "send",
        "from": "={{$env.TWILIO_PHONE}}",
        "to": "={{$json.business_phone}}",
        "message": "={{$json.lead_summary}}"
      }
    },
    {
      "name": "Send Email",
      "type": "n8n-nodes-base.emailSend",
      "position": [1050, 400],
      "parameters": {
        "fromEmail": "vikas@vikasbhatia.info",
        "toEmail": "={{$json.business_email}}",
        "subject": "New Lead: {{$json.lead_summary.split('\\n')[0]}}",
        "text": "={{$json.lead_summary}}"
      }
    },
    {
      "name": "Log Handoff",
      "type": "n8n-nodes-base.supabase",
      "position": [1250, 300],
      "parameters": {
        "operation": "insert",
        "tableId": "lead_handoffs",
        "fieldsToSend": {
          "lead_id": "={{$json.lead_id}}",
          "business_id": "={{$json.business_id}}",
          "sent_via": "={{$json.preferred_contact}}",
          "message_content": "={{$json.lead_summary}}"
        }
      }
    },
    {
      "name": "Update Business",
      "type": "n8n-nodes-base.supabase",
      "position": [1250, 450],
      "parameters": {
        "operation": "update",
        "tableId": "businesses",
        "fieldsToSend": {
          "leads_received": "={{$json.leads_received + 1}}",
          "lead_credits": "={{$json.lead_credits - 1}}",
          "last_lead_sent": "={{new Date().toISOString()}}"
        },
        "filters": {
          "id": "={{$json.business_id}}"
        }
      }
    }
  ]
}
```

---

## Environment Variables Required

```env
# Google APIs
GOOGLE_MAPS_API_KEY=your_key

# Enrichment APIs
APOLLO_API_KEY=your_key
HUNTER_API_KEY=your_key
BUILTWITH_API_KEY=your_key  # Optional

# Communication
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE=+1XXXXXXXXXX

# Supabase
SUPABASE_URL=your_url
SUPABASE_SERVICE_KEY=your_key

# Email (SMTP or service)
SMTP_HOST=smtp.example.com
SMTP_USER=your_user
SMTP_PASS=your_pass
```

---

## Metrics & Tracking

### Key Metrics to Monitor

1. **Discovery Rate:** New prospects found per week
2. **Enrichment Rate:** % of prospects with valid email/phone
3. **Open Rate:** Email open rate (use tracking pixels)
4. **Response Rate:** % of prospects who reply
5. **Opt-In Rate:** % of responses that are positive
6. **Lead Acceptance Rate:** % of leads accepted by businesses
7. **Conversion Rate:** % of leads that become jobs
8. **Time to Conversion:** Average days from lead to consultation request

### Dashboard Query Examples

```sql
-- Weekly prospect funnel
SELECT 
  date_trunc('week', created_at) as week,
  COUNT(*) as discovered,
  COUNT(*) FILTER (WHERE enrichment_status = 'complete') as enriched,
  COUNT(*) FILTER (WHERE outreach_status = 'contacted') as contacted,
  COUNT(*) FILTER (WHERE outreach_status = 'responded') as responded,
  COUNT(*) FILTER (WHERE outreach_status = 'opted_in') as opted_in
FROM prospect_businesses
GROUP BY 1
ORDER BY 1 DESC;

-- Business partner performance
SELECT 
  b.company_name,
  b.business_type,
  b.leads_received,
  b.leads_converted,
  ROUND(b.leads_converted::numeric / NULLIF(b.leads_received, 0) * 100, 1) as conversion_rate
FROM businesses b
WHERE b.opted_in = true
ORDER BY leads_received DESC;
```

---

## Compliance Notes

### CAN-SPAM Compliance
- Include physical address in emails
- Include unsubscribe link
- Honor opt-out requests within 10 days
- Don't use deceptive subject lines

### TCPA Compliance (SMS)
- Only text businesses, not consumers
- Include opt-out instructions
- Keep records of consent

### Best Practices
- Respect opt-outs immediately
- Don't send more than 1 SMS per lead offer
- Keep email cadence reasonable (max 5 touches)
- Be transparent about why you're reaching out

---

## Next Steps After Opt-In

Once a business receives free leads and sees value, the transition conversation:

1. **After 3 Free Leads:** Check in on quality and conversion
2. **Offer Paid Leads:** Introduce paid lead program
3. **AI Transformation Pitch:** "Want to handle these leads automatically with AI?"
4. **Consultation:** Schedule demo of full AI transformation
