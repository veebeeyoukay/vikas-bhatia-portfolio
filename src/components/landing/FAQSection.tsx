import React, { useState } from 'react';
import { FAQItem } from '@/types/landing';
import * as Icons from 'lucide-react';

interface FAQSectionProps {
  faqs: FAQItem[];
  primaryColor: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, primaryColor }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <Icons.HelpCircle size={16} />
            <span className="text-sm font-semibold">Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Everything You Need to Know
          </h2>
          <p className="text-gray-600">
            Quick answers from our South Tampa experts
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'shadow-lg border-gray-300'
                  : 'shadow-sm border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{
                    backgroundColor: openIndex === index ? primaryColor : `${primaryColor}15`,
                  }}
                >
                  <Icons.ChevronDown
                    size={20}
                    style={{ color: openIndex === index ? 'white' : primaryColor }}
                  />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-6 pb-6 pt-2">
                  <div
                    className="text-gray-700 leading-relaxed pl-4 border-l-4"
                    style={{ borderColor: `${primaryColor}30` }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
            <div className="w-12 h-12 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
              <Icons.MessageCircleQuestion size={24} className="text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">
              We're here to help. Connect with a South Tampa expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#engagement"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[style*="' + primaryColor + '"]')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }}
              >
                <Icons.Phone size={18} />
                <span>Talk to an Expert</span>
              </a>
              <a
                href="#engagement"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: primaryColor, color: primaryColor }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[style*="' + primaryColor + '"]')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }}
              >
                <Icons.Bot size={18} />
                <span>Chat with AI</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
