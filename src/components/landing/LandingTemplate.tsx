import React from 'react';
import { Link } from 'react-router-dom';
import { BusinessConfig } from '@/types/landing';
import ServiceForm from './ServiceForm';
import ServiceCard from './ServiceCard';
import CTASection from './CTASection';
import * as Icons from 'lucide-react';

interface LandingTemplateProps {
  config: BusinessConfig;
}

const LandingTemplate: React.FC<LandingTemplateProps> = ({ config }) => {
  const primaryStyle = { backgroundColor: config.primaryColor };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/ai-transformation"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Icons.ArrowLeft size={16} />
            <span>Back to AI Transformation Hub</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <header
        className="relative py-20 px-4 text-white"
        style={primaryStyle}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {config.name}
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                {config.tagline}
              </p>
              <p className="text-lg mb-8 opacity-80">
                {config.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${config.phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  <Icons.Phone size={20} />
                  Call Now
                </a>
                <a
                  href={`sms:${config.phoneNumber}?body=${config.smsKeyword}`}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  <Icons.MessageSquare size={20} />
                  Text {config.smsKeyword}
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 rounded-xl aspect-video flex items-center justify-center">
                <Icons.Image size={64} className="opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                primaryColor={config.primaryColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: `${config.primaryColor}10` }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
          <ServiceForm
            businessType={config.type}
            services={config.services}
            primaryColor={config.primaryColor}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {config.faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium hover:bg-gray-50">
                  {faq.question}
                </summary>
                <div className="px-6 py-4 border-t border-gray-100 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection config={config} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl font-semibold mb-2">{config.name}</p>
          <p className="text-gray-400 mb-4">Serving Tampa Bay Area</p>
          <div className="flex justify-center gap-6">
            <a href={`tel:${config.phoneNumber}`} className="hover:text-gray-300">
              <Icons.Phone size={24} />
            </a>
            <a href={`sms:${config.phoneNumber}`} className="hover:text-gray-300">
              <Icons.MessageSquare size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingTemplate;
