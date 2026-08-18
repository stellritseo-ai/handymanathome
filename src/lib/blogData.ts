import svcPressureWash from "@/assets/svc-pressure-wash.png";
import svcResidential from "@/assets/svc-residential.png";
import svcRoof from "@/assets/svc-roof.png";
import svcConcrete from "@/assets/svc-concrete.png";
import svcCommercial from "@/assets/svc-commercial.png";

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readTime: string;
  publishDate: string;
  modifiedDate: string;
  heroImage: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  contentSections: {
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
  keyTakeaways: string[];
  relatedServices: {
    title: string;
    href: string;
  }[];
  relatedCities: {
    name: string;
    href: string;
  }[];
}

export const blogPosts: Record<string, BlogPost> = {
  "how-often-to-pressure-wash-house-nc": {
    slug: "/blog/how-often-to-pressure-wash-house-nc",
    title: "How Often Should You Pressure Wash Your House in North Carolina?",
    metaTitle: "How Often to Pressure Wash a House in NC? | Lake Norman Cleaning Guide",
    metaDescription: "Learn how often to wash your home in Mooresville & Lake Norman NC. Discover the effects of NC humidity, pollen season & shade on exterior siding.",
    category: "Residential Maintenance",
    readTime: "5 min read",
    publishDate: "2026-06-15",
    modifiedDate: "2026-08-18",
    heroImage: svcResidential,
    excerpt: "North Carolina's climate presents unique exterior cleaning challenges. Discover why annual soft washing protects your siding, preserves curb appeal, and prevents permanent staining.",
    author: {
      name: "David Hudson",
      role: "Founder & Lead Technician, Steam On Wheels LLC"
    },
    keyTakeaways: [
      "Most North Carolina homes require professional soft house washing once every 12 months.",
      "Lakefront properties on Lake Norman often benefit from bi-annual washing due to morning moisture and spider webbing.",
      "The best time to wash is late spring immediately after heavy pine pollen settles (late April to early May).",
      "Soft washing kills organic spores at the root, lasting up to 4 times longer than high-pressure blasting."
    ],
    contentSections: [
      {
        heading: "The General Rule for North Carolina Homeowners",
        paragraphs: [
          "For the vast majority of homeowners in Mooresville, Cornelius, Huntersville, and throughout the Lake Norman area, having your house professionally washed once a year is the golden standard.",
          "North Carolina experiences high relative humidity from May through September, coupled with mild winters that allow mold and mildew to remain active nearly year-round. An annual wash removes harmful biological buildup before it permanently stains siding or damages exterior paint."
        ]
      },
      {
        heading: "Factors That May Require More Frequent Washing",
        paragraphs: [
          "While annual washing works for standard suburban properties, certain local environmental conditions dictate washing every 6 to 9 months:"
        ],
        bulletPoints: [
          "Lakefront Proximity: Homes directly on Lake Norman experience persistent morning mist and heavy aquatic insect activity, resulting in rapid spider web and green algae buildup.",
          "Dense Tree Canopy: Shaded north-facing walls in wooded subdivisions like Curtis Pond or Morrison Plantation retain dampness, accelerating moss and black mildew colonies.",
          "Spring Pine Pollen: The notorious North Carolina yellow pollen storm coats siding in a sticky organic dust that acts as fertile soil for mildew spores if not washed off in spring.",
          "HOA Cleanliness Mandates: Strict Lake Norman HOA communities issue rapid violation notices if green algae becomes visible from the street."
        ]
      },
      {
        heading: "Why Soft Washing Is Essential for Siding Longevity",
        paragraphs: [
          "Many homeowners mistakenly believe that house washing requires extreme high pressure. In reality, high-pressure water can crack vinyl siding, gouge fiber cement Hardie board, blast water behind laps, and strip exterior paint.",
          "At Steam On Wheels, we utilize low-pressure soft washing (<100 PSI) combined with specialized biodegradable cleansers. This sanitizes the siding down into the microscopic pores, eradicating spores at the cellular level so your home stays clean up to 4 times longer."
        ]
      }
    ],
    relatedServices: [
      { title: "Soft Wash House Washing", href: "/services/house-washing" },
      { title: "Roof Algae Cleaning", href: "/services/roof-cleaning" },
      { title: "Concrete Driveway Cleaning", href: "/services/concrete-cleaning" }
    ],
    relatedCities: [
      { name: "Mooresville, NC", href: "/service-areas/mooresville-nc" },
      { name: "Lake Norman, NC", href: "/service-areas/lake-norman-nc" },
      { name: "Cornelius, NC", href: "/service-areas/cornelius-nc" }
    ]
  },

  "pressure-washing-vs-soft-washing": {
    slug: "/blog/pressure-washing-vs-soft-washing",
    title: "Pressure Washing vs. Soft Washing: What's the Difference?",
    metaTitle: "Pressure Washing vs Soft Washing: What's the Difference? | Guide",
    metaDescription: "Understand the critical differences between high-pressure power washing and low-pressure soft washing. Learn which method is safe for your NC property.",
    category: "Technical Guide",
    readTime: "6 min read",
    publishDate: "2026-05-20",
    modifiedDate: "2026-08-18",
    heroImage: svcPressureWash,
    excerpt: "Using the wrong washing method can cause thousands of dollars in property damage. Discover when to use high-pressure washing and when soft washing is mandatory.",
    author: {
      name: "David Hudson",
      role: "Founder & Lead Technician, Steam On Wheels LLC"
    },
    keyTakeaways: [
      "Pressure washing uses high mechanical force (2,500 - 4,000 PSI) for dense hardscapes like concrete and brick.",
      "Soft washing uses low pressure (<100 PSI) and specialized biodegradable detergents for delicate roofs, siding, and stucco.",
      "High pressure on asphalt roofs strips protective granules and voids manufacturer warranties (ARMA guidelines).",
      "Soft washing chemically kills algae spores at the root, providing significantly longer-lasting results."
    ],
    contentSections: [
      {
        heading: "What Is Pressure Washing?",
        paragraphs: [
          "Pressure washing relies on mechanical force, spraying water at pressures between 2,500 and 4,000 PSI (pounds per square inch). It is engineered for tough, non-porous or heavy-duty surfaces that can withstand intense impact.",
          "When combined with hot water (power washing), it excels at lifting embedded motor oil, tire marks, chewing gum, and hardened industrial grease from concrete driveways, commercial dumpster pads, and parking structures."
        ]
      },
      {
        heading: "What Is Soft Washing?",
        paragraphs: [
          "Soft washing utilizes low pressure—comparable to the flow of a standard garden hose (under 100 PSI)—paired with specialized eco-friendly algaecides and foaming surfactants.",
          "Rather than blasting away surface debris mechanically, soft washing chemically dissolves organic contaminants like Gloeocapsa magma (black algae), mold, mildew, lichen, and pollen at the root level, followed by a gentle freshwater rinse."
        ]
      },
      {
        heading: "Surface Comparison: Which Method to Use Where",
        paragraphs: [
          "Choosing the correct technique depends entirely on the substrate material:"
        ],
        bulletPoints: [
          "Asphalt Shingle Roofs: ALWAYS Soft Wash (High pressure causes immediate granule loss and roof failure).",
          "Vinyl, Fiber Cement & Wood Siding: ALWAYS Soft Wash (Prevents cracked panels and water intrusion).",
          "Stucco & EIFS: ALWAYS Soft Wash (High pressure will gouge and pit the soft textured surface).",
          "Poured Concrete Driveways & Sidewalks: Pressure Wash with Rotary Cleaners.",
          "Commercial Dumpster Pads & Loading Docks: Hot-Water High-Pressure Power Wash."
        ]
      }
    ],
    relatedServices: [
      { title: "Soft Washing Services", href: "/services/soft-washing" },
      { title: "High-Pressure Washing", href: "/services/pressure-washing" },
      { title: "Roof Washing", href: "/services/roof-cleaning" }
    ],
    relatedCities: [
      { name: "Mooresville, NC", href: "/service-areas/mooresville-nc" },
      { name: "Huntersville, NC", href: "/service-areas/huntersville-nc" },
      { name: "Davidson, NC", href: "/service-areas/davidson-nc" }
    ]
  },

  "how-to-remove-algae-roof-lake-norman": {
    slug: "/blog/how-to-remove-algae-roof-lake-norman",
    title: "How to Remove Black Streaks & Algae from Your Roof in Lake Norman, NC",
    metaTitle: "How to Remove Roof Black Streaks in Lake Norman NC | Algae Guide",
    metaDescription: "Learn what causes black roof streaks (Gloeocapsa magma) in North Carolina and how ARMA-approved soft wash roof cleaning safely eliminates them.",
    category: "Roof Care",
    readTime: "5 min read",
    publishDate: "2026-06-01",
    modifiedDate: "2026-08-18",
    heroImage: svcRoof,
    excerpt: "Those dark streaks on your shingles are living cyanobacteria feeding on your roof. Learn how professional soft washing restores your roof without granule loss.",
    author: {
      name: "David Hudson",
      role: "Founder & Lead Technician, Steam On Wheels LLC"
    },
    keyTakeaways: [
      "Black roof streaks are Gloeocapsa magma cyanobacteria feeding on the limestone filler in asphalt shingles.",
      "Left untreated, algae creates a micro-environment for moss and lichen that lift shingles and cause leaks.",
      "High-pressure washing destroys shingle granules and voids manufacturer roof warranties.",
      "Soft wash roof cleaning is the only Asphalt Roofing Manufacturers Association (ARMA) approved method."
    ],
    contentSections: [
      {
        heading: "What Are the Black Streaks on Lake Norman Roofs?",
        paragraphs: [
          "If your roof has dark vertical stains, you are not looking at dirt or soot. You are looking at Gloeocapsa magma—an airborne cyanobacteria that thrives in warm, humid climates like North Carolina.",
          "These bacteria feed on the calcium carbonate (limestone filler) commonly used in modern fiberglass asphalt shingles. As the bacteria colony grows, it creates a dark pigmented sheath to shield itself from ultraviolet rays, producing the conspicuous black streaks."
        ]
      },
      {
        heading: "The Hidden Costs of Uncleaned Roof Algae",
        paragraphs: [
          "Beyond destroying your home's curb appeal, black algae causes serious secondary problems:"
        ],
        bulletPoints: [
          "Increased Cooling Bills: The dark stains absorb excessive solar heat, raising attic temperatures and overworking air conditioners during humid Carolina summers.",
          "Moss & Lichen Development: Algae retains moisture, allowing moss to take root under shingle edges. During winter freezes, frozen moss roots lift shingles, leading to roof leaks.",
          "Shortened Roof Lifespan: Bacterial digestion of limestone granules accelerates shingle brittleness and premature roof replacement costs."
        ]
      },
      {
        heading: "The Safe Solution: ARMA-Compliant Soft Wash Roof Cleaning",
        paragraphs: [
          "The Asphalt Roofing Manufacturers Association (ARMA) explicitly warns property owners never to use high-pressure equipment on asphalt roofs.",
          "At Steam On Wheels, we apply manufacturer-recommended algaecides under low pressure (<60 PSI). The chemical reaction immediately neutralizes the bacteria down to the root. Dead algae rinses away cleanly with subsequent rainfalls, restoring shingle brightness and protecting your roof for 3 to 5 years."
        ]
      }
    ],
    relatedServices: [
      { title: "Shingle-Safe Roof Cleaning", href: "/services/roof-cleaning" },
      { title: "Soft Wash House Washing", href: "/services/house-washing" },
      { title: "24/7 Emergency Service", href: "/services/emergency-service" }
    ],
    relatedCities: [
      { name: "Lake Norman, NC", href: "/service-areas/lake-norman-nc" },
      { name: "Mooresville, NC", href: "/service-areas/mooresville-nc" },
      { name: "Sherrills Ford, NC", href: "/service-areas/sherrills-ford-nc" }
    ]
  },

  "how-to-clean-concrete-driveway-nc-clay": {
    slug: "/blog/how-to-clean-concrete-driveway-nc-clay",
    title: "How to Remove Red Clay & Oil Stains from Concrete Driveways in NC",
    metaTitle: "How to Clean NC Red Clay & Oil Stains from Concrete Driveways",
    metaDescription: "Step-by-step guide to removing stubborn North Carolina red clay and motor oil stains from concrete driveways using commercial degreasers and rotary surface washing.",
    category: "Driveway Care",
    readTime: "5 min read",
    publishDate: "2026-07-10",
    modifiedDate: "2026-08-18",
    heroImage: svcConcrete,
    excerpt: "North Carolina red clay contains iron oxide that chemically stains porous concrete. Discover how professional pressure washing and targeted chemical cleaners remove it.",
    author: {
      name: "David Hudson",
      role: "Founder & Lead Technician, Steam On Wheels LLC"
    },
    keyTakeaways: [
      "Carolina red clay stains are caused by iron oxide and require specialized acidic reduction treatments.",
      "High-pressure wanding alone can etch concrete and push red clay deeper into pores.",
      "Motor oil stains require alkaline enzymatic degreasers combined with hot water power washing.",
      "Commercial rotary surface cleaners ensure a completely uniform, stripe-free concrete finish."
    ],
    contentSections: [
      {
        heading: "Why Carolina Red Clay Is So Hard to Clean",
        paragraphs: [
          "North Carolina's native red clay soil is packed with iron oxide (rust). When clay mud is tracked onto porous concrete driveways and walkways, it doesn't just sit on the surface—it chemically bonds with the calcium silicate hydrate in concrete.",
          "Rinsing with a garden hose or standard cold-water pressure washer only removes the top dirt layer, leaving deep orange-red shadows behind."
        ]
      },
      {
        heading: "The Professional Method for Removing Red Clay",
        paragraphs: [
          "To eradicate red clay stains, professional exterior cleaners use specialized mild acidic cleaners (oxalic or phosphoric acid formulations) that reduce the iron oxide back into a soluble, colorless form that can be rinsed away completely.",
          "Combined with dual-nozzle commercial rotary surface cleaners, this process restores the concrete's original bright white-gray appearance without etching the top cream layer."
        ]
      },
      {
        heading: "Lifting Vehicle Motor Oil and Grease",
        paragraphs: [
          "For oil drips, transmission fluid, and coolant stains, our hot-water power washing trailers heat water up to 200°F. High heat emulsifies the petroleum grease, while concentrated alkaline degreasers break the hydrocarbon bonds, allowing the oil to be extracted from the pores."
        ]
      }
    ],
    relatedServices: [
      { title: "Driveway Cleaning Services", href: "/services/driveway-cleaning" },
      { title: "Concrete Pressure Washing", href: "/services/concrete-cleaning" },
      { title: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing" }
    ],
    relatedCities: [
      { name: "Mooresville, NC", href: "/service-areas/mooresville-nc" },
      { name: "Troutman, NC", href: "/service-areas/troutman-nc" },
      { name: "Statesville, NC", href: "/service-areas/statesville-nc" }
    ]
  },

  "commercial-pressure-washing-lake-norman": {
    slug: "/blog/commercial-pressure-washing-lake-norman",
    title: "Commercial Pressure Washing: Why Lake Norman Businesses Need Regular Maintenance",
    metaTitle: "Commercial Pressure Washing Guide for Lake Norman Businesses",
    metaDescription: "Why commercial exterior pressure washing in Mooresville & Lake Norman NC protects business reputation, satisfies safety codes & prevents slip-and-fall liabilities.",
    category: "Commercial Property",
    readTime: "6 min read",
    publishDate: "2026-07-25",
    modifiedDate: "2026-08-18",
    heroImage: svcCommercial,
    excerpt: "From retail storefronts to logistics distribution hubs, exterior cleanliness drives foot traffic and ensures safety compliance. Explore commercial power washing best practices.",
    author: {
      name: "David Hudson",
      role: "Founder & Lead Technician, Steam On Wheels LLC"
    },
    keyTakeaways: [
      "First impressions matter: 95% of consumers report exterior appearance affects where they choose to shop.",
      "Regular dumpster pad sanitization prevents municipal health code violations and pest infestations.",
      "Removing slippery algae and grease from commercial walkways prevents expensive slip-and-fall liability claims.",
      "Flexible 24/7 off-hours scheduling ensures zero disruption to customers or tenant business operations."
    ],
    contentSections: [
      {
        heading: "The Business Case for Commercial Exterior Cleanliness",
        paragraphs: [
          "In competitive commercial centers like Mooresville, Huntersville, and Cornelius, the exterior condition of your property sets customer expectations before they ever walk through the front door.",
          "Chewing gum on sidewalks, black grease spills outside restaurant kitchens, and stained building facades create an unkempt impression that directly impacts revenue and commercial tenant retention."
        ]
      },
      {
        heading: "Critical Commercial Focus Areas",
        paragraphs: [
          "High-traffic commercial properties require targeted maintenance across specific zones:"
        ],
        bulletPoints: [
          "Storefront Entryways: Regular gum removal, drink spill extraction, and window surround brightening.",
          "Dumpster Enclosures: 200°F hot-water power washing to eliminate rodent attractants and rancid grease odors.",
          "Drive-Thru Lanes: Heavy chemical degreasing of transmission fluid and motor oil drips from idling cars.",
          "Parking Structures & Lots: Oil slick remediation to prevent slip-and-fall liability claims and preserve asphalt sealers."
        ]
      },
      {
        heading: "Working with a Fully Insured, 24/7 Commercial Vendor",
        paragraphs: [
          "Commercial property managers need reliable vendors who carry comprehensive general liability insurance ($2M+) and offer overnight dispatch.",
          "Steam On Wheels provides flexible after-hours and weekend service, allowing businesses to maintain immaculate exterior standards without interrupting customer traffic or employee parking."
        ]
      }
    ],
    relatedServices: [
      { title: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing" },
      { title: "24/7 Emergency Service", href: "/services/emergency-service" },
      { title: "Concrete Cleaning", href: "/services/concrete-cleaning" }
    ],
    relatedCities: [
      { name: "Mooresville, NC", href: "/service-areas/mooresville-nc" },
      { name: "Huntersville, NC", href: "/service-areas/huntersville-nc" },
      { name: "Statesville, NC", href: "/service-areas/statesville-nc" }
    ]
  }
};
