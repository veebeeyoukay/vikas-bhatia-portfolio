import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProjectLayout from './layouts/ProjectLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExpertisePage from './pages/ExpertisePage';
import ServicesPage from './pages/ServicesPage';
import CredentialsPage from './pages/CredentialsPage';
import ContactPage from './pages/ContactPage';
import ProjectsLandingPage from './pages/ProjectsLandingPage';
import ZenityProject from './projects/ZenityProject';

function App() {
  return (
    <Routes>
      {/* Main portfolio pages with uniform styling */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
      <Route path="/expertise" element={<MainLayout><ExpertisePage /></MainLayout>} />
      <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
      <Route path="/credentials" element={<MainLayout><CredentialsPage /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
      <Route path="/projects" element={<MainLayout><ProjectsLandingPage /></MainLayout>} />
      
      {/* Project pages with unique styling but persistent nav */}
      <Route path="/projects/zenity" element={<ProjectLayout><ZenityProject /></ProjectLayout>} />
    </Routes>
  );
}

export default App; 