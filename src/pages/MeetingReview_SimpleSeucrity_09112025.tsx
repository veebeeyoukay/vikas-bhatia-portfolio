import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, Users, Calendar, Target, Lightbulb } from 'lucide-react';

const AUTHORIZED_EMAILS = [
  'vikas@justprotect.co',
  'simon@simplesecurity.com', 
  'steve@simplesecurity.com'
];

const SECURITY_QUESTION = "What island did Simon mention wanting to move to?";
const CORRECT_ANSWERS = ['corfu', 'Corfu', 'CORFU'];

interface MeetingData {
  title: string;
  date: string;
  attendees: string[];
  summary: string;
  nextSteps: string[];
  keyTopics: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}

const meetingData: MeetingData = {
  title: "Steve & Simon @ Simple Security <> Vikas: AI Accelerator Meeting",
  date: "Meeting Summary Available",
  attendees: ["Vikas Bhatia", "Simon (Simple Security)", "Steve (Simple Security)"],
  summary: "The meeting began with personal discussions between Simon and Vikas about their midlife transitions and future plans, including moves to New Jersey and Corfu. Vikas shared his professional journey from a failed startup to becoming a cybersecurity expert, including his experiences with AI and managing ADHD, while also discussing his current projects and personal life. The conversation concluded with discussions about professional setbacks, automation needs for test-for-fit assessments, and plans for follow-up meetings to explore integration opportunities between the participants' respective automation efforts.",
  nextSteps: [
    "Simon to schedule a one-on-one call with Vikas to discuss their backgrounds and potential synergies",
    "Vikas to book a meeting time using Simon's calendar link",
    "Simon to review the assessment tool link that Vikas shared",
    "Simon to explore Vikas's portfolio website and test the \"Vikash GPT\"",
    "Simon to arrange a follow-up meeting with Buck, Steve, and Vikas to discuss collaboration opportunities",
    "Simon and Vikas to discuss automating the test-for-fit process for smaller companies to reduce Steve's time commitment",
    "Simon and Vikas to explore potential integration of Vikas's sales pipeline automation with Simon and Steve's backend processes"
  ],
  keyTopics: [
    {
      title: "Midlife Transitions and Lifestyle Changes",
      description: "Discussion about personal journeys, with Vikas reaching the \"crescent of the hill\" at age 50 and Simon's midlife change in 2019. Plans to move to New Jersey and Corfu respectively.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "AI and Cybersecurity Journey",
      description: "Vikas shared his journey from a failed startup to becoming a cybersecurity expert, learning to work with AI and managing ADHD positively.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Above-Ground Pool Deck Construction",
      description: "Vikas's $900 pool purchase with discount and credit card offer, collaborating with friend Kyle on a $40,000-$60,000 deck project.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Overcoming Professional Setbacks",
      description: "Stories of resilience - Vikas being fired from Capgemini but later succeeding at Deloitte and immigrating to the US, Simon's journey from call center to financial advisor.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Automating Test-for-Fit Assessment Process",
      description: "Discussion about creating automated systems for smaller companies (10-15 seats) to reduce Steve's time commitment and explore integration opportunities.",
      icon: <Calendar className="h-6 w-6" />
    }
  ]
};

export default function MeetingReview() {
  const [email, setEmail] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!AUTHORIZED_EMAILS.includes(email.toLowerCase())) {
      setError('Email not authorized for this meeting.');
      return;
    }

    if (!CORRECT_ANSWERS.includes(securityAnswer)) {
      setError('Incorrect answer. Think about the conversation regarding future moves...');
      return;
    }

    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Meeting Access</CardTitle>
            <CardDescription>
              Enter your credentials to access the meeting review
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="security" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Security Question
                </label>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {SECURITY_QUESTION}
                </p>
                <input
                  id="security"
                  type="text"
                  value={securityAnswer}
                  onChange={(e) => setSecurityAnswer(e.target.value)}
                  placeholder="Your answer..."
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
                </div>
              )}

              <Button type="submit" className="w-full">
                Access Meeting Review
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold">{meetingData.title}</CardTitle>
                <CardDescription className="text-lg mt-2">{meetingData.date}</CardDescription>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Attendees:</p>
                <div className="space-y-1">
                  {meetingData.attendees.map((attendee, index) => (
                    <div key={index} className="flex items-center gap-2 justify-end">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">{attendee}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Quick Recap */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Quick Recap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {meetingData.summary}
            </p>
          </CardContent>
        </Card>

        {/* Key Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {meetingData.keyTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    {topic.icon}
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {topic.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-orange-600" />
              Next Steps & Action Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {meetingData.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fun Footer */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="text-center py-8">
            <h3 className="text-xl font-bold mb-2">🎯 Ready for Action!</h3>
            <p className="text-blue-100">
              Great meeting everyone! Looking forward to our next steps and potential collaboration opportunities.
            </p>
            <div className="mt-4 text-sm text-blue-200">
              💡 Pro tip: Bookmark this page for easy reference during follow-up meetings
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}