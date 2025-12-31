import React from 'react';
import { ServiceItem } from '@/types/landing';
import ROICalculator from './ROICalculator';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  primaryColor: string;
  businessType?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, primaryColor, businessType }) => {
  const iconName = service.icon
    .split('-')
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');

  const IconComponent = (Icons as any)[iconName] || Icons.Wrench;

  const handleClick = () => {
    if (service.slug) {
      // Navigate to service detail page
      window.location.hash = `#/services/${service.slug}`;
    }
  };

  const isClickable = Boolean(service.slug);

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border-2 border-gray-200 p-6 transition-all ${
        isClickable ? 'cursor-pointer hover:shadow-lg hover:border-gray-300 hover:-translate-y-1' : ''
      }`}
      onClick={isClickable ? handleClick : undefined}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${primaryColor}15` }}
        >
          <IconComponent size={24} style={{ color: primaryColor }} />
        </div>
        {isClickable && (
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Details</span>
            <Icons.ArrowRight size={16} />
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{service.description}</p>

      {service.priceRange && (
        <p className="text-sm font-medium mb-4" style={{ color: primaryColor }}>
          Investment: {service.priceRange}
        </p>
      )}

      {/* ICP Perfect For */}
      {service.icpRelevance && service.icpRelevance.perfectFor.length > 0 && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Icons.Target size={16} className="text-blue-600" />
            <span className="text-xs font-semibold text-blue-900">Perfect For:</span>
          </div>
          <ul className="space-y-1">
            {service.icpRelevance.perfectFor.slice(0, 2).map((item, index) => (
              <li key={index} className="text-xs text-blue-800 flex items-start gap-1">
                <Icons.Check size={12} className="flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ROI Calculator */}
      {service.roiData && (
        <div className="mt-4">
          <ROICalculator
            serviceName={service.title}
            data={service.roiData}
            primaryColor={primaryColor}
            compact={true}
          />
        </div>
      )}

      {isClickable && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            className="w-full text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
            style={{
              backgroundColor: `${primaryColor}15`,
              color: primaryColor,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            View Full Details & ROI Calculator
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
