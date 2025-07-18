import { Button } from "@/components/ui/button"
import { Shield, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Typewriter from './Typewriter';


const HeroSection = () => {
  const navigate = useNavigate();

  return (
        <section className="relative overflow-hidden">
      {/* Subtle tech background overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
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
                                       </div>
          </div>

          {/* Right Side - Value Proposition */}
          <div className="text-center lg:text-left">

          {/* Main Headline */}
                      <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
              AI-Cybersecurity Executive
          </h1>

            {/* Subheadline with Typewriter */}
            <div className="text-xl lg:text-2xl text-black mb-8">
              <span>Your next partner 🤝 for:</span>
              <div className="mt-2 text-blue-400 font-bold">
                <Typewriter 
                  words={["Cybersecurity", "Artificial Intelligence", "Startup Technology"]}
                  speed={80}
                  delay={3000}
                  className="text-2xl lg:text-3xl font-bold"
                />
              </div>
            </div>
            {/* Brief Description */}
            <p className="text-lg lg:text-xl text-black mb-8 leading-relaxed max-w-2xl">
              Experienced cybersecurity executive who enables safe AI innovation through proven risk management and technical expertise. 25+ years leading security transformations for Fortune 500 companies, government agencies, and startups.
            </p>

            {/* Primary CTA Button */}
            <div className="mb-8">


          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                // Navigate to projects page
                navigate('/projects');
              }}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-300"
              onClick={() => {
                // Navigate to contact page
                navigate('/contact');
              }}
            >
             View Resume
            </Button>
                        </div>

            {/* Key Credentials/Certifications */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {/* TS/SCI Cleared */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-black/20">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-black" />
                </div>
                <span className="text-black font-medium">TS/SCI Cleared</span>
              </div>

              {/* C|CISO Certified */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-black/20">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-black" />
                </div>
                <span className="text-black font-medium">C|CISO Certified</span>
              </div>

              {/* $750K Raised */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-black/20">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-black" />
                </div>
                <span className="text-black font-medium">$750K Raised</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
