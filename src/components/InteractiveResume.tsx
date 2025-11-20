import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase, Award, Code } from 'lucide-react';
import { careerTimeline, certifications, expertise } from '@/data/resumeData';

const InteractiveResume: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="resume" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Career Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            25+ years of strategic cybersecurity leadership across 130+ organizations. 
            Each role represents a challenge, action, and measurable result.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-amber-400 to-blue-600 hidden md:block" />

          <div className="space-y-8">
            {careerTimeline.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-background transform -translate-x-1/2 z-10" />

                  {/* Card */}
                  <div className={`flex-1 glass-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow ${
                    expandedId === role.id ? 'ring-2 ring-blue-600' : ''
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-5 h-5 text-blue-600" />
                          <h3 className="text-2xl font-bold text-foreground">
                            {role.company}
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-primary mb-1">
                          {role.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {role.period}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleExpand(role.id)}
                        className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                        aria-label={expandedId === role.id ? 'Collapse' : 'Expand'}
                      >
                        {expandedId === role.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <AnimatePresence>
                      {expandedId === role.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 pt-4 border-t border-border">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">
                                Challenge
                              </h4>
                              <p className="text-muted-foreground">
                                {role.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">
                                Action
                              </h4>
                              <p className="text-muted-foreground">
                                {role.action}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">
                                Result
                              </h4>
                              <p className="text-muted-foreground">
                                {role.result}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">
                                Key Achievements
                              </h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {role.achievements.map((achievement, idx) => (
                                  <li key={idx}>{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Expertise */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-3 bg-background/50 rounded-lg">
                  <p className="font-semibold text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold">Expertise</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.frameworks.slice(0, 8).map((fw, idx) => (
                    <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">AI Standards</h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.aiStandards.map((ai, idx) => (
                    <span key={idx} className="px-2 py-1 bg-amber-400/10 text-amber-400 rounded text-sm">
                      {ai}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveResume;

