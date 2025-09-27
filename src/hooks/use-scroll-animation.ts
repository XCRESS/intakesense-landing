'use client'

// No-op hook - animations disabled for smooth scrolling
export function useScrollAnimation() {
  return { 
    ref: null, 
    isInView: true // Always true - no animations
  }
}

