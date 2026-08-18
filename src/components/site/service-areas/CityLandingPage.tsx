import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Shield,
  Sparkles,
  FileText,
  Clock,
  Droplets,
  Building2,
  Home,
  ArrowRight,
  Check,
} from "lucide-react";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { Breadcrumbs, BreadcrumbItem } from "../Breadcrumbs";
import { CityConfig } from "@/lib/citiesData";

export function CityLandingPage({ city }: { city: CityConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Service Areas", href: "/service-areas" },
    { label: city.cityName, href: city.slug }
  ];

  // LocalBusiness Schema for the specific city
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": `Steam On Wheels - ${city.cityName}`,
    "telephone": "+1-704-516-9509",
    "url": `https://steamonwheelsnc.com${city.slug}`,
    "image": "https://steamonwheelsnc.com/favicon.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "107 Kase Ct",
      "addressLocality": "Mooresville",
      "addressRegion": "NC",
      "postalCode": "28115",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": city.cityName
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Pressure Washing Services in ${city.cityName}`,
      "itemListElement": city.servicesOffered.map((s) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${s.title} in ${city.cityName}`,
          "description": s.desc
        }
      }))
    }
  };

  // FAQPage Schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.localFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              <MapPin className="h-3.5 w-3.5 text-sky-400" />
              {city.heroBadge}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              {city.h1Title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-8">
              {city.introDescription}
            </p>

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
                <FileText className="h-4 w-4 text-sky-400" /> Free Estimate in {city.cityName.split(",")[0]}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 border-t border-slate-800/80 pt-6">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Licensed &amp; Insured ($2M Liability)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-sky-400" /> Local Owner-Operated
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber-400" /> 100% 5-Star Reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Climate & Characteristics */}
      <section className="py-20 bg-slate-900/50 border-t border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
                Local Environment &amp; HOA Factors
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6">
                {city.localCharacteristics.headline}
              </h2>
              <div className="space-y-4">
                {city.localCharacteristics.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <Check className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-glow">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-sky-400" />
                Our Commitment to {city.cityName.split(",")[0]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                We believe in providing honest, Christian-owned, owner-operated service on every property. Founder David Hudson personally oversees every project to guarantee perfection.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-400 mb-8 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Zero high-pressure damage on roofs or siding
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Plant-friendly and pet-safe biodegradable detergents
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Upfront, itemized quotes with no hidden fees
                </li>
              </ul>
              <a
                href="tel:7045169509"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-400 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
              >
                <Phone className="h-4 w-4" /> Call David: (704) 516-9509
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Served */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
              Tailored Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Properties We Clean in {city.cityName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.propertyTypesServed.map((prop, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered in City */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
              Full Service Menu
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Exterior Cleaning Services in {city.cityName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {city.servicesOffered.map((service, idx) => (
              <Link
                key={idx}
                to={service.href}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">{service.desc}</p>
                </div>
                <span className="text-xs font-bold text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Service Details <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
              Local Answers
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions in {city.cityName}
            </h2>
          </div>

          <div className="space-y-3">
            {city.localFaqs.map((faq, index) => {
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

      {/* Neighboring Service Areas */}
      <section className="py-16 bg-slate-900/60 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Nearby Communities We Also Serve</h2>
          <p className="text-xs text-slate-400 mb-6">Explore our pressure washing and exterior cleaning services in adjacent Lake Norman towns:</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {city.neighboringCities.map((neighbor, i) => (
              <Link
                key={i}
                to={neighbor.href}
                className="px-4 py-2 rounded-full bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
              >
                {neighbor.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-gradient-to-br from-sky-950 via-slate-900 to-blue-950 border-t border-slate-800 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready for a Free Exterior Cleaning Estimate in {city.cityName.split(",")[0]}?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Call David Hudson directly or request your itemized estimate online. Fast response, guaranteed quality, and 100% satisfaction.
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
