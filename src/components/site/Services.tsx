import residential from "@/assets/svc-residential.png";
import commercial from "@/assets/svc-commercial.png";
import concrete from "@/assets/svc-concrete.png";
import roof from "@/assets/svc-roof.png";
import siding from "@/assets/svc-siding.png";
import driveway from "@/assets/svc-driveway.png";
import painting from "@/assets/svc-painting.png";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const services = [
  {
    title: "Residential",
    desc: "Professional house washing, exterior siding cleaning, and soft washing to keep your home shining like new.",
    image: residential
  },
  {
    title: "Commercial",
    desc: "High-quality exterior building washing, window cleaning, and concrete restoration for businesses.",
    image: commercial
  },
  {
    title: "Concrete Cleaning",
    desc: "High-pressure deep washing for driveways, patios, walkways, and commercial concrete surfaces.",
    image: concrete
  },
  {
    title: "Roof Washing",
    desc: "Safe soft wash roof cleaning to remove dark streaks, moss, and algae without shingle damage.",
    image: roof
  },
  {
    title: "Siding & Exterior Cleaning",
    desc: "Specialized soft wash exterior cleaning for vinyl, stucco, brick, and wood sidings.",
    image: siding
  },
  {
    title: "Driveway Cleaning",
    desc: "Deep stain removal and high-pressure cleaning to restore pavers, concrete, and asphalt driveways.",
    image: driveway
  },
  {
    title: "Painting Service",
    desc: "Professional exterior and interior house painting services for residential and commercial properties.",
    image: painting
  }
] as const;

export function Services() {
  // First 3 items for the top row grid
  const topItems = services.slice(0, 3);
  // Remaining items for the second row carousel slider (duplicated multiple times to prevent loop stuttering/snapping)
  const slideItems = [
    ...services.slice(3),
    ...services.slice(3),
    ...services.slice(3),
    ...services.slice(3),
  ];

  return (
    <section id="services" className="w-full bg-[#fff] py-[60px] px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full">

        {/* Top Row Grid: Left Text Column + 3 Right Image Cards */}
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-center">

          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center h-full"
          >
            <div className="pr-2 mb-6 lg:mb-0">
              {/* Badge Pill in Brand Blue */}
              <span className="inline-flex items-center bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-5">
                Our Services
              </span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] -mt-[5px] -mb-[10px] leading-tight font-bold text-neutral-900 tracking-tight">
                Services We’re Offering
              </h2>
              <p className="mt-5 text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
                Our highly qualified employee-owners deliver expertise and exceptional service across a diverse portfolio of project types.
              </p>
              {/* Brand Blue CTA Button */}
              <div className="mt-7">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0ea5e9] hover:to-[#0369a1] text-white rounded-full px-7 py-3 text-[14px] font-bold shadow-[0_4px_14px_rgba(14,165,233,0.3)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Top 3 Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {topItems.map((s, idx) => {
              const serviceHref = s.title === "Residential" ? "/services/house-washing" : s.title === "Commercial" ? "/services/commercial-pressure-washing" : s.title === "Concrete Cleaning" ? "/services/concrete-cleaning" : "/services";
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                  className="group relative rounded-[10px] overflow-hidden shadow-md bg-neutral-950 h-[220px] sm:h-[280px] lg:h-[340px] xl:h-[380px] border border-neutral-900/5 cursor-pointer transform-gpu"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                  {/* Card Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                    <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                      <h3 className="text-[15px] sm:text-base font-bold text-white leading-tight uppercase">
                        {s.title}
                      </h3>

                      {/* Hover detail drawer with Brand Blue styling */}
                      <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                        <p className="text-[12px] text-white/85 leading-snug mt-1.5 line-clamp-3 max-w-[95%]">
                          {s.desc}
                        </p>

                        <div className="pt-2">
                          <Link
                            to={serviceHref}
                            className="relative inline-flex items-center gap-1 text-[#0ea5e9] hover:text-[#3b82f6] font-bold text-[10px] uppercase tracking-widest pb-0.5 transition-colors duration-300"
                          >
                            <span>View More</span>
                            <ArrowRight className="w-3 h-3" />
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0ea5e9] hover:bg-[#3b82f6] transition-colors duration-300" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Second Row Grid: Slider / Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 relative px-2 md:px-0"
        >
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
                <CarouselItem key={`${s.title}-${idx}`} className="pl-5 basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="group relative rounded-[10px] overflow-hidden shadow-md bg-neutral-950 h-[220px] sm:h-[280px] lg:h-[340px] xl:h-[380px] border border-neutral-900/5 cursor-pointer transform-gpu">
                    {/* Background image */}
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out transform-gpu"
                      style={{ willChange: "transform" }}
                      loading="lazy"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                    {/* Card Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                      <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                        <h3 className="text-[15px] sm:text-base font-bold text-white leading-tight uppercase">
                          {s.title}
                        </h3>

                        {/* Hover detail drawer with Brand Blue styling */}
                        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                          <p className="text-[12px] text-white/85 leading-snug mt-1.5 line-clamp-3 max-w-[95%]">
                            {s.desc}
                          </p>

                          <div className="pt-2">
                            <Link
                              to={s.title === "Residential" ? "/services/house-washing" : s.title === "Commercial" ? "/services/commercial-pressure-washing" : s.title === "Concrete Cleaning" ? "/services/concrete-cleaning" : s.title === "Roof Washing" ? "/services/roof-cleaning" : s.title.includes("Siding") ? "/services/house-washing" : s.title.includes("Driveway") ? "/services/driveway-cleaning" : s.title.includes("Painting") ? "/painting-service" : "/services"}
                              className="relative inline-flex items-center gap-1 text-[#0ea5e9] hover:text-[#3b82f6] font-bold text-[10px] uppercase tracking-widest pb-0.5 transition-colors duration-300"
                            >
                              <span>View More</span>
                              <ArrowRight className="w-3 h-3" />
                              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0ea5e9] hover:bg-[#3b82f6] transition-colors duration-300" />
                            </Link>
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
