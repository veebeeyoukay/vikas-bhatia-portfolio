Build me a high-converting SOC 2 landing page with integrated AI chat interface.

CONTEXT:
I'm Vikas Bhatia, I have helped personally unblocked over $1m enterprise deals in the past 12 months stuck due to compliance requirements. I have lead over 30 SOC 2 certifications for B2B SaaS companies (15-50 employees) . I need a landing page that qualifies leads through an AI chat, captures emails, and converts to a $499 "Revenue Recovery Call."

TECH STACK (current stack +)
- Anthropic Claude API for chat
- Resend for email capture
- Stripe Payment Links (I'll provide the link)


LANDING PAGE STRUCTURE:

1. HERO SECTION:
   - Headline: "Are you losing deals because customers ask for your SOC 2?"
   - Subheadline: "Talk to an AI trained on 50+ SOC 2 implementations. Free for the first 10 companies."
   - CTA Button: "Talk to VikasSOC2GPT Now" (opens chat interface)
   - Background: Gradient (blue to purple), subtle grid pattern
   - Image: Screenshot of a Slack message showing "Lost the $400K Acme deal. They need SOC 2 by Q1."

2. SOCIAL PROOF SECTION:
   - Single testimonial card with:
     * Quote: "Vikas has been a huge asset. He helped unlock (over $100k in) revenue opportunities, de-risk deals, and educate our sales team on security best practices. We didn't even have to have the SOC2!"
     * Attribution: Ryan Nelson, VP Sales, Harness (Series A)
     * Make this look credible ((headshot - https://www.linkedin.com/in/r-nelson/overlay/photo/) & company logo from https://www.goharness.com/)

3. HOW IT WORKS:
   - 3 simple steps in cards:
     1. "Chat with VikasSOC2GPT (5-10 min)" - Get immediate answers to your SOC 2 questions
     2. "Get your free guide" - Download "What to Say When You Don't Have SOC 2"
     3. "Book a personal review" - $499 Revenue Recovery Call (optional)

4. TRUST INDICATORS:
   - "As seen on:" (placeholder for logos)
   - "50+ startups helped" (place holder for revolving carosel of logos
   - "Average deal unblocked: 23 days"

5. CHAT INTERFACE (Modal/Slide-in):
   - Clean chat UI (like ChatGPT but branded)
   - Starts with: "Hi! I'm VikasSOC2GPT. I help B2B SaaS companies unblock enterprise deals stuck on SOC 2. Let me ask you a few questions so I can help..."
   - Pre-programmed qualifying questions (see below)
   - Email capture form appears after 3 messages exchanged
   - CTA to book $499 call appears after providing valuable advice

6. FOOTER:
   - Links to LinkedIn, privacy policy placeholder
   - "Built by Vikas Bhatia | SOC 2 Expert"

CHAT LOGIC (Claude API Integration):

System Prompt for VikasGPT:
"You are VikasGPT, an AI assistant trained by Vikas Bhatia, a SOC 2 expert who has helped 50+ B2B SaaS startups get certified and unblock enterprise deals.

Your goal:
1. Qualify the lead (ARR, stuck deals, SOC 2 status)
2. Provide immediate, actionable value
3. Offer the $499 Revenue Recovery Call to qualified leads

Qualifying Questions (ask these first):
- What's your current ARR range? (Under $500K / $500K-$2M / $2M+)
- Do you have any deals stuck due to security/compliance requirements?
- If yes, what's the total value of those stuck deals?
- Have you started SOC 2 prep, or is this new?

Based on answers:
- If ARR < $500K: "You're early for SOC 2. Here's what to say to customers: [provide script]. Want the full ebook?"
- If ARR $500K+ with stuck deals: Provide personalized advice, then offer: 'I can personally review your situation in a 60-min Revenue Recovery Call ($499). You'll get a complete roadmap, templates, and auditor recommendations. Book here: [link]'

Be conversational, direct, and valuable. Use Vikas's voice: experienced, no-BS, focused on revenue impact."

TECHNICAL REQUIREMENTS:

1. Chat Features:
   - Streaming responses (show typing indicator)
   - Message history persists during session
   - Copy to clipboard button for messages
   - Mobile-responsive chat interface

2. Email Capture:
   - Form appears after 3 chat exchanges: "Want me to email you this conversation + the full SOC 2 ebook?"
   - Fields: Name, Email, Company
   - Submit → sends via Resend
   - Triggers Slack webhook notification

3. Analytics/Webhooks:
   - Track: page views, chat starts, email captures, Stripe link clicks
   - Slack webhook on:
     * New chat started
     * Email captured (include: name, company, ARR range, stuck deal value)
     * Stripe link clicked
   - Store interactions in local state (no database for v1)

4. Stripe Integration:
   - Payment link for $499 Revenue Recovery Call
   - Button: "Book Revenue Recovery Call ($499)"
   - Opens Stripe checkout in new tab

5. Design Requirements:
   - Mobile-first, fully responsive
   - Fast loading (optimize images)
   - Accessible (WCAG AA)
   - Professional but approachable (think Stripe meets Superhuman)
   - Use shadcn/ui components for consistency

ENVIRONMENT VARIABLES NEEDED:
- ANTHROPIC_API_KEY
- RESEND_API_KEY
- STRIPE_PAYMENT_LINK (I'll provide)
- SLACK_WEBHOOK_URL (I'll provide)

COPY TO USE:

Hero Headline: "Are you losing deals because customers ask for your SOC 2?"

Hero Body:
"I'm Vikas Bhatia. I've helped 50+ startups unblock enterprise deals by getting SOC 2 ready in weeks, not months.

I built an AI that knows everything I know about:
- What to say when a customer asks for SOC 2 (and you don't have it yet)
- How to prioritize the 127 controls (only 23 actually matter for deals)
- Which auditor to pick (and which ones will cost you 6 extra months)
- The exact 30-day roadmap to unblock your pipeline

It's free. Ask it anything. If it can't help you, I will personally."

CTA: "Talk to VikasGPT Now"

Testimonial: [Use the Sarah Chen quote from above]

DELIVERABLES:
1. Full Next.js app with all components
2. README with setup instructions
3. .env.example file
4. Deploy to Vercel (give me instructions)

CONSTRAINTS:
- Build time: 30 minutes max
- No authentication (public access)
- No database (use local state/session storage for chat history)
- Keep it simple - I can iterate later

Start with the landing page structure, then build the chat interface, then wire up integrations.

GO!