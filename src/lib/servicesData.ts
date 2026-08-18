import svcPressureWash from "@/assets/svc-pressure-wash.png";
import svcResidential from "@/assets/svc-residential.png";
import svcSiding from "@/assets/svc-siding.png";
import svcRoof from "@/assets/svc-roof.png";
import svcConcrete from "@/assets/svc-concrete.png";
import svcDriveway from "@/assets/svc-driveway.png";
import svcCommercial from "@/assets/svc-commercial.png";
import { ServiceDetailConfig } from "@/components/site/services/ServiceDetailPageTemplate";

export const servicesData: Record<string, ServiceDetailConfig> = {
  "pressure-washing": {
    slug: "/services/pressure-washing",
    serviceName: "Pressure Washing",
    h1Title: "Professional Pressure Washing in Mooresville & Lake Norman, NC",
    metaTitle: "Pressure Washing Mooresville NC | Steam On Wheels Power Washing",
    metaDescription: "Top-rated pressure washing services in Mooresville & Lake Norman, NC. Hot & cold power washing for residential & commercial properties. Call (704) 516-9509.",
    heroBadge: "High-Pressure Restoration",
    tagline: "Commercial-Grade Power Washing & Degreasing",
    heroImage: svcPressureWash,
    description: "Steam On Wheels provides professional high-pressure washing for durable residential flatwork, commercial facilities, industrial warehouses, and masonry across Mooresville and the greater Lake Norman region.",
    secondaryParagraph: "Equipped with variable PSI commercial rigs capable of delivering hot-water washing up to 200°F and 4,000 PSI, we dissolve heavy motor oil, grease stains, industrial soot, and deep-set grime that conventional cold-water washers cannot touch.",
    serviceType: "PressureWashingService",
    keyStats: [
      { label: "Water Pressure", value: "Up to 4,000 PSI" },
      { label: "Water Temp", value: "Up to 200°F Hot Wash" },
      { label: "Experience", value: "15+ Years" },
      { label: "Guarantee", value: "100% Satisfaction" }
    ],
    surfacesCleaned: [
      { title: "Concrete Driveways & Patios", desc: "Deep extraction of motor oil, tire marks, red clay stains, and slippery black algae from all concrete flatwork." },
      { title: "Commercial Dumpster Pads", desc: "High-temperature degreasing and sanitization to eliminate foul odors, bacteria, and rodent attractants." },
      { title: "Brick, Stone & Masonry", desc: "Restores natural masonry coloring without eroding mortar joints or compromising structural integrity." },
      { title: "Parking Lots & Garages", desc: "Extensive square footage oil spot cleaning, gum removal, and surface degreasing for commercial facilities." },
      { title: "Sidewalks & Walkways", desc: "Rotary surface cleaning that delivers streak-free, uniform brightening for homeowner and retail sidewalks." },
      { title: "Loading Docks & Industrial Floors", desc: "Heavy equipment tire mark removal, diesel exhaust cleaning, and safety-compliant surface restoration." }
    ],
    localRelevanceTitle: "Why Mooresville Properties Require Professional Pressure Washing",
    localRelevanceContent: [
      "North Carolina's Piedmont region features a unique combination of high summer humidity, dense pine pollen in the spring, and heavy iron-rich red clay. Over time, moisture promotes the rapid growth of black algae (Gloeocapsa magma), moss, and slippery lichen across exterior concrete and brick surfaces.",
      "In Lake Norman waterfront communities, frequent morning fog and moisture accelerate organic accumulation on hardscapes. Brute force washing can etch concrete or damage mortar joints; our calibrated pressure washing utilizes specialized rotary surface cleaners to ensure an even, non-destructive, showroom-grade finish.",
      "Whether you are maintaining an HOA property in The Point, preparing a home for sale in Cornelius, or managing a commercial storefront in Mooresville, our pressure washing protects your curb appeal and preserves your investment."
    ],
    serviceProcess: [
      { step: "01", title: "Site Inspection & Pressure Calibration", desc: "We evaluate the substrate, measure square footage, and select optimal nozzle angles and PSI settings." },
      { step: "02", title: "Targeted Degreasing Pre-Treatment", desc: "We apply eco-safe surfactants and alkaline degreasers to break down oil, grease, and hydrocarbon bonds." },
      { step: "03", title: "Dual-Nozzle Surface Cleaning", desc: "Using commercial rotary cleaners, we eliminate striping and blast away deep pores of dirt and mold." },
      { step: "04", title: "Comprehensive Neutralizing Rinse", desc: "We flush away all suspended debris and inspect the entire area with the client to verify 100% perfection." }
    ],
    faqs: [
      { q: "What is the difference between pressure washing and power washing?", a: "While pressure washing uses unheated high-pressure water, power washing incorporates heated water (up to 200°F). Steam On Wheels is equipped with hot-water commercial power washing capabilities, which is essential for emulsifying grease, motor oil, and gum from concrete." },
      { q: "Will high-pressure washing damage my concrete?", a: "No, when performed by experienced professionals. We use calibrated surface cleaners that distribute pressure evenly at a consistent height, preventing the 'striping' and surface etching that inexperienced operators cause with wand tips." },
      { q: "How often should concrete and flat surfaces be pressure washed in NC?", a: "Due to North Carolina humidity, pollen, and tree cover, most residential flatwork benefits from annual pressure washing, while high-traffic commercial sidewalks and dumpster pads benefit from quarterly maintenance." },
      { q: "Are your cleaning detergents safe for plants and pets?", a: "Yes. We use biodegradable, eco-friendly detergents and thoroughly pre-wet and post-rinse surrounding turf and landscape beds to ensure complete vegetation safety." }
    ],
    relatedServices: [
      { title: "House Washing", href: "/services/house-washing", desc: "Gentle soft-washing for vinyl siding, Hardie board, and stucco." },
      { title: "Driveway Cleaning", href: "/services/driveway-cleaning", desc: "Specialized oil stain and red clay removal from concrete driveways." },
      { title: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing", desc: "Complete exterior maintenance for businesses and retail centers." }
    ]
  },

  "house-washing": {
    slug: "/services/house-washing",
    serviceName: "House Washing",
    h1Title: "Professional Soft Wash House Washing in Mooresville & Lake Norman, NC",
    metaTitle: "House Washing Mooresville NC | Soft Wash Exterior Siding Cleaning",
    metaDescription: "Gentle soft-wash house washing in Mooresville & Lake Norman NC. Safe for vinyl siding, Hardie board, brick & stucco. Eliminates mold & algae. Call (704) 516-9509.",
    heroBadge: "Low-Pressure Siding Restoration",
    tagline: "Gentle, Non-Destructive Exterior Siding Washing",
    heroImage: svcResidential,
    description: "Steam On Wheels offers premium soft wash house washing designed specifically to eliminate green algae, black mold, pollen, and spider webs from siding without damaging exterior paint or forcing water behind walls.",
    secondaryParagraph: "Unlike high-pressure blasting which can crack vinyl, strip paint, and compromise window seals, our soft wash process utilizes proprietary biodegradable cleansers applied at garden-hose pressure to sanitize surfaces down to the root.",
    serviceType: "HouseWashingService",
    keyStats: [
      { label: "Pressure Level", value: "< 100 PSI (Safe)" },
      { label: "Algae Eradication", value: "100% at Root" },
      { label: "Siding Longevity", value: "Extended Lifespan" },
      { label: "Insurance Coverage", value: "$2M Liability" }
    ],
    surfacesCleaned: [
      { title: "Vinyl Siding", desc: "Eliminates green algae and oxidation without warping or cracking vinyl panels." },
      { title: "Fiber Cement / Hardie Board", desc: "Safe low-pressure wash that protects paint coatings and manufacturer warranties." },
      { title: "Painted & Natural Brick", desc: "Restores mortar brightness and removes efflorescence without surface crumbling." },
      { title: "Stucco & Dryvit (EIFS)", desc: "Gentle chemical cleaning that prevents gouging or water penetration into porous stucco." },
      { title: "Fascia, Soffits & Gutters", desc: "Brightens gutter faces (tiger-stripe removal) and cleans vented soffits safely." },
      { title: "Window Frames & Sills", desc: "Rinses away insect nests, dirt tracks, and pollen residue without seal compromise." }
    ],
    localRelevanceTitle: "Why Lake Norman Homes Develop Rapid Siding Algae",
    localRelevanceContent: [
      "In Mooresville, Cornelius, Denver, and across Lake Norman, shaded north-facing siding walls and heavy humidity create an ideal incubator for Gloeocapsa magma algae, mildew, and airborne spores. In addition, spring brings dense yellow pine pollen that adheres to siding surfaces.",
      "Standard pressure washing merely shears off the surface layer of algae, allowing it to regrow within months. Our soft wash system treats siding with active sanitizing solutions that penetrate microscopic pores and kill the spores completely.",
      "Our house washing complies with all local Homeowners Association (HOA) cleanliness guidelines across communities like The Point, Morrison Plantation, Curtis Pond, and River Run."
    ],
    serviceProcess: [
      { step: "01", title: "Plant & Property Protection", desc: "We tape external electronics, cover sensitive fixtures, and saturate all adjacent plants with freshwater." },
      { step: "02", title: "Low-Pressure Cleanser Application", desc: "We apply our custom surfactant and algaecide blend from bottom to top using low-pressure soft-wash tips." },
      { step: "03", title: "Dwell Time & Organic Breakdown", desc: "Our solution dwells for 10-15 minutes, safely liquefying algae, mold, mildew, pollen, and spider webs." },
      { step: "04", title: "High-Volume Low-Pressure Rinse", desc: "We thoroughly rinse all siding surfaces from top to bottom with clean, demineralized water." }
    ],
    faqs: [
      { q: "Will house washing force water behind my siding?", a: "No. High-pressure washing can blast water behind siding seams, causing hidden mold and insulation damage. Our soft washing uses low pressure equivalent to a garden hose, ensuring water flows gently downward naturally without penetrating laps." },
      { q: "How long does a soft wash house washing last in North Carolina?", a: "Because our soft wash solution eradicates the organic root spores rather than just blowing off surface grime, the clean typically lasts 12 to 24 months—up to 4 times longer than pressure washing alone." },
      { q: "Is soft washing safe for painted wood and delicate stucco?", a: "Yes, 100%. Soft washing was specifically engineered for delicate surfaces including historic wood siding, modern fiber cement, painted brick, and porous stucco." },
      { q: "Do I need to be home during the house washing service?", a: "No. As long as exterior water spigots are functional, windows and doors are closed tightly, and pets are secured inside, you do not need to take time off work." }
    ],
    relatedServices: [
      { title: "Roof Cleaning", href: "/services/roof-cleaning", desc: "Soft-wash shingle cleaning to eliminate dark algae streaks." },
      { title: "Soft Washing", href: "/services/soft-washing", desc: "Learn about the science behind low-pressure sanitization." },
      { title: "Concrete Cleaning", href: "/services/concrete-cleaning", desc: "Brighten your driveways, patios, and sidewalks." }
    ]
  },

  "soft-washing": {
    slug: "/services/soft-washing",
    serviceName: "Soft Washing",
    h1Title: "Professional Soft Washing Services in Mooresville & Lake Norman, NC",
    metaTitle: "Soft Washing Mooresville NC | Gentle Exterior Cleaning Specialists",
    metaDescription: "Low-pressure soft washing in Mooresville & Lake Norman NC. Safe chemical treatment for roofs, siding, stucco & fences. 15+ yrs experience. Call (704) 516-9509.",
    heroBadge: "Modern Low-Pressure Science",
    tagline: "Eco-Safe Cleansers with Zero High-Pressure Damage Risk",
    heroImage: svcSiding,
    description: "Steam On Wheels specializes in advanced soft washing—a low-pressure sanitization method that delivers a deeper, longer-lasting clean on roofs, siding, painted surfaces, and outdoor living spaces across North Carolina.",
    secondaryParagraph: "While high pressure can blast away paint, pit stucco, and loosen shingle granules, soft washing relies on scientifically balanced, biodegradable surfactants that dissolve organic growth at the root before being gently rinsed away.",
    serviceType: "SoftWashingService",
    keyStats: [
      { label: "Working Pressure", value: "40 – 80 PSI" },
      { label: "Clean Longevity", value: "Up to 4X Longer" },
      { label: "Surface Risk", value: "Zero Damage" },
      { label: "Chemical Safety", value: "100% Biodegradable" }
    ],
    surfacesCleaned: [
      { title: "Asphalt Shingle & Metal Roofs", desc: "Safely cleans dark algae stains without dislodging protective ceramic shingle granules." },
      { title: "Vinyl, Cedar & Hardie Siding", desc: "Eliminates mildew and chalky oxidation without forcing water behind panel seams." },
      { title: "Wood & Composite Decks", desc: "Gently sanitizes Trex, TimberTech, and pressure-treated pine without splintering grain." },
      { title: "Stucco, Dryvit & EIFS", desc: "Eliminates deep mold spores from porous textured walls without surface pitting." },
      { title: "Pool Enclosures & Screen Rooms", desc: "Cleans aluminum frames and fragile screen mesh without tearing or bending." },
      { title: "Outdoor Furniture & Awnings", desc: "Sanitizes fabric awnings, patio umbrellas, and vinyl fences safely." }
    ],
    localRelevanceTitle: "The Science of Soft Washing in the Piedmont Climate",
    localRelevanceContent: [
      "The warm, humid climate of Lake Norman and Iredell County accelerates the growth of micro-organisms like Gloeocapsa magma (cyanobacteria), green algae, and Aspergillus niger mold on building exteriors.",
      "High-pressure washing is purely mechanical—it blasts away visible organic growth but leaves microscopic roots intact inside porous siding and roofing materials, causing algae to return quickly.",
      "Soft washing combines gentle water pressure (under 100 PSI) with specialized sodium hypochlorite solutions and surfactants. This sanitizes the substrate completely, neutralizing bacteria and giving homeowners results that last significantly longer."
    ],
    serviceProcess: [
      { step: "01", title: "Botanical Protection & Surface Prep", desc: "We saturate all surrounding flowerbeds and landscaping with fresh water to prevent chemical absorption." },
      { step: "02", title: "Custom Detergent Formulation", desc: "We mix a custom ratio of surfactant and eco-safe algaecide matched specifically to your surface type and contamination level." },
      { step: "03", title: "Even Low-Pressure Application", desc: "Our dedicated soft-wash pumps spray the solution gently across roofs and siding, allowing it to penetrate deep pores." },
      { step: "04", title: "Gentle Flush & Neutralization", desc: "After full chemical action, we rinse the exterior surfaces and apply plant nutrients to ensure healthy vegetation." }
    ],
    faqs: [
      { q: "Is soft washing the same as power washing?", a: "No. Power washing uses high pressure (up to 4,000 PSI) and heat to strip away dirt mechanically. Soft washing uses very low pressure (under 100 PSI) and specialized biodegradable detergents to chemically kill algae, mold, and bacteria at the cellular level." },
      { q: "Will soft washing harm my landscaping, flowers, or grass?", a: "No. We implement a rigorous plant protection protocol: pre-wetting all foliage, applying neutralizers if necessary, and continuously rinsing landscaping throughout the service." },
      { q: "Why shouldn't I pressure wash my roof?", a: "Asphalt Roofing Manufacturers Association (ARMA) guidelines explicitly warn against high-pressure roof washing because it blasts away the ceramic granules that protect shingles from UV rays, leading to roof failure and voided warranties. Soft washing is the only ARMA-approved method." },
      { q: "How long does a typical soft wash service take?", a: "An average residential home (2,000 to 3,500 sq ft) takes approximately 2 to 4 hours to soft wash completely, depending on whether the roof, siding, and gutters are included." }
    ],
    relatedServices: [
      { title: "Roof Cleaning", href: "/services/roof-cleaning", desc: "Eliminate black streaks and moss with low-pressure soft washing." },
      { title: "House Washing", href: "/services/house-washing", desc: "Transform your home's siding, stucco, and brickwork." },
      { title: "Pressure Washing", href: "/services/pressure-washing", desc: "Heavy-duty power washing for concrete flatwork and driveways." }
    ]
  },

  "roof-cleaning": {
    slug: "/services/roof-cleaning",
    serviceName: "Roof Cleaning",
    h1Title: "Shingle-Safe Soft Wash Roof Cleaning in Mooresville & Lake Norman, NC",
    metaTitle: "Roof Cleaning Mooresville NC | Soft Wash Roof Washing Lake Norman",
    metaDescription: "Safe soft-wash roof cleaning in Mooresville & Lake Norman NC. Eliminates black algae streaks, moss & lichen without shingle damage. Call (704) 516-9509.",
    heroBadge: "ARMA-Compliant Roof Care",
    tagline: "Eradicate Black Algae Streaks & Extend Roof Lifespan",
    heroImage: svcRoof,
    description: "Steam On Wheels delivers professional soft wash roof cleaning across Mooresville, Lake Norman, and surrounding North Carolina communities, restoring the appearance and thermal efficiency of your asphalt shingle or metal roof.",
    secondaryParagraph: "Those ugly black streaks on your roof are not dirt—they are Gloeocapsa magma, an invasive cyanobacteria that feeds on the limestone filler in asphalt shingles. Our gentle soft-wash treatment kills 100% of organic growth without stripping granules.",
    serviceType: "RoofCleaningService",
    keyStats: [
      { label: "Method", value: "ARMA Approved Soft Wash" },
      { label: "Granule Loss", value: "0% (Zero High Pressure)" },
      { label: "Energy Efficiency", value: "Restores UV Reflectivity" },
      { label: "Algae Kill Rate", value: "100% Spore Eradication" }
    ],
    surfacesCleaned: [
      { title: "Architectural Asphalt Shingles", desc: "Gently removes black streaks and restores original shingle shade without dislodging granules." },
      { title: "3-Tab Shingles", desc: "Safe low-pressure cleaning that protects older, more delicate 3-tab shingle tabs from lifting." },
      { title: "Standing Seam Metal Roofs", desc: "Removes pollen, airborne fallout, and algae from painted metal roofing without scratching." },
      { title: "Clay & Concrete Tile Roofs", desc: "Deep moss and lichen removal on Spanish tile roofs using specialized soft-wash nozzles." },
      { title: "Cedar Shake Roofs", desc: "Gentle chemical neutralization of moss and fungi that causes wood rot in cedar shakes." },
      { title: "Skylights & Solar Panels", desc: "Spot-free rinse that maximizes solar energy absorption and clears obstructed skylight views." }
    ],
    localRelevanceTitle: "The Danger of Black Algae on North Carolina Roofs",
    localRelevanceContent: [
      "In the Lake Norman area, heavy humidity and shaded wooded lots create ideal breeding grounds for Gloeocapsa magma. These bacteria form a dark, UV-absorbing outer shell that creates the unsightly black streaks visible from the street.",
      "Left untreated, algae attracts moisture, allowing moss and lichen colonies to form. Moss roots anchor under shingle edges, lifting shingles during winter freezes and creating severe roof leaks.",
      "Furthermore, black stains absorb excess solar heat, raising your attic temperature and causing your air conditioning system to work significantly harder during hot North Carolina summers. Our soft wash roof cleaning restores your roof's curb appeal and cooling efficiency."
    ],
    serviceProcess: [
      { step: "01", title: "Gutter & Downspout Preparation", desc: "We inspect downspouts, divert runoff if necessary, and thoroughly hydrate all perimeter landscaping." },
      { step: "02", title: "ARMA-Formulated Algaecide Application", desc: "Using dedicated low-pressure roof pumps, we apply a manufacturer-recommended soft-wash algaecide solution." },
      { step: "03", title: "Targeted Moss & Lichen Treatment", desc: "The solution immediately breaks down the cellular structure of algae, turning black streaks brown and clear." },
      { step: "04", title: "Rain-Activated Self-Cleansing", desc: "Dead algae easily rinses away, while stubborn moss root structures detach naturally during the next rain cycles." }
    ],
    faqs: [
      { q: "Why shouldn't I pressure wash my roof?", a: "High pressure will strip the protective ceramic granules off asphalt shingles, void your manufacturer warranty, and potentially force water under shingles into your roof decking. Soft washing uses zero high pressure and is the only ARMA-approved method." },
      { q: "How long will my roof stay clean after a soft wash?", a: "Because our chemical solution eradicates the algae spores at the root level, roofs cleaned by Steam On Wheels typically stay streak-free for 3 to 5 years." },
      { q: "Will roof cleaning help lower my energy bills?", a: "Yes. Dark algae streaks absorb solar heat like a black blanket. Cleaning your roof restores its natural reflective properties, helping keep your attic cooler and reducing summer AC load." },
      { q: "Will the roof cleaning solution kill my plants or grass?", a: "No. We implement extensive plant hydration and rinse protocols before, during, and after the cleaning to ensure all vegetation remains safe and healthy." }
    ],
    relatedServices: [
      { title: "House Washing", href: "/services/house-washing", desc: "Clean your siding along with your roof for a complete exterior makeover." },
      { title: "Soft Washing", href: "/services/soft-washing", desc: "Discover how low-pressure cleaning protects delicate home materials." },
      { title: "Concrete Cleaning", href: "/services/concrete-cleaning", desc: "Remove stains from sidewalks, driveways, and patios." }
    ]
  },

  "concrete-cleaning": {
    slug: "/services/concrete-cleaning",
    serviceName: "Concrete Cleaning",
    h1Title: "Professional Concrete Cleaning in Mooresville & Lake Norman, NC",
    metaTitle: "Concrete Cleaning Mooresville NC | Patio & Sidewalk Pressure Washing",
    metaDescription: "Professional concrete cleaning & power washing in Mooresville & Lake Norman NC. Flatwork, patios, sidewalks & pool decks. Call David Hudson: (704) 516-9509.",
    heroBadge: "Deep Pore Flatwork Restoration",
    tagline: "Commercial Rotary Surface Washing for Pristine Patios & Walkways",
    heroImage: svcConcrete,
    description: "Steam On Wheels provides industrial concrete cleaning and pressure washing services throughout Mooresville and the Lake Norman area, eliminating dark algae, slip hazards, red clay, and ground-in grime.",
    secondaryParagraph: "Using professional-grade rotary surface cleaners and high-output commercial pressure washing equipment, we clean wide expanses of concrete uniformly without leaving the unsightly zebra stripes that standard wand cleaning produces.",
    serviceType: "ConcreteCleaningService",
    keyStats: [
      { label: "Equipment", value: "Commercial Rotary Cleaners" },
      { label: "Finish Quality", value: "100% Stripe-Free" },
      { label: "Slip Resistance", value: "Restored Safety" },
      { label: "Stain Treatment", value: "Algae, Clay & Oil" }
    ],
    surfacesCleaned: [
      { title: "Residential Patios & Porches", desc: "Brightens concrete, aggregate, and paver patios for family gatherings and outdoor entertaining." },
      { title: "Sidewalks & Walkways", desc: "Removes slippery black algae and tree tannin stains, eliminating safety slip hazards." },
      { title: "Pool Decks & Coping", desc: "Gentle degreasing and sanitization of porous pool decks to create a safe, slip-resistant perimeter." },
      { title: "Commercial Plaza Walkways", desc: "High-volume washing for shopping centers, restaurants, and medical facility sidewalks." },
      { title: "Retaining Walls & Steps", desc: "Cleans decorative stone and poured concrete retaining walls, removing dark water run-off stains." },
      { title: "Carports & Garage Floors", desc: "Lifts motor oil, antifreeze residue, and tire rubber marks from interior and exterior concrete." }
    ],
    localRelevanceTitle: "Why North Carolina Concrete Requires Regular Deep Cleaning",
    localRelevanceContent: [
      "Concrete is extremely porous, acting like a giant sponge for moisture, oil, tree sap, and red clay in North Carolina. When humidity spikes during summer and autumn, micro-organisms colonize concrete pores, creating dark, slippery films.",
      "In Lake Norman neighborhoods, shade from mature oak and pine trees keeps driveways and patios damp, accelerating the formation of black mold and green algae that pose serious slip hazards for families and guests.",
      "Our multi-stage concrete cleaning combines pre-treatment algaecides, dual-nozzle rotary scrubbing, and high-volume flushing to extract grime deep within the concrete matrix, leaving bright, uniform surfaces."
    ],
    serviceProcess: [
      { step: "01", title: "Surface Clearing & Pre-Treatment", desc: "We blow off loose debris and apply specialized algaecides to break down organic biofilms inside concrete pores." },
      { step: "02", title: "Rotary Surface Cleaner Scrubbing", desc: "Our 20-inch rotary surface cleaner spins balanced nozzles at 2,000 RPM, cleaning at a constant, uniform height." },
      { step: "03", title: "Edge & Corner Wand Detailing", desc: "We hand-detail perimeter edges, steps, expansion joints, and retaining wall bases with calibrated wand tips." },
      { step: "04", title: "Post-Treatment Brightener Application", desc: "We apply a post-wash neutralizing solution that keeps concrete bright and inhibits algae regrowth for months." }
    ],
    faqs: [
      { q: "Why do some DIY pressure washing jobs leave stripes on concrete?", a: "Striping (zebra stripes) happens when an operator holds a handheld wand tip unevenly across the concrete. Steam On Wheels uses enclosed commercial rotary surface cleaners with dual rotating nozzles that guarantee a completely uniform, streak-free finish." },
      { q: "Can you remove dark black stains from my concrete patio?", a: "Yes. Those black stains are deep-set algae colonies embedded in concrete pores. Our pre-treatment solution breaks down the organic matter so our rotary surface cleaners can extract it completely." },
      { q: "Is concrete pressure washing safe for pool decks?", a: "Yes. We calibrate pressure specifically for cool-deck, brushed concrete, stamped concrete, or pavers to ensure safe cleaning without surface pitting." },
      { q: "How long before we can walk on the cleaned concrete?", a: "Concrete dries quickly in outdoor air—typically within 30 to 60 minutes after our final post-rinse." }
    ],
    relatedServices: [
      { title: "Driveway Cleaning", href: "/services/driveway-cleaning", desc: "Heavy-duty driveway washing and vehicle stain degreasing." },
      { title: "Pressure Washing", href: "/services/pressure-washing", desc: "High-pressure cleaning for commercial lots, dumpster pads, and brick." },
      { title: "House Washing", href: "/services/house-washing", desc: "Complete exterior house washing and siding restoration." }
    ]
  },

  "driveway-cleaning": {
    slug: "/services/driveway-cleaning",
    serviceName: "Driveway Cleaning",
    h1Title: "Professional Driveway Cleaning & Power Washing in Mooresville, NC",
    metaTitle: "Driveway Cleaning Mooresville NC | Power Washing Lake Norman",
    metaDescription: "Expert driveway cleaning in Mooresville & Lake Norman NC. Eradicate oil stains, tire marks & NC red clay. 15+ years experience. Call (704) 516-9509.",
    heroBadge: "Driveway Curb Appeal Revival",
    tagline: "Stain Extraction, Degreasing & Carolina Red Clay Removal",
    heroImage: svcDriveway,
    description: "Steam On Wheels offers specialized driveway cleaning and power washing services across Mooresville, Cornelius, Davidson, Huntersville, and the Lake Norman region, restoring dirty, stained driveways to showroom condition.",
    secondaryParagraph: "Your driveway is the first feature visitors and neighbors see. We utilize professional hot-water washing, specialized degreasers, and rust/clay extractors to remove motor oil stains, tire rubber, and persistent North Carolina red clay.",
    serviceType: "DrivewayCleaningService",
    keyStats: [
      { label: "Stain Removal", value: "Oil, Rust & Red Clay" },
      { label: "Driveway Types", value: "Concrete, Pavers, Asphalt" },
      { label: "Equipment", value: "Rotary Flat Surface Cleaners" },
      { label: "Curb Appeal", value: "Instant Transformation" }
    ],
    surfacesCleaned: [
      { title: "Poured Concrete Driveways", desc: "Deep extraction of oil stains, mold, atmospheric soot, and red clay." },
      { title: "Interlocking Paver Driveways", desc: "Gentle cleaning that removes joint weed growth and algae without blowing out sand base." },
      { title: "Stamped & Decorative Concrete", desc: "Low-pressure surface wash that protects decorative sealers and integral colors." },
      { title: "Exposed Aggregate Driveways", desc: "High-volume washing that cleans around river pebbles without loosening aggregate." },
      { title: "Asphalt Aprons & Curbs", desc: "Safe degreasing and sediment cleanup along street curbs and asphalt transitions." },
      { title: "Driveway Approach & Culverts", desc: "Cleans street aprons, stone borders, and drainage headwalls." }
    ],
    localRelevanceTitle: "Combating Carolina Red Clay & Oil Stains on Driveways",
    localRelevanceContent: [
      "North Carolina is famous for iron-oxide rich red clay soil. During construction, landscaping, or wet weather, red clay gets tracked onto driveways where it binds chemically into the concrete pores, leaving stubborn orange-red stains that standard hose water cannot remove.",
      "Additionally, parked vehicles deposit engine oil, transmission fluid, and brake dust that bake into driveway surfaces under the Carolina sun.",
      "Steam On Wheels employs specialized acid and alkaline chemical spot treatments engineered specifically to dissolve red clay iron bonds and emulsify petroleum grease, followed by 4,000 PSI rotary surface cleaning for an immaculate transformation."
    ],
    serviceProcess: [
      { step: "01", title: "Stain Spot-Treatment", desc: "We apply concentrated industrial degreasers to oil spots and specialized iron-lifters to red clay stains." },
      { step: "02", title: "General Bio-Detergent Application", desc: "We coat the entire driveway surface with eco-friendly algaecides to loosen embedded grime and mildew." },
      { step: "03", title: "Rotary Surface Cleaning", desc: "Our 4,000 PSI commercial rotary surface cleaner deep cleans the flatwork in overlapping, uniform passes." },
      { step: "04", title: "High-Volume Flush & Neutralize", desc: "We flush all dislodged dirt and clay to street drains or lawn drainage, leaving spotless concrete." }
    ],
    faqs: [
      { q: "Can you completely remove old motor oil stains from concrete?", a: "While concrete is porous and oil can soak deep if left for years, our hot-water power washing and commercial enzymatic degreasers can dramatically lighten or completely remove most oil stains, vastly improving appearance." },
      { q: "How do you remove North Carolina red clay stains?", a: "Red clay stains are caused by iron oxide. Standard pressure washing only pushes it deeper. We apply specialized chemical reduction cleaners that break the iron bonds, allowing the red pigment to rinse away completely." },
      { q: "Will pressure washing damage interlocking pavers?", a: "No. We calibrate the pressure and nozzle angle to clean paver tops without displacing the structural bedding sand underneath." },
      { q: "How long does a typical 2-car driveway cleaning take?", a: "A standard 2 to 3-car residential driveway typically takes between 1.5 to 2.5 hours, including pre-treatment, rotary cleaning, and final washdown." }
    ],
    relatedServices: [
      { title: "Concrete Cleaning", href: "/services/concrete-cleaning", desc: "Clean your sidewalks, walkways, and patios alongside your driveway." },
      { title: "House Washing", href: "/services/house-washing", desc: "Bundle house washing and driveway cleaning for complete curb appeal." },
      { title: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing", desc: "Commercial parking lot and drive-thru cleaning services." }
    ]
  },

  "commercial-pressure-washing": {
    slug: "/services/commercial-pressure-washing",
    serviceName: "Commercial Pressure Washing",
    h1Title: "Commercial Pressure Washing in Mooresville & Lake Norman, NC",
    metaTitle: "Commercial Pressure Washing Mooresville NC | Building & Storefront Cleaning",
    metaDescription: "Professional commercial pressure washing in Mooresville & Lake Norman NC. Storefronts, warehouses, dumpster pads & parking lots. Call (704) 516-9509.",
    heroBadge: "Commercial & Industrial Facility Care",
    tagline: "Showcase a Pristine, Professional Image for Your Business",
    heroImage: svcCommercial,
    description: "Steam On Wheels provides commercial exterior pressure washing and building washing across Mooresville, Statesville, Huntersville, Hickory, and Lake Norman for businesses, property managers, and retail centers.",
    secondaryParagraph: "We understand that clean storefronts, grease-free dumpster pads, and spotless walkways directly influence customer perception and safety compliance. We offer flexible off-hours and weekend scheduling to ensure zero disruption to your business operations.",
    serviceType: "CommercialCleaningService",
    keyStats: [
      { label: "Liability Insurance", value: "$2,000,000" },
      { label: "Scheduling", value: "24/7 / After-Hours" },
      { label: "Capacity", value: "Hot-Water Commercial Rigs" },
      { label: "Compliance", value: "OSHA & EPA Standards" }
    ],
    surfacesCleaned: [
      { title: "Retail Storefronts & Entrances", desc: "Removes chewing gum, food spills, black shoe scuffs, and window sill grime from entranceways." },
      { title: "Commercial Dumpster Pads", desc: "Hot-water sanitization and degreasing to prevent pest infestations, foul odors, and health code fines." },
      { title: "Logistics Warehouses & Loading Docks", desc: "Cleans diesel exhaust soot, forklift tire marks, industrial oil, and exterior metal siding." },
      { title: "Restaurants & Drive-Thrus", desc: "Eliminates heavy grease deposits, spilled drinks, and vehicle oil buildup along drive-thru lanes." },
      { title: "Office Buildings & Medical Centers", desc: "Multi-story soft washing of brick, glass, aluminum composite panels, and concrete walkways." },
      { title: "HOA Common Areas & Clubhouses", desc: "Cleans community pools, tennis courts, entry monument signs, and subdivision sidewalks." }
    ],
    localRelevanceTitle: "Commercial Property Maintenance Across the I-77 Corridor",
    localRelevanceContent: [
      "Commercial properties along I-77 in Mooresville, Huntersville, and Statesville face intense vehicle traffic, diesel particulate settling, and heavy foot traffic. Dirty sidewalks and stained facades can deter prospective customers and lower commercial property values.",
      "Furthermore, grease and algae on commercial sidewalks create severe slip-and-fall liability hazards for retail tenants and property managers.",
      "Steam On Wheels is fully equipped with industrial hot-water power washing trailers, high-capacity water tanks, and commercial-grade reclaim compliance capabilities. We carry $2,000,000 in general liability insurance and provide comprehensive vendor documentation."
    ],
    serviceProcess: [
      { step: "01", title: "Commercial Scope Assessment", desc: "We conduct on-site walk-throughs, map water access, identify safety zones, and provide itemized commercial bids." },
      { step: "02", title: "Flexible After-Hours Dispatch", desc: "We perform work overnight or early mornings to ensure zero impact on customer foot traffic and tenant parking." },
      { step: "03", title: "Industrial Hot-Water Washdown", desc: "We utilize 200°F hot water and industrial detergents to dissolve grease, food stains, gum, and heavy buildup." },
      { step: "04", title: "Quality Sign-Off & Maintenance Scheduling", desc: "We provide before/after photographic documentation and establish recurring maintenance agreements if desired." }
    ],
    faqs: [
      { q: "Can you perform commercial cleaning outside of business hours?", a: "Yes. We operate 24/7 and regularly schedule commercial pressure washing during overnight hours or weekends so your customers and employees are never inconvenienced." },
      { q: "Do you offer recurring commercial maintenance contracts?", a: "Yes. We offer flexible weekly, monthly, quarterly, and bi-annual exterior maintenance programs for shopping centers, restaurants, HOAs, and corporate facilities." },
      { q: "Are you licensed and insured for commercial properties?", a: "Yes. Steam On Wheels is fully licensed, carrying $2,000,000 in commercial general liability insurance with complete worker coverage for North Carolina." },
      { q: "Can you remove chewing gum from commercial sidewalks?", a: "Yes. Our high-temperature hot-water pressure washers (up to 200°F) instantly melt and vaporize chewing gum from concrete sidewalks and entryways without damaging the concrete surface." }
    ],
    relatedServices: [
      { title: "24/7 Emergency Service", href: "/services/emergency-service", desc: "Rapid dispatch for commercial spills, graffiti, and urgent inspections." },
      { title: "Pressure Washing", href: "/services/pressure-washing", desc: "Heavy-duty power washing for concrete, masonry, and parking structures." },
      { title: "Concrete Cleaning", href: "/services/concrete-cleaning", desc: "Rotary surface washing for sidewalks, plazas, and pedestrian walkways." }
    ]
  },

  "emergency-service": {
    slug: "/services/emergency-service",
    serviceName: "24/7 Emergency Service",
    h1Title: "24/7 Emergency Pressure Washing in Mooresville & Lake Norman, NC",
    metaTitle: "24/7 Emergency Pressure Washing Mooresville NC | Steam On Wheels",
    metaDescription: "24/7 emergency pressure washing & exterior cleaning in Mooresville & Lake Norman NC. Urgent spill cleanup, graffiti removal & storm cleanup. Call (704) 516-9509.",
    heroBadge: "24/7 Immediate Dispatch",
    tagline: "Rapid Response Exterior Cleaning & Spill Containment",
    heroImage: svcPressureWash,
    description: "Steam On Wheels provides 24/7 emergency exterior pressure washing and cleanup services across Mooresville, Lake Norman, and surrounding North Carolina counties for critical situations that cannot wait.",
    secondaryParagraph: "Whether your business faces an urgent commercial grease or oil spill, graffiti vandalism before opening hours, pre-inspection health code emergencies, or post-storm debris hazards, owner David Hudson is ready to dispatch immediately.",
    serviceType: "EmergencyCleaningService",
    keyStats: [
      { label: "Availability", value: "24 Hours / 7 Days" },
      { label: "Response", value: "Immediate Dispatch" },
      { label: "Hot-Water Rigs", value: "200°F High-Output" },
      { label: "Emergency Hotline", value: "(704) 516-9509" }
    ],
    surfacesCleaned: [
      { title: "Commercial Oil & Hydraulic Fluid Spills", desc: "Rapid hot-water containment and degreasing to prevent slip hazards and environmental fines." },
      { title: "Graffiti & Vandalism Removal", desc: "Fast chemical removal of spray paint from brick, concrete, glass, and metal before business hours." },
      { title: "Restaurant Grease & Dumpster Overflows", desc: "Emergency hot-water sanitization for health inspection compliance and odor elimination." },
      { title: "Post-Storm Silt & Debris Washdown", desc: "Cleans mud, silt, and tree debris from commercial parking lots, storefronts, and access driveways." },
      { title: "Pre-Inspection Urgent Cleanups", desc: "Rapid cleaning for urgent real estate closings, municipal inspections, or corporate VIP visits." },
      { title: "Emergency Slip-and-Fall Hazard Remediation", desc: "Quick removal of slick algae or chemical slicks from high-traffic pedestrian walkways." }
    ],
    localRelevanceTitle: "When You Need Immediate Pressure Washing in Lake Norman",
    localRelevanceContent: [
      "Property emergencies don't wait for standard business hours. An unexpected hydraulic fluid leak on a commercial parking deck, offensive graffiti on a storefront, or a major kitchen grease spill outside a restaurant requires immediate professional intervention.",
      "Steam On Wheels maintains a dedicated emergency response unit equipped with self-contained commercial hot-water pressure washing trailers, high-temperature boilers, and eco-safe degreasers.",
      "We serve commercial property owners, restaurant operators, industrial plant managers, and residential estates with round-the-clock emergency support across Mooresville, Cornelius, Huntersville, Statesville, and Lake Norman."
    ],
    serviceProcess: [
      { step: "01", title: "Emergency Phone Call & Immediate Intake", desc: "Call owner David Hudson directly at (704) 516-9509. We assess the emergency and mobilize immediately." },
      { step: "02", title: "Rapid On-Site Mobilization", desc: "We arrive on site with our self-contained commercial pressure washing trailer and safety perimeter equipment." },
      { step: "03", title: "Hot-Water Extraction & Neutralization", desc: "Using 200°F hot water and specialized chemical emulsifiers, we rapidly dissolve and extract the hazard." },
      { step: "04", title: "Site Verification & Safety Clearance", desc: "We verify the surface is 100% clean, safe, and ready for normal foot traffic or vehicle operations." }
    ],
    faqs: [
      { q: "How do I request 24/7 emergency pressure washing?", a: "Call our emergency hotline directly at (704) 516-9509. We answer 24 hours a day, 7 days a week, including weekends and holidays for urgent commercial and residential situations." },
      { q: "What qualifies as an exterior cleaning emergency?", a: "Common emergencies include commercial oil or chemical spills, graffiti vandalism, restaurant grease spills, pre-inspection deadlines, severe storm debris blockages, and hazardous slippery algae on public walkways." },
      { q: "Can you remove fresh spray paint / graffiti completely?", a: "Yes. Our hot-water power washing and specialized graffiti-dissolving chemicals remove spray paint from brick, stone, concrete, and metal without ghosting or substrate etching." },
      { q: "Do you have your own water supply on the truck?", a: "Yes, our mobile commercial rigs are equipped with onboard water storage tanks and commercial power generators, allowing us to operate in emergency situations even if municipal water is temporarily unavailable." }
    ],
    relatedServices: [
      { title: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing", desc: "Ongoing maintenance programs for retail facilities and businesses." },
      { title: "Pressure Washing", href: "/services/pressure-washing", desc: "High-pressure hot and cold water power washing." },
      { title: "Concrete Cleaning", href: "/services/concrete-cleaning", desc: "Deep cleaning for commercial sidewalks and parking structures." }
    ]
  }
};
