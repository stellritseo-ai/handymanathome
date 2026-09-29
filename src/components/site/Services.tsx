import residential from "@/assets/svc-residential.png";
import painting from "@/assets/svc-painting.png";
import roof from "@/assets/svc-roof.png";
import landscaping from "@/assets/svc-landscaping.png";
import commercial from "@/assets/svc-commercial.png";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

const services = [
  {
    title: "Kitchen & Bathroom Remodel",
    desc: "At Handyman At Home, we transform your most essential rooms into beautiful, functional spaces designed for your lifestyle. From custom cabinetry and tile work to full floor-to-ceiling upgrades, we bring your vision to life.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    href: "#contact",
  },
  {
    title: "Painting (Interior & Exterior)",
    desc: "Refresh and protect your property with our expert painting services. We deliver a flawless, durable finish that enhances your curb appeal and breathes new vibrant life into every interior room.",
    image: painting,
    href: "#contact",
  },
  {
    title: "Roofing Repairs & Installation",
    desc: "Secure your home from the top down with our reliable roofing solutions. We provide expert repairs to fix leaks and storm damage, along with comprehensive new installations that protect your investment.",
    image: roof,
    href: "#contact",
  },
  {
    title: "Plumbing Services",
    desc: "From minor drips to major pipe installations, we offer comprehensive plumbing services to keep your water flowing smoothly. Faucets, toilets, drains, and pipe replacements handled by seasoned pros.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    href: "#contact",
  },
  {
    title: "Landscaping & Outdoor Work",
    desc: "Enhance your property’s exterior with our professional landscaping and outdoor services. We create and maintain beautiful yards, patios, fences, decks, and outdoor living spaces.",
    image: landscaping,
    href: "#contact",
  },
  {
    title: "Commercial Property Maintenance",
    desc: "Dependable facility maintenance, office buildouts, and commercial repairs tailored for Dallas–Fort Worth businesses, property managers, and retail spaces.",
    image: commercial,
    href: "#contact",
  },
  {
    title: "Drywall, Framing & Carpentry",
    desc: "Precision carpentry, custom trim, crown molding, wall framing, and seamless drywall repairs to keep your home structurally sound and looking brand new.",
    image: residential,
    href: "#contact",
  },
] as const;

export function Services() {
  // First 3 items for the top row grid
  const topItems = services.slice(0, 3);
  // Duplicate for smooth seamless loop in carousel
  const slideItems = [
    ...services,
    ...services,
    ...services,
  ];

  return (
    <section id="services" className="w-full bg-[#fff] py-[60px] px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full">

        {/* Top Row Grid: Left Text Column + 3 Right Image Cards */}
        <div className="grid lg:grid-cols-[38%_1fr] gap-10 lg:gap-14 items-center">

          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center h-full text-left"
          >
            <div className="pr-2 mb-6 lg:mb-0">
              {/* Tag: Services We Offer */}
              <div className="inline-flex items-center gap-2 bg-[#0000b9]/10 border border-[#0000b9]/25 text-[#0000b9] rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000b9] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000b9]" />
                </span>
                <span>Services We Offer</span>
              </div>

              <h2
                className="text-[26px] xs:text-[30px] sm:text-[35px] -mt-[5px] mb-2 sm:-mb-[15px] leading-tight font-extrabold text-neutral-900 tracking-tight"
              >
                Comprehensive Services for Your{" "}
                <span className="text-[#0000b9]">Home or Business</span>
              </h2>

              <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
                We are your one-stop solution for a wide range of repair, maintenance, and improvement needs across Dallas–Fort Worth. As a full-service licensed general contractor, we handle every detail with master craftsmanship.
              </p>

              {/* Trust Value Points */}
              <div className="mt-5 space-y-2 text-xs sm:text-[13px] font-semibold text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Licensed &amp; Insured General Contractor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Free, Transparent Same-Day Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Residential &amp; Commercial DFW Coverage</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2.5 bg-[#0000b9] hover:bg-[#1526d4] text-white rounded-full px-7 py-3 text-[14px] font-bold shadow-glow hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer"
                >
                  <span>Request A Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 hover:border-[#0000b9] bg-white hover:bg-[#0000b9]/5 text-slate-800 hover:text-[#0000b9] font-bold text-[13.5px] px-5 py-3 transition-all duration-200 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#0000b9]" />
                  <span>(214) 814-1444</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Top 3 Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {topItems.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                className="group relative rounded-[14px] overflow-hidden shadow-md bg-neutral-950 h-[240px] sm:h-[290px] lg:h-[350px] xl:h-[390px] border border-neutral-900/10 cursor-pointer transform-gpu"
              >
                {/* Background image */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out transform-gpu"
                  style={{ willChange: "transform" }}
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                {/* Card Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                  <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-[15px] sm:text-base font-bold text-white leading-tight uppercase">
                      {s.title}
                    </h3>

                    {/* Hover detail drawer */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[180px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                      <p className="text-[12px] text-white/90 leading-snug mt-1.5 line-clamp-4 max-w-[95%]">
                        {s.desc}
                      </p>

                      <div className="pt-2">
                        <button
                          type="button"
                          className="relative inline-flex items-center gap-1 text-[#60a5fa] hover:text-white font-bold text-[11px] uppercase tracking-widest pb-0.5 transition-colors duration-300 cursor-pointer"
                        >
                          <span>Get Estimate</span>
                          <ArrowRight className="w-3 h-3" />
                          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#60a5fa] hover:bg-white transition-colors duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Row Grid: Slider / Carousel with all services */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 relative px-2 md:px-0"
        >
          {/* Edge gradient fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 z-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 z-20 bg-gradient-to-l from-white to-transparent" />

          <Carousel
            plugins={[
              AutoScroll({
                speed: 0.8,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-5 transform-gpu" style={{ willChange: "transform" }}>
              {slideItems.map((s, idx) => (
                <CarouselItem key={`${s.title}-${idx}`} className="pl-5 basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="group relative rounded-[14px] overflow-hidden shadow-md bg-neutral-950 h-[220px] sm:h-[260px] lg:h-[320px] border border-neutral-900/10 cursor-pointer transform-gpu">
                    {/* Background image */}
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out transform-gpu"
                      style={{ willChange: "transform" }}
                      loading="lazy"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                    {/* Card Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                      <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                        <h3 className="text-[14px] sm:text-base font-bold text-white leading-tight uppercase">
                          {s.title}
                        </h3>

                        {/* Hover detail drawer */}
                        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[170px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                          <p className="text-[11px] text-white/90 leading-snug mt-1.5 line-clamp-3 max-w-[95%]">
                            {s.desc}
                          </p>

                          <div className="pt-2">
                            <button
                              type="button"
                              className="relative inline-flex items-center gap-1 text-[#60a5fa] hover:text-white font-bold text-[10px] uppercase tracking-widest pb-0.5 transition-colors duration-300 cursor-pointer"
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-3 h-3" />
                              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#60a5fa] hover:bg-white transition-colors duration-300" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
