"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";

const features = [
  {
    label: "Attendance & Leave",
    body: "Real-time tracking, automated leave approvals, and holiday calendars — all in one place.",
  },
  {
    label: "Payroll & Compliance",
    body: "Automated salary processing with digital salary slips, full compliance, and zero spreadsheets.",
  },
  {
    label: "Expense Tracker",
    body: "Submit, approve, and reimburse employee expenses in one flow. Every rupee accounted for.",
  },
  {
    label: "Employee Records",
    body: "Centralised employee database with documents, history, and org chart — always up to date.",
  },
];

export default function Product() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding border-t border-[#e4e4e4] bg-white">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              className="text-eyebrow mb-5"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              Also from Intakesense
            </motion.p>
            <motion.h2
              className="text-heading mb-6"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              Manage your people
              <br />
              <em style={{ fontStyle: "italic", color: "#178fbf" }}>after we place them.</em>
            </motion.h2>
            <motion.p
              className="text-body mb-8 max-w-md"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              IntakeSense HRMS is a modern HR management system built for Indian businesses.
              Payroll, attendance, compliance, and performance — everything your HR team needs
              without the enterprise price tag.
            </motion.p>
            <motion.a
              href="https://hr.intakesense.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              Explore HRMS <span aria-hidden="true">→</span>
            </motion.a>
          </div>

          {/* Right: Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e4e4e4] rounded-xl overflow-hidden">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                className="bg-white p-6"
                variants={fadeUp}
                custom={i + 2}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#f7a261] mb-4" />
                <p
                  className="text-[0.9375rem] font-[500] text-[#0a0a0a] mb-2"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  {f.label}
                </p>
                <p
                  className="text-[0.875rem] text-[#525252] leading-relaxed"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
