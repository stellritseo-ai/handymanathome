import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
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
          _subject: `New Free Estimate Request from ${data.name || "Website Visitor"}`,
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
    <section
      id="contact"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
      className="relative py-[60px] bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-slate-200/70 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#0000b9]/[0.035] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-sky-400/[0.04] rounded-full blur-[130px] -z-10" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#0000b9]/20 text-[#0000b9] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 shadow-2xs select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000b9] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000b9]" />
            </span>
            <span>Free Estimate &amp; Consultation</span>
          </div>

          {/* Headline */}
          <h2
            className="text-[26px] xs:text-[30px] sm:text-[38px] -mt-[6px] font-extrabold text-neutral-900 leading-tight tracking-tight mb-3"
          >
            Ready to Transform{" "}
            <span className="bg-gradient-to-r from-[#0000b9] via-[#0d1fd6] to-[#2563eb] bg-clip-text text-transparent">
              Your Space?
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-2 sm:-mb-6"
          >
            Contact us today for a 100% free, no-obligation estimate.
            <br className="hidden sm:inline" />{" "}
            We provide upfront fixed pricing, guaranteed craftsmanship, and rapid response across the Dallas–Fort Worth metroplex.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ── Left Column: Contact Info Card (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#090e24] via-[#0b1338] to-[#0000b9] text-white p-5 xs:p-7 sm:p-9 shadow-[0_20px_50px_rgba(9,14,36,0.2)] flex flex-col justify-between"
          >
            {/* Ambient Interior Glow */}
            <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#0000b9]/30 blur-3xl pointer-events-none" />

            <div className="relative z-10 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-sky-300 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Handyman At Home HQ</span>
              </div>

              <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight leading-tight">
                Direct Contact &amp; Dispatch
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Reach our local team for fast project scheduling, on-site walkthroughs, or urgent 24/7 emergency dispatch.
              </p>

              {/* Info Items List */}
              <ul className="mt-7 space-y-5">
                <Item
                  icon={Phone}
                  label="Direct Dispatch Numbers"
                  value="(214) 814-1444"
                  subValue="(214) 814-1490 (Secondary)"
                  href="tel:+12148141444"
                  isCall
                />
                <Item
                  icon={Mail}
                  label="Official Email"
                  value="handymanathome@gmail.com"
                  href="mailto:handymanathome@gmail.com"
                />
                <Item
                  icon={MapPin}
                  label="Headquarters &amp; Yard"
                  value="1730 Newlin Dr, DFW, TX 75125"
                  subValue="Serving all DFW communities within 40 miles"
                />
                <Item
                  icon={Clock}
                  label="Operating Hours"
                  value="7:00 AM – 9:00 PM Mon–Fri"
                  subValue="24/7 Rapid Emergency Response on Call"
                />
              </ul>
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="relative z-10 mt-8 pt-5 border-t border-white/15 flex items-center gap-3 text-left">
              <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-white uppercase tracking-wider">
                  Licensed &amp; Insured in Texas
                </p>
                <p className="text-[10.5px] text-slate-300 font-medium">
                  Comprehensive public liability &amp; property protection
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Estimate Form (7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-[28px] p-5 xs:p-7 sm:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative flex flex-col justify-center text-left"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-neutral-900 tracking-tight">
                  Request a Free Quote
                </h3>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0000b9] bg-blue-50 border border-[#0000b9]/15 px-2.5 py-1 rounded-full">
                  Fast Response
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                Tell us about your project. We'll review your details and get back to you promptly with honest pricing.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="grid place-items-center text-center py-10"
                >
                  <div className="grid place-items-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-sm">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
                    Thank You! Request Received
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 font-medium max-w-sm">
                    A Handyman At Home estimator will contact you within 15 minutes to review your project and schedule your consultation.
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0000b9] hover:bg-[#000099] text-white text-xs font-bold px-6 py-3 shadow-md transition-all cursor-pointer"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Need Immediate Help? Call (214) 814-1444</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <Field
                      label="Your Name *"
                      name="name"
                      placeholder="e.g. John Miller"
                      required
                    />

                    {/* Phone */}
                    <Field
                      label="Phone Number *"
                      name="phone"
                      type="tel"
                      placeholder="(214) 814-1444"
                      required
                    />

                    {/* Email */}
                    <Field
                      label="Email Address *"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />

                    {/* Project Address / City */}
                    <Field
                      label="Project Location (City / ZIP) *"
                      name="address"
                      placeholder="e.g. Dallas, TX 75201"
                      required
                    />

                    {/* Service Needed Selector */}
                    <div className="sm:col-span-2">
                      <Label>Primary Service Needed *</Label>
                      <div className="relative mt-1.5">
                        <select
                          name="service"
                          required
                          defaultValue=""
                          className="w-full appearance-none rounded-xl border border-slate-200/90 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#0000b9]/10 focus:border-[#0000b9] focus:bg-white transition-all cursor-pointer"
                        >
                          <option value="" disabled>Select a core service...</option>
                          <option value="Kitchen Remodeling">Kitchen Remodeling &amp; Cabinetry</option>
                          <option value="Bathroom Remodeling">Bathroom Remodeling &amp; Tile</option>
                          <option value="Painting">Interior &amp; Exterior Painting</option>
                          <option value="Roofing">Roofing Repair &amp; Replacement</option>
                          <option value="Plumbing">Plumbing Fixtures &amp; Pipe Repairs</option>
                          <option value="Deck & Siding">Deck, Siding &amp; Wood Rot</option>
                          <option value="General Handyman">General Handyman &amp; Home Repairs</option>
                          <option value="24/7 Emergency">24/7 Emergency Dispatch</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="sm:col-span-2">
                      <Label>Project Scope &amp; Details</Label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us what you'd like done (approx size, timeline, specific issues)..."
                        className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#0000b9]/10 focus:border-[#0000b9] focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={loading}
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0000b9] via-[#0d1fd6] to-[#0000b9] hover:from-[#000099] hover:to-[#0c1bb8] px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(0,0,185,0.32)] hover:shadow-[0_6px_22px_rgba(0,0,185,0.45)] cursor-pointer transition-all duration-200 disabled:opacity-50 mt-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>{loading ? "Submitting Request..." : "Request My Free Estimate"}</span>
                  </motion.button>

                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-2 text-[11px] text-slate-400 font-medium">
                    <span>✓ 100% Free Upfront Quotes</span>
                    <span>✓ Zero Obligation</span>
                    <span>✓ Privacy Strictly Respected</span>
                  </div>
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
  subValue,
  href,
  isCall,
}: {
  icon: any;
  label: string;
  value: string;
  subValue?: string;
  href?: string;
  isCall?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-3.5 group/item">
      <div
        className={`h-9 w-9 rounded-xl flex items-center justify-center text-white shrink-0 transition-transform duration-200 group-hover/item:scale-105 ${
          isCall
            ? "bg-[#0000b9] border border-blue-400/30 shadow-md shadow-[#0000b9]/40"
            : "bg-white/10 border border-white/15"
        }`}
      >
        <Icon className={`h-4 w-4 ${isCall ? "text-white" : "text-sky-300"}`} />
      </div>
      <div className="text-left min-w-0">
        <span className="text-[10px] uppercase tracking-wider text-slate-300 font-bold block">
          {label}
        </span>
        <span
          className={`font-bold leading-tight block truncate ${
            isCall ? "text-base sm:text-lg text-white" : "text-xs sm:text-sm text-slate-100"
          }`}
        >
          {value}
        </span>
        {subValue && (
          <span className="text-[10.5px] text-slate-400 font-normal block mt-0.5">
            {subValue}
          </span>
        )}
      </div>
    </div>
  );

  return href ? (
    <li>
      <a href={href} className="block hover:opacity-95 transition-opacity">
        {content}
      </a>
    </li>
  ) : (
    <li>{content}</li>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700">
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
}: any) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0000b9]/10 focus:border-[#0000b9] focus:bg-white transition-all duration-200"
      />
    </div>
  );
}
