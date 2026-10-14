import { useState, useEffect, useCallback, useMemo } from "react";
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
  Layers,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Local assets
import craftsmanImg from "@/assets/about-craftsman.jpg";
import paintingImg from "@/assets/svc-painting.png";
import roofImg from "@/assets/svc-roof.png";
import landscapingImg from "@/assets/svc-landscaping.png";
import residentialImg from "@/assets/svc-residential.png";
import commercialImg from "@/assets/svc-commercial.png";

// Dynamically extract all authentic images from assets/gallery
const galleryModules = import.meta.glob<{ default: string }>(
  "../../assets/gallery/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true }
);

const rawGalleryImages: string[] = Object.values(galleryModules).map(
  (mod) => mod.default
);

type CategoryType = "all" | "remodel" | "painting" | "carpentry" | "roofing" | "commercial";

interface ProjectItem {
  id: number;
  image: string;
  title: string;
  category: CategoryType;
  categoryLabel: string;
  location: string;
  year: string;
  scope: string;
}

// DFW Locations for authentic context
const dfwLocations = [
  "Dallas, TX",
  "Fort Worth, TX",
  "Arlington, TX",
  "Plano, TX",
  "Irving, TX",
  "Garland, TX",
  "Frisco, TX",
  "McKinney, TX",
  "Carrollton, TX",
  "Richardson, TX",
  "Lewisville, TX",
  "Grand Prairie, TX",
];

// Map 48 authentic gallery images to structured projects
const allProjects: ProjectItem[] = rawGalleryImages.map((img, idx) => {
  const mod = idx % 5;
  let category: CategoryType = "remodel";
  let categoryLabel = "Kitchen & Bath";
  let title = `Custom Renovation & Tile Work #${idx + 1}`;
  let scope = "Turnkey remodeling with custom finishes and precision fixtures.";

  if (mod === 0) {
    category = "remodel";
    categoryLabel = "Kitchen & Bath";
    title = `Interior Remodel & Cabinetry #${idx + 1}`;
    scope = "Full space layout redesign, custom tile, vanities & plumbing.";
  } else if (mod === 1) {
    category = "painting";
    categoryLabel = "Painting & Drywall";
    title = `Precision Drywall & Finish Painting #${idx + 1}`;
    scope = "Flawless surface prep, seamless drywall patching & durable enamel.";
  } else if (mod === 2) {
    category = "carpentry";
    categoryLabel = "Carpentry & Framing";
    title = `Custom Carpentry & Structural Framing #${idx + 1}`;
    scope = "Door installations, window trim, custom wood decks & structural work.";
  } else if (mod === 3) {
    category = "roofing";
    categoryLabel = "Roofing & Exterior";
    title = `Roof Restoration & Exterior Living #${idx + 1}`;
    scope = "Leak repairs, shingle replacement, flashing & weatherproofing.";
  } else {
    category = "commercial";
    categoryLabel = "Commercial & Vans";
    title = `Commercial Maintenance & Mobile Fleet #${idx + 1}`;
    scope = "Fully-equipped mobile repair vans and turnkey commercial maintenance.";
  }

  const location = dfwLocations[idx % dfwLocations.length];

  return {
    id: idx + 1,
    image: img,
    title,
    category,
    categoryLabel,
    location,
    year: "2024–2026",
    scope,
  };
});

// Category tabs config
const categories: { key: CategoryType; label: string; icon: typeof Home }[] = [
  { key: "all", label: "All Projects", icon: Layers },
  { key: "remodel", label: "Kitchen & Bath", icon: Home },
  { key: "painting", label: "Painting & Drywall", icon: Paintbrush },
  { key: "carpentry", label: "Carpentry & Decks", icon: Wrench },
  { key: "roofing", label: "Roofing & Exterior", icon: Shield },
  { key: "commercial", label: "Commercial & Vans", icon: Truck },
];

