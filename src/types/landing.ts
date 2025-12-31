export type BusinessType = 'handyman' | 'av' | 'pool' | 'garage';

export interface BusinessConfig {
  type: BusinessType;
  name: string;
  oldName?: string;
  tagline: string;
  description: string;
  heroImage: string;
  primaryColor: string;
  secondaryColor: string;
  services: ServiceItem[];
  faqs: FAQItem[];
  smsKeyword: string;
  phoneNumber: string;
  // Geographic optimization fields
  serviceAreas?: string[];
  targetDemographic?: {
    income: string;
    homeValue: string;
    ageRange: string;
  };
  positioning?: string;
  priceRange?: string;
  trustSignals?: string[];
  geographicDifferentiators?: string[];
  aboutSection?: {
    headline: string;
    bodyParagraphs: string[];
    keyPoints: Array<{
      title: string;
      description: string;
    }>;
  };
}

export interface ServiceItem {
  title: string;
  description: string;
  priceRange?: string;
  icon: string;
  slug?: string; // URL slug for detail page
  roiData?: {
    investment: {
      min: number;
      max: number;
    };
    monthlySavings?: {
      min: number;
      max: number;
      type: 'dollars' | 'hours';
    };
    annualSavings?: {
      min: number;
      max: number;
      type: 'dollars' | 'hours';
    };
    paybackMonths?: {
      min: number;
      max: number;
    };
    valueProps: string[];
  };
  icpRelevance?: {
    perfectFor: string[];
    notIdealFor: string[];
  };
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
