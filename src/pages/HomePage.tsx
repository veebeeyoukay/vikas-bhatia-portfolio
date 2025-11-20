import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import InteractiveResume from '../components/InteractiveResume';
import PersonalInterests from '../components/PersonalInterests';
import AIAdvantageSection from '../components/AIAdvantageSection';
import { companies } from '../data/companies';
// import { CompanyCloudDemo } from '../components/InteractiveCompanyCloud';

// Import certification logos
import qteLogo from '@/assets/logos/QTE.jpeg';
import ccisoLogo from '@/assets/logos/CCISO.jpg';
import cisspLogo from '@/assets/logos/CISSP.png';
import cippLogo from '@/assets/logos/cipp.png';

const HomePage: React.FC = () => {



  const education = [
    {
      degree: 'BA Hons. Economics (with German Language)',
      institution: 'Kingston University, UK',
      year: '1998',
      focus: 'Economics & International Business',
      description: 'Combined rigorous economic analysis with German language proficiency, providing a strong foundation for international business and strategic thinking.'
    }
  ];



  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection />

      {/* Interactive Resume */}
      <InteractiveResume />

      {/* Personal Interests */}
      <PersonalInterests />

      {/* AI Advantage Section */}
      <AIAdvantageSection />

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Vikas Bhatia
          </h2>
          <p className="text-xl text-gray-600">
            Cybersecurity executive and strategic technology leader with over 25 years of experience 
            transforming organizations through innovative security solutions and digital transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                My passion for technology and security began early in my career when I witnessed 
                the transformative power of well-implemented cybersecurity strategies. Over two decades, 
                I've had the privilege of working with organizations ranging from startups to Fortune 500 
                companies, helping them navigate the complex landscape of digital security.
              </p>
              <p>
                I believe that effective cybersecurity isn't just about protecting systems—it's about 
                enabling business growth while managing risk intelligently. This philosophy has guided 
                my approach to every engagement, from developing comprehensive security frameworks to 
                leading digital transformation initiatives.
              </p>
              <p>
                Today, I focus on helping organizations build resilient, future-ready security programs 
                that not only protect their assets but also drive competitive advantage and enable 
                innovation.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Facts</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Experience:</span>
                <span className="font-medium">25+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Organizations:</span>
                <span className="font-medium">130+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Industries:</span>
                <span className="font-medium">15+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Certifications:</span>
                <span className="font-medium">QTE, C|CISO, CISSP, CIPP+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Security Clearance:</span>
                <span className="font-medium">TS/SCI/NATO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Experience Section */}
      {/* <section id="expertise" className="py-16 bg-gray-50 rounded-lg">
        <CompanyCloudDemo />
      </section> */}

      {/* Services Section */}
      {/* <section id="services" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Services & Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive cybersecurity and technology leadership services designed to transform 
            your organization's security posture and enable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Cybersecurity Strategy
            </h3>
            <p className="text-gray-600">
              Develop comprehensive security frameworks and risk management strategies for enterprise organizations.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Technology Leadership
            </h3>
            <p className="text-gray-600">
              Lead technology transformations and digital initiatives with focus on security and compliance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Executive Advisory
            </h3>
            <p className="text-gray-600">
              Provide strategic guidance to C-suite executives on cybersecurity, risk, and technology decisions.
            </p>
          </div>
        </div>
      </section> */}

      {/* Credentials Section */}
      <section id="credentials" className="py-16 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Credentials & Background
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive education, certifications, and professional achievements that demonstrate 
            my commitment to excellence in cybersecurity and technology leadership.
          </p>
        </div>

        {/* Education & Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Education
          </h3>
          <div className="flex justify-center mb-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
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
          
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              {
                name: 'QTE',
                logo: qteLogo,
                url: 'https://www.accdglobal.org/certified-director-programs/qualified-technology-expert',
                title: 'Boardroom Qualified Technology Expert'
              },
              {
                name: 'C|CISO',
                logo: ccisoLogo,
                url: 'https://www.eccouncil.org/programs/certified-chief-information-security-officer-cciso/',
                title: 'Certified Chief Information Security Officer'
              },
              {
                name: 'CISSP',
                logo: cisspLogo,
                url: 'https://www.isc2.org/Certifications/CISSP',
                title: 'Certified Information Systems Security Professional'
              },
              {
                name: 'CIPP',
                logo: cippLogo,
                url: 'https://iapp.org/certify/cipp/',
                title: 'Certified Information Privacy Professional'
              }
            ].map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-shadow group"
                title={cert.title}
              >
                <img
                  src={cert.logo}
                  alt={cert.title}
                  className="w-20 h-20 object-contain group-hover:scale-105 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by ....
          </h2>
          <p className="text-xl text-gray-600">
            Organizations across multiple industries, from Fortune 500 to startups.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
          {companies.map((company) => (
            <div 
              key={company.domain} 
              className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-shadow"
              title={company.name}
            >
              <img
                src={`https://logo.clearbit.com/${company.domain}`}
                alt={`${company.name} logo`}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${company.name}&background=0D8ABC&color=fff&size=48`;
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/projects" 
            className="text-blue-600 hover:text-blue-700 font-medium text-lg"
          >
            See my current AI Development projects →
          </Link>
        </div>
      </section>

      {/* VikasGPT CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Quick Insights?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Chat with VikasGPT - an AI assistant trained on my expertise in cybersecurity and technology leadership
          </p>
          <Link
            to="/vikasgpt"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Have a quick chat with VikasGPT
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 