import { useState, useEffect, useCallback } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Star,
  Sparkles,
  Wrench,
  Paintbrush,
  Droplets,
  Shield,
  TreePine,
  Home,
  ChevronRight,
  Check,
  ChevronLeft,
  X,
  ZoomIn,
  Truck,
  Building2,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Local assets
import craftsmanImg from "@/assets/about-craftsman.jpg";
import paintingImg from "@/assets/svc-painting.png";
import roofImg from "@/assets/svc-roof.png";
import landscapingImg from "@/assets/svc-landscaping.png";
import residentialImg from "@/assets/svc-residential.png";
import commercialImg from "@/assets/svc-commercial.png";

// Load gallery images dynamically using Vite's glob import
const galleryModules = import.meta.glob<{ default: string }>(
  "../../assets/gallery/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true }
);

const galleryImages: string[] = Object.values(galleryModules).map(
  (mod) => mod.default
);

// 6 Core services specified by user
const comprehensiveServices = [
  {
    title: "Kitchen & Bathroom Remodeling",
    tagline: "Essential Living Spaces",
    desc: "Transforming essential spaces into functional, beautiful environments. From custom cabinetry and tile work to luxury vanities and full floor-to-ceiling upgrades, we bring your vision to life.",
    icon: Home,
    color: "from-blue-600 to-indigo-700",
    bgColor: "bg-blue-500/10 text-[#0000b9]",
    image: galleryImages[0] || residentialImg,
    bullets: [
      "Custom tile, backsplashes & stone surrounds",
      "Cabinet installation, refacing & countertops",
      "Walk-in shower conversions & soaking tubs",
      "Modern vanity fixtures, lighting & layout redesign",
    ],
  },
  {
    title: "Painting (Interior & Exterior)",
    tagline: "Flawless & Long-Lasting Finishes",
    desc: "Delivering flawless, durable finishes that protect and enhance your property. We handle comprehensive surface prep, drywall repairs, trim, and weather-resistant coatings.",
    icon: Paintbrush,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10 text-amber-600",
    image: paintingImg,
    bullets: [
      "Precision wall & ceiling painting",
      "Drywall patching, texture match & sheetrock",
      "Cabinet spraying & trim enamel work",
      "Exterior weather-shielding & deck staining",
    ],
  },
  {
    title: "Roofing Repairs & Installation",
    tagline: "Top-Down Storm & Leak Protection",
    desc: "Securing your property from the top down with expert leak repairs and installations. We inspect storm damage, replace damaged shingles, and restore waterproof integrity.",
    icon: Shield,
    color: "from-emerald-600 to-teal-700",
    bgColor: "bg-emerald-500/10 text-emerald-600",
    image: roofImg,
    bullets: [
      "Emergency leak mitigation & flashing repair",
      "Hail, wind & Texas storm damage restoration",
      "Architectural shingle replacement",
      "Full roof replacements with guaranteed warranty",
    ],
  },
  {
    title: "Plumbing Services",
    tagline: "Smooth Flow & Rapid Emergency Fixes",
    desc: "From minor drips to major pipe installations, keeping your water flowing smoothly. Faucets, toilets, drains, and pipe replacements handled by seasoned professionals.",
    icon: Droplets,
    color: "from-cyan-600 to-blue-700",
    bgColor: "bg-cyan-500/10 text-cyan-600",
    image: galleryImages[5] || craftsmanImg,
    bullets: [
      "Leaking pipe detection & rapid repair",
      "Fixture installation (faucets, toilets, sinks)",
      "Garbage disposals & drain line clearing",
      "Water heater replacements & supply line upgrades",
    ],
  },
  {
    title: "Landscaping & Outdoor Work",
    tagline: "Exterior Curb Appeal & Structures",
    desc: "Enhancing your exterior spaces with professional landscaping and outdoor structures. Custom fencing, decks, patio covers, and complete yard improvements.",
    icon: TreePine,
    color: "from-emerald-700 to-green-800",
    bgColor: "bg-emerald-500/10 text-emerald-700",
    image: landscapingImg,
    bullets: [
      "Custom wooden decks, pergolas & patio covers",
      "Privacy fence installation & repair",
      "Sod installation, edging & flowerbed masonry",
      "Gutter cleaning, drainage solutions & exterior care",
    ],
  },
  {
    title: "General Contracting & Carpentry",
    tagline: "Turnkey Craftsmanship",
    desc: "Custom decks, fencing, drywall, and comprehensive repair services. We eliminate the hassle of dealing with multiple contractors for residential and commercial spaces.",
    icon: Wrench,
    color: "from-indigo-600 to-purple-700",
    bgColor: "bg-indigo-500/10 text-indigo-600",
    image: commercialImg,
    bullets: [
      "Interior door hanging & custom millwork",
      "Window framing, sills & baseboard trim",
      "Structural framing & subfloor restoration",
      "Complete commercial punch-list & turnkey maintenance",
    ],
  },
];

