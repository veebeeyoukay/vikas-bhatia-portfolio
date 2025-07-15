import React from "react"
import { TrendingUp, Zap, Code, Users, Target, Award } from "lucide-react"

const BusinessObjectivesSection = () => (
  <section id="business-objectives" className="py-20 lg:py-32 gradient-bg-section">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Business Objectives</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
        {/* Enterprise Customer Acquisition */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Enterprise Customer Acquisition</h3>
          <p className="text-gray-300 leading-relaxed">Expand the customer base among Fortune 500 companies seeking to secure their AI Agent implementations, with particular focus on financial services, technology, and other regulated industries.</p>
        </div>
        {/* Sales Cycle Acceleration */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Sales Cycle Acceleration</h3>
          <p className="text-gray-300 leading-relaxed">Remove security barriers that currently slow enterprise sales cycles, enabling faster deal closure with large organizations that have rigorous security requirements.</p>
        </div>
        {/* Product Leadership */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <Code className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Product Leadership</h3>
          <p className="text-gray-300 leading-relaxed">Maintain technical leadership in AI Agent security through continued innovation and research, building on existing strengths in identifying and mitigating emerging threats.</p>
        </div>
        {/* Operational Scaling */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Operational Scaling</h3>
          <p className="text-gray-300 leading-relaxed">Scale internal operations to support rapid growth while maintaining the agility and innovation culture of a startup.</p>
        </div>
        {/* Strategic Positioning */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Strategic Positioning</h3>
          <p className="text-gray-300 leading-relaxed">Enhance company valuation and strategic positioning for potential acquisition within the next 12-18 months.</p>
        </div>
        {/* Security Credibility */}
        <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center mb-6">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Security Credibility</h3>
          <p className="text-gray-300 leading-relaxed">Establish Zenity as the trusted security partner for enterprises implementing AI Agents, with a reputation for both technical excellence and practical business enablement.</p>
        </div>
      </div>
    </div>
  </section>
)

export default BusinessObjectivesSection 