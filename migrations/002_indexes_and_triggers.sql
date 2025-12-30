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
