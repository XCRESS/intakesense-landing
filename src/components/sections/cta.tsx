"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useFormContext } from "@/context/FormContext";
import { fadeUp } from "@/lib/animations";

export default function Cta() {
  const { openForm } = useFormContext();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white border-t border-[#e4e4e4]">
      <div className="container-editorial">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            className="text-eyebrow mb-6"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Get started
          </motion.p>

          <motion.h2
            className="text-heading"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Ready to hire better?
          </motion.h2>

          <motion.p
            className="text-body mt-4 max-w-md mx-auto"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Start with your first placement — completely free. No contracts, no
            setup fees, no commitment required.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <button onClick={openForm} className="btn-primary text-[15px] py-3 px-7">
              Get started <span aria-hidden="true">→</span>
            </button>
            <a
              href="https://wa.me/919810277932"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] text-[#909090] hover:text-[#0a0a0a] transition-colors duration-200"
              style={{
                fontFamily:
                  "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
              }}
            >
              Or message us on WhatsApp — no sales pitch.
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
