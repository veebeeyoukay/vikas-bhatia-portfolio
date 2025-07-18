import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsLandingPage: React.FC = () => {
  const projects = [
    {
      id: 'MetaFan',
      title: 'Metafan',
      description: 'MetaFan is the first truly social marketplace where collectors across categories discover, showcase, authenticate, and trade items within a vibrant community, powered by AI and Web3 technologies that enhance both the emotional and financial value of collections.',
      category: 'Social Marketplace',
      technologies: ['AI', 'Web3', 'Social Media'],
      featured: true,
    },
    {
      id: 'zenity',
      title: 'Zenity CISO Strategy',
      description: 'Comprehensive cybersecurity strategy and implementation plan for Zenity, including risk assessment, compliance framework, and technology roadmap.',
      category: 'Cybersecurity Strategy',
      technologies: ['Risk Assessment', 'Compliance', 'Technology Roadmap'],
      featured: true,
      imageUrl: '/api/placeholder/400/250'
    }
    // Future projects will be added here
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
                
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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