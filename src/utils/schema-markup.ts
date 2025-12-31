import { BusinessType } from '@/types/landing';
import { PHONE_NUMBER } from '@/config/businesses';

interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  image?: string;
  description: string;
  address: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed: Array<{
    '@type': string;
    name: string;
  }>;
  priceRange: string;
  telephone: string;
  url: string;
}

// Shared service areas for all Tampa businesses
const southTampaServiceAreas = [
  { '@type': 'Place', name: 'South Tampa, FL' },
  { '@type': 'Place', name: 'Davis Islands, FL' },
  { '@type': 'Place', name: 'Hyde Park, FL' },
  { '@type': 'Place', name: 'Beach Park, FL' },
  { '@type': 'Place', name: 'Bayshore Beautiful, FL' },
  { '@type': 'Place', name: 'Palma Ceia, FL' },
  { '@type': 'Place', name: 'Harbour Island, FL' },
];

// Generate LocalBusiness schema for Tampa service businesses
export const generateLocalBusinessSchema = (
  businessType: BusinessType,
  baseUrl: string = ''
): LocalBusinessSchema => {
  const schemas: Record<BusinessType, LocalBusinessSchema> = {
    handyman: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'SmartHome Tampa',
      description: 'Premium smart home integration and automation services for South Tampa. Expert setup, programming, and ongoing support for discerning homeowners.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        postalCode: '33606',
        addressCountry: 'US',
      },
      areaServed: southTampaServiceAreas,
      priceRange: '$$$',
      telephone: PHONE_NUMBER,
      url: `${baseUrl}/tampa-smarthome`,
    },
    av: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'TechGuard Tampa',
      description: 'Premium home technology and family digital wellness services for South Tampa families. Parental controls, network security, and whole-home audio/video integration.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        postalCode: '33606',
        addressCountry: 'US',
      },
      areaServed: southTampaServiceAreas,
      priceRange: '$$$',
      telephone: PHONE_NUMBER,
      url: `${baseUrl}/tampa-techguard`,
    },
    pool: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'AquaTech Automation',
      description: 'Smart pool automation and technology services for luxury South Tampa homes. Chemical automation, remote monitoring, and energy optimization.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        postalCode: '33606',
        addressCountry: 'US',
      },
      areaServed: southTampaServiceAreas,
      priceRange: '$$$',
      telephone: PHONE_NUMBER,
      url: `${baseUrl}/tampa-pool`,
    },
    garage: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'GarageTech Pro',
      description: 'Smart garage systems and digital home inventory management for South Tampa luxury homeowners. Premium garage automation and asset tracking.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        postalCode: '33606',
        addressCountry: 'US',
      },
      areaServed: southTampaServiceAreas,
      priceRange: '$$$',
      telephone: PHONE_NUMBER,
      url: `${baseUrl}/tampa-garage`,
    },
  };

  return schemas[businessType];
};

// Generate Person schema for portfolio pages
export const generatePersonSchema = (baseUrl: string = '') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vikas Bhatia',
    jobTitle: 'Cybersecurity Executive & Strategic Technology Leader',
    description: 'Cybersecurity executive specializing in CISO strategy, risk management, compliance, and AI-powered business transformation.',
    url: baseUrl,
    sameAs: [
      // Add social media links if available
    ],
    knowsAbout: [
      'Cybersecurity',
      'CISO Strategy',
      'Risk Management',
      'Compliance (SOC 2, ISO 27001, NIST)',
      'AI Business Transformation',
      'Technology Leadership',
    ],
  };
};

// Generate WebSite schema for the portfolio
export const generateWebSiteSchema = (baseUrl: string = '') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vikas Bhatia Portfolio',
    description: 'Cybersecurity executive portfolio showcasing CISO strategies, compliance frameworks, and AI-powered innovation projects.',
    url: baseUrl,
    author: {
      '@type': 'Person',
      name: 'Vikas Bhatia',
    },
  };
};
