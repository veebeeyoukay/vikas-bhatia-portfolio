import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const periods = [
  {
    label: "Pre-Start (-14 to 0 Days)",
    content: (
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Review existing security documentation and policies</li>
        <li>Analyze current customer security questionnaires and responses</li>
        <li>Meet with key stakeholders to understand priorities and pain points</li>
        <li>Develop initial assessment framework for first 30 days</li>
        <li>Establish communication channels with technical and sales teams</li>
        <li>Review enterprise customer requirements and identify common patterns</li>
      </ul>
    ),
  },
  {
    label: "First 30 Days",
    content: (
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Complete comprehensive security assessment of current state</li>
        <li>Establish security incident response process and communication plan</li>
        <li>Implement critical security policies (log retention, access control, etc.)</li>
        <li>Create standardized response templates for common security questions</li>
        <li>Develop triage process for security questionnaires from sales</li>
        <li>Establish security metrics and reporting framework</li>
        <li>Build relationships with technical teams and understand development workflow</li>
      </ul>
    ),
  },
  {
    label: "60 Days",
    content: (
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Implement automated security questionnaire response system</li>
        <li>Develop security roadmap aligned with business objectives</li>
        <li>Establish security review process for new features and products</li>
        <li>Create customer-facing security documentation package</li>
        <li>Implement basic security awareness training for all employees</li>
        <li>Begin SOC 2 readiness assessment and gap analysis</li>
        <li>Establish vulnerability management program</li>
      </ul>
    ),
  },
  {
    label: "90 Days",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Complete initial phase of security controls implementation</li>
        <li>Develop comprehensive security architecture documentation</li>
        <li>Establish ongoing compliance monitoring and reporting</li>
        <li>Create executive-level security dashboard and reporting</li>
        <li>Implement enhanced customer security assurance process</li>
        <li>Begin formal SOC 2 certification process</li>
        <li>Develop scaling plan for security operations</li>
      </ul>
    ),
  },
]

const VikasCISOPlanSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="vikas-ciso-plan" className="py-20 lg:py-32 gradient-bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Vikas's Zenity CISO Plan</h2>
        </div>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">CISO Plan: -14 Days to 90 Days</h3>
          {/* Tabs */}
          <div className="flex justify-center mb-8 gap-2 flex-wrap">
            {periods.map((period, idx) => (
              <button
                key={period.label}
                className={`px-4 py-2 rounded-t-md font-medium text-base focus:outline-none transition-colors
                  ${activeTab === idx
                    ? 'bg-[hsl(var(--zenity-purple-mid))] text-white'
                    : 'bg-[hsl(var(--zenity-purple-dark))] text-gray-300 hover:text-white'}`}
                onClick={() => setActiveTab(idx)}
                aria-selected={activeTab === idx}
                aria-controls={`plan-tabpanel-${idx}`}
                role="tab"
                tabIndex={activeTab === idx ? 0 : -1}
              >
                {period.label}
              </button>
            ))}
          </div>
          {/* Tab Panel */}
          <div className="bg-[hsl(var(--zenity-purple-dark))]/50 rounded-b-lg p-8 min-h-[260px] flex flex-col justify-between" role="tabpanel" id={`plan-tabpanel-${activeTab}`}> 
            <div>{periods[activeTab].content}</div>
            <div className="flex justify-between items-end mt-8">
              <button
                className="p-2 rounded-full hover:bg-[hsl(var(--zenity-purple-mid))] transition-colors disabled:opacity-30"
                onClick={() => setActiveTab((prev) => Math.max(prev - 1, 0))}
                disabled={activeTab === 0}
                aria-label="Previous period"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-[hsl(var(--zenity-purple-mid))] transition-colors disabled:opacity-30"
                onClick={() => setActiveTab((prev) => Math.min(prev + 1, periods.length - 1))}
                disabled={activeTab === periods.length - 1}
                aria-label="Next period"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VikasCISOPlanSection 