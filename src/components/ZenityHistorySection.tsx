import React from "react"
import { ZenityHistory } from "../../components/Timeline/ZenityHistory"

const narrative = (
  <>
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Zenity History</h2>
    </div>
    <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6">
      <p>Zenity was founded in April 2021 in Tel Aviv-Yafo, Israel, by Ben Kliger (CEO) and Michael Bargury (CTO), both former Microsoft leaders. The company began as a security solution for low-code/no-code environments, initially focusing on platforms like Power BI, and has since evolved to become a leader in agentic AI security and governance.</p>
      <p>Zenity's culture blends Israeli startup agility with American business practices, maintaining a hands-on, technically deep approach to security. The company is strategically positioned for acquisition within the next 12-18 months, with security as both a market differentiator and a key enabler for enterprise sales.</p>
    </div>
  </>
)

const ZenityHistorySection = () => (
  <section id="zenity-history" className="py-20 lg:py-32 gradient-bg-section">
    <div className="container mx-auto px-6">
      {narrative}
      <div className="mt-20">
        <ZenityHistory />
      </div>
    </div>
  </section>
)

export default ZenityHistorySection 