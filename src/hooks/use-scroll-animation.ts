'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

// Main scroll animation hook using Intersection Observer
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options: ScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<T | null>(null)

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    delay = 0
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay)
          } else {
            setIsVisible(true)
          }
          
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce, delay])

  return { elementRef, isVisible }
}

// Staggered animation hook for lists
export function useStaggeredAnimation<T extends HTMLElement = HTMLDivElement>(itemCount: number, options: ScrollAnimationOptions = {}) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false))
  const containerRef = useRef<T | null>(null)

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    delay = 0
  } = options

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animations
          const staggerDelay = 100 // 100ms between each item
          visibleItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newArray = [...prev]
                newArray[index] = true
                return newArray
              })
            }, delay + (index * staggerDelay))
          })
          
          observer.unobserve(container)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(container)

    return () => observer.disconnect()
  }, [itemCount, threshold, rootMargin, delay, visibleItems])

  return { containerRef, visibleItems }
}

// CSS class generator for animations
export const scrollAnimationClasses = {
  fadeUp: (isVisible: boolean) => `
    transition-all duration-700 ease-out transform
    ${isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8'
    }
  `,
  
  fadeIn: (isVisible: boolean) => `
    transition-opacity duration-700 ease-out
    ${isVisible ? 'opacity-100' : 'opacity-0'}
  `,
  
  scaleIn: (isVisible: boolean) => `
    transition-all duration-700 ease-out transform
    ${isVisible 
      ? 'opacity-100 scale-100' 
      : 'opacity-0 scale-95'
    }
  `,
  
  slideLeft: (isVisible: boolean) => `
    transition-all duration-700 ease-out transform
    ${isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 translate-x-8'
    }
  `,
  
  slideRight: (isVisible: boolean) => `
    transition-all duration-700 ease-out transform
    ${isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 -translate-x-8'
    }
  `
}
