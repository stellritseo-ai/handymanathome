import { useEffect, useState } from "react";
import {
  Menu, X, Phone, Shield, Award, Calendar, ChevronDown,
  Home, Building2, Layers, Sparkles, Car, Paintbrush, Star, Mail, FileText, Camera,
  Clock, Droplets, Facebook, Instagram
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    submenu: [
      { href: "/services", label: "All Services Overview", icon: Droplets },
      { href: "/services/pressure-washing", label: "Pressure Washing", icon: Droplets },
      { href: "/services/house-washing", label: "Soft House Washing", icon: Home },
      { href: "/services/soft-washing", label: "Soft Washing Tech", icon: Sparkles },
      { href: "/services/roof-cleaning", label: "Roof Cleaning", icon: Shield },
      { href: "/services/concrete-cleaning", label: "Concrete Cleaning", icon: Layers },
      { href: "/services/driveway-cleaning", label: "Driveway Cleaning", icon: Car },
      { href: "/services/commercial-pressure-washing", label: "Commercial Washing", icon: Building2 },
      { href: "/services/emergency-service", label: "24/7 Emergency Service", icon: Clock },
      { href: "/painting-service", label: "Exterior Painting", icon: Paintbrush },
    ]
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Guides" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
        {/* Top Info Banner */}
        <div className="bg-[#0b1329] border-b border-white/5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white/70">
          <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-white">
                <Shield className="h-3.5 w-3.5 text-white" />
                24/7 Emergency Services
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white text-[10px] tracking-wider font-semibold">FOLLOW US ON:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E1306C] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://g.page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4285F4] transition-colors flex items-center"
                  aria-label="Google"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.54 0-6.423-2.883-6.423-6.423 0-3.54 2.883-6.423 6.423-6.423 1.547 0 2.96.549 4.07 1.547l3.052-3.052C19.296 2.453 15.932 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-11 0-.746-.067-1.467-.19-2.195H12.24z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`transition-all duration-300 ${scrolled ? "py-2 bg-white/90 backdrop-blur-md shadow-elegant border-b border-slate-100" : "py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100/50 shadow-sm"}`}>
          <div className="mx-auto max-w-7xl px-4">
            <nav className="flex items-center justify-between">
              {/* Logo */}
              <a href="/" className="flex items-center group transition-transform hover:scale-[1.02]">
                <img src={logoImg} alt="SteamOnWheels Logo" className="h-16 w-auto object-contain" />
              </a>

              {/* Desktop links */}
              <ul className="hidden lg:flex items-center gap-1 ml-auto mr-12">
                {links.map((l) => {
                  if (l.submenu) {
                    return (
                      <li key={l.href} className="relative group py-2">
                        <button
                          className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full text-slate-700 hover:text-navy hover:bg-navy/5 transition-all cursor-pointer"
                        >
                          <span>{l.label}</span>
                          <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                        </button>
                        {/* Dropdown panel */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 w-60 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                          <div className="bg-white border border-slate-100 rounded-2xl shadow-elegant p-1.5">
                            <ul className="flex flex-col gap-0.5">
                              {l.submenu.map((sub) => {
                                const SubIcon = sub.icon;
                                return (
                                  <li key={sub.label}>
                                    <a
                                      href={sub.href}
                                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-slate-700 hover:text-navy hover:bg-slate-50 transition-colors text-[13px] font-semibold"
                                    >
                                      <SubIcon className="h-4 w-4 text-sky-500 shrink-0" />
                                      <span>{sub.label}</span>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="relative px-4 py-2 text-sm font-semibold rounded-full text-slate-700 hover:text-navy hover:bg-navy/5 transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href="tel:7045169509"
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 px-4 py-2 text-xs font-bold text-navy transition-all"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" /> (704) 516-9509
                </a>
                <a
                  href="/estimate"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
                >
                  Get Free Estimate
                </a>
              </div>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden grid h-10 w-10 place-items-center rounded-xl bg-slate-50 border border-slate-200 text-navy hover:bg-slate-100 transition-colors"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-slate-950/30 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-[360px] bg-white shadow-[0_0_50px_rgba(0,0,0,0.15)] flex flex-col lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <img src={logoImg} alt="SteamOnWheels Logo" className="h-12 w-auto object-contain" />
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-slate-50 border border-slate-200/60 text-slate-800 hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links List */}
              <ul className="flex flex-col gap-0.5 px-6 pt-6 overflow-y-auto flex-1 select-none">
                {links.map((l) => {
                  if (l.submenu) {
                    return (
                      <li key={l.href} className="flex flex-col border-b border-slate-100">
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex items-center justify-between w-full py-4 text-[17px] font-bold tracking-tight text-slate-800 hover:text-[#0ea5e9] transition-colors cursor-pointer"
                        >
                          <span>{l.label}</span>
                          <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#0ea5e9]" : ""}`} />
                        </button>

                        {/* Smooth collapsing sub-menu */}
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <ul className="pl-4 py-1 flex flex-col gap-0.5 border-l border-[#0ea5e9]/20 bg-slate-50/50 rounded-r-xl mt-0.5 mb-3">
                                {l.submenu.map((sub) => {
                                  const SubIcon = sub.icon;
                                  return (
                                    <li key={sub.label}>
                                      <a
                                        href={sub.href}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 py-2.5 px-3 text-[14px] font-semibold text-slate-600 hover:text-[#0ea5e9] hover:bg-white rounded-lg transition-all"
                                      >
                                        <SubIcon className="h-4.5 w-4.5 text-[#0ea5e9] shrink-0" />
                                        <span>{sub.label}</span>
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }
                  return (
                    <li key={l.href} className="border-b border-slate-100">
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block py-4 text-[17px] font-bold tracking-tight text-slate-800 hover:text-[#0ea5e9] hover:translate-x-1.5 transition-all duration-200"
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Action Buttons */}
              <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-3.5">
                <a
                  href="tel:7045169509"
                  className="flex items-center justify-center gap-2.5 w-full rounded-full border border-slate-200 bg-white py-3.5 text-center font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-sm text-sm"
                >
                  <Phone className="h-4.5 w-4.5 text-[#0ea5e9]" /> Call (704) 516-9509
                </a>
                <a
                  href="/estimate"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0ea5e9] hover:to-[#0369a1] py-3.5 text-center font-bold text-white shadow-[0_4px_14px_rgba(14,165,233,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all text-sm cursor-pointer"
                >
                  Get Free Estimate
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
