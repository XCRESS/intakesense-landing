# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Important: This project uses pnpm as package manager - always use pnpm instead of npm**

```bash
# Start development server with turbopack
pnpm dev

# Build for production with turbopack  
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Architecture Overview

This is a Next.js 15 landing page for Intakesense, a recruitment platform. The architecture follows these patterns:

### Tech Stack
- **Next.js 15** with App Router and React 19
- **Tailwind CSS v4** for styling with shadcn/ui components
- **GSAP + ScrollTrigger** for advanced animations
- **Lenis** for smooth scrolling
- **Framer Motion** for React-specific animations
- **Lucide React** for icons

### Project Structure
- `/src/app/` - Next.js App Router pages and layout
- `/src/components/sections/` - Main page sections (Hero, Problem, Solution, Pricing)
- `/src/components/ui/` - Reusable UI components (shadcn/ui)
- `/src/providers/` - React context providers (SmoothScrollProvider)
- `/src/hooks/` - Custom React hooks
- `/src/lib/` - Utility functions

### Key Architecture Patterns

1. **Dual Animation System**: GSAP + ScrollTrigger for complex scroll animations, Framer Motion for React components
2. **Smooth Scrolling**: SmoothScrollProvider with Lenis integration and GSAP ticker synchronization  
3. **Performance**: Dynamic imports with SSR enabled for all sections
4. **Modern CSS**: Tailwind v4 with @theme inline, OKLCH colors, premium design system
5. **shadcn/ui**: "new-york" style with proper path aliases and component organization

### Component Organization
- Each major section is a separate component in `/sections/`
- UI components follow shadcn/ui conventions
- Animation logic is co-located with components
- All components are TypeScript with proper typing

### Styling System
- **Tailwind CSS v4** with @theme inline configuration (no traditional config file)
- **Custom design system** with OKLCH color space for better color consistency
- **Premium brand colors**: Deep sapphire blue primary, warm gold-orange accent
- **Sophisticated animations** with custom keyframes and micro-interactions
- **Typography system** with premium scales and font feature settings
- Uses `tw-animate-css` for additional animation utilities

### Important Development Notes

1. **Package Manager**: Always use `pnpm` - project has pnpm-lock.yaml
2. **Tailwind v4**: No traditional config file, uses @theme inline in globals.css
3. **Animation Cleanup**: Always use GSAP context with proper cleanup (ctx.revert())
4. **Typography**: Uses premium scales with OKLCH colors and font feature settings
5. **Code Splitting**: All sections use dynamic imports with loading states
- only use pnpm not npm