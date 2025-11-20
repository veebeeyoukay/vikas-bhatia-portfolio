import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, ArrowRight, RotateCcw, Zap } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  description: string;
  choices: Choice[];
}

interface Choice {
  id: string;
  text: string;
  explanation: string;
  impact: string;
  nextScenario?: string;
}

const scenarios: Record<string, Scenario> = {
  ransomware: {
    id: 'ransomware',
    title: 'Ransomware Attack Detected',
    description: 'Your organization has been hit by a ransomware attack. Critical systems are encrypted, and the attackers are demanding payment. What\'s your first move?',
    choices: [
      {
        id: 'isolate',
        text: 'Immediately isolate affected systems and activate incident response team',
        explanation: 'Correct approach. Isolation prevents lateral movement and contains the threat. This is the foundation of effective incident response.',
        impact: 'Containment successful. Threat limited to initial systems. Business operations partially impacted but recoverable.',
        nextScenario: 'post-incident'
      },
      {
        id: 'negotiate',
        text: 'Engage with attackers to understand their demands and timeline',
        explanation: 'While communication can provide intelligence, this should never be the first step. Containment and assessment must come first.',
        impact: 'Delayed response allowed further system compromise. Recovery time extended significantly.',
        nextScenario: 'post-incident'
      },
      {
        id: 'restore',
        text: 'Begin immediate restoration from backups',
        explanation: 'Restoration is critical, but without proper containment, restored systems may be immediately re-infected.',
        impact: 'Partial success, but without containment, systems were re-compromised. Recovery delayed.',
        nextScenario: 'post-incident'
      }
    ]
  },
  'ai-governance': {
    id: 'ai-governance',
    title: 'AI Governance Challenge',
    description: 'Your organization wants to deploy AI across multiple business units. The board is asking about risk management and compliance. How do you proceed?',
    choices: [
      {
        id: 'framework',
        text: 'Establish AI governance framework aligned with ISO 42001 and NIST AI.600-1',
        explanation: 'Excellent strategic thinking. A governance framework provides the foundation for safe, compliant AI deployment across the organization.',
        impact: 'Board confidence increased. Clear roadmap established. Risk mitigated through structured approach.',
        nextScenario: 'implementation'
      },
      {
        id: 'pilot',
        text: 'Start with a pilot program in one business unit to learn and iterate',
        explanation: 'Pilot programs are valuable, but without governance framework, you risk creating inconsistent standards and compliance gaps.',
        impact: 'Pilot successful but scaling challenges emerged. Retroactive governance implementation required.',
        nextScenario: 'implementation'
      },
      {
        id: 'vendor',
        text: 'Rely on vendor-provided security and compliance guarantees',
        explanation: 'Vendor assurances are important but insufficient. You need organizational controls and oversight to ensure compliance.',
        impact: 'Vendor dependency created. Compliance gaps identified during audit. Remediation required.',
        nextScenario: 'implementation'
      }
    ]
  },
  'compliance-audit': {
    id: 'compliance-audit',
    title: 'SOC 2 Audit Preparation',
    description: 'Your startup needs SOC 2 Type II certification to close enterprise deals. The audit is in 90 days. What\'s your strategy?',
    choices: [
      {
        id: 'gap-assessment',
        text: 'Conduct comprehensive gap assessment, prioritize controls, and implement systematically',
        explanation: 'Strategic approach. Gap assessment identifies exactly what needs to be done, allowing efficient resource allocation.',
        impact: 'Audit passed on first attempt. Enterprise deals closed. Time-to-value: 90 days.',
        nextScenario: 'success'
      },
      {
        id: 'documentation',
        text: 'Focus on documentation and policy creation first',
        explanation: 'Documentation is essential, but without actual control implementation, you\'ll fail the audit. Controls must be operating effectively.',
        impact: 'Documentation complete but controls not implemented. Audit delayed. Deals at risk.',
        nextScenario: 'success'
      },
      {
        id: 'consultant',
        text: 'Hire consultants to handle everything',
        explanation: 'Consultants are valuable, but without internal ownership and understanding, you create dependency and risk of non-compliance post-audit.',
        impact: 'Audit passed but internal capability missing. Ongoing compliance challenges.',
        nextScenario: 'success'
      }
    ]
  },
  'post-incident': {
    id: 'post-incident',
    title: 'Post-Incident Recovery',
    description: 'The immediate threat is contained. Now you need to restore operations and prevent recurrence. What\'s your priority?',
    choices: [
      {
        id: 'lessons',
        text: 'Conduct thorough post-incident review, identify root causes, and update security controls',
        explanation: 'This is how you turn incidents into improvements. Learning from failures builds resilience.',
        impact: 'Security posture significantly improved. Similar incidents prevented. Board confidence restored.',
        nextScenario: 'success'
      },
      {
        id: 'restore',
        text: 'Focus solely on restoring systems to normal operations',
        explanation: 'While restoration is critical, skipping the lessons-learned phase means you\'re likely to repeat the same mistakes.',
        impact: 'Operations restored but vulnerabilities remain. Risk of repeat incident high.',
        nextScenario: 'success'
      }
    ]
  },
  'implementation': {
    id: 'implementation',
    title: 'Implementation Phase',
    description: 'Your governance framework is approved. Now it\'s time to implement across the organization. What\'s your approach?',
    choices: [
      {
        id: 'phased',
        text: 'Phased rollout with training, monitoring, and continuous improvement',
        explanation: 'Phased approach with proper change management ensures adoption and effectiveness. This is how transformation succeeds.',
        impact: 'Successful implementation. Organization-wide adoption. Compliance achieved.',
        nextScenario: 'success'
      },
      {
        id: 'mandate',
        text: 'Mandate immediate compliance across all business units',
        explanation: 'Mandates without support create resistance and compliance theater. People need to understand the "why" to effectively implement.',
        impact: 'Implementation challenges. Partial compliance. Ongoing remediation required.',
        nextScenario: 'success'
      }
    ]
  },
  'success': {
    id: 'success',
    title: 'Mission Accomplished',
    description: 'You\'ve successfully navigated the challenge. This demonstrates strategic thinking, risk management, and executive leadership.',
    choices: []
  }
};

