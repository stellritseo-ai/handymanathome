import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What services does Handyman At Home provide?",
    a: "We are a full-service Texas general contractor handling Kitchen & Bathroom Remodeling, Interior & Exterior Painting, Roofing Repairs & Replacement, Plumbing Repairs & Fixtures, Siding & Trim Restoration, Custom Decks, and a comprehensive range of residential & commercial handyman repairs.",
  },
  {
    q: "What areas in Dallas–Fort Worth do you serve?",
    a: "We proudly serve homeowners and commercial property managers throughout Dallas, Fort Worth, and neighboring communities within a 40-mile radius—including Arlington, Plano, Garland, Irving, Grand Prairie, Frisco, McKinney, Carrollton, DeSoto, Cedar Hill, Duncanville, Lancaster, and Red Oak.",
  },
  {
    q: "Are you fully licensed, bonded, and insured in Texas?",
    a: "Yes, 100%. Handyman At Home is fully licensed as a general contractor and carries comprehensive general liability and property damage insurance across Texas. Every technician on your job is background-checked, certified, and strictly adheres to Texas building codes.",
  },
  {
    q: "How do I get an estimate, and is it really free?",
    a: "Getting an estimate is completely free with zero obligation! You can call us directly at (214) 814-1444, email us, or submit an online request. For most repairs and remodeling projects, we provide a detailed, itemized upfront quote with clear fixed pricing and no hidden fees.",
  },
  {
    q: "Do you offer 24/7 emergency repair services?",
    a: "Yes! If you experience an urgent pipe leak, storm roof damage, broken door lock, or structural safety issue, our emergency repair technicians are on call 24 hours a day, 7 days a week across the DFW metroplex.",
  },
  {
    q: "Do you guarantee your workmanship and materials?",
    a: "Absolutely. All our craftsmanship is backed by our 100% Satisfaction Guarantee and comprehensive labor warranty. We only install high-grade, manufacturer-warranted building materials and inspect every detail before project sign-off.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
      className="relative py-[60px] bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-slate-200/70 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#0000b9]/[0.03] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-sky-400/[0.035] rounded-full blur-[130px] -z-10" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ── Left Column: Headline & Direct Dispatch Card (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#0000b9]/20 text-[#0000b9] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 shadow-2xs select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000b9] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000b9]" />
              </span>
              <span>Clear Answers &amp; Honest Advice</span>
            </div>

            {/* Headline */}
            <h2 className="leading-[1.2] text-neutral-900 tracking-tight font-extrabold text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[35px] mb-3 whitespace-normal sm:whitespace-nowrap">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#0000b9] via-[#0d1fd6] to-[#2563eb] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-[14.5px] sm:text-[15px] text-slate-600 leading-relaxed font-normal mb-6">
              Have questions about an upcoming home remodel, roof repair, or emergency plumbing issue? Here are direct answers to what DFW property owners ask us most.
            </p>

            {/* Direct Support & Dispatch Card */}
            <div className="w-full rounded-2xl bg-gradient-to-br from-[#090e24] via-[#0b1338] to-[#0000b9] p-6 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>DFW Dispatch Standby</span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-white leading-tight mb-1">
                    Still Have Questions?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Speak directly with a licensed master craftsman. We provide fast answers, honest recommendations, and free on-site consultations.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-sky-50 text-[#0000b9] font-extrabold text-xs px-5 py-3 shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-200 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0000b9]" />
                    <span>(214) 814-1444</span>
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs px-4 py-3 transition-all duration-200 cursor-pointer"
                  >
                    <span>Free Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Average phone response time: Under 15 minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Pixel-Perfect Accordion (7 cols) ── */}
          <div className="lg:col-span-7 w-full flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const qNum = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={index}
                  className={`w-full rounded-2xl transition-all duration-300 overflow-hidden border ${
                    isOpen
                      ? "bg-white border-[#0000b9]/30 shadow-[0_8px_24px_rgba(0,0,185,0.08)]"
                      : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-[#0000b9]/25 shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-4.5 cursor-pointer select-none transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span
                        className={`text-xs font-black tracking-wider transition-colors duration-200 ${
                          isOpen ? "text-[#0000b9]" : "text-slate-400"
                        }`}
                      >
                        {qNum}
                      </span>
                      <span
                        className={`text-[14.5px] sm:text-[15px] font-extrabold leading-snug transition-colors duration-200 ${
                          isOpen ? "text-[#0000b9]" : "text-neutral-900 hover:text-[#0000b9]"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0000b9] text-white rotate-180"
                          : "bg-slate-100 text-slate-500 group-hover:bg-[#0000b9]/10 group-hover:text-[#0000b9]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="h-px bg-slate-100 mx-5 sm:mx-6" />
                        <div className="px-5 sm:px-6 pt-3 pb-5 pl-11 sm:pl-13">
                          <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-[1.7] font-normal">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
