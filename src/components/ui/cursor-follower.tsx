'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CursorFollowerProps {
  className?: string
}

export function CursorFollower({ className = '' }: CursorFollowerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Only run on desktop
    if (window.innerWidth < 1024) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target || typeof target.matches !== 'function') return
      
      try {
        if (
          target.matches('button, a, [class*="magnetic-hover"], [class*="card-tilt"], [class*="btn-premium"]') ||
          target.closest('button, a, [class*="magnetic-hover"], [class*="card-tilt"], [class*="btn-premium"]')
        ) {
          setIsHovering(true)
        }
      } catch {
        // Silently handle any selector errors
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  // Don't render on server or mobile
  if (!isMounted || typeof window === 'undefined' || window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className={`fixed top-0 left-0 w-2 h-2 bg-primary-500 rounded-full pointer-events-none z-[9999] mix-blend-difference ${className}`}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.15,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 border-2 border-primary-400/30 rounded-full pointer-events-none z-[9998] ${className}`}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.3,
        }}
      />

      {/* Glow effect on hover */}
      <motion.div
        className={`fixed top-0 left-0 w-16 h-16 bg-primary-200/20 rounded-full pointer-events-none z-[9997] blur-xl ${className}`}
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: isHovering ? 1.5 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  )
}
