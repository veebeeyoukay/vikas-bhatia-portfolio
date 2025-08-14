// src/components/InteractiveCompanyCloud.tsx
"use client"

import { useEffect, useMemo, useState, useRef } from "react"

interface Company {
  name: string
  domain: string
  displayName: string
  initials: string
  color: string
}

const companies: Company[] = [
  // From Resume - Major Companies
  { name: "deloitte", domain: "deloitte.com", displayName: "Deloitte & Touche", initials: "DT", color: "#86BC25" },
  { name: "blackrock", domain: "blackrock.com", displayName: "BlackRock", initials: "BR", color: "#000000" },
  { name: "blackstone", domain: "blackstone.com", displayName: "Blackstone", initials: "BS", color: "#000000" },
  { name: "federalreserve", domain: "federalreserve.gov", displayName: "Federal Reserve", initials: "FR", color: "#1E3A8A" },
  { name: "target", domain: "target.com", displayName: "Target Corporation", initials: "TC", color: "#CC0000" },
  { name: "americanexpress", domain: "americanexpress.com", displayName: "American Express", initials: "AE", color: "#006FCF" },
  { name: "cit", domain: "cit.com", displayName: "CIT Bank", initials: "CB", color: "#1E40AF" },
  { name: "visa", domain: "visa.com", displayName: "VISA", initials: "VS", color: "#1A1F71" },
  { name: "shell", domain: "shell.com", displayName: "Shell Oil", initials: "SO", color: "#FFC72C" },
  { name: "marksandspencer", domain: "marksandspencer.com", displayName: "Marks & Spencer", initials: "MS", color: "#E31837" },
  { name: "capgemini", domain: "capgemini.com", displayName: "CapGemini", initials: "CG", color: "#0070AD" },
  { name: "bbc", domain: "bbc.com", displayName: "BBC Technology", initials: "BT", color: "#BB1919" },
  { name: "nga", domain: "nga.mil", displayName: "National Geospatial Intelligence Agency", initials: "NG", color: "#1E3A8A" },
  { name: "inmarket", domain: "inmarket.com", displayName: "InMarket Media LLC", initials: "IM", color: "#3B82F6" },
  { name: "justprotect", domain: "justprotect.com", displayName: "JustProtect Inc.", initials: "JP", color: "#1E40AF" },
  { name: "constellation", domain: "constellation.com", displayName: "Constellation Energy", initials: "CE", color: "#059669" },
  { name: "healthquest", domain: "healthquest.org", displayName: "Health Quest Hospital System", initials: "HQ", color: "#DC2626" },
  { name: "axa", domain: "axa.com", displayName: "ICL (AXA Insurance)", initials: "AX", color: "#000000" },
  
  // From Screenshots - Additional Clients
  { name: "harness", domain: "goharness.com", displayName: "Harness", initials: "HR", color: "#3B82F6" },
  { name: "c6med", domain: "c6med.com", displayName: "C6Med", initials: "C6", color: "#059669" },
  { name: "navicent", domain: "navicenthealth.org", displayName: "Navicent Health", initials: "NH", color: "#DC2626" },
  { name: "calstate", domain: "calstate.edu", displayName: "Calstate", initials: "CS", color: "#1E40AF" },
  { name: "evolutioniq", domain: "evolutioniq.com", displayName: "EvolutionIQ", initials: "EI", color: "#7C3AED" },
  { name: "turner", domain: "turner.com", displayName: "Turner", initials: "TR", color: "#000000" },
  { name: "ucsf", domain: "ucsf.edu", displayName: "UCSF", initials: "UC", color: "#1E40AF" },
  { name: "ahead", domain: "ahead.com", displayName: "Ahead", initials: "AH", color: "#3B82F6" },
  { name: "idealagent", domain: "idealagent.com", displayName: "Ideal Agent", initials: "IA", color: "#059669" },
  { name: "cinnamonhealth", domain: "cinnamonhealth.com", displayName: "Cinnamon Health", initials: "CH", color: "#DC2626" },
  { name: "myota", domain: "myota.com", displayName: "Myota", initials: "MY", color: "#7C3AED" },
  { name: "csm", domain: "csm.com", displayName: "CSM", initials: "CS", color: "#3B82F6" },
  { name: "hyster", domain: "hyster-yale.com", displayName: "Hyster", initials: "HY", color: "#F59E0B" },
  { name: "impactconsulting", domain: "impactconsulting.com", displayName: "Impact Consulting LLC", initials: "IC", color: "#059669" },
  { name: "lightstream", domain: "lightstream.com", displayName: "LightStream LLC", initials: "LS", color: "#3B82F6" },
  { name: "castsoftware", domain: "castsoftware.com", displayName: "Cast Software", initials: "CS", color: "#7C3AED" },
  { name: "integro", domain: "integro.com", displayName: "Integro", initials: "IN", color: "#059669" },
  { name: "nisbdc", domain: "nisbdc.org", displayName: "Nisbdc", initials: "NS", color: "#059669" },
  { name: "npd", domain: "npd.com", displayName: "NPD", initials: "NP", color: "#3B82F6" },
  { name: "nysbs", domain: "sbs.ny.gov", displayName: "NY SBS", initials: "NY", color: "#1E40AF" },
  { name: "psu", domain: "psu.edu", displayName: "PSU", initials: "PS", color: "#DC2626" },
]

