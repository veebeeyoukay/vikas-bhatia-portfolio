# PRD: AI-Powered Lead Generation & Business Transformation Demo Platform

## Executive Summary

Build a multi-business lead generation platform to capture inbound leads for four virtual service businesses, qualify them via AI voice/text agents, and hand them off to real businesses as proof of AI transformation capabilities. This serves as a sales tool for AI consulting services targeting baby boomer-owned businesses.

---

## Project Context

**Repository:** vikasbhatia.info (React/TypeScript with Supabase backend)
**Domain Strategy:** Subdirectory routing (vikasbhatia.info/tampa-{service})
**Voice/Text Platform:** Lindy.ai for inbound, custom outbound agents
**Automation Platform:** n8n for workflow orchestration
**Target Market:** Tampa Bay area service businesses

---

## Business Objectives

1. Generate real inbound leads for four service categories
2. Demonstrate AI-powered lead qualification and routing
3. Build relationships with traditional business owners by providing free qualified leads
4. Convert business owners into AI transformation consulting clients

---

## Technical Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           INBOUND CHANNELS                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Landing Pages          Phone/SMS              WhatsApp                      │
│  /tampa-handyman        Lindy.ai Number        Lindy.ai Integration          │
│  /tampa-av              (single number)        (same number)                 │
│  /tampa-pool                                                                 │
│  /tampa-garage                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        INBOUND AI AGENT (Lindy)                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  • Identify service type from keyword or conversation context                │
│  • Greet caller with appropriate business persona                            │
│  • Capture: name, phone, email, address, service needed                      │
│  • Basic qualification: timeline, budget range, scope                        │
│  • Log to Supabase via webhook                                               │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SUPABASE DATABASE                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  leads table                    businesses table                             │
│  ├── id (uuid)                  ├── id (uuid)                                │
│  ├── business_type              ├── business_type                            │
│  ├── name                       ├── company_name                             │
│  ├── phone                      ├── owner_name                               │
│  ├── email                      ├── phone                                    │
│  ├── address                    ├── email                                    │
│  ├── city                       ├── service_area                             │
│  ├── zip_code                   ├── opted_in                                 │
│  ├── service_needed             ├── lead_credits                             │
│  ├── service_details            ├── created_at                               │
│  ├── timeline                   └── last_lead_sent                           │
│  ├── budget_range                                                            │
│  ├── source (web/lindy/text)    lead_handoffs table                          │
│  ├── source_keyword             ├── id (uuid)                                │
│  ├── qualification_score        ├── lead_id (fk)                             │
│  ├── qualification_notes        ├── business_id (fk)                         │
│  ├── status                     ├── sent_at                                  │
│  ├── created_at                 ├── response_status                          │
│  ├── qualified_at               └── conversion_status                        │
│  └── handed_off_at                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      n8n WORKFLOW ORCHESTRATION                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Trigger: Supabase webhook on new lead                                       │
│                                                                              │
│  1. New Lead Workflow                                                        │
│     └── Trigger outbound qualification agent                                 │
│                                                                              │
│  2. Qualified Lead Workflow                                                  │
│     ├── Find matching opted-in business                                      │
│     ├── Send lead details to business                                        │
│     └── Log handoff in database                                              │
│                                                                              │
│  3. Business Prospecting Workflow                                            │
│     ├── Search Google Maps API for similar businesses                        │
│     ├── Enrich with business details                                         │
│     ├── Outreach via email/SMS                                               │
│     └── Track opt-in conversions                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    OUTBOUND QUALIFICATION AGENT                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Platform: Lindy.ai or Bland.ai or custom                                    │
│                                                                              │
│  Trigger: n8n webhook after inbound lead captured                            │
│                                                                              │
│  Script Flow:                                                                │
│  1. Introduce as [Business Name] callback                                    │
│  2. Confirm service needed                                                   │
│  3. Gather detailed requirements:                                            │
│     - Specific work description                                              │
│     - Property details (size, access, etc.)                                  │
│     - Preferred dates/times                                                  │
│     - Budget expectations                                                    │
│     - Decision timeline                                                      │
│  4. Set expectations for next steps                                          │
│  5. Update Supabase with qualification data                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Landing Pages & Database

### 1.1 Supabase Schema

Create the following tables in Supabase:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leads table
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_type VARCHAR(50) NOT NULL CHECK (business_type IN ('handyman', 'av', 'pool', 'garage')),
    
    -- Contact info
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    address TEXT,
    city VARCHAR(100) DEFAULT 'Tampa',
    zip_code VARCHAR(10),
    
    -- Service details
    service_needed TEXT NOT NULL,
    service_details JSONB DEFAULT '{}',
    timeline VARCHAR(50), -- 'asap', 'this_week', 'this_month', 'flexible'
    budget_range VARCHAR(50), -- 'under_100', '100_250', '250_500', '500_1000', 'over_1000'
    
    -- Source tracking
    source VARCHAR(50) NOT NULL CHECK (source IN ('web', 'lindy_call', 'lindy_sms', 'whatsapp')),
    source_keyword VARCHAR(50), -- HANDY, POOL, AV, GARAGE
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    
    -- Qualification
    qualification_score INTEGER DEFAULT 0 CHECK (qualification_score >= 0 AND qualification_score <= 100),
    qualification_notes TEXT,
    qualified_by VARCHAR(50), -- 'inbound_agent', 'outbound_agent', 'manual'
    
    -- Status tracking
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualifying', 'qualified', 'handed_off', 'converted', 'lost')),
    
    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    contacted_at TIMESTAMPTZ,
    qualified_at TIMESTAMPTZ,
    handed_off_at TIMESTAMPTZ
);

