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
  MessageSquare,
  HelpCircle,
  Truck,
  Calendar,
  DollarSign,
  FileText,
  ThumbsUp,
  Hammer,
  Paintbrush,
  Home,
  Droplets,
  Shield,
  TreePine,
  Layers,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bbbLogo from "@/assets/bbb.svg";
import { SOCIAL_LINKS } from "@/lib/socialLinks";

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

// Step-by-Step Process specified by user
const stepsData = [
  {
    step: "01",
    title: "Request Your Estimate",
    desc: "Fill out the quick form below or give us a call at (214) 814-1444. Tell us a little about your project—what you need done, your location, and your timeline.",
    icon: FileText,
    badge: "Step 1",
  },
  {
    step: "02",
    title: "We'll Contact You Within 24 Hours",
    desc: "One of our friendly project managers will reach out to discuss your project in detail. We'll ask questions, offer suggestions, and schedule a convenient time for a site assessment if needed.",
    icon: Clock,
    badge: "Step 2",
  },
  {
    step: "03",
    title: "On-Site Assessment (If Necessary)",
    desc: "For larger projects like remodels or roofing, we'll come to your property to take measurements, assess the scope of work, and understand your vision. For smaller repairs, we can often provide an accurate quote over the phone or via photos.",
    icon: MapPin,
    badge: "Step 3",
  },
  {
    step: "04",
    title: "Receive Your Transparent Quote",
    desc: "We'll provide you with a detailed, written estimate that breaks down the costs of labor and materials. No hidden fees. No vague pricing. Just honest, upfront numbers.",
    icon: DollarSign,
    badge: "Step 4",
  },
  {
    step: "05",
    title: "You Decide",
    desc: "There's absolutely no pressure. Take your time to review the quote. If you have questions, we're here to answer them. If you're ready to move forward, we'll schedule your project at your convenience.",
    icon: ThumbsUp,
    badge: "Step 5",
  },
];

// Why Choose Us Pillars specified by user
const whyChooseUsData = [
  {
    title: "100% Free Estimates",
    desc: "No cost, no obligation, no pressure. You receive honest counsel with zero strings attached.",
    icon: Sparkles,
  },
  {
    title: "Transparent, Fixed Pricing",
    desc: "Know exactly what you'll pay before we start. Itemized breakdowns with no hidden surprises.",
    icon: DollarSign,
  },
  {
    title: "Over 24 Years of Experience",
    desc: "Serving DFW since 2001 with master craftsmen, licensed technicians, and proven longevity.",
    icon: Award,
  },
  {
    title: "Fully Licensed & Insured",
    desc: "Comprehensive Texas liability and workers' comp coverage to protect your home or business.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Emergency Service",
    desc: "We're here when you need us most with rapid mobile dispatch across North Texas.",
    icon: Clock,
  },
  {
    title: "Comprehensive Services",
    desc: "From plumbing to luxury remodeling, we handle every phase of your project under one roof.",
    icon: Hammer,
  },
];

// Qualifying Projects specified by user
const qualifyingProjects = [
  { name: "Kitchen & Bathroom Remodeling", icon: Home },
  { name: "Interior & Exterior Painting", icon: Paintbrush },
  { name: "Roofing Repairs & Installation", icon: Shield },
  { name: "Plumbing Services", icon: Droplets },
  { name: "Landscaping & Outdoor Work", icon: TreePine },
  { name: "Deck & Fence Building", icon: Layers },
  { name: "Drywall Repair & Installation", icon: Wrench },
  { name: "Flooring Installation", icon: Layers },
  { name: "General Contracting & Carpentry", icon: Hammer },
  { name: "24/7 Emergency Repairs", icon: AlertTriangle },
];

// County coverage data specified by user
const countyData = [
  {
    county: "Dallas County",
    cities: ["Dallas", "Irving", "Garland", "Mesquite", "Richardson", "Carrollton"],
  },
  {
    county: "Tarrant County",
    cities: ["Fort Worth", "Arlington", "Mansfield", "Grapevine", "Bedford"],
  },
  {
    county: "Collin County",
    cities: ["Plano", "Frisco", "McKinney", "Allen", "Wylie"],
  },
  {
    county: "Denton County",
    cities: ["Denton", "Lewisville", "Flower Mound", "Little Elm"],
  },
  {
    county: "Ellis County",
    cities: ["Waxahachie", "Midlothian", "Ennis", "Red Oak"],
  },
];

