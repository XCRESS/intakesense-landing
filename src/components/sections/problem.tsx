'use client'

import { TrendingDown, Users, Clock, AlertCircle } from 'lucide-react'
import Image from 'next/image'

const problems = [
  {
    icon: Users,
    stat: '78%',
    unit: '%',
    label: 'High Attrition Rate',
    description: 'Indian companies face higher employee turnover than global average',
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100',
    impact: 'Loss of ₹5L+ per employee',
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
    stat: '2.5',
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
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 xl:py-32 bg-background px-4 sm:px-6"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="problem-bg-1 absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-red-100/20 to-orange-100/20 rounded-full" />
        <div className="problem-bg-2 absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full" />

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

      <div className="container mx-auto">
        {/* Premium Header */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 mb-4 sm:mb-6">
            <AlertCircle className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">CURRENT STATE OF HIRING IN INDIA</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-[1.1]">
            The <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Hiring Problem</span><br />
            <span className="text-gray-700">Facing Indian Companies</span>
          </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Traditional recruitment is broken. High costs, long delays, and poor retention are holding businesses back.
            </p>
          </div>

          {/* Problem Illustration */}
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/illustrations/undraw_time-management_4ss6.svg"
              alt="Time Management Crisis"
              width={400}
              height={300}
              style={{ width: "auto", height: "auto" }}
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-md"
            />
          </div>
        </div>

        {/* Data Visualization Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative p-4 sm:p-6 lg:p-8 bg-white rounded-2xl sm:rounded-3xl border border-gray-200">
                {/* Dynamic gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.bgColor} opacity-0`} />

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-60">
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-10 rounded-bl-[100px]`} />
                </div>

                {/* Icon with dynamic background */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${problem.color} text-white`}>
                    <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                </div>

                {/* Animated Statistics */}
                <div className="relative mb-3 sm:mb-4 space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900">
                      {problem.stat}
                    </span>
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-600">{problem.unit}</span>
                  </div>

                  {/* Progress bar visualization */}
                  <div className="h-1.5 bg-gray-200 rounded-full">
                    <div
                      className={`h-full bg-gradient-to-r ${problem.color} rounded-full`}
                      style={{ width: `${problem.stat.includes('%') ? problem.stat.replace('%', '') : '75'}%` }}
                    />
                  </div>
                </div>

                {/* Label and Description */}
                <div className="relative space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 group-hover:text-gray-900">
                    {problem.label}
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Impact indicator */}
                  <div className="pt-2 sm:pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                        {problem.impact}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sophisticated hover effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-5 rounded-3xl`} />
                  <div className="absolute inset-[-1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-3xl opacity-30" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story Continuation & CTA */}
        <div className="max-w-4xl mx-auto text-center mt-24 space-y-12">
          {/* Impact Statement */}
          <div className="space-y-6">
            <h3 className="text-h2 md:text-h1 font-bold text-gray-800">
              The Cost of <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Inaction</span>
            </h3>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              While you struggle with traditional hiring, competitors using AI-powered recruitment are scaling faster and hiring better talent.
            </p>
          </div>

          {/* Key Impact Metrics */}
          <div className="grid md:grid-cols-3 gap-8 py-12">
            {[
              { value: '₹15L+', label: 'Annual loss per unfilled position', color: 'text-red-600' },
              { value: '40%', label: 'Productivity drop during vacancies', color: 'text-orange-600' },
              { value: '85%', label: 'Companies miss growth targets', color: 'text-purple-600' }
            ].map((metric, index) => (
              <div key={index} className="text-center space-y-2">
                <div className={`text-3xl font-black ${metric.color}`}>{metric.value}</div>
                <div className="text-body-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
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
        </div>
      </div>
    </section>
  )
}