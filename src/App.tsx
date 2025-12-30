import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProjectLayout from './layouts/ProjectLayout';
import HomePage from './pages/HomePage';
import ProjectsLandingPage from './pages/ProjectsLandingPage';
import VikasGPTPage from './pages/VikasGPTPage';
import SOC2Page from './pages/SOC2Page';
import WarRoomPage from './pages/WarRoomPage';
import DadJokesPage from './pages/DadJokesPage';
import MeetingReview from './pages/MeetingReview_SimpleSeucrity_09112025';
import ZenityProject from './projects/ZenityProject';
import AtlasProject from './projects/atlas/AtlasProject';
import C6MedHandover from './pages/C6MedHandover';
import HandymanLanding from './pages/landing/HandymanLanding';
import AVLanding from './pages/landing/AVLanding';
import PoolLanding from './pages/landing/PoolLanding';
import GarageLanding from './pages/landing/GarageLanding';
import AITransformationHub from './pages/AITransformationHub';

function App() {
  return (
    <Routes>
      {/* Main portfolio pages with uniform styling */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/projects" element={<MainLayout><ProjectsLandingPage /></MainLayout>} />
      <Route path="/war-room" element={<MainLayout><WarRoomPage /></MainLayout>} />
      <Route path="/vikasgpt" element={<MainLayout><VikasGPTPage /></MainLayout>} />
      <Route path="/soc2" element={<MainLayout><SOC2Page /></MainLayout>} />
      <Route path="/dad-jokes" element={<MainLayout><DadJokesPage /></MainLayout>} />

      {/* Standalone pages */}
      <Route path="/meetingreview_simplesecurity_09112025" element={<MeetingReview />} />

      {/* AI Transformation Demo Project */}
      <Route path="/ai-transformation" element={<AITransformationHub />} />

      {/* Tampa Service Landing Pages */}
      <Route path="/tampa-handyman" element={<HandymanLanding />} />
      <Route path="/tampa-av" element={<AVLanding />} />
      <Route path="/tampa-pool" element={<PoolLanding />} />
      <Route path="/tampa-garage" element={<GarageLanding />} />

      {/* Project pages with unique styling but persistent nav */}
      <Route path="/projects/zenity" element={<ProjectLayout><ZenityProject /></ProjectLayout>} />
      <Route path="/projects/atlas" element={<ProjectLayout><AtlasProject /></ProjectLayout>} />
      <Route path="/projects/C6Med-Handover" element={<ProjectLayout><C6MedHandover /></ProjectLayout>} />
    </Routes>
  );
}

export default App; 