import React from 'react';
import LandingTemplate from '@/components/landing/LandingTemplate';
import { businessConfigs } from '@/config/businesses';

const GarageLanding: React.FC = () => {
  return <LandingTemplate config={businessConfigs.garage} />;
};

export default GarageLanding;
