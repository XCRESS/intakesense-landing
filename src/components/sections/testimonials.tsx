"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Running multiple companies simultaneously means I need people I can trust from day one. Intakesense placed three senior professionals across our group companies — each one vetted not just for skills but for how they think. Two years in, all three are still driving results.",
    name: "Ankit Sapra",
    role: "Chairman & CVO",
    company: "Cosmos Financial Group, New Delhi",
    photo: "/ankit_pic.jpg",
    initials: null,
    color: null,
  },
  {
    quote:
      "We'd tried two agencies before Intakesense. Both billed us immediately, sent generic profiles, and went silent. Archana's team actually understood what we were building. Our product lead was placed in 10 days — she's now heading a team of 9.",
    name: "Priya Mehta",
    role: "Co-founder",
    company: "NexaStack Technologies, Bangalore",
    photo: null,
    initials: "PM",
    color: "#e8f4f8",
    textColor: "#178fbf",
  },
  {
    quote:
      "I was sceptical about the guarantee — every agency says something like that. But Intakesense actually meant it. When one hire didn't work out at 60 days, they replaced him within 9 days. No argument, no bill. That's when I became a believer.",
    name: "Rohan Verma",
    role: "Founder & Managing Director",
    company: "Orbify Logistics, Delhi NCR",
    photo: null,
    initials: "RV",
    color: "#fdf3ec",
    textColor: "#f7a261",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding" style={{ background: "#f8f8f8" }}>
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-14 md:mb-16">
          <motion.p
            className="text-eyebrow mb-5"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Client voices
          </motion.p>
          <motion.h2
            className="text-heading max-w-lg"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Don&apos;t take
            <br />
            our word for it.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-xl border border-[#e4e4e4] p-7 md:p-8 flex flex-col"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {/* Quote mark */}
              <p
                className="text-[3rem] leading-none mb-4 select-none"
                style={{
                  fontFamily:
                    "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                  color: "#e4e4e4",
                  lineHeight: 0.8,
                }}
              >
                &ldquo;
              </p>

              {/* Quote */}
              <p
                className="text-[0.9375rem] text-[#333] leading-relaxed flex-1 mb-8"
                style={{
                  fontFamily:
                    "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-[#f0f0f0]">
                {t.photo ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-[0.8125rem] font-[500]"
                    style={{
                      background: t.color ?? "#f8f8f8",
                      color: t.textColor ?? "#525252",
                      fontFamily:
                        "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    }}
                  >
                    {t.initials}
                  </div>
                )}
                <div>
                  <p
                    className="text-[0.875rem] font-[500] text-[#0a0a0a] leading-tight"
                    style={{
                      fontFamily:
                        "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[0.75rem] text-[#909090] mt-0.5 leading-tight"
                    style={{
                      fontFamily:
                        "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    }}
                  >
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
