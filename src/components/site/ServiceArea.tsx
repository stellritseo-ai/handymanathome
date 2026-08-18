import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Shield, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const areasData = [
  { name: "Mooresville, NC", x: "55%", y: "45%", primary: true, href: "/service-areas/mooresville-nc" },
  { name: "Cornelius, NC", x: "58%", y: "58%", href: "/service-areas/cornelius-nc" },
  { name: "Davidson, NC", x: "60%", y: "65%", href: "/service-areas/davidson-nc" },
  { name: "Huntersville, NC", x: "62%", y: "72%", href: "/service-areas/huntersville-nc" },
  { name: "Troutman, NC", x: "53%", y: "30%", href: "/service-areas/troutman-nc" },
  { name: "Statesville, NC", x: "50%", y: "20%", href: "/service-areas/statesville-nc" },
  { name: "Denver, NC", x: "38%", y: "52%", href: "/service-areas/denver-nc" },
  { name: "Sherrills Ford, NC", x: "42%", y: "38%", href: "/service-areas/sherrills-ford-nc" },
  { name: "Mount Mourne, NC", x: "56%", y: "52%", href: "/service-areas/mount-mourne-nc" },
  { name: "Lake Norman, NC", x: "48%", y: "50%", href: "/service-areas/lake-norman-nc" },
  { name: "Iredell County", x: "52%", y: "25%", href: "/service-areas" },
  { name: "Mecklenburg County", x: "64%", y: "78%", href: "/service-areas" },
  { name: "Catawba County", x: "18%", y: "35%", href: "/service-areas" },
  { name: "Lincoln County", x: "22%", y: "58%", href: "/service-areas" },
];

const TinyDropletIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#0ea5e9] fill-[#0ea5e9] shrink-0" viewBox="0 0 24 24">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

