"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useFormContext } from "@/context/FormContext";
import { fadeUpFast as fadeUp } from "@/lib/animations";

const plans = [
  {
    name: "Trial",
    badge: "Free to start",
    price: "₹0",
    priceNote: "for your first hire",
    description: "Test our 12-day process with zero financial risk.",
    features: [
      "One placement, completely free",
      "Full 12-day delivery commitment",
      "Dedicated recruiter assigned",
      "90-day performance guarantee",
    ],
    cta: "Start free",
    ctaVariant: "ghost" as const,
  },
  {
    name: "Standard",
    badge: "Most popular",
    price: "₹80,000",
    priceNote: "per successful placement",
    description:
      "For growing companies. Unlimited roles, full guarantee, dedicated support.",
    features: [
      "Unlimited simultaneous roles",
      "Access to premium talent pool",
      "Dedicated account manager",
      "90-day performance guarantee",
      "2-year free replacement guarantee",
      "Salary negotiation included",
      "28 Indian states covered",
    ],
    cta: "Start hiring",
    ctaVariant: "primary" as const,
    highlighted: true,
  },
  {
    name: "Enterprise",
    badge: "White glove",
    price: "Custom",
    priceNote: "volume pricing",
    description:
      "For large organisations. C-suite search, dedicated team, same-week delivery.",
    features: [
      "Everything in Standard",
      "C-suite and leadership search",
      "Dedicated recruitment team",
      "Custom talent pipelines",
      "Same-week candidate delivery",
      "Advanced analytics and reporting",
      "Volume discounts available",
    ],
    cta: "Talk to us",
    ctaVariant: "ghost" as const,
  },
];


export default function Pricing() {
  const { openForm } = useFormContext();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="section-padding bg-white">
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
            Pricing
          </motion.p>
          <motion.h2
            className="text-heading"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Honest pricing.
            <br />
            <em style={{ fontStyle: "italic", color: "#178fbf" }}>No surprises.</em>
          </motion.h2>
          <motion.p
            className="text-body mt-4 max-w-lg"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            You only pay when the hire works. That&apos;s the whole model. No retainers,
            no setup fees, no hidden costs. 60% cheaper than traditional Indian
            agencies — and far more accountable.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-8 md:p-9 ${
                plan.highlighted
                  ? "border-[#178fbf] bg-white"
                  : "border-[#e4e4e4] bg-white"
              }`}
              variants={fadeUp}
              custom={i + 3}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-8">
                <p
                  className="text-[0.75rem] font-[500] tracking-[0.06em] uppercase"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    color: plan.highlighted ? "#178fbf" : "#909090",
                  }}
                >
                  {plan.badge}
                </p>
                <p
                  className="text-[0.75rem] font-[500] tracking-[0.04em] uppercase"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    color: "#d4d4d4",
                  }}
                >
                  {plan.name}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p
                  className="leading-none"
                  style={{
                    fontFamily:
                      "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                    fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                    letterSpacing: "-0.03em",
                    color: "#0a0a0a",
                  }}
                >
                  {plan.price}
                </p>
                <p
                  className="text-[0.8125rem] text-[#909090] mt-1.5"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  {plan.priceNote}
                </p>
              </div>

              {/* Description */}
              <p
                className="text-[0.9375rem] text-[#525252] mb-8 leading-relaxed"
                style={{
                  fontFamily:
                    "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                }}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="shrink-0 mt-0.5"
                      size={14}
                      style={{ color: plan.highlighted ? "#178fbf" : "#909090" }}
                    />
                    <span
                      className="text-[0.875rem] text-[#525252] leading-snug"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={openForm}
                className={plan.ctaVariant === "primary" ? "btn-primary justify-center" : "btn-ghost justify-center"}
              >
                {plan.cta} <span aria-hidden="true">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Guarantee bar */}
        <motion.div
          className="mt-8 rounded-xl p-7 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
          style={{ background: "#178fbf" }}
          variants={fadeUp}
          custom={7}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="flex-1">
            <p
              className="text-white text-[1rem] font-[500] mb-1"
              style={{
                fontFamily:
                  "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
              }}
            >
              90-day performance guarantee on every placement.
            </p>
            <p
              className="text-white/70 text-[0.875rem]"
              style={{
                fontFamily:
                  "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
              }}
            >
              If your hire leaves within 90 days, we return and fill the role at no
              additional cost. No questions asked.
            </p>
          </div>
          <button
            onClick={openForm}
            className="shrink-0 inline-flex items-center gap-1.5 bg-white text-[#178fbf] text-[14px] font-[500] px-5 py-2.5 rounded-md hover:bg-white/90 transition-colors"
            style={{
              fontFamily:
                "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
            }}
          >
            Claim guarantee <span aria-hidden="true">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
