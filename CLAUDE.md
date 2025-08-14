# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start Vite development server on http://localhost:5173
- `npm run build` - Run TypeScript compiler and build production bundle with Vite
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint on src directory for TypeScript/TSX files
- `npm run format` - Format code with Prettier

Note: No test commands are currently configured. Consider setting up a testing framework if tests are needed.

## Architecture

This is a React 18 portfolio website built with TypeScript and Vite, using Tailwind CSS for styling.

### Core Structure
- **Single Page Application** with React Router for client-side routing
- **Two layout systems**:
  - `MainLayout` - Standard portfolio pages with consistent navigation and styling
  - `ProjectLayout` - Project showcases with custom branding while maintaining navigation
- **Component-based architecture** with UI components built using Radix UI primitives and custom Tailwind styles

### Key Technologies
- **Build**: Vite with React plugin
- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom animations, class-variance-authority for variant management
- **UI Components**: Radix UI (navigation menu, dropdown menu), Lucide React icons
- **Interactive Elements**: react-icon-cloud for company visualization

### File Organization
- `src/App.tsx` - Main routing configuration
- `src/pages/` - Page-level components (HomePage, ProjectsLandingPage)
- `src/projects/` - Project-specific implementations (e.g., zenity/)
- `src/components/` - Shared components across the portfolio
- `src/components/ui/` - Base UI components using Radix UI and Tailwind
- `src/layouts/` - Layout wrappers for different page types
- `src/lib/utils.ts` - Utility functions including `cn()` for className merging

### TypeScript Configuration
- Strict mode enabled
- Path alias `@/*` configured for `src/*` imports
- JSX preserve mode for component compilation

### Project Pages Pattern
Projects like Zenity have their own component structure under `src/projects/[project-name]/` with dedicated sections, maintaining modularity while sharing the global navigation system.