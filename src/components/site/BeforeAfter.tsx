import { useState, useEffect, useCallback } from "react";
import { MapPin, ArrowRight, Droplet, Building2, Home, Factory, X, ZoomIn } from "lucide-react";
import p1 from "@/assets/steam/gallery1.jpg";
import p2 from "@/assets/steam/gallery2.jpg";
import p3 from "@/assets/steam/gallery3.jpg";
import p4 from "@/assets/steam/gallery4.jpg";
import p5 from "@/assets/steam/gallery5.jpg";
import p6 from "@/assets/steam/gallery6.jpg";
import p7 from "@/assets/steam/gallery8.jpg";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const all = [
  {
    img: p1,
    title: "Eco-Friendly Roof Soft Wash",
    cat: "Residential",
    loc: "Mooresville, NC",
    year: "2024",
    tag: "Roof Cleaning",
    featured: true,
  },
  {
    img: p2,
    title: "Complete Concrete Driveway Revival",
    cat: "Residential",
    loc: "Cornelius, NC",
    year: "2024",
    tag: "Driveway Wash",
    featured: false,
  },
  {
    img: p3,
    title: "Premium Siding & Gutter Brightening",
    cat: "Residential",
    loc: "Huntersville, NC",
    year: "2023",
    tag: "House Wash",
    featured: true,
  },
  {
    img: p4,
    title: "Retail Center Storefront Restoration",
    cat: "Commercial",
    loc: "Statesville, NC",
    year: "2024",
    tag: "Storefront Wash",
    featured: false,
  },
  {
    img: p5,
    title: "Industrial Logistics Warehouse Wash",
    cat: "Industrial",
    loc: "Hickory, NC",
    year: "2023",
    tag: "Warehouse Exterior",
    featured: false,
  },
  {
    img: p6,
    title: "Luxury Cedar Deck Stain Prep & Wash",
    cat: "Residential",
    loc: "Denver, NC",
    year: "2024",
    tag: "Deck Restoration",
    featured: false,
  },
  {
    img: p7,
    title: "Commercial Parking Garage Power Wash",
    cat: "Commercial",
    loc: "Lake Norman, NC",
    year: "2023",
    tag: "Parking Garage",
    featured: false,
  },
];

const cats = ["All", "Residential", "Commercial", "Industrial"] as const;

const catIcons = {
  All: Droplet,
  Residential: Home,
  Commercial: Building2,
  Industrial: Factory,
};

export function BeforeAfter() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const items = active === "All" ? all : all.filter((p) => p.cat === active);

  // Lightbox state
  const [lightbox, setLightbox] = useState<null | (typeof all)[number]>(null);

  const openLightbox = useCallback((p: (typeof all)[number]) => {
    setLightbox(p);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  // ESC key to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox]);

  // Cleanup on unmount
  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  return (
    <section id="projects" className="bg-[#F8FAFC] py-[100px] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ──────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/5 border border-[#0ea5e9]/10 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0ea5e9] mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
              Featured Projects
            </div>

            <h2
              className="text-slate-900 tracking-tight leading-[1.1] text-[30px] lg:text-[40px]"
              style={{ textTransform: "capitalize", fontWeight: 800, marginTop: "-11px", marginBottom: "8px" }}
            >
              Work we're{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#0284c7]">
                proud of
              </span>
            </h2>
            <p
              className="text-slate-500 text-base leading-relaxed"
              style={{ marginBottom: "-25px" }}
            >
              A hand-picked selection of recent professional power washing and exterior cleaning projects across the Lake Norman region &amp; North Carolina.
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white text-xs font-bold uppercase tracking-widest rounded-full px-7 py-4 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] shrink-0 self-start lg:self-auto"
          >
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ── Filter Tabs ─────────────────────────────── */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {cats.map((c) => {
            const Icon = catIcons[c];
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold transition-all duration-200 border",
                  active === c
                    ? "bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white border-transparent shadow-[0_4px_14px_rgba(14,165,233,0.3)]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] shadow-sm"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {c}
              </button>
            );
          })}
        </div>

        {/* ── Projects Grid ───────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((p, idx) => (
            <article
              key={p.title}
              onClick={() => openLightbox(p)}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in",
                p.featured ? "sm:col-span-1 lg:row-span-2" : ""
              )}
            >
              {/* Image */}
              <div className={cn("overflow-hidden", p.featured ? "h-[420px] lg:h-full lg:min-h-[520px]" : "h-[240px] sm:h-[260px]")}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading={idx < 3 ? "eager" : "lazy"}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

              {/* Top badges */}
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                <span className="inline-flex items-center bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {p.tag}
                </span>
                <span className="bg-[#0ea5e9] text-white text-[10px] font-black px-2.5 py-1 rounded-full">
                  {p.year}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {/* Category pill */}
                <span className="inline-flex items-center bg-[#0ea5e9] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  {p.cat}
                </span>

                <h3 className="font-extrabold text-white text-base sm:text-lg leading-tight mb-2">
                  {p.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-white/75 text-xs font-medium">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {p.loc}
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ── Lightbox Modal ──────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Full image */}
            <div className="relative flex-1 overflow-hidden bg-black">
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            {/* Info bar */}
            <div className="bg-white px-6 py-4 flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <span className="bg-[#0ea5e9] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shrink-0">
                  {lightbox.cat}
                </span>
                <div className="min-w-0">
                  <p className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight truncate">{lightbox.title}</p>
                  <p className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-[#0ea5e9] shrink-0" />
                    {lightbox.loc}
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-400 shrink-0">{lightbox.year}</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in {
          animation: zoom-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
