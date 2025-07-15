import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Vikas Bhatia
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Cybersecurity Executive & Strategic Technology Leader
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What I Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
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

      {/* Featured Projects */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Zenity CISO Strategy
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive cybersecurity strategy and implementation plan for Zenity, including risk assessment, compliance framework, and technology roadmap.
              </p>
              <Link
                to="/projects/zenity"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Project →
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                More Projects Coming
              </h3>
              <p className="text-gray-600 mb-4">
                Additional case studies and strategic initiatives will be added as they are completed.
              </p>
              <Link
                to="/projects"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Work Together?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let's discuss your cybersecurity and technology leadership needs.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
        >
          Start a Conversation
        </Link>
      </section>
    </div>
  );
};

export default HomePage; 