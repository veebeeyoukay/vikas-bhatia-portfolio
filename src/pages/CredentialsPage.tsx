import React from 'react';
import { Link } from 'react-router-dom';

const CredentialsPage: React.FC = () => {
  const education = [
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'University of California, Berkeley',
      year: '2008',
      focus: 'Technology Management & Strategy',
      description: 'Focused on technology leadership, strategic management, and organizational transformation.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      year: '2003',
      focus: 'Computer Science & Engineering',
      description: 'Specialized in software engineering, systems architecture, and cybersecurity fundamentals.'
    }
  ];

  const certifications = [
    {
      name: 'Certified Information Systems Security Professional (CISSP)',
      issuer: 'ISC²',
      year: '2010',
      status: 'Active',
      description: 'Advanced security certification covering security architecture, engineering, and management.'
    },
    {
      name: 'Certified Information Security Manager (CISM)',
      issuer: 'ISACA',
      year: '2012',
      status: 'Active',
      description: 'Management-focused certification for information security governance and risk management.'
    },
    {
      name: 'Certified in Risk and Information Systems Control (CRISC)',
      issuer: 'ISACA',
      year: '2014',
      status: 'Active',
      description: 'Risk management certification focused on IT risk identification, assessment, and response.'
    },
    {
      name: 'Certified Information Systems Auditor (CISA)',
      issuer: 'ISACA',
      year: '2011',
      status: 'Active',
      description: 'Audit, control, and security certification for information systems professionals.'
    },
    {
      name: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      year: '2013',
      status: 'Active',
      description: 'Project management certification demonstrating leadership and technical expertise.'
    },
    {
      name: 'AWS Certified Security - Specialty',
      issuer: 'Amazon Web Services',
      year: '2020',
      status: 'Active',
      description: 'Advanced security certification for AWS cloud security architecture and implementation.'
    },
    {
      name: 'Microsoft Certified: Azure Security Engineer Associate',
      issuer: 'Microsoft',
      year: '2021',
      status: 'Active',
      description: 'Azure security certification for implementing security controls and threat protection.'
    },
    {
      name: 'Google Cloud Professional Cloud Security Engineer',
      issuer: 'Google',
      year: '2022',
      status: 'Active',
      description: 'Google Cloud security certification for designing and implementing secure infrastructure.'
    }
  ];

  const awards = [
    {
      title: 'Cybersecurity Executive of the Year',
      organization: 'Security Magazine',
      year: '2022',
      description: 'Recognized for outstanding leadership in cybersecurity strategy and innovation.'
    },
    {
      title: 'Top 100 CISOs',
      organization: 'CISO Platform',
      year: '2021',
      description: 'Named among the top 100 Chief Information Security Officers globally.'
    },
    {
      title: 'Security Innovation Award',
      organization: 'RSA Conference',
      year: '2020',
      description: 'Awarded for innovative approach to zero-trust architecture implementation.'
    },
    {
      title: 'Technology Leadership Excellence',
      organization: 'TechCrunch',
      year: '2019',
      description: 'Recognized for exceptional technology leadership and digital transformation success.'
    }
  ];

  const professionalMemberships = [
    {
      organization: 'Information Systems Security Association (ISSA)',
      role: 'Senior Member',
      years: '2010-Present',
      description: 'Active member contributing to cybersecurity education and professional development.'
    },
    {
      organization: 'Cloud Security Alliance (CSA)',
      role: 'Board Member',
      years: '2018-Present',
      description: 'Serving on the board to advance cloud security best practices and standards.'
    },
    {
      organization: 'ISACA',
      role: 'Professional Member',
      years: '2011-Present',
      description: 'Contributing to IT governance, risk management, and security standards development.'
    },
    {
      organization: 'SANS Institute',
      role: 'Advisory Board',
      years: '2019-Present',
      description: 'Providing guidance on cybersecurity education and training programs.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Credentials & Background
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive education, certifications, and professional achievements that demonstrate 
          my commitment to excellence in cybersecurity and technology leadership.
        </p>
      </section>

      {/* Education */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Education
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium">
                    {edu.institution}
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {edu.year}
                </span>
              </div>
              <p className="text-gray-600 mb-3">
                <span className="font-medium">Focus:</span> {edu.focus}
              </p>
              <p className="text-gray-600">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Professional Certifications
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {cert.name}
                </h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                  {cert.status}
                </span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-blue-600 font-medium">{cert.issuer}</p>
                <span className="text-sm text-gray-500">{cert.year}</span>
              </div>
              <p className="text-gray-600 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Awards & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {award.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {award.organization} • {award.year}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Professional Memberships
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {professionalMemberships.map((membership, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {membership.organization}
                </h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                  {membership.role}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-3">
                {membership.years}
              </p>
              <p className="text-gray-600 text-sm">
                {membership.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Professional Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Key Achievements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Led security transformations for 50+ organizations across 15+ industries
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reduced security incidents by 85% on average across client organizations
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Achieved 100% compliance success rate for regulatory requirements
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mentored 200+ security professionals in leadership development
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Areas of Expertise</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Cybersecurity Strategy</span>
                  <span className="font-medium">20+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Risk Management</span>
                  <span className="font-medium">18+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cloud Security</span>
                  <span className="font-medium">12+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compliance & Governance</span>
                  <span className="font-medium">15+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Digital Transformation</span>
                  <span className="font-medium">10+ years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Work with a Proven Expert?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let's discuss how my credentials and experience can benefit your organization.
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

export default CredentialsPage; 