const createCompanyLogo = (company: Company, index: number) => {
  // Create atom-like positioning with better spacing
  const totalCompanies = companies.length
  
  // Create multiple orbital rings for better distribution
  const ringIndex = Math.floor(index / 8) // 8 companies per ring
  const positionInRing = index % 8
  
  // Different radius for each ring to create depth
  const baseRadius = 150
  const ringRadius = baseRadius + (ringIndex * 80)
  
  // Calculate position on the ring
  const angle = (positionInRing / 8) * 2 * Math.PI + (Math.random() * 0.5 - 0.25) // Add some randomness
  const x = Math.cos(angle) * ringRadius
  const y = Math.sin(angle) * ringRadius
  
  // Add vertical variation for 3D effect
  const z = (Math.random() - 0.5) * 200
  const verticalOffset = (Math.random() - 0.5) * 100
  
  // Add some randomness to prevent perfect alignment
  const randomX = x + (Math.random() - 0.5) * 40
  const randomY = y + (Math.random() - 0.5) * 40

  const logoUrl = `https://logo.clearbit.com/${company.domain}?size=120&format=png`

  return (
    <div
      key={company.name}
      className="company-logo-item absolute"
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        border: '2px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'absolute',
        overflow: 'hidden',
        transform: `translate3d(${randomX}px, ${randomY + verticalOffset}px, ${z}px)`,
        left: '50%',
        top: '50%',
        marginLeft: '-30px',
        marginTop: '-30px',
        opacity: z > 0 ? 1 : 0, // Hide when facing backwards
        visibility: z > 0 ? 'visible' : 'hidden',
      }}
      title={company.displayName}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `translate3d(${randomX}px, ${randomY + verticalOffset}px, ${z}px) scale(1.15)`
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)'
        e.currentTarget.style.zIndex = '10'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `translate3d(${randomX}px, ${randomY + verticalOffset}px, ${z}px) scale(1)`
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
        e.currentTarget.style.zIndex = '1'
      }}
    >
      <img
        src={logoUrl}
        alt={company.displayName}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: '50%',
        }}
        onError={(e) => {
          // Hide the entire logo container if image fails to load
          const target = e.target as HTMLImageElement
          const container = target.closest('.company-logo-item') as HTMLElement
          if (container) {
            container.style.display = 'none'
          }
        }}
      />
    </div>
  )
}

export type CompanyCloudProps = {
  className?: string
}

export function InteractiveCompanyCloud({ className }: CompanyCloudProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [rotation, setRotation] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    // Auto-rotate the cloud
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5)
    }, 50)

    return () => clearInterval(interval)
  }, [isLoaded])

  const companyLogos = useMemo(() => {
    if (!isLoaded) return []
    
    return companies.map((company, index) => createCompanyLogo(company, index))
  }, [isLoaded])

  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center ${className || ''}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`relative ${className || ''}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transform: `rotateY(${rotation}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {companyLogos}
      </div>
    </div>
  )
}

// Demo component for the expertise page
export function CompanyCloudDemo() {
  return (
    <div className="relative flex w-full max-w-5xl mx-auto items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-8 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
      <div className="relative z-10 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 25+ years of experience delivering cybersecurity solutions to Fortune 500 companies, 
            government agencies, and innovative startups across multiple industries.
          </p>
        </div>
        <InteractiveCompanyCloud className="h-[500px]" />
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 font-medium">
            Hover for company details • Auto-rotating 3D cloud
          </p>
        </div>
      </div>
    </div>
  )
} 