// Why DFW Property Owners Trust Us - 5 core values specified by user
const trustPillars = [
  {
    number: "01",
    title: "Over 24 Years of Experience",
    highlight: "Since 2001",
    desc: "We've been perfecting our craft since 2001, tackling every challenge with seasoned expertise and skill. Decades of boots-on-the-ground knowledge means fewer mistakes, faster turnaround, and lasting results.",
    icon: Award,
    badge: "Since 2001",
    color: "from-blue-600 to-indigo-600",
  },
  {
    number: "02",
    title: "24/7 Emergency Service",
    highlight: "Emergency Ready",
    desc: "Got a plumbing disaster or a broken lock in the middle of the night? Our emergency response team is ready to help, anytime. Our mobile vans are on standby across Dallas-Fort Worth.",
    icon: Clock,
    badge: "24/7 Response",
    color: "from-emerald-600 to-teal-600",
  },
  {
    number: "03",
    title: "Quality & Reliability Guaranteed",
    highlight: "100% Satisfaction",
    desc: "We use only high-quality materials and stand firmly behind our work. Your complete satisfaction is our top priority—we don't leave until the job is done right to your exact expectations.",
    icon: ShieldCheck,
    badge: "Guaranteed",
    color: "from-cyan-600 to-blue-600",
  },
  {
    number: "04",
    title: "Transparent Pricing",
    highlight: "No Hidden Fees",
    desc: "We provide upfront, fixed pricing and guaranteed estimates with no hidden fees or surprises. You know exactly what the job costs before any work begins, keeping your budget fully protected.",
    icon: CheckCircle2,
    badge: "Fixed Quotes",
    color: "from-amber-600 to-orange-600",
  },
  {
    number: "05",
    title: "Local & Committed",
    highlight: "40-Mile Radius",
    desc: "We are proud to serve our community in DFW and the surrounding 40-mile area, treating every project as if it were our own. As your local neighbors, our reputation is our most prized asset.",
    icon: MapPin,
    badge: "DFW Neighbors",
    color: "from-indigo-600 to-purple-600",
  },
];

// Cities served
const servedCities = [
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Plano",
  "Irving",
  "Garland",
  "Frisco",
  "McKinney",
  "Mesquite",
  "Carrollton",
  "Richardson",
  "Lewisville",
  "Grand Prairie",
  "Watauga",
  "Ennis",
  "Lancaster",
  "DeSoto",
  "Cedar Hill",
  "Duncanville",
  "Red Oak",
];

