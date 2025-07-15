import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ZenityFooter from '../components/ZenityFooter';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
  const location = useLocation();
  const projectName = location.pathname.split('/').pop() || 'Project';
  const isZenityProject = location.pathname === '/projects/zenity';

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium capitalize">
              {projectName}
            </span>
          </div>
        </div>
      </nav>

      {/* Project Content Area */}
      <main className="project-content">
        {children}
      </main>
      
      {/* Use ZenityFooter for Zenity project, regular Footer for other projects */}
      {isZenityProject ? <ZenityFooter /> : <Footer />}
    </div>
  );
};

export default ProjectLayout; 