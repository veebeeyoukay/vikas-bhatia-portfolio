import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import PlatformSection from './components/PlatformSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import ZenityLabsSection from './components/ZenityLabsSection'
import ExpertValidationSection from './components/ExpertValidationSection'
import BlogsSection from './components/BlogsSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'
import WebinarBanner from './components/WebinarBanner'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ProblemsSection />
                <PlatformSection />
                <FeaturesSection />
                <TestimonialsSection />
                <ZenityLabsSection />
                <ExpertValidationSection />
                <BlogsSection />
                <FinalCTASection />
                <WebinarBanner />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 