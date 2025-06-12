import React from "react"
import { Shield, Lock, Key, Server, Code, Zap } from "lucide-react"

const features = [
  {
    title: "Enterprise Security",
    description: "Comprehensive security solutions designed for enterprise-scale operations and compliance requirements.",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Access Control",
    description: "Advanced access management and authentication systems to protect your critical assets.",
    icon: <Lock className="h-6 w-6" />
  },
  {
    title: "Key Management",
    description: "Secure key management and encryption services for sensitive data protection.",
    icon: <Key className="h-6 w-6" />
  },
  {
    title: "Infrastructure Security",
    description: "Robust infrastructure security measures to protect your cloud and on-premise systems.",
    icon: <Server className="h-6 w-6" />
  },
  {
    title: "Code Security",
    description: "Advanced code analysis and security testing to identify and fix vulnerabilities.",
    icon: <Code className="h-6 w-6" />
  },
  {
    title: "Performance",
    description: "High-performance security solutions that don't compromise on speed or efficiency.",
    icon: <Zap className="h-6 w-6" />
  }
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 gradient-bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Security Features</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our comprehensive security features are designed to protect your organization at every level, from infrastructure to application security.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[hsl(var(--zenity-purple-dark))]/50 border border-[hsl(var(--zenity-purple-mid))]/30 rounded-lg p-8"
            >
              <div className="w-12 h-12 bg-[hsl(var(--zenity-purple-mid))] rounded-lg flex items-center justify-center mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 