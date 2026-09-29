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
    <section
      id="process"
      style={{ paddingTop: "60px", paddingBottom: "10px" }}
      className="relative w-full bg-gradient-to-b from-slate-50/90 via-blue-50/20 to-slate-50/80 pt-[60px] pb-[10px] px-4 md:px-8 overflow-hidden border-t border-slate-200/60"
    >
      {/* Subtle ambient light glows */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#0000b9]/[0.03] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-sky-400/[0.03] rounded-full blur-[130px]" />

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
            0%, 100% { transform: scale(0.96); opacity: 0.18; }
            50%      { transform: scale(1.06); opacity: 0.42; }
          }
          @keyframes pulseGlowLarge {
            0%, 100% { transform: scale(0.98); opacity: 0.08; }
            50%      { transform: scale(1.08); opacity: 0.22; }
          }
          @keyframes vanIdle {
            0%, 100% { transform: translateY(0px); }
            50%      { transform: translateY(-2px); }
          }
          @keyframes starShimmer {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50%      { opacity: 1; transform: scale(1.15); }
          }
          .pulse-glow       { animation: pulseGlow 2s infinite ease-in-out; transform-origin: center; }
          .pulse-glow-large { animation: pulseGlowLarge 3s infinite ease-in-out; transform-origin: center; }
          .electric-flow    { stroke-dasharray: 6 6; animation: electricFlow 0.5s infinite linear; }
          .spark-flow       { stroke-dasharray: 12 24; animation: sparkFlow 1.8s infinite linear; }
          .van-anim         { animation: vanIdle 2.4s ease-in-out infinite; }
          .star-anim        { animation: starShimmer 2.2s ease-in-out infinite; }
          .mobile-electric-flow {
            background: linear-gradient(to bottom, #0000b9 0%, #0000b9 30%, #e0e7ff 50%, #0000b9 70%, #0000b9 100%);
            background-size: 100% 40px;
            animation: verticalElectricFlow 1.2s infinite linear;
          }
        `}</style>

        <div className="mx-auto w-[90%] max-w-7xl relative z-10">

          {/* ── Section Header ──────────────────────────────── */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 bg-[#0000b9]/10 border border-[#0000b9]/20 text-[#0000b9] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0000b9] animate-pulse" />
              Step by Step Process
            </span>

            <h2 
              className="text-[#1c140d] tracking-tight leading-[1.15] font-sans text-[25px] xs:text-[29px] lg:text-[36px] font-extrabold -mt-3.5 mb-2.5"
            >
              We Complete Every{" "}
              <span className="bg-gradient-to-r from-[#0000b9] to-[#1526d4] bg-clip-text text-transparent">
                Step Carefully.
              </span>
            </h2>

            <p 
              className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-normal leading-relaxed mb-4 sm:-mb-[50px]"
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

                {/* Headlight beam gradient */}
                <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>

                {/* Gold Seal Gradient */}
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>

                {/* Emerald Core Gradient */}
                <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>

              {/* Drop shadow */}
              <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 980 310"
                stroke="#0f172a" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity="0.07" />
              
              {/* Outer conduit */}
              <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 980 310"
                stroke="#1e293b" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Animated blue core */}
              <motion.path
                d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 980 310"
                stroke="#0000b9" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
              
              {/* Light blue flow */}
              <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 980 310"
                stroke="#93c5fd" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                opacity="0.8" className="spark-flow" />
              
              {/* Glossy highlight */}
              <motion.path
                d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 980 310"
                stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                opacity="0.75"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />

              {/* ── FIRST ANIMATED ICON: Premium Dispatch Contractor Truck ── */}
              <g className="van-anim">
                {/* Forward Headlight Beam projection onto the pipe */}
                <polygon points="106,44 148,36 148,64 106,56" fill="url(#headlightBeam)" />

                {/* Van Shadow */}
                <ellipse cx="64" cy="58" rx="42" ry="4" fill="#0f172a" opacity="0.18" />

                {/* Main Van Body */}
                <g transform="translate(18, 12)">
                  {/* Roof Ladder Rack & Silver Extension Ladder */}
                  <line x1="22" y1="14" x2="68" y2="14" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="26" y1="11" x2="26" y2="14" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="64" y1="11" x2="64" y2="14" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="20" y1="11" x2="70" y2="11" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                  <line x1="30" y1="10" x2="30" y2="13" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="40" y1="10" x2="40" y2="13" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="50" y1="10" x2="50" y2="13" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="60" y1="10" x2="60" y2="13" stroke="#94a3b8" strokeWidth="1" />

                  {/* Rear Van Cargo Box */}
                  <rect x="8" y="15" width="48" height="25" rx="3" fill="#0000b9" stroke="#060c24" strokeWidth="1.5" />
                  
                  {/* Side Accent Stripe & Panel Crease */}
                  <rect x="8" y="27" width="48" height="4" fill="#ffffff" opacity="0.9" />
                  <line x1="8" y1="36" x2="56" y2="36" stroke="#00008f" strokeWidth="1" />
                  <line x1="32" y1="15" x2="32" y2="40" stroke="#00008f" strokeWidth="0.8" opacity="0.7" />

                  {/* Aerodynamic Cab */}
                  <path d="M 56 22 L 67 22 Q 74 25 78 30 L 82 35 L 82 40 L 56 40 Z" fill="#0000b9" stroke="#060c24" strokeWidth="1.5" />
                  
                  {/* Windshield & Side Window */}
                  <path d="M 58 24 L 66 24 Q 71 26 74 31 L 58 31 Z" fill="#bae6fd" stroke="#060c24" strokeWidth="1" />
                  <rect x="36" y="18" width="16" height="8" rx="1.5" fill="#bae6fd" opacity="0.85" stroke="#060c24" strokeWidth="1" />
                  
                  {/* Headlights & Amber Indicator */}
                  <polygon points="82,34 85,35 85,38 82,39" fill="#fef08a" stroke="#eab308" strokeWidth="0.8" />
                  <circle cx="83.5" cy="36.5" r="1.5" fill="#ffffff" />
                  <rect x="80" y="32" width="2" height="2" fill="#f97316" rx="0.5" />

                  {/* Front Chrome Bumper */}
                  <rect x="80" y="39" width="4" height="3" rx="1" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />

                  {/* Rear Wheels with Alloy Hubcaps */}
                  <circle cx="23" cy="40" r="7.5" fill="#0f172a" stroke="#334155" strokeWidth="1.8" />
                  <circle cx="23" cy="40" r="3.5" fill="#cbd5e1" stroke="#0f172a" strokeWidth="0.8" />
                  <circle cx="23" cy="40" r="1.2" fill="#0000b9" />

                  {/* Front Wheels with Alloy Hubcaps */}
                  <circle cx="68" cy="40" r="7.5" fill="#0f172a" stroke="#334155" strokeWidth="1.8" />
                  <circle cx="68" cy="40" r="3.5" fill="#cbd5e1" stroke="#0f172a" strokeWidth="0.8" />
                  <circle cx="68" cy="40" r="1.2" fill="#0000b9" />
                </g>
              </g>

              {/* ── LAST ANIMATED ICON: Ultra-Premium Animated Home Icon ── */}
              <g transform="translate(1015, 310)">
                {/* Concentric Animated Pulse Glows */}
                <circle cx="0" cy="0" r="42" fill="#0000b9" opacity="0.10" className="pulse-glow-large" />
                <circle cx="0" cy="0" r="32" fill="#0000b9" opacity="0.18" className="pulse-glow" />
                <circle cx="0" cy="0" r="24" fill="#38bdf8" opacity="0.22" className="pulse-glow" />

                {/* 5 Golden Stars arched over the home */}
                <g className="star-anim" transform="translate(0, -30)">
                  {[-22, -11, 0, 11, 22].map((xOffset, starIdx) => {
                    const yOffset = Math.abs(xOffset) === 22 ? 3 : Math.abs(xOffset) === 11 ? 1 : 0;
                    return (
                      <path
                        key={starIdx}
                        d="M 0 -3.5 L 1.1 -1.1 L 3.5 -1.1 L 1.6 0.5 L 2.3 2.8 L 0 1.4 L -2.3 2.8 L -1.6 0.5 L -3.5 -1.1 L -1.1 -1.1 Z"
                        fill="url(#goldGrad)"
                        stroke="#b45309"
                        strokeWidth="0.5"
                        transform={`translate(${xOffset}, ${yOffset})`}
                      />
                    );
                  })}
                </g>

                {/* Premium Animated Home Structure */}
                <g className="van-anim">
                  {/* Chimney */}
                  <rect x="8" y="-23" width="5.5" height="12" fill="#0000b9" stroke="#060c24" strokeWidth="1" />
                  <rect x="7" y="-24" width="7.5" height="2" rx="0.5" fill="#94a3b8" />
                  {/* Subtle chimney smoke sparkle */}
                  <circle cx="10.5" cy="-28" r="1.5" fill="#bae6fd" opacity="0.75" className="pulse-glow" />

                  {/* House Main Body / Walls */}
                  <rect x="-18" y="-6" width="36" height="23" rx="2" fill="#ffffff" stroke="#0000b9" strokeWidth="1.8" />

                  {/* Gable Roof Structure */}
                  <polygon points="0,-22 22,-5 -22,-5" fill="#0000b9" stroke="#060c24" strokeWidth="1.6" strokeLinejoin="round" />
                  {/* Inner roof fascia highlight */}
                  <polygon points="0,-20 19,-6 -19,-6" fill="#1526d4" />

                  {/* Attic Round Window */}
                  <circle cx="0" cy="-12" r="3.2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.8" />
                  <line x1="-3.2" y1="-12" x2="3.2" y2="-12" stroke="#b45309" strokeWidth="0.5" />
                  <line x1="0" y1="-15.2" x2="0" y2="-8.8" stroke="#b45309" strokeWidth="0.5" />

                  {/* Front Door */}
                  <rect x="-4.5" y="4" width="9" height="13" rx="1" fill="#0000b9" stroke="#060c24" strokeWidth="1" />
                  <circle cx="2" cy="10.5" r="1" fill="#facc15" />

                  {/* Left Window with Warm Light */}
                  <rect x="-14" y="2" width="6" height="6.5" rx="1" fill="#bae6fd" stroke="#0000b9" strokeWidth="0.8" />
                  <line x1="-11" y1="2" x2="-11" y2="8.5" stroke="#0000b9" strokeWidth="0.5" />
                  <line x1="-14" y1="5.2" x2="-8" y2="5.2" stroke="#0000b9" strokeWidth="0.5" />

                  {/* Right Window with Warm Light */}
                  <rect x="8" y="2" width="6" height="6.5" rx="1" fill="#bae6fd" stroke="#0000b9" strokeWidth="0.8" />
                  <line x1="11" y1="2" x2="11" y2="8.5" stroke="#0000b9" strokeWidth="0.5" />
                  <line x1="8" y1="5.2" x2="14" y2="5.2" stroke="#0000b9" strokeWidth="0.5" />

                  {/* Ground Threshold Step */}
                  <rect x="-21" y="17" width="42" height="2.5" rx="1" fill="#0f172a" opacity="0.22" />

                  {/* Verified Completion Checkmark Badge */}
                  <g transform="translate(14, -18)">
                    <circle cx="0" cy="0" r="6.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                    <path
                      d="M -3 0 L -0.8 2.2 L 3 -1.8"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </g>
                </g>

                {/* Pill Ribbon Label Underneath */}
                <g transform="translate(0, 30)">
                  <rect
                    x="-38"
                    y="-8"
                    width="76"
                    height="16"
                    rx="8"
                    fill="#0000b9"
                    stroke="#ffffff"
                    strokeWidth="1.2"
                  />
                  <text
                    x="0"
                    y="3"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="7.5"
                    fontWeight="900"
                    letterSpacing="0.8"
                  >
                    YOUR HOME
                  </text>
                </g>
              </g>
            </svg>

            {/* Step nodes */}
            {steps.map((s, i) => {
              const pos = desktopPositions[i];
              const Icon = s.icon;
              const isFirst = i === 0;
              const isLast = i === steps.length - 1;

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
                  <div className={`absolute -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full bg-white shadow-[0_10px_32px_rgba(15,23,42,0.08)] border flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 ${
                    isFirst
                      ? "border-[#0000b9]/30 shadow-[0_10px_30px_rgba(0,0,185,0.12)] group-hover:shadow-[0_20px_40px_-6px_rgba(0,0,185,0.3)]"
                      : isLast
                      ? "border-emerald-500/30 shadow-[0_10px_30px_rgba(16,185,129,0.12)] group-hover:shadow-[0_20px_40px_-6px_rgba(16,185,129,0.3)]"
                      : "border-slate-100 group-hover:shadow-[0_20px_40px_-6px_rgba(0,0,185,0.25)] group-hover:border-[#0000b9]/30"
                  }`}>
                    {/* Step number badge */}
                    <div className={`absolute -top-2.5 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md border-2 border-white ${
                      isLast ? "bg-emerald-600" : "bg-[#0000b9]"
                    }`}>
                      <span className="text-white text-[9px] font-black leading-none">{i + 1}</span>
                    </div>

                    {/* Outer halo */}
                    <div className="absolute -inset-3 rounded-full border border-[#0000b9]/15 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400" />
                    
                    {/* Inner ring */}
                    <div className="absolute inset-1 rounded-full border border-transparent group-hover:border-[#0000b9]/30 transition-all duration-300" />
                    
                    {/* Icon */}
                    <Icon className={`h-7 w-7 transition-colors duration-300 ${
                      isFirst
                        ? "text-[#0000b9]"
                        : isLast
                        ? "text-emerald-600"
                        : "text-neutral-400 group-hover:text-[#0000b9]"
                    }`} />
                  </div>

                  {/* Text block below node */}
                  <div className="absolute top-[48px] -translate-x-1/2 text-center w-[220px] flex flex-col items-center pt-1">
                    <h3 className={`font-extrabold text-[15px] leading-tight mt-1 mb-1.5 transition-colors duration-300 ${
                      isFirst
                        ? "text-[#0000b9]"
                        : isLast
                        ? "text-neutral-900 group-hover:text-emerald-600"
                        : "text-neutral-900 group-hover:text-[#0000b9]"
                    }`}>
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
          <div className="relative flex flex-col gap-7 lg:hidden max-w-lg mx-auto">
            {/* Animated vertical conduit running down the center of the nodes */}
            <div className="absolute left-[24px] -translate-x-1/2 top-6 bottom-6 w-2 pointer-events-none z-0">
              <div className="absolute inset-0 bg-neutral-900/10 rounded-full blur-[2px]" />
              <div className="absolute inset-0 bg-[#1e293b] rounded-full" />
              <div className="absolute inset-[1.5px] rounded-full mobile-electric-flow" />
              <div className="absolute left-[2.5px] top-[2px] bottom-[2px] w-[1px] bg-white/75 rounded-full" />
            </div>

            {steps.map((s, i) => {
              const Icon = s.icon;
              const isFirst = i === 0;
              const isLast = i === steps.length - 1;

              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-start gap-4 group text-left"
                >
                  {/* Circle node - width 48px, centered on the conduit */}
                  <div className={`relative shrink-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.07)] border flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105 ${
                    isFirst
                      ? "border-[#0000b9]/30"
                      : isLast
                      ? "border-emerald-500/30"
                      : "border-slate-100 group-hover:border-[#0000b9]/30"
                  }`}>
                    {/* Step badge */}
                    <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center border border-white ${
                      isLast ? "bg-emerald-600" : "bg-[#0000b9]"
                    }`}>
                      <span className="text-white text-[8px] font-black">{i + 1}</span>
                    </div>
                    <div className="absolute inset-0.5 rounded-full border border-transparent group-hover:border-[#0000b9]/40 transition-colors duration-300" />
                    <Icon className={`h-5 w-5 transition-colors duration-300 ${
                      isFirst
                        ? "text-[#0000b9]"
                        : isLast
                        ? "text-emerald-600"
                        : "text-neutral-400 group-hover:text-[#0000b9]"
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className={`font-extrabold text-[15px] sm:text-base leading-tight mt-0 mb-1 transition-colors duration-300 ${
                      isFirst
                        ? "text-[#0000b9]"
                        : isLast
                        ? "text-neutral-900 group-hover:text-emerald-600"
                        : "text-neutral-900 group-hover:text-[#0000b9]"
                    }`}>
                      {s.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-medium">
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
