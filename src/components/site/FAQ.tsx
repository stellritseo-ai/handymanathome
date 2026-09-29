import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqVariants: any = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

const answerVariants: any = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

const faqs = [
  {
    q: "What services does Handyman At Home provide?",
    a: "We are a full-service general contractor handling Kitchen & Bathroom Remodeling, Interior & Exterior Painting, Roofing Repairs & Installation, Plumbing Services, Landscaping & Outdoor Work, and a comprehensive range of handyman repairs for both residential and commercial properties."
  },
  {
    q: "What areas in DFW do you serve?",
    a: "We proudly serve homeowners and businesses across Dallas, Fort Worth, TX, and surrounding communities including Watauga, Ennis, Lancaster, DeSoto, Cedar Hill, Duncanville, Red Oak, Arlington, Grand Prairie, Irving, and anywhere within a 40-mile radius."
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, absolutely! Handyman At Home is fully licensed as a general contractor and carries comprehensive liability insurance coverage across Texas to protect your home or business during every project."
  },
  {
    q: "How do I get an estimate, and is it really free?",
    a: "Getting an estimate is 100% free with no obligation! You can call us directly at (214) 814-1444 or (214) 814-1490, or fill out our online Free Estimate form. We will discuss your project and provide a transparent, upfront quote."
  },
  {
    q: "Do you offer 24/7 emergency repair services?",
    a: "Yes! If you have a plumbing leak, emergency roof damage, or broken lock in the middle of the night or on weekends, our emergency team is on call 24/7 to provide rapid, reliable repairs."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-[80px] bg-[#fafbfc] border-b border-slate-100 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full text-left flex flex-col items-start"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0000b9]/20 bg-[#0000b9]/5 text-[#0000b9] text-[11px] font-black uppercase tracking-widest mb-4 shadow-sm select-none">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>

            {/* Heading */}
            <h2 className="leading-[1.2] text-neutral-900 tracking-tight font-extrabold text-[28px] sm:text-[36px] lg:text-[42px] mb-4">
              Frequently Asked <span className="text-[#0000b9]">Questions</span>
            </h2>

            {/* Description */}
            <p className="text-[15px] text-neutral-600 leading-[1.7] max-w-[560px] mb-7 font-normal">
              Have questions about our contractor and handyman services? We’ve answered the most common questions below. If you need immediate assistance or a custom quote, call our DFW dispatch directly at <strong className="text-slate-900">(214) 814-1444</strong>.
            </p>

            {/* High-quality Project Showcase Image */}
            <div className="w-full aspect-[16/8] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Handyman At Home Team"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Accordion Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200/80 shadow-sm"
          >
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={faqVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`w-full rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border border-[#0000b9]/40 shadow-sm"
                        : "border border-slate-200/70 bg-slate-50/50 hover:border-[#0000b9]/30"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`w-full text-left flex items-center justify-between px-5 py-[16px] transition-all duration-300 cursor-pointer select-none ${
                        isOpen
                          ? "bg-[#0000b9] text-white font-extrabold"
                          : "bg-white text-neutral-900 font-semibold hover:text-[#0000b9]"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span className={`text-[14px] leading-snug pr-4 ${isOpen ? "text-white" : "text-neutral-800"}`}>
                        Q: {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-[18px] h-[18px] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-white" : "text-neutral-400"
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          variants={answerVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          className="overflow-hidden bg-white"
                        >
                          <div className="h-px bg-slate-100 mx-5" />
                          <div className="px-5 py-4">
                            <p className="text-[13.5px] text-slate-600 leading-[1.7] font-normal">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
