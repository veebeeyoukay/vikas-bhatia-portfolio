import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Zap, Rocket } from 'lucide-react';

const AIAdvantageSection: React.FC = () => {
  return (
    <section id="ai-advantage" className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl font-bold">The AI Advantage</h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I built this entire platform using the same AI tools I advise on. 
            <span className="font-semibold text-amber-400"> Imagine what we can do for your business.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Assisted Development</h3>
            <p className="text-slate-400 text-sm">
              Built with Claude, Gemini, and modern AI tools—demonstrating what's possible for non-developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Rapid Innovation</h3>
            <p className="text-slate-400 text-sm">
              From concept to deployment in days, not months. This is the new standard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Strategic Implementation</h3>
            <p className="text-slate-400 text-sm">
              Not just building—strategically deploying AI to solve real business problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Proven Results</h3>
            <p className="text-slate-400 text-sm">
              This portfolio itself is proof: high-quality, professional, built with AI assistance.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-lg p-8 max-w-4xl mx-auto"
        >
          <div className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-bold mb-4 text-center">
              What This Means for You
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                <span className="font-semibold text-amber-400">You don't need to be a developer</span> to leverage AI effectively. 
                This entire portfolio—with its sophisticated UI, interactive components, and professional design—was built 
                by someone who understands business strategy, not just code.
              </p>
              <p>
                As your cybersecurity and AI advisor, I bring the same approach: 
                <span className="font-semibold text-blue-400"> strategic thinking, rapid execution, and measurable results</span>. 
                We'll use AI tools to accelerate your security initiatives, compliance programs, and digital transformation—all 
                while maintaining the strategic oversight that only comes from executive experience.
              </p>
              <p className="text-center pt-4">
                <span className="text-lg font-semibold text-white">
                  Ready to see what AI can do for your organization?
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAdvantageSection;

