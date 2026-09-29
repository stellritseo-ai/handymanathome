import { useState, useEffect, useCallback } from "react";
import { MapPin, Phone, Mail, Home, Wrench, Paintbrush, Shield, X, ZoomIn } from "lucide-react";
import p1 from "@/assets/steam/gallery1.jpg";
import p2 from "@/assets/steam/gallery2.jpg";
import p3 from "@/assets/steam/gallery3.jpg";
import p4 from "@/assets/steam/gallery4.jpg";
import p5 from "@/assets/steam/gallery5.jpg";
import p6 from "@/assets/steam/gallery6.jpg";
import p7 from "@/assets/steam/gallery8.jpg";
import p8 from "@/assets/steam/gallery14.jpg";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const allProjects = [
  {
    img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80",
    title: "Roofing Repair & Shingle Restoration",
    cat: "Roofing",
    loc: "Dallas, TX",
    year: "2024",
    tag: "Roofing",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    title: "Full Interior & Exterior Painting",
    cat: "Painting",
    loc: "Fort Worth, TX",
    year: "2024",
    tag: "Painting",
    featured: false,
  },
  {
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Bathroom Remodel & Tile",
    cat: "Remodeling",
    loc: "Arlington, TX",
    year: "2024",
    tag: "Bathroom",
    featured: false,
  },
  {
    img: p6,
    title: "Custom Outdoor Deck & Living Space",
    cat: "Outdoor",
    loc: "Plano, TX",
    year: "2024",
    tag: "Deck & Patio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    title: "Custom Kitchen Cabinetry & Countertops",
    cat: "Remodeling",
    loc: "Dallas, TX",
    year: "2024",
    tag: "Kitchen",
    featured: false,
  },
  {
    img: p3,
    title: "Exterior Siding & Trim Replacement",
    cat: "Remodeling",
    loc: "Garland, TX",
    year: "2023",
    tag: "Remodel",
    featured: false,
  },
  {
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    title: "Plumbing Fixtures & Pipe Line Renewal",
    cat: "Plumbing",
    loc: "Irving, TX",
    year: "2024",
    tag: "Plumbing",
    featured: false,
  },
  {
    img: p1,
    title: "Full Residential Home Renovation",
    cat: "Remodeling",
    loc: "Fort Worth, TX",
    year: "2024",
    tag: "General Contracting",
    featured: false,
  },
];

const cats = ["All", "Remodeling", "Painting", "Roofing", "Outdoor"] as const;

export function BeforeAfter() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const items = active === "All" ? allProjects : allProjects.filter((p) => p.cat === active || (active === "Outdoor" && p.tag.includes("Deck")));

  // Lightbox state
  const [lightbox, setLightbox] = useState<null | (typeof allProjects)[number]>(null);

  const openLightbox = useCallback((p: (typeof allProjects)[number]) => {
    setLightbox(p);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  return (
    <section id="projects" className="bg-[#F8FAFC] py-[70px] overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── About/Contact Strip ──────────────────────────── */}
        <div className="bg-gradient-to-br from-[#090e24] via-[#0b1338] to-[#0000b9] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0000b9]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Contact Info (Left side overlay / card) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 shadow-lg text-left"
            >
              <div className="inline-flex items-center gap-2 bg-[#0000b9] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Handyman At Home Direct Line
              </div>

              {/* Services List in bold */}
              <div className="mb-4 pb-3 border-b border-white/15">
                <span className="text-[10px] uppercase font-extrabold text-sky-300 tracking-wider block mb-1">
                  Core Specializations
                </span>
                <span className="text-xs sm:text-sm font-black tracking-wide text-white">
                  REMODELING • PAINTING • ROOFING
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                {/* Phone */}
                <a
                  href="tel:2148141444"
                  className="flex items-start gap-3 text-white hover:text-sky-300 transition-colors"
                >
                  <div className="h-8 w-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Phone Numbers</span>
                    <span className="font-extrabold text-white text-sm">
                      (214) 814-1444 <span className="text-sky-300 font-medium text-xs">(Primary)</span>
                    </span>
                    <span className="block text-slate-300 text-xs">
                      (214) 814-1490 <span className="text-slate-400 text-[11px]">(Secondary)</span>
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:handymanathome@gmail.com"
                  className="flex items-start gap-3 text-white hover:text-sky-300 transition-colors"
                >
                  <div className="h-8 w-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Email Address</span>
                    <span className="font-semibold text-white break-all text-xs sm:text-sm">
                      handymanathome@gmail.com
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3 text-white">
                  <div className="h-8 w-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Address</span>
                    <span className="font-semibold text-white text-xs leading-snug">
                      1730 Newlin Dr, DFW, TX 75125, United States
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Headline and Text (Right Column) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300 mb-3 shadow-sm">
                <Wrench className="w-3.5 h-3.5" />
                <span>Our Craftsmanship In Action</span>
              </div>

              <h2 className="text-white tracking-tight leading-tight text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold mb-4">
                See the Handyman At Home Difference
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal mb-6">
                A picture is worth a thousand words. See for yourself the transformation and craftsmanship we deliver for our customers in DFW and beyond.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#0000b9] hover:bg-[#1526d4] text-white text-xs font-bold uppercase tracking-wider rounded-full px-6 py-3.5 shadow-glow transition-all hover:scale-105 active:scale-95"
                >
                  Schedule Your Project
                </a>
                <a
                  href="tel:2148141444"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs font-bold uppercase tracking-wider rounded-full px-6 py-3.5 border border-white/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call: (214) 814-1444</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Gallery Section: Filter Tabs ─────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-bold text-[#0000b9] uppercase tracking-wider block mb-1">
              Project Portfolio
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight text-left">
              Featured Remodeling &amp; Repair Work
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 border cursor-pointer",
                  active === c
                    ? "bg-[#0000b9] text-white border-transparent shadow-glow"
                    : "bg-white text-slate-700 border-slate-200 hover:border-[#0000b9] hover:text-[#0000b9] shadow-sm"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ── Gallery Grid (8 images showing roofing, painting, bathroom, deck, kitchen, etc.) ───────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.slice(0, 8).map((p, idx) => (
            <article
              key={`${p.title}-${idx}`}
              onClick={() => openLightbox(p)}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in text-left flex flex-col"
            >
              {/* Image Container */}
              <div className="overflow-hidden h-[240px] relative bg-slate-900">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading={idx < 4 ? "eager" : "lazy"}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/25 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <span className="bg-[#0000b9] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                    {p.year}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-flex items-center bg-[#0000b9] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1.5">
                    {p.cat}
                  </span>

                  <h4 className="font-extrabold text-white text-sm leading-snug line-clamp-2">
                    {p.title}
                  </h4>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/15">
                    <div className="flex items-center gap-1.5 text-white/80 text-[11px] font-medium">
                      <MapPin className="h-3 w-3 text-sky-400 shrink-0" />
                      {p.loc}
                    </div>
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ZoomIn className="h-3.5 w-3.5" />
                    </div>
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
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          <div
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] bg-slate-950 animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            <div className="bg-white px-6 py-4 flex items-center justify-between gap-4 shrink-0 text-left">
              <div className="flex items-center gap-3 min-w-0">
                <span className="bg-[#0000b9] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shrink-0">
                  {lightbox.cat}
                </span>
                <div className="min-w-0">
                  <p className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight truncate">{lightbox.title}</p>
                  <p className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-[#0000b9] shrink-0" />
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
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in {
          animation: zoom-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
