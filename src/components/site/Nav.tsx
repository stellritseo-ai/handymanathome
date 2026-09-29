import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.png";
import {
  Menu, X, Phone, ChevronDown,
  Home, Paintbrush, Droplets, TreePine, Mail, Facebook, Instagram, Shield
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About Us" },
  {
    href: "#services",
    label: "Services",
    submenu: [
      { href: "#services", label: "Kitchen & Bathroom Remodel", icon: Home },
      { href: "#services", label: "Painting (Interior & Exterior)", icon: Paintbrush },
      { href: "#services", label: "Roofing Repairs & Installation", icon: Shield },
      { href: "#services", label: "Plumbing Services", icon: Droplets },
      { href: "#services", label: "Landscaping & Outdoor Work", icon: TreePine },
    ]
  },
  { href: "#projects", label: "Our Works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact Us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
        {/* Top Info Banner */}
        <div className="bg-[#070b1a] border-b border-white/10 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2.5">
            {/* Top Bar Left: Email */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:handymanathome@gmail.com"
                className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors lowercase"
              >
                <div className="h-5 w-5 rounded-full bg-[#0000b9]/30 flex items-center justify-center text-[#60a5fa]">
                  <Mail className="h-3 w-3" />
                </div>
                <span className="font-semibold text-[11.5px] tracking-normal">handymanathome@gmail.com</span>
              </a>
            </div>

            {/* Top Bar Right: Hours, Emergency, Socials, Language */}
            <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 text-slate-200">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>7am to 9pm Mon-Fri, 24/7 emergency services</span>
              </div>

              <span className="text-white/20 hidden sm:inline">|</span>

              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-[10px] tracking-wider font-semibold">Follow Us On:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#1877F2] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#E1306C] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://g.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#4285F4] transition-colors flex items-center"
                    aria-label="Google"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.54 0-6.423-2.883-6.423-6.423 0-3.54 2.883-6.423 6.423-6.423 1.547 0 2.96.549 4.07 1.547l3.052-3.052C19.296 2.453 15.932 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-11 0-.746-.067-1.467-.19-2.195H12.24z" />
                    </svg>
                  </a>
                </div>
              </div>

              <span className="text-white/20 hidden sm:inline">|</span>

              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-md text-[10.5px] font-bold">
                <button
                  type="button"
                  onClick={() => setLang("EN")}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                    lang === "EN"
                      ? "bg-[#0000b9] text-white shadow-xs"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang("ES")}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                    lang === "ES"
                      ? "bg-[#0000b9] text-white shadow-xs"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Spanish
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "py-2 bg-white/98 backdrop-blur-md shadow-[0_4px_25px_-5px_rgba(0,0,0,0.08)] border-b border-slate-200/80"
              : "py-3 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between">
              {/* Logo: HANDYMAN AT HOME */}
              <a href="/" className="flex items-center group transition-transform hover:scale-[1.02]">
                <img
                  src={logoImg}
                  alt="HANDYMAN AT HOME - General Contractor & Handyman Services"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </a>

              {/* Desktop links */}
              <ul className="hidden lg:flex items-center gap-1 ml-auto mr-6">
                {links.map((l) => {
                  if (l.submenu) {
                    return (
                      <li key={l.label} className="relative group py-2">
                        <button
                          type="button"
                          className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full text-slate-700 hover:text-[#0000b9] hover:bg-[#0000b9]/5 transition-all cursor-pointer"
                        >
                          <span>{l.label}</span>
                          <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 text-[#0000b9]" />
                        </button>
                        {/* Dropdown panel */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                          <div className="bg-white border border-slate-100 rounded-2xl shadow-xl p-2">
                            <ul className="flex flex-col gap-1">
                              {l.submenu.map((sub) => {
                                const SubIcon = sub.icon;
                                return (
                                  <li key={sub.label}>
                                    <a
                                      href={sub.href}
                                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-700 hover:text-[#0000b9] hover:bg-[#0000b9]/5 transition-colors text-[13px] font-semibold"
                                    >
                                      <div className="h-7 w-7 rounded-lg bg-[#0000b9]/10 text-[#0000b9] flex items-center justify-center shrink-0">
                                        <SubIcon className="h-4 w-4" />
                                      </div>
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
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="relative px-3.5 py-2 text-sm font-semibold rounded-full text-slate-700 hover:text-[#0000b9] hover:bg-[#0000b9]/5 transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Desktop CTAs: Get A Quote | Call Now */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#0000b9] bg-transparent hover:bg-[#0000b9]/5 px-5 py-2.5 text-xs font-extrabold text-[#0000b9] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get A Quote
                </a>
                <a
                  href="tel:2148141444"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0000b9] hover:bg-[#1526d4] px-5 py-2.5 text-xs font-extrabold text-white shadow-[0_4px_15px_rgba(0,0,185,0.35)] hover:shadow-[0_6px_20px_rgba(0,0,185,0.45)] transition-all hover:scale-[1.03] active:scale-[0.98]"
                >
                  <Phone className="h-3.5 w-3.5 fill-current" />
                  <span>Call Now: (214) 814-1444</span>
                </a>
              </div>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden grid h-10 w-10 place-items-center rounded-xl bg-slate-100/80 border border-slate-200 text-slate-800 hover:bg-slate-200 transition-colors"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[60] lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-[360px] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <a href="/" onClick={() => setOpen(false)} className="flex items-center">
                  <img
                    src={logoImg}
                    alt="HANDYMAN AT HOME"
                    className="h-9 w-auto object-contain"
                  />
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-0.5 px-6 pt-5 overflow-y-auto flex-1 select-none text-left">
                {links.map((l) => {
                  if (l.submenu) {
                    return (
                      <li key={l.label} className="flex flex-col border-b border-slate-100">
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex items-center justify-between w-full py-3.5 text-[16px] font-bold tracking-tight text-slate-800 hover:text-[#0000b9] transition-colors cursor-pointer"
                        >
                          <span>{l.label}</span>
                          <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#0000b9]" : ""}`} />
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
                              <ul className="pl-4 py-1 flex flex-col gap-0.5 border-l-2 border-[#0000b9]/30 bg-slate-50/70 rounded-r-xl mt-0.5 mb-3">
                                {l.submenu.map((sub) => {
                                  const SubIcon = sub.icon;
                                  return (
                                    <li key={sub.label}>
                                      <a
                                        href={sub.href}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-2.5 py-2.5 px-3 text-[13px] font-semibold text-slate-700 hover:text-[#0000b9] hover:bg-white rounded-lg transition-all"
                                      >
                                        <SubIcon className="h-4 w-4 text-[#0000b9] shrink-0" />
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
                    <li key={l.label} className="border-b border-slate-100">
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block py-3.5 text-[16px] font-bold tracking-tight text-slate-800 hover:text-[#0000b9] hover:translate-x-1 transition-all duration-200"
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="p-6 border-t border-slate-100 bg-slate-50/60 space-y-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-full border-2 border-[#0000b9] py-3 text-center font-bold text-[#0000b9] hover:bg-[#0000b9]/5 transition-all text-sm cursor-pointer"
                >
                  Get A Quote
                </a>
                <a
                  href="tel:2148141444"
                  className="flex items-center justify-center gap-2.5 w-full rounded-full bg-[#0000b9] hover:bg-[#1526d4] py-3.5 text-center font-bold text-white shadow-glow transition-all text-sm"
                >
                  <Phone className="h-4 w-4 text-white" />
                  <span>Call Now: (214) 814-1444</span>
                </a>
                <p className="text-[11px] text-center text-slate-500 font-medium">
                  Dallas-Fort Worth, TX • 24/7 Emergency Service
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
