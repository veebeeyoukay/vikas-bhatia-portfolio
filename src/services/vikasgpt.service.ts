import axios from 'axios';

// Types
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ConversationRecord {
  id?: string;
  sessionId: string;
  userId?: string;
  messages: ChatMessage[];
  timestamp: string;
  metadata?: {
    userAgent?: string;
    ipAddress?: string;
    referrer?: string;
  };
}

class VikasGPTService {
  private sessionId: string;
  private baseUrl: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    // Use Netlify Functions in production
    // In development, use mock responses if Netlify Dev isn't running
    this.baseUrl = '/.netlify/functions';
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Get response from OpenAI via Netlify Edge Function
  async getChatResponse(messages: ChatMessage[]): Promise<string> {
    try {
      // Get or create leadId from localStorage for session continuity
      let leadId = localStorage.getItem('vikasgpt_lead_id');
      
      const response = await axios.post(
        '/api/chat',
        {
          leadId,
          messages,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Save leadId for session continuity
      if (response.data.leadId) {
        localStorage.setItem('vikasgpt_lead_id', response.data.leadId);
        this.sessionId = response.data.leadId;
      }

      return response.data.reply;
    } catch (error: any) {
      console.error('Chat API error:', error);
      
      // In development without Netlify Functions, use fallback responses
      if (!import.meta.env.PROD && (error.code === 'ERR_NETWORK' || error.response?.status === 404)) {
        return this.getFallbackResponse(messages[messages.length - 1].content);
      }
      
      // Return a helpful error message
      return "I apologize, but I'm having trouble connecting right now. Please try again in a moment.";
    }
  }

  // Fallback responses for development
  private getFallbackResponse(query: string): string {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('experience') || lowerQuery.includes('background')) {
      return "Vikas Bhatia brings over 25 years of experience in cybersecurity and technology leadership. He has worked with 130+ organizations across 15+ industries, from Fortune 500 companies to innovative startups.";
    }
    
    if (lowerQuery.includes('certification') || lowerQuery.includes('qualified')) {
      return "Vikas holds several prestigious certifications including QTE, C|CISO, CISSP, and CIPP. He also holds a BA Hons. in Economics from Kingston University, UK.";
    }
    
    if (lowerQuery.includes('service') || lowerQuery.includes('help')) {
      return "Vikas offers comprehensive cybersecurity and technology leadership services including:\n\n• Cybersecurity Strategy & Advisory\n• Security Architecture & Design\n• Digital Transformation Security\n• Risk Management & Compliance\n• Executive Coaching & Training";
    }
    
    return "That's an interesting question! Based on Vikas's extensive experience in cybersecurity and technology leadership, I can help you explore various topics. What specific aspect would you like to know more about?";
  }

  // Save conversation to Airtable via Netlify Function
  async saveConversation(messages: ChatMessage[]): Promise<void> {
    try {
      await axios.post(
        `${this.baseUrl}/vikasgpt-save`,
        {
          sessionId: this.sessionId,
          messages: messages,
          metadata: {
            userAgent: navigator.userAgent,
            referrer: document.referrer,
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.error('Failed to save conversation:', error);
      // Don't throw - we don't want to break the chat if save fails
    }
  }

  // Get current session ID
  getSessionId(): string {
    return this.sessionId;
  }

  // Create new session
  createNewSession(): void {
    this.sessionId = this.generateSessionId();
  }
}

// Export singleton instance
export const vikasgptService = new VikasGPTService();