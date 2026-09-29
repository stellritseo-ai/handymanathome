import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4";
import { Phone, CheckCircle2, ChevronRight, Star, ShieldCheck, Clock, MapPin, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "./Nav";

export function Hero() {
  return (
    <div className="w-full bg-[#070b1a] relative">
      <Nav />
      <section
        className="relative w-full overflow-hidden min-h-[580px] sm:min-h-[640px] md:min-h-[700px] flex items-center justify-start text-left px-4 sm:px-6 lg:px-8 pt-[115px] sm:pt-[130px] md:pt-[140px] lg:pt-[150px] pb-12 sm:pb-16 md:pb-20"
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
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* Premium Dark gradient overlay for ultra-crisp legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#070b1a]/95 via-[#070b1a]/85 to-[#070b1a]/55 z-10"
        />

        {/* Decorative subtle ambient radial light */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#0000b9]/30 rounded-full blur-[120px] pointer-events-none z-10" />

        {/* Dynamic content container */}
        <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-white">

          {/* Left Column: Headline, CTAs, Trust Metrics */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start space-y-4 sm:space-y-5 md:space-y-6">

            {/* Badge: Residential & Commercial */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm select-none"
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
              className="text-white font-extrabold tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] text-[28px] leading-[38px] sm:text-[38px] sm:leading-[48px] md:text-[46px] md:leading-[56px] lg:text-[52px] lg:leading-[62px] xl:text-[56px] xl:leading-[66px]"
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
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0000b9] hover:bg-[#1526d4] px-7 sm:px-8 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,185,0.45)] hover:shadow-[0_6px_25px_rgba(0,0,185,0.6)] w-full sm:w-auto"
              >
                <span>Book Service</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="tel:2148141444"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#090e24] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call: (214) 814-1444</span>
              </a>
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

          {/* Right Column: Premium Floating Dispatch / Quick Connect Card (Desktop lg+) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col"
          >
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 xl:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white relative overflow-hidden">
              {/* Top Accent Gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0000b9] via-sky-400 to-[#1526d4]" />

              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#0000b9] text-white flex items-center justify-center font-bold shadow-md">
                    <Wrench className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm tracking-wide text-white leading-tight">Fast Dispatch</h3>
                    <p className="text-[10.5px] text-sky-300 font-medium">Dallas-Fort Worth Metro</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available Now</span>
                </div>
              </div>

              <div className="py-4 space-y-2.5 text-xs text-slate-200">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Licensed &amp; Insured General Contractor</span>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Remodeling, Painting, Roofing &amp; Plumbing</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Same-Day Estimates &amp; 24/7 Emergency Service</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>40-Mile Service Coverage Across DFW</span>
                </div>
              </div>

              {/* Direct Call Box */}
              <div className="mt-2 p-3.5 rounded-2xl bg-white/10 border border-white/15 text-center space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                  Speak Directly With An Expert
                </span>
                <a
                  href="tel:2148141444"
                  className="block text-xl font-black text-white hover:text-sky-300 transition-colors"
                >
                  (214) 814-1444
                </a>
                <span className="text-[10px] text-slate-400 block">Or (214) 814-1490 • Free Consultation</span>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className="mt-4 flex items-center justify-center gap-2 w-full rounded-full bg-white text-[#0000b9] font-black text-xs uppercase tracking-wider py-3 hover:bg-sky-50 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request Free Estimate</span>
                <ChevronRight className="h-4 w-4 text-[#0000b9]" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

