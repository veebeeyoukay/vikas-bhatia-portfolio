import { BusinessConfig } from '../types/landing';

export const PHONE_NUMBER = '+18135551234'; // Replace with your Lindy number

export const businessConfigs: Record<string, BusinessConfig> = {
  handyman: {
    type: 'handyman',
    name: 'SmartHome Tampa',
    oldName: 'Tampa Home Fix',
    tagline: 'Your Personal Smart Home Concierge',
    description: 'Expert technology setup, integration, and support for South Tampa\'s most discerning homeowners. We make your home work for you—seamlessly.',
    heroImage: '/images/handyman-hero.jpg',
    primaryColor: '#2563eb',
    secondaryColor: '#1e40af',
    smsKeyword: 'SMART',
    phoneNumber: PHONE_NUMBER,
    serviceAreas: [
      'South Tampa',
      'Davis Islands',
      'Hyde Park',
      'Bayshore Beautiful',
      'Beach Park',
      'Palma Ceia',
      'Harbour Island'
    ],
    targetDemographic: {
      income: '$300,000+',
      homeValue: '$750,000+',
      ageRange: '35-65'
    },
    positioning: 'premium',
    priceRange: '$$$',
    trustSignals: [
      'White-Glove Service for Discerning Homeowners',
      'Same-Day Response for Priority Clients',
      'Expertise Across All Smart Home Ecosystems',
      'Trusted by South Tampa Families',
      'Ongoing Support Relationships'
    ],
    geographicDifferentiators: [
      'Salt air resistant installations for waterfront properties (Davis Islands, Bayshore)',
      'Hurricane preparedness monitoring and automation',
      'HOA-compliant discreet installations',
      'Historic architecture integration (Hyde Park)'
    ],
    aboutSection: {
      headline: 'Technology Should Save You Time, Not Consume It',
      bodyParagraphs: [
        'SmartHome Tampa was founded for homeowners who understand the value of their time.',
        'You\'ve invested in smart home technology—or you\'re considering it. But between the app installations, the integrations, the troubleshooting, and the family training, that "convenient" smart home has become another item on your to-do list.',
        'That\'s where we come in.',
        'We\'re the technology partner for South Tampa\'s busiest professionals and families. We set up your systems, program your automations, train your family, and provide ongoing support when things change or questions arise.',
        'Our clients include executives, physicians, attorneys, and business owners throughout South Tampa, Davis Islands, Hyde Park, Beach Park, and Bayshore. They share one thing in common: they value their time more than they value saving a few dollars on DIY setup.'
      ],
      keyPoints: [
        {
          title: 'We Speak Your Language',
          description: 'No jargon, no condescension. We explain what you need to know and handle what you don\'t want to know.'
        },
        {
          title: 'Complete Ecosystem Expertise',
          description: 'Apple HomeKit, Google Home, Amazon Alexa, Control4, Savant, Lutron, Sonos—we work across all platforms and help you choose what\'s right for your lifestyle.'
        },
        {
          title: 'Ongoing Relationships',
          description: 'We\'re not just installers who disappear. Our clients have our direct line for questions, updates, and changes as their needs evolve.'
        },
        {
          title: 'Family-Focused Setup',
          description: 'Technology only works if everyone can use it. We train every family member—from tech-savvy teens to technology-skeptical grandparents.'
        },
        {
          title: 'Discretion Guaranteed',
          description: 'We work in some of South Tampa\'s most prestigious homes. Privacy and professionalism are non-negotiable.'
        }
      ]
    },
    services: [
      {
        title: 'Whole-Home Automation',
        description: 'Complete smart home ecosystem integration - lighting, climate, security, entertainment',
        priceRange: '$800-2500',
        icon: 'home',
        slug: 'whole-home-automation-tampa',
        roiData: {
          investment: { min: 800, max: 2500 },
          monthlySavings: { min: 3, max: 8, type: 'hours' },
          annualSavings: { min: 36, max: 96, type: 'hours' },
          valueProps: [
            'Save 3-8 hours/month managing multiple apps and devices',
            'Avoid $500-1500 in wasted equipment from improper DIY setup',
            'Family training ensures everyone uses the technology (not just tech-savvy members)',
            'Professional integration prevents security vulnerabilities',
            'Ongoing support relationship eliminates weekend troubleshooting'
          ]
        },
        icpRelevance: {
          perfectFor: [
            'Executives and professionals who value time over money',
            'Families with multiple smart devices across different brands',
            'Homeowners in $750k+ South Tampa properties',
            'Multi-generational households needing simple interfaces'
          ],
          notIdealFor: [
            'Tech enthusiasts who enjoy DIY configuration',
            'Single-device households',
            'Renters or temporary residents'
          ]
        }
      },
      {
        title: 'Smart Security Integration',
        description: 'Premium security system setup - smart locks, cameras, doorbell integration',
        priceRange: '$500-1500',
        icon: 'shield'
      },
      {
        title: 'Voice Control Setup',
        description: 'Alexa, Google Home, Siri - seamless voice control throughout your home',
        priceRange: '$400-1200',
        icon: 'mic'
      },
      {
        title: 'Smart Climate Control',
        description: 'Nest, Ecobee integration with automated schedules and energy optimization',
        priceRange: '$300-800',
        icon: 'thermometer'
      },
      {
        title: 'Automated Lighting',
        description: 'Lutron, Philips Hue smart lighting systems with scene programming',
        priceRange: '$600-2000',
        icon: 'lightbulb'
      },
      {
        title: 'Tech Concierge',
        description: 'Ongoing technical support and optimization for your smart home',
        priceRange: '$200-500/month',
        icon: 'headphones'
      }
    ],
    faqs: [
      {
        question: 'Do you work with my existing smart devices?',
        answer: 'Absolutely. We integrate with all major brands and can unify disparate systems into one seamless experience controlled from your phone or voice.'
      },
      {
        question: 'How long does a whole-home integration take?',
        answer: 'Most homes are completed in 1-3 days depending on complexity. We schedule at your convenience, including evenings and weekends.'
      },
      {
        question: 'Can you help if we\'re building or renovating?',
        answer: 'Yes! We work with builders and contractors to pre-wire and plan smart home systems. Best results come from early involvement in the design phase.'
      },
      {
        question: 'What areas do you serve?',
        answer: 'We exclusively serve South Tampa, Davis Islands, Hyde Park, and Bayshore Beautiful - areas where we can provide white-glove service.'
      }
    ]
  },

  av: {
    type: 'av',
    name: 'TechGuard Tampa',
    oldName: 'TechEase Elite',
    tagline: 'Premium Home Technology for Discerning Families',
    description: 'Digital wellness, family protection, and seamless entertainment for South Tampa\'s most connected households. We manage your technology ecosystem so you can focus on what matters.',
    heroImage: '/images/av-hero.jpg',
    primaryColor: '#7c3aed',
    secondaryColor: '#5b21b6',
    smsKeyword: 'TECH',
    phoneNumber: PHONE_NUMBER,
    serviceAreas: [
      'South Tampa',
      'Davis Islands',
      'Hyde Park',
      'Beach Park',
      'Bayshore'
    ],
    targetDemographic: {
      income: '$300,000+',
      homeValue: '$750,000+',
      ageRange: '35-65'
    },
    positioning: 'premium',
    priceRange: '$$$',
    trustSignals: [
      'Digital Wellness & Family Protection Experts',
      'Whole-Home Audio/Visual Integration',
      'Ongoing Family Technology Management',
      'Trusted by South Tampa\'s Leading Families',
      'Privacy & Discretion Guaranteed'
    ],
    geographicDifferentiators: [
      'Multi-generational household support (common in South Tampa)',
      'Staff integration for housekeepers and nannies',
      'Remote management for frequent travelers',
      'Competitive school area digital safety considerations'
    ],
    aboutSection: {
      headline: 'Your Family Deserves Better Than Default Settings',
      bodyParagraphs: [
        'TechGuard Tampa was founded because we saw a problem in South Tampa\'s finest homes:',
        'Families invest $20,000+ in entertainment systems, smart home devices, and connected technology—then leave everything on default settings. Children access inappropriate content. Networks remain vulnerable. Beautiful speaker systems play through one room instead of flowing through the home. Technology creates stress instead of eliminating it.',
        'We solve this.',
        'Our team provides comprehensive technology management for families who expect their significant technology investments to actually deliver on their promise. We configure, optimize, protect, and maintain your home\'s digital ecosystem—not just install and disappear.',
        'Our clients include the families behind South Tampa\'s most successful businesses, medical practices, and professional firms. They share one expectation: technology should enhance family life, not complicate it.'
      ],
      keyPoints: [
        {
          title: 'Digital Wellness Focus',
          description: 'We go beyond setup to protect your family\'s relationship with technology. Healthy screen time, appropriate content access, and family-wide digital balance.'
        },
        {
          title: 'Whole-Home Thinking',
          description: 'We design technology that flows through your home—audio that follows you room to room, displays that share content seamlessly, systems that respond to your family\'s routines.'
        },
        {
          title: 'Ongoing Relationship',
          description: 'Your family\'s needs evolve. Children grow. Technology changes. We maintain relationships with our clients, adapting systems as life changes.'
        },
        {
          title: 'Family-Centered Design',
          description: 'Every solution accounts for every family member—from grandparents who need simplicity to teenagers who need appropriate boundaries.'
        }
      ]
    },
    services: [
      {
        title: 'Enterprise Home Network',
        description: 'Commercial-grade WiFi with managed security, parental controls, and 24/7 monitoring',
        priceRange: '$1200-3500',
        icon: 'wifi'
      },
      {
        title: 'Family Digital Safety',
        description: 'Complete parental controls, screen time management, and content filtering across all devices',
        priceRange: '$500-1200',
        icon: 'shield-check',
        slug: 'family-digital-safety-tampa',
        roiData: {
          investment: { min: 500, max: 1200 },
          monthlySavings: { min: 5, max: 15, type: 'hours' },
          annualSavings: { min: 60, max: 180, type: 'hours' },
          valueProps: [
            'Reclaim 5-15 hours/month from policing screen time and device usage',
            'Automated enforcement eliminates daily arguments about device limits',
            'Network-level protection works across all devices (no per-device setup)',
            'Protect children from inappropriate content automatically',
            'Peace of mind while children use technology unsupervised'
          ]
        },
        icpRelevance: {
          perfectFor: [
            'Busy professionals with school-age children',
            'Multi-child households with varying age-appropriate content needs',
            'Families in competitive school districts (South Tampa, Hyde Park)',
            'Parents concerned about social media and online safety'
          ],
          notIdealFor: [
            'Families with only adult users',
            'Parents who want to manually monitor every interaction',
            'Households without internet-connected devices'
          ]
        }
      },
      {
        title: 'Home Office Tech Setup',
        description: 'Professional video conferencing, dual monitors, network optimization for remote work',
        priceRange: '$800-2000',
        icon: 'monitor'
      },
      {
        title: 'Whole-Home Audio/Video',
        description: 'Multi-room music, outdoor entertainment, hidden speakers - seamless throughout',
        priceRange: '$1500-5000',
        icon: 'speaker'
      },
      {
        title: 'Network Security Audit',
        description: 'Comprehensive security assessment with IoT device protection and VPN setup',
        priceRange: '$600-1500',
        icon: 'lock'
      },
      {
        title: 'White-Glove Tech Support',
        description: 'Priority response, remote troubleshooting, and quarterly system optimization',
        priceRange: '$300-800/month',
        icon: 'phone-call'
      }
    ],
    faqs: [
      {
        question: 'How do you handle parental controls for tech-savvy kids?',
        answer: 'We implement enterprise-grade content filtering at the network level, combined with device-specific controls. Even tech-savvy kids can\'t bypass properly configured systems.'
      },
      {
        question: 'Can you improve WiFi coverage throughout a large home?',
        answer: 'Yes. We design and install commercial-grade mesh networks with dedicated backhaul, ensuring consistent coverage in 5000+ sq ft homes, pools, and guest houses.'
      },
      {
        question: 'Do you support smart home integration?',
        answer: 'Absolutely. We integrate entertainment systems with your existing smart home, allowing voice control and automated scenes (movie mode, dinner mode, etc).'
      },
      {
        question: 'What makes your service different?',
        answer: 'We don\'t just install - we design, implement, and maintain. Think of us as your family CTO, handling all technology decisions and issues so you don\'t have to.'
      }
    ]
  },

  pool: {
    type: 'pool',
    name: 'AquaTech Automation',
    oldName: 'ClearWater Pool Care',
    tagline: 'Smart Pool Technology for Modern Homeowners',
    description: 'Automated pool systems, remote monitoring, and intelligent maintenance for South Tampa\'s most beautiful pools. Your pool takes care of itself—we make sure it does.',
    heroImage: '/images/pool-hero.jpg',
    primaryColor: '#0891b2',
    secondaryColor: '#0e7490',
    smsKeyword: 'POOL',
    phoneNumber: PHONE_NUMBER,
    serviceAreas: [
      'South Tampa',
      'Davis Islands',
      'Hyde Park',
      'Bayshore',
      'Palma Ceia'
    ],
    targetDemographic: {
      income: '$300,000+',
      homeValue: '$1,000,000+',
      ageRange: '35-65'
    },
    positioning: 'premium',
    priceRange: '$$$',
    trustSignals: [
      'Smart Pool System Specialists',
      'Remote Monitoring & Alerts',
      'Chemical Automation Experts',
      'Trusted by South Tampa Pool Owners',
      'Energy Optimization Certified'
    ],
    geographicDifferentiators: [
      'Year-round pool usage in Tampa climate',
      'Hurricane monitoring and protection systems',
      'Energy cost optimization (time-of-use electricity rates)',
      'Waterfront property considerations (Davis Islands)',
      'Remote monitoring for vacation homes'
    ],
    aboutSection: {
      headline: 'Your Pool Should Work as Smart as Your Home',
      bodyParagraphs: [
        'AquaTech Automation was founded because South Tampa\'s finest pools deserve smarter technology.',
        'Your home has smart thermostats, automated lighting, and security systems that manage themselves. Why is your pool still stuck in the 1990s—requiring manual chemical testing, weekly service visits, and constant attention?',
        'Modern pool technology can automate chemical balance, notify you of problems before they become expensive, optimize energy usage, and let you check on your pool from anywhere in the world. But this technology only works when it\'s properly configured, integrated with your home systems, and professionally maintained.',
        'That\'s what we do.',
        'We transform pools from maintenance burdens into automated assets. Our clients are busy professionals, frequent travelers, and discerning homeowners throughout South Tampa, Davis Islands, and Bayshore who want their pools ready whenever they are—without thinking about it.'
      ],
      keyPoints: [
        {
          title: 'Technology First',
          description: 'We\'re not traditional pool cleaners who dabble in automation. We\'re technology specialists who understand pools. That difference matters.'
        },
        {
          title: 'Integration Expertise',
          description: 'Your pool system should work with your smart home—visible on your phone, responsive to your arrival, integrated with your automation platform.'
        },
        {
          title: 'Remote Monitoring',
          description: 'We monitor your pool\'s systems remotely, often catching problems before you notice them. Proactive service, not reactive repairs.'
        },
        {
          title: 'Energy Optimization',
          description: 'We configure equipment to minimize energy consumption while maintaining perfect pool conditions. Tampa pools can waste hundreds of dollars monthly on inefficient operation.'
        }
      ]
    },
    services: [
      {
        title: 'Smart Pool Automation',
        description: 'Complete automation system - chemistry, temperature, lighting, features - all app-controlled',
        priceRange: '$2500-6000',
        icon: 'smartphone',
        slug: 'pool-automation-tampa',
        roiData: {
          investment: { min: 2500, max: 6000 },
          monthlySavings: { min: 100, max: 200, type: 'dollars' },
          annualSavings: { min: 1200, max: 2400, type: 'dollars' },
          paybackMonths: { min: 18, max: 36 },
          valueProps: [
            'Eliminates 5-10 hours/month of manual pool maintenance',
            'Energy savings of $100-$200/month from optimized equipment',
            'Prevents costly pool damage from neglected maintenance',
            'Remote monitoring catches problems before expensive repairs needed',
            'Increases home value for luxury South Tampa properties'
          ]
        },
        icpRelevance: {
          perfectFor: [
            'Busy professionals who travel frequently',
            'Multiple property owners managing vacation homes',
            'Homeowners with $1M+ properties',
            'Families who value time over cost savings'
          ],
          notIdealFor: [
            'DIY enthusiasts who enjoy pool maintenance',
            'Budget-conscious homeowners',
            'Small pools in homes under $500k'
          ]
        }
      },
      {
        title: 'Automated Chemistry System',
        description: 'Hayward/Pentair systems that test and balance chemicals automatically',
        priceRange: '$1800-4000',
        icon: 'droplet'
      },
      {
        title: 'Remote Monitoring Setup',
        description: 'Real-time pool monitoring with alerts for chemistry, temperature, and equipment issues',
        priceRange: '$800-1500',
        icon: 'activity'
      },
      {
        title: 'Smart Pool Lighting',
        description: 'LED color-changing systems with programmed scenes and app control',
        priceRange: '$1200-3000',
        icon: 'lightbulb'
      },
      {
        title: 'Energy Optimization',
        description: 'Variable speed pump programming, solar integration, automated heating schedules',
        priceRange: '$600-2000',
        icon: 'zap'
      },
      {
        title: 'Pool Tech Concierge',
        description: 'Monthly system checks, software updates, and priority support',
        priceRange: '$200-400/month',
        icon: 'settings'
      }
    ],
    faqs: [
      {
        question: 'Can I control everything from my phone while traveling?',
        answer: 'Yes! Our systems allow complete remote control - adjust temperature, turn on lights, check chemistry, and receive alerts from anywhere in the world.'
      },
      {
        question: 'Do automated systems really eliminate manual testing?',
        answer: 'Modern automation systems test multiple times daily and adjust chemicals automatically. You\'ll never need to test water or add chemicals manually again.'
      },
      {
        question: 'What if something goes wrong with the system?',
        answer: 'Our monitoring catches issues before they become problems. You\'ll receive alerts, and our concierge service can remotely diagnose and often fix issues without a visit.'
      },
      {
        question: 'Can you upgrade an existing pool?',
        answer: 'Absolutely. We retrofit automation systems to existing pools, typically completing installation in 2-3 days with minimal disruption.'
      }
    ]
  },

  garage: {
    type: 'garage',
    name: 'GarageTech Pro',
    oldName: 'GarageRescue Tampa',
    tagline: 'Smart Garage & Home Inventory Management',
    description: 'Intelligent garage systems, digital home inventory, and organization technology for South Tampa\'s most sophisticated homeowners. Know what you have, find it when you need it.',
    heroImage: '/images/garage-hero.jpg',
    primaryColor: '#ea580c',
    secondaryColor: '#c2410c',
    smsKeyword: 'GARAGE',
    phoneNumber: PHONE_NUMBER,
    serviceAreas: [
      'South Tampa',
      'Davis Islands',
      'Hyde Park',
      'Bayshore',
      'Palma Ceia'
    ],
    targetDemographic: {
      income: '$300,000+',
      homeValue: '$1,000,000+',
      ageRange: '35-65'
    },
    positioning: 'premium',
    priceRange: '$$$',
    trustSignals: [
      'Smart Garage Technology Specialists',
      'Digital Home Inventory Experts',
      'Insurance Documentation Systems',
      'Trusted by South Tampa Homeowners',
      'Ongoing Management Services'
    ],
    geographicDifferentiators: [
      'Hurricane preparation inventory documentation',
      'Humidity and climate control for Tampa climate',
      'Multiple property ownership support (vacation homes)',
      'High-value asset protection systems',
      'Insurance requirements for $1M+ homes'
    ],
    aboutSection: {
      headline: 'Your Garage Should Be as Smart as Your Home',
      bodyParagraphs: [
        'GarageTech Pro was founded on a simple observation:',
        'South Tampa homeowners invest heavily in smart home technology—automated lighting, climate control, security systems, whole-home audio. But their garages remain dumb. And their valuable possessions remain untracked, uninsured, and unfindable.',
        'We solve both problems.',
        'Our smart garage services transform garages from forgotten spaces into intelligent extensions of your connected home. And our home inventory services help you catalog, value, and protect the belongings you\'ve accumulated—from art and jewelry to wine collections and sports equipment.',
        'Our clients are successful professionals who\'ve accumulated significant possessions and expect modern technology solutions for managing them. They\'re not looking for someone to haul away junk—they\'re looking for systems that bring order, visibility, and intelligence to their homes.'
      ],
      keyPoints: [
        {
          title: 'Technology Focus',
          description: 'We\'re technology consultants who specialize in garage and inventory management. We install smart systems, configure software, and build digital infrastructure—not move boxes.'
        },
        {
          title: 'High-Value Understanding',
          description: 'We work with clients who have significant possessions worth protecting. We understand insurance requirements, security considerations, and privacy concerns.'
        },
        {
          title: 'Ongoing Relationship',
          description: 'Inventory changes. Possessions are acquired and disposed of. We offer ongoing management services that keep your digital systems current.'
        },
        {
          title: 'Integration Expertise',
          description: 'Smart garage systems should work with your home automation. Inventory systems should connect to insurance documentation. We build integrated solutions.'
        }
      ]
    },
    services: [
      {
        title: 'Smart Garage Integration',
        description: 'MyQ, LiftMaster automation with app control, camera integration, and delivery alerts',
        priceRange: '$600-1500',
        icon: 'smartphone'
      },
      {
        title: 'Home Inventory System',
        description: 'Digital cataloging of possessions with photos, values, and location tracking',
        priceRange: '$800-2000',
        icon: 'database',
        slug: 'home-inventory-tampa',
        roiData: {
          investment: { min: 800, max: 2000 },
          valueProps: [
            'First insurance claim typically recoups entire investment',
            'Essential for homes with $1M+ in contents and valuables',
            'Required documentation for insurance on high-value collections',
            'Estate planning and asset tracking for multiple properties',
            'Hurricane preparation documentation (critical for South Tampa)',
            'Reduces insurance premiums with proper documentation'
          ]
        },
        icpRelevance: {
          perfectFor: [
            'Homeowners with valuable art, jewelry, or wine collections',
            'Multiple property owners (primary + vacation homes)',
            '$1M+ homes with significant contents',
            'Collectors requiring insurance documentation',
            'Waterfront property owners (hurricane risk)'
          ],
          notIdealFor: [
            'Renters or temporary residents',
            'Minimalist households with few valuables',
            'Homes under $500k value'
          ]
        }
      },
      {
        title: 'Climate Control Setup',
        description: 'Smart temperature and humidity control for wine storage, vehicles, and collectibles',
        priceRange: '$1000-2500',
        icon: 'thermometer'
      },
      {
        title: 'Security Camera System',
        description: 'HD cameras with AI detection, package alerts, and cloud recording',
        priceRange: '$800-2000',
        icon: 'video'
      },
      {
        title: 'Organization Consultation',
        description: 'Professional assessment and digital organization plan for optimal space usage',
        priceRange: '$400-1000',
        icon: 'layout'
      },
      {
        title: 'Vehicle Tech Integration',
        description: 'Tesla charger setup, vehicle diagnostics, and garage display systems',
        priceRange: '$500-1500',
        icon: 'car'
      }
    ],
    faqs: [
      {
        question: 'What is a home inventory system?',
        answer: 'We create a digital database of your possessions with photos, purchase info, and values. Essential for insurance, estate planning, and simply knowing what you own and where it is.'
      },
      {
        question: 'Can the system track collectibles and valuables?',
        answer: 'Yes. Our inventory system is perfect for wine collections, artwork, vehicles, tools, or any assets you want to track and value over time.'
      },
      {
        question: 'Do you handle the physical organization?',
        answer: 'We focus on the technology and systems. We can recommend and coordinate with professional organizers if needed, but our expertise is the digital management layer.'
      },
      {
        question: 'Is this overkill for a garage?',
        answer: 'For a 2-car garage with clutter - yes. For a 3+ car garage in a $1M+ home with vehicles, tools, wine, seasonal items, and sports equipment worth tracking - absolutely not.'
      }
    ]
  }
};
