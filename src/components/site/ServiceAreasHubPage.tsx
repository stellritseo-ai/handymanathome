import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Shield,
  Phone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FileText,
  Clock,
  Droplets,
  Building2,
  Home,
  Check,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import { citiesData } from "@/lib/citiesData";

const countiesServed = [
  {
    name: "Iredell County",
    cities: ["Mooresville", "Troutman", "Statesville", "Mount Mourne", "Shepherds"],
    desc: "Home to our main headquarters. We provide daily residential and commercial exterior cleaning across all of Iredell County."
  },
  {
    name: "Mecklenburg County",
    cities: ["Cornelius", "Davidson", "Huntersville", "North Charlotte"],
    desc: "Extensive service across northern Mecklenburg County, from The Peninsula to Birkdale Village and River Run."
  },
  {
    name: "Catawba County",
    cities: ["Sherrills Ford", "Terrell", "Hickory", "Newton", "Conover", "Maiden"],
    desc: "Serving eastern and central Catawba County with specialized lakefront soft washing and commercial power washing."
  },
  {
    name: "Lincoln County",
    cities: ["Denver", "Lincolnton", "Westport", "Iron Station"],
    desc: "Complete coverage along the western shore of Lake Norman and Highway 16 corridor."
  }
];

export function ServiceAreasHubPage() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const breadcrumbs = [{ label: "Service Areas", href: "/service-areas" }];
  const cityList = Object.values(citiesData);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      <Nav />
      <Breadcrumbs items={breadcrumbs} className="pt-24 lg:pt-28" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin className="h-3.5 w-3.5 text-sky-400" />
              North Carolina Service Areas
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Pressure Washing &amp; Exterior Cleaning Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                Mooresville, Lake Norman &amp; Surrounding Communities
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-8">
              Based in Mooresville, NC, Steam On Wheels provides prompt, professional pressure washing, soft house washing, roof algae cleaning, and concrete degreasing across a 50-mile radius in Iredell, Mecklenburg, Catawba, and Lincoln Counties.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:7045169509"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow hover:scale-[1.02] transition-all"
              >
                <Phone className="h-4 w-4" /> Call (704) 516-9509
              </a>
              <a
                href="/estimate"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-[1.02]"
              >
                <FileText className="h-4 w-4 text-sky-400" /> Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* City Directory Grid */}
      <section className="py-20 bg-slate-900/50 border-t border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
              Local Service Directory
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Select Your Local Community
            </h2>
            <p className="text-sm text-slate-400">
              Click below to view localized exterior cleaning services, local property challenges, and specialized solutions tailored to your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityList.map((city) => (
              <Link
                key={city.slug}
                to={city.slug}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                      <MapPin className="h-3 w-3" /> {city.county}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {city.zipCodes.join(", ")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                    {city.cityName}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {city.introDescription}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Top Services Available:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {city.servicesOffered.slice(0, 3).map((s, i) => (
                        <span key={i} className="text-[11px] font-semibold text-slate-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                          {s.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-white uppercase tracking-wider">
                  <span>View {city.cityName.split(",")[0]} Services</span>
                  <ArrowRight className="h-4 w-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Counties Breakdown */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
              Regional Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Counties We Proudly Serve in North Carolina
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {countiesServed.map((county, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white">{county.name}</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {county.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {county.cities.map((city, ci) => (
                    <span
                      key={ci}
                      className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-900/40 via-slate-900 to-blue-900/30 border-t border-slate-800 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Don't See Your Town Listed?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl mx-auto">
            If you are within 50 miles of Mooresville, NC, we can service your residential or commercial property. Call us today for a free instant estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7045169509"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow hover:scale-105 transition-all"
            >
              <Phone className="h-4 w-4" /> Call (704) 516-9509
            </a>
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition-all"
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