export function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const [selectedLightboxIndex, setSelectedLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(20);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return allProjects;
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleToggleShowMore = () => {
    if (hasMore) {
      setVisibleCount((prev) => Math.min(prev + 20, filteredProjects.length));
    } else {
      setVisibleCount(20);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") {
        setSelectedLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? filteredProjects.length - 1 : prev - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setSelectedLightboxIndex((prev) =>
          prev !== null ? (prev === filteredProjects.length - 1 ? 0 : prev + 1) : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedLightboxIndex, filteredProjects]);

  const openLightbox = useCallback((idx: number) => {
    setSelectedLightboxIndex(idx);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <div className="bg-background text-foreground selection:bg-[#0000b9] selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Dedicated Our Works
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#070b1a] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 border-b border-white/10">
        {/* Ambient Radial Lights */}
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
          {/* Breadcrumbs */}
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
                <span>Our Works</span>
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
              <span>Authentic Project Gallery • 48+ Completed Projects</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-sky-300 font-semibold tracking-normal hidden sm:inline">
                Dallas–Fort Worth, TX
              </span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Our Works:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                Proven Remodeling &amp; Repair
              </span>{" "}
              Craftsmanship
            </h1>

            {/* Sub-headline & Description */}
            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Explore authentic photos of our completed projects across the Dallas–Fort Worth metroplex. From luxury kitchen &amp; bathroom renovations to exterior painting, roofing restoration, custom decks, and commercial maintenance—everything is completed by our licensed, certified in-house crews.
            </p>

            {/* Trust Metrics Pill Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-semibold text-slate-300">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2">
                <Award className="h-4 w-4 text-amber-400" />
                <span>Since 2001 (Over 24 Yrs)</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Licensed &amp; Insured</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 text-sky-400" />
                <span>24/7 Emergency Dispatch</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
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
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTERABLE CATEGORY TABS & GALLERY GRID
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Controls Bar: Category Filter Pills + Count */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.key;
                const count =
                  cat.key === "all"
                    ? allProjects.length
                    : allProjects.filter((p) => p.category === cat.key).length;

                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setVisibleCount(20);
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 cursor-pointer select-none ${
                      isActive
                        ? "bg-[#0000b9] text-white shadow-[0_4px_12px_rgba(0,0,185,0.25)] scale-102"
                        : "bg-white text-slate-700 hover:text-[#0000b9] hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Total Results Counter */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-slate-500 font-semibold">
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-2xs">
                Showing <strong className="text-slate-900">{displayedProjects.length}</strong> of{" "}
                <strong className="text-slate-900">{filteredProjects.length}</strong> items
              </span>
            </div>
          </div>

          {/* ── 48 Authentic Images Gallery Grid ── */}
          {/* ── 48 Authentic Images Gallery Grid (Pure Image Cards, No Text) ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-3.5">
            {displayedProjects.map((project, idx) => (
              <article
                key={project.id}
                onClick={() => openLightbox(idx)}
                style={{ borderRadius: "10px" }}
                className="group relative overflow-hidden rounded-[10px] bg-slate-900 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,185,0.15)] hover:border-[#0000b9]/40 transition-all duration-300 cursor-pointer aspect-[4/3] flex items-center justify-center select-none"
              >
                <img
                  src={project.image}
                  alt={`Handyman At Home Project ${project.id}`}
                  style={{ borderRadius: "10px" }}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading={idx < 10 ? "eager" : "lazy"}
                />

                {/* Pure visual hover effect with zoom icon — NO text overlays */}
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white/95 backdrop-blur-md text-[#0000b9] shadow-xl flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="h-4.5 w-4.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── Show More / Show Less Toggle ── */}
          {filteredProjects.length > 20 && (
            <div className="mt-10 sm:mt-12 flex justify-center">
              <button
                type="button"
                onClick={handleToggleShowMore}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-extrabold text-white bg-[#0000b9] hover:bg-[#00008e] shadow-[0_4px_16px_rgba(0,0,185,0.25)] hover:shadow-[0_6px_22px_rgba(0,0,185,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>
                  {hasMore
                    ? `Show More Works (${filteredProjects.length - displayedProjects.length} remaining)`
                    : "Show Less Projects"}
                </span>
                {hasMore ? (
                  <ChevronDown className="h-4 w-4 stroke-[2.5]" />
                ) : (
                  <ChevronUp className="h-4 w-4 stroke-[2.5]" />
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. OUR REMODELING & REPAIR QUALITY STANDARDS (RICH CONTENT)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Proven Craftsmanship</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Our Finished Work Stands the Test of Time in North Texas
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every home repair and commercial remodeling project in our portfolio adheres to uncompromising standards of durability, building code compliance, and aesthetic excellence.
            </p>
          </div>

          {/* 4 Standard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0000b9]/40 hover:shadow-lg transition-all">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-[#0000b9] flex items-center justify-center font-bold mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Substrate &amp; Structural Prep
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We never cover up flaws. Before laying tile, hanging cabinets, or painting walls, we ensure structural subfloors, wall studs, and moisture barriers are sound and plumb.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-slate-700">
                ✓ Plumb, Level &amp; Square Framing
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0000b9]/40 hover:shadow-lg transition-all">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Texas Climate-Tested Materials
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  DFW experiences extreme summer heat, winter freezes, and severe hail storms. We specify exterior acrylics, hail-resistant shingles, and treated timbers engineered for longevity.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-slate-700">
                ✓ Weather-Shield Formulas
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0000b9]/40 hover:shadow-lg transition-all">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Clean &amp; Protected Jobsites
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your home is treated with ultimate respect. We use protective floor runners, zip-dust containment barriers, and complete daily magnetic nail sweeps on roofing and outdoor work.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-slate-700">
                ✓ Daily Clean &amp; Debris Removal
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0000b9]/40 hover:shadow-lg transition-all">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Direct In-House Crews
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No subcontractor runarounds. You deal with dedicated, certified craftsmen and experienced project leads from initial estimate through final punch-list approval.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-slate-700">
                ✓ Single Point of Contact
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. SCOPE OF SERVICES HIGHLIGHT (VISUAL COLLAGE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
                <Wrench className="h-3.5 w-3.5" />
                <span>Diverse Project Capabilities</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Turnkey Solutions for Homeowners &amp; Property Managers
              </h2>

              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                As a premier general contractor serving North Texas since 2001, we provide full-spectrum repair and remodeling under one roof:
              </p>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-[#0000b9] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Kitchen &amp; Bathroom Transformations</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Custom tile backsplashes, luxury vanities, frameless glass showers, and modern lighting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-[#0000b9] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Interior &amp; Exterior Painting &amp; Drywall</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Seamless wall texture repairs, ceiling water stain remediation, and durable exterior paint.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-[#0000b9] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Roofing, Plumbing &amp; Emergency Fixes</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Leak detection, pipe repairs, fixture swaps, storm damage restoration, and emergency dispatch.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-[#0000b9] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Custom Carpentry, Decks &amp; Fencing</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Treated wood decks, cedar privacy fences, baseboards, crown molding, and door installations.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0000b9] hover:bg-[#00009e] text-white font-extrabold text-sm px-7 py-3.5 shadow-md transition-all cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#0000b9] transition-colors"
                >
                  <span>About Our Company</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-slate-200 shadow-md">
                    <img
                      src={craftsmanImg}
                      alt="Handyman At Home Craftsman"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200 shadow-md">
                    <img
                      src={paintingImg}
                      alt="Painting Services DFW"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200 shadow-md">
                    <img
                      src={roofImg}
                      alt="Roofing Repairs DFW"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-slate-200 shadow-md">
                    <img
                      src={residentialImg}
                      alt="Residential Carpentry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Trust Pill */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-2xl flex items-center gap-3 select-none text-left">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    General Contractor
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                    Handyman At Home
                  </p>
                  <p className="text-[10px] text-emerald-600 font-semibold">
                    Turnkey DFW Remodeling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. GRAND CONTACT & CTA SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#0000b9]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0000b9] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Ready to Start Your Project?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Contact us today for a <strong className="text-slate-900">FREE, no-obligation estimate</strong>. We’re happy to review photos, visit your property, and provide a clear, upfront quote.
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
                  Email Us Photos &amp; Specs
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
                  Send photos of your repair or project scope for an expedited quote.
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
                  Service Headquarters
                </h3>
                <p className="mt-2 text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  1730 Newlin Dr, DFW, TX 75125, United States
                </p>
                <p className="mt-3 text-xs text-slate-500 leading-normal">
                  Serving the entire DFW Metroplex and 40-mile surrounding North Texas area.
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

          {/* Grand Banner CTA */}
          <div className="rounded-3xl bg-gradient-to-r from-[#0000b9] via-[#0e21d6] to-[#00008f] text-white p-8 sm:p-12 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Get Your Free Project Estimate Today
              </h3>
              <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                Whether you need a quick repair or a full-scale remodel, our expert crew is ready to deliver turnkey excellence.
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
        {selectedLightboxIndex !== null && filteredProjects[selectedLightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-30 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLightboxIndex((prev) =>
                  prev !== null ? (prev === 0 ? filteredProjects.length - 1 : prev - 1) : null
                );
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-30 cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Main Modal Content Box — Pure Full-Size Image, NO text */}
            <div
              className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden bg-slate-950/80 border border-white/10 shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredProjects[selectedLightboxIndex].image}
                alt="Handyman At Home Project Work"
                className="max-w-full max-h-[88vh] object-contain rounded-xl"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLightboxIndex((prev) =>
                  prev !== null ? (prev === filteredProjects.length - 1 ? 0 : prev + 1) : null
                );
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-30 cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
