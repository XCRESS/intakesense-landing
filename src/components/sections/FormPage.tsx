"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface FormPageProps {
  onClose: () => void;
}

type Intent = "hiring" | "seeking" | "";

export default function FormPage({ onClose }: FormPageProps) {
  const [intent, setIntent] = useState<Intent>("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-12 h-[68px] border-b border-[#e4e4e4] shrink-0">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Intakesense"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-[#e4e4e4] hover:border-[#0a0a0a] transition-colors"
        >
          <X size={16} className="text-[#525252]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        {!submitted ? (
          <div className="w-full max-w-md">
            {/* Intent selection */}
            {!intent && (
              <div>
                <p className="text-eyebrow mb-5">Let&apos;s get started</p>
                <h1
                  className="mb-10"
                  style={{
                    fontFamily:
                      "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                    color: "#0a0a0a",
                  }}
                >
                  What brings you
                  <br />
                  to Intakesense?
                </h1>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setIntent("hiring")}
                    className="w-full text-left p-5 rounded-xl border border-[#e4e4e4] hover:border-[#178fbf] transition-colors group"
                  >
                    <p
                      className="text-[1rem] font-[500] text-[#0a0a0a] mb-1 group-hover:text-[#178fbf] transition-colors"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    >
                      I&apos;m looking to hire
                    </p>
                    <p
                      className="text-[0.875rem] text-[#909090]"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    >
                      Fill roles with guaranteed placements
                    </p>
                  </button>
                  <button
                    onClick={() => setIntent("seeking")}
                    className="w-full text-left p-5 rounded-xl border border-[#e4e4e4] hover:border-[#f7a261] transition-colors group"
                  >
                    <p
                      className="text-[1rem] font-[500] text-[#0a0a0a] mb-1 group-hover:text-[#f7a261] transition-colors"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    >
                      I&apos;m looking for work
                    </p>
                    <p
                      className="text-[0.875rem] text-[#909090]"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    >
                      Find roles at India&apos;s best companies
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* Form */}
            {intent && (
              <form onSubmit={handleSubmit}>
                <div className="flex items-start justify-between mb-8 gap-4">
                  <div>
                    <p className="text-eyebrow mb-1.5">
                      {intent === "hiring" ? "Hiring enquiry" : "Candidate application"}
                    </p>
                    <h2
                      style={{
                        fontFamily:
                          "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        color: "#0a0a0a",
                      }}
                    >
                      Tell us about yourself.
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIntent("")}
                    className="shrink-0 text-[0.8125rem] text-[#909090] hover:text-[#0a0a0a] transition-colors underline underline-offset-2 mt-1"
                    style={{
                      fontFamily:
                        "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    }}
                  >
                    Change
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[0.8125rem] text-[#525252] mb-1.5"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Priya Sharma"
                      className="w-full px-4 py-3 rounded-lg border border-[#e4e4e4] text-[0.9375rem] text-[#0a0a0a] placeholder:text-[#d4d4d4] focus:outline-none focus:border-[#178fbf] transition-colors bg-white"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[0.8125rem] text-[#525252] mb-1.5"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    >
                      Work email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="priya@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-[#e4e4e4] text-[0.9375rem] text-[#0a0a0a] placeholder:text-[#d4d4d4] focus:outline-none focus:border-[#178fbf] transition-colors bg-white"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    />
                  </div>

                  {intent === "hiring" && (
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[0.8125rem] text-[#525252] mb-1.5"
                        style={{
                          fontFamily:
                            "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                        }}
                      >
                        Company name
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        placeholder="Acme Technologies"
                        className="w-full px-4 py-3 rounded-lg border border-[#e4e4e4] text-[0.9375rem] text-[#0a0a0a] placeholder:text-[#d4d4d4] focus:outline-none focus:border-[#178fbf] transition-colors bg-white"
                        style={{
                          fontFamily:
                            "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                        }}
                      />
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[0.8125rem] text-[#525252] mb-1.5"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    >
                      {intent === "hiring"
                        ? "What roles are you looking to fill?"
                        : "What kind of role are you looking for?"}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder={
                        intent === "hiring"
                          ? "e.g. 2 senior engineers, 1 product manager in Bangalore"
                          : "e.g. Senior product designer, remote, 15+ LPA"
                      }
                      className="w-full px-4 py-3 rounded-lg border border-[#e4e4e4] text-[0.9375rem] text-[#0a0a0a] placeholder:text-[#d4d4d4] focus:outline-none focus:border-[#178fbf] transition-colors bg-white resize-none"
                      style={{
                        fontFamily:
                          "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-2 justify-center py-3">
                    Submit <span aria-hidden="true">→</span>
                  </button>

                  <p
                    className="text-[0.75rem] text-[#909090] text-center"
                    style={{
                      fontFamily:
                        "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                    }}
                  >
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Success state */
          <div className="w-full max-w-md text-center">
            <div className="w-12 h-12 rounded-full bg-[#f0f9ff] flex items-center justify-center mx-auto mb-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10L8 14L16 6"
                  stroke="#178fbf"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "#0a0a0a",
              }}
              className="mb-4"
            >
              We&apos;ll be in touch.
            </h2>
            <p
              className="text-[0.9375rem] text-[#525252] mb-8"
              style={{
                fontFamily:
                  "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
              }}
            >
              Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. Our team will
              reach out within 24 hours.
            </p>
            <button onClick={onClose} className="btn-ghost">
              Back to site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
