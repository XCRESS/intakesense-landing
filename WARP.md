# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Intakesense Landing Page** is a modern Next.js 15 application for a revolutionary recruitment platform. The project uses advanced animations, smooth scrolling, and contemporary design patterns to create an engaging user experience.

## Development Commands

### Core Development
- `pnpm dev` - Start development server with Turbopack (faster than webpack)
- `pnpm build` - Build for production with Turbopack optimization
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

### Package Management
This project uses **pnpm** as the package manager. Always use pnpm commands instead of npm or yarn.

## Architecture Overview

### Tech Stack
- **Next.js 15** with App Router (latest features)
- **React 19** with modern hooks and patterns
- **TypeScript** for type safety
- **Tailwind CSS v4** with custom design system
- **Framer Motion** for React-specific animations
- **GSAP + ScrollTrigger** for complex scroll-based animations
- **Lenis** for smooth scrolling experience

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with custom design system
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page with dynamic imports
├── components/
│   └── sections/          # Modular page sections
│       ├── hero.tsx       # Hero with GSAP text animations
│       ├── problem.tsx    # Problem section with animated stats
│       ├── solution.tsx   # Solution with staggered animations
│       └── pricing.tsx    # Pricing section
├── hooks/
│   └── use-scroll-animation.ts  # Custom hook for scroll animations
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
└── providers/
    └── smooth-scroll-provider.tsx  # Lenis smooth scroll setup
```

### Animation Architecture
The project uses a dual animation system:
- **GSAP + ScrollTrigger**: Complex scroll-triggered animations, parallax effects, and text reveals
- **Framer Motion**: Component-level animations and transitions
- **Lenis**: Hardware-accelerated smooth scrolling

### Design System
- **Custom Tailwind v4 configuration** with CSS-in-JS approach
- **Brand colors**: Deep blue primary (trust), electric blue accent (innovation)
- **OKLCH color space** for better color consistency
- **Custom animations** defined in CSS with semantic naming

## Code Patterns & Best Practices

### Component Structure
```typescript
'use client'  // Always at the top for client components

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, useInView } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)  // Register plugins

export function ComponentName() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animations here
    }, ref)

    return () => ctx.revert()  // Cleanup
  }, [])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {/* Component content */}
    </motion.section>
  )
}
```

### Animation Patterns
1. **Use GSAP context** for proper cleanup and scoping
2. **Register plugins** at component level for better tree-shaking
3. **Combine Framer Motion** for simple entrance animations
4. **Use ScrollTrigger** for scroll-based animations
5. **Implement proper cleanup** with context.revert()

### Performance Optimizations
- **Dynamic imports** with loading states for code splitting
- **SSR-enabled** dynamic imports for better SEO
- **GSAP context** for memory management
- **Proper cleanup** of animation instances

### Styling Conventions
- Use **semantic class names** (`hero-bg`, `float-1`, `animate-on-scroll`)
- **Tailwind utilities** for consistent spacing and colors
- **CSS custom properties** for theme management
- **Gradient utilities** with brand-consistent color stops

### TypeScript Patterns
- **Proper ref typing**: `useRef<HTMLElement>(null)`
- **Interface definitions** for component props
- **Strict type checking** enabled
- **Path aliases**: `@/` for src directory

## Development Guidelines

### When Working with Animations
1. Always use GSAP context for complex animations
2. Prefer ScrollTrigger over Intersection Observer for scroll effects
3. Use Framer Motion for simple component transitions
4. Implement proper cleanup in useEffect returns
5. Test animations on both desktop and mobile

### Component Development
1. Follow the established section-based architecture
2. Use dynamic imports for performance
3. Implement loading states for better UX
4. Use semantic HTML structure
5. Ensure accessibility compliance

### Styling Guidelines
1. Use the established design system colors
2. Follow mobile-first responsive approach
3. Leverage Tailwind's utility-first methodology
4. Use CSS custom properties for dynamic theming
5. Maintain consistent spacing scale

## Key Dependencies

### Core Framework
- `next@15.5.2` - Latest Next.js with App Router
- `react@19.1.0` - Latest React with concurrent features

### Animations & Interactions
- `framer-motion@^12.23.12` - React animation library
- `gsap@^3.13.0` - Professional animation toolkit
- `lenis@^1.3.11` - Smooth scrolling

### UI & Styling
- `tailwindcss@^4` - Latest Tailwind CSS
- `class-variance-authority@^0.7.1` - Dynamic component variants
- `clsx@^2.1.1` + `tailwind-merge@^3.3.1` - Class name utilities

### Icons & Assets
- `lucide-react@^0.542.0` - Modern icon library

## Configuration Files

### Important Configurations
- `next.config.ts` - Next.js configuration (minimal, ready for extensions)
- `tsconfig.json` - TypeScript with modern target (ES2017)
- `eslint.config.mjs` - ESLint with Next.js and TypeScript rules
- `components.json` - shadcn/ui configuration (New York style)
- `postcss.config.mjs` - PostCSS with Tailwind

### Build Settings
- **Turbopack enabled** for faster development and builds
- **TypeScript strict mode** for better code quality
- **ESLint integration** with Next.js best practices
- **Path aliases** configured for clean imports

## Brand & Content Guidelines

### Intakesense Brand
- **Mission**: Revolutionary recruitment platform that takes responsibility for keeping positions filled
- **Value Proposition**: No more empty seats, continuous intelligent talent acquisition
- **Brand Colors**: Deep blue (trust) + Electric blue (innovation)
- **Tone**: Professional, innovative, solution-focused

### Content Structure
The landing page follows a story-driven structure:
1. **Hero**: Brand introduction and value proposition
2. **Problem**: Industry pain points with animated statistics
3. **Solution**: Feature showcase with benefits
4. **Pricing**: Service offerings and call-to-action

This architecture supports future growth while maintaining the current high-performance, visually engaging experience.
