import React from 'react';
import { ServiceItem } from '@/types/landing';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  primaryColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, primaryColor }) => {
  const iconName = service.icon
    .split('-')
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');

  const IconComponent = (Icons as any)[iconName] || Icons.Wrench;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: `${primaryColor}15` }}
      >
        <IconComponent size={24} style={{ color: primaryColor }} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
      {service.priceRange && (
        <p className="text-sm font-medium" style={{ color: primaryColor }}>
          {service.priceRange}
        </p>
      )}
    </div>
  );
};

export default ServiceCard;