// FAQs specified by user
const faqs = [
  {
    q: "Is the estimate really free?",
    a: "Yes, absolutely! We provide free, no-obligation estimates for all projects. There is no cost to you, and you are under no pressure to hire us.",
  },
  {
    q: "How long does it take to get an estimate?",
    a: "For smaller repairs, we can often provide a quote within 24 hours. For larger remodels, we may need to schedule an on-site assessment, which we can typically do within 2-3 business days.",
  },
  {
    q: "What information do you need from me?",
    a: "The more details you can provide about your project, the better. Photos are extremely helpful! You can email photos to handymanathome@gmail.com or text them to (214) 814-1444.",
  },
  {
    q: "Do you charge for emergency estimates?",
    a: "No, emergency estimates are also free. However, please note that emergency service calls may incur an additional after-hours dispatch fee, which will be clearly explained before we dispatch a technician.",
  },
  {
    q: "What if I decide not to hire you after the estimate?",
    a: "That's completely fine! There's no obligation. We appreciate the opportunity to provide you with a quote and hope you'll keep us in mind for future projects.",
  },
];

export function FreeEstimatePageContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    service: "Kitchen & Bathroom Remodel",
    details: "",
    preferredContact: "Phone Call",
    preferredTime: "Morning",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          service: formData.service,
          details: formData.details,
          preferredContact: formData.preferredContact,
          timeline: formData.preferredTime,
          source: "Free Estimate Dedicated Page",
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
          1. HERO HEADER: Get Your Free Estimate Today
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#070b1a] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 border-b border-white/10">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute -top-36 left-1/4 w-[540px] h-[540px] bg-[#0000b9]/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-[420px] h-[420px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-[380px] h-[380px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

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
              <li
                className="text-white font-semibold flex items-center gap-1.5"
                aria-current="page"
              >
                <span>Free Estimate</span>
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
              <span>100% Free • No Obligation • No Surprises • DFW Wide</span>
            </div>

            {/* H1 Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Get Your Free Estimate Today:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300">
                No Obligation, No Surprises
              </span>
            </h1>

            {/* Sub-headline */}
            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-amber-400 tracking-tight">
              Transparent Pricing for Your Dallas-Fort Worth Home or Business
            </h2>

            {/* Lead Narrative */}
            <div className="mt-4 space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              <p>
                At <strong className="text-white font-bold">Handyman At Home</strong>, we believe
                that starting a renovation or repair project shouldn't come with guesswork or hidden
                fees. For over two decades, we've built our reputation on{" "}
                <strong className="text-white">
                  honest communication, upfront pricing, and exceptional craftsmanship
                </strong>
                .
              </p>
              <p>
                That's why we offer{" "}
                <strong className="text-sky-300 font-bold">
                  100% FREE, no-obligation estimates
                </strong>{" "}
                for every project—big or small. Whether you need a leaky faucet fixed, a room
                painted, or a complete kitchen remodel, we'll provide you with a detailed,
                transparent quote so you know exactly what to expect before we ever pick up a tool.
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

            {/* Quick Trust Highlights Banner */}
            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-400 shrink-0" />
                <span>24-Hour Contact Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400 fill-current shrink-0" />
                <span>5.0 Star Rated in DFW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. PROMINENT FORM SECTION (TWO-COLUMN WITH TRUST SIDEBAR)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="estimate-form"
        className="py-12 sm:py-20 bg-slate-50/70 border-b border-slate-200 relative"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ── Left Column: Trust Sidebar & Direct Contacts (5 Cols) ── */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Direct Call / Contact Box */}
              <div className="rounded-3xl bg-gradient-to-br from-[#090e24] via-[#0b1338] to-[#0000b9] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[10.5px] font-black uppercase tracking-widest text-sky-300 mb-4">
                    <Phone className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Prefer to Speak Directly?</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    Prefer to Speak with Someone Directly?
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We understand that sometimes it's easier to just pick up the phone. Our friendly
                    team is standing by to answer your questions and schedule your free estimate.
                  </p>

                  <div className="mt-6 space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                        📞 Call Us Today:
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
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-400 mt-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        Emergency Line: Available 24/7
                      </span>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                        📧 Email Us:
                      </p>
                      <a
                        href="mailto:handymanathome@gmail.com"
                        className="text-sm font-bold text-white hover:text-sky-300 transition-colors block mt-1 break-all"
                      >
                        handymanathome@gmail.com
                      </a>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                        🕒 Business Hours:
                      </p>
                      <div className="mt-1.5 space-y-1 text-xs text-slate-200">
                        <div className="flex justify-between">
                          <span className="font-semibold">Monday – Friday:</span>
                          <span>7:00 AM – 9:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Saturday – Sunday:</span>
                          <span className="text-amber-300">By Appointment</span>
                        </div>
                        <div className="flex justify-between text-emerald-400 font-bold pt-1">
                          <span>Emergency Services:</span>
                          <span>24 Hours / 7 Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges & Verified Review Card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <a
                    href={SOCIAL_LINKS.bbb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    title="View BBB Accredited Profile"
                  >
                    <img src={bbbLogo} alt="BBB Accredited Business" className="h-6 w-auto" />
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
                    <span className="text-[10.5px] font-bold text-slate-700">5.0 Star Rating</span>
                  </div>
                </div>

                {/* Short client testimonial to reinforce trust before submitting */}
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "Handyman At Home gave us a written, transparent estimate with zero pressure.
                    When the work was completed, there was not a single hidden fee. Highly recommend
                    for any DFW homeowner!"
                  </p>
                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                    <span>— Robert M., Plano TX</span>
                    <span className="text-emerald-600 font-bold">Kitchen Remodel</span>
                  </div>
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
                    <span>Quick &amp; Seamless Submission</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Request Your Free Estimate Now
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ready to get started? Fill out the form below with the details of your project,
                    and our team will get back to you within 24 hours to discuss your free estimate.
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
                      Thank you for choosing Handyman At Home. One of our dedicated project managers
                      will review your project details and reach out within 24 hours.
                    </p>
                    <p className="text-xs font-bold text-[#0000b9] mt-4">
                      For urgent repairs or immediate dispatch, call (214) 814-1444 anytime.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full bg-[#0000b9] text-white font-bold text-xs hover:bg-[#0000a0] transition-colors cursor-pointer"
                    >
                      Submit Another Estimate Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Michael Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] focus:ring-2 focus:ring-[#0000b9]/20 text-sm transition-all outline-none"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
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
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="michael@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0000b9] focus:ring-2 focus:ring-[#0000b9]/20 text-sm transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Project Address / City */}
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Project Address / City{" "}
                        <span className="text-slate-400 font-normal">
                          (e.g., Dallas, Fort Worth, Plano)
                        </span>
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
                      <label
                        htmlFor="service"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
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
                      <label
                        htmlFor="details"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Project Details{" "}
                        <span className="text-slate-400 font-normal">
                          (Please describe your project. The more details you provide, the more
                          accurate your estimate will be!)
                        </span>
                      </label>
                      <textarea
                        id="details"
                        rows={4}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell us what you'd like done—large or small, we handle it all..."
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

                    {/* Preferred Time for Contact */}
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Preferred Time for Contact
                      </span>
                      <div className="grid grid-cols-3 gap-2.5">
                        {["Morning", "Afternoon", "Evening"].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredTime: time })}
                            className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                              formData.preferredTime === time
                                ? "bg-[#0000b9] text-white border-[#0000b9] shadow-xs"
                                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            {time}
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
                            <span>Request My Free Estimate</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-slate-500 text-center mt-2.5 font-normal">
                        We respect your privacy. Your information will never be shared or sold.
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
          3. HOW OUR FREE ESTIMATE PROCESS WORKS (5 STEPS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Simple, Transparent &amp; Stress-Free</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Our Free Estimate Process Works
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Getting started is simple. We've streamlined our process to save you time and get your
              project moving.
            </p>
          </div>

          {/* 5-Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stepsData.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-[#0000b9]/40 transition-all text-left relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#0000b9]/30 group-hover:text-[#0000b9] transition-colors">
                        {item.step}
                      </span>
                      <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-[#0000b9] flex items-center justify-center shrink-0">
                        <IconComp className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[10.5px] font-bold text-[#0000b9] uppercase tracking-wider">
                    <span>{item.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. WHY CHOOSE HANDYMAN AT HOME FOR YOUR PROJECT?
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50/80 border-y border-slate-200 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Peace of Mind Guaranteed</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Handyman At Home for Your Project?
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              When you request a free estimate from us, you're not just getting a price—you're
              getting peace of mind. Here's why thousands of DFW homeowners and businesses trust us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsData.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#0000b9]/30 transition-all text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#0000b9] border border-blue-100 flex items-center justify-center mb-4">
                      <IconComp className="h-6 w-6" />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <h3 className="text-lg font-extrabold text-slate-900">{item.title}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. WHAT PROJECTS QUALIFY FOR A FREE ESTIMATE?
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Hammer className="h-3.5 w-3.5" />
              <span>Full Service Scope</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Projects Qualify for a Free Estimate?
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              We offer free estimates for virtually every service we provide, including:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {qualifyingProjects.map((proj) => {
              const IconComp = proj.icon;
              return (
                <div
                  key={proj.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4.5 text-center flex flex-col items-center justify-center gap-2.5 hover:bg-white hover:border-[#0000b9]/40 hover:shadow-md transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 text-[#0000b9] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-800 group-hover:text-[#0000b9] transition-colors leading-snug">
                    {proj.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold text-slate-800">
              No job is too big or too small. If you're not sure if your project qualifies, just
              ask!
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={scrollToForm}
                className="px-5 py-2.5 rounded-full bg-[#0000b9] text-white text-xs font-bold hover:bg-[#0000d9] transition-colors shadow-xs cursor-pointer"
              >
                Request Your Estimate
              </button>
              <a
                href="tel:2148141444"
                className="px-5 py-2.5 rounded-full border border-slate-300 bg-white text-slate-800 text-xs font-bold hover:text-[#0000b9] hover:border-[#0000b9] transition-colors cursor-pointer"
              >
                Call (214) 814-1444
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. PROUDLY SERVING THE DALLAS-FORT WORTH METROPLEX
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Truck className="h-3.5 w-3.5" />
              <span>40-Mile Service Coverage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Proudly Serving the Dallas-Fort Worth Metroplex
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Our mobile repair vans and certified crews provide free estimates across a 40-mile
              radius of DFW, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countyData.map((item) => (
              <div
                key={item.county}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-lg hover:border-[#0000b9]/30 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#0000b9]" />
                      <span>{item.county}</span>
                    </h3>
                    <span className="text-[10.5px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full">
                      {item.cities.length} Cities
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.cities.map((city) => (
                      <span
                        key={city}
                        className="inline-block text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <Check className="h-3 w-3 stroke-[3]" />
                  <span>Free On-Site Assessment Available</span>
                </div>
              </div>
            ))}

            {/* Don't see your city listed? Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0000b9] to-[#0e21d6] text-white p-6 sm:p-7 shadow-xl flex flex-col justify-between text-left">
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-3">
                  Service Area Check
                </span>
                <h3 className="text-xl font-extrabold text-white leading-snug">
                  Don't see your city listed?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Give us a call! We serve communities across a 40-mile radius of DFW and likely
                  serve your neighborhood.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <a
                  href="tel:2148141444"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#0000b9] font-extrabold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
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
          7. FREQUENTLY ASKED QUESTIONS ABOUT OUR FREE ESTIMATES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Our Free Estimates
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden shadow-2xs transition-all"
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
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-3 bg-white">
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
          8. READY TO TRANSFORM YOUR SPACE? (CLOSING GRAND CTA)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0000b9] via-[#0e21d6] to-[#00008f] text-white p-8 sm:p-14 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest bg-white/15 px-3.5 py-1 rounded-full mb-4">
                Zero Obligation • Upfront Pricing
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Transform Your Space?
              </h3>

              <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                Don't wait another day to start your project. Request your free estimate now and
                let's bring your vision to life.
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
