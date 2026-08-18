import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Shield,
  Sparkles,
  Home,
  Building2,
  Layers,
  Car,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Zap,
  Check,
  CalendarCheck,
  Search,
  FileText,
  Wrench,
  BadgeCheck,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4";
import svcPressureWash from "@/assets/svc-pressure-wash.png";
import svcResidential from "@/assets/svc-residential.png";
import svcRoof from "@/assets/svc-roof.png";
import svcSiding from "@/assets/svc-siding.png";
import svcConcrete from "@/assets/svc-concrete.png";
import svcDriveway from "@/assets/svc-driveway.png";
import svcCommercial from "@/assets/svc-commercial.png";
import serviceHouseImg from "@/assets/service-house.jpg";

const servicesList = [
  {
    slug: "/services/pressure-washing",
    title: "Pressure Washing",
    subtitle: "Heavy-Duty Exterior Power Washing",
    desc: "Commercial-grade high-pressure hot & cold water washing for resilient exterior surfaces. Eradicate deeply embedded grime, industrial stains, and severe buildup.",
    icon: Droplets,
    image: svcPressureWash,
    badge: "Most Popular",
    highlights: ["Hot water degreasing", "Up to 4,000 PSI capacity", "Commercial & residential", "Safe on tough masonry"]
  },
  {
    slug: "/services/house-washing",
    title: "House Washing",
    subtitle: "Gentle Siding & Exterior Cleaning",
    desc: "Low-pressure soft washing specifically formulated for vinyl siding, fiber cement Hardie board, painted brick, and stucco without risk of water intrusion or paint stripping.",
    icon: Home,
    image: svcResidential,
    badge: "Curbside Transformation",
    highlights: ["Vinyl & Hardie safe", "Eradicates green algae & mold", "Biodegradable solutions", "Zero water intrusion"]
  },
  {
    slug: "/services/soft-washing",
    title: "Soft Washing",
    subtitle: "Low-Pressure Chemical Treatment",
    desc: "Specialized low-pressure sanitization technology that eliminates mold, mildew, and bacteria at the root using eco-safe detergents rather than destructive brute force.",
    icon: Sparkles,
    image: svcSiding,
    badge: "Delicate Surfaces",
    highlights: ["100% surface safe", "Kills algae spores at root", "Lasts 4x longer than water alone", "HOA compliant cleaning"]
  },
  {
    slug: "/services/roof-cleaning",
    title: "Roof Cleaning",
    subtitle: "Shingle-Safe Dark Streak Removal",
    desc: "Manufacturer-approved soft wash roof restoration that safely eliminates Gloeocapsa magma (black algae), lichen, and moss without voiding asphalt shingle warranties.",
    icon: Shield,
    image: svcRoof,
    badge: "Warranty Protected",
    highlights: ["ARMA compliant method", "Zero shingle granule loss", "Lowers cooling costs", "Extends roof lifespan"]
  },
  {
    slug: "/services/concrete-cleaning",
    title: "Concrete Cleaning",
    subtitle: "Flatwork & Patio Restoration",
    desc: "Professional rotary surface cleaning for sidewalks, pool decks, retaining walls, and commercial walkways. Removes slippery algae, ground-in dirt, and atmospheric fallout.",
    icon: Layers,
    image: svcConcrete,
    badge: "Slip & Fall Prevention",
    highlights: ["Uniform streak-free finish", "Removes black mildew", "Pool deck & patio safe", "Deep pore extraction"]
  },
  {
    slug: "/services/driveway-cleaning",
    title: "Driveway Cleaning",
    subtitle: "Oil, Rust & Red Clay Removal",
    desc: "Targeted deep stain eradication for concrete, asphalt, and interlocking paver driveways. We dissolve stubborn oil drips, tire marks, and Carolina red clay.",
    icon: Car,
    image: svcDriveway,
    badge: "Stain Elimination",
    highlights: ["NC red clay treatment", "Vehicle oil degreasing", "Interlocking paver wash", "Curb appeal booster"]
  },
  {
    slug: "/services/commercial-pressure-washing",
    title: "Commercial Pressure Washing",
    subtitle: "Facility, Storefront & Fleet Cleaning",
    desc: "Complete exterior property management washing for Lake Norman businesses, storefronts, shopping plazas, logistics warehouses, dumpster pads, and parking garages.",
    icon: Building2,
    image: svcCommercial,
    badge: "Business Grade",
    highlights: ["Flexible off-hours scheduling", "Dumpster pad sanitation", "Drive-thrus & sidewalks", "$2M liability insured"]
  },
  {
    slug: "/services/emergency-service",
    title: "24/7 Emergency Service",
    subtitle: "Rapid Exterior Dispatch & Spill Cleanup",
    desc: "Around-the-clock emergency exterior pressure washing for critical oil spills, graffiti vandalism, pre-inspection emergencies, and post-storm commercial hazard cleanups.",
    icon: Clock,
    image: svcPressureWash,
    badge: "24/7 Rapid Response",
    highlights: ["Instant owner dispatch", "Graffiti removal", "Commercial grease cleanup", "Storm debris pressure wash"]
  },
];

