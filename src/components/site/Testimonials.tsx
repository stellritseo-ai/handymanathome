import { useRef } from "react";
import { Star, Check } from "lucide-react";

interface Review {
  name: string;
  role: string;
  service: string;
  text: string;
  rating: number;
  initials: string;
  avatarBg: string;
}

const row1Reviews: Review[] = [
  {
    name: "Koles Smith",
    role: "Homeowner · Dallas, TX",
    service: "Emergency Plumbing Repair",
    text: "I can't thank Handyman At Home enough! Our water line had an urgent leak behind the wall. Their technician arrived within 45 minutes, pinpointed the issue immediately, and had everything restored cleanly and efficiently.",
    initials: "KS",
    rating: 5,
    avatarBg: "from-blue-600 to-indigo-700",
  },
  {
    name: "Eva Martin",
    role: "Customer · Fort Worth, TX",
    service: "Interior & Exterior Painting",
    text: "Such a pleasant experience from start to finish! The painters were punctual, exceptionally tidy, and true masters of their craft. The fresh modern color palette completely transformed our home's curb appeal.",
    initials: "EM",
    rating: 5,
    avatarBg: "from-indigo-600 to-[#0000b9]",
  },
  {
    name: "Edmundo Torquemada",
    role: "Property Owner · Plano, TX",
    service: "Exterior Siding & Wood Rot",
    text: "We hired Handyman At Home for several exterior trim and siding repairs before listing our property. In every project, Julian and his crew were fast, transparent on pricing, and delivered immaculate craftsmanship.",
    initials: "ET",
    rating: 5,
    avatarBg: "from-slate-800 to-slate-950",
  },
  {
    name: "Cecile S.",
    role: "Homeowner · Arlington, TX",
    service: "Kitchen Plumbing & Hardware",
    text: "I highly recommend Handyman At Home! Needed our kitchen faucet and cabinet hardware replaced. They came the exact same day, worked with great care, and left the workspace cleaner than they found it.",
    initials: "CS",
    rating: 5,
    avatarBg: "from-sky-600 to-blue-700",
  },
];

const row2Reviews: Review[] = [
  {
    name: "Marcus Vance",
    role: "Homeowner · Frisco, TX",
    service: "Master Bath Remodel & Tile",
    text: "Turnkey quality at its absolute best. They completely transformed our dated master bath, installed luxury porcelain tile, a frameless glass shower, and a custom vanity on schedule and strictly within quote.",
    initials: "MV",
    rating: 5,
    avatarBg: "from-[#0000b9] to-blue-800",
  },
  {
    name: "David & Sarah K.",
    role: "Homeowners · Garland, TX",
    service: "Cedar Deck Repair & Staining",
    text: "Our backyard deck was weathered and splintering after the summer heat. The team power washed, replaced damaged cedar boards, and applied a beautiful waterproof stain. It looks brand new again!",
    initials: "DK",
    rating: 5,
    avatarBg: "from-emerald-600 to-teal-800",
  },
  {
    name: "Rachel Green",
    role: "Homeowner · Irving, TX",
    service: "Drywall Repair & Texture",
    text: "Flawless drywall patch and match on our textured ceiling after an AC drain overflow. You literally cannot tell where the repair was made. Reliable, honest, and very reasonable pricing.",
    initials: "RG",
    rating: 5,
    avatarBg: "from-violet-600 to-indigo-800",
  },
  {
    name: "Thomas B.",
    role: "Commercial Mgr · McKinney, TX",
    service: "Roof Shingle & Gutter Repair",
    text: "After severe wind damaged our roof, they performed a comprehensive inspection and secured all replacement shingles the next afternoon. Outstanding communication throughout the entire job.",
    initials: "TB",
    rating: 5,
    avatarBg: "from-amber-600 to-orange-700",
  },
];

function GoogleIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
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

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ review }: { review: Review }) {
  return (
    <div className="relative flex-shrink-0 w-[280px] xs:w-[330px] sm:w-[380px] mx-2 xs:mx-3 bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,185,0.08)] hover:border-[#0000b9]/30 rounded-2xl p-4.5 xs:p-5 sm:p-6 flex flex-col justify-between gap-4 group hover:-translate-y-0.5 transition-all duration-300">
      
      {/* Top Header: Stars, Google badge, Verified check */}
      <div className="flex items-center justify-between gap-2">
        <StarRating count={review.rating} />

        <div className="flex items-center gap-1.5 select-none">
          {/* Google badge */}
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded-md">
            <GoogleIcon />
            <span>Google</span>
          </span>
          {/* Verified pill */}
          <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full uppercase tracking-wider">
            <Check className="w-2.5 h-2.5 stroke-[3.5px] text-emerald-600" />
            Verified
          </span>
        </div>
      </div>

      {/* Service Tag Badge */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0000b9] bg-blue-50/80 border border-[#0000b9]/15 px-2.5 py-0.5 rounded-full">
          {review.service}
        </span>
      </div>

      {/* Review Body */}
      <p className="text-slate-700 text-[13.5px] sm:text-[14px] leading-relaxed font-normal flex-1 text-left">
        "{review.text}"
      </p>

      {/* Reviewer Profile */}
      <div className="flex items-center gap-3 pt-3.5 border-t border-slate-100">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${review.avatarBg} flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-sm`}
        >
          {review.initials}
        </div>
        <div className="text-left min-w-0">
          <p className="text-slate-900 font-extrabold text-[13.5px] leading-tight truncate">
            {review.name}
          </p>
          <p className="text-slate-500 text-xs mt-0.5 font-medium truncate">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: Review[];
  direction?: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicated = [...items, ...items, ...items];

  const animClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div
      className="overflow-hidden relative group/row py-1"
      onMouseEnter={() => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = "paused";
        }
      }}
      onMouseLeave={() => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = "running";
        }
      }}
    >
      {/* Soft gradient edge masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

      <div ref={trackRef} className={`flex ${animClass}`}>
        {duplicated.map((review, i) => (
          <TestimonialCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="reviews"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
      className="relative py-[60px] bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] overflow-hidden border-b border-slate-200/70"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#0000b9]/[0.035] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-sky-400/[0.04] blur-[120px]" />

      {/* Section Header */}
      <div className="mx-auto w-[90%] max-w-7xl text-center mb-12 relative z-10">
        {/* Tag Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#0000b9]/20 text-[#0000b9] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 shadow-2xs select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000b9] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000b9]" />
          </span>
          <span>Verified Client Reviews</span>
        </div>

        {/* Headline */}
        <h2 className="text-[24px] xs:text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-neutral-900 tracking-tight leading-tight mb-3">
          What Dallas–Fort Worth Property Owners{" "}
          <span className="bg-gradient-to-r from-[#0000b9] via-[#0d1fd6] to-[#2563eb] bg-clip-text text-transparent">
            Say About Us
          </span>
        </h2>

        {/* Narrative Subtitle */}
        <p
          style={{ marginBottom: "-25px" }}
          className="mx-auto max-w-2xl text-slate-600 text-[15px] sm:text-base leading-relaxed font-normal -mb-[25px]"
        >
          Real feedback from homeowners, landlords, and commercial property managers across Dallas, Fort Worth, and neighboring communities.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
        <MarqueeRow items={row1Reviews} direction="left" />
        <MarqueeRow items={row2Reviews} direction="right" />
      </div>

      {/* Google Rating Trust Bar */}
      <div className="relative z-10 mt-10 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 bg-white border border-slate-200/90 rounded-full px-5 sm:px-7 py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-1.5">
            <GoogleIcon />
            <span className="font-extrabold text-slate-900">Google Reviews</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
            ))}
          </div>
          <span className="font-extrabold text-slate-900">5.0 Star Rating</span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="text-slate-500 hidden sm:inline">100% Recommended in DFW</span>
        </div>
      </div>

      {/* CSS Marquee Animations */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          animation: marquee-left 32s linear infinite;
          width: max-content;
        }
        .marquee-track-right {
          animation: marquee-right 32s linear infinite;
          width: max-content;
        }
        .marquee-track-left:hover,
        .marquee-track-right:hover,
        .group\\/row:hover .marquee-track-left,
        .group\\/row:hover .marquee-track-right {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
