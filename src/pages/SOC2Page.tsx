import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Download, Calendar, CheckCircle2, ArrowRight, X } from 'lucide-react';

const SOC2Page: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'bot' | 'user'; text: string }>>([
    {
      role: 'bot',
      text: "Hi! I'm VikasSOC2GPT. I help B2B SaaS companies unblock enterprise deals stuck on SOC 2. Let me ask you a few questions so I can help..."
    }
  ]);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const handleOpenChat = () => {
    setChatOpen(true);
  };

  const handleCloseChat = () => {
    setChatOpen(false);
  };

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { role: 'user', text: message }]);
    setMessageCount(messageCount + 1);

    // Show email capture after 3 messages
    if (messageCount + 1 >= 3 && !showEmailCapture) {
      setShowEmailCapture(true);
    }

    // Simulate bot response (in production, this would call an API)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'bot',
        text: "Thank you for that information. Let me help you with that..."
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Are you losing deals because customers ask for your SOC 2?
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Talk to an AI trained on 50+ SOC 2 implementations. Free for the first 10 companies.
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
                onClick={handleOpenChat}
              >
                <MessageSquare className="mr-2 h-6 w-6" />
                Talk to VikasSOC2GPT Now
              </Button>
            </div>

            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="bg-white rounded-lg shadow-2xl p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500">VP Enterprise Sales</div>
                    </div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-gray-900">
                    <p className="font-medium text-red-800 mb-2">Lost the $400K Acme deal.</p>
                    <p className="text-sm text-gray-700">They need SOC 2 by Q1.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQH3w8KfqyPefw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729540612090?e=1735776000&v=beta&t=9Jf2xWNcwt7OJd8j-g_1kZEj7xVy6_1yoLAL9P3_DkU"
                    alt="Ryan Nelson"
                    className="w-20 h-20 rounded-full border-4 border-blue-100"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                    "Vikas has been a huge asset. He helped unlock (over $100k in) revenue opportunities, de-risk deals, and educate our sales team on security best practices. We didn't even have to have the SOC2!"
                  </blockquote>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">Ryan Nelson</div>
                      <div className="text-gray-600">VP Sales, Harness</div>
                    </div>
                    <img
                      src="https://www.goharness.com/hubfs/harness-logo-white.svg"
                      alt="Harness"
                      className="h-8 sm:ml-4 invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to unblock your enterprise deals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <div className="mb-4">
                <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Chat with VikasSOC2GPT
                </h3>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                Get immediate answers to your SOC 2 questions in just 5-10 minutes.
              </p>
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={handleOpenChat}
              >
                Start Chat <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <div className="mb-4">
                <Download className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Get Your Free Guide
                </h3>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                Download "What to Say When You Don't Have SOC 2" - proven scripts that work.
              </p>
              <Button
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                Download Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8 border border-pink-100 hover:shadow-xl transition-shadow">
              <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <div className="mb-4">
                <Calendar className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Book a Personal Review
                </h3>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                $499 Revenue Recovery Call - personalized strategy for your specific deals.
              </p>
              <Button
                variant="outline"
                className="w-full border-pink-600 text-pink-600 hover:bg-pink-50"
                onClick={() => window.open('https://app.usemotion.com/meet/vikas-bhatia/JP-meeting', '_blank')}
              >
                Book Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
              As Seen On
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md w-full h-24 flex items-center justify-center">
                <span className="text-gray-400 font-semibold">Logo 1</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md w-full h-24 flex items-center justify-center">
                <span className="text-gray-400 font-semibold">Logo 2</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md w-full h-24 flex items-center justify-center">
                <span className="text-gray-400 font-semibold">Logo 3</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Startups Helped</div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-5xl font-bold text-purple-600 mb-2">23</div>
                <div className="text-gray-700 font-medium">Avg Days to Unblock Deal</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Companies We've Helped
              </h4>
              <div className="flex flex-wrap justify-center gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Logo {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Let SOC 2 Kill Your Deals
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get expert guidance now. Free for the first 10 companies.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
            onClick={handleOpenChat}
          >
            <MessageSquare className="mr-2 h-6 w-6" />
            Start Chatting Now
          </Button>
        </div>
      </section>

      {/* Chat Interface Modal */}
      {chatOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl sm:max-h-[80vh] h-[90vh] sm:h-auto flex flex-col shadow-2xl">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">VikasSOC2GPT</h3>
                  <p className="text-sm text-blue-100">SOC 2 Expert Assistant</p>
                </div>
              </div>
              <button
                onClick={handleCloseChat}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {showEmailCapture && (
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <h4 className="font-semibold text-purple-900 mb-3">
                    To continue, please share your email
                  </h4>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
                  />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Continue Conversation
                  </Button>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-6 border-t border-gray-200 bg-white rounded-b-2xl">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                      handleSendMessage(e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                />
                <Button
                  className="bg-blue-600 hover:bg-blue-700 px-6"
                  onClick={(e) => {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                    if (input.value.trim()) {
                      handleSendMessage(input.value);
                      input.value = '';
                    }
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SOC2Page;
