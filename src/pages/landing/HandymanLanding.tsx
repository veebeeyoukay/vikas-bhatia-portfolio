import React from 'react';
import LandingTemplate from '@/components/landing/LandingTemplate';
import { businessConfigs } from '@/config/businesses';

const HandymanLanding: React.FC = () => {
  return <LandingTemplate config={businessConfigs.handyman} />;
};

export default HandymanLanding;
