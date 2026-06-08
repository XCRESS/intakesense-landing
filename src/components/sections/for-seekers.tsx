"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUpFast as fadeUp } from "@/lib/animations";

export default function ForSeekers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              className="text-eyebrow mb-6"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              For candidates
            </motion.p>

            <motion.h2
              className="text-heading"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              Find the role
              <br />
              you were meant to do.
            </motion.h2>

            <motion.p
              className="text-body mt-6 max-w-md"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              We work with India&apos;s best companies — companies that value their
              people. When we place you, we advocate for your salary, your growth,
              and your fit. Not just the commission.
            </motion.p>

            <motion.ul
              className="mt-7 space-y-3"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {[
                "Access roles that are never publicly posted",
                "Salary negotiation handled on your behalf",
                "Honest feedback from real hiring managers",
                "Placed only where you genuinely fit — no square pegs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: "#f7a261" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-[0.9375rem] text-[#525252] leading-snug"
                    style={{
                      fontFamily:
                        "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.a
              href="mailto:careers@intakesense.com"
              className="btn-ghost mt-8 inline-flex"
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              Explore opportunities <span aria-hidden="true">→</span>
            </motion.a>
          </div>

          {/* Right: Stat callout */}
          <motion.div
            className="border border-[#e4e4e4] rounded-2xl p-10 md:p-12"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <p
              className="leading-none mb-4"
              style={{
                fontFamily:
                  "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                fontStyle: "italic",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                color: "#f7a261",
                letterSpacing: "-0.04em",
              }}
            >
              70%
            </p>
            <p
              className="text-[1.0625rem] text-[#0a0a0a] font-[400] mb-4 leading-snug"
              style={{
                fontFamily:
                  "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
              }}
            >
              of our roles are never
              <br />
              publicly advertised.
            </p>
            <p className="text-body text-[0.9375rem]">
              We work the hidden job market — reaching out to passive talent at
              top Indian companies who are open to the right opportunity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
