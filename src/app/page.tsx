import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WebinarBanner from '@/components/WebinarBanner'
import ProblemsSection from '@/components/ProblemsSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ZenityLabsSection from '@/components/ZenityLabsSection'
import ExpertValidationSection from '@/components/ExpertValidationSection'
import BlogsSection from '@/components/BlogsSection'
import FinalCTASection from '@/components/FinalCTASection'
import Footer from '@/components/Footer'
import PlatformSection from '@/components/PlatformSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <WebinarBanner />
      <HeroSection />
      <section id="whynow" className="min-h-[60vh] bg-[hsl(var(--zenity-navy))] text-white py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Why now?</h1>
          <p className="text-lg text-gray-300 mb-10">
            As Zenity grows, the need for a dedicated security leader has never been more urgent. Here's why hiring a CISO is a strategic imperative at this stage:
          </p>
          <div className="space-y-8">
            <div className="bg-[hsl(var(--zenity-purple-dark))] border border-[hsl(var(--zenity-purple-mid))] rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-2">1. Enterprise Security Credibility Gap</h2>
              <p className="text-gray-300">While we provide security governance solutions, we've reached a scale where enterprise prospects expect our internal security practices to be exemplary. A CISO hire signals our commitment to security excellence and addresses the "physician, heal thyself" challenge.</p>
            </div>
            <div className="bg-[hsl(var(--zenity-purple-dark))] border border-[hsl(var(--zenity-purple-mid))] rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-2">2. Growth-Stage Risk Inflection Point</h2>
              <p className="text-gray-300">Our rapid growth from Series B funding ($38M) exposes us to new levels of security and compliance risk. Customer data volume is increasing, our development team is expanding, and our product capabilities are growing more sophisticated. These factors create significant new attack surfaces we must systematically protect.</p>
            </div>
            <div className="bg-[hsl(var(--zenity-purple-dark))] border border-[hsl(var(--zenity-purple-mid))] rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-2">3. Security as a Revenue Driver</h2>
              <p className="text-gray-300">Enterprise security assessments and compliance requirements are becoming friction points in our sales cycle. A CISO will transform security from a potential sales blocker to a competitive advantage by establishing frameworks that accelerate sales to security-conscious organizations.</p>
            </div>
            <div className="bg-[hsl(var(--zenity-purple-dark))] border border-[hsl(var(--zenity-purple-mid))] rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-2">4. AI Security Innovation Leadership</h2>
              <p className="text-gray-300">As we expand our AI Agent security offerings, we need an executive security voice to participate in emerging AI security standards development and thought leadership, positioning Zenity as the trusted authority in this rapidly evolving space.</p>
            </div>
            <div className="bg-[hsl(var(--zenity-purple-dark))] border border-[hsl(var(--zenity-purple-mid))] rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-2">5. Investor Risk Management Expectations</h2>
              <p className="text-gray-300">Our Series B investors expect mature governance and risk management processes as we scale toward a potential future exit. A CISO delivers the security governance structures that protect their investment and prepare us for future funding rounds.</p>
            </div>
          </div>
        </div>
      </section>
      <ProblemsSection />
      <PlatformSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ZenityLabsSection />
      <ExpertValidationSection />
      <BlogsSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
