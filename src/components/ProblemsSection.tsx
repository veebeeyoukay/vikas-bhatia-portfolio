import { AlertTriangle, Eye, Shield } from "lucide-react"

const ProblemsSection = () => {
  return (
    <section className="py-20 lg:py-32 gradient-bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            AI Agents are{" "}
            <span className="gradient-text">Everywhere.</span>{" "}
            Security can Lead the Way.
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              AI Agents are redefining how work gets done - connecting to systems and data sources,
              interacting with users, making decisions, and executing actions autonomously. They're
              being built and deployed faster than ever, unlocking productivity and innovation across
              the enterprise.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              As adoption continues to grow, it presents a critical opportunity for security teams to
              bring security and governance to the forefront as a foundation for scalable, responsible
              innovation. But making the most of this moment means tackling a new set of challenges.
            </p>
          </div>
        </div>

        {/* Three Problem Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
          {/* Uncontrolled Adoption */}
          <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Uncontrolled Adoption
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AI Agents are being built and used across the enterprise by anyone, anywhere,
              with little to no visibility or guardrails.
            </p>
          </div>

          {/* Lack of Visibility */}
          <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Lack of Visibility & Understanding of AI Agents
            </h3>
            <p className="text-gray-300 leading-relaxed">
              It's often unclear which AI Agents exist, who built them, or what systems they access.
              Even when agents are visible, tracking their behavior and intent is challenging.
            </p>
          </div>

          {/* No Purpose-built Tools */}
          <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              No Purpose-built Tools
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Traditional solutions weren't designed for AI Agents that think, act, and evolve on their own.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
