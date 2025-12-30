import React from 'react';
import { BusinessConfig } from '@/types/landing';
import { Phone, MessageSquare, Clock } from 'lucide-react';

interface CTASectionProps {
  config: BusinessConfig;
}

const CTASection: React.FC<CTASectionProps> = ({ config }) => {
  return (
    <section
      className="py-16 px-4 text-white"
      style={{ backgroundColor: config.primaryColor }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact us today for a free quote. We respond within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href={`tel:${config.phoneNumber}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            <Phone size={24} />
            Call Now
          </a>
          <a
            href={`sms:${config.phoneNumber}?body=${config.smsKeyword}`}
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-lg"
          >
            <MessageSquare size={24} />
            Text "{config.smsKeyword}"
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm opacity-80">
          <Clock size={16} />
          <span>Average response time: 2 hours</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
