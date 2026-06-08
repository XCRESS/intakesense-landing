"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";

export default function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="founder" ref={ref} className="section-padding bg-white border-t border-[#e4e4e4]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Photo */}
          <motion.div
            className="relative"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="relative aspect-[4/5] max-w-sm rounded-2xl overflow-hidden bg-[#f0f7fb]">
              <Image
                src="/archana_pic.jpg"
                alt="Archana Sapra — Founder & CEO, Intakesense"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-2 md:right-4 bg-white border border-[#e4e4e4] rounded-xl px-5 py-4 shadow-sm">
              <p
                style={{
                  fontFamily:
                    "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                  fontStyle: "italic",
                  fontSize: "1.75rem",
                  color: "#178fbf",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                8+ yrs
              </p>
              <p
                className="text-[0.75rem] text-[#909090] mt-1"
                style={{
                  fontFamily:
                    "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                }}
              >
                in talent acquisition
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              className="text-eyebrow mb-6"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              The founder
            </motion.p>

            <motion.h2
              className="text-heading mb-2"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              Archana Sapra
            </motion.h2>

            <motion.div
              className="flex items-center gap-4 mb-6"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <p
                className="text-[0.9375rem] text-[#178fbf]"
                style={{
                  fontFamily:
                    "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  fontWeight: 500,
                }}
              >
                Founder & CEO · Gurugram, Haryana
              </p>
              <a
                href="https://www.linkedin.com/in/archana-sapra-28444221b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Archana Sapra on LinkedIn"
                className="text-[#909090] hover:text-[#178fbf] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <p className="text-body">
                Archana built her career from the ground up in HR and talent acquisition,
                earning a degree in Human Resources from Punjab Technical University before
                spending nearly a decade on the inside — learning exactly where traditional
                recruitment fails both businesses and people.
              </p>
              <p className="text-body">
                What she kept seeing: agencies that sent CVs in bulk, billed upfront, and
                disappeared the moment a hire didn&apos;t stick. Companies losing months and
                lakhs, starting the whole cycle again. She founded Intakesense to fix that —
                with a process that goes beyond skillsets into culture, background, and
                aptitude. And a model where payment follows performance, not promises.
              </p>
              <p className="text-body">
                Based out of Gurugram, she leads a team that has placed over 1,200 professionals
                across India — every placement carrying the same guarantee she&apos;d demand
                for herself.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 pt-8 border-t border-[#e4e4e4]"
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <p
                style={{
                  fontFamily:
                    "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                  fontSize: "1.0625rem",
                  fontStyle: "italic",
                  color: "#0a0a0a",
                  lineHeight: 1.6,
                }}
                className="max-w-md"
              >
                &ldquo;We don&apos;t just match skills to job descriptions. We find people who
                will grow with your organisation — because that&apos;s the only placement worth
                making.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-[1.5px] bg-[#178fbf]" />
                <p
                  className="text-[0.875rem] text-[#525252]"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  Archana Sapra, Founder & CEO
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
