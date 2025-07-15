import React from 'react';
import { Link } from 'react-router-dom';

const ExpertisePage: React.FC = () => {
  const technicalSkills = [
    { name: 'Cybersecurity Strategy', level: 95, category: 'Strategy' },
    { name: 'Risk Management', level: 90, category: 'Strategy' },
    { name: 'Security Architecture', level: 88, category: 'Technical' },
    { name: 'Cloud Security', level: 85, category: 'Technical' },
    { name: 'Compliance & Governance', level: 92, category: 'Strategy' },
    { name: 'Incident Response', level: 87, category: 'Technical' },
    { name: 'Identity & Access Management', level: 83, category: 'Technical' },
    { name: 'Data Protection', level: 89, category: 'Technical' },
    { name: 'Security Operations', level: 86, category: 'Technical' },
    { name: 'Digital Transformation', level: 91, category: 'Strategy' }
  ];

  const industryExpertise = [
    { industry: 'Financial Services', experience: '15+ years', focus: 'Regulatory compliance, fraud prevention' },
    { industry: 'Healthcare', experience: '12+ years', focus: 'HIPAA, patient data protection' },
    { industry: 'Technology', experience: '18+ years', focus: 'Product security, DevSecOps' },
    { industry: 'Manufacturing', experience: '10+ years', focus: 'OT security, supply chain' },
    { industry: 'Retail', experience: '8+ years', focus: 'PCI DSS, e-commerce security' },
    { industry: 'Government', experience: '6+ years', focus: 'FedRAMP, FISMA compliance' }
  ];

  const certifications = [
    { name: 'CISSP', issuer: 'ISC²', year: '2010', status: 'Active' },
    { name: 'CISM', issuer: 'ISACA', year: '2012', status: 'Active' },
    { name: 'CRISC', issuer: 'ISACA', year: '2014', status: 'Active' },
    { name: 'CISA', issuer: 'ISACA', year: '2011', status: 'Active' },
    { name: 'PMP', issuer: 'PMI', year: '2013', status: 'Active' },
    { name: 'AWS Security', issuer: 'Amazon', year: '2020', status: 'Active' },
    { name: 'Azure Security', issuer: 'Microsoft', year: '2021', status: 'Active' },
    { name: 'Google Cloud Security', issuer: 'Google', year: '2022', status: 'Active' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Expertise & Skills
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive cybersecurity and technology leadership expertise developed over two decades 
          of hands-on experience across diverse industries and organizational scales.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Technical Skills & Proficiencies
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 mt-1 inline-block">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Industry Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryExpertise.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {industry.industry}
              </h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Experience:</span> {industry.experience}</p>
                <p><span className="font-medium">Focus:</span> {industry.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Professional Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
              <p className="text-xs text-gray-500">{cert.year} • {cert.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Specializations
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Strategic Cybersecurity Leadership
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Executive-level security strategy development
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Board-level risk communication and reporting
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Security program transformation and optimization
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Merger and acquisition security integration
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Technology & Digital Transformation
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cloud security architecture and migration
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                DevSecOps implementation and optimization
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Zero Trust architecture design and deployment
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                AI/ML security and governance frameworks
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Leverage This Expertise?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let's discuss how my skills and experience can benefit your organization.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Start a Conversation
          </Link>
          <Link
            to="/services"
            className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
          >
            View Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage; 