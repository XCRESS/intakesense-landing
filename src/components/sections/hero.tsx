'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 2,
        y: (clientY / innerHeight - 0.5) * 2
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    const ctx = gsap.context(() => {
      // Advanced text reveal animation
      const title = titleRef.current
      const tagline = taglineRef.current
      
      if (title) {
        // Create character-based animation
        const text = title.textContent || ''
        title.innerHTML = text.split('').map((char) => 
          `<span style="display: inline-block; transform: translateY(100%) rotateX(-90deg); opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('')
        
        gsap.to(title.children, {
          y: 0,
          rotationX: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: {
            amount: 1.2,
            from: 'start'
          },
          delay: 0.3
        })
      }

      if (tagline) {
        gsap.fromTo(tagline, 
          {
            y: 50,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 1.5
          }
        )
      }

      // Sophisticated parallax system
      const layers = document.querySelectorAll('[data-speed]')
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute('data-speed') || '1')
        gsap.to(layer, {
          yPercent: -100 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      })

      // Premium floating animations
      gsap.set('.floating-element', { transformOrigin: 'center center' })
      
      document.querySelectorAll('.floating-element').forEach((el, index) => {
        gsap.to(el, {
          y: -30,
          x: Math.sin(index) * 20,
          rotation: Math.sin(index) * 5,
          duration: 4 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3
        })
      })

      // Stats counter animation
      document.querySelectorAll('.stat-counter').forEach((counter) => {
        gsap.from(counter, {
          textContent: 0,
          duration: 2.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          delay: 2
        })
      })
    }, heroRef)

    return () => {
      ctx.revert()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.section
      ref={heroRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-primary-50/30 to-background"
    >
      {/* Sophisticated Background System */}
      <div className="absolute inset-0 -z-20">
        {/* Primary gradient mesh - Always visible */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--primary-200)_0%,_transparent_50%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--accent-200)_0%,_transparent_50%)] opacity-40" />
        
        {/* Animated geometric patterns - Always visible */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Parallax layers for scroll effect - separate from main background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--primary-100)_0%,_transparent_70%)] opacity-20" data-speed="0.1" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--accent-100)_0%,_transparent_60%)] opacity-15" data-speed="0.2" />
        
        {/* Premium floating elements */}
        <div className="floating-element absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-primary-200/20 to-accent-200/20 blur-2xl" />
        <div className="floating-element absolute bottom-32 right-32 w-80 h-80 rounded-full bg-gradient-to-r from-accent-200/15 to-primary-200/15 blur-3xl" />
        <div className="floating-element absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-success/10 to-primary-100/10 blur-2xl" />
        
        {/* Interactive cursor follow */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary-100/20 to-accent-100/20 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50
          }}
          transition={{ type: 'spring', stiffness: 150, damping: 15 }}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-20">
          {/* Left Content - Primary */}
          <div className="lg:col-span-7 space-y-8">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary-200/30 bg-gradient-to-r from-primary-50/50 to-accent-50/30 backdrop-blur-xl shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary-700 tracking-wide">
                #1 AI-POWERED RECRUITMENT PLATFORM IN INDIA
              </span>
            </motion.div>

            {/* Hero Title - Premium Typography */}
            <div className="space-y-4">
              <h1
                ref={titleRef}
                className="text-display-lg md:text-display-xl leading-none font-black tracking-tighter"
                style={{ perspective: '1000px' }}
              >
                <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Intakesense
                </span>
              </h1>
              
              <p
                ref={taglineRef}
                className="text-h3 md:text-h2 text-gray-600 font-medium leading-tight max-w-2xl"
              >
                Transform your hiring with{' '}
                <span className="text-primary-600 font-semibold">guaranteed placements</span>{' '}
                and <span className="text-accent-600 font-semibold">AI-powered matching</span>
              </p>
            </div>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-lead text-gray-500 max-w-xl leading-relaxed"
            >
              India&apos;s first recruitment platform that guarantees results.
              <span className="text-primary-600 font-medium">No filled position, no payment.</span>
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <button className="btn-premium group relative px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </span>
              </button>

              <button className="magnetic-hover group px-10 py-5 border-2 border-primary-600 text-primary-700 rounded-2xl font-bold text-xl hover:bg-primary-50 transition-all duration-300 flex items-center gap-3">
                <span>Contact Sales</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="text-body-sm text-gray-400 font-medium tracking-wide">
                TRUSTED BY 500+ INDIAN COMPANIES
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-body-sm text-gray-500">98% Success Rate</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Premium Stats Dashboard */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, duration: 1 }}
              className="space-y-6"
            >
              {/* Main Stats Card */}
              <div className="card-premium card-tilt relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-premium-lg hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/30 rounded-3xl" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-h5 font-semibold text-gray-800">Live Performance</h3>
                      <p className="text-body-sm text-gray-500">Real-time hiring metrics</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="stat-counter text-h2 font-bold text-primary-600" data-target="847">
                        0
                      </div>
                      <p className="text-body-sm text-gray-500">Positions Filled</p>
                    </div>
                    <div className="space-y-2">
                      <div className="stat-counter text-h2 font-bold text-accent-600" data-target="12">
                        0
                      </div>
                      <p className="text-body-sm text-gray-500">Days Avg. Hire</p>
                    </div>
                  </div>
                  
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '94%' }}
                      transition={{ delay: 3, duration: 2, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="text-body-sm text-gray-600 text-center">94% Success Rate This Month</p>
                </div>
              </div>

              {/* Mini Feature Cards */}
              <div className="grid grid-cols-1 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8, duration: 0.6 }}
                  className="magnetic-hover card-tilt p-6 bg-white/60 backdrop-blur-lg rounded-2xl border border-gray-200/30 hover:shadow-lg transition-all duration-300 shadow-premium"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-success to-emerald-600 text-white">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-h6 font-semibold text-gray-800">AI-Powered Matching</p>
                      <p className="text-body-sm text-gray-500">Find perfect candidates 5x faster</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3, duration: 0.6 }}
                  className="magnetic-hover card-tilt p-6 bg-white/60 backdrop-blur-lg rounded-2xl border border-gray-200/30 hover:shadow-lg transition-all duration-300 shadow-premium"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-h6 font-semibold text-gray-800">Guaranteed Results</p>
                      <p className="text-body-sm text-gray-500">100% refund if position stays empty</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-body-sm text-gray-400 font-medium tracking-wide">SCROLL TO EXPLORE</span>
          <div className="w-8 h-12 border-2 border-primary-300 rounded-full p-1 bg-white/10 backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-3 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
