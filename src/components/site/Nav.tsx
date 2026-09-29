import { useEffect, useState, useRef } from "react";
import logoImg from "@/assets/logo.png";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Home,
  Paintbrush,
  Droplets,
  TreePine,
  Mail,
  Facebook,
  Instagram,
  Shield,
  Wrench,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  href: string;
  label: string;
  desc: string;
  icon: typeof Home;
  color: string;
}

const servicesList: ServiceItem[] = [
  {
    href: "/#services",
    label: "Kitchen & Bathroom Remodel",
    desc: "Custom cabinetry, tilework, vanities & luxury remodels",
    icon: Home,
    color: "bg-blue-500/10 text-[#0000b9]",
  },
  {
    href: "/#services",
    label: "Interior & Exterior Painting",
    desc: "Flawless wall finishes, drywall repair, stain & trim",
    icon: Paintbrush,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    href: "/#services",
    label: "Roofing Repairs & Installation",
    desc: "Leak repairs, shingle replacement & storm damage",
    icon: Shield,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    href: "/#services",
    label: "Plumbing Services",
    desc: "Pipe fixes, leak detection, fixture swaps & heaters",
    icon: Droplets,
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    href: "/#services",
    label: "Landscaping & Outdoor Living",
    desc: "Fencing, custom decks, patio covers & grounds care",
    icon: TreePine,
    color: "bg-lime-500/10 text-emerald-700",
  },
  {
    href: "/#services",
    label: "General Handyman & Carpentry",
    desc: "Doors, windows, drywall patches & hardware installs",
    icon: Wrench,
    color: "bg-indigo-500/10 text-indigo-600",
  },
];

