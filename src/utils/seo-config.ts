import { SEOProps } from '@/components/SEO';
import { BusinessType } from '@/types/landing';

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

// Base SEO configurations for Tampa business landing pages
export const tampaBusinessSEO: Record<BusinessType, SEOConfig> = {
  handyman: {
    title: 'Smart Home Automation South Tampa | Your Personal Technology Concierge',
    description: 'Expert smart home integration for South Tampa and Davis Islands. Apple HomeKit, Google Home, Alexa ecosystems unified. White-glove automation programming and ongoing support for discerning homeowners.',
    canonical: '/tampa-smarthome',
  },
  av: {
    title: 'Premium Home Technology South Tampa | Family Digital Wellness Experts',
    description: 'Premium technology services for South Tampa families. Parental controls, digital wellness, whole-home audio/video, and enterprise-grade home networks. White-glove service for discerning families.',
    canonical: '/tampa-techguard',
  },
  pool: {
    title: 'Smart Pool Automation Tampa | Luxury Pool Technology Solutions',
    description: 'Smart pool automation for South Tampa luxury homes. Chemical automation, remote monitoring, energy optimization. Your pool manages itself - we make sure it works perfectly.',
    canonical: '/tampa-pool',
  },
  garage: {
    title: 'Smart Garage Systems Tampa | Home Inventory Management Experts',
    description: 'Smart garage technology and digital home inventory for South Tampa homeowners. MyQ automation, climate control, security cameras, and professional asset management for $1M+ homes.',
    canonical: '/tampa-garage',
  },
};

// Portfolio pages SEO configuration
export const portfolioSEO: Record<string, SEOConfig> = {
  home: {
    title: 'Vikas Bhatia - Cybersecurity Executive & Strategic Technology Leader',
    description: 'Cybersecurity executive specializing in CISO strategy, risk management, and AI-powered business transformation. Portfolio showcasing enterprise security leadership and innovation projects.',
  },
  projects: {
    title: 'Projects - Vikas Bhatia | Cybersecurity & Innovation Portfolio',
    description: 'Explore cybersecurity case studies, AI transformation demos, and innovation projects. CISO strategies, NIST assessments, and cutting-edge technology solutions.',
    canonical: '/projects',
  },
  aiTransformation: {
    title: 'AI-Powered Business Transformation Demo | Service Business Automation',
    description: 'Complete AI transformation platform featuring 4 virtual Tampa service businesses. Voice/SMS agents, automated workflows, and measurable ROI potential demonstrated.',
    canonical: '/ai-transformation',
  },
  zenity: {
    title: 'Zenity CISO Strategy | Comprehensive Cybersecurity Implementation',
    description: 'Complete CISO strategy for Zenity including risk assessment, compliance framework (SOC 2, ISO 27001), and technology roadmap for secure growth.',
    canonical: '/projects/zenity',
  },
  atlas: {
    title: 'ATLAS Project | AI-Accelerated ATS Migration & Data Validation',
    description: 'Staffing firm migration from legacy UK-based ATS to Dynamics 365. Interactive issue tracker and AI data validation prototype delivered in under 4 hours.',
    canonical: '/projects/atlas',
  },
};

// Helper function to get SEO config for a business type
export const getBusinessSEO = (businessType: BusinessType): SEOConfig => {
  return tampaBusinessSEO[businessType];
};

// Helper function to get SEO config for portfolio pages
export const getPortfolioSEO = (page: string): SEOConfig => {
  return portfolioSEO[page] || portfolioSEO.home;
};

// Helper to convert SEOConfig to SEOProps (without optional fields from SEOProps)
export const configToProps = (config: SEOConfig, baseUrl: string = '') => {
  return {
    title: config.title,
    description: config.description,
    canonical: config.canonical ? `${baseUrl}${config.canonical}` : undefined,
    ogImage: config.ogImage,
  };
};
