import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import heroVideo from "@/assets/hero.mp4";
import serviceHouseImg from "@/assets/service-house.jpg";
import {
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  Award,
  HeartHandshake,
  Sparkles,
  HelpCircle,
  FileText,
  DollarSign,
  CalendarCheck,
  Check,
  AlertCircle,
  Home,
  Building2,
  Zap,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────────────────── */
const whyChooseEstimate = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Detailed, itemized quotes so you know exactly what to expect. No surprises or hidden charges.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Obligation",
    desc: "You're under no pressure to book. We provide all the information you need to make a confident decision.",
  },
  {
    icon: Award,
    title: "Owner-Provided",
    desc: "David Hudson personally handles estimates, ensuring complete accuracy and accountability.",
  },
  {
    icon: CalendarCheck,
    title: "Quick Turnaround",
    desc: "We schedule at your convenience and deliver your clear estimate promptly.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Need a quote after hours or on weekends? We're available anytime, day or night.",
  },
];

const includedInEstimate = [
  "Thorough on-site or remote assessment of your property's exterior condition.",
  "Tailored service recommendations specific to your surface material and stain severity.",
  "Transparent, itemized pricing broken down by individual service line items.",
  "Clear timeline expectations for project start and completion.",
  "Full answers regarding our low-pressure soft wash chemistry & hot water equipment.",
  "A no-pressure consultation—our priority is serving you, not pushy sales.",
];

const whatHappensNext = [
  {
    icon: FileText,
    title: "1. We Review Your Request",
    desc: "David Hudson personally inspects your submission details and property specifics.",
  },
  {
    icon: CalendarCheck,
    title: "2. Schedule Your Estimate",
    desc: "We coordinate a time that fits your schedule—either in-person or via phone consultation.",
  },
  {
    icon: DollarSign,
    title: "3. Receive Your Written Quote",
    desc: "You'll get an itemized, transparent proposal with zero booking pressure.",
  },
  {
    icon: CheckCircle2,
    title: "4. Decide With Confidence",
    desc: "Review at your own pace. When ready, we'll reserve your service date on the calendar.",
  },
];

const serviceTowns = [
  "Mooresville",
  "Troutman",
  "Statesville",
  "Cornelius",
  "Davidson",
  "Huntersville",
  "Denver",
  "Sherrills Ford",
  "Mount Mourne",
  "Lake Norman Region",
];

