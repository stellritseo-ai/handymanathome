import craftsmanImg from "@/assets/about-craftsman.jpg";
import paintingImg from "@/assets/svc-painting.png";
import roofImg from "@/assets/svc-roof.png";
import landscapingImg from "@/assets/svc-landscaping.png";
import residentialImg from "@/assets/svc-residential.png";
import commercialImg from "@/assets/svc-commercial.png";

// Dynamic gallery image imports
const galleryModules = import.meta.glob<{ default: string }>(
  "@/assets/gallery/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true }
);

export const galleryImagesList: string[] = Object.values(galleryModules).map(
  (mod) => mod.default
);

// Resilient helper to extract authentic project images matching service context
export function getGalleryAsset(searchPattern: string): string {
  const normalized = searchPattern.toLowerCase();
  const entry = Object.entries(galleryModules).find(([filePath]) =>
    filePath.toLowerCase().includes(normalized)
  );
  return entry ? entry[1].default : "";
}

export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetailConfig {
  id: string;
  slug: string;
  serviceName: string;
  shortDesc: string;
  h1Title: string;
  h2Subtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  heroImage: string;
  galleryImages: string[];
  leadParagraph: string;
  secondaryParagraph: string;
  keyStats: { label: string; value: string }[];
  capabilitiesTitle: string;
  capabilities: ServiceFeature[];
  process: ServiceProcessStep[];
  whyChooseUs: ServiceFeature[];
  faqs: ServiceFAQ[];
  galleryIndices?: number[];
  colorScheme: {
    accent: string;
    badgeBg: string;
    border: string;
  };
}

