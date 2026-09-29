import { Phone, Mail, Award, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0000b9] via-[#0b16a8] to-[#0000b9] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-xl">
      {/* Decorative background glow & pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left / Center content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge: BBB ACCREDITED BUSINESS */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white mb-4 shadow-sm"
            >
              <Award className="h-4 w-4 text-amber-300 shrink-0" />
              <span>BBB ACCREDITED BUSINESS</span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
              Ready to Transform Your Space?
            </h2>

            {/* Sub-text */}
            <p className="text-slate-100 text-sm sm:text-base max-w-2xl font-medium leading-relaxed opacity-95">
              Contact us today for a FREE, no-obligation estimate. We’re happy to discuss your project and provide a transparent quote.
            </p>

            {/* Direct Contact Links */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm">
              <a
                href="tel:2148141444"
                className="inline-flex items-center gap-2 font-bold text-white hover:text-sky-200 transition-colors"
              >
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span>(214) 814-1444 <span className="opacity-75 font-normal">Or</span> (214) 814-1490</span>
              </a>

              <a
                href="mailto:handymanathome@gmail.com"
                className="inline-flex items-center gap-2 font-bold text-white hover:text-sky-200 transition-colors"
              >
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span>handymanathome@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right CTA Button: Let's Chat */}
          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0000b9] hover:bg-slate-50 font-extrabold text-sm uppercase tracking-wider rounded-full px-8 py-4 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <MessageSquare className="h-4 w-4 text-[#0000b9]" />
              <span>Let's Chat</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
