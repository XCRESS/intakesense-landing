'use client'

import {
  Zap, Shield, Target, Brain,
  CheckCircle, ArrowRight, TrendingUp,
  Clock, Users, DollarSign, Globe
} from 'lucide-react'
import { useScrollAnimation, useStaggeredAnimation, scrollAnimationClasses } from '@/hooks/use-scroll-animation'
import Image from 'next/image'

const solutionFeatures = [
  {
    icon: Brain,
    title: 'AI + Human Intelligence',
    subtitle: 'The Perfect Match',
    description: 'Our proprietary AI scans 50M+ Indian profiles while expert recruiters add the human touch for cultural fit and soft skills assessment.',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'from-primary-50 to-blue-50',
    metrics: [
      { label: 'Time Reduction', value: '75%', desc: 'Faster hiring process' },
      { label: 'Match Accuracy', value: '94%', desc: 'Perfect role-candidate fit' }
    ],
    highlights: ['50M+ candidate database', 'Cultural fit assessment', 'Soft skills evaluation'],
    processSteps: ['AI Screening', 'Human Verification', 'Cultural Assessment']
  },
  {
    icon: Shield,
    title: 'Full Responsibility Guarantee',
    subtitle: 'We Own The Outcome',
    description: 'Unlike agencies that disappear after payment, we monitor every placement for 2 years. If they leave, we replace them free. Your success is our responsibility.',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50',
    metrics: [
      { label: 'Retention Rate', value: '89%', desc: 'Hires stay 2+ years' },
      { label: 'Replacement Cost', value: '₹0', desc: 'Free replacements' }
    ],
    highlights: ['2-year replacement guarantee', 'Zero replacement fees', 'Performance monitoring'],
    processSteps: ['Placement', 'Performance Tracking', 'Free Replacement']
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    subtitle: 'Find Hidden Gems',
    description: 'Access passive candidates from top Indian companies who aren&apos;t actively looking but are open to the right opportunity.',
    color: 'from-accent-500 to-orange-500',
    bgColor: 'from-accent-50 to-orange-50',
    metrics: [
      { label: 'Passive Candidates', value: '70%', desc: 'Not actively looking' },
      { label: 'Top-tier Companies', value: '500+', desc: 'Source companies' }
    ],
    highlights: ['Passive candidate network', 'Top company sourcing', 'Confidential approach'],
    processSteps: ['Target Identification', 'Discreet Outreach', 'Opportunity Presentation']
  },
  {
    icon: Zap,
    title: 'Lightning Speed',
    subtitle: 'Faster Than Ever',
    description: 'Our streamlined process and pre-vetted talent pools mean most positions are filled within 12 days, not months.',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'from-purple-50 to-violet-50',
    metrics: [
      { label: 'Average Time', value: '12', desc: 'Days to placement' },
      { label: 'First Candidates', value: '48hr', desc: 'Initial shortlist ready' }
    ],
    highlights: ['Pre-vetted talent pools', 'Rapid response system', 'Dedicated coordinators'],
    processSteps: ['Instant Search', 'Quick Screening', 'Fast Placement']
  },
]

const solutionBenefits = [
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    value: '60%',
    desc: 'Lower hiring costs vs traditional agencies',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    icon: Clock,
    title: 'Speed Boost',
    value: '5x',
    desc: 'Faster placement than market average',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-50'
  },
  {
    icon: Target,
    title: 'Success Rate',
    value: '98%',
    desc: 'Successful placements that last',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-50'
  },
  {
    icon: Users,
    title: 'Retention',
    value: '89%',
    desc: 'Hires stay 2+ years',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-50'
  },
  {
    icon: Globe,
    title: 'Coverage',
    value: '28',
    desc: 'Indian states covered',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'from-teal-50 to-teal-50'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    value: '3x',
    desc: 'Scale your team faster',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-50'
  }
]

