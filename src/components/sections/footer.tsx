"use client";

import Image from "next/image";
import Link from "next/link";

const links = {
  Product: [
    { label: "How it works", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#founder" },
    { label: "HRMS Product", href: "https://hr.intakesense.com" },
    { label: "Contact", href: "mailto:hello@intakesense.com" },
    { label: "WhatsApp", href: "https://wa.me/919810277932" },
  ],
  "For Candidates": [
    { label: "Browse roles", href: "mailto:careers@intakesense.com" },
    { label: "Apply now", href: "mailto:careers@intakesense.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#e4e4e4]" style={{ background: "#f8f8f8" }}>
      <div className="container-editorial py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="Intakesense"
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p
              className="text-[0.875rem] text-[#909090] max-w-[220px] leading-relaxed"
              style={{
                fontFamily:
                  "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
              }}
            >
              AI-powered talent acquisition with guaranteed results. Serving companies
              across India.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p
                className="text-eyebrow mb-4"
                style={{
                  fontFamily:
                    "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                }}
              >
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[0.875rem] text-[#525252] hover:text-[#0a0a0a] transition-colors duration-200"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#e4e4e4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-[0.75rem] text-[#909090]"
            style={{
              fontFamily:
                "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
            }}
          >
            © 2026 Intakesense. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.75rem] text-[#909090] hover:text-[#0a0a0a] transition-colors"
                style={{
                  fontFamily:
                    "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
