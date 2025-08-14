import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, RefreshCw, Download } from 'lucide-react';
import { vikasgptService, ChatMessage } from '../services/vikasgpt.service';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const VikasGPTPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm VikasGPT, an AI assistant trained on Vikas Bhatia's expertise in cybersecurity, technology leadership, and digital transformation. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(vikasgptService.getSessionId());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save conversation to Airtable when messages update
  useEffect(() => {
    if (messages.length > 1) {
      const chatMessages: ChatMessage[] = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      vikasgptService.saveConversation(chatMessages);
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare chat history for API
      const chatHistory: ChatMessage[] = [...messages, userMessage].map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Get response from OpenAI (or fallback)
      const responseContent = await vikasgptService.getChatResponse(chatHistory);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseContent,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again later.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    vikasgptService.createNewSession();
    setSessionId(vikasgptService.getSessionId());
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: "Hello! I'm VikasGPT, an AI assistant trained on Vikas Bhatia's expertise in cybersecurity, technology leadership, and digital transformation. How can I help you today?",
        timestamp: new Date()
      }
    ]);
  };

  const handleExportChat = () => {
    const chatContent = messages.map(msg => 
      `[${msg.role.toUpperCase()}] ${new Date(msg.timestamp).toLocaleString()}\n${msg.content}\n`
    ).join('\n---\n\n');

    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vikasgpt-chat-${sessionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const suggestedQuestions = [
    "What is Vikas's experience in cybersecurity?",
    "What services does Vikas offer?",
    "What certifications does Vikas hold?",
    "How can I schedule a meeting with Vikas?",
    "What industries has Vikas worked in?",
    "Tell me about digital transformation strategy"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Chat Container */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg h-[calc(100vh-250px)] flex flex-col">
          {/* Chat Header */}
          <div className="border-b px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold">VikasGPT</h1>
                <p className="text-sm opacity-90">AI Assistant powered by Vikas Bhatia's expertise</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleNewChat}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  title="New Chat"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
                <button
                  onClick={handleExportChat}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  title="Export Chat"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="text-xs mt-2 opacity-75">
              Session ID: {sessionId}
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 ${message.role === 'user' ? 'ml-3' : 'mr-3'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === 'user' ? 'bg-blue-600' : 'bg-purple-600'
                    }`}>
                      {message.role === 'user' ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className={`${
                      message.role === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    } rounded-lg px-4 py-2 whitespace-pre-wrap`}>
                      {message.content}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center">
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    <span className="text-gray-600">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions (shown only when no user messages) */}
          {messages.length === 1 && (
            <div className="px-6 py-3 border-t">
              <p className="text-sm text-gray-600 mb-2">Try asking:</p>
              <div className="grid grid-cols-2 gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(question)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-colors text-left"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="border-t px-6 py-4">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Vikas's experience, services, or expertise..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="ml-3 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-gray-500">
                Powered by OpenAI GPT
              </p>
              <p className="text-xs text-gray-500">
                Press Enter to send
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VikasGPTPage;