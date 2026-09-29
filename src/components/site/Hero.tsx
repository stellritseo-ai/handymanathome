import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4";
import { Phone, CheckCircle2, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#070b1a] min-h-[540px] sm:min-h-[580px] md:min-h-[640px] flex items-center justify-start text-left px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Background Video (with fallback image behind it) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Static image fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        {/* Local Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Lighter Dark gradient overlay so video is much more visible while text remains crisp */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#070b1a]/80 via-[#070b1a]/55 to-[#070b1a]/30 z-10"
      />

      {/* Decorative subtle ambient radial light */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#0000b9]/25 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Dynamic content container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start text-white">

        {/* Headline, CTAs, Trust Metrics */}
        <div className="max-w-3xl lg:max-w-4xl flex flex-col items-start space-y-4 sm:space-y-5 md:space-y-6">

          {/* Badge: Residential & Commercial */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 sm:mt-12 lg:mt-[105px] inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm select-none"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Residential &amp; Commercial</span>
            <span className="text-white/30">•</span>
            <span className="text-sky-300 font-semibold tracking-normal text-[10.5px] sm:text-[11.5px] lowercase">Dallas-Fort Worth, TX</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-white font-extrabold tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] text-[26px] xs:text-[30px] sm:text-[37px] leading-[34px] xs:leading-[38px] sm:leading-[47px] -mt-[6px] sm:-mt-[10px] mb-[7px]"
          >
            Quality General Contractor &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white">
              Handyman Services
            </span>{" "}
            in Dallas, Fort Worth, TX
          </motion.h1>

          {/* Sub-headline description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
          >
            Reliable Repairs, Expert Remodeling, and 24/7 Emergency Service? All Just a Call Away.
          </motion.p>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 w-full sm:w-auto"
          >
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0000b9] hover:bg-[#1526d4] px-7 sm:px-8 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,185,0.45)] hover:shadow-[0_6px_25px_rgba(0,0,185,0.6)] w-full sm:w-auto cursor-pointer"
            >
              <span>Book Service</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#090e24] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call: (214) 814-1444</span>
            </button>
          </motion.div>

          {/* Star Rating Trust Widget */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-2 text-slate-300 text-xs select-none pt-1"
          >
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-200">
              Google rating score: 5.0 of 5, based on 9 reviews
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="text-[11px] text-emerald-400 font-semibold hidden sm:inline">
              Verified Local Business
            </span>
          </motion.div>

          {/* Trust Indicators / Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
            className="w-full border-t border-white/15 pt-5 sm:pt-6 mt-1 max-w-2xl text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
              <div className="flex items-center gap-2.5 bg-white/5 sm:bg-transparent p-2.5 sm:p-0 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <h4 className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">Over 24 Yrs Exp</h4>
                  <p className="text-[10px] text-slate-300 font-light">Serving DFW Since 2001</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 sm:bg-transparent p-2.5 sm:p-0 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <h4 className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">Licensed &amp; Insured</h4>
                  <p className="text-[10px] text-slate-300 font-light">General Contractor</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 sm:bg-transparent p-2.5 sm:p-0 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <h4 className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">24/7 Emergency</h4>
                  <p className="text-[10px] text-slate-300 font-light">Repairs Just a Call Away</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