export function AboutPageContent() {
  const [selectedLightboxIndex, setSelectedLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedLightboxIndex === null) return;
      if (e.key === "Escape") setSelectedLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setSelectedLightboxIndex((prev) =>
          prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedLightboxIndex]);

  const openLightbox = useCallback((idx: number) => {
    setSelectedLightboxIndex(idx);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  // Curate 8 striking gallery images for the showcase
  const previewGallery = galleryImages.slice(0, 8);

  return (
    <div className="bg-background text-foreground selection:bg-[#0000b9] selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Dedicated About Us
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#070b1a] text-white pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-white/10">
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
                  <Home className="h-3.5 w-3.5 text-[#3b5bfd]" />
                  <span>Home</span>
                </a>
              </li>
              <li className="text-slate-600">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="text-white font-semibold flex items-center gap-1.5" aria-current="page">
                <span>About Us</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm select-none mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Since 2001 • Over 24 Years of Excellence</span>
                <span className="text-white/30 hidden sm:inline">•</span>
                <span className="text-sky-300 font-semibold tracking-normal hidden sm:inline">
                  Dallas–Fort Worth, TX
                </span>
              </div>

              {/* Main H1 Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.15]">
                About Handyman At Home:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                  Your Trusted DFW Partner
                </span>{" "}
                for Remodeling &amp; Repairs
              </h1>

              {/* Sub-headline */}
              <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-amber-400 tracking-tight">
                Over Two Decades of Excellence in Dallas-Fort Worth
              </h2>

              {/* Body Narrative */}
              <div className="mt-4 space-y-3.5 text-slate-300 text-[15px] sm:text-base leading-relaxed">
                <p>
                  <strong className="text-white font-bold">Since 2001</strong>, Handyman At Home has been the premier choice for homeowners, commercial property managers, and businesses across the Dallas-Fort Worth metroplex. What started as a commitment to simple, honest handyman work has grown into a full-service general contracting company capable of handling everything from minor home repairs to large-scale commercial remodeling.
                </p>
                <p>
                  We are proud to be a <strong className="text-white font-bold">locally owned and operated</strong> business that has built its reputation on <span className="text-white font-semibold underline decoration-[#3b5bfd] decoration-2 underline-offset-4">reliability, transparency, and exceptional craftsmanship</span>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0000b9] hover:bg-[#0000d9] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 shadow-[0_4px_20px_rgba(0,0,185,0.45)] hover:shadow-[0_6px_25px_rgba(0,0,185,0.6)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <span>Request a Free Estimate</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="tel:2148141444"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-7 py-3.5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-emerald-400 fill-current" />
                  <span>Call (214) 814-1444</span>
                </a>
              </div>

              {/* Emergency availability notice */}
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <Clock className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Mon–Fri 7am–9pm • <strong>24/7 Emergency Services Always On Call</strong></span>
              </div>
            </div>

            {/* Right Visual Montage */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px]">
                {/* Main Large Visual Card */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-slate-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] aspect-[4/5]">
                  <img
                    src={craftsmanImg}
                    alt="Master Craftsman from Handyman At Home in Dallas-Fort Worth"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Caption on image */}
                  <div className="absolute bottom-5 inset-x-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                        Master Craftsmen On-Site
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-extrabold leading-tight">
                      Turnkey Home &amp; Commercial Remodeling
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Dedicated certified crews serving North Texas daily
                    </p>
                  </div>
                </div>

                {/* Floating Badge: 24+ Years Experience (Top Left) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute -top-4 -left-4 sm:-left-6 rounded-2xl bg-gradient-to-br from-[#0000b9] to-[#0e21d6] border border-white/25 text-white p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3 select-none"
                >
                  <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 text-amber-300 text-[10px]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-base font-black leading-none mt-1">24+ Years</p>
                    <p className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider">
                      Established 2001
                    </p>
                  </div>
                </motion.div>

                {/* Floating Badge: Licensed & Insured (Bottom Right) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -bottom-5 -right-4 sm:-right-6 rounded-2xl bg-white text-slate-900 border border-slate-200 p-3.5 shadow-2xl flex items-center gap-3 select-none"
                >
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      General Contractor
                    </p>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                      Licensed &amp; Insured
                    </p>
                    <p className="text-[10px] text-emerald-600 font-semibold">
                      100% Guaranteed Work
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-2xl sm:text-3xl font-black text-white">24+</p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">Years of Excellence</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">24/7</p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">Emergency Dispatch</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">40 Mi</p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">DFW Service Radius</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-2xl sm:text-3xl font-black text-sky-400">100%</p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. OUR MISSION SECTION: "No Job is Too Big or Too Small"
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden">
        {/* Soft background decor */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mission Box */}
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-white p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,185,0.12)]">
            <div className="max-w-4xl mx-auto text-center">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-[#0000b9]/10 text-[#0000b9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Our Guiding Purpose</span>
              </div>

              {/* H2 Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our Mission:{" "}
                <span className="text-[#0000b9]">No Job is Too Big or Too Small</span>
              </h2>

              {/* Highlighted Quote Callout */}
              <blockquote className="my-6 p-4 sm:p-6 rounded-2xl bg-white border-l-4 border-[#0000b9] shadow-sm text-left sm:text-center">
                <p className="text-lg sm:text-2xl font-black text-slate-900 italic tracking-tight">
                  “We don’t just fix things; we improve the places where you live and work.”
                </p>
              </blockquote>

              {/* Mission Narrative */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
                At Handyman At Home, our mission is simple: to provide <strong className="text-slate-900 font-bold">high-quality, reliable, and affordable</strong> handyman and contracting services to our neighbors in DFW. We understand that your home or business is your most valuable investment. That’s why we approach every project—whether it’s fixing a leaky faucet or managing a complete kitchen renovation—with the same level of <strong className="text-[#0000b9] font-bold">dedication, precision, and care</strong>.
              </p>

              {/* 3 Value Cards under Mission */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-[#0000b9]/40 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#0000b9] flex items-center justify-center font-bold mb-3">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900">Equal Dedication</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    From a single drywall patch to an entire estate remodel, every client receives our complete focus and elite standard.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-[#0000b9]/40 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-3">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900">Protecting Your Investment</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    We utilize premium, industry-tested materials to ensure repairs resist North Texas weather and everyday wear.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-[#0000b9]/40 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-3">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900">Fast, Dependable Timelines</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    Clear schedules, on-time arrivals, and swift project completions without cutting structural or cosmetic corners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. COMPREHENSIVE SERVICES UNDER ONE ROOF
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Wrench className="h-3.5 w-3.5" />
              <span>Full-Service General Contractor</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Services Under One Roof
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              As a full-service general contractor, we eliminate the need to hire multiple specialized trades for your projects. Our diverse team of skilled professionals is equipped to handle:
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {comprehensiveServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0000b9]/30 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Service Image Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                    {/* Tag badge on image */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-extrabold uppercase tracking-wider bg-white/95 text-slate-900 shadow-sm">
                        <ServiceIcon className="h-3 w-3 text-[#0000b9]" />
                        <span>Service 0{idx + 1}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#0000b9] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>

                      {/* Bullet Features */}
                      <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="h-3.5 w-3.5 text-[#0000b9] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action link */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Free Estimates
                      </span>
                      <a
                        href="/#contact"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0000b9] hover:text-[#00008f] transition-colors group/btn"
                      >
                        <span>Book Service</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Under-Grid Banner */}
          <div className="mt-12 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-left">
              <div className="h-12 w-12 rounded-2xl bg-[#0000b9] flex items-center justify-center shrink-0">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Need multiple repairs or a complete remodel?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Save time and money by letting one trusted general contractor handle everything.
                </p>
              </div>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-100 text-[#0000b9] font-extrabold text-sm px-6 py-3 transition-colors shrink-0 cursor-pointer"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. WHY DFW PROPERTY OWNERS TRUST US
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 relative border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
              <span>Core Values &amp; Guarantees</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why DFW Property Owners Trust Us
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              When you invite a contractor into your home or business, trust is paramount. We have earned the loyalty of thousands of clients across North Texas by adhering to strict core values:
            </p>
          </div>

          {/* 5 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-[#0000b9]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-[#0000b9]/10 text-[#0000b9] flex items-center justify-center font-bold">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#0000b9] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Proven DFW Track Record</span>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: Callout Box */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0000b9] via-[#0d1fd6] to-[#00008f] text-white p-6 sm:p-7 shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider mb-4">
                  <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
                  <span>Licensed &amp; Insured</span>
                </div>
                <h3 className="text-xl font-extrabold text-white leading-tight">
                  Ready to Experience the Difference?
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Join thousands of satisfied Dallas–Fort Worth property owners. Call us today for your upfront, transparent quote.
                </p>
              </div>

              <div className="mt-6 space-y-2.5">
                <a
                  href="tel:2148141444"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#0000b9] hover:bg-blue-50 font-extrabold text-xs sm:text-sm py-3 transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4 fill-current" />
                  <span>(214) 814-1444</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. AUTHENTIC ON-SITE CRAFTSMANSHIP GALLERY (REAL GALLERY IMAGES)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
              <BadgeCheck className="h-3.5 w-3.5" />
              <span>Real Work in Action</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Remodeling &amp; Repair Work
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Take a look at real, unedited photos of our completed projects, work vans, and certified crew on site across Dallas–Fort Worth.
            </p>
          </div>

          {/* Grid of 8 authentic gallery images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {previewGallery.map((imgSrc, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-square cursor-pointer border border-slate-200 shadow-2xs hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={imgSrc}
                  alt={`Handyman At Home Real Project Work ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white/90 text-slate-900 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 flex items-center justify-center shadow-lg">
                    <ZoomIn className="h-5 w-5 text-[#0000b9]" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold bg-slate-900/80 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    View Project
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0000b9] hover:text-[#00008f] transition-colors"
            >
              <span>Explore All Completed Projects in Our Gallery</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. PROUDLY SERVING DALLAS-FORT WORTH METROPLEX & BEYOND
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-[#070b1a] to-slate-900 text-white relative overflow-hidden">
        {/* Glow circles */}
        <div className="absolute -top-32 left-10 w-96 h-96 bg-[#0000b9]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 right-10 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-sky-300 mb-3">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span>DFW Service Coverage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Proudly Serving the Dallas-Fort Worth Metroplex and Beyond
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Our mobile repair vans and certified crews provide thorough general contracting, remodeling, and handyman services across the DFW area. We are proud to serve homeowners and businesses in Dallas, Fort Worth, Arlington, Plano, Irving, Garland, Frisco, McKinney, Mesquite, Carrollton, Richardson, Lewisville, and the surrounding communities.
            </p>
          </div>

          {/* City Tags Grid */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {servedCities.map((city) => (
              <div
                key={city}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-[#0000b9]/40 border border-white/10 hover:border-[#0000b9] px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all select-none cursor-default"
              >
                <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>{city}, TX</span>
              </div>
            ))}
          </div>

          {/* Service Guarantee Strip */}
          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">40-Mile Comprehensive Coverage</p>
                <p className="text-xs text-slate-400">Mobile vans fully stocked with commercial tools &amp; supplies</p>
              </div>
            </div>
            <a
              href="tel:2148141444"
              className="inline-flex items-center gap-2 rounded-full bg-[#0000b9] hover:bg-[#0000d9] text-white px-5 py-2.5 text-xs font-bold transition-colors shrink-0"
            >
              <Phone className="h-3.5 w-3.5 fill-current" />
              <span>Check Service in Your Area</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. READY TO TRANSFORM YOUR SPACE? (CONTACT & ACTION)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Get Started Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Ready to Transform Your Space?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Contact us today for a <strong className="text-slate-900">FREE, no-obligation estimate</strong>. We’re happy to discuss your project and provide a transparent quote. Experience the Handyman At Home difference for yourself.
            </p>
          </div>

          {/* 3 Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {/* Phone Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#0000b9]/40 transition-all flex flex-col justify-between text-left">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#0000b9] flex items-center justify-center font-bold mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Call Us Today
                </h3>
                <div className="mt-2 space-y-1">
                  <a
                    href="tel:2148141444"
                    className="text-lg sm:text-xl font-extrabold text-[#0000b9] hover:underline block"
                  >
                    (214) 814-1444
                  </a>
                  <a
                    href="tel:2148141490"
                    className="text-base sm:text-lg font-bold text-slate-700 hover:text-[#0000b9] block"
                  >
                    (214) 814-1490
                  </a>
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-normal">
                  Available 7am to 9pm Mon–Fri, with <strong>24/7 Emergency Services</strong>
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <a
                  href="tel:2148141444"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0000b9] hover:underline"
                >
                  <span>Call Now</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#0000b9]/40 transition-all flex flex-col justify-between text-left">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email Us
                </h3>
                <div className="mt-2">
                  <a
                    href="mailto:handymanathome@gmail.com"
                    className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-[#0000b9] break-all block"
                  >
                    handymanathome@gmail.com
                  </a>
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-normal">
                  Send photos of your project or repair requirements for a prompt estimate reply.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <a
                  href="mailto:handymanathome@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0000b9] hover:underline"
                >
                  <span>Send an Email</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Visit Us Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#0000b9]/40 transition-all flex flex-col justify-between text-left">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Visit Us / Headquarters
                </h3>
                <p className="mt-2 text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  1730 Newlin Dr, DFW, TX 75125, United States
                </p>
                <p className="mt-3 text-xs text-slate-500 leading-normal">
                  Serving the entire Dallas–Fort Worth metro area and surrounding 40-mile communities.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <a
                  href="https://maps.google.com/?q=1730+Newlin+Dr,+DFW,+TX+75125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0000b9] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Grand CTA Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-[#0000b9] via-[#0e21d6] to-[#00008f] text-white p-8 sm:p-12 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Get Your Guaranteed Estimate Now
              </h3>
              <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                Whether you need a quick repair or a full-scale renovation, our expert team is ready to deliver flawless results with upfront pricing.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-100 text-[#0000b9] font-black text-sm sm:text-base px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <span>Request a Free Estimate</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

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
          LIGHTBOX MODAL FOR REAL GALLERY IMAGES
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLightboxIndex((prev) =>
                  prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : null
                );
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedLightboxIndex]}
                alt="Handyman At Home Real Project Full Size"
                className="max-w-full max-h-[85vh] object-contain rounded-xl"
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLightboxIndex((prev) =>
                  prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : null
                );
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-5 inset-x-0 text-center text-xs text-white/60">
              Image {selectedLightboxIndex + 1} of {galleryImages.length} • Handyman At Home DFW
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
