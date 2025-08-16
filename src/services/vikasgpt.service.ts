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
      if (error.response?.status === 404 || error.code === 'ERR_NETWORK') {
        console.log('Using fallback response in development');
        return this.getFallbackResponse(messages[messages.length - 1].content);
      }
      
      // Return a helpful error message
      return "I apologize, but I'm having trouble connecting right now. Please try again in a moment.";
    }
  }

  // Fallback responses for development
  private getFallbackResponse(query: string): string {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return "Hello! I'm VikasGPT, your AI assistant for learning about Vikas Bhatia's expertise in cybersecurity and technology leadership. How can I help you today?";
    }
    
    if (lowerQuery.includes('experience') || lowerQuery.includes('background')) {
      return "Vikas Bhatia brings over 25 years of experience in cybersecurity and technology leadership. He has worked with 130+ organizations across 15+ industries, from Fortune 500 companies to innovative startups.";
    }
    
    if (lowerQuery.includes('certification') || lowerQuery.includes('qualified')) {
      return "Vikas holds several prestigious certifications including QTE, C|CISO, CISSP, and CIPP. He also holds a BA Hons. in Economics from Kingston University, UK.";
    }
    
    if (lowerQuery.includes('service') || lowerQuery.includes('help')) {
      return "Vikas offers comprehensive cybersecurity and technology leadership services including:\n\n• Cybersecurity Strategy & Advisory\n• Security Architecture & Design\n• Digital Transformation Security\n• Risk Management & Compliance\n• Executive Coaching & Training";
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('meet') || lowerQuery.includes('schedule')) {
      return "You can schedule a meeting with Vikas by clicking the 'Schedule Meeting' button in the top navigation bar. He's available for consultations on cybersecurity strategy, compliance, and digital transformation initiatives.";
    }
    
    if (lowerQuery.includes('industry') || lowerQuery.includes('industries')) {
      return "Vikas has worked across 15+ industries including Financial Services, Healthcare, Technology, Retail, Manufacturing, Government, and more. His diverse experience allows him to bring cross-industry best practices to each engagement.";
    }
    
    if (lowerQuery.includes('digital transformation')) {
      return "Vikas specializes in securing digital transformation initiatives by:\n\n• Aligning security with business objectives\n• Implementing cloud-native security architectures\n• Enabling secure DevOps and CI/CD pipelines\n• Building security into digital products from the start\n• Training teams on secure development practices";
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
    } catch (error: any) {
      // In development, silently skip saving if endpoint doesn't exist
      if (error.response?.status === 404) {
        console.log('Skipping conversation save in development (no Netlify Functions)');
        return;
      }
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