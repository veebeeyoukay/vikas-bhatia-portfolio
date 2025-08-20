import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '@/lib/utils';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Mobile Collapsed View */}
        <div className="md:hidden">
          {/* Expandable Content - appears above the fixed bar */}
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[400px] pb-4' : 'max-h-0'}`}>
            <div className="pt-6 px-2">
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Cybersecurity executive and strategic technology leader with over 20 years of experience 
                transforming organizations through innovative security solutions and digital transformation.
              </p>
              
              {/* Quick Links */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="text-gray-300 hover:text-white text-sm transition-colors bg-transparent border-none cursor-pointer text-left"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('expertise')}
                      className="text-gray-300 hover:text-white text-sm transition-colors bg-transparent border-none cursor-pointer text-left"
                    >
                      Previous Experience
                    </button>
                  </li>
                  <li>
                    <Link to="/projects" className="text-gray-300 hover:text-white text-sm transition-colors">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Bottom Section */}
              <div className="border-t border-gray-800 pt-4 space-y-3">
                <div className="text-gray-400 text-xs">
                  © {currentYear} Vikas Bhatia. All rights reserved.
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <Link to="/privacy" className="text-gray-400 hover:text-white text-xs transition-colors">
                      Privacy Policy
                    </Link>
                    <Link to="/terms" className="text-gray-400 hover:text-white text-xs transition-colors">
                      Terms of Service
                    </Link>
                  </div>
                  <button
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Back to top"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Always visible fixed bar at bottom */}
          <div className="py-4 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold">Vikas Bhatia</h3>
                {/* Social Icons */}
                <div className="flex space-x-3 mt-2">
                  <a
                    href="https://www.linkedin.com/in/vikasbhatiauk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/vikasbhatiauk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/veebeeyoukay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label={isExpanded ? "Collapse footer" : "Expand footer"}
              >
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronUp className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View (unchanged) */}
        <div className="hidden md:block py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Vikas Bhatia</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Cybersecurity executive and strategic technology leader with over 20 years of experience 
                transforming organizations through innovative security solutions and digital transformation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/vikasbhatiauk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/vikasbhatiauk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/veebeeyoukay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('expertise')}
                    className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left"
                  >
                    Previous Experience
                  </button>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Vikas Bhatia. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Back to top"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
