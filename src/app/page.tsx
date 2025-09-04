'use client'

import dynamic from 'next/dynamic'
import { SmoothScrollProvider } from '@/providers/smooth-scroll-provider'

// Dynamic imports for better code splitting and performance
const Hero = dynamic(() => import('@/components/sections/hero').then(mod => ({ default: mod.Hero })), {
  ssr: true,
  loading: () => <div className="min-h-screen" />
})

const Problem = dynamic(() => import('@/components/sections/problem').then(mod => ({ default: mod.Problem })), {
  ssr: true,
  loading: () => <div className="min-h-[50vh]" />
})

const Solution = dynamic(() => import('@/components/sections/solution').then(mod => ({ default: mod.Solution })), {
  ssr: true,
  loading: () => <div className="min-h-[50vh]" />
})

const Pricing = dynamic(() => import('@/components/sections/pricing').then(mod => ({ default: mod.Pricing })), {
  ssr: true,
  loading: () => <div className="min-h-[50vh]" />
})

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative">
        <Hero />
        <Problem />
        <Solution />
        <Pricing />
        
        {/* Footer */}
        <footer className="relative py-16 border-t border-border/50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Intakesense
              </h3>
              <p className="text-muted-foreground">
                Hiring that makes sense
              </p>
              <p className="text-sm text-muted-foreground">
                © 2025 Intakesense. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </SmoothScrollProvider>
  )
}
