# Vikas Bhatia Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing Vikas Bhatia's expertise in cybersecurity, technology leadership, and digital transformation.

## 🚀 Features

- **Modern, responsive design** with beautiful UI components
- **Interactive portfolio sections** including hero, about, services, and contact
- **Project showcase** with detailed case studies (including Zenity CISO Strategy)
- **Professional experience** and technical skills visualization
- **Contact form** with integrated scheduling
- **Multi-page routing** with React Router
- **Mobile-first responsive design**

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom animations
- **UI Components:** 
  - Radix UI (Navigation Menu, Dropdown Menu)
  - Lucide React Icons
  - Font Awesome Icons
- **Routing:** React Router DOM
- **Build Tool:** Vite
- **Package Manager:** npm
- **Styling Utilities:** 
  - class-variance-authority
  - clsx
  - tailwind-merge
  - tailwindcss-animate

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd vikas-bhatia-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
vikas-bhatia-portfolio/
├── src/
│   ├── app/                    # App-level components
│   ├── components/             # Reusable UI components
│   │   ├── ui/                # Base UI components (buttons, cards, etc.)
│   │   └── ...                # Feature-specific components
│   ├── layouts/               # Layout components
│   │   ├── MainLayout.tsx     # Main portfolio layout
│   │   └── ProjectLayout.tsx  # Project-specific layout
│   ├── pages/                 # Page components
│   │   ├── HomePage.tsx       # Main portfolio page
│   │   └── ProjectsLandingPage.tsx
│   ├── projects/              # Project-specific content
│   │   └── zenity/           # Zenity CISO project
│   ├── lib/                   # Utility functions
│   └── main.tsx              # App entry point
├── components/                # Shared components (Timeline)
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Key Components

### Portfolio Sections
- **Hero Section** - Introduction and call-to-action
- **About Section** - Professional background and journey
- **Services Section** - Cybersecurity and technology services
- **Skills & Expertise** - Technical skills and industry experience
- **Projects** - Case studies and portfolio work
- **Contact Form** - Professional contact and scheduling

### Project Showcase
- **Zenity CISO Strategy** - Comprehensive cybersecurity strategy case study
- **Timeline Components** - Interactive project history visualization
- **Leadership Objectives** - Strategic planning and implementation

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling with custom animations and responsive design. Configuration can be found in `tailwind.config.ts`.

### TypeScript
TypeScript configuration is managed through `tsconfig.json` with strict type checking enabled.

### Vite
Build tool configuration in `vite.config.ts` with React plugin and optimized build settings.

### Netlify Configuration

#### Build Settings (Configure in Netlify UI)
1. Navigate to **Project configuration > Build & deploy > Continuous deployment > Build settings**
2. Configure the following:
   - **Base directory**: Leave empty (defaults to repository root `/`)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify/functions` (if using Netlify Functions)

#### netlify.toml Configuration (Repository Root)
Create a `netlify.toml` file in your repository root to handle SPA routing and prevent 404 errors:

```toml
[build]
  command = "npm run build"
  publish = "dist"

# CRITICAL: This redirect rule fixes 404 errors for React Router
# It ensures all routes are handled by the client-side router
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Troubleshooting 404 Errors
1. **Verify the redirect rule** in `netlify.toml` is present (see above)
2. **Check build output**: Ensure `dist` directory contains `index.html` and all assets
3. **Clear cache and redeploy**: In Netlify UI, trigger a "Clear cache and deploy site"
4. **Verify React Router paths**: Ensure all routes in your app match deployed paths
5. **Check deploy logs**: Look for any build errors or warnings in Netlify deploy logs

#### Additional Netlify Features
- **Deploy Previews**: Automatically generated for pull requests
- **Branch Deploys**: Can be configured for staging branches
- **Environment Variables**: Set in Netlify UI under "Environment variables"
- **Deploy Notifications**: Configure webhooks for deployment status

## 🎯 Portfolio Highlights

- **20+ years** of cybersecurity and technology leadership experience
- **Fortune 500** and startup experience across multiple industries
- **Professional certifications** including CISSP, CISM, CRISC, CISA, PMP
- **Industry expertise** in Financial Services, Healthcare, Technology, Manufacturing, Retail, and Government
- **Awards and recognition** from Security Magazine, CISO Platform, and RSA Conference

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 👤 About Vikas Bhatia

Vikas Bhatia is a cybersecurity executive and strategic technology leader with over 20 years of experience transforming organizations through innovative security solutions and digital transformation. His expertise spans cybersecurity strategy, risk management, security architecture, and executive coaching.

## 🔐 Security

This portfolio website implements various security measures and follows best practices for web development. For security concerns, please contact through the provided contact information. 