import React from 'react';
import LandingTemplate from '@/components/landing/LandingTemplate';
import { businessConfigs } from '@/config/businesses';

const PoolLanding: React.FC = () => {
  return <LandingTemplate config={businessConfigs.pool} />;
};

export default PoolLanding;
