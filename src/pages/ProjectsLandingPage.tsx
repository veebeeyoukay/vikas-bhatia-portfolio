import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, ExternalLink, ArrowRight, Filter } from 'lucide-react';
import SpotlightCard from '../components/ui/SpotlightCard';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'strategic' | 'innovation';
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
  featured: boolean;
  url?: string;
  imageUrl?: string;
}

const ProjectsLandingPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'strategic' | 'innovation'>('all');

  const projects: Project[] = [
    {
      id: 'MetaFan',
      title: 'Metafan',
      description: 'MetaFan is the first truly social marketplace where collectors across categories discover, showcase, authenticate, and trade items within a vibrant community, powered by AI and Web3 technologies that enhance both the emotional and financial value of collections.',
      category: 'Personal Project - Social Marketplace',
      type: 'innovation',
      problem: 'Collectors lacked a unified platform to authenticate, showcase, and trade items across categories while maintaining community engagement and trust.',
      solution: 'Built a social marketplace combining AI-powered authentication, Web3 technologies for provenance, and community features that enhance both emotional and financial value of collections.',
      outcome: 'Created a first-of-its-kind platform that bridges traditional collecting with modern technology, enabling collectors to discover, authenticate, and trade with confidence.',
      technologies: ['AI', 'Web3', 'Social Media'],
      featured: true,
      url: 'https://metafan.net'
    },
    {
      id: 'GATI-2025',
      title: 'Gorrie Great American Teach In - 2025',
      description: 'A professional, interactive AI education presentation system built for Gorrie Elementary School\'s Great American Teach-In. This platform provides engaging presentations, live AI demos, parent resources, and comprehensive analytics for educators.',
      category: 'Personal Project - Education',
      type: 'innovation',
      problem: 'Elementary school needed an engaging way to demonstrate AI capabilities to students and parents during the Great American Teach-In, requiring an interactive, accessible platform.',
      solution: 'Built a professional presentation system with live AI demos, interactive elements, parent resources, and analytics—all designed for non-technical audiences.',
      outcome: 'Successfully engaged students and parents with hands-on AI demonstrations, making complex technology accessible and inspiring the next generation.',
      technologies: ['AI', 'Education', 'Presentation'],
      featured: true,
      url: 'https://gorrie-gati2025-ai.netlify.app/'
    },
    {
      id: 'CloseRGC',
      title: 'CloseGRC',
      description: 'Close is a Sales Acceleration tool for that enables b2b companies to increase sales velocity by proactively understand their prospects compliance requirements.',
      category: 'Personal Project - SaaS Application',
      type: 'innovation',
      problem: 'B2B sales teams struggle to understand prospect compliance requirements, slowing sales cycles and missing opportunities.',
      solution: 'Built a sales acceleration platform that proactively identifies and presents compliance requirements, enabling faster qualification and deal closure.',
      outcome: 'Sales teams can now quickly assess compliance needs, reducing sales cycle time and increasing win rates through better qualification.',
      technologies: ['Sales Acceleration', 'Compliance', 'Sales Enablement'],
      featured: true,
      imageUrl: 'https://www.closegrc.com/wp-content/uploads/2025/07/CloseGRC-Logo-1.png',
      url: 'https://closegrc.com'
    },
    {
      id: 'wacassa',
      title: 'WaCassa',
      description: 'Modern, AI-powered WhatsApp Business management platform that enables teams to collaboratively handle customer conversations with built-in bilingual support (English/Spanish).',
      category: 'Personal Project - SaaS Application',
      type: 'innovation',
      problem: 'Businesses need efficient WhatsApp customer communication with team collaboration and multilingual support.',
      solution: 'Built an AI-powered WhatsApp Business management platform with real-time collaboration, AI translation, and CRM integration.',
      outcome: 'Teams can now handle customer conversations efficiently across languages, improving response times and customer satisfaction.',
      technologies: ['React', 'TypeScript', 'AI Translation', 'CRM', 'Real-time Analytics'],
      featured: true,
      imageUrl: '/api/placeholder/400/250',
      url: 'https://wacassa.netlify.app'
    },
    {
      id: 'icarrie',
      title: 'iCarrie',
      description: 'AI-powered luxury collection assistant designed to help users organize, track, and care for their designer handbags and shoes with smart insights and personalized recommendations.',
      category: 'Personal Project - AI Application',
      type: 'innovation',
      problem: 'Luxury collectors need a way to organize, track value, and maintain their collections with personalized care recommendations.',
      solution: 'Created an AI-powered assistant that provides organization, tracking, valuation insights, and personalized care recommendations.',
      outcome: 'Users can now manage their luxury collections effectively, maximizing value and ensuring proper care.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI Insights'],
      featured: true,
      imageUrl: '/api/placeholder/400/250',
      url: 'https://icarrie.netlify.app'
    },
    {
      id: 'parentalcontrols',
      title: 'ParentalControls',
      description: 'AI-powered parental control guidance that makes family digital safety simple. Get step-by-step help implementing bulletproof protection across all devices.',
      category: 'Personal Project - Family Safety',
      type: 'innovation',
      problem: 'Parents struggle to implement effective digital safety controls across multiple devices and platforms.',
      solution: 'Built an AI-powered guidance system that provides step-by-step instructions for implementing parental controls across all devices.',
      outcome: 'Parents can now easily protect their children online with comprehensive, device-specific guidance.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI Guidance', 'Threat Intelligence'],
      featured: true,
      imageUrl: '/api/placeholder/400/250',
      url: 'https://parentalcontrols.netlify.app'
    },
    {
      id: 'On the Calendar',
      title: 'On the Calendar',
      description: 'Transforms paper event calendars into shareable digital calendars that parents can add to their phones with one click. Built for PTAs, schools, and community organizations.',
      category: 'Personal Project - On the Calendar',
      type: 'innovation',
      problem: 'PTAs and schools distribute paper calendars that are hard to share and easy to lose.',
      solution: 'Created a platform that converts paper calendars into digital, shareable formats with one-click phone integration.',
      outcome: 'Organizations can now distribute calendars digitally, improving engagement and reducing printing costs.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Calendar Integration'],
      featured: true,
      imageUrl: '/api/placeholder/400/250',
      url: 'https://on-the-calendar.netlify.app'
    },
    {
      id: 'Honored Coffee',
      title: 'Honored Coffee',
      description: 'To honor military service and sacrifice by creating exceptional coffee experiences while supporting veteran employment and mental health awareness initiatives.',
      category: 'Collaboration with a Veteran - Coffee Brand',
      type: 'innovation',
      problem: 'Need a platform to honor military service while supporting veteran causes through coffee commerce.',
      solution: 'Built an e-commerce platform that combines exceptional coffee experiences with veteran employment and mental health support.',
      outcome: 'Created a meaningful brand that honors service while providing tangible support to veterans.',
      technologies: ['E-commerce', 'Brand Development'],
      featured: true,
      url: 'https://honoredcoffee.com/'
    },  
    {
      id: 'KidsQuest Ai',
      title: 'KidsQuest Ai',
      description: "KidsQuest turns your child's weekly homework into engaging games. Track progress, celebrate achievements, and make learning fun!",
      category: 'Personal Project - SaaS Application',
      type: 'innovation',
      problem: 'Children find homework tedious and unmotivating, leading to poor engagement and learning outcomes.',
      solution: 'Developed a gamified learning platform that transforms homework into engaging quests with progress tracking and rewards.',
      outcome: 'Children are more motivated to complete homework, improving learning outcomes and parent satisfaction.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Game Development'],
      featured: true,
      url: 'https://kidsquest-ai.netlify.app/' 
    },
    {
      id: 'MugHub',
      title: 'MugHub',
      description: "The Ultimate Starbucks Collector Community - Showcase your prized mugs, trade rare finds, and connect with fellow collectors from around the world",
      category: 'Personal Project - Social Marketplace',
      type: 'innovation',
      problem: 'Starbucks collectors lack a dedicated platform to showcase, trade, and connect with other collectors.',
      solution: 'Built a social marketplace specifically for Starbucks mug collectors with showcase, trading, and community features.',
      outcome: 'Created a vibrant community where collectors can connect, trade, and share their passion.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Social Media'],
      featured: true,
      url: 'https://mug-share-hub.netlify.app/' 
    },
    {
      id: 'NIST CSF Assessment',
      title: 'NIST CSF Assessment',
      description: 'Simple NIST CSF Assessment',
      category: 'Personal Project - NIST CSF Assessment',
      type: 'strategic',
      problem: 'Organizations need a simple, accessible way to assess their cybersecurity posture against NIST CSF framework.',
      solution: 'Created an intuitive assessment tool that guides organizations through NIST CSF evaluation with clear, actionable results.',
      outcome: 'Organizations can now easily assess their security maturity and identify improvement areas.',
      technologies: ['NIST CSF', 'Assessment', 'Security'],
      featured: true,
      imageUrl: '/api/placeholder/400/250',
      url: 'https://nist-guardian-muse.lovable.app/'
    },
    {
      id: 'zenity',
      title: 'Zenity CISO Strategy',
      description: 'Comprehensive cybersecurity strategy and implementation plan for Zenity, including risk assessment, compliance framework, and technology roadmap.',
      category: 'Job Application - CISO',
      type: 'strategic',
      problem: 'Zenity needed a comprehensive cybersecurity strategy to support rapid growth, ensure compliance, and build a resilient security program that enables business objectives.',
      solution: 'Developed a complete CISO strategy including risk assessment, compliance framework alignment (SOC 2, ISO 27001), technology roadmap, and organizational structure to support scaling.',
      outcome: 'Delivered a strategic blueprint that positions Zenity for secure growth, regulatory compliance, and competitive advantage through robust cybersecurity practices.',
      technologies: ['Risk Assessment', 'Compliance', 'Technology Roadmap'],
      featured: true,
      imageUrl: '/api/placeholder/400/250'
    },
    {
      id: 'atlas',
      title: 'ATLAS — (AI-Accelerated Transformation & Legacy System Stabilization)',
      description: "A staffing firm's migration from a legacy UK-based ATS to Dynamics 365 had stalled: 30% of placement records missing, field mapping errors from UK/US naming conventions, and communication gaps with an offshore vendor team.",
      category: 'Case Study - ATS Migration',
      type: 'strategic',
      problem: "A staffing firm's migration from a legacy UK-based ATS to Dynamics 365 had stalled due to missing records, mapping errors, and communication gaps.",
      solution: "Understood current state, developed requirements & presented solution prototype & roadmap as a single-page web app with Interactive issue tracker, AI data validation prototype, and browser widget concept.",
      outcome: "Delivered a comprehensive roadmap and interactive prototype in under 4 hours, clarifying requirements and enabling stakeholder buy-in.",
      technologies: ['React', 'AI Prototype', 'Dynamics 365', 'Data Migration'],
      featured: true,
    },
    {
      id: 'Recipies from the heart',
      title: 'Recipies from the heart',
      description: 'Recipies from the heart is a SaaS application that enables businesses to protect their data and systems from cyber threats.',
      category: 'Personal Project - SaaS Application',
      type: 'innovation',
      problem: 'Families need a way to preserve and share cherished family recipes across generations.',
      solution: 'Built a platform that enables families to digitize, organize, and share family recipes with stories and memories.',
      outcome: 'Families can now preserve culinary heritage and share recipes easily with future generations.',
      technologies: ['AI', 'SaaS', 'Content Management'],
      featured: true,
    },
    {
      id: 'C6Med-Handover',
      title: 'C6Med-Handover',
      description: 'Medical handover management system designed to streamline clinical communication and patient care transitions.',
      category: 'Personal Project - Healthcare Application',
      type: 'strategic',
      problem: 'Healthcare facilities struggle with inefficient patient handover processes, risking care continuity and patient safety.',
      solution: 'Developed a digital handover management system that standardizes clinical communication and ensures complete information transfer.',
      outcome: 'Improved care continuity, reduced errors, and enhanced patient safety through structured handover processes.',
      technologies: ['React', 'TypeScript', 'Healthcare', 'Clinical Communication'],
      featured: true,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12"
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
          Projects & Case Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Strategic initiatives and rapid innovation—each project demonstrates problem-solving, execution, and measurable results.
        </p>
      </motion.section>

      {/* Filter Tabs */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center"
      >
        <div className="inline-flex glass-card rounded-lg p-1 gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Filter className="w-4 h-4 inline mr-2" />
            All Projects
          </button>
          <button
            onClick={() => setFilter('strategic')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              filter === 'strategic'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Shield className="w-4 h-4" />
            Strategic
          </button>
          <button
            onClick={() => setFilter('innovation')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              filter === 'innovation'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Innovation
          </button>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="h-full p-6 group">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded ${
                        project.type === 'strategic'
                          ? 'bg-blue-600/20 text-blue-400'
                          : 'bg-amber-400/20 text-amber-400'
                      }`}>
                        {project.type === 'strategic' ? 'Strategic' : 'Innovation'}
                      </span>
                      {project.featured && (
                        <span className="inline-block bg-amber-400/20 text-amber-400 text-xs font-medium px-2.5 py-0.5 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Case Study Structure */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-1">Problem</h4>
                      <p className="text-sm text-slate-300 line-clamp-2">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-1">Solution</h4>
                      <p className="text-sm text-slate-300 line-clamp-2">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-1">Outcome</h4>
                      <p className="text-sm text-slate-300 line-clamp-2">{project.outcome}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium group/link"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium group/link"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center py-12 max-w-4xl mx-auto"
      >
        <SpotlightCard className="p-12">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how I can help with your cybersecurity and technology leadership needs.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </SpotlightCard>
      </motion.section>
    </div>
  );
};

export default ProjectsLandingPage;
