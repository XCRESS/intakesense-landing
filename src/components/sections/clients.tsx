"use client";

const items = [
  "Technology",
  "Bangalore",
  "Financial Services",
  "Mumbai",
  "E-commerce",
  "Delhi NCR",
  "FinTech",
  "Hyderabad",
  "Healthcare",
  "Pune",
  "EdTech",
  "Chennai",
  "Logistics",
  "Gurugram",
  "Manufacturing",
  "Noida",
  "BFSI",
  "Ahmedabad",
  "Legal & Advisory",
  "Jaipur",
];

export default function Clients() {
  const doubled = [...items, ...items];

  return (
    <section className="border-y border-[#e4e4e4] bg-white overflow-hidden">
      <div className="flex items-stretch">
        {/* Label */}
        <div
          className="hidden sm:flex items-center shrink-0 px-6 border-r border-[#e4e4e4]"
          style={{ minHeight: "52px" }}
        >
          <p
            className="text-eyebrow whitespace-nowrap"
            style={{
              fontFamily:
                "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
            }}
          >
            300+ companies · 28 states across India
          </p>
        </div>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden relative" style={{ minHeight: "52px" }}>
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

          <div className="flex items-center h-full">
            <div className="marquee-track">
              {doubled.map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-3 px-5 text-[12px] text-[#b0b0b0] whitespace-nowrap tracking-wide uppercase"
                  style={{
                    fontFamily:
                      "var(--font-instrument-sans, 'Instrument Sans', system-ui, sans-serif)",
                  }}
                >
                  {name}
                  <span className="inline-block w-1 h-1 rounded-full bg-[#d4d4d4]" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
