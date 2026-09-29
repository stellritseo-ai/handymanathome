import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Phone,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import whyUsVideo from "@/assets/whyus.mp4";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Over 24 Years Experience",
    desc: "Master craftsmanship and comprehensive liability coverage on every residential & commercial project.",
    badge: "Since 2001",
  },
  {
    icon: Sparkles,
    title: "Guaranteed Turnkey Quality",
    desc: "Premium grade materials, code compliance, and backed by our full 100% satisfaction guarantee.",
    badge: "100% Warranty",
  },
  {
    icon: Zap,
    title: "24/7 Rapid Dispatch",
    desc: "Plumbing leak, burst pipe, or urgent storm damage? Our technicians are on standby 24/7 across DFW.",
    badge: "Available Now",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Fixed Pricing",
    desc: "Upfront, itemized estimates provided before work begins. Zero hidden fees or surprise costs.",
    badge: "Upfront Quotes",
  },
];

export function WhyChooseUs() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    if (!video.paused) {
      setIsPlaying(true);
    }

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch((err) => {
        console.error("Video playback failed:", err);
      });
    } else {
      video.pause();
    }
  };

  return (
    <section
      id="why-choose-us"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
      className="relative py-[60px] bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-b border-slate-200/70 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[520px] h-[520px] bg-[#0000b9]/[0.035] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[480px] h-[480px] bg-sky-400/[0.04] rounded-full blur-[130px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-14 items-center">

          {/* ── Left Content Block (60% Width) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center h-full w-full order-2 lg:order-1 text-left lg:col-span-3"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#0000b9]/20 text-[#0000b9] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 shadow-2xs select-none w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000b9] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000b9]" />
              </span>
              <span>Why Choose Handyman At Home</span>
            </div>

            {/* Headline */}
            <h2
              className="text-[25px] xs:text-[28px] sm:text-[32px] -mt-[7px] mb-[5px] leading-[1.2] text-neutral-900 tracking-tight font-extrabold"
            >
              Why Dallas–Fort Worth Property Owners{" "}
              <span className="bg-gradient-to-r from-[#0000b9] via-[#0d1fd6] to-[#2563eb] bg-clip-text text-transparent">
                Trust Us Every Day
              </span>
            </h2>

            {/* Narrative description */}
            <p
              style={{ marginBottom: "15px" }}
              className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-[15px] font-normal max-w-2xl"
            >
              For over two decades, homeowners, commercial property managers, and businesses across Dallas, Fort Worth, and neighboring communities have relied on our licensed craftsmanship, transparent pricing, and 24/7 reliability.
            </p>

            {/* 4 Feature Pillars Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-5">
              {pillars.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative flex flex-col justify-between py-2.5 px-3 rounded-xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,185,0.07)] hover:border-[#0000b9]/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div>
                      {/* Top Row: Icon + Pill Badge */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0000b9]/10 to-sky-500/10 text-[#0000b9] group-hover:scale-105 group-hover:bg-[#0000b9] group-hover:text-white transition-all duration-300 shadow-2xs">
                          <IconComponent className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 group-hover:bg-[#0000b9]/10 group-hover:text-[#0000b9] px-2 py-0.5 rounded-full transition-colors">
                          {item.badge}
                        </span>
                      </div>

                      {/* Pillar Title */}
                      <h3 className="font-extrabold text-neutral-900 text-[13.5px] leading-tight group-hover:text-[#0000b9] transition-colors mb-1">
                        {item.title}
                      </h3>

                      {/* Body Description */}
                      <p className="text-slate-600 font-normal text-[11.5px] leading-[1.38] line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs Bar & Trust Micro-Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0000b9] via-[#0d1fd6] to-[#0000b9] hover:from-[#000099] hover:to-[#0c1bb8] text-white font-extrabold text-sm px-8 py-3.5 shadow-[0_4px_16px_rgba(0,0,185,0.32)] hover:shadow-[0_6px_22px_rgba(0,0,185,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-300 hover:border-[#0000b9] bg-white hover:bg-[#0000b9]/5 text-slate-900 hover:text-[#0000b9] font-bold text-sm px-6 py-3.5 shadow-2xs hover:shadow-xs active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-[#0000b9]" />
                  <span>Call (214) 814-1444</span>
                </button>
              </div>
            </div>

            {/* Review Trust Bar */}
            <div className="mt-5 flex items-center gap-3 text-xs text-slate-500 font-medium">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-slate-700">5.0 Star Rated Contractor</span>
              <span className="text-slate-300">•</span>
              <span>40-Mile DFW Service Coverage</span>
            </div>
          </motion.div>

          {/* ── Right Video Showcase Block (40% Width) ── */}
          <div className="relative w-full order-1 lg:order-2 lg:sticky lg:top-[110px] lg:self-start group/video-container lg:col-span-2">
            
            {/* Ambient Multi-Layer Radial Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0000b9]/30 via-sky-400/20 to-transparent rounded-[36px] blur-3xl group-hover/video-container:opacity-50 transition-opacity duration-700 pointer-events-none -z-10" />

            {/* Outer White Bezel Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative p-2 sm:p-2.5 bg-white/80 backdrop-blur-xl border border-white/60 rounded-[28px] shadow-[0_25px_60px_-15px_rgba(9,14,36,0.22)]"
            >
              {/* Inner Video Container */}
              <div className="relative group rounded-[20px] overflow-hidden bg-slate-950 h-[340px] xs:h-[400px] sm:h-[500px] lg:h-[565px] w-full">
                <video
                  ref={videoRef}
                  src={whyUsVideo}
                  playsInline
                  loop
                  muted
                  autoPlay
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                >
                  <source src={whyUsVideo} type="video/mp4" />
                </video>

                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

                {/* Central Play/Pause Interactive Glass Button */}
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                  className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 bg-slate-950/30"
                >
                  <div
                    className={`absolute w-24 h-24 rounded-full bg-[#0000b9]/35 blur-md transition-all duration-300 ${
                      isPlaying ? "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100" : "scale-100 opacity-100"
                    }`}
                  />
                  <div className="relative w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95">
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-white" />
                    ) : (
                      <Play className="w-5 h-5 fill-white translate-x-[2px]" />
                    )}
                  </div>
                </button>

                {/* Corner Status Pill: Live DFW Dispatch */}
                <div className="absolute top-4 right-4 z-30">
                  <span className="inline-flex items-center gap-2 bg-[#0000b9]/90 text-white text-[10.5px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-white/25 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    24/7 Rapid Dispatch
                  </span>
                </div>

                {/* Bottom Glassmorphic Floating Info Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-4.5 shadow-2xl flex items-center justify-between select-none">
                  <div className="text-left">
                    <p className="text-[10px] text-sky-300 font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Handyman At Home
                    </p>
                    <p className="text-xs sm:text-[13px] font-extrabold text-white mt-0.5">
                      Quality General Contractor &amp; Repairs
                    </p>
                    <p className="text-[10px] text-slate-300 font-medium mt-0.5">
                      Dallas, Fort Worth &amp; Surrounding DFW
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Call Dispatch"
                    className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-r from-[#0000b9] to-[#1526d4] hover:from-[#000099] hover:to-[#0f1cb8] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Phone className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
