import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

// Hero static video & images
import heroVideo from "@/assets/hero.mp4";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import serviceHouseImg from "@/assets/service-house.jpg";
import serviceDrivewayImg from "@/assets/service-driveway.jpg";
import serviceRoofImg from "@/assets/service-roof.jpg";
import serviceDeckImg from "@/assets/service-deck.jpg";

import {
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  X,
  Play,
  Camera,
  Award,
  Building2,
  Home,
  Search,
  Film,
  Sparkles,
  Filter,
  Layers,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Maximize2,
  Grid,
} from "lucide-react";

/* ── Interactive Before & After Slider Component ───────────────────── */
function BeforeAfterSlider({
  title,
  service,
  before,
  after,
  beforeDesc,
  afterDesc,
}: {
  title: string;
  service: string;
  before: string;
  after: string;
  beforeDesc: string;
  afterDesc: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#0ea5e9]/40 transition-all duration-300 flex flex-col justify-between text-left group">
      <div>
        {/* Service Tag */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-1 rounded-full border border-[#0ea5e9]/20">
            {service}
          </span>
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <span>Drag Slider</span> ↔
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 group-hover:text-[#0ea5e9] transition-colors">
          {title}
        </h3>

        {/* Interactive Comparison Container */}
        <div
          className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden shadow-md select-none cursor-ew-resize border border-slate-200 mb-5"
          onMouseMove={(e) => {
            if (isDragging) {
              const rect = e.currentTarget.getBoundingClientRect();
              handleMove(e.clientX, rect);
            }
          }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            handleMove(e.touches[0].clientX, rect);
          }}
        >
          {/* AFTER Image (Background) */}
          <img src={after} alt={`${title} After`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md z-10">
            AFTER
          </div>

          {/* BEFORE Image (Clipped Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={before}
              alt={`${title} Before`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: "100%", minWidth: "100%" }}
            />
            <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md z-10">
              BEFORE
            </div>
          </div>

          {/* Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0ea5e9] border-2 border-white shadow-xl flex items-center justify-center text-white">
              <span className="text-xs font-black">↔</span>
            </div>
          </div>
        </div>

        {/* Descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl">
            <span className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider block mb-1">
              Before Condition:
            </span>
            <p className="text-slate-600 font-medium leading-relaxed">{beforeDesc}</p>
          </div>
          <div className="bg-sky-50/50 border border-sky-100 p-3 rounded-xl border-l-2 border-l-[#0ea5e9]">
            <span className="font-extrabold text-[#0ea5e9] text-[10px] uppercase tracking-wider block mb-1">
              After Transformation:
            </span>
            <p className="text-slate-700 font-medium leading-relaxed">{afterDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 6 Before & After Data Sets ───────────────────────────────────── */
const beforeAfterCases = [
  {
    title: "Concrete & Driveway Degreasing",
    service: "Concrete Cleaning",
    before: beforeImg,
    after: afterImg,
    beforeDesc: "Years of heavy oil stains, tire marks, and ground-in red clay dirt had left this concrete driveway looking aged and stained.",
    afterDesc: "Hot water pressure washing lifted deep-set grease, restoring original bright concrete and dramatically boosting curb appeal.",
  },
  {
    title: "Algae-Free Soft Wash Roof Restoration",
    service: "Roof Washing",
    before: serviceRoofImg,
    after: serviceHouseImg,
    beforeDesc: "Dark black Gloeocapsa magma algae streaks covered shingles, absorbing excessive heat and dulling the roof structure.",
    afterDesc: "Low-pressure soft wash chemistry safely eliminated 100% of organic growth without shingle granule loss.",
  },
  {
    title: "Siding & Full Exterior Soft Wash",
    service: "Siding Cleaning",
    before: serviceHouseImg,
    after: serviceDeckImg,
    beforeDesc: "Heavy green algae, mold spores, and airborne pollen dulled the home's vinyl siding, creating an unkempt appearance.",
    afterDesc: "A complete soft wash revived original vibrant color, sanitizing surface fibers and restoring clean curb appeal.",
  },
  {
    title: "Driveway & Entrance Pavement Revival",
    service: "Driveway Cleaning",
    before: serviceDrivewayImg,
    after: serviceDeckImg,
    beforeDesc: "Tire rubber marks, oil spots, and organic mildew created dark eyesores across the entryway driveway pavement.",
    afterDesc: "Professional surface cleaner pressure washing washed away all stains, delivering a smooth like-new entry.",
  },
  {
    title: "Full Exterior Paint Refresh & Prep",
    service: "Painting Services",
    before: serviceHouseImg,
    after: afterImg,
    beforeDesc: "Chipped, sun-faded siding paint left wood trim exposed to moisture absorption, wood rot, and structural decay.",
    afterDesc: "Thorough pressure wash prep, scraping, priming, and 2 coats of premium weather-shield exterior paint revitalized the home.",
  },
  {
    title: "Commercial Facility Exterior Maintenance",
    service: "Commercial Property",
    before: serviceDrivewayImg,
    after: serviceHouseImg,
    beforeDesc: "Accumulated commercial traffic grime, oil leaks, and algae dulled the building facade and customer entrance walkway.",
    afterDesc: "Industrial hot-water power washing restored a clean, professional, welcoming storefront image that attracts customers.",
  },
];

/* ── Project Tables Data ──────────────────────────────────────────── */
const residentialProjects = [
  { type: "Full Home Transformation", loc: "Mooresville, NC", services: "Siding Cleaning + Driveway Cleaning + Painting" },
  { type: "Roof Restoration", loc: "Cornelius, NC", services: "Roof Washing + Soft Wash Treatment" },
  { type: "Concrete Revival", loc: "Davidson, NC", services: "Driveway & Patio Cleaning" },
  { type: "Curb Appeal Boost", loc: "Huntersville, NC", services: "Full-House Soft Wash + Gutter Cleaning" },
  { type: "Historic Home Refresh", loc: "Statesville, NC", services: "Siding Cleaning + Painting" },
];

const commercialProjects = [
  { type: "Office Building Exterior", loc: "Mooresville, NC", services: "Full Building Wash + Parking Lot Cleaning" },
  { type: "Retail Storefront", loc: "Huntersville, NC", services: "Siding Cleaning + Window Frame Cleaning" },
  { type: "Warehouse & Loading Dock", loc: "Statesville, NC", services: "Concrete Cleaning + Industrial Degreasing" },
  { type: "Restaurant Exterior", loc: "Cornelius, NC", services: "Building Wash + Grease Removal" },
  { type: "Shopping Center", loc: "Mooresville, NC", services: "Complete Exterior Cleaning Package" },
];

/* ── Dynamic Load of All Media in src/assets/steam ──────────────── */
const steamImagesModules = import.meta.glob<{ default: string }>(
  "@/assets/steam/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

const steamVideosModules = import.meta.glob<{ default: string }>(
  "@/assets/steam/*.{mp4,webm,MP4,WEBM}",
  { eager: true }
);

export interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  category: "all" | "videos" | "siding" | "concrete" | "roofing" | "commercial";
  categoryLabel: string;
  tag: string;
}

// Generate image items list
const rawImagesList: MediaItem[] = Object.entries(steamImagesModules).map(([path, mod], idx) => {
  const filename = path.split("/").pop() || `Photo ${idx + 1}`;
  const lowerName = filename.toLowerCase();

  let category: "all" | "videos" | "siding" | "concrete" | "roofing" | "commercial" = "siding";
  let categoryLabel = "Siding & House Wash";
  let tag = "Residential Wash";

  if (lowerName.includes("roof")) {
    category = "roofing";
    categoryLabel = "Roof Cleaning";
    tag = "Soft Wash Roof";
  } else if (lowerName.includes("driveway") || lowerName.includes("concrete") || lowerName.includes("deck")) {
    category = "concrete";
    categoryLabel = "Concrete & Driveway";
    tag = "Surface Pressure Wash";
  } else if (lowerName.includes("commercial")) {
    category = "commercial";
    categoryLabel = "Commercial Facility";
    tag = "Commercial Property";
  } else if (lowerName.includes("gallery")) {
    category = "siding";
    categoryLabel = "Siding & Exterior";
    tag = "Exterior Refresh";
  } else if (lowerName.includes("2023") || lowerName.includes("1696")) {
    category = "siding";
    categoryLabel = "Site Work";
    tag = "Lake Norman Job Site";
  }

  const titleClean = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/^(1696255\d+_|2023\d+_)/, "");

  const displayTitle =
    titleClean.length > 28 || titleClean.length < 3
      ? `Steam On Wheels Project ${idx + 1}`
      : titleClean.charAt(0).toUpperCase() + titleClean.slice(1);

  return {
    id: `img-${idx}`,
    type: "image",
    src: mod.default,
    title: displayTitle,
    category,
    categoryLabel,
    tag,
  };
});

// Generate video items list
const rawVideosList: MediaItem[] = Object.entries(steamVideosModules).map(([path, mod], idx) => {
  const filename = path.split("/").pop() || `Video ${idx + 1}`;
  const lowerName = filename.toLowerCase();

  let tag = "🎬 Job Site Action Video";
  if (lowerName.includes("soft") || idx % 4 === 1) tag = "✨ Soft Wash Video";
  else if (lowerName.includes("concrete") || idx % 4 === 2) tag = "🪨 Hot Water Pressure Wash";
  else if (lowerName.includes("commercial") || idx % 4 === 3) tag = "🏢 Commercial Equipment";

  return {
    id: `vid-${idx}`,
    type: "video",
    src: mod.default,
    title: `Steam On Wheels Action Video #${idx + 1}`,
    category: "videos",
    categoryLabel: "Action Videos",
    tag,
  };
});

// Combined list: Interleave top videos with images for an engaging mix
const allMediaItems: MediaItem[] = [];
const maxLen = Math.max(rawImagesList.length, rawVideosList.length);
for (let i = 0; i < maxLen; i++) {
  if (i < rawVideosList.length) allMediaItems.push(rawVideosList[i]);
  if (i < rawImagesList.length) allMediaItems.push(rawImagesList[i]);
}

export function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  // Filter media based on active tab and search query
  const filteredMedia = useMemo(() => {
    return allMediaItems.filter((item) => {
      // Tab filter
      if (activeTab === "videos" && item.type !== "video") return false;
      if (activeTab === "images" && item.type !== "image") return false;

      // Search filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesTag = item.tag.toLowerCase().includes(q);
        const matchesCat = item.categoryLabel.toLowerCase().includes(q);
        return matchesTitle || matchesTag || matchesCat;
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  const displayedMedia = useMemo(() => {
    return filteredMedia.slice(0, visibleCount);
  }, [filteredMedia, visibleCount]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? filteredMedia.length - 1 : prev - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === filteredMedia.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredMedia]);

  const counts = useMemo(() => {
    return {
      all: allMediaItems.length,
      videos: rawVideosList.length,
      images: rawImagesList.length,
    };
  }, []);

  return (
    <div className="w-full bg-background overflow-x-hidden font-sans">
      <Nav />

      {/* ═══════════════════════════════════════════════════════════
          HERO / PAGE HEADER — Ultra Premium Dark Section
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16 pt-[120px] sm:pt-[150px] md:pt-[170px] pb-12 sm:pb-16 bg-[#090d16]">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#090d16]/90 via-[#090d16]/80 to-[#090d16]" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl w-full flex flex-col items-center space-y-4 sm:space-y-6 text-white text-center">
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 backdrop-blur-md text-sky-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg select-none"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            <span>{allMediaItems.length}+ Real Media Files • 54 Action Videos • 15 Years Experience</span>
          </motion.div>

          {/* H1 Headline */}
          <h1
            className="text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] max-w-4xl font-black text-center"
            style={{
              fontSize: "clamp(32px, 4.8vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            See the Steam On Wheels Difference —{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real Photos &amp; Action Videos.
            </span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base text-slate-300 font-medium leading-relaxed max-w-2xl text-center"
          >
            Explore over {allMediaItems.length} authentic photos and HD video clips from real residential and commercial pressure washing, soft roof cleaning, and exterior painting projects across Mooresville NC &amp; Lake Norman.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
          >
            <a
              href="tel:7045169509"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:opacity-95 px-6 sm:px-8 py-3.5 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_28px_rgba(14,165,233,0.5)] w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              <span>Call: (704) 516-9509</span>
            </a>
            <a
              href="#media-gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 sm:px-8 py-3.5 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider hover:bg-white hover:text-slate-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <Film className="w-4 h-4 text-sky-400" />
              <span>Browse All {allMediaItems.length} Media</span>
            </a>
          </motion.div>

          {/* Quick Counter Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="w-full border-t border-white/10 pt-6 mt-4 max-w-3xl"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { count: `${rawImagesList.length}+`, label: "Job Site Photos" },
                { count: `${rawVideosList.length}`, label: "Action Videos" },
                { count: "100%", label: "Real Local Work" },
                { count: "15+", label: "Years Experience" },
              ].map(({ count, label }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-black text-sky-400">{count}</div>
                  <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INTERACTIVE BEFORE & AFTER SLIDERS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-[#0ea5e9]" />
              Interactive Before &amp; After Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Drag the Slider to See the Transformation
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl mx-auto mt-2">
              Our hot-water pressure washing and gentle soft-wash chemistry safely remove years of built-up oil, black algae, and grime.
            </p>
          </motion.div>

          {/* 6 Before & After Slider Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterCases.map((item) => (
              <BeforeAfterSlider
                key={item.title}
                title={item.title}
                service={item.service}
                before={item.before}
                after={item.after}
                beforeDesc={item.beforeDesc}
                afterDesc={item.afterDesc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DYNAMIC MEDIA GALLERY GRID (200+ Photos & Videos)
      ═══════════════════════════════════════════════════════════ */}
      <section id="media-gallery" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#0ea5e9]" />
              Full Project Showcase ({allMediaItems.length} Total Files)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Explore Our Complete Photo &amp; Video Collection
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl mx-auto mt-2">
              Filter by category or watch live action videos of our equipment restoring homes and businesses in Mooresville &amp; Lake Norman.
            </p>
          </motion.div>

          {/* FILTER TABS & SEARCH BAR CONTAINER */}
          <div className="mb-10 space-y-6">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {[
                { id: "all", label: "All Media", count: counts.all, icon: Grid },
                { id: "videos", label: "🎬 Action Videos", count: counts.videos, icon: Film },
                { id: "images", label: "🏠 All Images", count: counts.images, icon: Home },
              ].map(({ id, label, count, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveTab(id);
                    setVisibleCount(24);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 border ${
                    activeTab === id
                      ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${activeTab === id ? "text-sky-400" : "text-slate-400"}`} />
                  <span>{label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] ${
                      activeTab === id ? "bg-sky-500 text-white" : "bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input Bar & Active Count */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto bg-slate-50 border border-slate-200/80 p-3 sm:p-4 rounded-2xl shadow-sm">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search photos & videos..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(24);
                  }}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="text-xs font-extrabold text-slate-600 flex items-center gap-2">
                <span>Showing {displayedMedia.length} of {filteredMedia.length} Media Items</span>
                {filteredMedia.length < allMediaItems.length && (
                  <span className="text-[10px] text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                    Filtered
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* MEDIA GRID */}
          {displayedMedia.length === 0 ? (
            <div className="py-16 text-center bg-slate-50 border border-dashed border-slate-200 rounded-3xl">
              <Camera className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">No media items found</h3>
              <p className="text-xs text-slate-500 mt-1">Try resetting your search query or switching tabs.</p>
              <button
                onClick={() => {
                  setActiveTab("all");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-4 py-2 rounded-xl text-xs font-extrabold hover:bg-[#0284c7] transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {displayedMedia.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: (idx % 12) * 0.03 }}
                  onClick={() => setLightboxIndex(idx)}
                  className={`group relative h-[180px] sm:h-[210px] rounded-2xl overflow-hidden shadow-sm bg-slate-950 border border-slate-200 cursor-pointer hover:border-[#0ea5e9] hover:shadow-xl transition-all duration-300 ${
                    item.type === "video" ? "ring-2 ring-sky-500/40" : ""
                  }`}
                >
                  {/* Media Rendering */}
                  {item.type === "video" ? (
                    <div className="relative w-full h-full bg-slate-950 flex items-center justify-center">
                      <video
                        src={item.src}
                        preload="metadata"
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                      />
                      {/* Play Overlay Icon */}
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-[#0ea5e9]/90 backdrop-blur-md text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                        </div>
                      </div>
                      <span className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-md text-sky-400 border border-sky-400/30 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md flex items-center gap-1 z-10 shadow-md">
                        <Film className="w-2.5 h-2.5 text-sky-400" />
                        VIDEO
                      </span>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    </div>
                  )}

                  {/* Title & Tag Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left z-10">
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-sky-300 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-md inline-block max-w-full truncate">
                      {item.tag}
                    </span>
                    <h4 className="text-[11px] font-extrabold text-white mt-1 group-hover:text-sky-300 transition-colors truncate">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* PAGINATION / LOAD MORE BUTTONS */}
          {filteredMedia.length > visibleCount && (
            <div className="mt-12 text-center space-y-3">
              <button
                onClick={() => setVisibleCount((prev) => prev + 24)}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-xs font-black uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Load 24 More Items ({filteredMedia.length - visibleCount} Remaining)</span>
              </button>

              <div className="block">
                <button
                  onClick={() => setVisibleCount(filteredMedia.length)}
                  className="text-xs font-bold text-sky-600 hover:text-sky-800 underline decoration-sky-300 underline-offset-4 transition-colors"
                >
                  Show All {filteredMedia.length} Items at Once
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LIGHTBOX MODAL (Supports both High-Res Photos & Videos)
      ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 shadow-lg border border-white/10"
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev === 0 ? filteredMedia.length - 1 : prev - 1) : null
                );
              }}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 border border-white/10 shadow-lg"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev === filteredMedia.length - 1 ? 0 : prev + 1) : null
                );
              }}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 border border-white/10 shadow-lg"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredMedia[lightboxIndex].type === "video" ? (
                <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <video
                    src={filteredMedia[lightboxIndex].src}
                    controls
                    autoPlay
                    playsInline
                    className="max-w-full max-h-[75vh] object-contain"
                  />
                </div>
              ) : (
                <img
                  src={filteredMedia[lightboxIndex].src}
                  alt={filteredMedia[lightboxIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
              )}

              {/* Detail Overlay Bar */}
              <div className="mt-4 text-center max-w-xl w-full bg-slate-900/90 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow-xl">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-[9px] font-black uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-0.5 rounded-full border border-sky-400/20">
                    {filteredMedia[lightboxIndex].tag}
                  </span>
                  <span className="text-[10px] text-slate-400 font-extrabold">
                    {lightboxIndex + 1} of {filteredMedia.length}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-black text-white">
                  {filteredMedia[lightboxIndex].title}
                </h3>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Steam On Wheels Authentic Job Site Media • Lake Norman NC
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════
          PROJECT HIGHLIGHTS (Residential & Commercial Tables)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-[#0ea5e9]" />
              Project Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Recent Completed Projects Summary
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Residential Showcase Table */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="p-2.5 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9]">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Residential Showcase</h3>
                  <p className="text-xs text-slate-500 font-medium">Home &amp; Estate Transformations</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase tracking-wider text-[10px]">
                      <th className="pb-3">Project Type</th>
                      <th className="pb-3">Location</th>
                      <th className="pb-3">Services Provided</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                    {residentialProjects.map((row) => (
                      <tr key={row.type} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 font-extrabold text-slate-900">{row.type}</td>
                        <td className="py-3 text-[#0ea5e9] font-bold">{row.loc}</td>
                        <td className="py-3 text-slate-600">{row.services}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Commercial Showcase Table */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="p-2.5 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Commercial Showcase</h3>
                  <p className="text-xs text-slate-500 font-medium">Business &amp; Facility Maintenance</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase tracking-wider text-[10px]">
                      <th className="pb-3">Project Type</th>
                      <th className="pb-3">Location</th>
                      <th className="pb-3">Services Provided</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                    {commercialProjects.map((row) => (
                      <tr key={row.type} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 font-extrabold text-slate-900">{row.type}</td>
                        <td className="py-3 text-[#0ea5e9] font-bold">{row.loc}</td>
                        <td className="py-3 text-slate-600">{row.services}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY OUR RESULTS SPEAK VOLUMES (5 Pillars)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Our Results Speak Volumes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
            {[
              { label: "100% Real Projects", sub: "Every image & video is from an actual Steam On Wheels job." },
              { label: "Professional Rigs", sub: "State-of-the-art hot water pressure wash & soft wash equipment." },
              { label: "Expert Techniques", sub: "Tailored pressure and chemistry for every single surface." },
              { label: "Attention to Detail", sub: "We don't cut corners—we deliver clean perfection." },
              { label: "Christian Integrity", sub: "Honest work, fair pricing, and trustworthy service." },
            ].map(({ label, sub }) => (
              <div key={label} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-[#0ea5e9] mb-3" />
                <h4 className="text-sm font-extrabold text-slate-900 mb-1">{label}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SUBMIT YOUR OWN PHOTOS & SOCIAL LINKS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#0ea5e9]" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Submit Your Own Photos</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Send Us Your Before &amp; After Transformation Photos!
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-lg mx-auto">
            We love hearing from our clients! If we've worked on your property, send your photos to{" "}
            <a href="mailto:motivate71@yahoo.com" className="text-[#0ea5e9] font-bold hover:underline">
              motivate71@yahoo.com
            </a>{" "}
            and we'll feature them in our gallery.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="tel:7045169509"
              className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider shadow-md hover:bg-[#0284c7] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call (704) 516-9509</span>
            </a>
            <a
              href="mailto:motivate71@yahoo.com"
              className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider shadow-sm hover:bg-slate-50 transition-all"
            >
              <Mail className="w-4 h-4 text-sky-600" />
              <span>motivate71@yahoo.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA — Dark Section
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden py-16 sm:py-20 text-white bg-[#090d16]">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/85 to-[#090d16]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready to See Your Property Transformed Like This?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get your 100% free, no-obligation estimate from David Hudson today. Fast response across Mooresville, Cornelius, Davidson, Huntersville &amp; Lake Norman.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:7045169509"
              className="inline-flex items-center gap-2 rounded-full bg-[#0ea5e9] hover:bg-[#0284c7] px-8 py-4 text-white text-xs font-black uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call (704) 516-9509</span>
            </a>
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-slate-900 px-8 py-4 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md transition-all"
            >
              <span>Get Free Estimate Online</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
