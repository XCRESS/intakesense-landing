'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingDown, Users, Clock, AlertCircle } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const problems = [
  {
    icon: Users,
    stat: '78%',
    unit: '%',
    label: 'High Attrition Rate',
    description: 'Indian companies face higher employee turnover than global average',
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100',
    impact: 'Loss of ₹12L+ per employee',
  },
  {
    icon: Clock,
    stat: '65',
    unit: ' days',
    label: 'Prolonged Hiring',
    description: 'Average time to fill critical positions in India',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50 to-orange-100',
    impact: 'Productivity drops by 40%',
  },
  {
    icon: TrendingDown,
    stat: '8.5',
    unit: ' Lakhs',
    label: 'Cost Per Hire',
    description: 'Total recruitment expense including hidden costs',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    impact: 'Budget overrun by 200%',
  },
  {
    icon: AlertCircle,
    stat: '64%',
    unit: '%',
    label: 'Failed Placements',
    description: 'Hires that don\'t last beyond first 12 months',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'from-rose-50 to-pink-100',
    impact: 'Repeated hiring cycles',
  },
]

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!statsRef.current) return

    const ctx = gsap.context(() => {
      // Animate stats when they come into view
      const stats = statsRef.current?.querySelectorAll('.stat-number')
      
      stats?.forEach((stat, index) => {
        const finalValue = stat.getAttribute('data-value') || '0'
        const isPercentage = finalValue.includes('%')
        const isCurrency = finalValue.includes('$')
        const numericValue = parseFloat(finalValue.replace(/[^0-9.-]/g, ''))

        ScrollTrigger.create({
          trigger: stat,
          start: 'top 80%',
          onEnter: () => {
            gsap.from(stat, {
              textContent: 0,
              duration: 2,
              delay: index * 0.1,
              ease: 'power2.out',
              snap: { textContent: 1 },
              onUpdate: function() {
                const progress = this.progress()
                const currentValue = Math.floor(numericValue * progress)
                if (isCurrency) {
                  stat.textContent = `$${currentValue.toLocaleString()}`
                } else if (isPercentage) {
                  stat.textContent = `${currentValue}%`
                } else {
                  stat.textContent = currentValue.toString()
                }
              },
              onComplete: () => {
                stat.textContent = finalValue
              }
            })
          },
          once: true,
        })
      })

      // Parallax effect for background elements
      gsap.to('.problem-bg-1', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to('.problem-bg-2', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-gray-50/30 to-background">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="problem-bg-1 absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-red-200/30 to-orange-200/20 rounded-full filter blur-3xl" />
        <div className="problem-bg-2 absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/30 rounded-full filter blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="problem-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#problem-grid)" />
          </svg>
        </div>
      </div>

      <div className="container px-6 mx-auto">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 mb-6">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">CURRENT STATE OF HIRING IN INDIA</span>
          </div>
          
          <h2 className="text-display-md md:text-display-lg font-black mb-6 leading-none">
            The <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Hiring Crisis</span><br />
            <span className="text-gray-700">Crippling Indian Businesses</span>
          </h2>
          
          <p className="text-lead text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Every day of delay costs companies dearly. Traditional hiring methods are failing, 
            leaving critical positions empty and businesses struggling to scale.
          </p>
        </motion.div>

        {/* Premium Data Visualization Grid */}
        <div ref={statsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'backOut' }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative p-8 bg-white rounded-3xl border border-gray-200/60 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-gray-300">
                {/* Dynamic gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-60">
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-10 rounded-bl-[100px] group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
                
                {/* Icon with dynamic background */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${problem.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <problem.icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Animated Statistics */}
                <div className="relative mb-4 space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span 
                      className="stat-number text-4xl lg:text-5xl font-black text-gray-900"
                      data-value={problem.stat.replace(/[^0-9.]/g, '')}
                    >
                      0
                    </span>
                    <span className="text-2xl font-bold text-gray-600">{problem.unit}</span>
                  </div>
                  
                  {/* Progress bar visualization */}
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${problem.color} rounded-full`}
                      initial={{ width: '0%' }}
                      animate={isInView ? { width: `${problem.stat.includes('%') ? problem.stat.replace('%', '') : '75'}%` } : {}}
                      transition={{ duration: 2, delay: index * 0.2 + 1 }}
                    />
                  </div>
                </div>

                {/* Label and Description */}
                <div className="relative space-y-3">
                  <h3 className="text-h6 font-bold text-gray-800 group-hover:text-gray-900">
                    {problem.label}
                  </h3>
                  
                  <p className="text-body-sm text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  {/* Impact indicator */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                        {problem.impact}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sophisticated hover effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-5 rounded-3xl`} />
                  <div className="absolute inset-[-1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-3xl opacity-30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Story Continuation & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-4xl mx-auto text-center mt-24 space-y-12"
        >
          {/* Impact Statement */}
          <div className="space-y-6">
            <h3 className="text-h3 md:text-h2 font-bold text-gray-800">
              The Cost of Inaction is 
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"> Devastating</span>
            </h3>
            
            <p className="text-body-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              While companies struggle with these challenges, their competitors are scaling rapidly. 
              Every day without the right talent is a day of lost opportunities, diminished growth, and competitive disadvantage.
            </p>
          </div>
          
          {/* Key Impact Metrics */}
          <div className="grid md:grid-cols-3 gap-8 py-12">
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-red-600">₹50L+</div>
              <div className="text-body-sm text-gray-600">Annual loss per unfilled position</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-orange-600">40%</div>
              <div className="text-body-sm text-gray-600">Productivity drop during vacancies</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-purple-600">85%</div>
              <div className="text-body-sm text-gray-600">Companies miss growth targets</div>
            </div>
          </div>
          
          {/* Transition Element */}
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <div className="px-6 py-3 bg-white border border-gray-300 rounded-full">
                <p className="text-body-sm font-semibold text-gray-700 tracking-wide">
                  BUT THERE&apos;S A BETTER WAY
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
