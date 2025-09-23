'use client'

import { SmoothScrollProvider } from '@/providers/smooth-scroll-provider'
import Hero from '@/components/sections/hero'
import Problem from '@/components/sections/problem'
import Solution from '@/components/sections/solution'
import Pricing from '@/components/sections/pricing'

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
