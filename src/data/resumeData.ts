export interface CareerRole {
  id: string;
  company: string;
  role: string;
  period: string;
  challenge: string;
  action: string;
  result: string;
  achievements: string[];
}

export const careerTimeline: CareerRole[] = [
  {
    id: 'independent-consulting',
    company: 'Independent Consulting',
    role: 'CISO, GRC, AI, and Risk Consultant (Contract)',
    period: 'Nov 2024 - Apr 2025',
    challenge: 'Multiple organizations needed strategic cybersecurity leadership without full-time CISO commitment, requiring rapid risk assessment and compliance framework implementation.',
    action: 'Provided executive-level cybersecurity advisory across diverse industries, including AI agency pre-launch risk assessment, HITRUST evidence collection project management, SOC2 certification ownership, and establishing first CISO function for Big Pharma vendor.',
    result: 'Delivered mission-critical security frameworks and compliance certifications across 4+ organizations, enabling business growth while managing risk intelligently.',
    achievements: [
      'AI & Cybersecurity Risk Advisor to pre-launch AI agency CEO',
      'Project managed HITRUST evidence collection for EvolutionIQ',
      'Owned SOC2 certification for Harness',
      'Served as first CISO for Big Pharma vendor'
    ]
  },
  {
    id: 'inmarket-media',
    company: 'InMarket Media LLC',
    role: 'VP, Information Security',
    period: 'May 2024 - Oct 2024',
    challenge: 'Organization facing FTC Order response required immediate enterprise risk governance framework and comprehensive security maturity roadmap.',
    action: 'Partnered with C-Suite to implement enterprise risk governance framework, delivered 2-year security maturity plan, and managed regulatory response strategy.',
    result: 'Established robust risk governance structure and clear security roadmap, positioning organization for regulatory compliance and business continuity.',
    achievements: [
      'Partnered with C-Suite during FTC Order response',
      'Implemented enterprise risk governance framework',
      'Delivered 2-year security maturity plan'
    ]
  },
  {
    id: 'nga',
    company: 'National Geospatial-Intelligence Agency (NGA)',
    role: 'Cybersecurity Lead - Office of Inspector General (OIG) Audit',
    period: 'Mar 2024 - May 2024',
    challenge: 'Required independent cybersecurity oversight and risk assessment across intelligence community, ensuring FISMA compliance and vulnerability management effectiveness.',
    action: 'Represented OIG during intra-Intelligence Agency risk assessments and oversaw FISMA Vulnerability Management audit, providing independent security evaluation.',
    result: 'Delivered critical security oversight and audit findings, strengthening inter-agency security posture and FISMA compliance.',
    achievements: [
      'Represented OIG during intra-Intelligence Agency risk assessments',
      'Oversaw FISMA Vulnerability Management audit'
    ]
  },
  {
    id: 'justprotect',
    company: 'JustProtect Inc.',
    role: 'Founder, CEO & Chief Risk Officer',
    period: 'May 2018 - Feb 2024',
    challenge: 'Market needed efficient, scalable GRC platform to streamline risk assessments and compliance management for organizations of all sizes.',
    action: 'Founded and scaled SaaS GRC platform, raised $750k in financing, built product to conduct 5,000+ assessments with 60% efficiency improvement, and positioned company as FDIC tech sprint finalist.',
    result: 'Grew company to $700k ARR, established market-leading efficiency metrics, and validated product-market fit through FDIC recognition.',
    achievements: [
      'Raised $750k in financing',
      'Grew company to $700k ARR',
      'Platform conducted 5,000+ assessments with 60% efficiency',
      'Finalist in FDIC tech sprint'
    ]
  },
  {
    id: 'kalki-consulting',
    company: 'Kalki Consulting LLC',
    role: 'Virtual CISO (Multiple Clients)',
    period: 'Aug 2012 - May 2018',
    challenge: 'Fortune 500 and financial institutions required strategic cybersecurity leadership and vendor risk management transformation without full-time CISO overhead.',
    action: 'Served as virtual CISO for multiple enterprise clients, co-led vendor risk assessment process redesign for Federal Reserve, designed SMB risk assessment approach for Blackrock, and led global identity management evaluation for Blackstone.',
    result: 'Delivered strategic security transformations across major financial institutions, establishing scalable risk management frameworks and vendor assessment methodologies.',
    achievements: [
      'Co-led redesign of vendor risk assessment process for Federal Reserve',
      'Designed SMB risk assessment approach for Blackrock',
      'Led global identity management evaluation for Blackstone'
    ]
  },
  {
    id: 'deloitte',
    company: 'Deloitte & Touche',
    role: 'Northeast Deloitte-HP Alliance/Business Development Manager; Security & Privacy Services Manager; Senior Security Consultant',
    period: 'Nov 2006 - Apr 2012',
    challenge: 'Required to drive revenue growth in strategic alliance while delivering mission-critical security consulting for major enterprise transformations.',
    action: 'Led business development for Deloitte-HP Alliance, increasing revenue by 300%, while simultaneously leading cyber threat response for Target.com transformation and data privacy projects for American Express.',
    result: 'Achieved exceptional revenue growth while maintaining delivery excellence on high-profile security engagements for Fortune 500 clients.',
    achievements: [
      'Increased revenue by 300% in Alliance Manager role',
      'Led cyber threat response for Target.com transformation',
      'Delivered data privacy projects for American Express'
    ]
  },
  {
    id: 'capgemini',
    company: 'CapGemini UK',
    role: 'Security MSSP Technical Consultant; Senior WINTEL/MCSE Solutions Consultant; 3rd Line National WINTEL Engineer',
    period: 'Sep 2000 - Oct 2006',
    challenge: 'Required to provide 24x7x365 security support for mission-critical clients while responding to global virus outbreaks and maintaining system availability.',
    action: 'Delivered round-the-clock security support to 23 mission-critical clients, played key roles during global virus outbreaks including "I Love You" and "Nimda", and maintained enterprise security infrastructure.',
    result: 'Ensured continuous security operations and rapid response during critical security incidents, protecting client infrastructure and business continuity.',
    achievements: [
      'Provided 24x7x365 security support to 23 mission-critical clients',
      'Played key roles during global virus outbreaks ("I Love You", "Nimda")'
    ]
  }
];

