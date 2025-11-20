import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsLandingPage: React.FC = () => {
  const projects = [
      {
      id: 'MetaFan',
      title: 'Metafan',
      description: 'MetaFan is the first truly social marketplace where collectors across categories discover, showcase, authenticate, and trade items within a vibrant community, powered by AI and Web3 technologies that enhance both the emotional and financial value of collections.',
      category: 'Personal Project - Social Marketplace',
      technologies: ['AI', 'Web3', 'Social Media'],
      featured: true,
      url: 'https://metafan.net'
    },
    {
      id: 'GATI-2025',
      title: 'Gorrie Great American Teach In - 2025',
      description: 'A professional, interactive AI education presentation system built for Gorrie Elementary School\'s Great American Teach-In. This platform provides engaging presentations, live AI demos, parent resources, and comprehensive analytics for educators.',
      category: 'Personal Project - Education',
      technologies: ['AI', 'Education', 'Presentation'],
      featured: true,
      url: 'https://gorrie-gati2025-ai.netlify.app/'
    },
    {
      id: 'CloseRGC',
      title: 'CloseGRC',
      description: 'Close is a Sales Acceleration tool for that enables b2b companies to increase sales velocity by proactively understand their prospects compliance requirements.',
      category: 'Personal Project - SaaS Application',
      technologies: ['Sales Acceleration', 'Compliance', 'Sales Enablement'],
      featured: true,
      imageUrl: 'https://www.closegrc.com/wp-content/uploads/2025/07/CloseGRC-Logo-1.png',
      url: 'https://closegrc.com'
    },
    {
      id: 'wacassa',
      title: 'WaCassa',
      description: 'Modern, AI-powered WhatsApp Business management platform that enables teams to collaboratively handle customer conversations with built-in bilingual support (English/Spanish).',
      category: 'Personal Project - SaaS Application',
      technologies: ['React', 'TypeScript', 'AI Translation', 'CRM', 'Real-time Analytics'],
      featured: true,
      imageUrl: '/api/placeholder/400/250',
      url: 'https://wacassa.netlify.app'
    },
    {
      id: 'icarrie',
      title: 'iCarrie',
      description: 'AI-powered luxury collection assistant designed to help users organize, track, and care for their designer handbags and shoes with smart insights and personalized recommendations.',
      category: 'Personal Project - AI Application',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI Insights'],
      featured: true,
      imageUrl: '/api/placeholder/400/250',
      url: 'https://icarrie.netlify.app'
    },
    {
      id: 'parentalcontrols',
      title: 'ParentalControls',
      description: 'AI-powered parental control guidance that makes family digital safety simple. Get step-by-step help implementing bulletproof protection across all devices.',
      category: 'Personal Project - Family Safety',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI Guidance', 'Threat Intelligence'],
      featured: true,
      imageUrl: '/api/placeholder/400/250',
      url: 'https://parentalcontrols.netlify.app'
    },
    {
      id: 'On the Calendar',
      title: 'On the Calendar',
      description: 'Transforms paper event calendars into shareable digital calendars that parents can add to their phones with one click. Built for PTAs, schools, and community organizations.',
      category: 'Personal Project - On the Calendar',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI Guidance', 'Threat Intelligence'],
      featured: true,
      imageUrl: '/api/placeholder/400/250',
      url: 'https://on-the-calendar.netlify.app'
    },
    {
      id: 'Honored Coffee',
      title: 'Honored Coffee',
      description: 'To honor military service and sacrifice by creating exceptional coffee experiences while supporting veteran employment and mental health awareness initiatives.',
      category: 'Collaboration with a Veteran - Coffee Brand',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI Guidance', 'Threat Intelligence'],
      featured: true,
      url: 'https://honoredcoffee.com/'
    },  
    {
      id: 'KidsQuest Ai',
      title: 'KidsQuest Ai',
      description: "KidsQuest turns your child's weekly homework into engaging games. Track progress, celebrate achievements, and make learning fun!",
      category: 'Personal Project - SaaS Application',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Game Development'],
      featured: true,
      url: 'https://kidsquest-ai.netlify.app/' 
    },
    {
      id: 'MugHub',
      title: 'MugHub',
      description: "The Ultimate Starbucks Collector Community - Showcase your prized mugs, trade rare finds, and connect with fellow collectors from around the world",
      category: 'Personal Project - Social Marketplace',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Social Media'],
      featured: true,
      url: 'https://mug-share-hub.netlify.app/' 
    },
    {
      id: 'NIST CSF Assessment',
      title: 'NIST CSF Assessment',
      description: 'Simple NIST CSF Assessment',
      category: 'Personal Project - NIST CSF Assessment',
      technologies: ['NIST CSF', 'Assessment', 'Security'],
      featured: true,
      imageUrl: '/api/placeholder/400/250',
      url: 'https://nist-guardian-muse.lovable.app/'
    },
    {
      id: 'zenity',
      title: 'Zenity CISO Strategy',
      description: 'Comprehensive cybersecurity strategy and implementation plan for Zenity, including risk assessment, compliance framework, and technology roadmap.',
      category: 'Job Application - CISO',
      technologies: ['Risk Assessment', 'Compliance', 'Technology Roadmap'],
      featured: true,
      imageUrl: '/api/placeholder/400/250'
    },
    {
      id: 'Recipies from the heart',
      title: 'Recipies from the heart',
      description: 'Recipies from the heart is a SaaS application that enables businesses to protect their data and systems from cyber threats.',
      category: 'Personal Project - SaaS Application',
      technologies: ['AI', 'Cybersecurity', 'SaaS'],
      featured: true,
    },
    {
      id: 'C6Med-Handover',
      title: 'C6Med-Handover',
      description: 'Medical handover management system designed to streamline clinical communication and patient care transitions.',
      category: 'Personal Project - Healthcare Application',
      technologies: ['React', 'TypeScript', 'Healthcare', 'Clinical Communication'],
      featured: true,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Projects & Case Studies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Strategic initiatives and cybersecurity transformations I've led across various organizations.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Interested in Working Together?
        </h2>
        <p className="text-gray-600 mb-6">
          Let's discuss how I can help with your cybersecurity and technology leadership needs.
        </p>
        <a
          href="/#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
};

export default ProjectsLandingPage; 