-- Businesses table (for handoff recipients)
CREATE TABLE businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_type VARCHAR(50) NOT NULL CHECK (business_type IN ('handyman', 'av', 'pool', 'garage')),
    
    -- Business info
    company_name VARCHAR(255) NOT NULL,
    owner_name VARCHAR(255),
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    website VARCHAR(255),
    
    -- Service area
    service_area JSONB DEFAULT '[]', -- Array of zip codes or city names
    service_radius_miles INTEGER DEFAULT 25,
    
    -- Lead program
    opted_in BOOLEAN DEFAULT FALSE,
    opt_in_date TIMESTAMPTZ,
    lead_credits INTEGER DEFAULT 3, -- Free leads to start
    leads_received INTEGER DEFAULT 0,
    leads_converted INTEGER DEFAULT 0,
    
    -- Contact preferences
    preferred_contact VARCHAR(50) DEFAULT 'sms' CHECK (preferred_contact IN ('call', 'sms', 'email', 'whatsapp')),
    contact_hours_start TIME DEFAULT '08:00',
    contact_hours_end TIME DEFAULT '18:00',
    
    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    last_lead_sent TIMESTAMPTZ
);

-- Lead handoffs tracking
CREATE TABLE lead_handoffs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    
    -- Handoff details
    sent_at TIMESTAMPTZ DEFAULT NOW(),
    sent_via VARCHAR(50) CHECK (sent_via IN ('sms', 'email', 'call', 'whatsapp')),
    message_content TEXT,
    
    -- Response tracking
    response_status VARCHAR(50) DEFAULT 'pending' CHECK (response_status IN ('pending', 'accepted', 'declined', 'no_response')),
    response_at TIMESTAMPTZ,
    response_notes TEXT,
    
    -- Conversion tracking
    conversion_status VARCHAR(50) DEFAULT 'unknown' CHECK (conversion_status IN ('unknown', 'won', 'lost', 'pending')),
    conversion_value DECIMAL(10, 2),
    conversion_notes TEXT
);

-- Prospect businesses (for outreach)
CREATE TABLE prospect_businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_type VARCHAR(50) NOT NULL,
    
    -- Business info from scraping
    company_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    
    -- Google Maps data
    google_place_id VARCHAR(255),
    google_rating DECIMAL(2, 1),
    google_review_count INTEGER,
    
    -- Outreach tracking
    outreach_status VARCHAR(50) DEFAULT 'new' CHECK (outreach_status IN ('new', 'contacted', 'responded', 'opted_in', 'declined', 'unresponsive')),
    outreach_attempts INTEGER DEFAULT 0,
    last_outreach_at TIMESTAMPTZ,
    
    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(google_place_id)
);

