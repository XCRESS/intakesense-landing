"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useFormContext } from "@/context/FormContext";
import { fadeUp } from "@/lib/animations";

const pillars = [
  {
    title: "No upfront fees",
    body: "Pay only after your hire completes 90 days. Zero financial risk to you.",
  },
  {
    title: "90-day guarantee",
    body: "If your hire leaves within 90 days, you don't pay a penny more. Zero risk.",
  },
  {
    title: "Free replacement",
    body: "If your hire leaves within 2 years, we fill the role again at no cost.",
  },
];


export default function Manifesto() {
  const { openForm } = useFormContext();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white section-padding">
      <div className="container-editorial">
        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            <motion.p
              className="text-eyebrow mb-6"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              The Intakesense Difference
            </motion.p>

            <motion.h2
              className="text-heading"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              We only succeed
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "#178fbf",
                }}
              >
                when you do.
              </em>
            </motion.h2>

            <motion.p
              className="text-body mt-6 max-w-lg"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              Most Indian recruitment agencies invoice the moment you sign — whether
              the hire works out or not. We don&apos;t. Our performance model means
              we&apos;re compensated only after your hire completes 90 days, aligning
              every incentive to your outcome.
            </motion.p>

            <motion.button
              onClick={openForm}
              className="btn-ghost mt-8"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              See how it works <span aria-hidden="true">→</span>
            </motion.button>
          </div>

          {/* Right: Color block with stat */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#178fbf" }}
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="p-10 md:p-14 flex flex-col justify-between min-h-[320px]">
              <p
                className="text-[11px] font-[500] tracking-[0.1em] uppercase text-white/60"
                style={{
                  fontFamily:
                    "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                }}
              >
                Two-year retention rate
              </p>
              <div>
                <p
                  className="leading-none mb-3"
                  style={{
                    fontFamily:
                      "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(4.5rem, 10vw, 7rem)",
                    color: "#f7a261",
                    letterSpacing: "-0.04em",
                  }}
                >
                  89%
                </p>
                <p
                  className="text-white/80 text-[1rem] leading-snug max-w-xs"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  of Intakesense placements are still with the same employer
                  after two years. India&apos;s industry average is 52%.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mt-16 md:mt-20 pt-12 border-t border-[#e4e4e4]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <p
                  className="text-[1rem] font-[500] text-[#0a0a0a] mb-2"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  {pillar.title}
                </p>
                <p className="text-body text-[0.9375rem]">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
