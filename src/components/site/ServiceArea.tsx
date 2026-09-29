import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Clock, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

interface Area {
  name: string;
  isPrimary?: boolean;
}

const areasData: Area[] = [
  { name: "Dallas, TX", isPrimary: true },
  { name: "Fort Worth, TX", isPrimary: true },
  { name: "Arlington, TX", isPrimary: true },
  { name: "Plano, TX", isPrimary: true },
  { name: "Irving, TX" },
  { name: "Garland, TX" },
  { name: "Grand Prairie, TX" },
  { name: "Frisco, TX" },
  { name: "McKinney, TX" },
  { name: "Carrollton, TX" },
  { name: "DeSoto, TX" },
  { name: "Cedar Hill, TX" },
  { name: "Duncanville, TX" },
  { name: "Lancaster, TX" },
  { name: "Red Oak, TX" },
  { name: "Ennis, TX" },
  { name: "Watauga, TX" },
  { name: "Waxahachie, TX" },
];

export function ServiceArea() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section
      id="service-area"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
      className="relative py-[60px] bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-slate-200/70 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-20 left-1/4 w-[480px] h-[480px] bg-[#0000b9]/[0.03] rounded-full blur-[130px] -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-sky-400/[0.035] rounded-full blur-[130px] -z-10" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Heading, Content & Chips (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#0000b9]/20 text-[#0000b9] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 shadow-2xs select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000b9] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000b9]" />
              </span>
              <span>40-Mile DFW Metropolitan Coverage</span>
            </div>

            {/* Headline */}
            <h2
              className="text-neutral-900 leading-tight tracking-tight text-[25px] xs:text-[29px] sm:text-[35px] -mt-[5px] mb-[5px] font-extrabold"
            >
              Proudly Serving{" "}
              <span className="bg-gradient-to-r from-[#0000b9] via-[#0d1fd6] to-[#2563eb] bg-clip-text text-transparent">
                Dallas, Fort Worth
              </span>{" "}
              &amp; Surrounding Communities
            </h2>

            {/* Narrative Subtitle */}
            <p
              style={{ marginBottom: "10px" }}
              className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mb-[10px]"
            >
              From historic neighborhoods to modern suburban developments, our mobile repair vans and certified crews provide turnkey general contracting, remodeling, painting, roofing, and 24/7 rapid handyman services across North Texas.
            </p>

            {/* Area Chips Cloud */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {areasData.map((a) => {
                const isActive = hoveredArea === a.name;
                return (
                  <button
                    key={a.name}
                    type="button"
                    onMouseEnter={() => setHoveredArea(a.name)}
                    onMouseLeave={() => setHoveredArea(null)}
                    className={`group inline-flex items-center gap-1.5 text-xs font-bold rounded-xl py-2 px-3 transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? "bg-[#0000b9] border-[#0000b9] text-white scale-[1.03] -translate-y-0.5 shadow-md shadow-[#0000b9]/25"
                        : a.isPrimary
                        ? "text-slate-900 bg-blue-50/60 border-blue-200/80 hover:bg-[#0000b9] hover:border-[#0000b9] hover:text-white"
                        : "text-slate-700 bg-white border-slate-200/80 hover:bg-slate-50 hover:border-[#0000b9]/30 hover:text-[#0000b9] shadow-2xs"
                    }`}
                  >
                    <MapPin
                      className={`h-3.5 w-3.5 shrink-0 transition-colors ${
                        isActive
                          ? "text-white"
                          : a.isPrimary
                          ? "text-[#0000b9] group-hover:text-white"
                          : "text-slate-400 group-hover:text-[#0000b9]"
                      }`}
                    />
                    <span>{a.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Trust Checklist & Direct Call CTA */}
            <div className="w-full pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Zero travel surcharges within our 40-mile service zone</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <ShieldCheck className="h-4 w-4 text-[#0000b9] shrink-0" />
                  <span>Fully licensed, bonded &amp; insured across the State of Texas</span>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-[#0000b9] text-white font-bold text-xs px-5 py-3 shadow-sm hover:shadow-md transition-all duration-200 shrink-0 cursor-pointer"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call (214) 814-1444</span>
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Showcase Frame (5 cols) */}
          <div className="lg:col-span-5 relative w-full">
            {/* Ambient Multi-Layer Radial Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0000b9]/20 via-sky-400/15 to-transparent rounded-[32px] blur-2xl pointer-events-none -z-10" />

            {/* Outer Bezel Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative p-2 sm:p-2.5 bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-[28px] shadow-[0_20px_50px_rgba(9,14,36,0.12)] overflow-hidden"
            >
              {/* Inner Map Container */}
              <div className="relative h-[280px] xs:h-[340px] sm:h-[420px] lg:h-[490px] w-full rounded-[20px] overflow-hidden bg-slate-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429158.3377747833!2d-97.16853609802061!3d32.776664200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9915993b44f7%3A0xc48742111d4d3d20!2sDallas-Fort%20Worth%20Metropolitan%20Area%2C%20TX!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Handyman At Home DFW Service Area Map"
                />

                {/* Top Badge: Live Fleet Status */}
                <div className="absolute top-3 right-3 z-10 bg-slate-950/85 backdrop-blur-md border border-white/20 text-white rounded-full px-3 py-1 flex items-center gap-2 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300">
                    Crews On Call 24/7
                  </span>
                </div>

                {/* Bottom Overlay Badge: Radius & Metro info */}
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#0000b9] to-[#0d1fd6] text-white flex items-center justify-center font-black text-xs shadow-sm shrink-0">
                      DFW
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-xs font-extrabold text-slate-900 leading-tight">
                        40-Mile Service Radius
                      </p>
                      <p className="text-[10.5px] text-slate-500 font-medium truncate">
                        Dallas • Fort Worth • All Surrounding Cities
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0000b9] hover:text-[#000099] shrink-0 cursor-pointer"
                  >
                    <span>Check ZIP</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
