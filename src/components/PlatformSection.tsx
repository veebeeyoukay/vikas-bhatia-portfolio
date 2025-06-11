import { Play } from "lucide-react"

const PlatformSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-[hsl(var(--zenity-navy))]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Defining Security{" "}
            <span className="gradient-text">for the Next Wave of AI Innovation</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              AI Agents introduce new possibilities but also new responsibilities. They require a different
              approach to security, one that helps security teams assess vulnerabilities, detect threats,
              and understand how agents behave, while empowering the business to embrace adoption.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Zenity is defining what AI Agent security and governance means. By unifying AI Observability,
              AI Security Posture Management (AISPM), and AI Detection & Response (AIDR) into a single,
              end-to-end platform, teams gain the foundation they need to secure and govern AI Agents at scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Left Content */}
          <div>
            {/* Platform Diagram - simplified representation */}
            <div className="relative">
              <div className="bg-[hsl(var(--zenity-purple-dark))] rounded-lg p-8 border border-[hsl(var(--zenity-purple-mid))]/30">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-bright))] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">AI</span>
                  </div>
                  <h3 className="text-white font-semibold">AI Observability</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-[hsl(var(--zenity-purple-mid))] rounded p-4 text-center">
                    <h4 className="text-white text-sm font-medium">AI Security Posture Management</h4>
                  </div>
                  <div className="bg-[hsl(var(--zenity-purple-mid))] rounded p-4 text-center">
                    <h4 className="text-white text-sm font-medium">AI Detection & Response</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-[hsl(var(--zenity-purple-mid))] to-[hsl(var(--zenity-purple-dark))] rounded-lg overflow-hidden relative">
              {/* Video thumbnail style background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20"></div>

              {/* 3D-style elements representing the platform */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded border border-white/20"></div>
              <div className="absolute top-8 right-8 w-8 h-8 bg-[hsl(var(--zenity-blue))]/60 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-16 h-4 bg-[hsl(var(--zenity-purple-bright))]/60 rounded"></div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[hsl(var(--zenity-purple-bright))] rounded-full flex items-center justify-center hover:bg-[hsl(var(--zenity-purple-accent))] transition-colors cursor-pointer">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>

              {/* Floating dots pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-12 gap-2 h-full p-4">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-white/20 rounded-full"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformSection
