import { Button } from "@/components/ui/button"
import { Monitor, Shield, Zap } from "lucide-react"

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32 gradient-bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
            With Zenity,{" "}
            <span className="gradient-text">You Can:</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features List */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-[hsl(var(--zenity-blue))] rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Monitor your Agentic AI environments as fast as they evolve
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Visibility into who is building AI Agents, what decisions they make,
                  and how they interact with users, systems, and data.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-[hsl(var(--zenity-blue))] rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Detect and stop risky AI agents before they go live
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Catch vulnerabilities, misconfigurations, over-permissioned access,
                  and policy violations early.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-[hsl(var(--zenity-blue))] rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Respond to threats in real time
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Investigation and mitigate potential threats quickly with findings mapped to
                  OWASP LLM and MITRE ATLAS for fast, confident action
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                size="lg"
                className="bg-white text-[hsl(var(--zenity-navy))] hover:bg-gray-100 font-medium px-8"
              >
                Learn More About Our Platform
              </Button>
            </div>
          </div>

          {/* Right - Visual/Diagram */}
          <div className="relative">
            <div className="bg-[hsl(var(--zenity-purple-dark))] rounded-lg p-8 border border-[hsl(var(--zenity-purple-mid))]/30">
              {/* Central Circle */}
              <div className="relative">
                <div className="w-32 h-32 bg-[hsl(var(--zenity-purple-bright))] rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-white font-bold text-lg">AI</span>
                  <span className="text-white text-xs ml-1">Observability</span>
                </div>

                {/* Surrounding Features */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[hsl(var(--zenity-purple-mid))] rounded-lg p-4 text-center">
                    <Monitor className="h-8 w-8 text-white mx-auto mb-2" />
                    <h4 className="text-white text-sm font-medium">AI Security Posture Management</h4>
                  </div>

                  <div className="bg-[hsl(var(--zenity-purple-mid))] rounded-lg p-4 text-center">
                    <Shield className="h-8 w-8 text-white mx-auto mb-2" />
                    <h4 className="text-white text-sm font-medium">AI Detection & Response</h4>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-8 bg-[hsl(var(--zenity-blue))]/50"></div>
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-16 h-px bg-[hsl(var(--zenity-blue))]/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
