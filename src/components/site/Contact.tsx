import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Send,
} from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://formsubmit.co/ajax/handymanathome@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Free Estimate Request from ${data.name || 'Website Visitor'}`,
          _template: "table",
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Form error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-[80px] bg-white border-b border-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        
        {/* Header / CTA */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#0000b9]/10 border border-[#0000b9]/25 text-[#0000b9] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0000b9] animate-pulse" />
            <span>Free Estimate &amp; Consultation</span>
          </div>

          {/* Headline */}
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#090e24] leading-tight tracking-tight mb-4">
            Ready to Transform Your Space?
          </h2>

          {/* Text */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            Contact us today for a FREE, no-obligation estimate. We're happy to discuss your project and provide a transparent quote.
          </p>

          {/* Call Us Button */}
          <div className="flex justify-center">
            <a
              href="tel:2148141444"
              className="inline-flex items-center justify-center gap-2.5 bg-[#0000b9] hover:bg-[#1526d4] text-white px-8 py-4 rounded-full font-extrabold text-sm uppercase tracking-wider shadow-glow hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us! (214) 814-1444</span>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#090e24] via-[#0d1740] to-[#0000b9] text-white p-8 lg:p-10 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-[#0000b9]/40 blur-3xl pointer-events-none" />

            <div className="relative text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Handyman At Home HQ
              </span>
              <h3 className="text-2xl font-black uppercase tracking-wider text-white">
                Contact Details
              </h3>
              <p className="mt-2 text-sm text-slate-300 font-normal leading-relaxed">
                Reach our team directly for inquiries, on-site walkthroughs, or urgent emergency repairs.
              </p>

              <ul className="mt-8 space-y-6">
                <Item
                  icon={Phone}
                  label="Direct Lines"
                  value="(214) 814-1444 / (214) 814-1490"
                  href="tel:+12148141444"
                  isCall
                />
                <Item
                  icon={Mail}
                  label="Email Address"
                  value="handymanathome@gmail.com"
                  href="mailto:handymanathome@gmail.com"
                />
                <Item
                  icon={MapPin}
                  label="Office Location"
                  value="1730 Newlin Dr, DFW, TX 75125, United States"
                />
                <Item
                  icon={Clock}
                  label="Operating Hours"
                  value="7am to 9pm Mon-Fri | 24/7 Emergency Services"
                />
              </ul>
            </div>

            <div className="relative mt-8 pt-6 border-t border-white/15 flex items-center gap-3 text-left">
              <ShieldCheck className="h-5 w-5 text-sky-400 shrink-0" />
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-200">
                Licensed &amp; Insured General Contractor &bull; DFW, TX
              </span>
            </div>
          </motion.div>

          {/* Right: Estimate Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-center"
          >
            <div className="mb-6 text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#090e24] tracking-tight">
                Free Estimate
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                Fill out the quick form below and our estimator will get back to you promptly.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="grid place-items-center text-center py-12"
                >
                  <div className="grid place-items-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-sm">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-black text-[#090e24] uppercase tracking-wider">
                    Thank You!
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 font-medium max-w-sm">
                    Your estimate request has been submitted. A Handyman At Home representative will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <Field
                      label="Name"
                      name="name"
                      placeholder="Your Full Name"
                      required
                    />

                    {/* Email */}
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />

                    {/* Phone */}
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="(214) 814-1444"
                      required
                    />

                    {/* Address */}
                    <Field
                      label="Address"
                      name="address"
                      placeholder="Street, City, TX (e.g. Dallas, TX)"
                      required
                    />

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <Label>Message</Label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your remodeling, repair, painting, or handyman needs..."
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#0000b9]/10 focus:border-[#0000b9] focus:bg-white transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Send Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={loading}
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0000b9] hover:bg-[#1526d4] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-glow hover:brightness-110 cursor-pointer transition-all duration-300 disabled:opacity-50 mt-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>{loading ? "Sending..." : "Send"}</span>
                  </motion.button>

                  <p className="text-center text-[11px] text-slate-400 font-medium pt-1">
                    Transparent, honest pricing • No obligations • Privacy respected
                  </p>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  label,
  value,
  href,
  isCall,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
  isCall?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`grid place-items-center h-10 w-10 rounded-xl text-white shrink-0 transition-all duration-300 ${
          isCall 
            ? "bg-[#0000b9] shadow-md" 
            : "bg-white/10 border border-white/15 hover:bg-white/20"
        }`}
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      <div className="text-left">
        <div className="text-[9px] uppercase tracking-wider text-slate-300 font-bold">
          {label}
        </div>
        <div
          className={`font-display font-bold leading-tight ${isCall ? "text-base sm:text-lg text-white" : "text-xs sm:text-sm text-slate-100"}`}
        >
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <li>
      <motion.a
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        href={href}
        className="block hover:opacity-95 transition-opacity"
      >
        {inner}
      </motion.a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: any) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#0000b9]/10 focus:border-[#0000b9] focus:bg-white transition-all duration-300"
      />
    </div>
  );
}
