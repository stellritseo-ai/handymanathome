export interface CityConfig {
  slug: string;
  cityName: string;
  county: string;
  zipCodes: string[];
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroBadge: string;
  introDescription: string;
  localCharacteristics: {
    headline: string;
    points: string[];
  };
  propertyTypesServed: {
    title: string;
    desc: string;
  }[];
  servicesOffered: {
    title: string;
    href: string;
    desc: string;
  }[];
  localFaqs: {
    q: string;
    a: string;
  }[];
  neighboringCities: {
    name: string;
    href: string;
  }[];
}

export const citiesData: Record<string, CityConfig> = {
  "mooresville-nc": {
    slug: "/service-areas/mooresville-nc",
    cityName: "Mooresville, NC",
    county: "Iredell County",
    zipCodes: ["28115", "28117"],
    h1Title: "Professional Pressure Washing in Mooresville, NC",
    metaTitle: "Pressure Washing Mooresville NC | Steam On Wheels Exterior Cleaning",
    metaDescription: "Top-rated pressure washing, soft roof washing, house washing & concrete cleaning in Mooresville, NC. Local, licensed & insured. Call (704) 516-9509.",
    primaryKeyword: "pressure washing Mooresville NC",
    secondaryKeywords: [
      "power washing Mooresville NC",
      "house washing Mooresville NC",
      "roof cleaning Mooresville NC",
      "concrete cleaning Mooresville NC",
      "commercial pressure washing Mooresville NC",
      "soft washing Mooresville NC",
      "exterior cleaning Mooresville NC"
    ],
    heroBadge: "Mooresville Headquarters & Local Team",
    introDescription: "Steam On Wheels is proudly based in Mooresville, NC, providing showroom-grade pressure washing, soft roof cleaning, house washing, and concrete degreasing across residential neighborhoods and commercial centers throughout Race City USA.",
    localCharacteristics: {
      headline: "Why Mooresville Properties Face Persistent Exterior Grime",
      points: [
        "Proximity to Lake Norman and dense tree canopies in communities like The Point, Curtis Pond, and Morrison Plantation create high humidity levels that foster rapid green algae and Gloeocapsa magma black streak growth on roofs and siding.",
        "Heavy seasonal yellow pine pollen in spring adheres tightly to vinyl, brick, and window frames, creating a sticky base that accelerates mildew growth.",
        "Mooresville's native red clay soil easily transfers onto poured concrete driveways and walkways, creating stubborn orange-red iron stains that standard hose water cannot remove.",
        "Strict HOA architectural guidelines across Mooresville subdivisions require spotless, algae-free siding and clean driveways to avoid violation notices."
      ]
    },
    propertyTypesServed: [
      { title: "Lakefront & Waterfront Estates", desc: "Specialized low-pressure soft washing for luxury lake homes along Lake Norman coves, docks, and outdoor entertainment patios." },
      { title: "Subdivision Single-Family Homes", desc: "Comprehensive house, roof, and driveway washing tailored to meet and exceed Mooresville HOA cleanliness standards." },
      { title: "Commercial Storefronts & Plazas", desc: "Hot-water degreasing, gum removal, and sidewalk brightening for retail locations along Highway 150, River Highway, and Downtown Mooresville." },
      { title: "Motorsports & Industrial Facilities", desc: "Heavy equipment tire mark removal, warehouse bay washing, and dumpster pad sanitation for Mooresville's industrial parks." }
    ],
    servicesOffered: [
      { title: "House Washing", href: "/services/house-washing", desc: "Gentle soft washing for vinyl, brick, Hardie board, and stucco sidings." },
      { title: "Roof Cleaning", href: "/services/roof-cleaning", desc: "Shingle-safe black streak and moss removal without pressure damage." },
      { title: "Concrete & Driveway Cleaning", href: "/services/concrete-cleaning", desc: "Deep extraction of oil stains, red clay, and slippery algae from flatwork." },
      { title: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing", desc: "Hot-water washing for storefronts, shopping plazas, and dumpster pads." },
      { title: "24/7 Emergency Service", href: "/services/emergency-service", desc: "Immediate dispatch for urgent commercial spills, graffiti, or storm debris." }
    ],
    localFaqs: [
      { q: "Where is Steam On Wheels located in Mooresville?", a: "Our headquarters is located at 107 Kase Ct, Mooresville, NC 28115. We dispatch directly across all Mooresville neighborhoods, including zip codes 28115 and 28117." },
      { q: "How quickly can you provide pressure washing in Mooresville?", a: "Because we are locally based in Mooresville, we often provide same-day or next-day on-site estimates and fast scheduling, plus 24/7 emergency dispatch for urgent situations." },
      { q: "Are your cleaning methods safe for my Mooresville landscaping?", a: "Yes. We thoroughly pre-soak and rinse all surrounding grass, shrubs, and garden beds before and after applying our biodegradable, eco-friendly detergents." },
      { q: "Do you clean commercial properties in Mooresville?", a: "Yes, we clean storefronts, restaurants, office buildings, automotive shops, and industrial warehouses throughout Mooresville and along the Highway 150 commercial corridor." }
    ],
    neighboringCities: [
      { name: "Lake Norman", href: "/service-areas/lake-norman-nc" },
      { name: "Troutman", href: "/service-areas/troutman-nc" },
      { name: "Cornelius", href: "/service-areas/cornelius-nc" },
      { name: "Davidson", href: "/service-areas/davidson-nc" },
      { name: "Statesville", href: "/service-areas/statesville-nc" }
    ]
  },

  "lake-norman-nc": {
    slug: "/service-areas/lake-norman-nc",
    cityName: "Lake Norman, NC",
    county: "Regional Lake Norman Area (Mecklenburg, Iredell, Catawba, Lincoln)",
    zipCodes: ["28117", "28031", "28036", "28078", "28037"],
    h1Title: "Premier Pressure Washing & Exterior Cleaning Across Lake Norman, NC",
    metaTitle: "Pressure Washing Lake Norman NC | Steam On Wheels Exterior Cleaning",
    metaDescription: "Lake Norman's premier pressure washing & soft roof cleaning company. Safe house washing, dock washing & concrete cleaning. Call (704) 516-9509.",
    primaryKeyword: "pressure washing Lake Norman NC",
    secondaryKeywords: [
      "power washing Lake Norman NC",
      "house washing Lake Norman NC",
      "roof cleaning Lake Norman NC",
      "soft washing Lake Norman NC",
      "concrete cleaning Lake Norman NC",
      "commercial pressure washing Lake Norman NC",
      "exterior cleaning Lake Norman NC"
    ],
    heroBadge: "Lakefront Cleaning Specialists",
    introDescription: "Steam On Wheels delivers customized exterior pressure washing and gentle soft washing solutions for lakefront residences, estates, docks, and commercial businesses surrounding Lake Norman, North Carolina.",
    localCharacteristics: {
      headline: "The Unique Micro-Climate Challenges of Lake Norman Properties",
      points: [
        "Shoreline moisture, morning mist, and lake humidity accelerate the growth of green algae, black mildew, and aquatic spider webbing on siding, overhangs, and boat docks.",
        "Waterfront homes feature high-end building materials—such as Brazilian hardwood decking, composite Trex docks, painted brick, and architectural shingles—that require delicate soft washing rather than high-pressure blasting.",
        "Environmental stewardship is critical around Lake Norman: our 100% biodegradable cleansers and plant-safe protocols protect local waterways and shoreline ecology.",
        "Frequent pollen dusting and atmospheric lake fallout leave film deposits on lakeside windows, patio glass railings, and screened porches."
      ]
    },
    propertyTypesServed: [
      { title: "Custom Lakefront Residences", desc: "Non-destructive soft washing for multi-story estates, cedar shake accents, stucco, and lakeside outdoor kitchens." },
      { title: "Boat Docks, Piers & Gazebos", desc: "Algae, spider nest, and mildew removal from aluminum, composite, and treated wood boat docks without water contamination." },
      { title: "Lakeside Marinas & Commercial Venues", desc: "Commercial pressure washing for boat clubs, waterfront dining patios, marina boardwalks, and rental facilities." },
      { title: "HOA Communities & Townhome Enclaves", desc: "Multi-unit exterior maintenance programs for lakeside townhomes, condominiums, and clubhouse amenities." }
    ],
    servicesOffered: [
      { title: "Soft Wash House Washing", href: "/services/house-washing", desc: "Gentle sanitization of siding, brick, and stucco without risk of water intrusion." },
      { title: "Roof Algae Removal", href: "/services/roof-cleaning", desc: "Eliminates dark streaks on architectural shingles, preserving roof cooling efficiency." },
      { title: "Concrete & Paver Cleaning", href: "/services/concrete-cleaning", desc: "Rotary washing of lakeside stone patios, pool decks, and entry driveways." },
      { title: "Commercial Exterior Washing", href: "/services/commercial-pressure-washing", desc: "Keeps Lake Norman commercial and hospitality venues looking pristine." },
      { title: "24/7 Emergency Dispatch", href: "/services/emergency-service", desc: "Fast exterior cleanup for storm debris, spills, or urgent event prep." }
    ],
    localFaqs: [
      { q: "Is your cleaning solution safe for Lake Norman water?", a: "Yes. We use eco-friendly, biodegradable surfactants and adhere strictly to environmentally responsible cleaning protocols to protect the lake ecosystem." },
      { q: "Do you clean boat docks and piers on Lake Norman?", a: "Yes. We clean boat docks, piers, seawalls, and gazebos, removing slippery green algae, spider webs, and bird droppings safely." },
      { q: "How often should Lake Norman homes be washed?", a: "Due to persistent shoreline humidity, we recommend annual house washing and bi-annual dock cleaning to keep mildew and algae under control." },
      { q: "Can you wash multi-story lake homes with high rooflines?", a: "Yes. Our commercial soft-wash systems can reach up to 4 stories safely from the ground, minimizing ladder use and protecting your roofing and gutters." }
    ],
    neighboringCities: [
      { name: "Mooresville", href: "/service-areas/mooresville-nc" },
      { name: "Cornelius", href: "/service-areas/cornelius-nc" },
      { name: "Davidson", href: "/service-areas/davidson-nc" },
      { name: "Huntersville", href: "/service-areas/huntersville-nc" },
      { name: "Denver", href: "/service-areas/denver-nc" },
      { name: "Sherrills Ford", href: "/service-areas/sherrills-ford-nc" }
    ]
  },

  "troutman-nc": {
    slug: "/service-areas/troutman-nc",
    cityName: "Troutman, NC",
    county: "Iredell County",
    zipCodes: ["28166"],
    h1Title: "Expert Pressure Washing Services in Troutman, NC",
    metaTitle: "Pressure Washing Troutman NC | Steam On Wheels Exterior Cleaning",
    metaDescription: "Professional pressure washing, soft house washing, roof cleaning & concrete cleaning in Troutman, NC. Licensed & insured. Call David Hudson: (704) 516-9509.",
    primaryKeyword: "pressure washing Troutman NC",
    secondaryKeywords: [
      "house washing Troutman NC",
      "roof cleaning Troutman NC",
      "power washing Troutman NC",
      "concrete cleaning Troutman NC",
      "driveway cleaning Troutman NC"
    ],
    heroBadge: "Troutman & North Iredell Service",
    introDescription: "Steam On Wheels provides comprehensive pressure washing and gentle soft washing services for homeowners and businesses in Troutman, NC, from newly constructed subdivisions to established rural properties near Lake Norman State Park.",
    localCharacteristics: {
      headline: "Troutman's Growing Residential & Rural Exterior Needs",
      points: [
        "Rapid new home development in Troutman creates heavy red clay dust and construction runoff that stains fresh concrete driveways, sidewalks, and vinyl siding.",
        "Proximity to heavily wooded areas and Lake Norman State Park creates high spore counts that deposit organic green mildew onto north-facing walls.",
        "Well-water mineral content and red clay transfer in rural Troutman require specialized chemical treatments to prevent permanent concrete discoloration."
      ]
    },
    propertyTypesServed: [
      { title: "New Subdivision Homes", desc: "Post-construction cleanup and annual soft washing for Troutman's expanding residential neighborhoods." },
      { title: "Rural & Farmhouse Properties", desc: "Cleaning for metal roofs, large concrete pads, pole barns, and extended gravel/concrete driveways." },
      { title: "Local Commercial Facilities", desc: "Storefront washing, concrete cleaning, and dumpster area degreasing for Troutman businesses." }
    ],
    servicesOffered: [
      { title: "House Washing", href: "/services/house-washing", desc: "Low-pressure siding wash that eliminates red clay dust and green algae." },
      { title: "Driveway Cleaning", href: "/services/driveway-cleaning", desc: "Specialized red clay and oil stain removal from concrete driveways." },
      { title: "Roof Washing", href: "/services/roof-cleaning", desc: "Gentle soft wash treatment that removes dark shingle streaks." }
    ],
    localFaqs: [
      { q: "Can you remove red clay stains from my new Troutman driveway?", a: "Yes. We use specialized acid-based clay lifters that dissolve iron oxide stains, restoring concrete brightness." },
      { q: "Do you service rural properties near Lake Norman State Park?", a: "Yes, we regularly service properties throughout Troutman, Shepherds, and surrounding rural Iredell County." }
    ],
    neighboringCities: [
      { name: "Mooresville", href: "/service-areas/mooresville-nc" },
      { name: "Statesville", href: "/service-areas/statesville-nc" },
      { name: "Lake Norman", href: "/service-areas/lake-norman-nc" }
    ]
  },

  "statesville-nc": {
    slug: "/service-areas/statesville-nc",
    cityName: "Statesville, NC",
    county: "Iredell County",
    zipCodes: ["28625", "28677"],
    h1Title: "Professional Pressure Washing in Statesville, NC",
    metaTitle: "Pressure Washing Statesville NC | Commercial & Residential Power Washing",
    metaDescription: "Top-rated pressure washing, historic brick soft washing, roof cleaning & commercial cleaning in Statesville, NC. Licensed & insured. Call (704) 516-9509.",
    primaryKeyword: "pressure washing Statesville NC",
    secondaryKeywords: [
      "house washing Statesville NC",
      "roof cleaning Statesville NC",
      "commercial pressure washing Statesville NC",
      "power washing Statesville NC",
      "concrete cleaning Statesville NC"
    ],
    heroBadge: "Statesville Residential & Commercial",
    introDescription: "Steam On Wheels delivers professional pressure washing, historic architectural soft washing, and industrial cleaning across Statesville, NC, serving historic downtown districts, modern subdivisions, and logistics hubs along I-40 and I-77.",
    localCharacteristics: {
      headline: "Historic Architecture & Industrial Logistics Demands in Statesville",
      points: [
        "Historic homes in Statesville feature delicate brickwork, aged mortar, and painted wood trim that must be cleaned using gentle soft washing to prevent structural damage.",
        "Major commercial distribution centers and manufacturing plants along I-40 and I-77 accumulate diesel soot, heavy tire marks, and oil slicks on loading docks and parking lots.",
        "Seasonal pollen, mold, and humidity affect both residential neighborhoods and commercial plazas throughout northern Iredell County."
      ]
    },
    propertyTypesServed: [
      { title: "Historic District Homes", desc: "Non-destructive low-pressure soft washing for century-old brick, stone, and wood architecture." },
      { title: "Industrial Warehouses & Distribution Hubs", desc: "Commercial hot-water power washing for loading docks, concrete pads, and fleet bays." },
      { title: "Retail & Dining Plazas", desc: "High-temperature degreasing for dumpster pads, drive-thrus, and pedestrian walkways." }
    ],
    servicesOffered: [
      { title: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing", desc: "Heavy-duty cleaning for logistics centers, storefronts, and parking areas." },
      { title: "House Washing", href: "/services/house-washing", desc: "Gentle soft washing for vinyl, brick, and historic wood facades." },
      { title: "Concrete Cleaning", href: "/services/concrete-cleaning", desc: "Deep extraction of oil, diesel stains, and algae from flatwork." }
    ],
    localFaqs: [
      { q: "Is soft washing safe for historic brick homes in Statesville?", a: "Yes. We use low-pressure chemical cleaning (under 100 PSI) that will not pit vintage brick or erode delicate historic mortar." },
      { q: "Do you offer industrial pressure washing for Statesville warehouses?", a: "Yes, we operate commercial hot-water pressure washing rigs capable of handling expansive warehouse pads and loading docks." }
    ],
    neighboringCities: [
      { name: "Mooresville", href: "/service-areas/mooresville-nc" },
      { name: "Troutman", href: "/service-areas/troutman-nc" },
      { name: "Hickory", href: "/services" }
    ]
  },

  "cornelius-nc": {
    slug: "/service-areas/cornelius-nc",
    cityName: "Cornelius, NC",
    county: "Mecklenburg County",
    zipCodes: ["28031"],
    h1Title: "Top-Rated Pressure Washing in Cornelius, NC",
    metaTitle: "Pressure Washing Cornelius NC | Steam On Wheels Exterior Cleaning",
    metaDescription: "Premier pressure washing, soft house washing, roof cleaning & concrete degreasing in Cornelius, NC. The Peninsula & Jetton Park areas. Call (704) 516-9509.",
    primaryKeyword: "pressure washing Cornelius NC",
    secondaryKeywords: [
      "house washing Cornelius NC",
      "roof cleaning Cornelius NC",
      "power washing Cornelius NC",
      "soft washing Cornelius NC",
      "concrete cleaning Cornelius NC",
      "commercial pressure washing Cornelius NC"
    ],
    heroBadge: "The Peninsula & Cornelius Specialist",
    introDescription: "Steam On Wheels provides exceptional exterior cleaning, soft wash house washing, and shingle-safe roof restoration for high-end waterfront estates, golf communities, and commercial districts in Cornelius, NC.",
    localCharacteristics: {
      headline: "Preserving Luxury Properties Along Cornelius Waterfronts",
      points: [
        "Properties in The Peninsula, Jetton Road, and Ramsey Creek areas experience constant lakefront moisture and morning fog, leading to accelerated green algae growth on stucco, brick, and Hardie board.",
        "Cornelius HOAs enforce strict architectural and exterior cleanliness standards requiring clean, streak-free roofs, pristine siding, and bright concrete flatwork.",
        "Our soft washing process protects custom paint, architectural stone, and delicate landscaping while delivering 100% spore eradication."
      ]
    },
    propertyTypesServed: [
      { title: "Waterfront Luxury Estates", desc: "High-end soft washing for stucco, painted brick, cedar trim, and expansive lakeside stone patios." },
      { title: "HOA Master-Planned Communities", desc: "Full-service house, roof, and driveway cleaning to keep properties in pristine HOA compliance." },
      { title: "Retail Centers & Dining Patios", desc: "Commercial pressure washing along Catawba Avenue and Torrence Chapel Road." }
    ],
    servicesOffered: [
      { title: "Soft Wash House Washing", href: "/services/house-washing", desc: "Low-pressure gentle wash for luxury siding, stucco, and brickwork." },
      { title: "Roof Soft Washing", href: "/services/roof-cleaning", desc: "Eliminates unsightly black streaks on architectural shingles." },
      { title: "Patio & Concrete Cleaning", href: "/services/concrete-cleaning", desc: "Rotary surface cleaning for stone patios, pool decks, and driveways." }
    ],
    localFaqs: [
      { q: "Are your cleaning products safe for pet owners in Cornelius?", a: "Yes. All of our cleaning solutions are eco-friendly and biodegradable, ensuring complete safety for pets and children once dry." },
      { q: "Can you clean multi-story lakefront homes in The Peninsula?", a: "Yes. Our commercial soft-wash equipment can spray up to 4 stories safely from the ground without walking on delicate roofs or damaging landscaping." }
    ],
    neighboringCities: [
      { name: "Davidson", href: "/service-areas/davidson-nc" },
      { name: "Huntersville", href: "/service-areas/huntersville-nc" },
      { name: "Mooresville", href: "/service-areas/mooresville-nc" },
      { name: "Lake Norman", href: "/service-areas/lake-norman-nc" }
    ]
  },

  "davidson-nc": {
    slug: "/service-areas/davidson-nc",
    cityName: "Davidson, NC",
    county: "Mecklenburg County",
    zipCodes: ["28036"],
    h1Title: "Professional Pressure Washing in Davidson, NC",
    metaTitle: "Pressure Washing Davidson NC | Steam On Wheels Exterior Cleaning",
    metaDescription: "Expert pressure washing, gentle soft house washing & roof cleaning in Davidson, NC. Serving historic neighborhoods & River Run. Call (704) 516-9509.",
    primaryKeyword: "pressure washing Davidson NC",
    secondaryKeywords: [
      "house washing Davidson NC",
      "roof cleaning Davidson NC",
      "power washing Davidson NC",
      "soft washing Davidson NC",
      "concrete cleaning Davidson NC"
    ],
    heroBadge: "Historic & Residential Cleaning",
    introDescription: "Steam On Wheels offers meticulous pressure washing and architectural soft washing throughout Davidson, NC, serving historic Main Street properties, college area neighborhoods, and master-planned communities like River Run.",
    localCharacteristics: {
      headline: "Careful Preservation for Davidson's Distinctive Architecture",
      points: [
        "Davidson's tree-lined streets and historic canopy create dense shade, keeping roofs and siding damp and promoting thick green moss and lichen growth.",
        "Historic brick homes and traditional architectural detailing require non-abrasive soft washing to avoid chipping mortar joints or stripping vintage paint.",
        "Master-planned golf communities like River Run have high aesthetic standards requiring spotless, mold-free driveways, patios, and sidings."
      ]
    },
    propertyTypesServed: [
      { title: "Historic & Downtown Properties", desc: "Gentle chemical cleaning that protects century-old woodwork, brick paths, and delicate masonry." },
      { title: "River Run & Golf Community Homes", desc: "Full-exterior soft washing, roof stain removal, and paver patio brightening." },
      { title: "Main Street Commercial Storefronts", desc: "Sidewalk gum removal, window surround wash, and entranceway cleaning for local merchants." }
    ],
    servicesOffered: [
      { title: "House Washing", href: "/services/house-washing", desc: "Safe soft washing for historic wood, fiber cement, and brick siding." },
      { title: "Roof Cleaning", href: "/services/roof-cleaning", desc: "Non-destructive black streak removal from architectural shingles." },
      { title: "Paver & Concrete Washing", href: "/services/concrete-cleaning", desc: "Uniform flat surface washing for patios, walkways, and driveways." }
    ],
    localFaqs: [
      { q: "How do you protect vintage wood siding in historic Davidson?", a: "We use low-pressure soft washing (<100 PSI) with specialized biodegradable cleansers, ensuring the wood is sanitized without splintering or paint peeling." },
      { q: "Do you clean paver walkways and stone patios in Davidson?", a: "Yes, we use calibrated rotary surface cleaners that clean stone and brick pavers without eroding base sand." }
    ],
    neighboringCities: [
      { name: "Cornelius", href: "/service-areas/cornelius-nc" },
      { name: "Mooresville", href: "/service-areas/mooresville-nc" },
      { name: "Huntersville", href: "/service-areas/huntersville-nc" },
      { name: "Lake Norman", href: "/service-areas/lake-norman-nc" }
    ]
  },

  "huntersville-nc": {
    slug: "/service-areas/huntersville-nc",
    cityName: "Huntersville, NC",
    county: "Mecklenburg County",
    zipCodes: ["28078"],
    h1Title: "Top Pressure Washing Services in Huntersville, NC",
    metaTitle: "Pressure Washing Huntersville NC | Steam On Wheels Exterior Cleaning",
    metaDescription: "Leading pressure washing, house washing, roof cleaning & commercial power washing in Huntersville, NC. Birkdale & I-77 corridor. Call (704) 516-9509.",
    primaryKeyword: "pressure washing Huntersville NC",
    secondaryKeywords: [
      "house washing Huntersville NC",
      "roof cleaning Huntersville NC",
      "commercial pressure washing Huntersville NC",
      "power washing Huntersville NC",
      "driveway cleaning Huntersville NC"
    ],
    heroBadge: "Huntersville & Birkdale Area",
    introDescription: "Steam On Wheels provides professional residential pressure washing, soft roof cleaning, and commercial power washing for homes, retail centers, and corporate facilities throughout Huntersville, NC.",
    localCharacteristics: {
      headline: "Addressing Heavy Traffic & Climate Demands in Huntersville",
      points: [
        "High-density subdivisions across Huntersville face intense spring pine pollen and summer humidity, leading to widespread mildew on vinyl siding and concrete driveways.",
        "Major commercial developments around Birkdale Village, Gilead Road, and Highway 21 experience heavy customer traffic, requiring regular sidewalk degreasing and gum removal.",
        "HOA communities in Huntersville require regular exterior cleaning to maintain neighborhood property values and eliminate unsightly dark roof streaks."
      ]
    },
    propertyTypesServed: [
      { title: "Subdivision Single-Family Homes", desc: "Complete exterior packages covering house siding, roof black streaks, and driveway brightening." },
      { title: "Commercial Shopping Centers", desc: "Hot-water washing for retail storefronts, outdoor dining areas, and parking lot surfaces." },
      { title: "Corporate Parks & Office Complexes", desc: "Building facade washing, entry plaza cleaning, and dumpster pad sanitation." }
    ],
    servicesOffered: [
      { title: "House Washing", href: "/services/house-washing", desc: "Low-pressure soft washing for vinyl, brick, and stucco siding." },
      { title: "Commercial Power Washing", href: "/services/commercial-pressure-washing", desc: "High-temperature washing for retail centers and commercial facilities." },
      { title: "Roof Washing", href: "/services/roof-cleaning", desc: "Safe removal of black algae stains and moss from roof shingles." }
    ],
    localFaqs: [
      { q: "Do you service commercial shopping centers in Huntersville?", a: "Yes, we regularly perform overnight commercial pressure washing for retail plazas and restaurants across Huntersville." },
      { q: "How long does a full house and driveway wash take in Huntersville?", a: "A typical 2,500 sq ft home with driveway cleaning takes approximately 3 hours to complete thoroughly." }
    ],
    neighboringCities: [
      { name: "Cornelius", href: "/service-areas/cornelius-nc" },
      { name: "Davidson", href: "/service-areas/davidson-nc" },
      { name: "Lake Norman", href: "/service-areas/lake-norman-nc" },
      { name: "Mooresville", href: "/service-areas/mooresville-nc" }
    ]
  },

  "denver-nc": {
    slug: "/service-areas/denver-nc",
    cityName: "Denver, NC",
    county: "Lincoln County",
    zipCodes: ["28037"],
    h1Title: "Professional Pressure Washing in Denver, NC",
    metaTitle: "Pressure Washing Denver NC | Steam On Wheels Lake Norman West",
    metaDescription: "Professional pressure washing, soft house washing, roof cleaning & boat dock cleaning in Denver, NC. West Lake Norman. Call (704) 516-9509.",
    primaryKeyword: "pressure washing Denver NC",
    secondaryKeywords: [
      "house washing Denver NC",
      "roof cleaning Denver NC",
      "power washing Denver NC",
      "soft washing Denver NC",
      "concrete cleaning Denver NC"
    ],
    heroBadge: "West Lake Norman Specialists",
    introDescription: "Steam On Wheels delivers top-quality pressure washing, soft roof cleaning, and dock washing for waterfront homes, growing subdivisions, and commercial properties on the west side of Lake Norman in Denver, NC.",
    localCharacteristics: {
      headline: "West Lake Norman Climate & Exterior Maintenance Factors",
      points: [
        "Denver's rapid growth along Highway 16 and Lake Norman shoreline brings a mix of new construction red clay dust and persistent lakeside moisture.",
        "West-facing waterfront properties receive intense afternoon sun combined with lake humidity, baking algae and atmospheric dust into siding and roofing materials.",
        "Boat docks and shoreline decks in Denver frequently develop slick green algae that creates safety hazards for families."
      ]
    },
    propertyTypesServed: [
      { title: "Lakefront Homes & Docks", desc: "Gentle soft washing for lakeside multi-level residences, cedar decks, and composite docks." },
      { title: "Highway 16 New Subdivisions", desc: "Post-construction clay removal and exterior siding brightening for newer developments." },
      { title: "Local Commercial Properties", desc: "Storefront washing and parking lot concrete degreasing along the Denver business corridor." }
    ],
    servicesOffered: [
      { title: "Soft Wash House Washing", href: "/services/house-washing", desc: "Gentle low-pressure cleaning for siding, stucco, and stone facades." },
      { title: "Roof Cleaning", href: "/services/roof-cleaning", desc: "Safe chemical eradication of black algae streaks from shingles." },
      { title: "Concrete & Dock Washing", href: "/services/concrete-cleaning", desc: "Removes slippery algae from concrete flatwork and dock surfaces." }
    ],
    localFaqs: [
      { q: "Do you service all areas of Denver, NC?", a: "Yes, we service all of Denver, Sailview, Westport, and throughout eastern Lincoln County." },
      { q: "Can you clean composite Trex decking in Denver?", a: "Yes, we use specialized low-pressure soft wash detergents that sanitize composite decking without scratching or fading." }
    ],
    neighboringCities: [
      { name: "Lake Norman", href: "/service-areas/lake-norman-nc" },
      { name: "Sherrills Ford", href: "/service-areas/sherrills-ford-nc" },
      { name: "Mooresville", href: "/service-areas/mooresville-nc" },
      { name: "Huntersville", href: "/service-areas/huntersville-nc" }
    ]
  },

  "sherrills-ford-nc": {
    slug: "/service-areas/sherrills-ford-nc",
    cityName: "Sherrills Ford, NC",
    county: "Catawba County",
    zipCodes: ["28673"],
    h1Title: "Expert Pressure Washing in Sherrills Ford, NC",
    metaTitle: "Pressure Washing Sherrills Ford NC | Steam On Wheels Exterior Cleaning",
    metaDescription: "Professional pressure washing, soft house washing, roof cleaning & dock cleaning in Sherrills Ford, NC. Catawba County. Call (704) 516-9509.",
    primaryKeyword: "pressure washing Sherrills Ford NC",
    secondaryKeywords: [
      "house washing Sherrills Ford NC",
      "roof cleaning Sherrills Ford NC",
      "power washing Sherrills Ford NC",
      "soft washing Sherrills Ford NC",
      "concrete cleaning Sherrills Ford NC"
    ],
    heroBadge: "Sherrills Ford & Mountain Creek",
    introDescription: "Steam On Wheels provides expert pressure washing and gentle soft washing for residential waterfront estates, new construction communities, and commercial centers in Sherrills Ford and Terrell, NC.",
    localCharacteristics: {
      headline: "Sherrills Ford's Boom in Waterfront Living",
      points: [
        "Rapid lakeside residential expansion in Sherrills Ford requires post-construction washdowns to remove red clay sediment, masonry dust, and paint overspray.",
        "Deep water coves along Mountain Creek and Lake Norman foster heavy aquatic insect webbing, spider nests, and green algae on soffits and siding.",
        "Architectural shingle roofs in Sherrills Ford quickly develop black algae streaks from nearby lake moisture and tree cover."
      ]
    },
    propertyTypesServed: [
      { title: "Lakeside New Construction", desc: "Initial move-in exterior washdowns and ongoing seasonal maintenance for new custom builds." },
      { title: "Waterfront Estates & Private Piers", desc: "Low-pressure soft washing for multi-tier decks, gazebos, and boat houses." },
      { title: "Local Retail & Commercial Hubs", desc: "Exterior cleaning for commercial plazas and dining establishments along NC-150." }
    ],
    servicesOffered: [
      { title: "House Washing", href: "/services/house-washing", desc: "Low-pressure soft washing that eliminates green algae, dust, and spider webs." },
      { title: "Roof Washing", href: "/services/roof-cleaning", desc: "Shingle-safe algaecide treatment that restores roof brightness." },
      { title: "Concrete Driveway Cleaning", href: "/services/driveway-cleaning", desc: "Deep extraction of red clay stains and oil deposits." }
    ],
    localFaqs: [
      { q: "Do you service properties in Terrell and Sherrills Ford?", a: "Yes, we regularly service properties throughout Sherrills Ford, Terrell, and southeastern Catawba County." },
      { q: "How do you remove spider webs from high second-story peaks?", a: "Our specialized soft-wash application and rinse systems safely clear spider webs, insect nests, and dirt from multi-story roof peaks." }
    ],
    neighboringCities: [
      { name: "Mooresville", href: "/service-areas/mooresville-nc" },
      { name: "Denver", href: "/service-areas/denver-nc" },
      { name: "Lake Norman", href: "/service-areas/lake-norman-nc" }
    ]
  },

  "mount-mourne-nc": {
    slug: "/service-areas/mount-mourne-nc",
    cityName: "Mount Mourne, NC",
    county: "Iredell County",
    zipCodes: ["28123"],
    h1Title: "Professional Pressure Washing in Mount Mourne, NC",
    metaTitle: "Pressure Washing Mount Mourne NC | Steam On Wheels Exterior Cleaning",
    metaDescription: "Expert pressure washing, soft house washing, roof cleaning & concrete cleaning in Mount Mourne, NC. Local, licensed & insured. Call (704) 516-9509.",
    primaryKeyword: "pressure washing Mount Mourne NC",
    secondaryKeywords: [
      "house washing Mount Mourne NC",
      "roof cleaning Mount Mourne NC",
      "power washing Mount Mourne NC",
      "concrete cleaning Mount Mourne NC",
      "soft washing Mount Mourne NC"
    ],
    heroBadge: "Mount Mourne & South Iredell",
    introDescription: "Steam On Wheels offers high-quality pressure washing, soft wash house cleaning, and roof restoration for residences, estates, and local businesses in Mount Mourne, NC, located between Mooresville and Davidson.",
    localCharacteristics: {
      headline: "Exterior Maintenance Across Mount Mourne Neighborhoods",
      points: [
        "Situated immediately adjacent to Lake Norman and major commuter routes, Mount Mourne properties experience a mix of lake humidity and road dust.",
        "Heavy tree cover in established Mount Mourne properties accelerates moss growth on shingles and slippery black mold on concrete driveways.",
        "Local homeowners trust our owner-operated service for meticulous attention to detail and zero high-pressure damage."
      ]
    },
    propertyTypesServed: [
      { title: "Residential Single-Family Homes", desc: "Annual siding soft washing, gutter face brightening, and driveway degreasing." },
      { title: "Estate Properties", desc: "Comprehensive cleaning for large concrete driveways, stone retaining walls, and outdoor patios." },
      { title: "Local Commercial Facilities", desc: "Storefront and concrete walkway maintenance along the Highway 115 corridor." }
    ],
    servicesOffered: [
      { title: "House Washing", href: "/services/house-washing", desc: "Gentle soft washing for vinyl, brick, and fiber cement siding." },
      { title: "Roof Cleaning", href: "/services/roof-cleaning", desc: "Eliminates black algae streaks without shingle granule loss." },
      { title: "Concrete Cleaning", href: "/services/concrete-cleaning", desc: "Restores bright, clean concrete surfaces on driveways and walkways." }
    ],
    localFaqs: [
      { q: "How close is your team to Mount Mourne?", a: "Our headquarters is right here in southern Iredell County, just minutes from Mount Mourne, allowing us to provide rapid scheduling and estimates." },
      { q: "Are you fully licensed and insured for Mount Mourne properties?", a: "Yes, Steam On Wheels carries complete $2,000,000 general liability insurance coverage." }
    ],
    neighboringCities: [
      { name: "Mooresville", href: "/service-areas/mooresville-nc" },
      { name: "Davidson", href: "/service-areas/davidson-nc" },
      { name: "Cornelius", href: "/service-areas/cornelius-nc" },
      { name: "Lake Norman", href: "/service-areas/lake-norman-nc" }
    ]
  }
};
