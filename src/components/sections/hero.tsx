'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {

    const ctx = gsap.context(() => {
      // Advanced text reveal animation
      const title = titleRef.current
      const tagline = taglineRef.current
      
      if (title) {
        // Subtle character reveal animation
        const text = title.textContent || ''
        title.innerHTML = text.split('').map((char) =>
          `<span style="display: inline-block; transform: translateY(20px); opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('')

        gsap.to(title.children, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
          stagger: {
            amount: 0.6,
            from: 'start'
          },
          delay: 0.2
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



      // Stats counter animation
      document.querySelectorAll('.stat-counter').forEach((counter) => {
        gsap.from(counter, {
          textContent: 0,
          duration: 1.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          delay: 1.2
        })
      })
    }, heroRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.03)_0%,_transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className="container px-6 mx-auto relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center py-24">
            {/* Left Content - Primary */}
            <div className="space-y-12">
            {/* Value Proposition Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-50 border border-green-200 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-bold text-green-700 tracking-wide">
                ₹0 UPFRONT • PAY ONLY FOR RESULTS
              </span>
            </motion.div>

            {/* Compelling Headline */}
            <div className="space-y-6">
              <h1
                ref={titleRef}
                className="text-5xl md:text-7xl leading-none font-black tracking-tight text-gray-900"
                style={{ perspective: '1000px' }}
              >
                Fill Any Position in 
                <span className="block text-primary-600">12 Days</span>
                <span className="block text-2xl md:text-3xl font-medium text-gray-600 mt-2">or we work for free</span>
              </h1>

              <p
                ref={taglineRef}
                className="text-2xl md:text-3xl text-gray-700 font-normal leading-relaxed max-w-4xl"
              >
                Stop losing <span className="font-semibold text-red-600">₹50L+ per unfilled position.</span>
                <span className="block mt-2">Start hiring with India&apos;s only <span className="font-semibold text-primary-600">performance guarantee.</span></span>
              </p>
            </div>

            {/* Proof Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap gap-6 text-lg font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-700">1,247 positions filled this month</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-700">89% retention after 2 years</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-gray-700">Zero upfront costs</span>
                </div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed font-normal max-w-3xl">
                While competitors charge ₹2-5L upfront and disappear, we only get paid when your new hire
                completes 90 days. <span className="font-semibold text-gray-900">That&apos;s how confident we are.</span>
              </p>
            </motion.div>

            {/* Strategic CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  <span className="flex items-center gap-3">
                    <span>Fill My First Position</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>

                <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  <span>Calculate My Savings</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p className="font-medium">✓ No contracts • ✓ Cancel anytime • ✓ 90-day guarantee</p>
                <p>Join 500+ growing companies. Setup takes 2 minutes.</p>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-4">Trusted by fast-growing companies:</p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-black text-green-600">2,847</div>
                  <div className="text-sm text-gray-600">Successful placements</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary-600">12</div>
                  <div className="text-sm text-gray-600">Days average fill time</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-purple-600">₹2.4Cr</div>
                  <div className="text-sm text-gray-600">Client savings last month</div>
                </div>
              </div>
            </motion.div>
          </div>

            {/* Right Side - Clean Illustration */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-center"
              >
                <Image
                  src="/illustrations/undraw_artificial-intelligence_43qa.svg"
                  alt="AI-Powered Recruitment"
                  width={500}
                  height={400}
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </motion.div>
            </div>
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
    </section>
  )
}