export function ServiceArea() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section id="service-area" className="relative py-[100px] bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading & Chips (50% width) */}
          <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              <TinyDropletIcon /> Service Area <TinyDropletIcon />
            </span>
            <h2
              className="text-[#0F172A] leading-tight tracking-tight capitalize text-[29px] lg:text-[40px]"
              style={{ fontWeight: 800, marginBottom: "10px" }}
            >
              Proudly Serving <span className="text-[#0ea5e9]">Mooresville</span> &amp; Surrounding Areas
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-8">
              We provide professional residential &amp; commercial pressure washing, soft roof cleaning, house washing, driveway cleaning &amp; exterior painting across Mooresville, Lake Norman, Cornelius, Davidson, Huntersville, Troutman, Statesville, Denver, Sherrills Ford, Mount Mourne, and surrounding counties in NC.
            </p>

            {/* Premium Capsule Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8">
              {areasData.map((a) => {
                const isActive = hoveredArea === a.name;
                return (
                  <Link
                    key={a.name}
                    to={a.href}
                    onMouseEnter={() => setHoveredArea(a.name)}
                    onMouseLeave={() => setHoveredArea(null)}
                    className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider rounded-xl py-2.5 px-4 transition-all duration-300 shadow-sm border ${isActive
                        ? "bg-[#0ea5e9]/10 border-[#0ea5e9]/45 text-[#0ea5e9] scale-[1.03] -translate-y-0.5 shadow-md shadow-[#0ea5e9]/5"
                        : "text-slate-600 bg-slate-50 border-slate-100 hover:bg-[#0ea5e9]/5 hover:border-[#0ea5e9]/25 hover:text-[#0ea5e9]"
                      }`}
                  >
                    <MapPin className={`h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${isActive ? "text-[#0ea5e9]" : "text-[#0ea5e9]/75"
                      }`} />
                    <span>{a.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Subtext info */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 select-none">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span>We hold full $2,000,000 public liability insurance coverage for NC.</span>
            </div>
          </div>

          {/* Right Column: Sleek Dispatch Telemetry Map (50% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1324] to-[#040814] border border-slate-800 shadow-glow"
          >
            {/* Embedded Google Map Background (Centered on Lake Norman, NC) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.7046168101565!2d-80.85195282412128!3d35.585681872618295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885155217ade50c9%3A0x1bd064ca318befe7!2s107%20Kase%20Ct%2C%20Mooresville%2C%20NC%2028117%2C%20USA!5e0!3m2!1sen!2snp!4v1782946404440!5m2!1sen!2snp"
              className="absolute inset-0 w-full h-full opacity-80 grayscale invert contrast-[1.2] brightness-[0.85] pointer-events-none"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />

            {/* Stylized map grid and contour boundary */}
            <svg
              viewBox="0 0 600 450"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <radialGradient id="mapGlow" cx="48%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#0ea5e9" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Coverage radial glow under Lake Norman */}
              <circle cx="288" cy="225" r="200" fill="url(#mapGlow)" />

              {/* Radar Sweep Line */}
              <line
                x1="288"
                y1="225"
                x2="288"
                y2="45"
                stroke="rgba(14, 165, 233, 0.4)"
                strokeWidth="1.5"
                className="radar-sweep-line"
              />

              {/* Styled coverage contour boundary */}
              <path
                d="M 120 250 C 150 130, 230 80, 350 110 S 530 170, 520 280 C 470 350, 350 370, 230 340 S 100 310, 120 250 Z"
                fill="rgba(14, 165, 233, 0.01)"
                stroke="#0ea5e9"
                strokeWidth="2"
                className="animated-boundary"
                opacity="0.6"
              />

              {/* Grid coordinates overlay */}
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={i}
                  x1={60 + i * 90}
                  y1="0"
                  x2={60 + i * 90 - 30}
                  y2="450"
                  stroke="#1e293b"
                  strokeWidth="1"
                  opacity="0.4"
                />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={60 + i * 80}
                  x2="600"
                  y2={40 + i * 80}
                  stroke="#1e293b"
                  strokeWidth="1"
                  opacity="0.4"
                />
              ))}
            </svg>

            {/* Pins with glowing radar rings */}
            {areasData.map((pin) => (
              <Pin
                key={pin.name}
                x={pin.x}
                y={pin.y}
                label={pin.name}
                primary={pin.primary}
                active={hoveredArea === pin.name}
                onMouseEnter={() => setHoveredArea(pin.name)}
                onMouseLeave={() => setHoveredArea(null)}
              />
            ))}

            {/* Coverage badge */}
            <div className="absolute bottom-5 left-5 bg-slate-950/75 border border-slate-800/80 backdrop-blur-md text-white rounded-2xl px-4 py-3 select-none z-20">
              <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                Free Service Radius
              </div>
              <div className="font-display font-bold text-sm text-[#0ea5e9] mt-0.5">
                50 Miles from Mooresville, NC
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes radar-sweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes boundary-dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .radar-sweep-line {
          transform-origin: 288px 225px;
          animation: radar-sweep 10s linear infinite;
        }
        .animated-boundary {
          stroke-dasharray: 6 4;
          animation: boundary-dash 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

function Pin({
  x,
  y,
  label,
  primary = false,
  active = false,
  onMouseEnter,
  onMouseLeave,
}: {
  x: string;
  y: string;
  label: string;
  primary?: boolean;
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full group cursor-pointer z-20 transition-all duration-300"
      style={{ left: x, top: y }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col items-center gap-1.5">
        {/* Glowing hotspot */}
        <div className="relative flex h-8 w-8 items-center justify-center">
          {/* Pulsing ring */}
          <span className={`animate-ping absolute inline-flex h-6 w-6 rounded-full opacity-75 transition-all duration-300 ${active
              ? "bg-[#0ea5e9] scale-125"
              : primary
                ? "bg-[#0284c7]"
                : "bg-sky-400"
            }`}></span>
          {/* Inner solid ring */}
          <span className={`relative inline-flex rounded-full h-4.5 w-4.5 items-center justify-center text-white shadow-md transition-all duration-300 ${active
              ? "bg-[#0ea5e9] scale-110 shadow-[0_0_12px_rgba(14,165,233,0.5)]"
              : primary
                ? "bg-[#0284c7]"
                : "bg-gradient-to-r from-[#0ea5e9] to-sky-400"
            }`}>
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          </span>
        </div>

        {/* Label frame */}
        <span className={`px-2.5 py-0.5 rounded-lg backdrop-blur-sm border transition-all duration-300 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm ${primary || active ? "inline-block" : "hidden sm:inline-block"
          } ${active
            ? "bg-[#0ea5e9] border-[#0ea5e9] text-white scale-105 shadow-[0_4px_12px_rgba(14,165,233,0.3)]"
            : "bg-[#0c1324]/85 border-slate-800/80 text-white group-hover:bg-[#0ea5e9] group-hover:border-[#0ea5e9]/50 group-hover:text-white"
          }`}>
          {label.split(",")[0]}
        </span>
      </div>
    </div>
  );
}
