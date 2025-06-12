import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ExecutiveSummarySection from './components/ExecutiveSummarySection'
import ZenityHistorySection from './components/ZenityHistorySection'
import BusinessObjectivesSection from './components/BusinessObjectivesSection'
import LeadershipObjectivesSection from './components/LeadershipObjectivesSection'
import ZenityCISOSection from './components/ZenityCISOSection'
import VikasCISOPlanSection from './components/VikasCISOPlanSection'
import AboutVikasSection from './components/AboutVikasSection'
import Footer from './components/Footer'
import CountdownPage from './components/CountdownPage'

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
                <ExecutiveSummarySection />
                <ZenityHistorySection />
                <BusinessObjectivesSection />
                <LeadershipObjectivesSection />
                <ZenityCISOSection />
                <VikasCISOPlanSection />
                <AboutVikasSection />
              </>
            }
          />
          <Route path="/countdown" element={<CountdownPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 