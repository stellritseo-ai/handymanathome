import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Shield, Wrench } from "lucide-react";

const areasData = [
  { name: "Dallas, TX", primary: true },
  { name: "Fort Worth, TX", primary: true },
  { name: "Watauga, TX" },
  { name: "Ennis, TX" },
  { name: "Lancaster, TX" },
  { name: "DeSoto, TX" },
  { name: "Cedar Hill, TX" },
  { name: "Duncanville, TX" },
  { name: "Red Oak, TX" },
  { name: "Arlington, TX" },
  { name: "Grand Prairie, TX" },
  { name: "Irving, TX" },
  { name: "Garland, TX" },
  { name: "Plano, TX" },
];

export function ServiceArea() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section id="service-area" className="relative py-[80px] bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading & Chips (50% width) */}
          <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-[#0000b9]/10 border border-[#0000b9]/25 text-[#0000b9] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5" /> Service Area <Wrench className="w-3.5 h-3.5" />
            </span>
            <h2
              className="text-[#090e24] leading-tight tracking-tight capitalize text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold mb-4"
            >
              Proudly Serving <span className="text-[#0000b9]">Dallas, Fort Worth</span> &amp; Surrounding Areas
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg mb-7">
              We provide professional residential &amp; commercial general contractor and handyman services, kitchen &amp; bathroom remodels, interior &amp; exterior painting, roofing repairs, plumbing services, and outdoor improvements across DFW and the surrounding 40-mile area.
            </p>

            {/* Capsule Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-7">
              {areasData.map((a) => {
                const isActive = hoveredArea === a.name;
                return (
                  <a
                    key={a.name}
                    href="#contact"
                    onMouseEnter={() => setHoveredArea(a.name)}
                    onMouseLeave={() => setHoveredArea(null)}
                    className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider rounded-xl py-2 px-3.5 transition-all duration-300 shadow-sm border ${
                      isActive
                        ? "bg-[#0000b9] border-[#0000b9] text-white scale-[1.03] -translate-y-0.5 shadow-md shadow-[#0000b9]/20"
                        : "text-slate-700 bg-slate-50 border-slate-200/80 hover:bg-[#0000b9]/10 hover:border-[#0000b9]/30 hover:text-[#0000b9]"
                    }`}
                  >
                    <MapPin className={`h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#0000b9]"
                    }`} />
                    <span>{a.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Subtext info */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 select-none">
              <Shield className="h-4 w-4 text-emerald-600" />
              <span>Full Public Liability &amp; Property Damage Insurance Coverage in Texas.</span>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (Centered on DFW) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429158.3377747833!2d-97.16853609802061!3d32.776664200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9915993b44f7%3A0xc48742111d4d3d20!2sDallas-Fort%20Worth%20Metropolitan%20Area%2C%20TX!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Badge overlay on map */}
            <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-lg flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#0000b9] text-white flex items-center justify-center font-bold text-sm">
                DFW
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-slate-900 leading-tight">40-Mile Service Radius</p>
                <p className="text-[10px] text-slate-500 font-medium">Dallas &bull; Fort Worth &bull; Surrounding TX</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
