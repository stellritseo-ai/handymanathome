import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png";
import bbbLogo from "@/assets/bbb.svg";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Award } from "lucide-react";

import { SOCIAL_LINKS } from "@/lib/socialLinks";

// Inline SVG Social Icons
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YelpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M12.44 1.54c-.6-.08-1.19.26-1.39.81l-1.8 4.93c-.15.42.02.89.4 1.11l4.42 2.55c.44.25 1 .08 1.23-.37l2.15-4.22c.28-.55.08-1.22-.44-1.53l-4.57-3.28zm-2.92 9.17-5.06-1.54c-.58-.17-1.19.12-1.44.68l-1.33 3.03c-.24.55-.07 1.2.4 1.54l4.29 3.06c.4.29.96.22 1.28-.16l3.35-4.04c.36-.43.25-1.07-.19-1.37l-1.3-.87zm3.05 3.32-3.14 4.19c-.33.44-.27 1.05.13 1.43l2.25 2.15c.42.4 1.07.45 1.54.12l4.89-3.41c.45-.31.57-.92.28-1.38l-2.73-4.32c-.28-.45-.88-.6-1.34-.33l-1.88 1.55zm2.74-2.88 5.25.95c.59.11 1.15-.22 1.35-.78l.85-2.4c.2-.56-.05-1.18-.58-1.47l-4.88-2.67c-.45-.25-1.02-.12-1.31.3l-2.6 3.73c-.3.43-.22 1.02.2 1.3l1.72 1.04zm-.55 1.76 4.3 3.23c.48.36 1.14.3 1.56-.15l1.8-1.9c.41-.44.42-1.11.02-1.56l-3.8-4.26c-.34-.38-.93-.45-1.36-.16l-3.9 2.64c-.45.3-.57.9-.27 1.35l1.65 2.85z" />
  </svg>
);

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

const socials = [
  { icon: FacebookIcon, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: YelpIcon, href: SOCIAL_LINKS.yelp, label: "Yelp" },
  {
    icon: GoogleIcon,
    href: "https://maps.google.com/?q=1730+Newlin+Dr,+DFW,+TX+75125",
    label: "Google Business",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Works", href: "/projects" },
  { label: "Our Services", href: "/#services" },
  { label: "How It Works", href: "/#process" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Client Reviews", href: "/reviews" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Free Estimate", href: "/free-estimate" },
];

const ourServices = [
  { label: "Kitchen & Bath Remodeling", href: "/services/kitchen-bathroom-remodel" },
  { label: "Interior & Exterior Painting", href: "/services/painting" },
  { label: "Roofing Repairs & Installation", href: "/services/roofing" },
  { label: "Plumbing Services & Line Repairs", href: "/services/plumbing" },
  { label: "Landscaping & Outdoor Living", href: "/services/landscaping" },
  { label: "General Carpentry & Handyman", href: "/services/handyman-carpentry" },
  { label: "All Services Directory", href: "/services" },
];

const areasWeServe = [
  { label: "Dallas, TX", href: "/#service-area" },
  { label: "Fort Worth, TX", href: "/#service-area" },
  { label: "Arlington, TX", href: "/#service-area" },
  { label: "Plano, TX", href: "/#service-area" },
  { label: "Garland, TX", href: "/#service-area" },
  { label: "Irving, TX", href: "/#service-area" },
  { label: "Frisco, TX", href: "/#service-area" },
  { label: "Grand Prairie, TX", href: "/#service-area" },
];

const bottomBarKeywords = [
  "General Contractor DFW",
  "Handyman Dallas TX",
  "Kitchen Remodel Fort Worth",
  "Bathroom Remodeling DFW",
  "Emergency Handyman 24/7",
  "Roofing Company DFW",
  "Interior Painting Dallas",
  "Deck & Fence Staining",
  "Drywall Repair Near Me",
  "Licensed Texas Contractor",
];

export function Footer() {
  return (
    <footer className="relative bg-[#060a18] text-white overflow-hidden border-t border-slate-900 pt-[60px] pb-24 lg:pb-5">
      {/* Background radial glow accents */}
      <div className="absolute -top-40 left-1/4 w-[450px] h-[450px] bg-[#0000b9]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto w-[90%] max-w-7xl z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo & Description (4 cols) */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center bg-white px-4 py-2.5 rounded-xl shadow-md">
              <img
                src={logoImg}
                alt="HANDYMAN AT HOME - General Contractor & Handyman Services"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>

            <p className="mt-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              For over two decades, Handyman At Home has been the trusted general contracting &amp;
              handyman partner for homeowners and commercial property managers across Dallas–Fort
              Worth. Licensed, insured, and committed to turnkey excellence since 2001.
            </p>

            {/* Socials row */}
            <div className="mt-5 flex gap-2.5 select-none">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center h-9 w-9 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:bg-[#0000b9] hover:border-[#0000b9] transition-all shadow-sm cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-5 flex flex-wrap items-center gap-2 select-none">
              <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl px-3 py-1.5 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                <span>Over 24 Yrs Experience</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl px-3 py-1.5 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Licensed &amp; Insured</span>
              </div>

              <a
                href={SOCIAL_LINKS.bbb}
                target="_blank"
                rel="noopener noreferrer"
                title="View Handyman At Home BBB Accredited Profile"
                className="inline-flex items-center gap-2 bg-white/95 hover:bg-white border border-white/20 rounded-xl px-2.5 py-1 text-[10px] font-bold text-slate-900 shadow-sm transition-all hover:scale-105"
              >
                <img src={bbbLogo} alt="BBB A+ Accredited" className="h-4 w-auto" />
                <span>A+ Accredited</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
              Quick Links
            </div>
            <ul className="space-y-2">
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
            <ul className="space-y-2">
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
              DFW Service Radius
            </div>
            <div className="grid grid-cols-2 gap-2">
              {areasWeServe.map(({ label }) => (
                <button
                  key={label}
                  type="button"
                  className="text-xs text-slate-300 hover:text-white transition-colors block font-medium bg-slate-900/60 hover:bg-[#0000b9]/40 border border-slate-800/80 px-2.5 py-1.5 rounded-lg text-center truncate cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Direct Contact info box */}
            <div className="mt-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-left">
              <div className="flex items-center gap-2 text-white text-xs font-bold">
                <Phone className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span>(214) 814-1444</span>
                <span className="text-[10px] text-slate-400 font-normal">/ (214) 814-1490</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-[11px] font-medium break-all">
                <Mail className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span>handymanathome@gmail.com</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400 text-[11px]">
                <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>1730 Newlin Dr, DFW, TX 75125</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[10.5px] pt-1 border-t border-slate-800/80">
                <Clock className="h-3 w-3 text-emerald-400 shrink-0" />
                <span>Mon–Fri: 7am–9pm • 24/7 Emergency</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar Keywords ──────────────────────────── */}
        <div className="mt-12 pt-6 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-center">
            {bottomBarKeywords.map((keyword) => (
              <span
                key={keyword}
                className="text-[11px] text-slate-400 hover:text-white transition-colors bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800/60 font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <p>
            Copyright © {new Date().getFullYear()} Handyman At Home | All Rights Reserved. Design By{" "}
            <a
              href="https://stellrit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline font-semibold"
            >
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