export function EstimatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    cityStateZip: "",
    contactMethod: "Phone",
    services: [] as string[],
    propertyType: "Residential",
    surfaces: [] as string[],
    approxSize: "Medium (500–1,500 sq ft)",
    timeline: "As soon as possible",
    additionalDetails: "",
    hearAbout: "Google Search",
    bestTime: "Morning (8am – 12pm)",
  });

  const toggleService = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(name)
        ? prev.services.filter((s) => s !== name)
        : [...prev.services, name],
    }));
  };

  const toggleSurface = (surface: string) => {
    setFormData((prev) => ({
      ...prev,
      surfaces: prev.surfaces.includes(surface)
        ? prev.surfaces.filter((s) => s !== surface)
        : [...prev.surfaces, surface],
    }));
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/eva@stellrit.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services: formData.services.join(", "),
          surfaces: formData.surfaces.join(", "),
          _subject: `Free Estimate Request from ${(formData as any).fullName || (formData as any).name || 'Website Visitor'}`,
          _template: "table",
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("FormSubmit Error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-background overflow-hidden">
      <Nav />

      {/* ═══════════════════════════════════════════════════════════
          HERO / PAGE HEADER — dark section matching AboutPage style
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16 pt-[120px] sm:pt-[150px] md:pt-[180px] pb-10 sm:pb-16"
      >
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Dark Overlay for Ultra-High Contrast */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-[#090d16]/85 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl w-full flex flex-col items-center space-y-4 sm:space-y-6 text-white text-center">

          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm select-none"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Get Your Free Estimate — 100% No Obligation</span>
          </motion.div>

          {/* H1 Headline */}
          <h1
            className="text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] -mt-2 mb-2 max-w-4xl font-black text-center"
            style={{
              fontSize: "clamp(32px, 4.5vw, 46px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Fast, Fair &amp; Completely Free —{" "}
            <span
              style={{
                background: "linear-gradient(to right,#38bdf8,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              No Obligation, No Pressure.
            </span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base text-neutral-300 font-medium leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] text-center"
          >
            We believe in transparency from the very first conversation. Owner David Hudson will personally assess your project needs and provide a clear, honest quote—with zero hidden fees, no upsells, and no pressure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
          >
            <a
              href="tel:7045169509"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:opacity-95 px-5 sm:px-7 py-3 sm:py-3.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_24px_rgba(14,165,233,0.45)] w-full sm:w-auto"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Call: (704) 516-9509</span>
            </a>
            <a
              href="#estimate-form"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 sm:px-7 py-3 sm:py-3.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Fill Quote Form Below</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="w-full border-t border-white/10 pt-5 sm:pt-6 mt-0 max-w-2xl text-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-center">
              {[
                { label: "100% Free Quotes", sub: "No Hidden Fees Ever" },
                { label: "David Hudson Oversight", sub: "15 Years Experience" },
                { label: "24/7 Availability", sub: "Fast Response Time" },
              ].map(({ label, sub }) => (
                <div key={label} className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0 animate-pulse" />
                  <div>
                    <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">{label}</h4>
                    <p className="text-[9px] sm:text-[10px] text-neutral-400 font-light">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY CHOOSE OUR FREE ESTIMATE (5 Pillars)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50/50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0ea5e9]" />
              The Steam On Wheels Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Homeowners &amp; Businesses Request Our Quotes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyChooseEstimate.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#0ea5e9]/30 transition-all text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT'S INCLUDED + 3 EASY OPTIONS TO GET STARTED
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Copy: What's Included */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0ea5e9]" />
                Complete Transparency
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                What's Included in Your Free Estimate?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                When you request a quote from Steam On Wheels, you receive comprehensive project details so you can decide with total peace of mind.
              </p>

              <div className="space-y-3 pt-2">
                {includedInEstimate.map((inc) => (
                  <div key={inc} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5e9] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Showcase Arch Image with SOFT WASH Circle Badge OUTSIDE overflow-hidden */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-[380px] sm:max-w-[420px]"
              >
                {/* Circle Badge Overlap — OUTSIDE overflow-hidden container so it never gets clipped! */}
                <div className="absolute top-6 right-6 z-30 w-20 h-20 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] text-white flex flex-col items-center justify-center p-2 shadow-2xl border-2 border-white text-center animate-bounce duration-[3000ms]">
                  <span className="text-xs font-black leading-none">SOFT</span>
                  <span className="text-[8px] font-extrabold uppercase tracking-wider mt-0.5">WASH</span>
                </div>

                {/* Arch Container */}
                <div className="relative w-full h-[460px] sm:h-[520px] rounded-t-full overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <img
                    src={serviceHouseImg}
                    alt="Steam On Wheels Free Estimate"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Glass Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left shadow-2xl">
                    <p className="text-[10px] text-[#38bdf8] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
                      David Hudson Guarantee
                    </p>
                    <p className="text-xs font-extrabold text-white mt-0.5">100% FREE ESTIMATES — ZERO BOOKING PRESSURE</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DETAILED FREE ESTIMATE REQUEST FORM
      ═══════════════════════════════════════════════════════════ */}
      <section id="estimate-form" className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Send className="w-3.5 h-3.5 text-[#0ea5e9]" />
              Detailed Quote Request Form
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Request Your Free Estimate Now
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl mx-auto mt-2">
              Fill in your project details below and David Hudson will reach out personally with your itemized proposal.
            </p>
          </motion.div>

          {submitted ? (
            <div className="bg-emerald-50 border-2 border-emerald-500/40 rounded-3xl p-10 text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Your Estimate Request Has Been Sent!</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto">
                Thank you! David Hudson will personally review your submission details and contact you shortly with your free, transparent proposal.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#0284c7] transition-all"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 space-y-6 text-left shadow-lg">

              {/* 1. Contact Information */}
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                  <FileText className="w-4 h-4 text-[#0ea5e9]" />
                  1. Your Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(704) 516-9509"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Property Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="123 Main St"
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      City, State, ZIP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mooresville, NC 28115"
                      value={formData.cityStateZip}
                      onChange={(e) => setFormData({ ...formData, cityStateZip: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Contact Method
                    </label>
                    <select
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9]"
                    >
                      <option value="Phone">Phone Call</option>
                      <option value="Email">Email Reply</option>
                      <option value="Text">SMS Text Message</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 2. Service(s) of Interest & Property Type */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Sparkles className="w-4 h-4 text-[#0ea5e9]" />
                  2. Service(s) of Interest &amp; Property Type
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Concrete Cleaning",
                    "Roof Washing",
                    "Siding & Exterior Cleaning",
                    "Driveway Cleaning",
                    "Painting Services",
                    "Full-House Package",
                    "Commercial Exterior",
                    "Emergency Cleaning",
                    "Other Services",
                  ].map((serviceName) => (
                    <label
                      key={serviceName}
                      className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-800 cursor-pointer hover:border-[#0ea5e9] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(serviceName)}
                        onChange={() => toggleService(serviceName)}
                        className="rounded text-[#0ea5e9] focus:ring-[#0ea5e9]"
                      />
                      <span>{serviceName}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                    Property Type
                  </label>
                  <div className="flex gap-4">
                    {["Residential", "Commercial", "Both"].map((pt) => (
                      <label key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-800 cursor-pointer">
                        <input
                          type="radio"
                          name="propertyType"
                          value={pt}
                          checked={formData.propertyType === pt}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="text-[#0ea5e9] focus:ring-[#0ea5e9]"
                        />
                        <span>{pt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Surface Types & Approximate Size */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Home className="w-4 h-4 text-[#0ea5e9]" />
                  3. Surface Materials &amp; Approximate Size
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {["Concrete", "Asphalt", "Vinyl Siding", "Brick", "Wood", "Stucco", "Roof Shingles", "Metal", "Other"].map((surf) => (
                    <label
                      key={surf}
                      className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-slate-800 cursor-pointer hover:border-[#0ea5e9] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.surfaces.includes(surf)}
                        onChange={() => toggleSurface(surf)}
                        className="rounded text-[#0ea5e9] focus:ring-[#0ea5e9]"
                      />
                      <span>{surf}</span>
                    </label>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Approximate Area Size
                    </label>
                    <select
                      value={formData.approxSize}
                      onChange={(e) => setFormData({ ...formData, approxSize: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9]"
                    >
                      <option value="Small (under 500 sq ft)">Small (under 500 sq ft)</option>
                      <option value="Medium (500–1,500 sq ft)">Medium (500–1,500 sq ft)</option>
                      <option value="Large (1,500–3,000 sq ft)">Large (1,500–3,000 sq ft)</option>
                      <option value="Extra Large (over 3,000 sq ft)">Extra Large (over 3,000 sq ft)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9]"
                    >
                      <option value="As soon as possible">As soon as possible</option>
                      <option value="Within the next week">Within the next week</option>
                      <option value="Within the next month">Within the next month</option>
                      <option value="Flexible / Planning ahead">Flexible / Planning ahead</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 4. Additional Details & Marketing */}
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                    Additional Details or Specific Stain Concerns
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe specific stains (engine oil, algae streaks), gate access, or scheduling preferences..."
                    value={formData.additionalDetails}
                    onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      How Did You Hear About Us?
                    </label>
                    <select
                      value={formData.hearAbout}
                      onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9]"
                    >
                      <option value="Google Search">Google Search</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Nextdoor">Nextdoor</option>
                      <option value="Referral from Friend/Family">Referral from Friend/Family</option>
                      <option value="Driving By / Yard Sign">Driving By / Yard Sign</option>
                      <option value="Other">Other Source</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Best Time to Reach You
                    </label>
                    <select
                      value={formData.bestTime}
                      onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9]"
                    >
                      <option value="Morning (8am – 12pm)">Morning (8am – 12pm)</option>
                      <option value="Afternoon (12pm – 5pm)">Afternoon (12pm – 5pm)</option>
                      <option value="Evening (5pm – 8pm)">Evening (5pm – 8pm)</option>
                      <option value="Anytime">Anytime</option>
                      <option value="Please call me now">Please call me now</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:opacity-95 py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-[#0ea5e9]/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>SEND MY FREE ESTIMATE REQUEST</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center font-medium">
                By submitting this form, you agree to be contacted about your estimate request. Your information will never be shared or sold.
              </p>
            </form>
          )}

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT HAPPENS NEXT? (4 Steps)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5 text-[#0ea5e9]" />
              Our Seamless Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What Happens After You Request an Estimate?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatHappensNext.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm text-left flex flex-col justify-between">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICE TOWNS BADGES / LOCAL COVERAGE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-slate-50/50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
            Providing Free Estimates Across Mooresville &amp; Surrounding 40-Mile Region
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceTowns.map((town) => (
              <div
                key={town}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0ea5e9]" />
                <span>{town}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA — dark section matching AboutPage style
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden py-[60px] text-white bg-[#090d16]">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.4 }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Dark Overlay for Ultra-High Contrast */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundColor: "rgba(9, 13, 22, 0.86)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          />
        </div>

        <div className="relative z-20 mx-auto w-[90%] max-w-4xl text-center flex flex-col items-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Still Have Questions? We're Here to Help!
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[28px] sm:text-3xl lg:text-[42px] tracking-tight leading-tight text-white max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontWeight: 800 }}
          >
            Call David Hudson Directly at{" "}
            <span
              style={{
                background: "linear-gradient(to right,#38bdf8,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              (704) 516-9509
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
          >
            Email motivate71@yahoo.com or call anytime 24/7 for urgent cleaning requests.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full"
          >
            <a
              href="tel:7045169509"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:opacity-95 px-7 py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(14,165,233,0.45)] w-full sm:w-auto min-w-[240px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call: (704) 516-9509</span>
            </a>
            <a
              href="mailto:motivate71@yahoo.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-7 py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-900 hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto min-w-[240px]"
            >
              <Mail className="w-4 h-4" />
              <span>motivate71@yahoo.com</span>
            </a>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 select-none pt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Steam On Wheels: Honest Estimates, Exceptional Service.</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