const ScenarioSimulator: React.FC = () => {
  const [currentScenario, setCurrentScenario] = useState<string>('ransomware');
  const [history, setHistory] = useState<string[]>(['ransomware']);
  const [selectedChoices, setSelectedChoices] = useState<Record<string, string>>({});

  const handleChoice = (choice: Choice) => {
    setSelectedChoices(prev => ({ ...prev, [currentScenario]: choice.id }));
    
    if (choice.nextScenario) {
      setHistory(prev => [...prev, choice.nextScenario!]);
      setTimeout(() => {
        setCurrentScenario(choice.nextScenario!);
      }, 500);
    }
  };

  const reset = () => {
    setCurrentScenario('ransomware');
    setHistory(['ransomware']);
    setSelectedChoices({});
  };

  const scenario = scenarios[currentScenario];

  return (
    <section id="war-room" className="py-16 px-4 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl font-bold">The War Room</h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Strategic decision simulation. Navigate real-world cybersecurity scenarios and see how executive leadership makes the difference.
          </p>
        </motion.div>

        {/* Mission Control Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-lg p-8 mb-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-sm text-slate-400">ACTIVE SCENARIO</span>
              </div>
              <h3 className="text-2xl font-bold">{scenario.title}</h3>
            </div>
            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentScenario}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-slate-300 mb-8">
                {scenario.description}
              </p>

              {scenario.choices.length > 0 ? (
                <div className="space-y-4">
                  {scenario.choices.map((choice) => {
                    const isSelected = selectedChoices[currentScenario] === choice.id;
                    return (
                      <motion.button
                        key={choice.id}
                        onClick={() => handleChoice(choice)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
                          isSelected
                            ? 'border-amber-400 bg-amber-400/10'
                            : 'border-slate-700 hover:border-blue-500 bg-slate-800/50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="font-semibold text-lg mb-2">{choice.text}</p>
                            {isSelected && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4 space-y-2"
                              >
                                <div className="p-4 bg-slate-900/50 rounded-lg">
                                  <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="font-semibold text-green-400">Strategic Analysis</span>
                                  </div>
                                  <p className="text-slate-300 text-sm mb-3">{choice.explanation}</p>
                                  <div className="pt-3 border-t border-slate-700">
                                    <div className="flex items-center gap-2 mb-1">
                                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                                      <span className="text-xs font-semibold text-amber-400">Impact</span>
                                    </div>
                                    <p className="text-slate-400 text-sm">{choice.impact}</p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                          {!isSelected && (
                            <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Mission Accomplished</h4>
                  <p className="text-slate-300 mb-6">
                    You've demonstrated strategic thinking and executive leadership. This is how real-world cybersecurity decisions are made.
                  </p>
                  <button
                    onClick={reset}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                  >
                    Try Another Scenario
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Scenario Navigation */}
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setCurrentScenario('ransomware')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentScenario === 'ransomware'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Ransomware
          </button>
          <button
            onClick={() => setCurrentScenario('ai-governance')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentScenario === 'ai-governance'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            AI Governance
          </button>
          <button
            onClick={() => setCurrentScenario('compliance-audit')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentScenario === 'compliance-audit'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            SOC 2 Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScenarioSimulator;