const navLinks = [
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services", isServices: true },
  { href: "/#projects", label: "Our Works" },
  // { href: "/#why-choose-us", label: "Why Choose Us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact Us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll detection for compact header transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle escape key to close menu
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? "shadow-[0_10px_30px_-10px_rgba(9,14,36,0.12),0_1px_3px_rgba(9,14,36,0.05)]" : ""
          }`}
      >
        {/* Top Utility Bar (Collapses smoothly on scroll for compact clean view) */}
        <div
          className={`bg-[#070b1a] text-slate-300 border-b border-white/10 transition-all duration-300 overflow-hidden ${scrolled ? "max-h-0 opacity-0 py-0 border-transparent" : "max-h-28 opacity-100 py-2 sm:py-2.5"
            }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 text-[11px] sm:text-[11.5px]">
            {/* Left: Email & Service Area */}
            <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
              <a
                href="mailto:handymanathome@gmail.com"
                className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                aria-label="Email Handyman At Home"
              >
                <div className="h-5 w-5 rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 flex items-center justify-center transition-colors">
                  <Mail className="h-3 w-3" />
                </div>
                <span className="font-medium tracking-normal text-slate-200">handymanathome@gmail.com</span>
              </a>

              <div className="hidden md:flex items-center gap-1.5 text-slate-300 border-l border-white/10 pl-4">
                <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span className="font-medium">Dallas–Fort Worth Metroplex &amp; Surrounding Areas</span>
              </div>
            </div>

            {/* Right: Hours, Emergency Status, Socials & Language */}
            <div className="flex items-center gap-3 sm:gap-4 ml-auto text-slate-300">
              {/* Working Hours & Live Emergency Dispatch */}
              <div className="flex items-center gap-2 text-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="font-semibold hidden sm:inline">
                  Mon–Fri 7am–9pm <span className="text-white/30 mx-1">•</span>
                </span>
                <span className="text-emerald-400 font-bold tracking-tight">24/7 Emergency Dispatch</span>
              </div>

              <span className="text-white/20 hidden lg:inline">|</span>

              {/* Social Channels */}
              <div className="hidden lg:flex items-center gap-1.5">
                <span className="text-slate-400 text-[10.5px] font-medium mr-1">Follow Us:</span>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-6 w-6 rounded-full bg-white/5 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Handyman At Home on Facebook"
                >
                  <Facebook className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-6 w-6 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-[#E1306C] hover:to-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Handyman At Home on Instagram"
                >
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://g.page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-6 w-6 rounded-full bg-white/5 hover:bg-[#4285F4] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Handyman At Home on Google Reviews"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.54 0-6.423-2.883-6.423-6.423 0-3.54 2.883-6.423 6.423-6.423 1.547 0 2.96.549 4.07 1.547l3.052-3.052C19.296 2.453 15.932 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-11 0-.746-.067-1.467-.19-2.195H12.24z" />
                  </svg>
                </a>
              </div>

              <span className="text-white/20 hidden sm:inline">|</span>

              {/* Language Selector Switch */}
              <div className="flex items-center bg-white/10 p-0.5 rounded-full border border-white/10 text-[10px] font-bold">
                <button
                  type="button"
                  onClick={() => setLang("EN")}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${lang === "EN" ? "bg-[#0000b9] text-white shadow-xs" : "text-slate-300 hover:text-white"
                    }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("ES")}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${lang === "ES" ? "bg-[#0000b9] text-white shadow-xs" : "text-slate-300 hover:text-white"
                    }`}
                  aria-label="Switch to Spanish"
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full bg-white transition-all duration-300 border-b border-slate-200/90 ${scrolled
            ? "py-1.5 sm:py-2 shadow-xs"
            : "py-2 sm:py-2.5"
            }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between gap-4">
              {/* Brand Logo */}
              <a
                href="/"
                className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0000b9] rounded-lg transition-transform duration-200 hover:scale-[1.01]"
                aria-label="Handyman At Home - Home"
              >
                <img
                  src={logoImg}
                  alt="HANDYMAN AT HOME - General Contractor & Handyman Services in Dallas Fort Worth"
                  className={`w-auto object-contain transition-all duration-300 ${scrolled
                    ? "h-11 sm:h-12 md:h-[52px]"
                    : "h-14 sm:h-16 md:h-[68px]"
                    }`}
                />
              </a>

              {/* Desktop Nav Links */}
              <ul className="hidden lg:flex items-center gap-1 xl:gap-1.5 ml-auto mr-4">
                {navLinks.map((item) => {
                  if (item.isServices) {
                    return (
                      <li
                        key={item.label}
                        className="relative py-2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a
                          href={item.href}
                          className={`group/link inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[15.5px] font-bold transition-all duration-200 cursor-pointer ${servicesDropdownOpen
                            ? "text-[#0000b9] bg-[#0000b9]/8"
                            : "text-slate-800 hover:text-[#0000b9] hover:bg-slate-100/80"
                            }`}
                          aria-expanded={servicesDropdownOpen}
                          aria-haspopup="true"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-slate-400 group-hover/link:text-[#0000b9] transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#0000b9]" : ""
                              }`}
                          />
                        </a>

                        {/* Mega Menu Dropdown */}
                        <AnimatePresence>
                          {servicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.18, ease: "easeOut" }}
                              className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[620px] z-50 before:absolute before:-top-3 before:inset-x-0 before:h-4"
                            >
                              <div className="bg-white/98 backdrop-blur-2xl rounded-2xl border border-slate-200/90 shadow-[0_25px_50px_-12px_rgba(9,14,36,0.18),0_0_0_1px_rgba(0,0,0,0.03)] p-4 overflow-hidden">
                                {/* Dropdown Header */}
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                                  <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-md bg-[#0000b9]/10 text-[#0000b9] flex items-center justify-center">
                                      <Sparkles className="h-3.5 w-3.5" />
                                    </div>
                                    <div>
                                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                                        Comprehensive Services
                                      </h3>
                                    </div>
                                  </div>
                                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                    Licensed &amp; Insured
                                  </span>
                                </div>

                                {/* 2-Column Services Grid */}
                                <div className="grid grid-cols-2 gap-2">
                                  {servicesList.map((service) => {
                                    const IconComponent = service.icon;
                                    return (
                                      <a
                                        key={service.label}
                                        href={service.href}
                                        onClick={() => setServicesDropdownOpen(false)}
                                        className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-100"
                                      >
                                        <div
                                          className={`h-9 w-9 rounded-lg ${service.color} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-105 group-hover/item:shadow-xs`}
                                        >
                                          <IconComponent className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center justify-between gap-1">
                                            <span className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#0000b9] transition-colors truncate">
                                              {service.label}
                                            </span>
                                            <ArrowRight className="h-3 w-3 text-slate-300 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-[#0000b9] transition-all" />
                                          </div>
                                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                                            {service.desc}
                                          </p>
                                        </div>
                                      </a>
                                    );
                                  })}
                                </div>

                                {/* Dropdown Footer Banner */}
                                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/70 -mx-4 -mb-4 px-4 py-3 rounded-b-2xl">
                                  <div className="flex items-center gap-2 text-slate-600">
                                    <Clock className="h-3.5 w-3.5 text-[#0000b9]" />
                                    <span className="font-semibold text-[11.5px]">
                                      Need emergency repair? 24/7 Rapid Dispatch in DFW
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => setServicesDropdownOpen(false)}
                                    className="font-bold text-[#0000b9] hover:text-[#1024d4] flex items-center gap-1 text-[11.5px] transition-colors cursor-pointer"
                                  >
                                    <span>Explore All</span>
                                    <ArrowRight className="h-3 w-3" />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="inline-flex items-center px-3.5 py-2 rounded-full text-[15.5px] font-bold text-slate-800 hover:text-[#0000b9] hover:bg-slate-100/80 transition-all duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Header Right Action CTAs (Desktop) */}
              <div className="hidden lg:flex items-center gap-2.5 shrink-0">
                {/* Free Estimate Outlined Pill */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 hover:border-[#0000b9] bg-white hover:bg-[#0000b9]/5 px-4.5 py-2 text-[12.5px] font-bold text-slate-800 hover:text-[#0000b9] transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
                >
                  <span>Free Estimate</span>
                </button>

                {/* Call Now Button with Live Beacon */}
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0000b9] via-[#0d1fd6] to-[#0000b9] hover:from-[#000099] hover:to-[#0c1bb8] px-4.5 py-2 text-[12.5px] font-extrabold text-white shadow-[0_4px_16px_rgba(0,0,185,0.32)] hover:shadow-[0_6px_22px_rgba(0,0,185,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  aria-label="Call Handyman At Home at (214) 814-1444"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <Phone className="h-3.5 w-3.5 fill-current transition-transform duration-200 group-hover:rotate-12" />
                  <span className="tracking-tight">(214) 814-1444</span>
                </button>
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[#0000b9] text-white shadow-[0_2px_10px_rgba(0,0,185,0.3)] active:scale-95 transition-all cursor-pointer"
                  aria-label="Call Now"
                >
                  <Phone className="h-4 w-4 fill-current" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0000b9] cursor-pointer"
                  onClick={() => setOpen(true)}
                  aria-label="Open mobile menu"
                  aria-expanded={open}
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Native App Experience) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[70] lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-[80] w-[90vw] max-w-[380px] bg-white shadow-2xl flex flex-col lg:hidden overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site Navigation"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-white">
                <a href="/" onClick={() => setOpen(false)} className="flex items-center">
                  <img
                    src={logoImg}
                    alt="HANDYMAN AT HOME"
                    className="h-12 w-auto object-contain"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-8.5 w-8.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0000b9]"
                  aria-label="Close menu"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Emergency Call Quick Banner inside Drawer */}
              <div className="p-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-b border-blue-100/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#0000b9]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    24/7 Emergency Dispatch
                  </span>
                  <span className="text-[10.5px] font-semibold text-slate-500">DFW Metro</span>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-[#0000b9] hover:bg-[#1024d4] py-2.5 text-center font-bold text-white text-xs shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Phone className="h-3.5 w-3.5 fill-current" />
                  <span>Call Now: (214) 814-1444</span>
                </button>
              </div>

              {/* Scrollable Navigation Links */}
              <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-slate-100">
                <ul className="space-y-1 pb-3">
                  {/* About Us */}
                  <li>
                    <a
                      href="/#about"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 px-3 rounded-xl font-bold text-[16.5px] text-slate-800 hover:bg-slate-50 hover:text-[#0000b9] transition-all"
                    >
                      <span>About Us</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </a>
                  </li>

                  {/* Services Accordion */}
                  <li className="pt-1">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full py-3 px-3 rounded-xl font-bold text-[16.5px] text-slate-800 hover:bg-slate-50 hover:text-[#0000b9] transition-all cursor-pointer"
                      aria-expanded={mobileServicesOpen}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[#0000b9]" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="pl-2 pr-1 py-1 space-y-1 mt-1 mb-2 bg-slate-50/70 rounded-xl border border-slate-100">
                            {servicesList.map((service) => {
                              const ServiceIcon = service.icon;
                              return (
                                <li key={service.label}>
                                  <a
                                    href={service.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 py-2 px-2.5 rounded-lg text-[13.5px] font-semibold text-slate-700 hover:text-[#0000b9] hover:bg-white transition-all"
                                  >
                                    <div
                                      className={`h-7 w-7 rounded-md ${service.color} flex items-center justify-center shrink-0`}
                                    >
                                      <ServiceIcon className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="truncate">{service.label}</span>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Our Works */}
                  <li className="pt-1">
                    <a
                      href="/#projects"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 px-3 rounded-xl font-bold text-[16.5px] text-slate-800 hover:bg-slate-50 hover:text-[#0000b9] transition-all"
                    >
                      <span>Our Works</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </a>
                  </li>

                  {/* Why Choose Us */}
                  <li className="pt-1">
                    <a
                      href="/#why-choose-us"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 px-3 rounded-xl font-bold text-[16.5px] text-slate-800 hover:bg-slate-50 hover:text-[#0000b9] transition-all"
                    >
                      <span>Why Choose Us</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </a>
                  </li>

                  {/* Reviews */}
                  <li className="pt-1">
                    <a
                      href="/#reviews"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 px-3 rounded-xl font-bold text-[16.5px] text-slate-800 hover:bg-slate-50 hover:text-[#0000b9] transition-all"
                    >
                      <span>Reviews</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </a>
                  </li>

                  {/* Contact Us */}
                  <li className="pt-1">
                    <a
                      href="/#contact"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3 px-3 rounded-xl font-bold text-[16.5px] text-slate-800 hover:bg-slate-50 hover:text-[#0000b9] transition-all"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </a>
                  </li>
                </ul>

                {/* Additional Trust & Location Info in Drawer */}
                <div className="pt-4 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Licensed &amp; Insured General Contractor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="font-semibold">Serving DFW &amp; Surrounding Areas Since 2001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-600 shrink-0" />
                    <span className="font-semibold">Mon–Fri: 7am–9pm | 24/7 Emergency</span>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Actions & Footer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-xl border border-slate-300 bg-white hover:border-[#0000b9] hover:bg-[#0000b9]/5 py-3 text-center font-bold text-slate-800 hover:text-[#0000b9] transition-all text-sm shadow-2xs cursor-pointer"
                >
                  Request A Free Estimate
                </button>

                {/* Social & Language Row */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-slate-200/80 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-slate-200/80 hover:bg-[#E1306C] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="flex items-center bg-slate-200/80 p-0.5 rounded-full text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setLang("EN")}
                      className={`px-2.5 py-1 rounded-full transition-all ${lang === "EN" ? "bg-[#0000b9] text-white shadow-xs" : "text-slate-600"
                        }`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang("ES")}
                      className={`px-2.5 py-1 rounded-full transition-all ${lang === "ES" ? "bg-[#0000b9] text-white shadow-xs" : "text-slate-600"
                        }`}
                    >
                      Español
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
