import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative gradient-bg-main overflow-hidden">
      {/* Orbital Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Outer Orbit */}
          <div className="relative w-[600px] h-[600px] animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[hsl(var(--zenity-blue))] rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[hsl(var(--zenity-purple-bright))] rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[hsl(var(--zenity-purple-accent))] rounded-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[hsl(var(--zenity-blue))] rounded-full"></div>
          </div>
          
          {/* Middle Orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-[spin_15s_linear_infinite_reverse]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[hsl(var(--zenity-purple-mid))] rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[hsl(var(--zenity-blue))] rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[hsl(var(--zenity-purple-bright))] rounded-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[hsl(var(--zenity-purple-accent))] rounded-full"></div>
          </div>
          
          {/* Inner Orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] animate-[spin_10s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[hsl(var(--zenity-blue))] rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[hsl(var(--zenity-purple-bright))] rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[hsl(var(--zenity-purple-mid))] rounded-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[hsl(var(--zenity-purple-accent))] rounded-full"></div>
          </div>
          
          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[hsl(var(--zenity-purple-bright))] rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Securing AI Agents{" "}
            <span className="gradient-text">
              Everywhere
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
          Building a robust security foundation for Zenity's innovative future.
          <p>A strategic security partnership to enable enterprise trust and accelerate growth.</p>
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-white text-[hsl(var(--zenity-navy))] hover:bg-gray-100 font-medium px-8 py-3"
            >
              Assess Your Risk
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-[hsl(var(--zenity-navy))] hover:bg-gray-100 font-medium px-8 py-3"
            >
              See Vikas in Action
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
