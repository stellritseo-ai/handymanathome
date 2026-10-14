import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { servicesData, galleryImagesList } from "@/lib/servicesData";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  ChevronRight,
  Star,
  Award,
} from "lucide-react";
import bbbLogo from "@/assets/bbb.svg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "Comprehensive General Contracting & Handyman Services | Handyman At Home DFW",
      },
      {
        name: "description",
        content:
          "Explore full-spectrum general contracting and handyman services in Dallas-Fort Worth: kitchen & bath remodel, painting, roofing, plumbing, landscaping, and master carpentry. Call (214) 814-1444.",
      },
      {
        property: "og:title",
        content: "General Contracting & Handyman Services | Handyman At Home Dallas-Fort Worth",
      },
      {
        property: "og:description",
        content: "Over 24 years of proven residential and commercial remodeling excellence in DFW.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/services" }],
  }),
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  const allServices = Object.values(servicesData);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#070b1a] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 border-b border-white/10">
          <div className="absolute -top-36 left-1/4 w-[540px] h-[540px] bg-[#0000b9]/30 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 -right-20 w-[420px] h-[420px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
              <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="/" className="hover:text-white transition-colors flex items-center gap-1 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-[#3b5bfd]" />
                    <span>Home</span>
                  </a>
                </li>
                <li className="text-slate-600">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-white font-semibold" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm select-none mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Complete General Contracting &amp; Handyman Services</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Comprehensive Services for Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300">
                  Home or Business
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                From luxury kitchen and bathroom remodels to roofing, plumbing, and precision carpentry, Handyman At Home is your single, trusted general contracting partner across the Dallas–Fort Worth metroplex.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="/free-estimate"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0000b9] hover:bg-[#0000d9] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 shadow-lg transition-all"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="tel:2148141444"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-7 py-3.5 backdrop-blur-md transition-all"
                >
                  <Phone className="h-4 w-4 text-emerald-400 fill-current" />
                  <span>Call (214) 814-1444</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Services Grid Section */}
        <section className="py-16 sm:py-24 bg-white relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((svc) => {
                const previewImg =
                  svc.heroImage ||
                  (svc.galleryImages && svc.galleryImages[0]) ||
                  (svc.galleryIndices && galleryImagesList[svc.galleryIndices[0]]) ||
                  galleryImagesList[0];
                return (
                  <div
                    key={svc.id}
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0000b9]/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                        <img
                          src={previewImg}
                          alt={svc.serviceName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-3 left-3 text-[11px] font-extrabold text-sky-300 uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md">
                          {svc.heroBadge}
                        </span>
                      </div>

                      <div className="p-6 text-left">
                        <h2 className="text-xl font-extrabold text-slate-900 group-hover:text-[#0000b9] transition-colors">
                          {svc.serviceName}
                        </h2>
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {svc.leadParagraph}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2">
                      <a
                        href={svc.slug}
                        className="w-full inline-flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 hover:bg-[#0000b9] text-slate-900 hover:text-white font-bold text-xs sm:text-sm transition-all"
                      >
                        <span>Explore Dedicated Page</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
