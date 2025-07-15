import React from 'react';
import HeroSection from '../components/HeroSection';
import ExecutiveSummarySection from '../components/ExecutiveSummarySection';
import ZenityHistorySection from '../components/ZenityHistorySection';
import BusinessObjectivesSection from '../components/BusinessObjectivesSection';
import LeadershipObjectivesSection from '../components/LeadershipObjectivesSection';
import ZenityCISOSection from '../components/ZenityCISOSection';
import VikasCISOPlanSection from '../components/VikasCISOPlanSection';
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