export const servicesData: Record<string, ServiceDetailConfig> = {
  "kitchen-bathroom-remodel": {
    id: "kitchen-bathroom-remodel",
    slug: "/services/kitchen-bathroom-remodel",
    serviceName: "Kitchen & Bathroom Remodel",
    shortDesc: "Custom cabinetry, tilework, vanities & luxury remodels",
    h1Title: "Luxury Kitchen & Bathroom Remodeling in Dallas-Fort Worth",
    h2Subtitle: "Turnkey Transformations Designed for Everyday Living and Lasting Value",
    metaTitle: "Kitchen & Bathroom Remodeling Dallas TX | Handyman At Home",
    metaDescription: "Premier kitchen and bath remodeling across Dallas-Fort Worth. Custom cabinetry, quartz countertops, frameless glass showers, and full renovations. Call (214) 814-1444.",
    heroBadge: "Turnkey Interior Remodeling",
    leadParagraph:
      "At Handyman At Home, we understand that kitchens and bathrooms are the heart and sanctuary of your home. For over two decades, our master remodeling specialists have transformed outdated, cramped spaces into stunning, highly functional living environments tailored to each homeowner's unique taste and lifestyle.",
    secondaryParagraph:
      "From complete layout reconfigurations and custom cabinetry to luxury walk-in tile showers and quartz countertops, we manage every facet of your remodel under one roof—ensuring on-time delivery, transparent pricing, and master craftsmanship.",
    keyStats: [
      { label: "DFW Experience", value: "24+ Years" },
      { label: "Client Satisfaction", value: "99.9%" },
      { label: "Licensing", value: "Texas Insured" },
      { label: "Estimate", value: "100% Free" },
    ],
    capabilitiesTitle: "Comprehensive Kitchen & Bath Remodeling Capabilities",
    capabilities: [
      {
        title: "Custom Cabinetry & Island Design",
        desc: "Handcrafted soft-close cabinets, bespoke kitchen islands, pantry storage solutions, and designer hardware to maximize storage and visual elegance.",
      },
      {
        title: "Quartz, Granite & Marble Countertops",
        desc: "Precision fabrication and seamless installation of stain-resistant quartz, natural granite, and elegant marble with custom edge profiles.",
      },
      {
        title: "Custom Walk-In Showers & Tilework",
        desc: "Spa-grade floor-to-ceiling porcelain and ceramic tile, frameless glass enclosures, linear drains, built-in shampoo niches, and bench seating.",
      },
      {
        title: "Luxury Vanities & Double Sinks",
        desc: "Modern floating vanities, dual-sink master bath setups, undermount sinks, and LED anti-fog smart mirrors installed with clean precision.",
      },
      {
        title: "Plumbing & Electrical Upgrades",
        desc: "Licensed plumbing relocation, designer faucet fixtures, recessed LED pot lighting, under-cabinet lighting, and dedicated appliance circuits.",
      },
      {
        title: "Waterproof Flooring & Backsplashes",
        desc: "Durable luxury vinyl plank (LVP), large-format porcelain floor tiles, and intricate mosaic backsplashes that resist moisture and high traffic.",
      },
    ],
    process: [
      {
        step: "01",
        title: "In-Home Consultation & Measurement",
        desc: "We visit your property, listen to your vision, inspect existing layouts, and take precise laser measurements.",
      },
      {
        step: "02",
        title: "Material Selection & Written Estimate",
        desc: "We guide you through cabinetry, stone, tile, and fixture selections, presenting a clear itemized quote with no surprises.",
      },
      {
        step: "03",
        title: "Clean, Professional Demolition & Build",
        desc: "Our certified crew seals off living zones with dust protection, carries out careful demolition, and executes master trades.",
      },
      {
        step: "04",
        title: "Final Walkthrough & Satisfaction Guarantee",
        desc: "We conduct a rigorous quality audit with you, inspecting every grout line and finish to guarantee total satisfaction.",
      },
    ],
    whyChooseUs: [
      {
        title: "Turnkey Project Management",
        desc: "One dedicated project manager oversees every trade—drywall, tile, plumbing, and electrical—eliminating contractor juggling.",
      },
      {
        title: "Dust-Control & Clean Living Protection",
        desc: "We protect your hardwood floors and use negative air filtration to keep your home clean throughout construction.",
      },
      {
        title: "Fixed Upfront Pricing",
        desc: "No hidden surcharges. Our detailed written estimate clearly specifies labor and material costs before work begins.",
      },
      {
        title: "24-Year Proven Track Record",
        desc: "Hundreds of verified 5-star remodels completed for homeowners and property managers across the DFW metroplex.",
      },
    ],
    faqs: [
      {
        q: "How long does a typical kitchen or bathroom remodel take?",
        a: "A standard bathroom remodel typically takes 2 to 3 weeks, while a full kitchen remodel usually ranges from 3 to 5 weeks depending on custom cabinetry lead times and layout changes.",
      },
      {
        q: "Can I remain living in my home during the remodel?",
        a: "Yes. For bathroom remodels, as long as you have another operational bathroom, you can comfortably stay. For kitchen remodels, we establish a clean temporary prep area so your family experiences minimal disruption.",
      },
      {
        q: "Do you handle all necessary city building permits?",
        a: "Absolutely. As a fully licensed and insured Texas general contractor, Handyman At Home pulls all required municipal permits across Dallas, Tarrant, Collin, Denton, and Ellis counties.",
      },
      {
        q: "Do you provide a warranty on remodeling workmanship?",
        a: "Yes! All Handyman At Home remodeling projects are backed by our comprehensive craftsmanship guarantee in addition to all manufacturer warranties on installed materials.",
      },
      {
        q: "Can I choose my own fixtures, tiles, and appliances?",
        a: "Yes. You have total flexibility to supply your own materials or leverage our trusted trade partnerships with major North Texas suppliers for wholesale pricing.",
      },
    ],
    heroImage: getGalleryAsset("5.07.11 pm (3)"),
    galleryImages: [
      getGalleryAsset("5.04.53 pm (2)"),
      getGalleryAsset("5.07.11 pm.jpeg"),
      getGalleryAsset("5.04.53 pm (3)"),
      getGalleryAsset("5.10.57 pm (3)"),
      getGalleryAsset("5.04.53 pm (4)"),
      getGalleryAsset("5.10.57 pm (1)"),
      getGalleryAsset("o (5).jpg"),
      getGalleryAsset("o (1).jpg"),
    ],
    colorScheme: {
      accent: "#0000b9",
      badgeBg: "bg-blue-500/10 text-[#0000b9]",
      border: "border-blue-200",
    },
  },

  "painting": {
    id: "painting",
    slug: "/services/painting",
    serviceName: "Interior & Exterior Painting",
    shortDesc: "Flawless wall finishes, drywall repair, stain & trim",
    h1Title: "Professional Interior & Exterior Painting in Dallas-Fort Worth",
    h2Subtitle: "Flawless Finishes, Meticulous Surface Preparation, and Enduring Protection",
    metaTitle: "Interior & Exterior Painting Dallas TX | Handyman At Home",
    metaDescription: "Top-rated residential and commercial painting across Dallas-Fort Worth. Drywall repair, cabinet spraying, exterior weatherproofing, and trim work. Call (214) 814-1444.",
    heroBadge: "Precision Surface Coating",
    leadParagraph:
      "A fresh coat of premium paint is the most transformative, cost-effective way to revitalize your residential property or commercial storefront. At Handyman At Home, we deliver showroom-grade wall finishes that withstand Texas heat, intense UV rays, and daily family life.",
    secondaryParagraph:
      "We believe that 80% of an exceptional paint job lies in meticulous preparation. Our crews wash, scrape, sand, patch, caulk, and prime every surface before applying top-tier Sherwin-Williams and Benjamin Moore coatings with razor-sharp cut lines.",
    keyStats: [
      { label: "Surface Prep", value: "Multi-Stage" },
      { label: "Paint Quality", value: "Premium Grade" },
      { label: "Cleanliness", value: "100% Protected" },
      { label: "Warranty", value: "Full Workmanship" },
    ],
    capabilitiesTitle: "Full-Spectrum Residential & Commercial Painting Services",
    capabilities: [
      {
        title: "Interior Wall & Ceiling Painting",
        desc: "Streak-free application in ultra-durable matte, eggshell, satin, or semi-gloss finishes with crisp transitions along crown molding and baseboards.",
      },
      {
        title: "Exterior Siding & Stucco Coating",
        desc: "Weather-resistant exterior masonry, vinyl, brick, and Hardie-board painting engineered to protect your structure against North Texas sun and storms.",
      },
      {
        title: "Cabinet Refinishing & Factory Enamel",
        desc: "Transform dated oak or builder-grade cabinets with smooth-as-glass spray applied industrial lacquer enamels that resist chips and grease.",
      },
      {
        title: "Drywall Repair, Patching & Texturing",
        desc: "Expert repair of holes, water leaks, settling cracks, and seamless orange peel, knockdown, or smooth Level 5 texture matching.",
      },
      {
        title: "Trim, Doors, Baseboards & Wainscoting",
        desc: "Precision brush and spray finishing for interior doors, window casings, shiplap, board-and-batten, and high-impact architectural trim.",
      },
      {
        title: "Deck, Fence & Pergola Staining",
        desc: "Deep-penetrating oil and acrylic stains that seal exterior cedar and pressure-treated pine fences against rot, graying, and water damage.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Color Consultation & Scope Review",
        desc: "We assist with color matching, sheen selection, and provide detailed square footage pricing.",
      },
      {
        step: "02",
        title: "Extensive Masking & Surface Repair",
        desc: "Floors, furniture, and landscaping are covered with drop cloths. Cracks are filled, sanded, and primed.",
      },
      {
        step: "03",
        title: "Precision Primer & Multi-Coat Application",
        desc: "We apply high-adhesion primer followed by two full coats of premium paint for uniform depth and durability.",
      },
      {
        step: "04",
        title: "Detailed Inspection & Spotless Cleanup",
        desc: "We conduct tape removal, vacuum work zones, label leftover paint for your touch-ups, and review the final result.",
      },
    ],
    whyChooseUs: [
      {
        title: "Zero Mess Guarantee",
        desc: "We protect all furnishings and leave your home as clean as or cleaner than we found it.",
      },
      {
        title: "Premium Sherwin-Williams Coatings",
        desc: "We never dilute paints or use contractor-grade clearance batches. Only high-solids, washable paints.",
      },
      {
        title: "Master Drywall Texturists",
        desc: "We don't just paint over damaged walls; we fix underlying blemishes for a truly flawless finish.",
      },
      {
        title: "Fast Turnaround Without Cutting Corners",
        desc: "Equipped with professional crews to complete whole-home projects efficiently and on schedule.",
      },
    ],
    faqs: [
      {
        q: "What brand and grade of paint do you use?",
        a: "We primarily utilize premium coatings from Sherwin-Williams (SuperPaint, Duration, Emerald) and Benjamin Moore (Regal Select), customized to your preferred finish and washability requirements.",
      },
      {
        q: "Do you repair drywall cracks and nail pops before painting?",
        a: "Yes! Comprehensive surface preparation—including drywall patching, nail pop securing, seam taping, and texture matching—is included standard with every painting project.",
      },
      {
        q: "How many coats of paint are included?",
        a: "Every project includes two full, uniform coats over a properly prepared and spot-primed surface to guarantee rich color saturation and manufacturer warranty coverage.",
      },
      {
        q: "How do you protect my furniture and floors?",
        a: "All furniture is centered and covered with clean painter's plastic. Hardwood and tile floors are covered with heavy-duty drop cloths and rosin paper taped securely at the edges.",
      },
    ],
    heroImage: paintingImg,
    galleryImages: [
      getGalleryAsset("5.04.52 pm (1)"),
      getGalleryAsset("5.10.57 pm (2)"),
      getGalleryAsset("5.04.52 pm (2)"),
      getGalleryAsset("5.04.52 pm (3)"),
      getGalleryAsset("5.04.52 pm (5)"),
      getGalleryAsset("5.04.52 pm (6)"),
      craftsmanImg,
      paintingImg,
    ],
    colorScheme: {
      accent: "#d97706",
      badgeBg: "bg-amber-500/10 text-amber-600",
      border: "border-amber-200",
    },
  },

  "roofing": {
    id: "roofing",
    slug: "/services/roofing",
    serviceName: "Roofing Repairs & Installation",
    shortDesc: "Leak repairs, shingle replacement & storm damage",
    h1Title: "Expert Roofing Repairs & Roof Installation in Dallas-Fort Worth",
    h2Subtitle: "Protecting Your Home and Business from North Texas Storms with Certified Quality",
    metaTitle: "Roofing Repairs & Installation Dallas TX | Handyman At Home",
    metaDescription: "Trusted DFW roofing contractors. Emergency leak repair, storm damage restoration, shingle replacement, and full re-roofing. Call (214) 814-1444 for a free inspection.",
    heroBadge: "Storm-Tested Roofing Protection",
    leadParagraph:
      "Your roof is your property's first and most critical line of defense against severe North Texas weather—from punishing hail and high-speed windstorms to torrential rain. At Handyman At Home, we provide prompt, certified roofing services that safeguard your family and structural investment.",
    secondaryParagraph:
      "Whether you are dealing with an active ceiling leak, missing asphalt shingles, or need a complete insurance restoration after a hailstorm, our certified roofing crews deliver honest assessments, insurance claim support, and manufacturer-certified installations.",
    keyStats: [
      { label: "Emergency Response", value: "24/7 Available" },
      { label: "Inspection", value: "100% Free" },
      { label: "Insurance Claims", value: "Expert Assistance" },
      { label: "Shingle Rating", value: "Class 4 Impact" },
    ],
    capabilitiesTitle: "Comprehensive DFW Roofing Solutions",
    capabilities: [
      {
        title: "Emergency Roof Leak Detection & Repair",
        desc: "Rapid diagnostic dispatch to locate flashing failures, pipe boot tears, chimney leaks, and valley damage before interior drywall is ruined.",
      },
      {
        title: "Full Shingle Roof Replacement",
        desc: "Complete tear-off, synthetic underlayment installation, ice & water shield barriers, and top-rated architectural shingle installation.",
      },
      {
        title: "Hail & Storm Damage Restoration",
        desc: "Thorough multi-point roof inspection documenting hail bruises, wind-lifted shingles, and full insurance adjuster documentation support.",
      },
      {
        title: "Flashing, Drip Edge & Valley Sealing",
        desc: "Custom metal flashing fabrication around brick chimneys, dormers, headwalls, and valleys to prevent recurring water intrusion.",
      },
      {
        title: "Attic Ventilation & Ridge Vents",
        desc: "Installation of continuous ridge vents, solar attic fans, and soffit baffles to lower summer cooling costs and extend shingle life.",
      },
      {
        title: "Fascia, Soffit & Gutter Repair",
        desc: "Restoration of rotted wood eaves, vented soffits, and seamless gutter realignment to channel water safely away from foundations.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Free 21-Point Roof Inspection",
        desc: "We inspect shingles, flashing, decking, gutters, and attic structures, documenting all findings with clear high-resolution photos.",
      },
      {
        step: "02",
        title: "Detailed Report & Transparent Quote",
        desc: "We present repair vs. replacement options, material grades, and assist with insurance documentation if storm damage is found.",
      },
      {
        step: "03",
        title: "Efficient Installation with Ground Protection",
        desc: "Our crews protect landscaping with tarps, strip old materials cleanly, install waterproofing layers, and nail to manufacturer specs.",
      },
      {
        step: "04",
        title: "Magnetic Nail Sweep & Final Sign-off",
        desc: "We perform multiple magnetic sweeps around your driveway and yard to remove every nail, ensuring a spotless property.",
      },
    ],
    whyChooseUs: [
      {
        title: "Class 4 Impact-Resistant Shingles",
        desc: "We offer hail-resistant roofing options that can significantly reduce your Texas homeowner insurance premiums.",
      },
      {
        title: "24/7 Rapid Emergency Tarping",
        desc: "Immediate mobilization to dry in damaged roofs during active storm seasons and prevent catastrophic interior flooding.",
      },
      {
        title: "Zero Cut Corners on Underlayment",
        desc: "We use heavy-duty synthetic underlayment and reinforced valley flashing—never cheap 15lb felt paper.",
      },
      {
        title: "Honest Upfront Assessments",
        desc: "If a minor $300 repair will fix your leak, we will never push for an unnecessary $15,000 replacement.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my roof needs a repair or a full replacement?",
        a: "If your roof is under 15 years old and damage is isolated to a specific flashing area or few shingles, a repair is usually sufficient. If your roof is over 20 years old, has widespread granule loss, or widespread hail strikes, replacement is more cost-effective.",
      },
      {
        q: "Do you help homeowners with insurance claims for storm damage?",
        a: "Yes! We meet directly with your insurance adjuster on-site, provide itemized photographic evidence, and ensure all damaged components (including gutters, screens, and vents) are properly covered in your claim.",
      },
      {
        q: "How long does a roof replacement take on an average DFW home?",
        a: "Most residential roof replacements (up to 3,500 sq ft) are completely torn off, re-decked as needed, shingled, and cleaned up in just 1 to 2 days.",
      },
    ],
    heroImage: roofImg,
    galleryImages: [
      roofImg,
      getGalleryAsset("5.04.52 pm (2)"),
      getGalleryAsset("5.04.52 pm (1)"),
      getGalleryAsset("5.04.52 pm (3)"),
      getGalleryAsset("5.04.52 pm.jpeg"),
      getGalleryAsset("5.04.53 pm (1)"),
      getGalleryAsset("5.04.52 pm (6)"),
      residentialImg,
    ],
    colorScheme: {
      accent: "#059669",
      badgeBg: "bg-emerald-500/10 text-emerald-600",
      border: "border-emerald-200",
    },
  },

  "plumbing": {
    id: "plumbing",
    slug: "/services/plumbing",
    serviceName: "Plumbing Services",
    shortDesc: "Pipe fixes, leak detection, fixture swaps & heaters",
    h1Title: "Licensed Plumbing Repairs & Installations in Dallas-Fort Worth",
    h2Subtitle: "Fast, Dependable Solutions for Residential and Commercial Plumbing Systems",
    metaTitle: "Plumbing Services Dallas TX | Handyman At Home",
    metaDescription: "Professional plumbing services across Dallas-Fort Worth. Leak detection, water heater repair, toilet & faucet replacement, pipe repairs, and 24/7 emergency service. Call (214) 814-1444.",
    heroBadge: "24/7 Emergency Plumbing Ready",
    leadParagraph:
      "Plumbing failures demand immediate, competent attention before minor drips trigger costly structural rot and mold growth. Handyman At Home provides dependable, licensed plumbing services across the Dallas-Fort Worth metroplex.",
    secondaryParagraph:
      "From running toilets, dripping faucets, and clogged garbage disposals to tankless water heater installations and whole-home PEX re-piping, our plumbing specialists deliver clean, code-compliant solutions with upfront pricing.",
    keyStats: [
      { label: "Dispatch Speed", value: "Same-Day / 24/7" },
      { label: "Warranty", value: "100% Guaranteed" },
      { label: "Pricing", value: "Upfront & Fixed" },
      { label: "Code Compliance", value: "Texas Certified" },
    ],
    capabilitiesTitle: "Comprehensive Plumbing Repair & Installation Services",
    capabilities: [
      {
        title: "Fixture Upgrades & Faucet Replacement",
        desc: "Kitchen sink faucets, pull-down sprayers, luxury shower valves, freestanding tub fillers, and modern vessel sink installations.",
      },
      {
        title: "Water Heater Repair & Installation",
        desc: "Fast diagnostics, element replacement, and complete installation of energy-efficient standard tank and on-demand tankless water heaters.",
      },
      {
        title: "Toilet Repair, Re-Sealing & Replacement",
        desc: "Fixing rocking toilets, replacing worn wax rings, rebuilding flush valves, and installing high-efficiency water-saving commodes.",
      },
      {
        title: "Pipe Leak Detection & PEX Re-Piping",
        desc: "Finding hidden drywall leaks, repairing pinhole copper leaks, and replacing deteriorated galvanized piping with modern flexible PEX.",
      },
      {
        title: "Garbage Disposal Repair & Swaps",
        desc: "Unjamming stuck disposal units, repairing leaky gaskets, and installing high-torque commercial-grade continuous feed disposals.",
      },
      {
        title: "Drain Unclogging & Line Clears",
        desc: "Clearing stubborn bathroom sink, tub, shower, and kitchen drain blockages to restore free-flowing drainage throughout your home.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Rapid Diagnostic Assessment",
        desc: "We test pressures, isolate the leak or mechanical failure, and pinpoint the exact source of trouble.",
      },
      {
        step: "02",
        title: "Clear, Upfront Price Quote",
        desc: "You receive a transparent price before we touch any tool—no surprise hourly billing or hidden dispatch surcharges.",
      },
      {
        step: "03",
        title: "Code-Compliant Repair Execution",
        desc: "We use top-grade brass fittings, high-durability valves, and commercial-grade parts for long-lasting performance.",
      },
      {
        step: "04",
        title: "Pressure Testing & Clean Jobsite",
        desc: "We verify tight seals under working pressure, sanitize work zones, and walk you through maintenance tips.",
      },
    ],
    whyChooseUs: [
      {
        title: "24/7 Rapid Emergency Dispatch",
        desc: "Water emergencies don't wait for business hours. Our mobile vans are on standby 24 hours a day, 7 days a week.",
      },
      {
        title: "Clean Worksite Etiquette",
        desc: "Our technicians wear shoe covers, lay protective mats, and leave your bathroom or kitchen spotless.",
      },
      {
        title: "Fixed Upfront Quotes",
        desc: "You authorize the exact price before work begins, giving you total control and financial peace of mind.",
      },
      {
        title: "Quality Parts & Connections",
        desc: "We never use cheap plastic push-fittings for permanent installs. We use heavy brass, soldered copper, and crimped PEX.",
      },
    ],
    faqs: [
      {
        q: "What should I do first if I have a sudden major water pipe leak?",
        a: "Immediately shut off your home's main water supply valve (often located in your garage, utility closet, or near the street curb meter) to halt water flow, then call our 24/7 emergency line at (214) 814-1444.",
      },
      {
        q: "How do I know if my water heater needs to be replaced?",
        a: "If your water heater is over 10-12 years old, produces rusty or discolored hot water, makes popping/rumbling noises, or has pooling water around its base, replacement is recommended before a catastrophic tank rupture.",
      },
      {
        q: "Do you offer tankless water heater conversions?",
        a: "Yes! Tankless water heaters provide endless hot water, consume up to 34% less energy, and save significant floor space in your garage or utility room.",
      },
    ],
    heroImage: getGalleryAsset("10.30.23"),
    galleryImages: [
      getGalleryAsset("5.13.29 pm (1)"),
      getGalleryAsset("5.13.29 pm.jpeg"),
      getGalleryAsset("10.29.05"),
      getGalleryAsset("10.30.23"),
      getGalleryAsset("5.07.11 pm.jpeg"),
      getGalleryAsset("5.04.53 pm (2)"),
      getGalleryAsset("5.10.57 pm (1)"),
      getGalleryAsset("10.29.44"),
    ],
    colorScheme: {
      accent: "#0284c7",
      badgeBg: "bg-sky-500/10 text-sky-600",
      border: "border-sky-200",
    },
  },

  "landscaping": {
    id: "landscaping",
    slug: "/services/landscaping",
    serviceName: "Landscaping & Outdoor Living",
    shortDesc: "Fencing, custom decks, patio covers & grounds care",
    h1Title: "Custom Landscaping & Outdoor Living Spaces in Dallas-Fort Worth",
    h2Subtitle: "Extend Your Home's Living Space with Custom Decks, Cedar Fencing, and Outdoor Hardscapes",
    metaTitle: "Landscaping & Outdoor Living Dallas TX | Handyman At Home",
    metaDescription: "Premier outdoor living and landscaping in Dallas-Fort Worth. Custom cedar decks, privacy fencing, stone patios, pergolas, and outdoor kitchens. Call (214) 814-1444 for a free estimate.",
    heroBadge: "Outdoor Living & Hardscapes",
    leadParagraph:
      "A thoughtfully designed outdoor living space expands your home's usable footprint, enhances your lifestyle, and dramatically increases curb appeal. Handyman At Home designs and constructs premier outdoor living environments across North Texas.",
    secondaryParagraph:
      "From custom composite and cedar decks, shade-providing pergolas, and secure privacy fencing to stone patios, retaining walls, and custom exterior carpentry, our outdoor specialists create spaces where family and friends love to gather.",
    keyStats: [
      { label: "Deck Lifespan", value: "25+ Years Composite" },
      { label: "Fence Quality", value: "Western Red Cedar" },
      { label: "Consultation", value: "100% Free" },
      { label: "Custom Design", value: "Tailored to Yard" },
    ],
    capabilitiesTitle: "Outdoor Living & Exterior Carpentry Services",
    capabilities: [
      {
        title: "Custom Cedar & Composite Decks",
        desc: "Design and construction of ground-level and multi-tier decks using Trex composite, capped polymer, or natural Western Red Cedar.",
      },
      {
        title: "Privacy Fencing & Automatic Gates",
        desc: "Board-on-board cedar privacy fencing with top caps, trim, steel posts set deep in concrete, and secure rolling driveway gates.",
      },
      {
        title: "Covered Patios & Pergolas",
        desc: "Custom timber frame pergolas, insulated patio covers, and screened porches that provide welcome shade from the Texas sun.",
      },
      {
        title: "Flagstone Patios & Walkways",
        desc: "Natural Oklahoma flagstone, paver patios, fire pit seating areas, and decorative garden pathways built on compacted road base.",
      },
      {
        title: "Retaining Walls & Soil Drainage",
        desc: "Engineered stone and block retaining walls, French drains, and downspout extensions that prevent yard erosion and foundation water pooling.",
      },
      {
        title: "Outdoor Kitchens & BBQ Islands",
        desc: "Built-in stainless steel grill stations, stone bar counters, outdoor refrigeration, and sink plumbing for premier backyard entertaining.",
      },
    ],
    process: [
      {
        step: "01",
        title: "On-Site Yard Assessment",
        desc: "We survey property boundaries, grades, sun exposure, and discuss your outdoor living goals.",
      },
      {
        step: "02",
        title: "Custom Design & Quote",
        desc: "We provide detailed layouts, material options (composite vs. cedar), and transparent itemized pricing.",
      },
      {
        step: "03",
        title: "Structural Excavation & Build",
        desc: "We dig post footings below frost lines, pour solid concrete foundations, and frame with rot-resistant hardware.",
      },
      {
        step: "04",
        title: "Finishing, Staining & Walkthrough",
        desc: "We sand, seal, and clean the entire site, ensuring your new outdoor living space is move-in ready.",
      },
    ],
    whyChooseUs: [
      {
        title: "Heavy-Duty Texas Foundations",
        desc: "We anchor deck footings and fence posts with thick concrete footings engineered to resist North Texas clay soil movement.",
      },
      {
        title: "Western Red Cedar Standards",
        desc: "We source premium cedar that naturally resists insects, moisture, and warping under harsh summer heat.",
      },
      {
        title: "Trex & Composite Certified",
        desc: "Low-maintenance composite decking that never needs splinter sanding, staining, or painting.",
      },
      {
        title: "HOA Compliance Experience",
        desc: "We assist with detailed drawings and height specifications to ensure fast approval from your community HOA.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between wood and composite decking?",
        a: "Natural cedar decking offers authentic wood warmth and lower initial cost, but requires staining every 2-3 years. Composite decking (like Trex) costs more upfront but lasts 25-30+ years with zero staining, no splinters, and superior fade resistance.",
      },
      {
        q: "Do you install steel posts for wood privacy fences?",
        a: "Yes! We strongly recommend galvanized steel posts set in concrete for Texas privacy fences because wood posts rot at ground level within 7-10 years, whereas steel posts remain plumb and strong for decades.",
      },
      {
        q: "Do outdoor structures require city building permits in DFW?",
        a: "Most decks over 30 inches above grade, patio covers attached to the home, and pergolas require municipal permits. Handyman At Home handles the entire permitting and inspection process for you.",
      },
    ],
    heroImage: landscapingImg,
    galleryImages: [
      getGalleryAsset("5.04.52 pm (4)"),
      getGalleryAsset("5.04.52 pm.jpeg"),
      getGalleryAsset("5.07.11 pm (2)"),
      getGalleryAsset("5.04.53 pm (1)"),
      getGalleryAsset("5.04.53 pm.jpeg"),
      getGalleryAsset("10.27.05"),
      getGalleryAsset("10.27.16"),
      getGalleryAsset("10.27.28"),
    ],
    colorScheme: {
      accent: "#15803d",
      badgeBg: "bg-emerald-500/10 text-emerald-700",
      border: "border-emerald-200",
    },
  },

  "handyman-carpentry": {
    id: "handyman-carpentry",
    slug: "/services/handyman-carpentry",
    serviceName: "General Handyman & Carpentry",
    shortDesc: "Doors, windows, drywall patches & hardware installs",
    h1Title: "General Handyman & Precision Carpentry in Dallas-Fort Worth",
    h2Subtitle: "No Job Is Too Big or Too Small: Expert Maintenance, Carpentry, and Home Repairs",
    metaTitle: "Handyman & Carpentry Services Dallas TX | Handyman At Home",
    metaDescription: "Master general contracting, carpentry, drywall repair, door & window installations, and home maintenance across Dallas-Fort Worth. Over 24 years of experience. Call (214) 814-1444.",
    heroBadge: "Full-Service General Contracting",
    leadParagraph:
      "From annoying sticky doors and damaged drywall to custom architectural trim, crown molding, and commercial building repairs, Handyman At Home is your single, reliable partner for comprehensive property care.",
    secondaryParagraph:
      "Since 2001, we have proven that no repair is too small and no renovation is too large. Our mobile repair vans arrive fully equipped with professional tools and seasoned multi-trade craftsmen who get the job done right the first time.",
    keyStats: [
      { label: "DFW Service", value: "Since 2001" },
      { label: "Craftsmanship", value: "Guaranteed" },
      { label: "Job Scope", value: "Any Size" },
      { label: "Contractor Status", value: "Licensed & Insured" },
    ],
    capabilitiesTitle: "General Handyman & Carpentry Capabilities",
    capabilities: [
      {
        title: "Interior & Exterior Door Installation",
        desc: "Replacing sagging entry doors, French doors, sliding patio doors, pocket doors, and barn doors with weather-tight seals and locks.",
      },
      {
        title: "Custom Trim, Crown Molding & Baseboards",
        desc: "Precision mitered crown molding, oversized baseboard installations, chair rails, wainscoting, and decorative accent walls.",
      },
      {
        title: "Drywall Patching, Framing & Texture",
        desc: "Framing interior partition walls, repairing water-damaged ceilings, patching doorknob holes, and matching orange peel or knockdown texture.",
      },
      {
        title: "Window Repair & Replacement",
        desc: "Drafty window replacements, glass pane repairs, rotten window sill restoration, and balance spring mechanism adjustments.",
      },
      {
        title: "Cabinet & Furniture Assembly & Mounting",
        desc: "Secure wall mounting for heavy TVs, mirrors, custom shelving units, floating desks, and prefabricated cabinetry.",
      },
      {
        title: "Commercial Property & Office Repairs",
        desc: "Door closers, ADA grab bar installations, drop ceiling tile replacements, lock replacements, and ongoing facility maintenance.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Send Photos or Book Free Assessment",
        desc: "Describe your punch-list of items, text photos to (214) 814-1444, or schedule an in-person walkthrough.",
      },
      {
        step: "02",
        title: "Transparent Itemized Pricing",
        desc: "We provide an upfront quote that clearly outlines time and materials without vague open-ended estimates.",
      },
      {
        step: "03",
        title: "Precision Execution by Master Craftsmen",
        desc: "Our uniformed technicians arrive promptly, protect your property, and methodically complete every task.",
      },
      {
        step: "04",
        title: "Final Punch-List Sign-off",
        desc: "We review every completed repair with you to ensure total satisfaction before wrapping up.",
      },
    ],
    whyChooseUs: [
      {
        title: "True Multi-Trade Craftsmen",
        desc: "Our technicians have decades of hands-on experience across carpentry, drywall, framing, and hardware.",
      },
      {
        title: "Fully Licensed & Insured Protection",
        desc: "Unlike casual uninsured handymen, we carry full general liability and workers' compensation insurance in Texas.",
      },
      {
        title: "Punctual, Courteous & Respectful",
        desc: "We arrive on time, communicate clearly, protect your property, and treat your home with the utmost care.",
      },
      {
        title: "No Job Too Small or Too Big",
        desc: "Whether you need a single door aligned or a complete commercial office buildout, you get our 100% commitment.",
      },
    ],
    faqs: [
      {
        q: "Can I bundle multiple small repairs into a single service visit?",
        a: "Absolutely! In fact, grouping several punch-list items (such as door adjustments, drywall patches, trim repair, and caulking) into one visit is the most cost-effective way to utilize our craftsmen.",
      },
      {
        q: "Do you supply the materials or should I buy them?",
        a: "We can do either! Our vans carry common fasteners, lumber, and repair materials, or you can purchase specific fixtures, doors, or hardware and we will handle the professional installation.",
      },
      {
        q: "Are your handymen licensed and background-checked?",
        a: "Yes. Handyman At Home is fully licensed and insured in Texas. Every technician on our team is thoroughly vetted, experienced, and committed to high standards of craftsmanship.",
      },
    ],
    heroImage: craftsmanImg,
    galleryImages: [
      getGalleryAsset("o (6).jpg"),
      getGalleryAsset("o (4).jpg"),
      getGalleryAsset("5.10.57 pm (2)"),
      getGalleryAsset("5.04.52 pm (1)"),
      getGalleryAsset("5.04.52 pm (4)"),
      getGalleryAsset("o (3).jpg"),
      getGalleryAsset("10.29.57"),
      commercialImg,
    ],
    colorScheme: {
      accent: "#4338ca",
      badgeBg: "bg-indigo-500/10 text-indigo-600",
      border: "border-indigo-200",
    },
  },
};
