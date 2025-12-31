import React from 'react';
import { Link } from 'react-router-dom';
import { BusinessConfig } from '@/types/landing';
import ServiceCard from './ServiceCard';
import CTASection from './CTASection';
import FAQSection from './FAQSection';
import SEO from '@/components/SEO';
import { getBusinessSEO } from '@/utils/seo-config';
import { generateLocalBusinessSchema } from '@/utils/schema-markup';
import * as Icons from 'lucide-react';

interface LandingTemplateProps {
  config: BusinessConfig;
}

const LandingTemplate: React.FC<LandingTemplateProps> = ({ config }) => {
  const primaryStyle = { backgroundColor: config.primaryColor };

  // Get SEO configuration for this business
  const seoConfig = getBusinessSEO(config.type);
  const schemaMarkup = generateLocalBusinessSchema(config.type, window.location.origin);
  const baseUrl = window.location.origin;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        canonical={seoConfig.canonical ? `${baseUrl}${seoConfig.canonical}` : undefined}
        ogImage={seoConfig.ogImage}
        schemaMarkup={schemaMarkup}
      />
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

      {/* Trust Signals Section */}
      {config.trustSignals && config.trustSignals.length > 0 && (
        <section className="py-12 px-4 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {config.trustSignals.map((signal, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icons.CheckCircle2 size={24} style={{ color: config.primaryColor }} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {config.aboutSection && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              {config.aboutSection.headline}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              {config.aboutSection.bodyParagraphs.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            {config.aboutSection.keyPoints && config.aboutSection.keyPoints.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {config.aboutSection.keyPoints.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${config.primaryColor}20` }}
                      >
                        <Icons.Star size={20} style={{ color: config.primaryColor }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Service Areas Section */}
      {config.serviceAreas && config.serviceAreas.length > 0 && (
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Proudly Serving South Tampa</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {config.serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200"
                >
                  <Icons.MapPin size={16} style={{ color: config.primaryColor }} />
                  <span className="font-medium text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Geographic Differentiators Section */}
      {config.geographicDifferentiators && config.geographicDifferentiators.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Tampa-Specific Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {config.geographicDifferentiators.map((diff, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Icons.MapPin size={20} style={{ color: config.primaryColor }} />
                  </div>
                  <p className="text-gray-700">{diff}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
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

      {/* Modern Engagement Options */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: `${config.primaryColor}10` }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Let's Talk About Your Project
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Choose how you'd like to connect with us
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Option 1: Call Me */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${config.primaryColor}20` }}
              >
                <Icons.Phone size={32} style={{ color: config.primaryColor }} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Call Me Now</h3>
              <p className="text-gray-600 text-center text-sm mb-6">
                Speak with a South Tampa expert immediately
              </p>
              <a
                href={`tel:${config.phoneNumber}`}
                className="block w-full text-center font-semibold py-3 px-6 rounded-lg text-white transition-all hover:opacity-90"
                style={{ backgroundColor: config.primaryColor }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icons.PhoneCall size={20} />
                  <span>Call Now</span>
                </div>
              </a>
              <p className="text-xs text-gray-500 text-center mt-3">
                Available 7 days/week
              </p>
            </div>

            {/* Option 2: Text/WhatsApp */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${config.primaryColor}20` }}
              >
                <Icons.MessageSquare size={32} style={{ color: config.primaryColor }} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Text Me</h3>
              <p className="text-gray-600 text-center text-sm mb-6">
                Quick responses via SMS or WhatsApp
              </p>
              <a
                href={`sms:${config.phoneNumber}?body=Hi, I'm interested in ${config.name} services. `}
                className="block w-full text-center font-semibold py-3 px-6 rounded-lg text-white transition-all hover:opacity-90 mb-2"
                style={{ backgroundColor: config.primaryColor }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icons.MessageCircle size={20} />
                  <span>Text {config.smsKeyword}</span>
                </div>
              </a>
              <a
                href={`https://wa.me/${config.phoneNumber.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in ${config.name} services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-semibold py-3 px-6 rounded-lg border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: config.primaryColor, color: config.primaryColor }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icons.MessageCircle size={20} />
                  <span>WhatsApp</span>
                </div>
              </a>
              <p className="text-xs text-gray-500 text-center mt-3">
                Usually respond in &lt;15 min
              </p>
            </div>

            {/* Option 3: AI Chat Bot */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-green-400 p-8 hover:shadow-xl transition-all hover:-translate-y-1 relative">
              <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                INSTANT
              </div>
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${config.primaryColor}20` }}
              >
                <Icons.Bot size={32} style={{ color: config.primaryColor }} />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">AI Assistant</h3>
              <p className="text-gray-600 text-center text-sm mb-6">
                Get instant answers and ROI calculations
              </p>
              <button
                onClick={() => {
                  // TODO: Integrate with AI chat bot
                  alert('AI Chat Bot integration coming soon! For now, please call or text us.');
                }}
                className="block w-full text-center font-semibold py-3 px-6 rounded-lg text-white transition-all hover:opacity-90"
                style={{ backgroundColor: config.primaryColor }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icons.Sparkles size={20} />
                  <span>Chat with AI</span>
                </div>
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">
                Available 24/7 • No waiting
              </p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <Icons.Shield size={20} style={{ color: config.primaryColor }} />
              <span className="text-sm font-medium text-gray-700">
                No pressure. No obligation. Just helpful advice.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={config.faqs} primaryColor={config.primaryColor} />

      {/* CTA Section */}
      <CTASection config={config} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl font-semibold mb-2">{config.name}</p>
          {config.serviceAreas && config.serviceAreas.length > 0 ? (
            <p className="text-gray-400 mb-4">
              Serving {config.serviceAreas.slice(0, 3).join(', ')}
              {config.serviceAreas.length > 3 && ' and more'}
            </p>
          ) : (
            <p className="text-gray-400 mb-4">Serving Tampa Bay Area</p>
          )}
          <div className="flex justify-center gap-6 mb-4">
            <a href={`tel:${config.phoneNumber}`} className="hover:text-gray-300">
              <Icons.Phone size={24} />
            </a>
            <a href={`sms:${config.phoneNumber}`} className="hover:text-gray-300">
              <Icons.MessageSquare size={24} />
            </a>
          </div>
          {config.priceRange && (
            <p className="text-sm text-gray-500">
              Premium Service • {config.priceRange}
            </p>
          )}
        </div>
      </footer>
    </div>
  );
};

export default LandingTemplate;
