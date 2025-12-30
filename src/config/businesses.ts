import { BusinessConfig } from '../types/landing';

export const PHONE_NUMBER = '+18135551234'; // Replace with your Lindy number

export const businessConfigs: Record<string, BusinessConfig> = {
  handyman: {
    type: 'handyman',
    name: 'SmartHome Tampa',
    tagline: 'Premium Smart Home Integration',
    description: 'Elite home automation and smart technology services for discerning South Tampa homeowners. We handle the tech so you can enjoy the convenience.',
    heroImage: '/images/handyman-hero.jpg',
    primaryColor: '#2563eb',
    secondaryColor: '#1e40af',
    smsKeyword: 'SMART',
    phoneNumber: PHONE_NUMBER,
    services: [
      {
        title: 'Whole-Home Automation',
        description: 'Complete smart home ecosystem integration - lighting, climate, security, entertainment',
        priceRange: '$800-2500',
        icon: 'home'
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
    name: 'TechEase Elite',
    tagline: 'Premium Home Technology Solutions',
    description: 'White-glove technology services for busy professionals. Enterprise-grade home networks, digital safety, and seamless entertainment - handled completely for you.',
    heroImage: '/images/av-hero.jpg',
    primaryColor: '#7c3aed',
    secondaryColor: '#5b21b6',
    smsKeyword: 'TECH',
    phoneNumber: PHONE_NUMBER,
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
        icon: 'shield-check'
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
    tagline: 'Smart Pool Technology',
    description: 'Automated pool management systems for luxury South Tampa homes. Monitor chemistry, control features from your phone, and never worry about pool maintenance again.',
    heroImage: '/images/pool-hero.jpg',
    primaryColor: '#0891b2',
    secondaryColor: '#0e7490',
    smsKeyword: 'POOL',
    phoneNumber: PHONE_NUMBER,
    services: [
      {
        title: 'Smart Pool Automation',
        description: 'Complete automation system - chemistry, temperature, lighting, features - all app-controlled',
        priceRange: '$2500-6000',
        icon: 'smartphone'
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
    tagline: 'Smart Garage & Home Inventory Systems',
    description: 'Premium garage automation and digital inventory management for discerning homeowners. Control access, track possessions, and manage your home assets effortlessly.',
    heroImage: '/images/garage-hero.jpg',
    primaryColor: '#ea580c',
    secondaryColor: '#c2410c',
    smsKeyword: 'GARAGE',
    phoneNumber: PHONE_NUMBER,
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
        icon: 'database'
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
