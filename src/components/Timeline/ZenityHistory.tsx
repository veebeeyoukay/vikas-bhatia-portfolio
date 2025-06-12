import React from "react"
import { Calendar, Award, Users, Globe, Rocket } from "lucide-react"

interface TimelineEvent {
  date: string
  title: string
  description: string
  icon: React.ReactNode
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "April 2021",
    title: "Company Founded",
    description: "Zenity was founded in Tel Aviv-Yafo, Israel by Ben Kliger (CEO) and Michael Bargury (CTO), both former Microsoft leaders.",
    icon: <Calendar className="h-6 w-6" />
  },
  {
    date: "2021",
    title: "Initial Focus",
    description: "Started as a security solution for low-code/no-code environments, with initial focus on platforms like Power BI.",
    icon: <Award className="h-6 w-6" />
  },
  {
    date: "2022",
    title: "Team Growth",
    description: "Expanded the team with key hires in both Israel and the United States, establishing a strong foundation for growth.",
    icon: <Users className="h-6 w-6" />
  },
  {
    date: "2023",
    title: "Global Expansion",
    description: "Expanded operations to the United States, establishing a presence in New York and building a global customer base.",
    icon: <Globe className="h-6 w-6" />
  },
  {
    date: "2024",
    title: "AI Security Leadership",
    description: "Evolved to become a leader in agentic AI security and governance, positioning for strategic acquisition.",
    icon: <Rocket className="h-6 w-6" />
  }
]

const ZenityHistory = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[hsl(var(--zenity-purple-mid))]/30" />
      
      {/* Timeline events */}
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative">
            {/* Connector line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-[hsl(var(--zenity-purple-mid))]/30" />
            
            {/* Event content */}
            <div className="relative flex items-center">
              {/* Left side */}
              <div className={`w-1/2 pr-12 ${index % 2 === 0 ? 'text-right' : 'text-left order-2'}`}>
                <div className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
              
              {/* Center icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[hsl(var(--zenity-purple-mid))] rounded-full flex items-center justify-center text-white">
                {event.icon}
              </div>
              
              {/* Right side */}
              <div className={`w-1/2 pl-12 ${index % 2 === 0 ? 'text-left order-2' : 'text-right'}`}>
                <div className="text-[hsl(var(--zenity-purple-mid))] font-semibold">{event.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ZenityHistory 