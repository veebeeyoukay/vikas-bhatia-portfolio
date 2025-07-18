import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
            Vikas Bhatia
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-700 mb-12 leading-relaxed">
            Cybersecurity Executive & Strategic Technology Leader
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
