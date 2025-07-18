import React from 'react';
import HeroSection from '../components/HeroSection';
import ExecutiveSummarySection from './zenity/components/ExecutiveSummarySection';
import ZenityHistorySection from './zenity/components/ZenityHistorySection';
import BusinessObjectivesSection from './zenity/components/BusinessObjectivesSection';
import LeadershipObjectivesSection from './zenity/components/ZenityLeadershipObjectivesSection';
import ZenityCISOSection from './zenity/components/ZenityCISOSection';
import VikasCISOPlanSection from './zenity/components/VikasCISOPlanSection';
import AboutVikasSection from '../components/AboutVikasSection';

const ZenityProject: React.FC = () => {
  return (
    <div className="zenity-project">
      <HeroSection />
      <ExecutiveSummarySection />
      <ZenityHistorySection />
      <BusinessObjectivesSection />
      <LeadershipObjectivesSection />
      <ZenityCISOSection />
      <VikasCISOPlanSection />
      <AboutVikasSection />
    </div>
  );
};

export default ZenityProject; 