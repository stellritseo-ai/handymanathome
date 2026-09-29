import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import serviceImg from "@/assets/service-house.jpg";

export function About() {
  return (
    <section id="about" className="relative py-[60px] overflow-hidden bg-slate-50/60">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0000b9]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-7"
          >
            {/* Tag: Welcome To */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#0000b9]/20 px-4 py-1.5 rounded-full shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0000b9]">
                Welcome To
              </span>
            </div>
            
            {/* Headline */}
            <h2 
              className="text-slate-900 tracking-tight text-[30px] leading-[38px] lg:text-[42px] lg:leading-[50px]"
              style={{
                fontWeight: 800,
                marginTop: "16px",
                marginBottom: "4px"
              }}
            >
              Handyman At Home
            </h2>

            {/* Sub-headline */}
            <h3
              className="text-[#0000b9] tracking-tight text-[18px] leading-[26px] lg:text-[22px] lg:leading-[30px]"
              style={{
                fontWeight: 700,
                marginBottom: "12px"
              }}
            >
              General Contractor &amp; Handyman Services
            </h3>
            
            {/* Body Text */}
            <p 
              className="mt-2 font-normal text-slate-700"
              style={{
                fontSize: "16px",
                lineHeight: "30px",
                fontWeight: 400,
              }}
            >
              For over two decades, Handyman At Home has been the trusted name for homeowners and businesses in Dallas, Fort Worth, TX, and beyond. Since 2001, our mission has been simple: to provide high-quality, reliable, and affordable handyman and contracting services. From a leaky faucet to a full kitchen remodel, no job is too big or too small. We pride ourselves on our professionalism, punctuality, and the craftsmanship we bring to every project.
            </p>
            
            {/* Info Cards Row */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Card 1: Phone */}
              <a
                href="tel:2148141444"
                className="flex items-center gap-4 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#0000b9]/40 transition-all group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0000b9]/10 text-[#0000b9] group-hover:scale-105 transition-transform duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Call Us Today:</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-800">(214) 814-1444</p>
                </div>
              </a>

              {/* Card 2: Email */}
              <a
                href="mailto:handymanathome@gmail.com"
                className="flex items-center gap-4 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#0000b9]/40 transition-all group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0000b9]/10 text-[#0000b9] group-hover:scale-105 transition-transform duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Email Us:</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-800 break-all">handymanathome@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Buttons Row */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 w-full">
              <a
                href="tel:2148141444"
                className="inline-flex items-center justify-center rounded-full bg-[#090e24] hover:bg-[#1a2348] text-white font-bold text-sm px-7 py-4 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                Call Now To Get Started!
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0000b9] hover:bg-[#1526d4] text-white font-bold text-sm px-7 py-4 shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                Get Your Free Consultation
              </a>
            </div>
          </motion.div>

          {/* Right Column: Graphics layout mirroring the upload image structure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center py-10 relative mt-10 lg:mt-0"
          >
            {/* Decorative Grid Pattern */}
            <div className="absolute -right-10 -top-10 w-44 h-44 bg-[radial-gradient(#0000b9_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 -z-10" />

            {/* Soft light glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#0000b9]/10 via-[#3b82f6]/5 to-transparent rounded-[4rem] blur-3xl -z-20 pointer-events-none" />

            {/* Main Arch Container */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative h-[480px] w-[320px] rounded-t-full rounded-b-[4.5rem] overflow-hidden border-8 border-white shadow-[0_25px_60px_-15px_rgba(0,0,185,0.2)] bg-slate-100 z-10 group"
            >
              <img
                src={serviceImg}
                alt="Handyman At Home Contracting & Remodeling"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Small Overlapping Circular Image */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-[210px] w-[210px] rounded-full overflow-hidden border-8 border-white shadow-[0_20px_45px_-10px_rgba(0,0,0,0.2)] absolute -bottom-4 right-2 lg:-right-4 z-20 bg-slate-200"
            >
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                alt="Handyman At Home Remodel Services"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            {/* Overlapping Badge (24+ Years of Experience) */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-[140px] w-[140px] rounded-full bg-[#0000b9] border-8 border-white shadow-[0_15px_35px_-8px_rgba(0,0,185,0.4)] absolute top-8 right-2 lg:-right-10 z-30 flex flex-col items-center justify-center text-center p-2 hover:scale-105 transition-transform duration-300 select-none cursor-pointer"
            >
              <span className="text-3xl font-black text-white leading-none">24+</span>
              <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest mt-1">Years Of</span>
              <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest leading-none">Experience</span>
            </motion.div>

            {/* Contractor Badge Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl p-4.5 flex items-center justify-between gap-4 absolute bottom-4 left-2 lg:-left-12 z-30 min-w-[295px] hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="text-left">
                <p className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest">GENERAL CONTRACTOR</p>
                <p className="text-sm font-extrabold text-slate-900 mt-0.5">Handyman At Home</p>
              </div>
              <div className="shrink-0">
                <span className="text-[9px] font-black text-[#0000b9] bg-[#0000b9]/10 px-2.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  SINCE 2001
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
