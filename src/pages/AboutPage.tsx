import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Vikas Bhatia
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cybersecurity executive and strategic technology leader with over 20 years of experience 
          transforming organizations through innovative security solutions and digital transformation.
        </p>
      </section>

      {/* Personal Story */}
      <section className="py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              My Journey
            </h2>
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
                <span className="font-medium">20+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Organizations:</span>
                <span className="font-medium">50+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Industries:</span>
                <span className="font-medium">15+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Certifications:</span>
                <span className="font-medium">12+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Core Values
          </h2>
          <p className="text-xl text-gray-600">
            The principles that guide my approach to cybersecurity and technology leadership
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Trust & Integrity</h3>
            <p className="text-gray-600">
              Building lasting relationships through transparency, honesty, and consistent delivery 
              of value to every client engagement.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
            <p className="text-gray-600">
              Embracing emerging technologies and creative solutions to solve complex security 
              challenges and drive business transformation.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Collaboration</h3>
            <p className="text-gray-600">
              Working closely with stakeholders at all levels to ensure security solutions align 
              with business objectives and drive measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Approach */}
      <section className="py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              My Approach
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strategic Assessment</h3>
                  <p className="text-gray-600">
                    Comprehensive evaluation of current security posture, business objectives, 
                    and risk tolerance to develop tailored strategies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Customized Solutions</h3>
                  <p className="text-gray-600">
                    Designing security frameworks and technology roadmaps that align with 
                    your organization's unique needs and growth trajectory.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Implementation Support</h3>
                  <p className="text-gray-600">
                    Hands-on guidance through execution, ensuring successful deployment and 
                    sustainable security practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">What Sets Me Apart</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Executive-level perspective with hands-on technical expertise
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Proven track record across diverse industries and company sizes
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Focus on business outcomes, not just technical solutions
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Long-term partnership approach with ongoing support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Work Together?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let's discuss how I can help transform your organization's security posture.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Get In Touch
          </Link>
          <Link
            to="/projects"
            className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
          >
            View Projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 