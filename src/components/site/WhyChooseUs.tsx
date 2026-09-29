import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, CheckCircle2, Shield, Users, Clock, Award } from "lucide-react";

const features = [
  {
    title: "Over 24 Years of Experience",
    desc: "We've been perfecting our craft since 2001, tackling every challenge with expertise.",
  },
  {
    title: "Quality & Reliability Guaranteed",
    desc: "We use quality materials and stand behind our work, ensuring your complete satisfaction.",
  },
  {
    title: "24/7 Emergency Service",
    desc: "Got a plumbing disaster or a broken lock in the middle of the night? We're here to help, anytime.",
  },
  {
    title: "Local & Committed",
    desc: "We're proud to serve our community in DFW and the surrounding 40-mile area.",
  },
];

const stats = [
  { value: "8660", label: "Happy Clients", icon: Users },
  { value: "24", label: "Years Of Experience", icon: Award },
  { value: "99.9%", label: "Satisfaction Guaranteed", icon: CheckCircle2 },
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
    <section id="why-choose-us" className="py-[60px] bg-[#fafbfc] border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14 items-center">

          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center h-full w-full order-2 lg:order-1 text-left"
          >
            <div className="flex flex-col items-start w-full">
              {/* Tag: Why Choose Us */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0000b9]/20 bg-[#0000b9]/5 text-[#0000b9] text-[11px] font-black uppercase tracking-widest mb-4 shadow-sm select-none">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000b9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000b9]"></span>
                </span>
                <span>Why Choose Us</span>
              </div>

              {/* Headline */}
              <h2 className="leading-[1.2] text-neutral-900 tracking-tight font-extrabold text-[28px] sm:text-[34px] lg:text-[40px] mb-4">
                Why DFW Homeowners Trust Us
              </h2>

              {/* Description */}
              <p className="text-slate-600 text-[15px] leading-[26px] mb-6 font-normal">
                With over two decades of dedicated service across Dallas, Fort Worth, and neighboring communities, we provide unparalleled craftsmanship, clear pricing, and 24/7 dependability.
              </p>

              {/* Feature items */}
              <div className="space-y-3 mb-8 w-full">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="group/item flex items-start gap-3 bg-white hover:bg-[#0000b9]/5 p-3 rounded-xl border border-slate-200/70 hover:border-[#0000b9]/30 transition-all duration-300 shadow-sm"
                  >
                    <span className="text-[#0000b9] mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-5 h-5 text-[#0000b9]" />
                    </span>
                    <div>
                      <h3 className="font-extrabold text-[#090e24] text-[15px] leading-snug">
                        {f.title}:
                      </h3>
                      <p className="text-slate-600 font-normal text-sm leading-relaxed mt-0.5">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Stats Grid */}
              <div className="grid grid-cols-3 gap-3 w-full mb-8 pt-2">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="bg-white border border-slate-200/80 rounded-2xl p-3 sm:p-4 text-center shadow-sm flex flex-col items-center justify-center hover:border-[#0000b9]/40 hover:shadow-md transition-all"
                    >
                      <Icon className="w-5 h-5 text-[#0000b9] mb-1.5" />
                      <div className="text-xl sm:text-2xl font-black text-[#0000b9] tracking-tight">
                        {s.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5 leading-tight">
                        {s.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-[#090e24] hover:bg-[#1a2348] text-white text-[12px] font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.97]"
                >
                  Explore Services
                </a>
                <a
                  href="tel:2148141444"
                  className="inline-flex items-center justify-center gap-2 bg-[#0000b9] hover:bg-[#1526d4] text-white text-[12px] font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-glow hover:scale-[1.03] active:scale-[0.97]"
                >
                  Call (214) 814-1444
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Video Showcase Card */}
          <div className="relative w-full order-1 lg:order-2 lg:sticky lg:top-[120px] lg:self-start group/video-container">
            {/* Ambient Glow Backdrop */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0000b9] to-[#3b82f6] rounded-[16px] opacity-15 blur-xl group-hover/video-container:opacity-30 transition-opacity duration-500 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group rounded-[16px] overflow-hidden shadow-2xl border border-slate-100/20 h-[380px] sm:h-[440px] lg:h-[500px] w-full bg-slate-950"
            >
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/m3oqblqp/video/upload/v1782941833/whychoose_oxdrtb.mp4"
                playsInline
                loop
                muted
                autoPlay
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/45 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

              {/* Central Play/Pause Toggle Overlay Button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 bg-slate-950/25"
              >
                <div className={`absolute w-24 h-24 rounded-full bg-[#0000b9]/30 blur-md transition-all duration-300 ${isPlaying ? 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100' : 'scale-100 opacity-100'}`} />

                <div className="relative w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95">
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-white" />
                  ) : (
                    <Play className="w-5 h-5 fill-white translate-x-[2px]" />
                  )}
                </div>
              </button>

              {/* Side Badge: 24/7 Emergency Service (Top Right Corner) */}
              <div className="absolute top-4 right-4 z-30">
                <span className="inline-flex items-center gap-2 bg-[#0000b9] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-white/20 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  24/7 Emergency Service
                </span>
              </div>

              {/* Bottom Glassmorphic Info Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/15 rounded-xl p-4 sm:p-5 shadow-2xl flex items-center justify-between select-none">
                <div className="text-left">
                  <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Handyman At Home
                  </p>
                  <p className="text-xs sm:text-[13px] font-extrabold text-white mt-1">
                    Quality General Contractor &amp; Repairs
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-white bg-[#0000b9] px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md">
                    DFW, TX
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
