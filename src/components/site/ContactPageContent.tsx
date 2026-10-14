import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Award,
  Star,
  ExternalLink,
  Building2,
  Check,
  MessageSquare,
  HelpCircle,
  AlertCircle,
  Truck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bbbLogo from "@/assets/bbb.svg";

// Service Dropdown Options specified by user
const serviceOptions = [
  "Kitchen & Bathroom Remodel",
  "Painting (Interior & Exterior)",
  "Roofing Repairs & Installation",
  "Plumbing Services",
  "Landscaping & Outdoor Work",
  "General Contracting / Carpentry",
  "24/7 Emergency Service",
  "Other",
];

// County coverage data specified by user
const countyData = [
  {
    county: "Dallas County",
    cities: ["Dallas", "Irving", "Garland", "Mesquite", "Richardson", "Carrollton", "Farmers Branch"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    county: "Tarrant County",
    cities: ["Fort Worth", "Arlington", "Mansfield", "Grapevine", "Bedford", "Euless"],
    color: "from-indigo-600 to-blue-700",
  },
  {
    county: "Collin County",
    cities: ["Plano", "Frisco", "McKinney", "Allen", "Wylie"],
    color: "from-sky-600 to-cyan-700",
  },
  {
    county: "Denton County",
    cities: ["Denton", "Lewisville", "Flower Mound", "Little Elm"],
    color: "from-emerald-600 to-teal-700",
  },
  {
    county: "Ellis County",
    cities: ["Waxahachie", "Midlothian", "Ennis", "Red Oak"],
    color: "from-amber-600 to-orange-700",
  },
];

// 4 FAQs specified by user
const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes! We provide free, no-obligation estimates for all projects. We believe in transparent, upfront pricing with no hidden fees.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Handyman At Home is fully licensed and insured in Texas for your complete peace of mind.",
  },
  {
    q: "Do you handle both residential and commercial properties?",
    a: "Yes, we serve both homeowners and commercial property managers. No job is too big or too small.",
  },
  {
    q: "How soon can you start my project?",
    a: "For standard projects, we can typically schedule a consultation within 24-48 hours. For emergency services, we are available 24/7.",
  },
];

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    service: "Kitchen & Bathroom Remodel",
    details: "",
    preferredContact: "Phone Call",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/handymanathome@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Full Name": formData.fullName,
          "Phone Number": formData.phone,
          "Email Address": formData.email,
          "Project Address / City": formData.address,
          "Service Needed": formData.service,
          "Project Details": formData.details,
          "Preferred Contact Method": formData.preferredContact,
          _subject: `New Free Estimate Request from ${formData.fullName || "Website Visitor"}`,
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

  const scrollToForm = () => {
    const el = document.getElementById("estimate-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const input = document.getElementById("fullName");
      if (input) input.focus();
    }
  };

  return (
    <div className="bg-background text-foreground selection:bg-[#0000b9] selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO HEADER: Dedicated Contact Us
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#070b1a] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 border-b border-white/10">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute -top-36 left-1/4 w-[520px] h-[520px] bg-[#0000b9]/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-[420px] h-[420px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-[380px] h-[380px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Micro Grid Graphic Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors flex items-center gap-1 font-medium"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#3b5bfd]" />
                  <span>Home</span>
                </a>
              </li>
              <li className="text-slate-600">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="text-white font-semibold flex items-center gap-1.5" aria-current="page">
                <span>Contact Us</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm select-none mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Available Mon–Fri 7am–9pm • 24/7 Emergency Services Always On Call</span>
            </div>

            {/* H1 Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Contact Handyman At Home:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                Let's Bring Your Project
              </span>{" "}
              to Life
            </h1>

            {/* Sub-headline */}
            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-amber-400 tracking-tight">
              Your Trusted General Contractor in Dallas-Fort Worth
            </h2>

            {/* Lead Narrative */}
            <div className="mt-4 space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              <p>
                Whether you have a leaking pipe, need a fresh coat of paint, or are ready for a complete kitchen remodel, the team at <strong className="text-white font-bold">Handyman At Home</strong> is ready to help.
              </p>
              <p>
                For over two decades, we have proudly served homeowners, commercial property managers, and businesses across the DFW metroplex and surrounding areas. We pride ourselves on <strong className="text-white">prompt communication, transparent pricing, and exceptional craftsmanship</strong>.
              </p>
              <p className="text-sky-300 font-semibold">
                Reach out to us today for a FREE, no-obligation estimate. We’re happy to discuss your project and provide a transparent quote.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0000b9] hover:bg-[#0000d9] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 shadow-[0_4px_20px_rgba(0,0,185,0.45)] hover:shadow-[0_6px_25px_rgba(0,0,185,0.6)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="tel:2148141444"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-7 py-3.5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="h-4 w-4 text-emerald-400 fill-current" />
                <span>Call (214) 814-1444</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. TWO-COLUMN LAYOUT: "How to Reach Us" (Left) + "Request Free Estimate" Form (Right)
      ───────────────────────────────────────────────────────────── */}
      <section id="estimate-form" className="py-12 sm:py-20 bg-slate-50/70 border-b border-slate-200 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* ── Left Column: How to Reach Us (5 Cols) ── */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="rounded-3xl bg-gradient-to-br from-[#090e24] via-[#0b1338] to-[#0000b9] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[10.5px] font-black uppercase tracking-widest text-sky-300 mb-5">
                    <Clock className="h-3.5 w-3.5 text-emerald-400" />
                    <span>How to Reach Us</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    Direct Contact Channels
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We are dedicated to fast response times and personal, courteous service for every DFW customer.
                  </p>

                  <ul className="mt-6 space-y-5 text-left">
                    {/* Call or Text Us */}
                    <li className="flex items-start gap-3.5">
                      <div className="h-10 w-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                          Call or Text Us
                        </p>
                        <p className="text-xs text-slate-300 mt-0.5">
                          Available 7am to 9pm Mon–Fri. For emergencies, 24/7 service.
                        </p>
                        <div className="mt-2 space-y-1">
                          <a
                            href="tel:2148141444"
                            className="text-base sm:text-lg font-black text-white hover:text-sky-300 transition-colors block"
                          >
                            Primary: (214) 814-1444
                          </a>
                          <a
                            href="tel:2148141490"
                            className="text-sm sm:text-base font-bold text-slate-200 hover:text-white transition-colors block"
                          >
                            Secondary: (214) 814-1490
                          </a>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-400 mt-1">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          Emergency Line: Available 24/7
                        </span>
                      </div>
                    </li>

                    {/* Email Us */}
                    <li className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                      <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                          Email Us
                        </p>
                        <p className="text-xs text-slate-300 mt-0.5">
                          Prefer to send details of your project? Drop us an email anytime.
                        </p>
                        <a
                          href="mailto:handymanathome@gmail.com"
                          className="text-sm sm:text-base font-bold text-white hover:text-sky-300 transition-colors block mt-1 break-all"
                        >
                          handymanathome@gmail.com
                        </a>
                      </div>
                    </li>

                    {/* Visit Our Office */}
                    <li className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                      <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                          Visit Our Office
                        </p>
                        <p className="text-xs text-slate-300 mt-0.5">
                          Stop by to discuss your project or see our operations firsthand.
                        </p>
                        <p className="text-sm font-bold text-white mt-1">
                          1730 Newlin Dr, DFW, TX 75125, United States
                        </p>
                      </div>
                    </li>

                    {/* Business Hours */}
                    <li className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                      <div className="h-10 w-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="w-full">
                        <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                          Business Hours
                        </p>
                        <div className="mt-2 space-y-1 text-xs text-slate-200">
                          <div className="flex justify-between">
                            <span className="font-semibold">Monday – Friday:</span>
                            <span>7:00 AM – 9:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold">Saturday – Sunday:</span>
                            <span className="text-amber-300">By Appointment / Emergency</span>
                          </div>
                          <div className="flex justify-between text-emerald-400 font-bold pt-1">
                            <span>Emergency Services:</span>
                            <span>24 Hours / 7 Days</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Visual Suggestion: Google Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md">
                <div className="p-3.5 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <MapPin className="h-3.5 w-3.5 text-[#0000b9]" />
                    <span>Office Location Map • 1730 Newlin Dr</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=1730+Newlin+Dr,+DFW,+TX+75125"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0000b9] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Open Map</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div className="relative h-64 w-full bg-slate-100">
                  <iframe
                    title="Handyman At Home Office Location Map"
                    src="https://maps.google.com/maps?q=1730+Newlin+Dr,+DFW,+TX+75125&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* ── Right Column: Request Free Estimate Form (7 Cols) ── */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-9 shadow-xl text-left relative">
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0000b9] border border-blue-200/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Free, No-Obligation Estimate</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Request Your Free Estimate
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ready to get started? Fill out the form below with the details of your project. One of our project managers will review your request and contact you within 24 hours to schedule a consultation.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center rounded-2xl bg-emerald-50 border border-emerald-200 my-6"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Check className="h-8 w-8 stroke-[3]" />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900">
                      Estimate Request Received!
                    </h4>
                    <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                      Thank you for contacting Handyman At Home. One of our project managers will review your project details and reach out within 24 hours.
                    </p>
                    <p className="text-xs font-bold text-[#0000b9] mt-4">
                      For immediate emergency dispatch, call (214) 814-1444 directly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full bg-[#0000b9] text-white font-bold text-xs hover:bg-[#0000a0] transition-colors cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] focus:ring-2 focus:ring-[#0000b9]/20 text-sm transition-all outline-none"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(214) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] focus:ring-2 focus:ring-[#0000b9]/20 text-sm transition-all outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="johndoe@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] focus:ring-2 focus:ring-[#0000b9]/20 text-sm transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Project Address / City */}
                    <div>
                      <label htmlFor="address" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Address / City <span className="text-slate-400 font-normal">(e.g., Dallas, Fort Worth, Plano)</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Street Address or City in DFW"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] focus:ring-2 focus:ring-[#0000b9]/20 text-sm transition-all outline-none"
                      />
                    </div>

                    {/* Service Needed Dropdown */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Needed <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] focus:ring-2 focus:ring-[#0000b9]/20 text-sm transition-all outline-none appearance-none bg-white pr-10 cursor-pointer"
                        >
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Details <span className="text-slate-400 font-normal">(Tell us what you'd like done—large or small, we handle it all!)</span>
                      </label>
                      <textarea
                        id="details"
                        rows={4}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Please describe the scope of repairs, renovations, or timelines..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] focus:ring-2 focus:ring-[#0000b9]/20 text-sm transition-all outline-none resize-y"
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Preferred Contact Method
                      </span>
                      <div className="grid grid-cols-3 gap-2.5">
                        {["Phone Call", "Text", "Email"].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: method })}
                            className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                              formData.preferredContact === method
                                ? "bg-[#0000b9] text-white border-[#0000b9] shadow-xs"
                                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#0000b9] hover:bg-[#0000d9] text-white font-extrabold text-sm sm:text-base shadow-[0_4px_16px_rgba(0,0,185,0.35)] hover:shadow-[0_6px_22px_rgba(0,0,185,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-70"
                      >
                        {loading ? (
                          <span>Submitting Request...</span>
                        ) : (
                          <>
                            <span>Submit Request</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-slate-500 text-center mt-2 font-normal">
                        We respect your privacy. Your information will never be shared.
                      </p>
                    </div>

                    {/* Trust Badges Near Form (Design Tip from user) */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <img src={bbbLogo} alt="BBB Accredited Business" className="h-5 w-auto" />
                        <span className="font-bold text-slate-800">BBB Accredited Business</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        <span>Licensed &amp; Insured in Texas</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PROUDLY SERVING THE DALLAS-FORT WORTH METROPLEX (COUNTY LIST)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Truck className="h-3.5 w-3.5" />
              <span>40-Mile Service Coverage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Proudly Serving the Dallas-Fort Worth Metroplex
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Our mobile repair vans and certified crews provide thorough general contracting, remodeling, and handyman services across a 40-mile radius. We are proud to serve the following communities:
            </p>
          </div>

          {/* 5 County Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countyData.map((item) => (
              <div
                key={item.county}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 hover:bg-white hover:shadow-lg hover:border-[#0000b9]/30 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#0000b9]" />
                      <span>{item.county}</span>
                    </h3>
                    <span className="text-[10.5px] font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                      {item.cities.length} Cities
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.cities.map((city) => (
                      <span
                        key={city}
                        className="inline-block text-xs font-semibold text-slate-700 bg-white border border-slate-200/80 px-2.5 py-1 rounded-lg"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <Check className="h-3 w-3 stroke-[3]" />
                  <span>Full Service Available</span>
                </div>
              </div>
            ))}

            {/* Callout Card: Don't see your city listed? */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0000b9] to-[#0e21d6] text-white p-6 sm:p-7 shadow-xl flex flex-col justify-between text-left">
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-3">
                  Service Area Check
                </span>
                <h3 className="text-xl font-extrabold text-white leading-snug">
                  Don't see your city listed?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Give us a call! We serve communities across a 40-mile radius of DFW and likely serve your neighborhood.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <a
                  href="tel:2148141444"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#0000b9] font-extrabold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4 fill-current" />
                  <span>Call (214) 814-1444</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FREQUENTLY ASKED QUESTIONS BEFORE CONTACTING US
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Helpful Information</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions Before Contacting Us
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-extrabold text-slate-900 hover:text-[#0000b9] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#0000b9]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. WE'RE READY TO HELP, ANYTIME (GRAND CLOSING BANNER)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0000b9] via-[#0e21d6] to-[#00008f] text-white p-8 sm:p-14 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest bg-white/15 px-3.5 py-1 rounded-full mb-4">
                We're Ready to Help, Anytime
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Don't Let a Small Repair Turn Into a Major Headache
              </h3>

              <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                And don't wait any longer to build the home of your dreams. Call us today at <strong className="text-white">(214) 814-1444</strong> or click below to request your free estimate.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-100 text-[#0000b9] font-black text-sm sm:text-base px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <span>Request a Free Estimate</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="tel:2148141444"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm sm:text-base px-7 py-4 backdrop-blur-sm transition-all duration-200 cursor-pointer"
                >
                  <Phone className="h-4 w-4 fill-current text-emerald-400" />
                  <span>Call (214) 814-1444</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
