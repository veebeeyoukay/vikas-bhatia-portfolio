# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Vikas Bhatia's personal portfolio website showcasing cybersecurity executive expertise. Built with React 18, TypeScript, Vite, and Tailwind CSS.

## Essential Commands

### Development
```bash
npm run dev          # Start dev server at localhost:5173
npm run build        # TypeScript check + production build
npm run preview      # Preview production build
npm run lint         # Run ESLint with strict settings
npm run format       # Format code with Prettier
```

### Testing
No test framework is currently configured. If adding tests, install and configure a test runner first.

## Architecture

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5.1.6
- **Styling**: Tailwind CSS + Shadcn/UI components
- **Routing**: React Router DOM 6
- **Icons**: Lucide React, Font Awesome

### Project Structure
```
src/
├── app/           # App-level components and styles
├── components/    # Reusable components
│   └── ui/       # Shadcn/UI base components
├── layouts/      # MainLayout (portfolio), ProjectLayout (projects)
├── pages/        # Page components
├── projects/     # Project-specific content
│   └── zenity/  # Zenity CISO project case study
└── lib/          # Utilities (cn() for className merging)
```

### Key Patterns

1. **Component Creation**: Use TypeScript functional components. Check existing components in `/src/components/` for naming and structure patterns.

2. **Styling**: Use Tailwind utility classes. For dynamic classes, use the `cn()` helper from `/src/lib/utils.ts`:
```typescript
import { cn } from "@/lib/utils"
cn("base-class", conditionalClass && "conditional-class")
```

3. **Path Aliases**: Use `@/` for src directory imports:
```typescript
import { Button } from "@/components/ui/button"
```

4. **Shadcn/UI Components**: Located in `/src/components/ui/`. These follow Radix UI patterns with Tailwind styling.

5. **Routing**: Two layout types exist:
   - `MainLayout`: Portfolio pages
   - `ProjectLayout`: Project case studies

## Configuration Files

- **TypeScript**: Strict mode enabled, ES2017 target
- **Tailwind**: Dark mode via class, custom animations, CSS variables for theming
- **Vite**: React plugin, path alias configured
- **Shadcn/UI**: New York style, zinc base color

## Development Guidelines

1. **Before Adding Dependencies**: Check if functionality exists in current packages (Radix UI, Lucide icons, etc.)

2. **Component Location**:
   - Reusable UI: `/src/components/ui/`
   - Page sections: `/src/components/`
   - Project-specific: `/src/projects/[project-name]/`

3. **Code Quality**: Always run `npm run lint` and `npm run format` before finalizing changes.

4. **State Management**: Use React hooks for component state. No global state management is currently implemented.

5. **Responsive Design**: Mobile-first approach using Tailwind's responsive prefixes (sm:, md:, lg:, xl:)