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
