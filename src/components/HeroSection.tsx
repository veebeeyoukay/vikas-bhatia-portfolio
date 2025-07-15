import { Button } from "@/components/ui/button"
import { Shield, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Typewriter from './Typewriter';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Subtle tech background overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Side - Professional Headshot */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Headshot with tech overlay */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C4D03AQFJwVMf2-PbSw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1559210662788?e=1758153600&v=beta&t=LzDoZzh_j1niwmROR36MTt74IR7om6D94HwcDSLTEMk"
                  alt="Vikas Bhatia - AI-Cybersecurity Executive"
                  className="w-full h-full object-cover"
                />
                {/* Tech overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating tech elements around headshot */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right Side - Value Proposition */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              AI-Cybersecurity Executive
            </h1>

            {/* Subheadline with Typewriter */}
            <div className="text-xl lg:text-2xl text-gray-300 mb-8">
              <span>Your next partner 🤝 for:</span>
              <div className="mt-2 text-blue-400 font-semibold">
                <Typewriter 
                  words={["Cybersecurity", "AI", "Startup Technology"]}
                  speed={80}
                  delay={3000}
                  className="text-2xl lg:text-3xl"
                />
              </div>
            </div>

            {/* Brief Description */}
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Experienced cybersecurity executive who enables safe AI innovation through proven risk management and technical expertise. 25+ years leading security transformations for Fortune 500 companies, government agencies, and startups.
            </p>

            {/* Primary CTA Button */}
            <div className="mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  // Add your scheduling logic here
                  console.log('Schedule Introduction clicked');
                }}
              >
                Schedule Introduction
              </Button>
            </div>

            {/* Key Credentials/Certifications */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {/* TS/SCI Cleared */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">TS/SCI Cleared</span>
              </div>

              {/* C|CISO Certified */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">C|CISO Certified</span>
              </div>

              {/* $750K Raised */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">$750K Raised</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
