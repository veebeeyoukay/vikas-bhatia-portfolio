import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'vikas@example.com',
      icon: '📧',
      link: 'mailto:vikas@example.com'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/vikasbhatia',
      icon: '💼',
      link: 'https://linkedin.com/in/vikasbhatia'
    },
    {
      title: 'Schedule Meeting',
      value: 'Book a consultation',
      icon: '📅',
      link: 'https://app.usemotion.com/meet/vikas-bhatia/JP-meeting'
    }
  ];

  const services = [
    'Cybersecurity Strategy & Advisory',
    'Security Architecture & Design',
    'Digital Transformation Security',
    'Incident Response & Recovery',
    'Compliance & Governance',
    'Executive Coaching & Training',
    'Other'
  ];

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

  const projects = [
    {
      id: 'zenity',
      title: 'Zenity CISO Strategy',
      description: 'Comprehensive cybersecurity strategy and implementation plan for Zenity, including risk assessment, compliance framework, and technology roadmap.',
      category: 'Cybersecurity Strategy',
      technologies: ['Risk Assessment', 'Compliance', 'Technology Roadmap'],
      featured: true
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Vikas Bhatia
          </h2>
          <p className="text-xl text-gray-600">
            Cybersecurity executive and strategic technology leader with over 20 years of experience 
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

      {/* Expertise Section */}
      <section id="expertise" className="py-16 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Expertise & Skills
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive cybersecurity and technology leadership expertise developed over two decades 
            of hands-on experience across diverse industries and organizational scales.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Technical Skills & Proficiencies
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900">{skill.name}</h4>
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
        </div>

        {/* Industry Expertise */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Industry Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryExpertise.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {industry.industry}
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Experience:</span> {industry.experience}</p>
                  <p><span className="font-medium">Focus:</span> {industry.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.year} • {cert.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
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
      </section>

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

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Education
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
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
        </div>

        {/* Awards & Recognition */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Awards & Recognition
          </h3>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {award.title}
                    </h4>
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Projects & Case Studies
          </h2>
          <p className="text-xl text-gray-600">
            Strategic initiatives and cybersecurity transformations I've led across various organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Ready to transform your organization's security posture? Let's discuss how I can help 
            you achieve your cybersecurity and technology leadership goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send a Message
            </h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-800 font-medium">
                    There was an error sending your message. Please try again or contact me directly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your organization's security needs and how I can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{info.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                What to Expect
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Response within 24 hours
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free initial consultation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Confidential discussion
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tailored engagement proposal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center py-16 bg-blue-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Work Together?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let's discuss how I can help transform your organization's security posture.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Get In Touch
          </a>
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

export default HomePage; 