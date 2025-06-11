import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { WebinarBanner } from '@/components/WebinarBanner'
import { ProblemsSection } from '@/components/ProblemsSection'
import { PlatformSection } from '@/components/PlatformSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ZenityLabsSection } from '@/components/ZenityLabsSection'
import { ExpertValidationSection } from '@/components/ExpertValidationSection'
import { BlogsSection } from '@/components/BlogsSection'
import { FinalCTASection } from '@/components/FinalCTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <WebinarBanner />
      <HeroSection />
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
