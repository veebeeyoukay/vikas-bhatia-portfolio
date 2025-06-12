import React from "react"
import { Shield, ClipboardCheck } from "lucide-react"

const ZenityCISOSection = () => (
  <section id="zenity-ciso" className="py-20 lg:py-32 gradient-bg-section">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Zenity CISO</h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Role Overview Card */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Role Overview</h3>
          <p className="text-gray-300 leading-relaxed mb-4">The CISO at Zenity serves as both strategic security leader and hands-on implementer, responsible for establishing, maintaining, and communicating Zenity's security posture to internal and external stakeholders. This role reports directly to executive leadership and works closely with the CTO to align security practices with technical innovation.</p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-left">
            <li><b>Phase 1 (Initial):</b> CISO as individual contributor with dotted-line relationships to existing technical resources</li>
            <li><b>Phase 2 (6-12 months):</b> Addition of dedicated security engineer focused on technical implementation</li>
            <li><b>Phase 3 (12+ months):</b> Expansion to include GRC specialist as enterprise requirements grow</li>
          </ul>
        </div>
        {/* Key Responsibilities Card */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <ClipboardCheck className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Key Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Develop and implement comprehensive security policies and procedures</li>
            <li>Establish and maintain security controls across cloud infrastructure and applications</li>
            <li>Lead responses to customer security questionnaires and assessments</li>
            <li>Create and manage a security roadmap aligned with business objectives</li>
            <li>Represent Zenity's security posture to enterprise customers</li>
            <li>Implement practical security solutions with minimal additional headcount</li>
            <li>Build relationships with technical teams to ensure security is embedded in development</li>
            <li>Support sales cycles by addressing customer security concerns</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default ZenityCISOSection 