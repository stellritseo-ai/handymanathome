import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Shield,
  Sparkles,
  Droplets,
  Clock,
  MapPin,
  FileText,
  BadgeCheck,
  Star,
  ArrowRight,
  Zap,
  Building2,
  Home,
  Check,
} from "lucide-react";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { Breadcrumbs, BreadcrumbItem } from "../Breadcrumbs";

export interface ServiceDetailConfig {
  slug: string;
  serviceName: string;
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  tagline: string;
  heroImage: string;
  description: string;
  secondaryParagraph: string;
  serviceType: string;
  keyStats: { label: string; value: string }[];
  surfacesCleaned: { title: string; desc: string; icon?: any }[];
  localRelevanceTitle: string;
  localRelevanceContent: string[];
  serviceProcess: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: { title: string; href: string; desc: string }[];
}

const serviceAreas = [
  { name: "Mooresville, NC", href: "/service-areas/mooresville-nc" },
  { name: "Lake Norman, NC", href: "/service-areas/lake-norman-nc" },
  { name: "Cornelius, NC", href: "/service-areas/cornelius-nc" },
  { name: "Davidson, NC", href: "/service-areas/davidson-nc" },
  { name: "Huntersville, NC", href: "/service-areas/huntersville-nc" },
  { name: "Troutman, NC", href: "/service-areas/troutman-nc" },
  { name: "Statesville, NC", href: "/service-areas/statesville-nc" },
  { name: "Denver, NC", href: "/service-areas/denver-nc" },
  { name: "Sherrills Ford, NC", href: "/service-areas/sherrills-ford-nc" },
  { name: "Mount Mourne, NC", href: "/service-areas/mount-mourne-nc" },
];

export function ServiceDetailPageTemplate({ config }: { config: ServiceDetailConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Services", href: "/services" },
    { label: config.serviceName, href: config.slug }
  ];

  // Generate Service Schema JSON-LD
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": config.serviceName,
    "serviceType": config.serviceType,
    "description": config.metaDescription,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Steam On Wheels",
      "telephone": "+1-704-516-9509",
      "url": "https://steamonwheelsnc.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "107 Kase Ct",
        "addressLocality": "Mooresville",
        "addressRegion": "NC",
        "postalCode": "28115",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Mooresville, NC" },
      { "@type": "Place", "name": "Lake Norman, NC" },
      { "@type": "City", "name": "Cornelius, NC" },
      { "@type": "City", "name": "Davidson, NC" },
      { "@type": "City", "name": "Huntersville, NC" },
      { "@type": "City", "name": "Troutman, NC" },
      { "@type": "City", "name": "Statesville, NC" },
      { "@type": "City", "name": "Denver, NC" },
      { "@type": "City", "name": "Sherrills Ford, NC" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": config.serviceName,
      "itemListElement": config.surfacesCleaned.map((s, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc
        }
      }))
    }
  };

  // Generate FAQPage JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": config.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Nav />
      <Breadcrumbs items={breadcrumbs} className="pt-24 lg:pt-28" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Hero Content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                {config.heroBadge}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
                {config.h1Title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-6">
                {config.description}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                {config.secondaryParagraph}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="tel:7045169509"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Phone className="h-4 w-4" /> Call (704) 516-9509
                </a>
                <a
                  href="/estimate"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-[1.02]"
                >
                  <FileText className="h-4 w-4 text-sky-400" /> Request Free Estimate
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 border-t border-slate-800/80 pt-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Licensed &amp; Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-400" /> 15+ Years Experience
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" /> 24/7 Emergency Dispatch
                </span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-glow p-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img
                    src={config.heroImage}
                    alt={config.serviceName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                {/* Key stats pill row */}
                <div className="grid grid-cols-2 gap-3 p-4">
                  {config.keyStats.map((stat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-center">
                      <span className="text-lg font-extrabold text-sky-400 block">{stat.value}</span>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Surfaces We Clean Section */}
      <section className="py-20 bg-slate-900/60 border-t border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
              Scope of Service
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Surfaces &amp; Materials We Clean
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 font-medium">
              We apply calibrated pressure and custom-blended detergents engineered specifically for each building material.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.surfacesCleaned.map((surface, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{surface.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{surface.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                  <Check className="h-3.5 w-3.5" /> 100% Surface Safe
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Relevance / Climate Challenges */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
                Local Climate Defense
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6">
                {config.localRelevanceTitle}
              </h2>
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                {config.localRelevanceContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-3xl p-7">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-400" />
                Proudly Serving Across Lake Norman
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                We provide fast, reliable dispatch to all communities within a 50-mile radius of Mooresville, NC:
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.name}
                    to={area.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{area.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
              Our Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Our 4-Step {config.serviceName} Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.serviceProcess.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-sky-500/30 block mb-3 font-mono">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions About {config.serviceName}
            </h2>
          </div>

          <div className="space-y-3">
            {config.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 text-slate-200 hover:text-white transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-sky-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed font-medium border-t border-slate-800/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-900/60 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Other Services You May Need</h2>
              <p className="text-xs text-slate-400">Bundle services together for maximum property transformation and savings.</p>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 uppercase tracking-wider"
            >
              View All Services <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.relatedServices.map((rel, i) => (
              <Link
                key={i}
                to={rel.href}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all group"
              >
                <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                  {rel.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{rel.desc}</p>
                <span className="text-xs font-bold text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn More <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-gradient-to-br from-sky-950 via-slate-900 to-blue-950 border-t border-slate-800 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-5">
            100% Free, No-Obligation Quotes
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Schedule Your {config.serviceName} in Mooresville or Lake Norman Today
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Call owner David Hudson directly or request your itemized digital estimate online. We respond fast and deliver guaranteed results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7045169509"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-glow hover:scale-105 transition-all"
            >
              <Phone className="h-4 w-4" /> Call (704) 516-9509
            </a>
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition-all"
            >
              <FileText className="h-4 w-4 text-sky-400" /> Free Estimate
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
