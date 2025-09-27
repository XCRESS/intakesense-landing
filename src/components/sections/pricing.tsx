'use client'

import { Check, Sparkles, Zap, Crown, Shield } from 'lucide-react'
import Image from 'next/image'

const pricingPlans = [
  {
    name: 'Trial',
    price: '₹0',
    period: 'for first hire',
    description: 'Test our guarantee with zero risk',
    icon: Sparkles,
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    outcomes: [
      'Fill 1 position completely free',
      'Experience our 12-day process',
      'Meet your dedicated recruiter',
      '90-day retention guarantee'
    ],
    limitations: [
      'One active position only',
      'Standard candidate pool',
      'Email + chat support'
    ],
    cta: 'Start Free Trial',
    popular: false,
    badge: '100% FREE',
    savings: 'Save ₹1-3L vs traditional agencies'
  },
  {
    name: 'Growth',
    price: '₹80K',
    period: 'per successful hire',
    description: 'Perfect for growing SMEs and mid-sized companies',
    icon: Zap,
    color: 'from-primary-500 to-primary-600',
    bgColor: 'from-primary-50 to-blue-50',
    outcomes: [
      'Fill unlimited positions',
      'Access premium talent pool',
      'Dedicated account manager',
      '2-year replacement guarantee',
      'Salary negotiation included'
    ],
    businessImpact: {
      roi: '150% average ROI in Year 1',
      cost: '60% less than traditional agencies',
      speed: '5x faster than internal hiring'
    },
    cta: 'Start Hiring Now',
    popular: true,
    badge: 'BEST VALUE',
    savings: '₹0 if we don\'t deliver'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Complete talent acquisition partnership',
    icon: Crown,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    outcomes: [
      'Everything in Growth plan',
      'C-level and leadership search',
      'Custom talent pipelines',
      'Dedicated recruitment team',
      'Advanced analytics & reporting'
    ],
    businessImpact: {
      roi: 'Guaranteed positive ROI',
      cost: 'Predictable monthly investment',
      speed: 'Same-week candidate delivery'
    },
    cta: 'Book Strategy Call',
    popular: false,
    badge: 'WHITE GLOVE',
    savings: 'Volume discounts available'
  }
]

export default function Pricing() {
  return (
    <section
      className="relative py-24 lg:py-32 bg-white"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      </div>

      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-700 mb-6">
              <Crown className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">INDIA&apos;S MOST AFFORDABLE RECRUITMENT SOLUTION</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] text-gray-900">
              Stop Wasting Money on
              <span className="block text-red-600">Failed Hires</span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Traditional agencies charge ₹1-3L upfront, then disappear.
              <span className="block mt-2 font-semibold text-gray-900">We only get paid when your hire completes 90 days.</span>
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-red-800 mb-2">The Hidden Cost of Empty Desks:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-red-700">
                <div>• ₹15L+ revenue loss per unfilled position</div>
                <div>• 40% productivity drop in affected teams</div>
                <div>• 6-8 months average hiring time</div>
                <div>• 64% of hires fail within 18 months</div>
              </div>
            </div>

            {/* Risk Reversal */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-blue-800">Zero Risk Guarantee</p>
                  <p className="text-sm text-blue-600">If we don&apos;t deliver, you don&apos;t pay. Period.</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Which plan matches your hiring volume?
                </p>
                <p className="text-sm text-gray-500">
                  All plans include our 90-day retention guarantee
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Illustration */}
          <div className="flex justify-center">
            <Image
              src="/illustrations/undraw_growth-analytics_bhy7.svg"
              alt="Growth Analytics"
              width={400}
              height={300}
              style={{ width: "auto", height: "auto" }}
              className="max-w-md"
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative ${
                plan.popular ? 'lg:scale-105 lg:-mt-4' : ''
              }`}
            >
              {/* Badge */}
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
              } h-full flex flex-col`}>

                {/* Sophisticated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgColor} opacity-0`} />

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-bl-full`} />
                </div>

                {/* Icon with premium styling */}
                <div className="relative mb-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} text-white shadow-lg`}>
                    <plan.icon className="w-8 h-8 text-white relative z-10" strokeWidth={2} />
                  </div>
                </div>

                {/* Plan details */}
                <div className="relative space-y-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Pricing display */}
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-black text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-lg text-gray-600 font-medium">
                        {plan.period}
                      </span>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-green-700">
                        {plan.savings}
                      </p>
                    </div>

                    {plan.businessImpact && (
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">ROI:</span>
                          <span className="font-semibold text-primary-600">{plan.businessImpact.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Cost vs competitors:</span>
                          <span className="font-semibold text-green-600">{plan.businessImpact.cost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Speed:</span>
                          <span className="font-semibold text-blue-600">{plan.businessImpact.speed}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Business Outcomes */}
                <div className="space-y-6 mb-10 flex-grow">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">What You Get:</h4>
                    <ul className="space-y-3">
                      {plan.outcomes.map((outcome, outcomeIndex) => (
                        <li
                          key={outcomeIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations && (
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3 text-sm">Includes:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-500">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <button
                  className={`btn relative w-full py-4 rounded-2xl font-bold text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                      : plan.name === 'Trial'
                      ? 'bg-green-500 text-white shadow-md'
                      : 'bg-gray-800 text-white shadow-md'
                  }`}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-700 opacity-0" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-24 space-y-16">
          {/* Guarantee Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 rounded-full">
                  <Check className="w-5 h-5 text-white" />
                  <span className="font-bold text-white">PERFORMANCE GUARANTEE</span>
                </div>

                <h3 className="text-4xl font-black">
                  We&apos;re So Confident, We&apos;ll Work For Free
                </h3>

                <div className="max-w-2xl mx-auto space-y-6">
                  <p className="text-xl text-gray-200 leading-relaxed">
                    If we don&apos;t fill your position within 12 days, or if your hire leaves within 90 days,
                    <span className="text-yellow-400 font-semibold"> we refund every rupee.</span>
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-400">What We Guarantee:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>✓ Position filled within 12 days</li>
                        <li>✓ Hire stays minimum 90 days</li>
                        <li>✓ Free replacement if they leave</li>
                        <li>✓ Full refund if we fail</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-yellow-400">Your Investment:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>✓ ₹0 upfront costs</li>
                        <li>✓ No retainer fees</li>
                        <li>✓ No hidden charges</li>
                        <li>✓ Pay only for results</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Still Not Sure? Let&apos;s Talk.
              </h3>
              <p className="text-lg text-gray-600">
                Book a 15-minute call to discuss your specific hiring challenges.
                <span className="block mt-2 font-semibold">No sales pitch, just honest advice.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg shadow-lg">
                Book Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg">
                Calculate Your Savings
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>15-minute consultation • Zero commitment • Actionable insights guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}