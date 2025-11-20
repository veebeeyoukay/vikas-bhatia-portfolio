import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProjectLayout from './layouts/ProjectLayout';
import HomePage from './pages/HomePage';
import ProjectsLandingPage from './pages/ProjectsLandingPage';
import VikasGPTPage from './pages/VikasGPTPage';
import SOC2Page from './pages/SOC2Page';
import WarRoomPage from './pages/WarRoomPage';
import MeetingReview from './pages/MeetingReview_SimpleSeucrity_09112025';
import ZenityProject from './projects/ZenityProject';
import C6MedHandover from './pages/C6MedHandover';

function App() {
  return (
    <Routes>
      {/* Main portfolio pages with uniform styling */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/projects" element={<MainLayout><ProjectsLandingPage /></MainLayout>} />
      <Route path="/war-room" element={<MainLayout><WarRoomPage /></MainLayout>} />
      <Route path="/vikasgpt" element={<MainLayout><VikasGPTPage /></MainLayout>} />
      <Route path="/soc2" element={<MainLayout><SOC2Page /></MainLayout>} />

      {/* Standalone pages */}
      <Route path="/meetingreview_simplesecurity_09112025" element={<MeetingReview />} />

      {/* Project pages with unique styling but persistent nav */}
      <Route path="/projects/zenity" element={<ProjectLayout><ZenityProject /></ProjectLayout>} />
      <Route path="/projects/C6Med-Handover" element={<ProjectLayout><C6MedHandover /></ProjectLayout>} />
    </Routes>
  );
}

export default App; 