const serviceProcess = [
  {
    step: "01",
    title: "Property & Surface Assessment",
    desc: "We inspect your property, test surface porosity, identify stain types (algae, oil, rust, red clay), and select calibrated pressure & eco-safe detergents."
  },
  {
    step: "02",
    title: "Pre-Treatment & Landscape Defense",
    desc: "We pre-wet all surrounding plants, tape exterior electrical outlets, and apply specialized eco-friendly cleaning detergents to break down organic growth."
  },
  {
    step: "03",
    title: "Precision Cleaning & Soft Wash",
    desc: "Using calibrated rotary surface cleaners or gentle soft-wash systems, we thoroughly clean all designated surfaces without damage."
  },
  {
    step: "04",
    title: "Post-Rinse & Quality Inspection",
    desc: "We complete a thorough neutralizing rinse, inspect every square foot with the homeowner or facility manager, and guarantee 100% satisfaction."
  }
];

export function ServicesHubPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      <Nav />
      <Breadcrumbs items={breadcrumbItems} className="pt-24 lg:pt-28" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              Comprehensive Exterior Cleaning
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Professional Pressure Washing &amp; Exterior Cleaning Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                Mooresville &amp; Lake Norman, NC
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
              Steam On Wheels provides industrial-grade hot water pressure washing, manufacturer-approved soft roof washing, house washing, concrete restoration, and 24/7 emergency exterior cleaning. Owned and operated by David Hudson with 15+ years of hands-on expertise.
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
                <FileText className="h-4 w-4 text-sky-400" /> Request Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900/50 border-t border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Our Complete Exterior Cleaning Services
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Tailored solutions for every surface material, ensuring pristine cleanliness without surface damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(14,165,233,0.15)] hover:-translate-y-1"
                >
                  <div>
                    {/* Top Image Preview & Badge */}
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-slate-950">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <span className="absolute top-3 right-3 bg-sky-500/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-sky-400/90 font-semibold">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-medium">
                      {service.desc}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.slug}
                    className="inline-flex items-center justify-between w-full rounded-xl bg-slate-800/80 hover:bg-sky-500 hover:text-white border border-slate-700/80 py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-200 transition-all group/link"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="h-4 w-4 text-sky-400 group-hover/link:text-white group-hover/link:translate-x-1 transition-all" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Steam On Wheels */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
                The Steam On Wheels Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6">
                Why Property Owners in Lake Norman Trust Our Expertise
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
                With high regional humidity, rapid pine pollen accumulation, and red clay staining across North Carolina, your property requires customized cleaning techniques. We deliver surgical precision without surface erosion.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <BadgeCheck className="h-6 w-6 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Direct Owner Involvement</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">Founder David Hudson oversees every project to guarantee meticulous execution and complete client satisfaction.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Shield className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Fully Licensed &amp; Insured ($2M Liability)</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">Complete peace of mind knowing your high-value residential estate or commercial facility is 100% protected.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Zap className="h-6 w-6 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Eco-Safe, Biodegradable Detergents</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">Our specialized solutions safely neutralize mold, algae, and mildew while protecting landscaping, pets, and waterways.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Flow */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-glow">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                Our 4-Step Exterior Cleaning Process
              </h3>
              <div className="space-y-6">
                {serviceProcess.map((p) => (
                  <div key={p.step} className="flex items-start gap-4">
                    <span className="h-9 w-9 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                      {p.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{p.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Conversion Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-900/40 via-slate-900 to-blue-900/30 border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to Restore Your Property’s Exterior?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl mx-auto">
            Get an instant, transparent quote with zero hidden fees. We provide free property walkthroughs and fast scheduling across Mooresville, Lake Norman, and surrounding areas.
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
