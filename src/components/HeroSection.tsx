import { Button } from "@/components/ui/button"
import { Shield, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import vikasImage from '@/assets/Vikas_Team_Portaits-Neil_Raja-16.png';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center cyber-grid">
      {/* Dynamic background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2393c5fd%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Professional Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Headshot with glassmorphism frame */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-600/20">
                <img 
                  src={vikasImage}
                  alt="Vikas Bhatia - AI-Cybersecurity Executive"
                  className="w-full h-full object-cover"
                />
                {/* Tech overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-amber-500/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-semibold text-white">TS/SCI/NATO</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Strategic Defense.
              <br />
              <span className="gradient-text">AI Innovation.</span>
              <br />
              Executive Leadership.
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-slate-300 mb-6">
              Helping Gen X executives navigate risk and innovation without the technical jargon.
              <br />
              <span className="text-amber-400 font-semibold">Built for speed, security, and ROI.</span>
            </p>

            {/* Brief Description */}
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Business-first cybersecurity executive with 25+ years leading security transformations across 130+ companies. 
              TS/SCI/NATO cleared. Founder. Strategic advisor.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                onClick={() => navigate('/war-room')}
              >
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Enter the War Room
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 font-semibold px-8 py-6 text-lg transition-all duration-300 group"
                onClick={() => scrollToSection('resume')}
              >
                View Career Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>130+ Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>25+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
