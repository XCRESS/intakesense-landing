'use client'

import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-40 h-10 sm:w-48 sm:h-12 lg:w-64 lg:h-16">
              <Image
                src="/logo.png"
                alt="Intakesense Logo"
                width={1280}
                height={320}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button className="relative overflow-hidden min-h-[52px] px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 rounded-xl sm:rounded-2xl font-semibold text-white text-base sm:text-lg shadow-lg shadow-primary-900/25 hover:shadow-xl hover:shadow-primary-900/40 active:scale-[0.98] transition-all duration-250 hover:-translate-y-[1px] border border-primary-500/20 hover:border-primary-400/30 -webkit-tap-highlight-color-transparent">
              <span className="hidden sm:inline">Start Free Trial</span>
              <span className="sm:hidden">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
