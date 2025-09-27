'use client'

import { ReactNode, useEffect, useRef, createContext, useContext } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProviderProps {
  children: ReactNode
}

interface SmoothScrollContextValue {
  lenis: Lenis | null
  scrollTo: (target: string | number, options?: Record<string, unknown>) => void
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  scrollTo: () => {}
})

export function useSmoothScroll() {
  return useContext(SmoothScrollContext)
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with optimized settings for Framer Motion compatibility
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      // Enhanced settings for better Framer Motion compatibility
      syncTouch: true,
    })

    lenisRef.current = lenis

    // Enhanced animation loop with better performance
    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Add window event for better compatibility
    const handleResize = () => {
      lenis.resize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
      lenis.destroy()
    }
  }, [])

  const scrollTo = (target: string | number, options?: Record<string, unknown>) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: 1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options
      })
    }
  }

  const contextValue: SmoothScrollContextValue = {
    lenis: lenisRef.current,
    scrollTo
  }

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
