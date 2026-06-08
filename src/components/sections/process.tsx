"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUpFast as fadeUp } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Brief",
    body: "We learn your culture, team dynamics, and the shape of the role. Not just the job spec.",
  },
  {
    number: "02",
    title: "Source",
    body: "Our AI surfaces candidates from 5M+ profiles. Our recruiters find the ones not actively looking.",
  },
  {
    number: "03",
    title: "Present",
    body: "A shortlist in 48 hours. Every candidate pre-qualified, culture-assessed, salary-matched.",
  },
  {
    number: "04",
    title: "Guarantee",
    body: "Placement in 12 days. If your hire leaves within 90 days, we fill the role again at no cost.",
  },
];


export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      ref={ref}
      className="section-padding"
      style={{ background: "#f8f8f8" }}
    >
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <motion.p
            className="text-eyebrow mb-5"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            How we work
          </motion.p>
          <motion.h2
            className="text-heading max-w-xl"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            From brief to placement
            <br />
            <em style={{ fontStyle: "italic", color: "#178fbf" }}>in 12 days.</em>
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e4e4e4]">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="bg-[#f8f8f8] p-8 md:p-10 group"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {/* Step number — large, editorial */}
              <p
                className="leading-none mb-8 select-none group-hover:text-[#f7a261] transition-colors duration-300"
                style={{
                  fontFamily:
                    "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(3rem, 5vw, 4rem)",
                  color: "#e4e4e4",
                  letterSpacing: "-0.04em",
                }}
              >
                {step.number}
              </p>

              {/* Title */}
              <p
                className="text-[1.125rem] font-[400] text-[#0a0a0a] mb-3"
                style={{
                  fontFamily:
                    "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </p>

              {/* Body */}
              <p className="text-body text-[0.9375rem] leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-[0.8125rem] text-[#909090] mt-10 text-center"
          variants={fadeUp}
          custom={6}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            fontFamily:
              "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
          }}
        >
          Every placement includes our 90-day performance guarantee and 2-year free
          replacement policy.
        </motion.p>
      </div>
    </section>
  );
}
