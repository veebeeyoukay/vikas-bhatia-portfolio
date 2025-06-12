import React from "react"
import { Shield, Hammer, ClipboardCheck, Layers, Globe } from "lucide-react"

const LeadershipObjectivesSection = () => (
  <section id="leadership-objectives" className="py-20 lg:py-32 gradient-bg-section">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Leadership Objectives</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
        {/* Make Zenity More Secure and Robust */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Make Zenity More Secure and Robust</h3>
          <p className="text-gray-300 leading-relaxed">Establish a comprehensive security foundation that protects internal operations and customer data, aligning with enterprise expectations while enabling innovation.</p>
        </div>
        {/* Implement Hands-On Security Leadership */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <Hammer className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Implement Hands-On Security Leadership</h3>
          <p className="text-gray-300 leading-relaxed">Combine technical depth with practical execution—leadership that builds and implements security solutions, not just directs from above.</p>
        </div>
        {/* Own Enterprise Security Reviews */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <ClipboardCheck className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Own Enterprise Security Reviews</h3>
          <p className="text-gray-300 leading-relaxed">Confidently navigate complex enterprise security reviews by anticipating requirements, preparing documentation, and representing Zenity's security posture with authority.</p>
        </div>
        {/* Establish a Comprehensive Security Program */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <Layers className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Establish a Comprehensive Security Program</h3>
          <p className="text-gray-300 leading-relaxed">Create a structured security program addressing immediate and long-term needs, clearly communicated to customers to inspire confidence and enable growth.</p>
        </div>
        {/* Enable Global Collaboration */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Enable Global Collaboration</h3>
          <p className="text-gray-300 leading-relaxed">Foster seamless communication and collaboration across time zones, supporting effective teamwork between leadership in New York and the technical team in Israel.</p>
        </div>
      </div>
    </div>
  </section>
)

export default LeadershipObjectivesSection 