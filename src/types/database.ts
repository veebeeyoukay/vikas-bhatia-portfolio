export type BusinessType = 'handyman' | 'av' | 'pool' | 'garage';
export type LeadSource = 'web' | 'lindy_call' | 'lindy_sms' | 'whatsapp';
export type LeadStatus = 'new' | 'contacted' | 'qualifying' | 'qualified' | 'handed_off' | 'converted' | 'lost';
export type Timeline = 'asap' | 'this_week' | 'this_month' | 'flexible';
export type BudgetRange = 'under_100' | '100_250' | '250_500' | '500_1000' | 'over_1000';
export type PreferredContact = 'call' | 'sms' | 'email' | 'whatsapp';
export type ResponseStatus = 'pending' | 'accepted' | 'declined' | 'no_response';
export type ConversionStatus = 'unknown' | 'won' | 'lost' | 'pending';
export type OutreachStatus = 'new' | 'contacted' | 'responded' | 'opted_in' | 'declined' | 'unresponsive';

export interface Lead {
  id: string;
  business_type: BusinessType;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  city?: string;
  zip_code?: string;
  service_needed: string;
  service_details?: Record<string, unknown>;
  timeline?: Timeline;
  budget_range?: BudgetRange;
  source: LeadSource;
  source_keyword?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  qualification_score?: number;
  qualification_notes?: string;
  qualified_by?: string;
  status: LeadStatus;
  created_at: string;
  updated_at: string;
  contacted_at?: string;
  qualified_at?: string;
  handed_off_at?: string;
}

export interface Business {
  id: string;
  business_type: BusinessType;
  company_name: string;
  owner_name?: string;
  phone: string;
  email?: string;
  website?: string;
  service_area?: string[];
  service_radius_miles?: number;
  opted_in: boolean;
  opt_in_date?: string;
  lead_credits?: number;
  leads_received?: number;
  leads_converted?: number;
  preferred_contact: PreferredContact;
  contact_hours_start?: string;
  contact_hours_end?: string;
  created_at: string;
  updated_at: string;
  last_lead_sent?: string;
}

export interface LeadHandoff {
  id: string;
  lead_id: string;
  business_id: string;
  sent_at: string;
  sent_via?: PreferredContact;
  message_content?: string;
  response_status: ResponseStatus;
  response_at?: string;
  response_notes?: string;
  conversion_status: ConversionStatus;
  conversion_value?: number;
  conversion_notes?: string;
}

export interface ProspectBusiness {
  id: string;
  business_type: string;
  company_name: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  google_place_id?: string;
  google_rating?: number;
  google_review_count?: number;
  outreach_status: OutreachStatus;
  outreach_attempts?: number;
  last_outreach_at?: string;
  created_at: string;
  updated_at: string;
}
