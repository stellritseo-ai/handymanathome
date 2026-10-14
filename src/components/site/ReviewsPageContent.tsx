import { useState, useMemo } from "react";
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
  ChevronRight,
  Check,
  Building2,
  ExternalLink,
  MessageSquare,
  ThumbsUp,
  UserCheck,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/socialLinks";

// SVG Google Icon
function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

interface ClientReview {
  id: number;
  title: string;
  quote: string;
  author: string;
  role?: string;
  location: string;
  serviceCategory: "emergency" | "remodel" | "painting" | "roofing" | "carpentry" | "commercial";
  serviceTag: string;
  initials: string;
  rating: number;
}

const clientReviews: ClientReview[] = [
  {
    id: 1,
    title: "Exceptional Emergency Response",
    quote:
      "I can't thank this company enough! A pipe burst under my kitchen sink late on a Friday night. I called their 24/7 emergency line, and a technician was at my door within the hour. He was prompt, professional, and knowledgeable. He fixed the leak efficiently and saved us from major water damage. Highly recommend for emergencies!",
    author: "Koles Smith",
    location: "Dallas, TX",
    serviceCategory: "emergency",
    serviceTag: "24/7 Emergency Plumbing",
    initials: "KS",
    rating: 5,
  },
  {
    id: 2,
    title: "Flawless Painting & Attention to Detail",
    quote:
      "Such a pleasant experience! We hired Handyman At Home to paint the exterior of our home. The painters were punctual, tidy, and very skilled. They prepped the surfaces perfectly, and the new colors make my house feel bright and inviting. The crew cleaned up everything before they left. A truly professional job.",
    author: "Eva Martin",
    location: "Fort Worth, TX",
    serviceCategory: "painting",
    serviceTag: "Exterior Painting",
    initials: "EM",
    rating: 5,
  },
  {
    id: 3,
    title: "A Stunning Kitchen Transformation",
    quote:
      "We hired Handyman At Home for a complete kitchen remodel, and we are blown away. From the initial transparent quote to the final walkthrough, the team was incredible. They handled the demolition, plumbing, cabinetry, and backsplash installation flawlessly. They finished on time and stayed on budget. We finally have the kitchen of our dreams!",
    author: "Edmundo Torquemada",
    location: "Plano, TX",
    serviceCategory: "remodel",
    serviceTag: "Full Kitchen Remodel",
    initials: "ET",
    rating: 5,
  },
  {
    id: 4,
    title: "Fast, Friendly, and Reliable",
    quote:
      "I highly recommend Handyman At Home again. I needed a kitchen faucet replaced and a few other odd jobs done. Julian came out the same day! He was on time, professional, and fixed everything quickly. It’s hard to find reliable help these days, but this company is the real deal.",
    author: "Cecile S.",
    location: "Arlington, TX",
    serviceCategory: "emergency",
    serviceTag: "Plumbing & Repairs",
    initials: "CS",
    rating: 5,
  },
  {
    id: 5,
    title: "Roofing Repair Done Right",
    quote:
      "After a bad storm, we had a leak in our roof. Handyman At Home came out for a free estimate. They didn't try to upsell me on a whole new roof; they just fixed the damaged flashing and shingles. The price was fair, the work was fast, and we haven't had a leak since. Honest contractors are hard to find!",
    author: "Marcus V.",
    location: "Irving, TX",
    serviceCategory: "roofing",
    serviceTag: "Roof & Flashing Repair",
    initials: "MV",
    rating: 5,
  },
  {
    id: 6,
    title: "Professional Bathroom Remodel",
    quote:
      "We used Handyman At Home to update our master bathroom. They replaced the old tub with a beautiful walk-in shower and installed new tile flooring. The craftsmanship is top-notch. The crew was respectful of our home, wore shoe covers, and cleaned up daily. We will definitely use them for our next project.",
    author: "Sarah T.",
    location: "Garland, TX",
    serviceCategory: "remodel",
    serviceTag: "Master Bathroom Remodel",
    initials: "ST",
    rating: 5,
  },
  {
    id: 7,
    title: "The \"Jack of All Trades\" We Needed",
    quote:
      "I had a long list of things to fix: a broken fence gate, a ceiling fan to install, and some drywall that needed patching. Handyman At Home sent one technician who knocked it all out in a single afternoon. His attention to detail was fantastic. It’s so nice to have one company to call for everything.",
    author: "David L.",
    location: "Frisco, TX",
    serviceCategory: "carpentry",
    serviceTag: "Handyman & Multi-Trade",
    initials: "DL",
    rating: 5,
  },
  {
    id: 8,
    title: "Excellent Commercial Service",
    quote:
      "We manage several commercial properties in the DFW area and have relied on Handyman At Home for years. They handle our tenant repairs, painting, and general maintenance. They are always professional, insured, and communicate well with our property managers. They are an invaluable partner to our business.",
    author: "Linda M.",
    role: "Property Manager",
    location: "Richardson, TX",
    serviceCategory: "commercial",
    serviceTag: "Commercial Facilities",
    initials: "LM",
    rating: 5,
  },
  {
    id: 9,
    title: "Beautiful Landscaping & Outdoor Work",
    quote:
      "Handyman At Home built a new deck and pergola for our backyard, and it turned out better than we imagined. The carpenter was highly skilled, and the project was completed exactly when they said it would be. They also helped us with some landscaping to finish the look. We spend every weekend out there now!",
    author: "James H.",
    location: "McKinney, TX",
    serviceCategory: "carpentry",
    serviceTag: "Custom Deck & Pergola",
    initials: "JH",
    rating: 5,
  },
  {
    id: 10,
    title: "Transparent Pricing and Great Communication",
    quote:
      "What I appreciated most about Handyman At Home was the communication. They provided a detailed, upfront quote and explained exactly what needed to be done. There were no hidden fees or surprises at the end. The quality of the plumbing repair was excellent. I will be using them again.",
    author: "Patricia K.",
    location: "Carrollton, TX",
    serviceCategory: "emergency",
    serviceTag: "Plumbing & Transparent Quote",
    initials: "PK",
    rating: 5,
  },
  {
    id: 11,
    title: "Went Above and Beyond",
    quote:
      "The technician who came to assemble our new furniture and mount our TVs was fantastic. He was polite, worked efficiently, and even helped move a heavy piece of furniture for me. He went above and beyond what was asked. It’s clear this company values its customers.",
    author: "Robert B.",
    location: "Lewisville, TX",
    serviceCategory: "carpentry",
    serviceTag: "TV Mount & Furniture Assembly",
    initials: "RB",
    rating: 5,
  },
  {
    id: 12,
    title: "Reliable and Punctual",
    quote:
      "In the contracting world, it's rare to find someone who shows up exactly when they say they will. Handyman At Home was right on time. They assessed the job, gave me a fair price, and completed the drywall repair and painting seamlessly. The wall looks brand new. Five stars!",
    author: "Angela D.",
    location: "Mesquite, TX",
    serviceCategory: "painting",
    serviceTag: "Drywall Patch & Painting",
    initials: "AD",
    rating: 5,
  },
  {
    id: 13,
    title: "24 Years of Experience Shows",
    quote:
      "You can tell this company has been around for a long time. Their experience really shows in their work. We had some tricky structural repairs needed on our back porch, and they knew exactly how to handle it. They are true professionals who take pride in their craftsmanship.",
    author: "Tom W.",
    location: "Denton, TX",
    serviceCategory: "carpentry",
    serviceTag: "Structural Porch Repair",
    initials: "TW",
    rating: 5,
  },
  {
    id: 14,
    title: "Great Value for Top-Tier Work",
    quote:
      "I got quotes from several handyman services, and Handyman At Home was the most reasonable while still promising high-quality work. They delivered on that promise. The interior painting looks flawless, and the price was exactly what was quoted. Great value for top-tier service.",
    author: "Maria G.",
    location: "DeSoto, TX",
    serviceCategory: "painting",
    serviceTag: "Interior Painting",
    initials: "MG",
    rating: 5,
  },
  {
    id: 15,
    title: "The Only Call I'll Make From Now On",
    quote:
      "From fixing a leaky pipe to installing new light fixtures and repairing our roof, Handyman At Home has become our go-to for everything. They are reliable, affordable, and always do a fantastic job. I can't recommend them enough to anyone in the DFW area.",
    author: "Kevin N.",
    location: "Cedar Hill, TX",
    serviceCategory: "emergency",
    serviceTag: "Turnkey Maintenance & Repairs",
    initials: "KN",
    rating: 5,
  },
];

