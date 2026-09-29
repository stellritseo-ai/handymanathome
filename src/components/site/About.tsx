import { useRef, useEffect } from "react";
import { Phone, CheckCircle2, ShieldCheck, Clock, Award, Star, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import welcomeVideo from "@/assets/welcom-handyman.mp4";
import craftsmanImg from "@/assets/about-craftsman.jpg";

const keyPillars = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Comprehensive liability coverage and guaranteed master craftsmanship on every job.",
  },
  {
    icon: Award,
    title: "Over 24 Years Experience",
    desc: "Serving Dallas–Fort Worth homeowners and businesses proudly since 2001.",
  },
  {
    icon: Clock,
    title: "24/7 Rapid Response",
    desc: "Immediate emergency dispatch and fast, hassle-free estimates across the Metroplex.",
  },
  {
    icon: Sparkles,
    title: "Turnkey Quality",
    desc: "From full kitchen & bath remodels to routine handyman repairs—done right the first time.",
  },
];

const duplicatedPillars = [...keyPillars, ...keyPillars, ...keyPillars];

export function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-white via-slate-50/60 to-white"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[480px] h-[480px] bg-[#0000b9]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[520px] h-[520px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center gap-10">

          {/* ── Left Column ── */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000b9] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000b9]" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0000b9]">
                About Handyman At Home
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-3 text-[26px] sm:text-[36px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Dallas–Fort Worth's Trusted Partner for{" "}
              <span className="text-[#0000b9]">Remodeling &amp; Repairs</span>
            </h2>

            {/* Sub-headline */}
            <p className="mt-2 text-base sm:text-lg font-semibold text-slate-700 tracking-tight">
              Full-Service General Contractor &amp; Handyman Excellence Since 2001
            </p>

            {/* Body */}
            <p className="mt-3 text-[14.5px] sm:text-base leading-relaxed text-slate-700 max-w-2xl">
              For over two decades, Handyman At Home has been the preferred contractor for homeowners and commercial property managers throughout Dallas, Fort Worth, and the surrounding Metroplex. From luxury kitchen and bathroom remodels, custom carpentry, and roofing restoration to plumbing fixes and quick turnaround repairs—no project is too large or too small.
            </p>

            {/* Marquee Pillars */}
            <div className="mt-7 w-full overflow-hidden relative py-1.5" style={{ maskImage: "linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)" }}>
              <div className="pillars-marquee-track">
                {duplicatedPillars.map((pillar, index) => {
                  const IconComponent = pillar.icon;
                  return (
                    <div
                      key={`${pillar.title}-${index}`}
                      className="w-[280px] shrink-0 flex items-start gap-3 p-3.5 bg-white border border-slate-200 shadow-sm cursor-default select-none"
                      style={{ borderRadius: "10px" }}
                    >
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#0000b9]/10 text-[#0000b9]"
                        style={{ borderRadius: "8px" }}
                      >
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[13px] font-bold text-slate-900 leading-tight">{pillar.title}</h4>
                        <p className="text-[11.5px] text-slate-500 leading-snug mt-1 line-clamp-2">{pillar.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0000b9] hover:bg-[#0000a0] text-white font-extrabold text-sm px-8 py-3.5 shadow-lg transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white text-slate-800 font-bold text-sm px-7 py-3.5 transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <Phone className="h-4 w-4 text-[#0000b9]" />
                <span>Call (214) 814-1444</span>
              </button>
            </div>
          </div>

          {/* ── Right Column: Visual ── */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5">

            {/* Arch wrapper — explicit height set via inline style to guarantee rendering */}
            <div
              className="relative flex-shrink-0"
              style={{ width: "280px", height: "420px" }}
            >
              {/* Arch Video Container */}
              <div
                className="relative w-full h-full overflow-hidden border-[5px] border-white bg-slate-900"
                style={{
                  borderRadius: "140px 140px 48px 48px",
                  boxShadow: "0 25px 60px -15px rgba(9,14,36,0.2)",
                }}
              >
                <video
                  ref={videoRef}
                  src={welcomeVideo}
                  playsInline
                  loop
                  muted
                  autoPlay
                  preload="auto"
                  className="w-full h-full object-cover object-center"
                >
                  <source src={welcomeVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Craftsman Image Circle — bottom-right */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full overflow-hidden border-[4px] border-white bg-slate-200 absolute z-20"
                style={{
                  width: "140px",
                  height: "140px",
                  bottom: "-16px",
                  right: "-16px",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.22)",
                }}
              >
                <img
                  src={craftsmanImg}
                  alt="Master Craftsman at Work"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* 24+ Years Badge — top-right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full border-[4px] border-white absolute z-30 flex flex-col items-center justify-center text-center text-white select-none"
                style={{
                  width: "110px",
                  height: "110px",
                  top: "16px",
                  right: "-16px",
                  background: "linear-gradient(135deg, #0000b9, #0e21d6, #00008f)",
                  boxShadow: "0 10px 30px rgba(0,0,185,0.45)",
                  padding: "8px",
                }}
              >
                <div className="flex items-center gap-0.5 text-amber-300 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-1.5 w-1.5 fill-current" />
                  ))}
                </div>
                <span className="text-xl font-black leading-none">24+</span>
                <span className="text-[7px] font-bold uppercase tracking-widest text-blue-100 mt-0.5">Years Of</span>
                <span className="text-[6.5px] font-bold uppercase tracking-widest text-blue-200 leading-none">Excellence</span>
              </motion.div>
            </div>

            {/* Trust Badge Card — normal document flow, always visible */}
            <div
              className="bg-white border border-slate-200 rounded-2xl p-3 flex items-center justify-between gap-3 w-full max-w-[320px]"
              style={{ boxShadow: "0 8px 30px -8px rgba(9,14,36,0.14)" }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">GENERAL CONTRACTOR</p>
                  <p className="text-sm font-extrabold text-slate-900 leading-tight">Handyman At Home</p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">100% Satisfaction Guaranteed</p>
                </div>
              </div>
              <span className="shrink-0 text-[8px] font-black text-[#0000b9] bg-[#0000b9]/10 px-2.5 py-1.5 rounded-full uppercase tracking-wider">SINCE 2001</span>
            </div>

          </div>
        </div>
      </div>

      {/* Marquee Styles */}
      <style>{`
        @keyframes marquee-pillars {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .pillars-marquee-track {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: marquee-pillars 24s linear infinite;
        }
        .pillars-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
