import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import backVideo from "@/assets/back.mp4";
import bbbLogo from "@/assets/bbb.svg";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10 shadow-2xl">
      {/* Background Cinematic Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={backVideo}
          className="absolute inset-0 w-full h-full object-cover opacity-95 scale-105"
        >
          <source src={backVideo} type="video/mp4" />
        </video>
      </div>

      {/* Lighter Gradient Overlay so video is vividly visible while text stays sharp */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03071e]/75 via-[#0000b9]/40 to-[#040e30]/65 z-10 pointer-events-none" />

      {/* Ambient Radial Lights */}
      <div className="absolute -top-24 right-1/4 w-[480px] h-[480px] bg-sky-400/20 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute -bottom-24 left-10 w-[360px] h-[360px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none z-10" />

      <div className="mx-auto max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Accreditation, Value Proposition & Trust Badges */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* BBB A+ Accredited Business Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 pr-3.5 sm:pr-4 shadow-lg mb-6 group hover:bg-white/15 transition-all max-w-full text-left"
            >
              <div className="bg-white rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-xs shrink-0">
                <img
                  src={bbbLogo}
                  alt="BBB Accredited Business"
                  className="h-6 sm:h-8 w-auto object-contain"
                />
              </div>
              <div className="text-left border-l border-white/20 pl-2.5 sm:pl-3 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="bg-amber-400 text-slate-950 text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs shrink-0">
                    Grade A+
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
                    Accredited Business
                  </span>
                </div>
                <p className="text-[10.5px] sm:text-[11px] text-blue-100 font-medium leading-tight mt-0.5 truncate">
                  Verified Highest Standards of Trust &amp; Integrity
                </p>
              </div>
            </motion.div>

            {/* Headline */}
            <h2
              className="text-[26px] xs:text-[29px] sm:text-[33px] -mt-[10px] -mb-[5px] font-black tracking-tight text-white leading-[1.22] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]"
            >
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-100 to-white">
                Dallas–Fort Worth
              </span>{" "}
              Property?
            </h2>

            {/* Sub-narrative */}
            <p className="mt-3.5 text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed opacity-95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
              From full turnkey remodels and commercial renovations to reliable everyday handyman repairs—partner with DFW’s trusted A+ accredited contractor. Contact us today for a fast, free estimate.
            </p>

            {/* Trust Chips */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-5 text-xs text-slate-200">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Licensed &amp; Fully Insured</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Same-Day On-Site Estimates</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Satisfaction Guarantee</span>
              </span>
            </div>
          </div>

          {/* Right Column: Premium Contact & Dispatch Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col gap-4 text-center sm:text-left relative overflow-hidden">
              
              {/* Card Header Beacon */}
              <div className="flex items-center justify-between pb-1 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                    Contractors Available Now
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-300">
                  DFW Metro Dispatch
                </span>
              </div>

              {/* Direct Phone Numbers */}
              <div className="space-y-1">
                <p className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                  Speak Directly With An Expert
                </p>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:2148141444"
                    className="text-2xl sm:text-3xl font-black text-white hover:text-sky-300 transition-colors tracking-tight flex items-center gap-2.5 justify-center sm:justify-start group"
                  >
                    <div className="h-9 w-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#0000b9] transition-colors">
                      <Phone className="h-4.5 w-4.5 text-sky-300" />
                    </div>
                    <span>(214) 814-1444</span>
                  </a>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-300 pl-1">
                    <span>Or</span>
                    <a
                      href="tel:2148141490"
                      className="font-bold text-white hover:text-sky-300 underline underline-offset-2"
                    >
                      (214) 814-1490
                    </a>
                    <span>•</span>
                    <span className="text-emerald-300 font-semibold">Free Consultation</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black text-sm uppercase tracking-wider px-6 py-3.5 shadow-[0_4px_20px_rgba(251,191,36,0.35)] hover:shadow-[0_6px_25px_rgba(251,191,36,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white text-xs font-bold py-2.5 transition-all cursor-pointer"
                >
                  <Mail className="h-3.5 w-3.5 text-sky-300" />
                  <span>handymanathome@gmail.com</span>
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