type FilterKey = "all" | "remodel" | "painting" | "roofing" | "carpentry" | "commercial" | "emergency";

const filterTabs: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Reviews (15)" },
  { key: "remodel", label: "Remodeling" },
  { key: "painting", label: "Painting & Drywall" },
  { key: "roofing", label: "Roofing" },
  { key: "emergency", label: "Plumbing & Repairs" },
  { key: "carpentry", label: "Carpentry & Decks" },
  { key: "commercial", label: "Commercial" },
];

export function ReviewsPageContent() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredReviews = useMemo(() => {
    if (activeFilter === "all") return clientReviews;
    return clientReviews.filter((r) => r.serviceCategory === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-background text-foreground selection:bg-[#0000b9] selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Dedicated Client Reviews
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#070b1a] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 border-b border-white/10">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute -top-36 left-1/4 w-[520px] h-[520px] bg-[#0000b9]/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-[420px] h-[420px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-[380px] h-[380px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Micro Grid Graphic Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          {/* Breadcrumb Navigation & Top Quick CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a
                    href="/"
                    className="hover:text-white transition-colors flex items-center gap-1 font-medium"
                  >
                    <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                    <span>Home</span>
                  </a>
                </li>
                <li className="text-slate-600">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-white font-semibold flex items-center gap-1.5" aria-current="page">
                  <span>Client Reviews</span>
                </li>
              </ol>
            </nav>

            {/* Design Tip: "Ready to get started?" button in the top right corner */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all hover:scale-102 cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Ready to get started? Request Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm select-none mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>5.0 Star Google Rating • Verified DFW Reviews</span>
              </div>

              {/* H1 Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Client Reviews:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                  Trusted by Dallas-Fort Worth
                </span>{" "}
                Homeowners &amp; Businesses
              </h1>

              {/* Subhead */}
              <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-amber-400 tracking-tight">
                See Why Your Neighbors Rate Us 5-Stars
              </h2>

              {/* Lead Text */}
              <div className="mt-4 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  For over two decades, <strong className="text-white font-bold">Handyman At Home</strong> has been the go-to general contractor for the Dallas-Fort Worth metroplex. But don't just take our word for it. Our reputation has been built one satisfied customer at a time.
                </p>
                <p>
                  With a <strong className="text-white font-bold">5.0 Google Rating</strong> and <strong className="text-emerald-400 font-bold">99.9% Satisfaction Guarantee</strong>, we are proud to share the experiences of the homeowners, property managers, and business owners who trust us with their most valuable investments.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
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
            </div>

            {/* Right Column: Visual Graphic Card ("5.0 Stars Based on Google Reviews" and "100% Recommended in DFW") */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 border border-white/20 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-center">
                {/* Google Logo and Badge */}
                <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full shadow-md text-slate-900 text-xs font-bold mb-4">
                  <GoogleIcon className="w-4 h-4" />
                  <span>Google Reviews Verified</span>
                </div>

                {/* Star Score Graphic */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <span className="text-5xl sm:text-6xl font-black text-white leading-none">5.0</span>
                  <div className="text-left">
                    <div className="flex gap-1 text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Perfect Score
                    </span>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-sm font-bold text-amber-300 mt-2">
                  5.0 Stars Based on Google Reviews
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  100% Recommended in Dallas–Fort Worth &amp; Surrounding 40 Miles
                </p>

                {/* Guarantee Strip inside Card */}
                <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-2 gap-3 text-left">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>99.9%</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium">Satisfaction Guarantee</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-1.5 text-sky-400 text-xs font-bold mb-1">
                      <Award className="h-3.5 w-3.5" />
                      <span>24+ Years</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium">DFW Proven Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTER TABS & ALL 15 CLIENT REVIEWS GRID
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Heading & Category Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-[#0000b9]/10 text-[#0000b9] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Verified Client Testimonials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                What Our DFW Clients Are Saying
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-600">
                Real feedback from real homeowners and business managers across North Texas.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveFilter(tab.key)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 cursor-pointer select-none ${
                      isActive
                        ? "bg-[#0000b9] text-white shadow-sm scale-102"
                        : "bg-white text-slate-700 hover:text-[#0000b9] hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── 3-Column Reviews Cards Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredReviews.map((review) => (
              <article
                key={review.id}
                className="group relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-[0_4px_16px_rgba(9,14,36,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,185,0.1)] hover:border-[#0000b9]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: 5 Stars + Google Verified Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {/* 5-Star Graphic (⭐⭐⭐⭐⭐) */}
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold text-slate-700 bg-slate-50 border border-slate-200">
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span>Verified Google Review</span>
                    </span>
                  </div>

                  {/* Review Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#0000b9] transition-colors leading-snug">
                    {review.id}. {review.title}
                  </h3>

                  {/* Service Pill */}
                  <div className="mt-2 mb-3">
                    <span className="inline-block text-[11px] font-bold text-[#0000b9] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                      {review.serviceTag}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    "{review.quote}"
                  </p>
                </div>

                {/* Author & Location Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Initials Avatar */}
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#0000b9] to-[#1e3a8a] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                      {review.initials}
                    </div>

                    <div className="text-left">
                      <p className="text-sm font-extrabold text-[#0000b9] leading-tight">
                        {review.author}
                      </p>
                      <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 text-amber-500 shrink-0" />
                        <span>{review.role ? `${review.role}, ` : ""}{review.location}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 shrink-0">
                    5.0 ★
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Under-Grid Trust Strip */}
          <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-left">
              <div className="h-12 w-12 rounded-2xl bg-[#0000b9]/10 text-[#0000b9] flex items-center justify-center shrink-0 font-bold">
                <ThumbsUp className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Are you a past client of Handyman At Home?
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Your feedback helps neighbors make informed decisions. We invite you to leave a Google review.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href="https://g.page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 hover:border-[#0000b9] bg-white hover:bg-blue-50/50 text-[#0000b9] font-bold text-xs sm:text-sm px-4 py-2.5 transition-colors"
              >
                <GoogleIcon className="w-4 h-4" />
                <span>Google Review</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={SOCIAL_LINKS.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-red-200 hover:border-red-600 bg-white hover:bg-red-50/50 text-red-600 font-bold text-xs sm:text-sm px-4 py-2.5 transition-colors"
              >
                <span>Yelp Review</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={SOCIAL_LINKS.bbb}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 hover:border-[#005a9c] bg-white hover:bg-blue-50/50 text-[#005a9c] font-bold text-xs sm:text-sm px-4 py-2.5 transition-colors"
              >
                <span>BBB Profile</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. READY TO EXPERIENCE THE HANDYMAN AT HOME DIFFERENCE? (CTA)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Experience The Difference</span>
            </div>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Ready to Experience the Handyman At Home Difference?
            </h2>

            {/* Subhead & Paragraph */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Join the thousands of satisfied homeowners and businesses across <strong className="text-slate-900 font-bold">Dallas, Fort Worth, and the surrounding 40-mile area</strong>.
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Whether you need a quick repair, a major remodel, or 24/7 emergency service, our team is ready to deliver quality craftsmanship and exceptional customer service.
            </p>
          </div>

          {/* Contact Fast Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {/* Phone */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#0000b9]/40 transition-all flex flex-col justify-between text-left">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#0000b9] flex items-center justify-center font-bold mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Call Us Anytime
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
                  Mon–Fri 7am–9pm with <strong>24/7 Emergency Dispatch</strong>
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <a
                  href="tel:2148141444"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0000b9] hover:underline"
                >
                  <span>Call Direct</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Email */}
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
                  Send details or photos of your project for a prompt estimate response.
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

            {/* Address */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#0000b9]/40 transition-all flex flex-col justify-between text-left">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Headquarters
                </h3>
                <p className="mt-2 text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  1730 Newlin Dr, DFW, TX 75125, United States
                </p>
                <p className="mt-3 text-xs text-slate-500 leading-normal">
                  Serving Dallas, Fort Worth, Arlington, Plano, and neighboring areas.
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
                Get Your Free Estimate Today
              </h3>
              <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                Join our family of happy DFW clients. Transparent quotes, master craftsmanship, and no hidden fees guaranteed.
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
    </div>
  );
}
