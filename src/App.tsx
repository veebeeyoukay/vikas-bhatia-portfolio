import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProjectLayout from './layouts/ProjectLayout';
import HomePage from './pages/HomePage';
import ProjectsLandingPage from './pages/ProjectsLandingPage';
import VikasGPTPage from './pages/VikasGPTPage';
import ZenityProject from './projects/ZenityProject';

function App() {
  return (
    <Routes>
      {/* Main portfolio pages with uniform styling */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/projects" element={<MainLayout><ProjectsLandingPage /></MainLayout>} />
      <Route path="/vikasgpt" element={<MainLayout><VikasGPTPage /></MainLayout>} />
      
      {/* Project pages with unique styling but persistent nav */}
      <Route path="/projects/zenity" element={<ProjectLayout><ZenityProject /></ProjectLayout>} />
    </Routes>
  );
}

export default App; 