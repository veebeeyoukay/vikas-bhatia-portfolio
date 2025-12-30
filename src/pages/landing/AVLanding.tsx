import React from 'react';
import LandingTemplate from '@/components/landing/LandingTemplate';
import { businessConfigs } from '@/config/businesses';

const AVLanding: React.FC = () => {
  return <LandingTemplate config={businessConfigs.av} />;
};

export default AVLanding;
