import { motion } from "framer-motion";
import {
  CalendarCheck,
  Search,
  FileText,
  Wrench,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Schedule Service",
    desc: "Book a consultation online or call us at (214) 814-1444 for immediate response.",
  },
  {
    icon: Search,
    title: "Site Assessment",
    desc: "We inspect your project site, assess the repairs or remodel, and scope the work precisely.",
  },
  {
    icon: FileText,
    title: "Transparent Quote",
    desc: "Upfront, itemized estimate provided before any work starts. What we quote is what you pay.",
  },
  {
    icon: Wrench,
    title: "Expert Workmanship",
    desc: "Our skilled tradespeople handle the repairs, remodeling, painting, and construction safely and professionally.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guarantee",
    desc: "Final walkthrough to check the work and ensure your home or business looks stunning.",
  },
];

// Desktop S-curve node positions (centered on the SVG path)
const desktopPositions = [
  { left: "20%", top: "50px" },
  { left: "50%", top: "50px" },
  { left: "80%", top: "50px" },
  { left: "20%", top: "310px" },
  { left: "50%", top: "310px" },
];

export function Process() {
  return (
    <section id="process" className="w-full bg-[#fff] py-[60px] px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full relative">

        {/* Background grid texture in brand color */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0000b9 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* CSS Animations */}
        <style>{`
          @keyframes electricFlow {
            0%   { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 30; }
          }
          @keyframes sparkFlow {
            0%   { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -45; }
          }
          @keyframes verticalElectricFlow {
            0%   { background-position: 0 0; }
            100% { background-position: 0 40px; }
          }
          @keyframes pulseGlow {
            0%,100% { transform: scale(0.96); opacity: 0.15; }
            50%     { transform: scale(1.04); opacity: 0.35; }
          }
          @keyframes pulseGlowLarge {
            0%,100% { transform: scale(0.98); opacity: 0.05; }
            50%     { transform: scale(1.02); opacity: 0.15; }
          }
          .pulse-glow      { animation: pulseGlow 2s infinite ease-in-out; transform-origin: 17px 15px; }
          .pulse-glow-large{ animation: pulseGlowLarge 3s infinite ease-in-out; transform-origin: 17px 15px; }
          .electric-flow   { stroke-dasharray: 6 6; animation: electricFlow 0.5s infinite linear; }
          .spark-flow      { stroke-dasharray: 12 24; animation: sparkFlow 1.8s infinite linear; }
          .mobile-electric-flow {
            background: linear-gradient(to bottom, #0000b9 0%, #0000b9 30%, #e0e7ff 50%, #0000b9 70%, #0000b9 100%);
            background-size: 100% 40px;
            animation: verticalElectricFlow 1.2s infinite linear;
          }
        `}</style>

        <div className="mx-auto w-[90%] max-w-7xl relative z-10">

          {/* ── Section Header ──────────────────────────────── */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 bg-[#0000b9]/10 border border-[#0000b9]/20 text-[#0000b9] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0000b9] animate-pulse" />
              Step by Step Process
            </span>

            <h2 
              className="text-[#1c140d] tracking-tight leading-[1.15] font-sans text-[30px] lg:text-[36px]"
              style={{ marginTop: "-15px", marginBottom: "10px", fontWeight: 800 }}
            >
              We Complete Every{" "}
              <span className="bg-gradient-to-r from-[#0000b9] to-[#1526d4] bg-clip-text text-transparent">
                Step Carefully.
              </span>
            </h2>

            <p 
              className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-normal leading-relaxed"
              style={{ marginBottom: "-50px" }}
            >
              Our proven process guarantees precision, clean jobsites, and solid results — from your first call to our final inspection walkthrough.
            </p>
          </motion.div>

          {/* ── 1. DESKTOP: S-Curve SVG Layout ──────────────── */}
          <div className="hidden lg:block relative w-full h-[500px] select-none">
            <svg
              viewBox="0 0 1200 360"
              className="absolute top-0 left-0 w-full h-[360px] pointer-events-none z-0"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%"   stopColor="#0f172a" />
                  <stop offset="40%"  stopColor="#1e293b" />
                  <stop offset="60%"  stopColor="#334155" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>

              {/* Drop shadow */}
              <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
                stroke="#0f172a" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity="0.07" />
              {/* Outer conduit */}
              <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
                stroke="#1e293b" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              {/* Animated blue core */}
              <motion.path
                d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
                stroke="#0000b9" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
              {/* Light blue flow */}
              <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
                stroke="#93c5fd" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                opacity="0.8" className="spark-flow" />
              {/* Glossy highlight */}
              <motion.path
                d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
                stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                opacity="0.75"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />

              {/* Work Van at start */}
              <g transform="translate(16, -2) scale(1.30)">
                <rect x="5" y="16" width="62" height="21" rx="4" fill="#0000b9" stroke="#090e24" strokeWidth="1.5" />
                <rect x="9" y="19" width="14" height="9" rx="2" fill="#bae6fd" opacity="0.85" />
                <rect x="27" y="19" width="18" height="9" rx="1.5" fill="#bae6fd" opacity="0.85" />
                <circle cx="16" cy="40" r="6.5" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                <circle cx="16" cy="40" r="2.5" fill="#e2e8f0" />
                <circle cx="52" cy="40" r="6.5" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                <circle cx="52" cy="40" r="2.5" fill="#e2e8f0" />
                <path d="M 67 28 Q 74 38 80 40" stroke="#0000b9" strokeWidth="3" fill="none" strokeLinecap="round" />
              </g>

              {/* End of line badge */}
              <g transform="translate(920, 310)">
                <circle cx="136" cy="0" r="22" fill="#0000b9" opacity="0.15" className="pulse-glow" />
                <circle cx="136" cy="0" r="16" fill="#090e24" stroke="#0000b9" strokeWidth="2" />
                <path d="M 130 1 L 134 5 L 143 -4" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </svg>

            {/* Step nodes */}
            {steps.map((s, i) => {
              const pos = desktopPositions[i];
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="absolute group cursor-default"
                  style={{ left: pos.left, top: pos.top }}
                >
                  {/* Circle node */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full bg-white shadow-[0_10px_32px_rgba(15,23,42,0.08)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(0,0,185,0.25)] group-hover:border-[#0000b9]/30">
                    {/* Step number badge */}
                    <div className="absolute -top-2.5 -right-1 w-5 h-5 rounded-full bg-[#0000b9] flex items-center justify-center shadow-md border-2 border-white">
                      <span className="text-white text-[9px] font-black leading-none">{i + 1}</span>
                    </div>
                    {/* Outer halo */}
                    <div className="absolute -inset-3 rounded-full border border-[#0000b9]/15 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400" />
                    {/* Inner ring */}
                    <div className="absolute inset-1 rounded-full border border-transparent group-hover:border-[#0000b9]/30 transition-all duration-300" />
                    {/* Icon */}
                    <Icon className="h-7 w-7 text-neutral-400 group-hover:text-[#0000b9] transition-colors duration-300" />
                  </div>

                  {/* Text block below node */}
                  <div className="absolute top-[48px] -translate-x-1/2 text-center w-[220px] flex flex-col items-center pt-1">
                    <h3 className="font-extrabold text-[15px] text-neutral-900 leading-tight mt-1 mb-1.5 group-hover:text-[#0000b9] transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 leading-relaxed font-medium px-1">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── 2. MOBILE: Vertical Timeline ────────────────── */}
          <div className="relative grid gap-8 pl-14 lg:hidden">
            {/* Animated vertical conduit */}
            <div className="absolute left-[39px] top-6 bottom-6 w-2.5 pointer-events-none z-0">
              <div className="absolute inset-0 bg-neutral-900/10 rounded-full blur-[2px]" />
              <div className="absolute inset-0 bg-[#1e293b] rounded-full" />
              <div className="absolute inset-[2px] rounded-full mobile-electric-flow" />
              <div className="absolute left-[3px] top-[2px] bottom-[2px] w-[1.5px] bg-white/75 rounded-full" />
            </div>

            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col group text-left"
                >
                  {/* Circle node */}
                  <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0000b9]/30">
                    {/* Step badge */}
                    <div className="absolute -top-1.5 -right-0.5 w-4 h-4 rounded-full bg-[#0000b9] flex items-center justify-center border border-white">
                      <span className="text-white text-[8px] font-black">{i + 1}</span>
                    </div>
                    <div className="absolute inset-0.5 rounded-full border border-transparent group-hover:border-[#0000b9]/40 transition-colors duration-300" />
                    <Icon className="h-5 w-5 text-neutral-400 group-hover:text-[#0000b9] transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="pl-4 py-0.5">
                    <h3 className="font-extrabold text-base text-neutral-900 leading-tight mt-0 mb-1.5 group-hover:text-[#0000b9] transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-medium max-w-sm">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
