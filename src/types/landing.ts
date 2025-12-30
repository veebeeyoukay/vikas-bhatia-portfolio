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
