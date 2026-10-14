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
  Check,
  HelpCircle,
  Truck,
  Wrench,
  Hammer,
  Maximize2,
  X,
  Layers,
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bbbLogo from "@/assets/bbb.svg";
import { SOCIAL_LINKS } from "@/lib/socialLinks";
import {
  ServiceDetailConfig,
  servicesData,
  galleryImagesList,
} from "@/lib/servicesData";

interface Props {
  serviceId: string;
}

export function ServiceDetailPageContent({ serviceId }: Props) {
  const service = servicesData[serviceId] || servicesData["kitchen-bathroom-remodel"];

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    details: "",
    preferredContact: "Phone Call",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Lightbox Modal State
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Extract dedicated gallery photos for this service
  const serviceImages =
    service.galleryImages && service.galleryImages.length > 0
      ? service.galleryImages
      : service.galleryIndices
      ? service.galleryIndices.map((idx) => galleryImagesList[idx]).filter(Boolean)
      : galleryImagesList.slice(0, 8);

  const heroImage = service.heroImage || serviceImages[0] || galleryImagesList[0];

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
          "Service Requested": service.serviceName,
          "Project Details": formData.details,
          "Preferred Contact Method": formData.preferredContact,
          _subject: `New ${service.serviceName} Free Estimate from ${formData.fullName || "Website Visitor"}`,
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
          1. HERO HEADER: Dedicated Service Hero with Authentic Visual
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#070b1a] text-white pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-white/10">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute -top-36 left-1/4 w-[540px] h-[540px] bg-[#0000b9]/30 rounded-full blur-[140px] pointer-events-none" />
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
              <li>
                <a href="/#services" className="hover:text-white transition-colors font-medium">
                  Services
                </a>
              </li>
              <li className="text-slate-600">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="text-white font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {service.serviceName}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm select-none mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>{service.heroBadge} • Dallas–Fort Worth</span>
              </div>

              {/* H1 Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                {service.h1Title}
              </h1>

              {/* Sub-headline */}
              <h2 className="mt-3.5 text-base sm:text-lg md:text-xl font-bold text-amber-400 tracking-tight">
                {service.h2Subtitle}
              </h2>

              {/* Lead Narratives */}
              <div className="mt-4 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                <p>{service.leadParagraph}</p>
                <p>{service.secondaryParagraph}</p>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
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

              {/* Key Stats Bar */}
              <div className="mt-9 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {service.keyStats.map((stat) => (
                  <div key={stat.label} className="text-left">
                    <span className="block text-lg sm:text-xl font-black text-white">
                      {stat.value}
                    </span>
                    <span className="block text-[11px] sm:text-xs text-slate-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Visual Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group bg-slate-900/60 aspect-4/3 sm:aspect-16/11">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt={service.serviceName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-[#0000b9]" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Trust Pills */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070b1a]/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-md">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Licensed &amp; Insured in Texas</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-extrabold text-sky-300">
                      Authentic Project
                    </span>
                    <span className="block text-sm font-bold text-white">
                      Dallas–Fort Worth Metroplex
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CAPABILITIES GRID: 6 Core Breakdown Cards
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Wrench className="h-3.5 w-3.5" />
              <span>Tailored Capabilities</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {service.capabilitiesTitle}
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every detail is executed to the highest North Texas building standards with premium materials and turnkey oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {service.capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#0000b9]/40 hover:bg-white transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="h-11 w-11 rounded-2xl bg-[#0000b9]/10 text-[#0000b9] flex items-center justify-center font-black text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <Check className="h-3 w-3 stroke-[3]" />
                  <span>Turnkey Service Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. AUTHENTIC GALLERY SHOWCASE (FROM ASSETS/GALLERY)
      ───────────────────────────────────────────────────────────── */}
      {serviceImages.length > 0 && (
        <section className="py-16 sm:py-24 bg-slate-50/80 border-y border-slate-200 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Real DFW Projects</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Recent {service.serviceName} Work
              </h2>

              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                Take a look at authentic projects completed across Dallas, Fort Worth, Plano, Arlington, and surrounding neighborhoods.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4.5">
              {serviceImages.slice(0, 8).map((imgSrc, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl transition-all cursor-pointer aspect-4/3"
                >
                  <img
                    src={imgSrc}
                    alt={`${service.serviceName} sample ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-bold flex items-center gap-1">
                      <Maximize2 className="h-3 w-3" />
                      <span>View Project</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#0000b9] hover:underline"
              >
                <span>Explore All 48+ Completed Projects in Our Gallery</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. THE 4-STEP PROVEN PROCESS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Layers className="h-3.5 w-3.5" />
              <span>How We Work</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 4-Step Proven Execution Process
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              We eliminate guesswork with structured communication, detailed scopes, and respectful property care from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all text-left"
              >
                <div>
                  <span className="text-3xl font-black text-[#0000b9]/30 block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. WHY CHOOSE US FOR THIS SERVICE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>The Handyman At Home Difference</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why DFW Trusts Us for {service.serviceName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-lg transition-all text-left"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#0000b9] flex items-center justify-center mb-3">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. FREE ESTIMATE FORM (DEDICATED TO THIS SERVICE)
      ───────────────────────────────────────────────────────────── */}
      <section id="estimate-form" className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Call Channel */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="rounded-3xl bg-gradient-to-br from-[#090e24] via-[#0b1338] to-[#0000b9] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block text-[10.5px] font-extrabold uppercase tracking-widest text-sky-300 bg-white/10 border border-white/15 px-3 py-1 rounded-full mb-4">
                    Free, No-Obligation Consultation
                  </span>

                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    Get a Quote for Your {service.serviceName}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Have questions about pricing, material options, or start dates? Call us directly or submit your project details for a prompt reply.
                  </p>

                  <div className="mt-6 space-y-3.5 pt-4 border-t border-white/10 text-xs">
                    <div>
                      <span className="text-sky-300 font-bold block text-[11px] uppercase">
                        Primary Phone:
                      </span>
                      <a
                        href="tel:2148141444"
                        className="text-lg font-black text-white hover:text-sky-300 transition-colors"
                      >
                        (214) 814-1444
                      </a>
                    </div>
                    <div>
                      <span className="text-sky-300 font-bold block text-[11px] uppercase">
                        Secondary Phone:
                      </span>
                      <a
                        href="tel:2148141490"
                        className="text-base font-bold text-slate-200 hover:text-white transition-colors"
                      >
                        (214) 814-1490
                      </a>
                    </div>
                    <div>
                      <span className="text-sky-300 font-bold block text-[11px] uppercase">
                        Direct Email:
                      </span>
                      <a
                        href="mailto:handymanathome@gmail.com"
                        className="text-sm font-bold text-white hover:text-sky-300 transition-colors"
                      >
                        handymanathome@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge card */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 flex items-center justify-between">
                <a
                  href={SOCIAL_LINKS.bbb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  title="View BBB Accredited Profile"
                >
                  <img src={bbbLogo} alt="BBB Accredited" className="h-6 w-auto" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">BBB Accredited</span>
                    <span className="block text-[10.5px] text-slate-500">A+ Standards</span>
                  </div>
                </a>
                <div className="text-right">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">5.0 Star Rated</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Estimate Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-9 shadow-xl text-left">
                <div className="mb-6">
                  <span className="inline-block bg-blue-50 text-[#0000b9] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    {service.serviceName} Estimate
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Request Your Free Estimate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                    Fill out the form below and one of our dedicated DFW project managers will contact you within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center rounded-2xl bg-emerald-50 border border-emerald-200 my-4"
                  >
                    <div className="h-14 w-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Check className="h-7 w-7 stroke-[3]" />
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900">
                      Estimate Request Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                      Thank you for choosing Handyman At Home. We will review your project details and reach out within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-5 px-5 py-2 rounded-full bg-[#0000b9] text-white font-bold text-xs hover:bg-[#0000a0] transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] text-sm outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(214) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] text-sm outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Project Address / City <span className="text-slate-400 font-normal">(e.g., Dallas, Plano, Fort Worth)</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="City or Street Address in DFW"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Project Details <span className="text-slate-400 font-normal">(Describe the scope of work)</span>
                      </label>
                      <textarea
                        id="details"
                        rows={3}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell us what you'd like done..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] text-sm outline-none resize-y"
                      />
                    </div>

                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Contact Method
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {["Phone Call", "Text", "Email"].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: method })}
                            className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              formData.preferredContact === method
                                ? "bg-[#0000b9] text-white border-[#0000b9]"
                                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0000b9] hover:bg-[#0000d9] text-white font-extrabold text-sm shadow-md transition-all cursor-pointer disabled:opacity-70"
                      >
                        {loading ? <span>Submitting...</span> : <span>Request My Free Estimate</span>}
                      </button>
                      <p className="text-[11px] text-slate-500 text-center mt-2 font-normal">
                        We respect your privacy. Your information will never be shared.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. SERVICE-SPECIFIC FAQS (ACCORDION)
      ───────────────────────────────────────────────────────────── */}
      {service.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200 relative">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Common Questions About {service.serviceName}
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-extrabold text-slate-900 hover:text-[#0000b9] transition-colors cursor-pointer"
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
                          <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
      )}

      {/* ─────────────────────────────────────────────────────────────
          8. GRAND CLOSING CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0000b9] via-[#0e21d6] to-[#00008f] text-white p-8 sm:p-14 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest bg-white/15 px-3.5 py-1 rounded-full mb-4">
                DFW's Trusted General Contractor Since 2001
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Start Your {service.serviceName}?
              </h3>

              <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                Call our team today at <strong className="text-white">(214) 814-1444</strong> or request your free estimate online.
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

      {/* ─────────────────────────────────────────────────────────────
          9. LIGHTBOX MODAL (FOR ENLARGING GALLERY PHOTOS)
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={serviceImages[activeImageIndex]}
                alt={`${service.serviceName} preview`}
                className="w-full h-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
