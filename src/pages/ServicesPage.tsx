import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cybersecurity Strategy & Advisory',
      description: 'Comprehensive security strategy development and executive advisory services.',
      features: [
        'Security program assessment and roadmap development',
        'Executive-level security strategy and governance',
        'Board-level risk communication and reporting',
        'Security maturity model implementation',
        'Regulatory compliance strategy and planning'
      ],
      icon: '🛡️',
      category: 'Strategic'
    },
    {
      title: 'Security Architecture & Design',
      description: 'End-to-end security architecture design and implementation guidance.',
      features: [
        'Zero Trust architecture design and deployment',
        'Cloud security architecture and migration',
        'Identity and access management frameworks',
        'Data protection and privacy architecture',
        'Security infrastructure design and optimization'
      ],
      icon: '🏗️',
      category: 'Technical'
    },
    {
      title: 'Digital Transformation Security',
      description: 'Security leadership for digital transformation and technology initiatives.',
      features: [
        'DevSecOps implementation and optimization',
        'Cloud migration security strategy',
        'AI/ML security and governance frameworks',
        'IoT and edge computing security',
        'Digital innovation security enablement'
      ],
      icon: '🚀',
      category: 'Transformation'
    },
    {
      title: 'Incident Response & Recovery',
      description: 'Comprehensive incident response planning and crisis management.',
      features: [
        'Incident response plan development and testing',
        'Crisis management and communication strategies',
        'Forensic investigation and analysis',
        'Business continuity and disaster recovery',
        'Post-incident review and lessons learned'
      ],
      icon: '🚨',
      category: 'Operational'
    },
    {
      title: 'Compliance & Governance',
      description: 'Regulatory compliance and governance framework development.',
      features: [
        'Regulatory compliance assessment and gap analysis',
        'Governance framework development and implementation',
        'Policy and procedure development',
        'Audit preparation and support',
        'Third-party risk management'
      ],
      icon: '📋',
      category: 'Governance'
    },
    {
      title: 'Executive Coaching & Training',
      description: 'Leadership development and security awareness training.',
      features: [
        'CISO and security leadership coaching',
        'Executive security awareness and training',
        'Security team development and mentoring',
        'Board security education and workshops',
        'Security culture transformation'
      ],
      icon: '🎓',
      category: 'Leadership'
    }
  ];

  const engagementModels = [
    {
      title: 'Strategic Advisory',
      duration: '3-6 months',
      description: 'Long-term strategic partnership for comprehensive security transformation.',
      deliverables: [
        'Comprehensive security assessment',
        'Strategic roadmap and implementation plan',
        'Executive presentations and board materials',
        'Ongoing advisory and support'
      ],
      bestFor: 'Organizations seeking comprehensive security transformation'
    },
    {
      title: 'Project-Based Consulting',
      duration: '1-3 months',
      description: 'Focused engagement for specific security initiatives or challenges.',
      deliverables: [
        'Project-specific deliverables',
        'Implementation guidance and support',
        'Documentation and knowledge transfer',
        'Post-implementation review'
      ],
      bestFor: 'Specific security projects or challenges'
    },
    {
      title: 'Fractional CISO',
      duration: 'Ongoing',
      description: 'Part-time executive security leadership for organizations without a full-time CISO.',
      deliverables: [
        'Regular security oversight and guidance',
        'Executive reporting and board communication',
        'Security program management',
        'Team leadership and development'
      ],
      bestFor: 'Organizations needing executive security leadership'
    },
    {
      title: 'Emergency Response',
      duration: 'Immediate',
      description: 'Rapid response for security incidents or urgent security needs.',
      deliverables: [
        'Immediate incident assessment and response',
        'Crisis management and communication',
        'Recovery planning and execution',
        'Post-incident analysis and recommendations'
      ],
      bestFor: 'Security incidents or urgent security needs'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive cybersecurity and technology leadership services designed to transform 
          your organization's security posture and enable business growth.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Service Offerings
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Engagement Models
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {engagementModels.map((model, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {model.title}
                </h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {model.duration}
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                {model.description}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                <ul className="space-y-2">
                  {model.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-start text-sm text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Best for:</span> {model.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          My Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Discovery</h3>
            <p className="text-gray-600">
              Comprehensive assessment of your current security posture, business objectives, 
              and risk tolerance.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Strategy</h3>
            <p className="text-gray-600">
              Development of tailored security strategies and roadmaps aligned with your 
              business goals and constraints.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Implementation</h3>
            <p className="text-gray-600">
              Hands-on guidance and support through the execution of security initiatives 
              and program development.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              4
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Optimization</h3>
            <p className="text-gray-600">
              Continuous improvement and optimization of security programs to ensure 
              long-term success and value delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let's discuss your specific needs and find the right engagement model for your organization.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Schedule a Consultation
          </Link>
          <Link
            to="/projects"
            className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
          >
            View Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 