export default function Solution() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 200 })
  const { containerRef: featuresRef, visibleItems: featuresVisible } = useStaggeredAnimation(solutionFeatures.length, { delay: 400 })
  const { containerRef: benefitsRef, visibleItems: benefitsVisible } = useStaggeredAnimation(solutionBenefits.length, { delay: 600 })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background z-20">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary-200/20 to-accent-200/15 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-200/15 to-primary-200/20 rounded-full filter blur-3xl" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100" height="100" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="solution-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#solution-grid)" />
          </svg>
        </div>
      </div>

      <div className="container px-6 mx-auto">
        {/* Premium Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div
            ref={headerRef}
            className={`space-y-6 ${scrollAnimationClasses.fadeUp(headerVisible)}`}
          >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold tracking-wide">THE INTAKESENSE ADVANTAGE</span>
          </div>
          
          <h2 className="solution-title text-display-md md:text-display-lg font-black mb-8 leading-none">
            <span className="text-gray-900">Our
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent"> Solution</span>
            </span><br />
            <span className="text-gray-700">AI-Powered Recruitment</span>
          </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Advanced AI meets human expertise to deliver faster, more accurate hiring with guaranteed results.
            </p>
          </div>

          {/* Solution Illustration */}
          <div className={`flex justify-center ${scrollAnimationClasses.fadeUp(headerVisible)}`}>
            <Image
              src="/illustrations/undraw_solution-mindset_pit7.svg"
              alt="Smart Solutions"
              width={400}
              height={300}
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>

        {/* Premium Feature Showcase */}
        <div ref={featuresRef} className="space-y-20 mb-24">
          {solutionFeatures.map((feature, index) => {
            const isVisible = featuresVisible[index]
            
            return (
              <div 
                key={index}
                className={`feature-card group relative ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                } ${scrollAnimationClasses.fadeUp(isVisible)}`}
              >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Feature Content */}
                <div className="space-y-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-xl`}>
                      <feature.icon className="w-10 h-10" />
                    </div>
                    
                    <div>
                      <div className="text-body-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {feature.subtitle}
                      </div>
                      <h3 className="text-h2 font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-body-lg text-gray-600 leading-relaxed max-w-xl">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-4">
                    <h4 className="text-h6 font-semibold text-gray-800">Key Features:</h4>
                    <div className="grid gap-3">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                          <span className="text-body text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div className="space-y-4">
                    <h4 className="text-h6 font-semibold text-gray-800">How It Works:</h4>
                    <div className="flex items-center gap-4">
                      {feature.processSteps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.color} text-white text-sm font-bold flex items-center justify-center`}>
                            {idx + 1}
                          </div>
                          <span className="text-body-sm text-gray-600">{step}</span>
                          {idx < feature.processSteps.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-gray-400 ml-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Metrics Dashboard */}
                <div className="relative">
                  <div className={`p-8 lg:p-10 bg-white rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500`}>
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Animated corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-30">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-bl-full group-hover:scale-110 transition-transform duration-500`} />
                    </div>

                    <div className="relative space-y-8">
                      <div className="text-center">
                        <h4 className="text-h5 font-bold text-gray-800 mb-2">Performance Metrics</h4>
                        <p className="text-body-sm text-gray-500">Real results from our platform</p>
                      </div>

                      {/* Metrics Display */}
                      <div className="grid grid-cols-2 gap-6">
                        {feature.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center space-y-2">
                            <div className="text-4xl lg:text-5xl font-black text-gray-900">
                              {metric.value}
                            </div>
                            <div className="text-body-sm font-semibold text-gray-700">
                              {metric.label}
                            </div>
                            <div className="text-xs text-gray-500">
                              {metric.desc}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>

        {/* Premium Benefits Grid */}
        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-h2 font-bold text-gray-900">
              Proven Results
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real performance metrics from clients using our platform.
            </p>
          </div>

          {/* Benefits Grid */}
          <div ref={benefitsRef} className="benefits-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionBenefits.map((benefit, index) => {
              const isVisible = benefitsVisible[index]
              
              return (
                <div
                  key={index}
                  className={`benefit-item group relative p-8 bg-white rounded-3xl border-2 border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all duration-500 ${scrollAnimationClasses.scaleIn(isVisible)}`}
                >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative text-center space-y-6">
                  {/* Professional Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${benefit.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-8 h-8" strokeWidth={2} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-4xl lg:text-5xl font-black text-gray-900">
                      {benefit.value}
                    </div>
                    <div className="text-h5 font-bold text-gray-800">
                      {benefit.title}
                    </div>
                    <div className="text-body-sm text-gray-600 leading-relaxed">
                      {benefit.desc}
                    </div>
                  </div>
                </div>
                </div>
              );
            })}
          </div>

          {/* Compelling CTA Section */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="cta-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cta-pattern)" />
                </svg>
              </div>
              
              <div className="relative space-y-8">
                <div className="space-y-4">
                  <h3 className="text-h2 md:text-h1 font-black leading-tight">
                    Start Hiring Smarter Today
                  </h3>
                  <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                    Join 1,200+ companies using AI-powered recruitment. Guaranteed results or it&apos;s free.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="px-8 py-4 bg-white text-primary-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-sm opacity-80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>15-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>No setup fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
