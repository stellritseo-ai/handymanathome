import { useRef } from "react";
import { Star, Check } from "lucide-react";

interface Review {
  text: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

const reviews: Review[] = [
  {
    name: "koles smith",
    role: "Verified Homeowner · DFW, TX",
    text: "I can't thank this company enough! Their team was prompt, professional, and the technician was knowledgeable and respectful. He fixed the leak efficiently.",
    initials: "KS",
    rating: 5,
    avatarColor: "#0000b9",
  },
  {
    name: "Eva Martin",
    role: "Verified Customer · Dallas, TX",
    text: "Such a pleasant experience! The painters were punctual, tidy, and very skilled. The new colors make my house feel bright and inviting. L...",
    initials: "EM",
    rating: 5,
    avatarColor: "#1526d4",
  },
  {
    name: "Edmundo Torquemada",
    role: "Property Owner · Fort Worth, TX",
    text: "We hired Handyman at Home for several exterior jobs. In every project the team was very professional, fast, and...",
    initials: "ET",
    rating: 5,
    avatarColor: "#090e24",
  },
  {
    name: "Cecile S",
    role: "Verified Homeowner · DFW, TX",
    text: "I highly recommend Handyman At Home again. I needed a kitchen faucet replaced. Julian came the same day! He was on time, professional, and...",
    initials: "CS",
    rating: 5,
    avatarColor: "#2563eb",
  },
];

// Replicate reviews for marquee scrolling
const row1 = [...reviews, ...reviews];
const row2 = [...reviews, ...reviews];

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
    <div className="relative flex-shrink-0 w-[320px] sm:w-[380px] mx-3 bg-white border border-slate-200/90 shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-2xl p-6 flex flex-col gap-4 group hover:shadow-[0_8px_30px_rgba(0,0,185,0.12)] hover:border-[#0000b9]/40 transition-all duration-300">
      {/* Top Section: Stars & Google/Verified badges */}
      <div className="flex items-center justify-between">
        <StarRating count={review.rating} />

        <div className="flex items-center gap-1.5 select-none">
          {/* Google text logo */}
          <span className="flex items-center text-[10px] font-extrabold bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          {/* Verified check badge */}
          <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
            <Check className="w-2.5 h-2.5 stroke-[4px]" />
            Verified
          </span>
        </div>
      </div>

      {/* Text */}
      <p className="text-slate-700 text-sm leading-relaxed font-medium flex-1 text-left">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-sm"
          style={{ backgroundColor: review.avatarColor }}
        >
          {review.initials}
        </div>
        <div className="text-left">
          <p className="text-slate-900 font-bold text-sm leading-tight capitalize">
            {review.name}
          </p>
          <p className="text-slate-500 text-xs mt-0.5">{review.role}</p>
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
      className="overflow-hidden relative group/row"
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
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

      <div ref={trackRef} className={`flex ${animClass}`}>
        {duplicated.map((review, i) => (
          <TestimonialCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative py-[80px] bg-[#F8FAFC] overflow-hidden border-b border-slate-100"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-100/50 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-indigo-100/40 blur-[100px]" />

      {/* Section Header */}
      <div className="mx-auto w-[90%] max-w-7xl text-center mb-14 relative z-10">
        {/* Tag: Testimonials */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#0000b9]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#0000b9] uppercase tracking-widest mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Testimonials
        </div>

        {/* Headline */}
        <h2 className="text-[30px] md:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
          What Our Customers Say
        </h2>

        <p className="mx-auto max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          Real feedback from homeowners and businesses across Dallas, Fort Worth, and neighboring communities.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-10 flex flex-col gap-5">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

      {/* Footer Note */}
      <div className="relative z-10 mt-10 text-center">
        <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-full px-6 py-2.5 shadow-sm text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
            ))}
          </div>
          <span>Google rating score: <strong>5.0 of 5</strong>, based on 9 reviews</span>
        </div>
      </div>

      {/* CSS Animations */}
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
          animation: marquee-left 28s linear infinite;
          width: max-content;
        }
        .marquee-track-right {
          animation: marquee-right 28s linear infinite;
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
