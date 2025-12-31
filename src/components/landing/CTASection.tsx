import React from 'react';
import { BusinessConfig } from '@/types/landing';
import { Phone, MessageSquare, Bot, Sparkles, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  config: BusinessConfig;
}

const CTASection: React.FC<CTASectionProps> = ({ config }) => {
  const serviceAreasText = config.serviceAreas
    ? config.serviceAreas.slice(0, 3).join(', ')
    : 'South Tampa';

  return (
    <section
      className="relative py-20 px-4 text-white overflow-hidden"
      style={{ backgroundColor: config.primaryColor }}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Trusted by {serviceAreasText}'s Leading Families</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Time is Valuable
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Connect with us your way — instant response, zero pressure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Quick Call */}
          <a
            href={`tel:${config.phoneNumber}`}
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 group-hover:bg-current/10 flex items-center justify-center mb-4 transition-colors">
                <Phone size={28} className="group-hover:text-current" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quick Call</h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 mb-3">Immediate expert advice</p>
              <div className="flex items-center gap-1 text-sm font-semibold">
                <span>Tap to Call</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          {/* Text Us */}
          <a
            href={`sms:${config.phoneNumber}?body=Hi, I'm interested in ${config.name} services. `}
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 group-hover:bg-current/10 flex items-center justify-center mb-4 transition-colors">
                <MessageSquare size={28} className="group-hover:text-current" />
              </div>
              <h3 className="font-bold text-lg mb-2">Text/WhatsApp</h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 mb-3">&lt;15 min response</p>
              <div className="flex items-center gap-1 text-sm font-semibold">
                <span>Message Us</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          {/* AI Chat */}
          <button
            onClick={() => {
              // TODO: Integrate with AI chat bot
              alert('AI Assistant integration coming soon! For now, please call or text us.');
            }}
            className="group bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border-2 border-white/40 rounded-2xl p-6 hover:from-white hover:to-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded-full">
              LIVE
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 group-hover:bg-current/10 flex items-center justify-center mb-4 transition-colors">
                <Bot size={28} className="group-hover:text-current" />
              </div>
              <h3 className="font-bold text-lg mb-2">AI Assistant</h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 mb-3">24/7 instant answers</p>
              <div className="flex items-center gap-1 text-sm font-semibold">
                <span>Start Chat</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Available Now</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <span>White-Glove Service</span>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <span>No Obligation</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
