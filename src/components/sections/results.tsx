"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUpFast as fadeUp } from "@/lib/animations";

const stats = [
  { value: "1,200+", label: "Successful placements" },
  { value: "₹24 Cr", label: "Avoided in re-hiring costs" },
  { value: "89%", label: "Hires still employed after 2 years" },
  { value: "12 days", label: "Average time to fill a role" },
  { value: "94%", label: "Role-to-candidate match accuracy" },
  { value: "₹0", label: "Replacement cost when a hire doesn’t last" },
];


export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="results"
      ref={ref}
      className="section-padding"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            className="text-eyebrow mb-5"
            style={{ color: "rgba(255,255,255,0.4)" }}
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            By the numbers
          </motion.p>
          <motion.h2
            className="text-heading text-white max-w-lg"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Numbers don&apos;t
            <br />
            negotiate.
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="p-8 md:p-12"
              style={{ background: "#0a0a0a" }}
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <p
                className="leading-none mb-3"
                style={{
                  fontFamily:
                    "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  color: "#f7a261",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-[0.875rem] leading-snug"
                style={{
                  fontFamily:
                    "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          className="text-[0.75rem] mt-10"
          style={{ color: "rgba(255,255,255,0.25)" }}
          variants={fadeUp}
          custom={8}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          Data based on placements made across India, 2018–2026.
        </motion.p>
      </div>
    </section>
  );
}
