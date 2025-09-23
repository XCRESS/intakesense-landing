'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X, Sparkles, Zap, Crown } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const pricingPlans = [
  {
    name: 'Free Forever',
    price: 'Free',
    annualPrice: 'Free',
    originalPrice: null,
    originalAnnualPrice: null,
    period: 'forever',
    annualPeriod: 'forever',
    description: 'Perfect for startups and small teams to get started',
    icon: Sparkles,
    color: 'from-gray-400 to-gray-500',
    bgColor: 'from-gray-50 to-gray-100',
    savings: 'No credit card required',
    features: [
      { text: 'Up to 3 active positions', included: true, highlight: false },
      { text: 'Basic AI candidate matching', included: true, highlight: false },
      { text: 'Email support', included: true, highlight: false },
      { text: 'Standard job board posting', included: true, highlight: false },
      { text: 'Basic candidate screening', included: true, highlight: false },
      { text: '30-day placement support', included: true, highlight: false },
      { text: 'Dedicated account manager', included: false, highlight: false },
      { text: 'Advanced AI screening', included: false, highlight: false },
    ],
    cta: 'Get Started Free',
    popular: false,
    badge: 'FREE FOREVER',
  },
  {
    name: 'Professional',
    price: '₹29,999',
    annualPrice: '₹22,499',
    originalPrice: '₹45,000',
    originalAnnualPrice: '₹33,750',
    period: '/month',
    annualPeriod: '/month',
    description: 'Best for growing companies serious about hiring',
    icon: Zap,
    color: 'from-primary-500 to-accent-500',
    bgColor: 'from-primary-100 to-accent-50',
    savings: 'Save ₹15,001/month',
    features: [
      { text: 'Unlimited active positions', included: true, highlight: false },
      { text: 'Advanced AI + human curation', included: true, highlight: true },
      { text: 'Priority support (2-hour SLA)', included: true, highlight: false },
      { text: 'Pan-India + remote talent search', included: true, highlight: false },
      { text: 'Complete screening pipeline', included: true, highlight: false },
      { text: '90-day placement guarantee', included: true, highlight: true },
      { text: 'Dedicated account manager', included: true, highlight: true },
      { text: 'Salary negotiation support', included: true, highlight: false },
    ],
    cta: 'Start Free Trial',
    popular: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    annualPrice: 'Custom',
    originalPrice: null,
    originalAnnualPrice: null,
    period: 'pricing',
    annualPeriod: 'pricing',
    description: 'Complete talent acquisition partnership',
    icon: Crown,
    color: 'from-accent-500 to-orange-500',
    bgColor: 'from-accent-50 to-orange-50',
    savings: 'Tailored to your needs',
    features: [
      { text: 'Everything in Professional', included: true, highlight: false },
      { text: 'Custom AI model training', included: true, highlight: false },
      { text: 'Dedicated success team', included: true, highlight: false },
      { text: 'Executive & leadership search', included: true, highlight: true },
      { text: 'Advanced analytics dashboard', included: true, highlight: false },
      { text: 'Lifetime placement guarantee', included: true, highlight: true },
      { text: 'On-site recruitment support', included: true, highlight: false },
      { text: 'Custom integrations & API', included: true, highlight: false },
    ],
    cta: 'Contact Sales',
    popular: false,
    badge: 'ENTERPRISE',
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate pricing cards
      const cards = gsap.utils.toArray<HTMLElement>('.pricing-card')
      
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0,
            rotateY: -15,
          },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            delay: index * 0.15,
          }
        )

        // Hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
        })
      })

      // Animate toggle switch
      gsap.to('.billing-toggle', {
        scale: 1.1,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-gray-50/40 to-background">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-primary-200/20 to-accent-200/15 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent-200/15 to-primary-200/20 rounded-full filter blur-3xl" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg width="80" height="80" viewBox="0 0 80 80" className="w-full h-full">
            <defs>
              <pattern id="pricing-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-grid)" />
          </svg>
        </div>
      </div>

      <div className="container px-6 mx-auto">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-700 mb-6">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">INDIA&apos;S MOST AFFORDABLE RECRUITMENT SOLUTION</span>
          </div>
          
          <h2 className="text-display-md md:text-display-lg font-black mb-6 leading-none">
            <span className="text-gray-900">Transparent Pricing,</span><br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Guaranteed Results</span>
          </h2>
          
          <p className="text-lead text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Pay only for successful placements. No hidden costs, no recruitment fees, 
            no lengthy contracts. Choose your plan and start hiring better talent today.
          </p>

          {/* Value Proposition */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>No placement, no payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span>15-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Billing Toggle - Enhanced */}
          <div className="inline-flex items-center gap-1 p-1 bg-white rounded-2xl shadow-lg border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                billingCycle === 'annual'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Annual
              <span className="billing-toggle absolute -top-2 -right-2 text-xs bg-accent-500 text-white px-2 py-1 rounded-full font-bold z-10 whitespace-nowrap">
                25% OFF
              </span>
            </button>
          </div>
        </motion.div>

        {/* Premium Pricing Cards */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto" style={{ perspective: '1000px' }}>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card group relative ${
                plan.popular ? 'lg:scale-105 lg:-mt-4' : ''
              }`}
            >
              {/* Premium Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className={`px-4 py-2 text-xs font-bold tracking-wider rounded-full border-2 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white border-white shadow-lg'
                    : plan.name === 'Free Forever'
                    ? 'bg-green-500 text-white border-green-400 shadow-md'
                    : 'bg-gray-800 text-white border-gray-700 shadow-md'
                }`}>
                  {plan.badge}
                </div>
              </div>

              <div className={`relative p-8 lg:p-10 bg-white rounded-3xl border-2 ${
                plan.popular 
                  ? 'border-primary-200 shadow-2xl shadow-primary-100/50' 
                  : 'border-gray-200 group-hover:border-primary-200 group-hover:shadow-xl'
              } overflow-hidden h-full flex flex-col transition-all duration-500`}>
                
                {/* Sophisticated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-bl-full group-hover:scale-110 transition-transform duration-500`} />
                </div>

                {/* Icon with premium styling */}
                <div className="relative mb-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <plan.icon className="w-8 h-8 text-white relative z-10" strokeWidth={2} />
                  </div>
                </div>

                {/* Plan details */}
                <div className="relative space-y-6 mb-8">
                  <div>
                    <h3 className="text-h3 font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-body text-gray-600">{plan.description}</p>
                  </div>

                  {/* Pricing display with savings */}
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-black text-gray-900">
                        {billingCycle === 'annual' ? plan.annualPrice : plan.price}
                      </span>
                      {(billingCycle === 'annual' ? plan.annualPeriod : plan.period) && (
                        <span className="text-lg text-gray-600 font-medium">
                          {billingCycle === 'annual' ? plan.annualPeriod : plan.period}
                        </span>
                      )}
                    </div>
                    
                    {(billingCycle === 'annual' ? plan.originalAnnualPrice : plan.originalPrice) && (
                      <div className="flex items-center gap-3">
                        <span className="text-body-sm text-gray-500 line-through">
                          {billingCycle === 'annual' ? plan.originalAnnualPrice : plan.originalPrice}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                          {billingCycle === 'annual' ? 'Save ₹11,251/month' : plan.savings}
                        </span>
                      </div>
                    )}
                    
                    {!(billingCycle === 'annual' ? plan.originalAnnualPrice : plan.originalPrice) && (
                      <div className="text-body-sm text-gray-600 font-medium">
                        {plan.savings}
                      </div>
                    )}
                    
                    {billingCycle === 'annual' && plan.price !== 'Free' && plan.price !== 'Custom' && (
                      <div className="text-body-sm text-primary-700 font-bold bg-primary-50 px-3 py-1 rounded-full inline-block">
                        25% OFF Annual Billing
                      </div>
                    )}
                  </div>
                </div>

                {/* Enhanced Features List */}
                <ul className="space-y-4 mb-10 flex-grow relative">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-4">
                      {feature.included ? (
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          feature.highlight ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-green-100'
                        }`}>
                          <Check className={`w-4 h-4 ${feature.highlight ? 'text-white' : 'text-green-600'}`} />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                          <X className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                      <span className={`text-body ${
                        feature.included 
                          ? (feature.highlight ? 'text-gray-900 font-semibold' : 'text-gray-700') 
                          : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Premium CTA */}
                <button className={`relative w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden group/btn ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                    : plan.name === 'Free Forever'
                    ? 'bg-green-500 text-white shadow-md hover:bg-green-600 hover:shadow-lg hover:scale-[1.02]'
                    : 'bg-gray-800 text-white shadow-md hover:bg-gray-900 hover:shadow-lg hover:scale-[1.02]'
                }`}>
                  <span className="relative z-10">{plan.cta}</span>
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 space-y-16"
        >
          {/* Guarantee Section */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 via-accent-50 to-primary-50 rounded-3xl p-12 border border-primary-200/50">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-primary-200">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-h6 font-bold text-gray-800">100% SATISFACTION GUARANTEED</span>
                </div>
                
                <h3 className="text-h2 font-bold text-gray-900 max-w-3xl mx-auto">
                  Our Promise: No Successful Hire, No Payment
                </h3>
                
                <p className="text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We&apos;re so confident in our ability to find the right talent for your team that we guarantee results. 
                  If we don&apos;t fill your position within the agreed timeframe, you don&apos;t pay a single rupee.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 pt-8">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-black text-primary-600">15</div>
                    <div className="text-body-sm text-gray-600">Day free trial</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-black text-accent-600">0%</div>
                    <div className="text-body-sm text-gray-600">Upfront costs</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-black text-green-600">100%</div>
                    <div className="text-body-sm text-gray-600">Success rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-h2 font-bold text-gray-900">
                Need a Custom Solution?
              </h3>
              <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
                For large enterprises or unique hiring requirements, we offer completely customized recruitment solutions 
                tailored to your specific needs and industry.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                Book Strategy Call
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold text-lg hover:border-primary-400 hover:bg-primary-50 transition-all duration-300">
                Request Custom Quote
              </button>
            </div>
            
            <p className="text-body-sm text-gray-500">
              🔒 No spam, no sales pressure. Just honest advice from hiring experts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