export const certifications = [
  {
    name: 'QTE',
    fullName: 'Boardroom Qualified Technology Expert',
    issuer: 'ACCD Global'
  },
  {
    name: 'C|CISO',
    fullName: 'Certified Chief Information Security Officer',
    issuer: 'EC-Council'
  },
  {
    name: 'CISSP',
    fullName: 'Certified Information Systems Security Professional',
    issuer: 'ISC²'
  },
  {
    name: 'CIPP',
    fullName: 'Certified Information Privacy Professional',
    issuer: 'IAPP'
  },
  {
    name: 'CEH',
    fullName: 'Certified Ethical Hacker',
    issuer: 'EC-Council'
  },
  {
    name: 'GIAC GSEC',
    fullName: 'GIAC Security Essentials',
    issuer: 'SANS'
  }
];

export const expertise = {
  frameworks: [
    'HIPAA', 'GLBA', 'SOX', 'FFIEC', 'PCI DSS', 'NERC/CIP', 
    'GDPR', 'NY Shield', 'CCPA', 'NIST', 'ISO 27001/2', 
    'COBIT', 'FISMA', 'HITRUST'
  ],
  aiStandards: [
    'ISO 42001', 'ISO 23894', 'NIST AI.600-1'
  ],
  technologies: [
    'Cloud Security (AWS, Google, Azure)',
    'GRC Solutions (Archer, ServiceNow)',
    'SIEM (ArcSight)',
    'Operational Security Technologies'
  ],
  development: [
    'C#', '.NET', 'Golang', 'HTML/CSS', 'React', 'MySQL'
  ]
};

