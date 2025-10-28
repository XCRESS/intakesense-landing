'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useFormContext } from "@/context/FormContext";



export default function Hero() {


  const { openForm } = useFormContext();


  return (
    <section
      className="relative min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] pt-[40px] sm:pt-[44px] lg:pt-[50px] pb-8 sm:pb-12 lg:pb-16 flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white px-4 sm:px-6"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.03)_0%,_transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10 w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/60">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-emerald-700 tracking-wider">
                ₹0 UPFRONT • GUARANTEED RESULTS
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight">
                <span className="block">Hire the</span>
                <span className="block text-gradient-premium">Perfect Candidate</span>
                <span className="block">in <span className="text-primary-600">12 Days</span></span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
                  or it&apos;s completely free
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                India&apos;s only recruitment platform with a <span className="text-gray-900 font-bold">90-day performance guarantee.</span>
              </p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0">
              {[
                { title: 'Zero Risk', desc: 'Pay after 90 days', color: 'emerald' },
                { title: 'Fast', desc: '12-day delivery', color: 'blue' },
                { title: 'Proven', desc: '89% retention', color: 'purple' }
              ].map((item, index) => (
                <div key={index} className={`p-3 rounded-xl bg-gradient-to-br from-${item.color}-50 to-${item.color}-100/50 border border-${item.color}-200/50`}>
                  <div className={`text-sm font-bold text-${item.color}-900`}>{item.title}</div>
                  <div className={`text-xs text-${item.color}-700`}>{item.desc}</div>
                </div>
              ))}
            </div>


            {/* CTA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0">
                <button onClick={openForm} className="group relative overflow-hidden flex-1 min-h-[56px] px-8 py-4 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary-900/30 hover:shadow-2xl hover:shadow-primary-900/50 active:scale-[0.98] transition-all duration-250 hover:-translate-y-[1px] border border-primary-500/20 hover:border-primary-400/40">
                  <span className="flex items-center justify-center gap-3">
                    Start Hiring
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
                <button className="relative min-h-[56px] px-8 py-4 border border-gray-300/60 hover:border-primary-300/80 text-gray-700 hover:text-primary-700 rounded-2xl font-semibold text-lg bg-white/80 hover:bg-gradient-to-br hover:from-white hover:to-primary-50/30 active:scale-[0.98] transition-all duration-250 hover:-translate-y-[0.5px] shadow-sm shadow-gray-200/50 hover:shadow-lg hover:shadow-primary-200/30 backdrop-blur-sm">
                  ROI Calculator
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  No contracts
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  2-min setup
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  300+ companies
                </span>
              </div>
            </div>


            {/* Stats */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <div className="text-2xl font-black text-green-600">1,200+</div>
                  <div className="text-sm text-gray-600">Hires</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-primary-600">12</div>
                  <div className="text-sm text-gray-600">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-purple-600">₹24Cr</div>
                  <div className="text-sm text-gray-600">Saved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Simple SVG */}
          <div className="relative">
            <div className="sticky top-[100px]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-100/20 to-accent-100/20 rounded-3xl transform rotate-6 scale-110" />
                <div className="relative p-6">
                  <Image
                    src="/illustrations/undraw_artificial-intelligence_43qa.svg"
                    alt="AI-Powered Recruitment"
                    width={280}
                    height={220}
                    className="max-w-[200px] mx-auto"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full p-1 bg-white/20">
            <div className="w-1 h-2 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}