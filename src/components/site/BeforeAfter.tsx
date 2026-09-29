import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

// Dynamically extract all images from assets/gallery
const galleryModules = import.meta.glob<{ default: string }>(
  "../../assets/gallery/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true }
);

const galleryImages: string[] = Object.values(galleryModules).map(
  (mod) => mod.default
);

export function BeforeAfter() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(10);

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }, []);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? prev === 0
          ? galleryImages.length - 1
          : prev - 1
        : null
    );
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? prev === galleryImages.length - 1
          ? 0
          : prev + 1
        : null
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, prevImage, nextImage]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const displayedImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;

  const handleToggleShowMore = () => {
    if (hasMore) {
      // Reveal all images or next batch
      setVisibleCount(galleryImages.length);
    } else {
      // Collapse back to 2 rows of 5
      setVisibleCount(10);
    }
  };

  return (
    <section
      id="projects"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
      className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] py-[60px] overflow-hidden border-b border-slate-200/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ─────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#0000b9]/20 text-[#0000b9] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-3 shadow-2xs select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000b9] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000b9]" />
              </span>
              <span>Project Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-neutral-900 tracking-tight leading-tight">
              Featured Remodeling &amp; Repair Work
            </h2>
            <p className="text-sm text-slate-600 font-normal mt-1.5 max-w-xl">
              Authentic project photos of residential and commercial repairs, remodeling, painting, and construction across Dallas–Fort Worth.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-end">
            <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              {galleryImages.length} Completed Projects
            </span>
          </div>
        </div>

        {/* ── 5 Images Per Row, Exactly 2 Rows (10 Images), Border Radius 10px ── */}
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-3 sm:gap-3.5">
          {displayedImages.map((imgSrc, idx) => (
            <article
              key={idx}
              onClick={() => openLightbox(idx)}
              style={{ borderRadius: "10px" }}
              className="group relative overflow-hidden rounded-[10px] bg-slate-900 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,185,0.12)] hover:border-[#0000b9]/40 transition-all duration-300 cursor-pointer aspect-[4/3] flex items-center justify-center select-none"
            >
              <img
                src={imgSrc}
                alt={`Handyman At Home Project ${idx + 1}`}
                style={{ borderRadius: "10px" }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading={idx < 5 ? "eager" : "lazy"}
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

        {/* ── Show More Button at Bottom ─────────────────── */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            type="button"
            id="gallery-show-more-btn"
            onClick={handleToggleShowMore}
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full text-sm font-bold text-white bg-[#0000b9] hover:bg-[#00008e] shadow-[0_4px_14px_rgba(0,0,185,0.22)] hover:shadow-[0_6px_20px_rgba(0,0,185,0.32)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{hasMore ? "Show More" : "Show Less"}</span>
            {hasMore ? (
              <ChevronDown className="h-4 w-4 stroke-[2.5]" />
            ) : (
              <ChevronUp className="h-4 w-4 stroke-[2.5]" />
            )}
          </button>
        </div>

      </div>

      {/* ── High-Performance Lightbox Modal with Slider Controls ──────────────────── */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 sm:top-5 right-4 sm:right-5 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#0000b9] backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-110 shadow-xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#0000b9] backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-110 shadow-xl"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Main Modal Image Box */}
          <div
            className="relative z-20 max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden bg-black/40 shadow-[0_30px_70px_rgba(0,0,0,0.6)] flex items-center justify-center">
              <img
                src={galleryImages[selectedIndex]}
                alt={`Handyman At Home Project ${selectedIndex + 1}`}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl select-none"
              />
            </div>

            {/* Bottom Image Counter */}
            <div className="mt-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
              {selectedIndex + 1} of {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
