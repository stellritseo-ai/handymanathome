import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Award
} from "lucide-react";

// Inline SVG Social Icons
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com", label: "Instagram" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Works", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
];

const ourServices = [
  { label: "Kitchen & Bathroom", href: "#services" },
  { label: "Painting (Interior & Exterior)", href: "#services" },
  { label: "Roofing Repairs & Installation", href: "#services" },
  { label: "Plumbing Services", href: "#services" },
  { label: "Landscaping & Outdoor Work", href: "#services" },
];

const areasWeServe = [
  { label: "Watauga", href: "#contact" },
  { label: "Ennis, TX", href: "#contact" },
  { label: "Lancaster, TX", href: "#contact" },
  { label: "DeSoto, TX", href: "#contact" },
  { label: "Cedar Hill, TX", href: "#contact" },
  { label: "Duncanville, TX", href: "#contact" },
  { label: "Red Oak, TX", href: "#contact" },
];

const bottomBarKeywords = [
  "General Contract DFW",
  "Bathroom Remodel Near Me",
  "Emergency Number DFW",
  "Roofing Company DFW",
  "Kitchen Remodelers DFW",
  "Furniture Assembly Service",
  "Interior Painting Services",
  "Handyman DFW TX",
];

export function Footer() {
  return (
    <footer className="relative bg-[#070b1a] text-white overflow-hidden border-t border-slate-900">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] bg-[#0000b9]/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-40 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="relative mx-auto w-[90%] max-w-7xl pt-16 pb-12 z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Logo & Description (4 cols) */}
          <div className="lg:col-span-4">
            <a href="/" className="inline-flex items-center bg-white px-3.5 py-2.5 rounded-xl shadow-md transition-transform hover:scale-[1.02]">
              <img
                src={logoImg}
                alt="HANDYMAN AT HOME - General Contractor & Handyman Services"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </a>

            <p className="mt-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              For over two decades, Handyman At Home has been the trusted name for homeowners and businesses in DFW, TX, and beyond. Since 2001, our commitment has been simple: to provide high-quality, reliable, and affordable handyman and contracting services.
            </p>

            {/* Socials row */}
            <div className="mt-5 flex gap-3 select-none">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-[#0000b9] hover:border-[#0000b9] transition-all shadow-sm"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-5 flex flex-wrap gap-2 select-none">
              <div className="flex items-center gap-2 bg-slate-900/70 border border-slate-800 rounded-xl px-3 py-1.5 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                Over 24 Yrs Experience
              </div>
              <div className="flex items-center gap-2 bg-slate-900/70 border border-slate-800 rounded-xl px-3 py-1.5 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                <Shield className="h-3.5 w-3.5 text-emerald-400" />
                Licensed &amp; Insured
              </div>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
              Quick Link
            </div>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-white hover:underline transition-colors block font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
              Our Services
            </div>
            <ul className="space-y-2.5">
              {ourServices.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-white hover:underline transition-colors block font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas We Serve Column (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
              Areas We Serve
            </div>
            <div className="grid grid-cols-2 gap-2">
              {areasWeServe.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs text-slate-300 hover:text-white transition-colors block font-medium bg-slate-900/60 hover:bg-[#0000b9]/40 border border-slate-800/80 px-2.5 py-1.5 rounded-lg"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Direct Contact info box */}
            <div className="mt-5 p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <a href="tel:2148141444" className="flex items-center gap-2 text-white hover:text-sky-300 text-xs font-bold">
                <Phone className="h-3.5 w-3.5 text-[#3b5bfd]" />
                <span>(214) 814-1444</span>
              </a>
              <a href="mailto:handymanathome@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white text-[11px] font-medium break-all">
                <Mail className="h-3.5 w-3.5 text-[#3b5bfd]" />
                <span>handymanathome@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400 text-[11px]">
                <MapPin className="h-3.5 w-3.5 text-[#3b5bfd] shrink-0 mt-0.5" />
                <span>1730 Newlin Dr, DFW, TX 75125</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar Keywords ──────────────────────────── */}
        <div className="mt-12 pt-6 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
            {bottomBarKeywords.map((keyword, index) => (
              <span
                key={keyword}
                className="text-[11px] text-slate-400 hover:text-white transition-colors bg-slate-900/50 px-2.5 py-1 rounded-md border border-slate-800/60 font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <p>
            Copyright © 2025 Handyman At Home | All Rights Reserved. Design By{" "}
            <a href="https://stellrit.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-semibold">
              StellR IT
            </a>
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-slate-400 hover:text-white transition-colors font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowRight className="h-3.5 w-3.5 -rotate-90 text-[#3b5bfd]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
