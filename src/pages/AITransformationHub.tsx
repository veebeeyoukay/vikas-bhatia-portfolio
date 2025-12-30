import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles, Target, Users } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { businessConfigs } from '@/config/businesses';

const AITransformationHub: React.FC = () => {
  const businesses = [
    {
      ...businessConfigs.handyman,
      path: '/tampa-handyman',
      icon: '🏠',
      tagline: 'Smart Home Integration'
    },
    {
      ...businessConfigs.av,
      path: '/tampa-av',
      icon: '🔐',
      tagline: 'Premium Tech Solutions'
    },
    {
      ...businessConfigs.pool,
      path: '/tampa-pool',
      icon: '💧',
      tagline: 'Pool Automation Systems'
    },
    {
      ...businessConfigs.garage,
      path: '/tampa-garage',
      icon: '🚘',
      tagline: 'Smart Garage Systems'
    }
  ];

  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AI-Powered Lead Qualification',
      description: 'Intelligent voice and SMS agents that engage leads 24/7, gathering detailed requirements and qualifying prospects automatically.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Lead Distribution',
      description: 'Smart routing system that matches qualified leads with partner businesses based on service type, location, and availability.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Business Partnership Network',
      description: 'Automated prospecting and outreach to traditional service businesses, offering free qualified leads to demonstrate value.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'End-to-End Automation',
      description: 'Complete workflow automation from lead capture through qualification, handoff, and conversion tracking.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Bot className="w-5 h-5" />
            <span className="font-semibold">AI Transformation Demo</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
            AI-Powered Lead Generation & Business Transformation
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            A complete demonstration platform showing how AI can transform premium service businesses
            through automated lead generation, intelligent qualification, and seamless handoff processes.
            Targeting affluent South Tampa/Davis Islands homeowners who value time over cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Explore Service Businesses
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-colors font-semibold"
            >
              How It Works
            </a>
          </div>
        </div>
      </motion.section>

      {/* Problem Statement */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <SpotlightCard className="p-8">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Affluent homeowners in South Tampa/Davis Islands need premium technical services but struggle
              to find qualified providers. Meanwhile, service businesses miss high-value opportunities due to
              poor lead qualification and lack of technical expertise to implement modern automation solutions.
              Both sides waste time on mismatched expectations and low-quality leads.
            </p>
          </SpotlightCard>
        </div>
      </motion.section>

      {/* Solution - How It Works */}
      <section id="how-it-works" className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">The AI-Powered Solution</h2>
            <p className="text-xl text-muted-foreground">
              End-to-end automation that transforms how service businesses capture and convert leads
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Service Businesses */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Four Premium Service Businesses</h2>
            <p className="text-xl text-muted-foreground">
              Each targeting affluent homeowners with high-value technical services and AI-powered operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {businesses.map((business, index) => (
              <motion.div
                key={business.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={business.path}>
                  <SpotlightCard className="p-8 h-full group cursor-pointer hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl">{business.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {business.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{business.tagline}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {business.description}
                    </p>

                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                      Visit Landing Page
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technology Architecture</h2>
            <p className="text-xl text-muted-foreground">
              Modern, scalable stack built for reliability and performance
            </p>
          </motion.div>

          <SpotlightCard className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Frontend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React 18 + TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vite</li>
                  <li>• React Router</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Backend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Netlify Functions</li>
                  <li>• Neon PostgreSQL</li>
                  <li>• n8n Automation</li>
                  <li>• Lindy.ai Agents</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Integrations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Voice/SMS (Lindy.ai)</li>
                  <li>• Google Maps API</li>
                  <li>• Twilio</li>
                  <li>• Business Enrichment</li>
                </ul>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Demonstrating Real Business Value</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">For Premium Service Businesses</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Pre-qualified high-value leads ($500-5000+)</li>
                    <li>• 24/7 AI-powered lead capture and qualification</li>
                    <li>• Affluent market targeting (South Tampa/Davis Islands)</li>
                    <li>• Real-time lead notifications with full context</li>
                    <li>• Conversion tracking and ROI analytics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">As a Sales Tool</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Working proof of concept</li>
                    <li>• Measurable ROI demonstration</li>
                    <li>• Build relationships through value delivery</li>
                    <li>• Convert to AI transformation clients</li>
                    <li>• Scalable consulting opportunity</li>
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <SpotlightCard className="p-12">
            <h2 className="text-2xl font-bold mb-4">
              Interested in AI Transformation?
            </h2>
            <p className="text-muted-foreground mb-6">
              See how AI can revolutionize your business operations and lead generation.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Let's Discuss Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </SpotlightCard>
        </div>
      </motion.section>
    </div>
  );
};

export default AITransformationHub;
