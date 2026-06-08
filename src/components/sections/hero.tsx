"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useFormContext } from "@/context/FormContext";
import { fadeUp } from "@/lib/animations";

const stats = [
  { value: "1,200+", label: "Professionals placed" },
  { value: "12 days", label: "Average time to fill" },
  { value: "89%", label: "Still employed after 2 years" },
  { value: "₹24 Cr", label: "Saved in rehiring costs" },
];

export default function Hero() {
  const { openForm } = useFormContext();

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-[68px]">
      {/* Ambient light — behind the right card stack */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 80% 45%, rgba(23,143,191,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container-editorial relative z-10 py-20 md:py-28">
        {/* 58 / 42 split — gives left column ~650px at 1280px viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-14 lg:gap-8 items-start">

          {/* ── Left: Copy ─────────────────────────────────────── */}
          <div>
            <motion.p
              className="text-eyebrow mb-7"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="show"
            >
              Performance-based recruitment · India
            </motion.p>

            {/* Headline — size scoped so both lines stay on one line each in split layout */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              style={{
                fontFamily:
                  "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                fontWeight: 400,
              }}
            >
              The hire that works.
              <br />
              <em style={{ fontStyle: "italic", color: "#178fbf" }}>
                Or you don&apos;t pay.
              </em>
            </motion.h1>

            <motion.p
              className="text-subhead text-[#525252] max-w-lg mt-7 md:mt-8"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
            >
              Culture-matched candidates shortlisted in 48 hours. Placed in 12 days.
              Zero fees until your hire completes 90 days — or we fill the role again, free.
            </motion.p>

            <motion.div
              className="mt-9"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
            >
              <div className="flex flex-wrap items-center gap-4">
                <button onClick={openForm} className="btn-primary text-[15px]">
                  Start hiring <span aria-hidden="true">→</span>
                </button>
                <a href="#process" className="btn-text text-[15px]">
                  See how it works
                </a>
              </div>
              <p
                className="mt-3.5 text-[0.8125rem] text-[#b0b0b0]"
                style={{
                  fontFamily:
                    "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                }}
              >
                First placement free &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; No setup fees
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 pt-8 border-t border-[#e4e4e4]"
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="show"
            >
              <div className="grid grid-cols-2 gap-y-7 gap-x-8">
                {stats.map((stat) => (
                  <div key={stat.value}>
                    <p
                      className="leading-none tracking-tight"
                      style={{
                        fontFamily:
                          "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                        fontStyle: "italic",
                        fontSize: "1.875rem",
                        color: "#0a0a0a",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[0.8125rem] text-[#909090] mt-1.5"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Proof card stack ─────────────────────────── */}
          <motion.div
            className="hidden lg:flex flex-col gap-3 lg:pt-1"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
          >
            {/* Card 1: Live placement */}
            <div className="bg-white border border-[#e4e4e4] rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between mb-5">
                <p
                  className="text-[0.6875rem] tracking-[0.09em] uppercase font-[500] text-[#909090]"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  Recent placement
                </p>
                <span
                  className="flex items-center gap-1.5 text-[0.75rem] font-[500] text-[#16a34a]"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                  Guarantee active
                </span>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-[0.8125rem] font-[500]"
                  style={{
                    background: "#e8f4f8",
                    color: "#178fbf",
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  JS
                </div>
                <div>
                  <p
                    className="text-[0.9375rem] font-[500] text-[#0a0a0a] leading-tight"
                    style={{
                      fontFamily:
                        "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    }}
                  >
                    Jayesh Sharma
                  </p>
                  <p
                    className="text-[0.8125rem] text-[#909090] mt-0.5"
                    style={{
                      fontFamily:
                        "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    }}
                  >
                    Senior Finance Manager · Mumbai
                  </p>
                </div>
              </div>

              <div className="flex items-end justify-between pt-4 border-t border-[#f0f0f0]">
                <div>
                  <p
                    className="text-[0.75rem] text-[#909090] mb-1"
                    style={{
                      fontFamily:
                        "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    }}
                  >
                    Time to placement
                  </p>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                      fontStyle: "italic",
                      fontSize: "1.75rem",
                      color: "#f7a261",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    9 days
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className="text-[0.75rem] text-[#909090] mb-1"
                    style={{
                      fontFamily:
                        "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    }}
                  >
                    Fee due today
                  </p>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                      fontStyle: "italic",
                      fontSize: "1.75rem",
                      color: "#0a0a0a",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    ₹0
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Client quote — inset offset creates depth */}
            <div className="mx-5 bg-[#f8f8f8] border border-[#e4e4e4] rounded-2xl p-5">
              <p
                className="text-[0.9375rem] text-[#333] leading-relaxed mb-4"
                style={{
                  fontFamily:
                    "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;The placement was done in under 2 weeks. We&apos;ve never
                had that speed or quality from an agency before.&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/ankit_pic.jpg"
                    alt="Ankit Sapra"
                    width={28}
                    height={28}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p
                  className="text-[0.75rem] text-[#909090]"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  Ankit Sapra &nbsp;·&nbsp; Chairman, Cosmos Financial Group
                </p>
              </div>
            </div>

            {/* Card 3: Guarantee — blue, editorial, further inset */}
            <div
              className="mx-10 rounded-2xl p-5 flex items-center justify-between gap-4"
              style={{ background: "#178fbf" }}
            >
              <div>
                <p
                  className="text-white/60 text-[0.6875rem] tracking-[0.07em] uppercase font-[500] mb-1.5"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  Performance guarantee
                </p>
                <p
                  className="text-white text-[0.9375rem] leading-snug"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  Free replacement if your hire leaves within 90 days
                </p>
              </div>
              <p
                className="shrink-0"
                style={{
                  fontFamily:
                    "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                  fontStyle: "italic",
                  fontSize: "3rem",
                  color: "#f7a261",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                90
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
