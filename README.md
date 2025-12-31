# Vikas Bhatia - Portfolio & AI Transformation Demo

Personal portfolio website showcasing cybersecurity executive expertise and AI-powered business transformation capabilities.

## 🚀 Overview

This repository contains:
1. **Professional Portfolio** - Cybersecurity executive portfolio with 20+ years experience
2. **AI Transformation Demo** - Complete AI-powered lead generation platform with 4 live service businesses

## 🎯 AI Transformation Project

**Live Demo:** [/ai-transformation](https://vikasbhatia.info/ai-transformation)

A complete demonstration platform showing how AI can transform premium service businesses through automated lead generation, intelligent qualification, and seamless handoff processes.

### Four Premium Service Businesses

1. **SmartHome Tampa** - Premium smart home automation (`/tampa-smarthome`)
2. **TechGuard Tampa** - Enterprise home networks & digital safety (`/tampa-techguard`)
3. **AquaTech Automation** - Smart pool automation systems (`/tampa-pool`)
4. **GarageTech Pro** - Smart garage & home inventory (`/tampa-garage`)

**Target Market:** Affluent South Tampa/Davis Islands homeowners ($300k+ household income)
**Price Range:** $500-6000 per project (vs traditional $50-600)
**Focus:** Time-saving technical services, not physical labor

### Features
- 4 live service business landing pages with lead capture
- AI-powered lead qualification (Lindy.ai - planned)
- Automated workflow orchestration (n8n - planned)
- Enterprise-grade database (Neon PostgreSQL)
- Real-time lead routing and notifications

### Implementation Status
- ✅ **Phase 1-2 Complete:** Database schema + Frontend landing pages
- 🔄 **Phase 3 In Progress:** Backend API ready, AI agents need configuration
- ⏳ **Phase 4-9 Planned:** Full automation workflows and business prospecting

See `_aiwk/README.md` for complete AI transformation documentation.

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Vite 5.1.6
- Tailwind CSS + Shadcn/UI components
- React Router DOM 6
- Framer Motion (animations)
- Lucide React Icons

### Backend
- Netlify Functions (serverless API)
- Neon PostgreSQL (serverless database)
- @neondatabase/serverless driver

### AI & Automation (Planned)
- Lindy.ai - Voice/SMS AI agents
- n8n - Workflow automation
- Twilio - SMS notifications
- Google Maps API - Business prospecting

## 📁 Project Structure

```
vikas-bhatia-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/                      # Shadcn/UI base components
│   │   └── landing/                 # AI transformation components
│   ├── pages/
│   │   ├── landing/                 # 4 service business pages
│   │   ├── AITransformationHub.tsx  # Main AI hub page
│   │   ├── HomePage.tsx             # Portfolio home
│   │   └── ProjectsLandingPage.tsx  # Projects showcase
│   ├── projects/                    # Project case studies
│   │   ├── zenity/                  # Zenity CISO project
│   │   └── atlas/                   # ATLAS project
│   ├── config/
│   │   └── businesses.ts            # 4 business configurations
│   ├── types/
│   │   ├── landing.ts               # Landing page types
│   │   └── database.ts              # Database model types
│   └── hooks/
│       └── useLeadSubmission.ts     # Lead submission logic
├── netlify/functions/               # Serverless API
│   ├── lead-webhook/                # Lead capture endpoint
│   └── utils/db.ts                  # Database connection
├── migrations/                      # Database schema
│   ├── 001_initial_schema.sql
│   └── 002_indexes_and_triggers.sql
└── _aiwk/                          # AI transformation docs
    ├── docs/                        # Implementation guides
    ├── plan/                        # Project plans
    └── prd/                         # Requirements & briefs
```

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS version)
- npm (comes with Node.js)
- Netlify CLI (for local function testing): `npm install -g netlify-cli`

### Installation

```bash
# Clone repository
git clone [repository-url]
cd vikas-bhatia-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
# Visit: http://localhost:5173

# Start with Netlify Functions
netlify dev
# Functions: http://localhost:8888/.netlify/functions/
```

### Environment Variables

Copy `.env.local.template` to `.env.local` and configure:

```env
# Neon Database
DATABASE_URL=postgresql://...

# AI Services (when configured)
LINDY_API_KEY=xxx
N8N_NEW_LEAD_WEBHOOK=https://...
TWILIO_ACCOUNT_SID=xxx
```

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (TypeScript + Vite)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🗄️ Database Setup

The project uses Neon PostgreSQL (serverless). To deploy the schema:

1. Go to [Neon Console](https://console.neon.tech)
2. Open SQL Editor
3. Run `migrations/001_initial_schema.sql`
4. Run `migrations/002_indexes_and_triggers.sql`

See `_aiwk/plan/database-migration-notes.md` for details.

## 🚀 Deployment

### Netlify Configuration

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

**Environment Variables:**
Set in Netlify Dashboard → Site Settings → Environment Variables

**netlify.toml** (handles SPA routing):
```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy Commands

```bash
# Build locally first
npm run build

# Deploy to Netlify
netlify deploy --prod
```

## 📊 AI Transformation Routes

- `/ai-transformation` - Main hub and project overview
- `/tampa-smarthome` - SmartHome Tampa (smart home automation)
- `/tampa-techguard` - TechGuard Tampa (enterprise networks & digital safety)
- `/tampa-pool` - AquaTech Automation (smart pool systems)
- `/tampa-garage` - GarageTech Pro (smart garage & inventory)

## 📚 Documentation

### AI Transformation Project
- **Quick Start:** `_aiwk/README.md`
- **Action Items:** `_aiwk/todos.md`
- **Implementation Guide:** `_aiwk/docs/implementation-guide.md`
- **Market Positioning:** `_aiwk/docs/PREMIUM_REPOSITIONING.md`
- **Full Plan:** `_aiwk/plan/implementation-plan.md`
- **PRD:** `_aiwk/prd/ai-powered-bus-transformation.md`

### Portfolio
- **Setup Guide:** `CLAUDE.md` (for Claude Code)

## 🎯 Portfolio Highlights

- **20+ years** cybersecurity and technology leadership
- **Fortune 500** and startup experience
- **Professional certifications:** CISSP, CISM, CRISC, CISA, PMP, CCISO, CIPP/US
- **Industry expertise:** Financial Services, Healthcare, Technology, Manufacturing
- **Awards:** Security Magazine Top CISO, CISO Platform Top 50

## 🔐 Security

This portfolio implements security best practices:
- TypeScript strict mode
- Input validation on all forms
- CORS configuration
- Environment variable protection
- Serverless architecture (Netlify Functions)

## 📝 License

Private - Vikas Bhatia Portfolio

## 👤 About Vikas Bhatia

Vikas Bhatia is a cybersecurity executive and strategic technology leader with over 20 years of experience transforming organizations through innovative security solutions and AI-powered business transformation.

**Contact:**
- Website: https://vikasbhatia.info
- AI Demo: https://vikasbhatia.info/ai-transformation
- Schedule Meeting: [Motion Calendar](https://app.usemotion.com/meet/vikas-bhatia/JP-meeting)