-- Create indexes for performance
CREATE INDEX idx_leads_business_type ON leads(business_type);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_businesses_business_type ON businesses(business_type);
CREATE INDEX idx_businesses_opted_in ON businesses(opted_in);
CREATE INDEX idx_prospect_businesses_type ON prospect_businesses(business_type);
CREATE INDEX idx_prospect_businesses_status ON prospect_businesses(outreach_status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all tables
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_businesses_updated_at BEFORE UPDATE ON businesses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_prospect_businesses_updated_at BEFORE UPDATE ON prospect_businesses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### 1.2 Supabase Edge Functions

Create webhook endpoints for external integrations:

```sql
-- Enable HTTP extension for webhooks
CREATE EXTENSION IF NOT EXISTS http;
```

**File: supabase/functions/lead-webhook/index.ts**
```typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const body = await req.json()
    
    // Determine business type from keyword or explicit field
    const businessType = body.business_type || detectBusinessType(body.keyword || body.message)
    
    const lead = {
      business_type: businessType,
      name: body.name || 'Unknown',
      phone: body.phone,
      email: body.email,
      address: body.address,
      city: body.city || 'Tampa',
      zip_code: body.zip_code,
      service_needed: body.service_needed || body.message,
      source: body.source || 'lindy_call',
      source_keyword: body.keyword,
      status: 'new'
    }

    const { data, error } = await supabaseClient
      .from('leads')
      .insert([lead])
      .select()

    if (error) throw error

    // Trigger n8n workflow for outbound qualification
    await triggerN8nWorkflow(data[0])

    return new Response(
      JSON.stringify({ success: true, lead_id: data[0].id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

function detectBusinessType(text: string): string {
  const lower = (text || '').toLowerCase()
  if (lower.includes('handy') || lower.includes('repair') || lower.includes('fix')) return 'handyman'
  if (lower.includes('av') || lower.includes('tv') || lower.includes('tech') || lower.includes('wifi')) return 'av'
  if (lower.includes('pool') || lower.includes('swim')) return 'pool'
  if (lower.includes('garage') || lower.includes('clutter') || lower.includes('organiz')) return 'garage'
  return 'handyman' // default
}

async function triggerN8nWorkflow(lead: any) {
  const n8nWebhookUrl = Deno.env.get('N8N_NEW_LEAD_WEBHOOK')
  if (!n8nWebhookUrl) return
  
  await fetch(n8nWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead)
  })
}
```

### 1.3 React Components

#### Directory Structure
```
src/
├── components/
│   └── landing/
│       ├── LandingTemplate.tsx
│       ├── ServiceForm.tsx
│       ├── ServiceCard.tsx
│       ├── TestimonialSection.tsx
│       ├── CTASection.tsx
│       └── index.ts
├── pages/
│   └── landing/
│       ├── HandymanLanding.tsx
│       ├── AVLanding.tsx
│       ├── PoolLanding.tsx
│       └── GarageLanding.tsx
├── hooks/
│   └── useLeadSubmission.ts
├── types/
│   └── landing.ts
└── config/
    └── businesses.ts
```

#### Type Definitions

**File: src/types/landing.ts**
```typescript
export type BusinessType = 'handyman' | 'av' | 'pool' | 'garage';

export interface BusinessConfig {
  type: BusinessType;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  primaryColor: string;
  secondaryColor: string;
  services: ServiceItem[];
  faqs: FAQItem[];
  smsKeyword: string;
  phoneNumber: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  priceRange?: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  zipCode?: string;
  serviceNeeded: string;
  timeline?: string;
  budgetRange?: string;
  additionalNotes?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  leadId?: string;
  error?: string;
}
```

#### Business Configuration

**File: src/config/businesses.ts**
```typescript
import { BusinessConfig } from '../types/landing';

export const PHONE_NUMBER = '+1XXXXXXXXXX'; // Your Lindy number

export const businessConfigs: Record<string, BusinessConfig> = {
  handyman: {
    type: 'handyman',
    name: 'Tampa Home Fix',
    tagline: 'Your Trusted Local Handyman',
    description: 'Professional handyman services for all your home repair and improvement needs. No job too small.',
    heroImage: '/images/handyman-hero.jpg',
    primaryColor: '#2563eb', // Blue
    secondaryColor: '#1e40af',
    smsKeyword: 'HANDY',
    phoneNumber: PHONE_NUMBER,
    services: [
      {
        title: 'General Repairs',
        description: 'Drywall, doors, windows, and general fixes',
        priceRange: '$75-200',
        icon: 'wrench'
      },
      {
        title: 'Furniture Assembly',
        description: 'IKEA, office furniture, outdoor sets',
        priceRange: '$50-150',
        icon: 'package'
      },
      {
        title: 'Mounting & Installation',
        description: 'Shelves, mirrors, curtain rods, fixtures',
        priceRange: '$50-125',
        icon: 'ruler'
      },
      {
        title: 'Minor Plumbing',
        description: 'Faucet repairs, toilet fixes, leak repairs',
        priceRange: '$75-200',
        icon: 'droplet'
      },
      {
        title: 'Electrical Basics',
        description: 'Outlets, switches, light fixtures',
        priceRange: '$75-175',
        icon: 'zap'
      },
      {
        title: 'Honey-Do Lists',
        description: 'Multiple small tasks in one visit',
        priceRange: '$150-400',
        icon: 'list'
      }
    ],
    faqs: [
      {
        question: 'How quickly can you come out?',
        answer: 'We typically schedule within 2-3 business days, with same-week availability for most jobs.'
      },
      {
        question: 'Do you provide free estimates?',
        answer: 'Yes! We provide free estimates for all jobs. For smaller tasks, we can often quote over the phone.'
      },
      {
        question: 'Are you licensed and insured?',
        answer: 'Yes, we are fully licensed and insured for your protection.'
      },
      {
        question: 'What areas do you serve?',
        answer: 'We serve Tampa and surrounding areas including Brandon, Clearwater, St. Petersburg, and more.'
      }
    ]
  },
  
  av: {
    type: 'av',
    name: 'TechEase Tampa',
    tagline: 'Home Technology Made Simple',
    description: 'Professional AV installation and tech support for your home. From TV mounting to whole-home WiFi.',
    heroImage: '/images/av-hero.jpg',
    primaryColor: '#7c3aed', // Purple
    secondaryColor: '#5b21b6',
    smsKeyword: 'AV',
    phoneNumber: PHONE_NUMBER,
    services: [
      {
        title: 'TV Mounting',
        description: 'Wall mounting with cable concealment',
        priceRange: '$150-350',
        icon: 'tv'
      },
      {
        title: 'Home Theater Setup',
        description: 'Soundbar, surround sound, streaming devices',
        priceRange: '$200-500',
        icon: 'speaker'
      },
      {
        title: 'WiFi Optimization',
        description: 'Router setup, mesh networks, dead zone elimination',
        priceRange: '$100-300',
        icon: 'wifi'
      },
      {
        title: 'Smart Home Setup',
        description: 'Alexa, Google Home, smart switches, thermostats',
        priceRange: '$150-400',
        icon: 'home'
      },
      {
        title: 'Security Cameras',
        description: 'Ring, Nest, Arlo installation and setup',
        priceRange: '$200-500',
        icon: 'video'
      },
      {
        title: 'Tech Support Visit',
        description: 'Computer, printer, device troubleshooting',
        priceRange: '$75-150',
        icon: 'help-circle'
      }
    ],
    faqs: [
      {
        question: 'Can you hide the TV cables in the wall?',
        answer: 'Yes! We offer professional cable concealment including in-wall cable routing for a clean look.'
      },
      {
        question: 'Do you set up streaming services?',
        answer: 'Absolutely. We\'ll configure all your streaming apps and show you how to use them.'
      },
      {
        question: 'Can you help with slow WiFi?',
        answer: 'Yes, we diagnose WiFi issues and recommend solutions from simple fixes to mesh network installations.'
      },
      {
        question: 'Do you work with all TV brands?',
        answer: 'We work with all major brands including Samsung, LG, Sony, TCL, Vizio, and more.'
      }
    ]
  },
  
  pool: {
    type: 'pool',
    name: 'ClearWater Pool Care',
    tagline: 'Crystal Clear Pools, Zero Hassle',
    description: 'Professional above-ground pool maintenance and care. Keep your pool swim-ready all season.',
    heroImage: '/images/pool-hero.jpg',
    primaryColor: '#0891b2', // Cyan
    secondaryColor: '#0e7490',
    smsKeyword: 'POOL',
    phoneNumber: PHONE_NUMBER,
    services: [
      {
        title: 'Weekly Maintenance',
        description: 'Chemical balancing, skimming, filter cleaning',
        priceRange: '$80-120/visit',
        icon: 'calendar'
      },
      {
        title: 'Pool Opening',
        description: 'Seasonal startup and chemical balancing',
        priceRange: '$150-250',
        icon: 'sun'
      },
      {
        title: 'Pool Closing',
        description: 'Winterization and cover installation',
        priceRange: '$150-250',
        icon: 'cloud'
      },
      {
        title: 'Green Pool Recovery',
        description: 'Algae treatment and water restoration',
        priceRange: '$200-400',
        icon: 'refresh-cw'
      },
      {
        title: 'Filter Service',
        description: 'Filter cleaning, replacement, pump service',
        priceRange: '$75-200',
        icon: 'filter'
      },
      {
        title: 'Equipment Check',
        description: 'Pump, filter, liner inspection',
        priceRange: '$75-125',
        icon: 'search'
      }
    ],
    faqs: [
      {
        question: 'How often should I have my pool serviced?',
        answer: 'We recommend weekly service during swim season for optimal water quality and equipment longevity.'
      },
      {
        question: 'Do you service all above-ground pool types?',
        answer: 'Yes, we service Intex, Bestway, Coleman, and all major above-ground pool brands.'
      },
      {
        question: 'What if my pool is green?',
        answer: 'We specialize in green pool recovery. Most pools can be restored to crystal clear in 3-5 days.'
      },
      {
        question: 'Do you provide the chemicals?',
        answer: 'Yes, all chemicals are included in our service visits. No surprise costs.'
      }
    ]
  },
  
  garage: {
    type: 'garage',
    name: 'GarageRescue Tampa',
    tagline: 'Reclaim Your Garage Space',
    description: 'Professional garage cleanout, organization, and storage solutions. Turn chaos into order.',
    heroImage: '/images/garage-hero.jpg',
    primaryColor: '#ea580c', // Orange
    secondaryColor: '#c2410c',
    smsKeyword: 'GARAGE',
    phoneNumber: PHONE_NUMBER,
    services: [
      {
        title: 'Full Cleanout',
        description: 'Complete garage clearing and debris removal',
        priceRange: '$300-600',
        icon: 'trash-2'
      },
      {
        title: 'Organization System',
        description: 'Custom shelving, pegboards, tool storage',
        priceRange: '$400-1000',
        icon: 'grid'
      },
      {
        title: 'Declutter & Sort',
        description: 'Sort, donate, dispose decision assistance',
        priceRange: '$150-300',
        icon: 'layers'
      },
      {
        title: 'Storage Solutions',
        description: 'Overhead storage, cabinet installation',
        priceRange: '$500-1500',
        icon: 'archive'
      },
      {
        title: 'Floor Coating',
        description: 'Epoxy floor coating consultation & referral',
        priceRange: 'Quote',
        icon: 'square'
      },
      {
        title: 'Seasonal Rotation',
        description: 'Holiday/seasonal item organization',
        priceRange: '$100-200',
        icon: 'rotate-cw'
      }
    ],
    faqs: [
      {
        question: 'How long does a full cleanout take?',
        answer: 'Most single-car garages take 4-6 hours, double garages 6-8 hours depending on contents.'
      },
      {
        question: 'Do you haul away junk?',
        answer: 'Yes! We handle all disposal including donation drop-offs and dump runs.'
      },
      {
        question: 'Can you install shelving?',
        answer: 'Yes, we install wall-mounted shelving, pegboards, and overhead storage systems.'
      },
      {
        question: 'What if I need help deciding what to keep?',
        answer: 'Our declutter service includes sorting assistance. We help you make keep/donate/trash decisions.'
      }
    ]
  }
};
```

#### Landing Template Component

**File: src/components/landing/LandingTemplate.tsx**
```tsx
import React from 'react';
import { BusinessConfig } from '../../types/landing';
import ServiceForm from './ServiceForm';
import ServiceCard from './ServiceCard';
import CTASection from './CTASection';
import * as Icons from 'lucide-react';

interface LandingTemplateProps {
  config: BusinessConfig;
}

const LandingTemplate: React.FC<LandingTemplateProps> = ({ config }) => {
  const primaryStyle = { backgroundColor: config.primaryColor };
  const secondaryStyle = { backgroundColor: config.secondaryColor };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header 
        className="relative py-20 px-4 text-white"
        style={primaryStyle}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {config.name}
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                {config.tagline}
              </p>
              <p className="text-lg mb-8 opacity-80">
                {config.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${config.phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  <Icons.Phone size={20} />
                  Call Now
                </a>
                <a 
                  href={`sms:${config.phoneNumber}?body=${config.smsKeyword}`}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  <Icons.MessageSquare size={20} />
                  Text {config.smsKeyword}
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Placeholder for hero image */}
              <div className="bg-white/20 rounded-xl aspect-video flex items-center justify-center">
                <Icons.Image size={64} className="opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                primaryColor={config.primaryColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: `${config.primaryColor}10` }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
          <ServiceForm 
            businessType={config.type}
            services={config.services}
            primaryColor={config.primaryColor}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {config.faqs.map((faq, index) => (
              <details 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium hover:bg-gray-50">
                  {faq.question}
                </summary>
                <div className="px-6 py-4 border-t border-gray-100 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection config={config} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl font-semibold mb-2">{config.name}</p>
          <p className="text-gray-400 mb-4">Serving Tampa Bay Area</p>
          <div className="flex justify-center gap-6">
            <a href={`tel:${config.phoneNumber}`} className="hover:text-gray-300">
              <Icons.Phone size={24} />
            </a>
            <a href={`sms:${config.phoneNumber}`} className="hover:text-gray-300">
              <Icons.MessageSquare size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingTemplate;
```

#### Service Form Component

**File: src/components/landing/ServiceForm.tsx**
```tsx
import React, { useState } from 'react';
import { BusinessType, ServiceItem, LeadFormData } from '../../types/landing';
import { useLeadSubmission } from '../../hooks/useLeadSubmission';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface ServiceFormProps {
  businessType: BusinessType;
  services: ServiceItem[];
  primaryColor: string;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ 
  businessType, 
  services,
  primaryColor 
}) => {
  const { submitLead, isSubmitting, result } = useLeadSubmission();
  
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    zipCode: '',
    serviceNeeded: '',
    timeline: '',
    additionalNotes: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead(businessType, formData);
  };

  if (result?.success) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <CheckCircle size={64} className="mx-auto mb-4 text-green-500" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your request and will call you back within 24 hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
    >
      {result?.error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
          <AlertCircle size={20} />
          <span>{result.error}</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(813) 555-1234"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="john@email.com"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="123 Main St"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ZIP Code
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="33601"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Service Needed *
        </label>
        <select
          name="serviceNeeded"
          required
          value={formData.serviceNeeded}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a service...</option>
          {services.map((service, index) => (
            <option key={index} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          When do you need this done?
        </label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select timeline...</option>
          <option value="asap">As soon as possible</option>
          <option value="this_week">This week</option>
          <option value="this_month">This month</option>
          <option value="flexible">Flexible / Just getting quotes</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          name="additionalNotes"
          rows={4}
          value={formData.additionalNotes}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell us more about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ backgroundColor: primaryColor }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Submitting...
          </>
        ) : (
          'Get My Free Quote'
        )}
      </button>

      <p className="text-center text-sm text-gray-500">
        We'll call you back within 24 hours. No spam, guaranteed.
      </p>
    </form>
  );
};

export default ServiceForm;
```

#### Lead Submission Hook

**File: src/hooks/useLeadSubmission.ts**
```typescript
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { BusinessType, LeadFormData, LeadSubmissionResult } from '../types/landing';

export function useLeadSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<LeadSubmissionResult | null>(null);

  const submitLead = async (businessType: BusinessType, formData: LeadFormData) => {
    setIsSubmitting(true);
    setResult(null);

    try {
      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      
      const { data, error } = await supabase
        .from('leads')
        .insert([{
          business_type: businessType,
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          address: formData.address || null,
          zip_code: formData.zipCode || null,
          service_needed: formData.serviceNeeded,
          service_details: {
            additional_notes: formData.additionalNotes
          },
          timeline: formData.timeline || null,
          source: 'web',
          utm_source: urlParams.get('utm_source'),
          utm_medium: urlParams.get('utm_medium'),
          utm_campaign: urlParams.get('utm_campaign'),
          status: 'new'
        }])
        .select()
        .single();

      if (error) throw error;

      setResult({ success: true, leadId: data.id });
    } catch (error: any) {
      setResult({ 
        success: false, 
        error: error.message || 'Failed to submit. Please try again or call us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitLead, isSubmitting, result };
}
```

#### Page Components

**File: src/pages/landing/HandymanLanding.tsx**
```tsx
import React from 'react';
import LandingTemplate from '../../components/landing/LandingTemplate';
import { businessConfigs } from '../../config/businesses';

const HandymanLanding: React.FC = () => {
  return <LandingTemplate config={businessConfigs.handyman} />;
};

export default HandymanLanding;
```

**File: src/pages/landing/AVLanding.tsx**
```tsx
import React from 'react';
import LandingTemplate from '../../components/landing/LandingTemplate';
import { businessConfigs } from '../../config/businesses';

const AVLanding: React.FC = () => {
  return <LandingTemplate config={businessConfigs.av} />;
};

export default AVLanding;
```

**File: src/pages/landing/PoolLanding.tsx**
```tsx
import React from 'react';
import LandingTemplate from '../../components/landing/LandingTemplate';
import { businessConfigs } from '../../config/businesses';

const PoolLanding: React.FC = () => {
  return <LandingTemplate config={businessConfigs.pool} />;
};

export default PoolLanding;
```

**File: src/pages/landing/GarageLanding.tsx**
```tsx
import React from 'react';
import LandingTemplate from '../../components/landing/LandingTemplate';
import { businessConfigs } from '../../config/businesses';

const GarageLanding: React.FC = () => {
  return <LandingTemplate config={businessConfigs.garage} />;
};

export default GarageLanding;
```

#### Router Configuration

**Add to your existing router (e.g., App.tsx or router.tsx):**
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HandymanLanding from './pages/landing/HandymanLanding';
import AVLanding from './pages/landing/AVLanding';
import PoolLanding from './pages/landing/PoolLanding';
import GarageLanding from './pages/landing/GarageLanding';

// Add these routes to your existing Routes
<Route path="/tampa-handyman" element={<HandymanLanding />} />
<Route path="/tampa-av" element={<AVLanding />} />
<Route path="/tampa-pool" element={<PoolLanding />} />
<Route path="/tampa-garage" element={<GarageLanding />} />
```

---

## Phase 2: Inbound Voice Agent (Lindy.ai)

### 2.1 Lindy Agent Configuration

Create a single Lindy agent that handles all four business types:

**Agent Name:** Tampa Services Inbound Agent

**System Prompt:**
```
You are an AI receptionist handling calls for multiple home service businesses in Tampa, Florida. Your job is to warmly greet callers, identify which service they need, capture their information, and set expectations.

## Business Detection

Listen for keywords to identify which business they're calling about:
- HANDYMAN keywords: repair, fix, broken, handyman, mount, install, honey-do
- AV/TECH keywords: TV, mount, WiFi, internet, smart home, Alexa, camera, tech
- POOL keywords: pool, swim, water, green pool, chemicals, filter
- GARAGE keywords: garage, organize, cleanout, clutter, storage, junk

If they texted a keyword (HANDY, AV, POOL, GARAGE), use that to identify the business.

## Business Personas

Once identified, adopt the appropriate persona:

**Tampa Home Fix (Handyman)**
"Hi, thanks for calling Tampa Home Fix! This is Alex. How can I help you with your home repair today?"

**TechEase Tampa (AV/Tech)**
"Hi, thanks for calling TechEase Tampa! This is Jordan. What tech challenge can I help you solve today?"

**ClearWater Pool Care (Pool)**
"Hi, thanks for calling ClearWater Pool Care! This is Sam. How can I help you keep your pool crystal clear?"

**GarageRescue Tampa (Garage)**
"Hi, thanks for calling GarageRescue Tampa! This is Casey. Ready to help you reclaim your garage space! What's going on?"

## Information to Collect

1. **Name** - First and last name
2. **Phone** - Confirm the number they're calling from or get a callback number
3. **Service Needed** - What specific service or problem do they have?
4. **Address/Area** - City or ZIP code (default Tampa)
5. **Timeline** - When do they need this done? (ASAP, this week, this month, flexible)

## Closing

After collecting information:
"Great! I've got all your info. One of our technicians will call you back within [timeframe based on timeline] to discuss your [service] project in detail and give you an accurate quote. Is there anything else I can help you with?"

## Important Notes
- Be warm, friendly, and conversational
- Don't ask all questions at once - have a natural conversation
- If they're calling about an emergency (water leak, no power), let them know we primarily handle scheduled work but can try to accommodate
- Always confirm the callback number
- Thank them for choosing [business name]
```

**Webhook Configuration:**
- Endpoint: `https://[your-supabase-project].supabase.co/functions/v1/lead-webhook`
- Method: POST
- Payload template:
```json
{
  "source": "lindy_call",
  "keyword": "{{detected_keyword}}",
  "name": "{{customer_name}}",
  "phone": "{{customer_phone}}",
  "service_needed": "{{service_description}}",
  "address": "{{customer_address}}",
  "city": "{{customer_city}}",
  "zip_code": "{{customer_zip}}",
  "timeline": "{{timeline}}"
}
```

### 2.2 SMS Keyword Routing

Configure Lindy to handle incoming SMS with keywords:

**SMS Auto-Response Templates:**

**HANDY keyword:**
```
Thanks for texting Tampa Home Fix! 🔧

What home repair can we help you with? Reply with a brief description and we'll call you back within 24 hours.

Or call us now at [phone number]
```

**AV keyword:**
```
Thanks for texting TechEase Tampa! 📺

What tech project can we help with? TV mounting, WiFi, smart home, or something else? Reply with details and we'll call you back within 24 hours.

Or call us now at [phone number]
```

**POOL keyword:**
```
Thanks for texting ClearWater Pool Care! 🏊

How can we help with your pool? Weekly service, green pool recovery, or something else? Reply with details and we'll call you back within 24 hours.

Or call us now at [phone number]
```

**GARAGE keyword:**
```
Thanks for texting GarageRescue Tampa! 🚗

Ready to reclaim your garage? Tell us a bit about your situation - cleanout, organization, or storage solutions? Reply with details and we'll call you back within 24 hours.

Or call us now at [phone number]
```

---

## Phase 3: Outbound Qualification Agent

### 3.1 Outbound Agent Configuration

This agent calls back web leads to gather detailed qualification information.

**Platform Options:**
1. Lindy.ai (if supports outbound)
2. Bland.ai
3. Vapi.ai
4. Retell.ai

**Trigger:** n8n webhook when new lead is created with source='web'

**System Prompt:**
```
You are calling back a potential customer who submitted a request on our website. Your job is to:
1. Confirm their request
2. Gather detailed information
3. Qualify the lead
4. Set expectations for next steps

## Opening

"Hi, is this [customer_name]? Great! This is [agent_name] calling from [business_name]. You submitted a request on our website about [service_needed]. Do you have a few minutes to tell me more about your project?"

## Qualification Questions by Business Type

### Handyman
- What specifically needs to be repaired/installed?
- Is this in a house, condo, or apartment?
- How old is the home approximately?
- Are there any access issues (stairs, tight spaces)?
- Do you have the materials already or need us to get them?
- What's your ideal budget range for this project?
- When would you like this completed by?

### AV/Tech
- What device/system are we working with?
- Is this a new installation or fixing an existing setup?
- What brand and size (for TV mounting)?
- What's your current internet speed/provider (for WiFi)?
- Do you have existing equipment or need recommendations?
- What's your budget range?
- When would you like this scheduled?

### Pool
- What type of pool - above ground, Intex, permanent?
- What size approximately?
- What's the current condition of the water?
- Are you looking for one-time service or ongoing maintenance?
- Any equipment issues (pump, filter)?
- What's your budget for this service?
- How soon do you need service?

### Garage
- Single, double, or larger garage?
- What's mainly in there now?
- Are you looking to clear out, organize, or both?
- Do you need junk hauling?
- Are you interested in storage solutions (shelving, etc.)?
- What's your budget range?
- When would you like to get started?

## Closing

"Perfect, I've got all the details. Based on what you've described, this sounds like a [simple/medium/larger] project. One of our specialists will call you within [timeframe] to schedule an on-site estimate. Does [callback phone] still work best to reach you?"

## Lead Scoring

After the call, score the lead 1-100 based on:
- Timeline urgency (ASAP = +30, this week = +20, this month = +10, flexible = +5)
- Budget alignment (has budget in range = +30, flexible = +20, price shopping = +10)
- Decision readiness (ready to book = +20, getting quotes = +10, just researching = +5)
- Scope clarity (knows exactly what they want = +20, general idea = +10, exploring = +5)
```

**Webhook Payload to Supabase:**
```json
{
  "lead_id": "{{lead_id}}",
  "qualification_score": {{calculated_score}},
  "qualification_notes": "{{call_summary}}",
  "service_details": {
    "scope": "{{project_scope}}",
    "materials_needed": "{{materials}}",
    "access_notes": "{{access_info}}",
    "specific_requirements": "{{requirements}}"
  },
  "timeline": "{{confirmed_timeline}}",
  "budget_range": "{{budget_range}}",
  "qualified_by": "outbound_agent",
  "status": "qualified"
}
```

---

## Phase 4: n8n Workflows

### 4.1 New Lead Processing Workflow

**Trigger:** Supabase webhook on INSERT to leads table

**Workflow Steps:**
1. Receive new lead data
2. Check source - if 'web', trigger outbound qualification call
3. If 'lindy_call' or 'lindy_sms', mark as already initially qualified
4. Send notification (SMS/email) to Vikas
5. Log activity

**n8n JSON Export:**
```json
{
  "name": "New Lead Processing",
  "nodes": [
    {
      "name": "Webhook Trigger",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "parameters": {
        "path": "new-lead",
        "method": "POST"
      }
    },
    {
      "name": "Check Source",
      "type": "n8n-nodes-base.switch",
      "position": [450, 300],
      "parameters": {
        "rules": [
          {
            "conditions": [
              {
                "field": "={{$json.source}}",
                "operation": "equals",
                "value": "web"
              }
            ],
            "output": 0
          },
          {
            "conditions": [
              {
                "field": "={{$json.source}}",
                "operation": "contains",
                "value": "lindy"
              }
            ],
            "output": 1
          }
        ]
      }
    },
    {
      "name": "Trigger Outbound Call",
      "type": "n8n-nodes-base.httpRequest",
      "position": [650, 200],
      "parameters": {
        "url": "https://api.lindy.ai/v1/calls/outbound",
        "method": "POST",
        "body": {
          "to": "={{$json.phone}}",
          "lead_id": "={{$json.id}}",
          "customer_name": "={{$json.name}}",
          "business_type": "={{$json.business_type}}",
          "service_needed": "={{$json.service_needed}}"
        }
      }
    },
    {
      "name": "Send Notification",
      "type": "n8n-nodes-base.httpRequest",
      "position": [650, 400],
      "parameters": {
        "url": "https://api.twilio.com/messages",
        "method": "POST",
        "body": {
          "to": "+1XXXXXXXXXX",
          "body": "New {{$json.business_type}} lead: {{$json.name}} - {{$json.service_needed}}"
        }
      }
    }
  ]
}
```

### 4.2 Qualified Lead Handoff Workflow

**Trigger:** Supabase webhook on UPDATE to leads table WHERE status = 'qualified'

**Workflow Steps:**
1. Receive qualified lead data
2. Find matching opted-in business by type and service area
3. Prepare lead summary
4. Send to business via preferred contact method
5. Log handoff
6. Update lead status

### 4.3 Business Prospecting Workflow

See separate document: `N8N_PROSPECT_WORKFLOW.md`

---

## Phase 5: Additional Components

### 5.1 Service Card Component

**File: src/components/landing/ServiceCard.tsx**
```tsx
import React from 'react';
import { ServiceItem } from '../../types/landing';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  primaryColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, primaryColor }) => {
  const IconComponent = (Icons as any)[
    service.icon.charAt(0).toUpperCase() + service.icon.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())
  ] || Icons.Wrench;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: `${primaryColor}15` }}
      >
        <IconComponent size={24} style={{ color: primaryColor }} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
      {service.priceRange && (
        <p className="text-sm font-medium" style={{ color: primaryColor }}>
          {service.priceRange}
        </p>
      )}
    </div>
  );
};

export default ServiceCard;
```

### 5.2 CTA Section Component

**File: src/components/landing/CTASection.tsx**
```tsx
import React from 'react';
import { BusinessConfig } from '../../types/landing';
import { Phone, MessageSquare, Clock } from 'lucide-react';

interface CTASectionProps {
  config: BusinessConfig;
}

const CTASection: React.FC<CTASectionProps> = ({ config }) => {
  return (
    <section 
      className="py-16 px-4 text-white"
      style={{ backgroundColor: config.primaryColor }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact us today for a free quote. We respond within 24 hours.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a 
            href={`tel:${config.phoneNumber}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            <Phone size={24} />
            Call Now
          </a>
          <a 
            href={`sms:${config.phoneNumber}?body=${config.smsKeyword}`}
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-lg"
          >
            <MessageSquare size={24} />
            Text "{config.smsKeyword}"
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm opacity-80">
          <Clock size={16} />
          <span>Average response time: 2 hours</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
```

---

## Environment Variables

Add to your `.env.local`:

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Lindy.ai (for Edge Functions)
LINDY_API_KEY=your_lindy_api_key
LINDY_PHONE_NUMBER=your_lindy_phone

# n8n Webhooks
N8N_NEW_LEAD_WEBHOOK=https://your-n8n-instance/webhook/new-lead
N8N_QUALIFIED_LEAD_WEBHOOK=https://your-n8n-instance/webhook/qualified-lead
```

---

## Deployment Checklist

### Pre-Launch
- [ ] Supabase tables created
- [ ] Edge functions deployed
- [ ] React components built and tested
- [ ] Routes configured
- [ ] Lindy agent created and tested
- [ ] n8n workflows configured
- [ ] Environment variables set
- [ ] Domain/subdirectory routing working

### Launch
- [ ] Landing pages live
- [ ] Phone number active
- [ ] SMS keywords working
- [ ] Web form submissions flowing
- [ ] Outbound calls triggering
- [ ] Notifications reaching Vikas

### Post-Launch
- [ ] Monitor lead quality
- [ ] Tune AI agent prompts
- [ ] Begin business prospecting
- [ ] Track conversion metrics
- [ ] Iterate on landing page copy

---

## Success Metrics

1. **Lead Volume:** Target 5-10 leads/week per business type
2. **Qualification Rate:** Target 70%+ leads fully qualified by agents
3. **Handoff Acceptance:** Target 60%+ opted-in businesses accept leads
4. **Conversion Rate:** Target 20%+ leads convert to jobs
5. **Business Opt-In:** Target 3-5 new business partners/month

---

## Future Enhancements

1. **Google Business Profiles** - Create verified GBP listings for each business
2. **Review Generation** - Automated review request system
3. **Appointment Scheduling** - Calendly/Cal.com integration
4. **Payment Processing** - Stripe integration for deposits
5. **CRM Integration** - Sync with HubSpot or similar
6. **Analytics Dashboard** - Real-time lead and conversion tracking
