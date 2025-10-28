"use client";

import { Header } from '@/components/ui/header';
import Hero from '@/components/sections/hero';
import Problem from '@/components/sections/problem';
import Solution from '@/components/sections/solution';
import Pricing from '@/components/sections/pricing';
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/seo/json-ld';
import Image from 'next/image';
import { useFormContext } from "@/context/FormContext";
import FormPage from "@/components/sections/FormPage";

export default function Home() {
  const { showForm, closeForm } = useFormContext();

  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />

      <div className="relative min-h-screen">
        {/* 🧩 When form is NOT open, show normal website */}
        {!showForm && (
          <>
            <Header />
            <main>
              <Hero />
              <Problem />
              <Solution />
              <Pricing />

              {/* Footer */}
              <footer className="relative py-16 border-t border-gray-200 bg-white z-20">
                <div className="container px-6 mx-auto">
                  <div className="flex flex-col items-center justify-center gap-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/logo.png"
                        alt="Intakesense"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                      />
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-gradient-premium">
                          Intakesense
                        </span>
                        <span className="text-xs text-gray-500 font-medium tracking-wide -mt-1">
                          AI RECRUITMENT
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-center max-w-md">
                      AI-powered recruitment platform with guaranteed results
                    </p>
                    <p className="text-sm text-gray-500">
                      © 2025 Intakesense. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </main>
          </>
        )}

        {/* 🧩 When form IS open, show only the form */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
            <FormPage onClose={closeForm} />
          </div>
        )}
      </div>
    </>
  );
}
