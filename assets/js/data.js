/**
 * Real Carpets India - Official B2B Data Store
 * Primary source of truth: "Company Profile_Real Carpets India (2).pdf"
 * Language: Indian-British English throughout
 */

export const COMPANY_PROFILE = {
  name: "Real Carpets India",
  formerName: "Real Carpets",
  foundedYear: 1995,
  originStory: "Started our journey in 1995 as a supplier of hand-tufted carpets to various exporters in and around Panipat, Haryana. We established ourselves as a prestigious supplier by maintaining a 0% rejection record. In 2012, we gained direct international success by signing our first overseas contract with an Australia-based customer, subsequently expanding our customer base and product range globally.",
  tagline: "Rugs & Carpets Manufacturing House",
  subTagline: "Indian Manufacturing | International B2B Supply | Custom Development",
  headlineIntro: "Built around rugs. Developed for global markets.",
  mission: "Empowering products with our mission to excel in quality, creativity, and sustainability. Our dedication to crafting high-integrity floor coverings, coupled with innovative design, fuels our mission to deliver genuine value to our global buyers. We are committed to reducing our environmental footprint, embracing ethical practices, and fostering continuous improvement.",
  vision: "Right product, at the right price, at the right place, at the right time. Our vision is to weave a sustainable and vibrant future through modern manufacturing technology and time-honoured artistry, where every thread reflects responsible production and enduring craft.",
  capacity: {
    monthlyContainers: 15,
    unit: "Containers per month",
    fclPercent: 60,
    lclPercent: 40,
    inHouseRatio: "90% to 95%",
    qualityStandard: "ISO 9001:2015",
    inspectionModel: "AQL Statistical Process Control & 100% Daylight Audit"
  },
  infrastructure: {
    description: "Spread over an extensive industrial footprint in Panipat, Haryana, housing all critical production departments under one roof to maintain seamless oversight, cost efficiency, and speed of delivery.",
    facilities: [
      { id: "admin", title: "Administrative & Merchandising Division", desc: "Dedicated commercial, international logistics, and client communication departments." },
      { id: "sheds", title: "Dedicated Weaving & Tufting Sheds", desc: "Vast climate-optimised work areas for hand-tufting, hand-weaving, panja kilims, and machine tufting." },
      { id: "godowns", title: "Raw Material & Yarn Godowns", desc: "Controlled warehousing for pure New Zealand and Bikaner wool, combed Indian cotton, jute, and linen." },
      { id: "quarters", title: "Artisan & Labour Quarters", desc: "Safe, dignified on-site residential facilities ensuring ethical labour standards and social welfare." },
      { id: "qc", title: "Quality Control & Testing Laboratory", desc: "In-house lab equipped for colourfastness, yarn tensile strength, AQL audit, and metal detection." },
      { id: "finishing", title: "Finishing & Packaging Facility", desc: "Hotmelt latex backing, hand-carving, beveling, heavy-duty moisture-proof baling, and container stuffing bays." }
    ]
  },
  contact: {
    address: "Plot No. 891, Sector-08, HUDA, Panipat 132103, Haryana, India",
    primaryEmail: "sunil@realcarpetsindia.com",
    secondaryEmail: "realcarpetsindia@gmail.com",
    telephone: "+91-97296-84321",
    website: "www.realcarpetsindia.com",
    coordinates: "Panipat, Haryana (India's premier textile manufacturing hub)"
  },
  historicalGrowth: [
    { period: "2015–2016", growth: "1.4%" },
    { period: "2016–2017", growth: "4.9%" },
    { period: "2017–2018", growth: "9.6%" },
    { period: "2018–2019", growth: "6.2%" },
    { period: "2019–2020", growth: "9.7%" },
    { period: "2020–2021", growth: "23.3%" },
    { period: "2021–2022", growth: "39.1%" },
    { period: "2022–2023", growth: "35.7%" }
  ]
};

export const GLOBAL_MARKETS = [
  {
    code: "AU",
    name: "Australia",
    milestone: "First Direct International Export Contract (2012)",
    ports: ["Sydney", "Melbourne", "Fremantle", "Brisbane"],
    leadTimeFCL: "22–26 Days",
    focus: "Fine wool area rugs, coastal braided jute runners, bespoke designer programmes",
    badge: "Founding Overseas Market"
  },
  {
    code: "US",
    name: "United States",
    milestone: "Established Retail Chains & Hospitality Sourcing",
    ports: ["New York / New Jersey", "Savannah", "Long Beach", "Los Angeles"],
    leadTimeFCL: "28–35 Days",
    focus: "Hand-tufted custom rugs, luxury bathrug collections, accent poufs & storage",
    badge: "Major Volume Market"
  },
  {
    code: "CA",
    name: "Canada",
    milestone: "Home Furnishing & Décor Importers",
    ports: ["Montreal", "Vancouver", "Halifax"],
    leadTimeFCL: "30–36 Days",
    focus: "Heavyweight wool rugs, textured throws, anti-skid cotton bathmats",
    badge: "Direct Importers"
  },
  {
    code: "EU",
    name: "Europe",
    milestone: "DOMOTEX Hannover & Continental Network",
    ports: ["Rotterdam", "Hamburg", "Antwerp", "Felixstowe"],
    leadTimeFCL: "24–30 Days",
    focus: "OEKO-TEX & GOTS certified organic collections, flatwoven kilims, architectural tapestries",
    badge: "Design & Eco-Certified"
  },
  {
    code: "BR",
    name: "Brazil",
    milestone: "Latin American Commercial Distribution",
    ports: ["Santos", "Paranaguá"],
    leadTimeFCL: "32–38 Days",
    focus: "Textured floor cushions, combed cotton bathrugs, braided jute accents",
    badge: "Growing Trade Corridor"
  },
  {
    code: "ZA",
    name: "South Africa",
    milestone: "Boutique Hospitality & Interior Wholesale",
    ports: ["Durban", "Cape Town"],
    leadTimeFCL: "18–22 Days",
    focus: "Handwoven tribal motifs, artisanal wool throws, upholstered footstools",
    badge: "Hospitality & Retail"
  }
];

export const CERTIFICATIONS = [
  {
    id: "sedex",
    name: "Sedex SMETA 6.1",
    authority: "Sedex Members Ethical Trade Audit",
    scope: "Social & Ethical Compliance Audit",
    desc: "Independent third-party audit verifying ethical labour standards, occupational health & safety, environmental stewardship, and fair wages across our manufacturing unit.",
    badge: "Socially Audited",
    image: "assets/images/certifications/cert_sedex_smeta.jpg"
  },
  {
    id: "oeko-tex",
    name: "OEKO-TEX Standard 100",
    authority: "International Association for Research and Testing in Textile Ecology",
    scope: "Chemical Safety & Ecological Testing",
    desc: "Demonstrates that our tested textile articles are completely free from harmful levels of over 100 regulated and non-regulated substances, safe for skin contact and nursery use.",
    badge: "Confidence in Textiles",
    image: "assets/images/certifications/cert_oeko_tex.jpg"
  },
  {
    id: "iso9001",
    name: "ISO 9001:2015",
    authority: "Universal Accreditation Foundation (UAF) Registration",
    scope: "Quality Management System",
    desc: "Certified quality management standard for the manufacture and export of rugs, carpets, bathmats, and home textile made-ups under systematic process controls.",
    badge: "Certified System",
    image: "assets/images/certifications/cert_iso_9001.jpg"
  },
  {
    id: "grs",
    name: "Global Recycled Standard (GRS)",
    authority: "Textile Exchange Scope Certification",
    scope: "Recycled Content & Social Accountability",
    desc: "Verifies the presence and percentage of recycled inputs (recycled PET yarn and regenerated cotton) alongside stringent chain of custody tracking.",
    badge: "Recycled Certified",
    image: "assets/images/certifications/cert_grs.jpg"
  },
  {
    id: "gots",
    name: "Global Organic Textile Standard (GOTS)",
    authority: "Textile Exchange / GOTS International Working Group",
    scope: "Organic Fibre Processing",
    desc: "Certifies organic status of natural fibres from harvesting of raw materials through environmentally and socially responsible processing.",
    badge: "Organic Certified",
    image: "assets/images/certifications/cert_gots.jpg"
  },
  {
    id: "rws",
    name: "Responsible Wool Standard (RWS)",
    authority: "Textile Exchange Scope Certification",
    scope: "Animal Welfare & Land Health",
    desc: "Ensures sheep wool comes from certified farms that respect the Five Freedoms of animal welfare and progressive land management practices.",
    badge: "Ethical Wool",
    image: "assets/images/certifications/cert_rws.jpg"
  },
  {
    id: "dgft",
    name: "Government of India Recognised Exporter",
    authority: "Ministry of Commerce & Industry, Government of India",
    scope: "Official Export Enterprise Registration",
    desc: "Official Certificate of Importer-Exporter Code (IEC) and registered manufacturer-exporter status validating compliant global commercial transactions.",
    badge: "Statutory Enterprise",
    image: "assets/images/certifications/cert_gov_india.jpg"
  }
];

export const MANUFACTURING_PROCESS = [
  {
    step: 1,
    title: "Raw Material Sourcing",
    category: "Fibre Preparation",
    desc: "Carefully procured from reputed spinning mills across key textile belts. Raw wool, combed cotton, unrefined jute, and engineered fibres undergo initial grading.",
    detail: "We source New Zealand blend wool for resilient softness, indigenous Bikaner wool for structural lustre, and 100% long-staple Indian combed cotton."
  },
  {
    step: 2,
    title: "Yarn Dyeing",
    category: "Colouration",
    desc: "Eco-friendly, azo-free hank and cone dyeing calibrated against international Pantone and colour standards with spectrophotometer validation.",
    detail: "Closed-loop temperature-controlled dyeing vessels guarantee exact batch-to-batch colour matching, superior light fastness, and zero hazardous run-off."
  },
  {
    step: 3,
    title: "Warping",
    category: "Weaving Prep",
    desc: "Precision mechanical and artisanal alignment of longitudinal warp yarns under uniform tension to form the structural foundation of each loom.",
    detail: "Proper warp tensioning prevents bowing, skewing, and edge-curling across both broadloom setups and portable panja frames."
  },
  {
    step: 4,
    title: "Charkha Spinning",
    category: "Artisanal Preparation",
    desc: "Traditional manual charkha spinning creating unique slub yarns, artisanal twists, and organic textures unattainable through mass mechanical spinning.",
    detail: "Preserves heritage handcraft techniques while infusing bespoke character into premium rug collections and textured throws."
  },
  {
    step: 5,
    title: "Woven & Weaving Process",
    category: "Crafting",
    desc: "Master weavers operate pit-looms, frame looms, and panja setups to interlock warp and weft into tight, high-durability flatweaves.",
    detail: "Our artisans execute intricate geometric kilims, herringbone textures, and durable dhurries with high knot/weft density."
  },
  {
    step: 6,
    title: "Machine-Cut & Sewing",
    category: "Fabrication",
    desc: "Automated precision shearing, dimensional pattern cutting, edge surging, and heavy-gauge industrial sewing for made-ups and borders.",
    detail: "Ensures square borders, clean mitred corners, and reinforced seam integrity across cushions, bathmats, and storage baskets."
  },
  {
    step: 7,
    title: "Machine-Tufting",
    category: "Tufting",
    desc: "Modern multi-needle tufting machinery producing uniform loop and cut-pile constructions for scalable, volume-driven commercial programmes.",
    detail: "Allows rapid production of contract-grade bathmats and consistent baseline residential carpeting with tight quality tolerances."
  },
  {
    step: 8,
    title: "Hand-Tufting",
    category: "Tufting",
    desc: "Skilled artisans operate handheld electric and pneumatic tufting guns on vertical stretched canvas frames tracing CAD technical artwork.",
    detail: "Facilitates multi-level textures, varied pile heights (10mm to 25mm), and intricate multi-colour organic designs."
  },
  {
    step: 9,
    title: "Hand-Finishing & Carving",
    category: "Finishing",
    desc: "Meticulous artisan hand-shearing, pile leveling, dimensional groove-carving, edge binding, and tassel hand-braiding.",
    detail: "Hand-carving accentuates floral reliefs and geometric boundaries, elevating tufted rugs into three-dimensional floor art."
  },
  {
    step: 10,
    title: "First-Stage Packing",
    category: "Packaging",
    desc: "Clean rolling or folding with inner moisture-absorbing kraft liners, edge corner protectors, and clear identification barcode tags.",
    detail: "Protects pristine textile pile surfaces immediately following finishing line approval."
  },
  {
    step: 11,
    title: "AQL Statistical Process",
    category: "Quality Assurance",
    desc: "Acceptable Quality Limit (AQL Level II standard) sampling protocol auditing structural density, dimensional tolerances, and shade variance.",
    detail: "Rejection parameters are rigorously mapped against agreed buyer specifications before release to final inspection."
  },
  {
    step: 12,
    title: "Daylight Surface Inspection",
    category: "Quality Assurance",
    desc: "100% individual surface examination under calibrated artificial daylight overhead gantries to detect any skipped tufts, knots, or loose threads.",
    detail: "Every single square metre is checked by senior QC inspectors who have been with Real Carpets India for over a decade."
  },
  {
    step: 13,
    title: "Final Export Packing",
    category: "Packaging",
    desc: "Heavy-gauge waterproof poly-tubing sealed with tamper-evident heat welds, wrapped in woven polypropylene outer bales.",
    detail: "Customised with private-label retail hangtags, EAN barcodes, care labels, and master shipping carton markings."
  },
  {
    step: 14,
    title: "Metal Detector Checking",
    category: "Safety & Compliance",
    desc: "High-sensitivity conveyor-type industrial metal detector gate scanning every carpet, rug, and made-up article before baling.",
    detail: "Crucial international safety check guaranteeing zero broken tufting needles, staples, or metal fragments in client shipments."
  },
  {
    step: 15,
    title: "Container Stuffing",
    category: "Logistics",
    desc: "Careful volumetric stuffing at our dedicated Panipat loading bays, utilizing cargo nets, air bags, and industrial desiccants.",
    detail: "Handled directly by our logistics team to eliminate transit abrasion and moisture accumulation during ocean voyages."
  },
  {
    step: 16,
    title: "Hotmelt-Latex Application",
    category: "Structural Bonding",
    desc: "Even vulcanised latex application bonding primary and secondary backings (cotton duck or non-woven scrim) for permanent dimensional lock.",
    detail: "Provides flexible, odourless, and non-crumbly backing that stands up to heavy international domestic and hospitality foot traffic."
  },
  {
    step: 17,
    title: "Testing Laboratory & Dispatch",
    category: "Dispatch",
    desc: "Pre-shipment laboratory archive retention, documentation clearance, and expedited haulage to Mundra, Nhava Sheva, or ICD Delhi ports.",
    detail: "Complete Bill of Lading, Certificate of Origin, and packing list dossier issued in direct synchronisation with overseas consignees."
  }
];

export const MANUFACTURING_TECHNIQUES = [
  {
    id: "hand-tufted",
    name: "Hand-Tufted",
    desc: "Artisan-guided tufting guns shooting yarn through primary backing. Ideal for luxurious pile heights, sculpted reliefs, and vibrant multi-colour designs.",
    image: "assets/images/crafts/craft_hand_tufted.jpg"
  },
  {
    id: "hand-woven",
    name: "Hand-Woven",
    desc: "Flatwoven interlocking warp and weft crafted on generational pit-looms. Reversible, highly durable, and naturally textural.",
    image: "assets/images/crafts/craft_hand_woven.jpg"
  },
  {
    id: "hand-knitted",
    name: "Hand-Knitted",
    desc: "Heavy-gauge artisan hand-knitting creating chunky cable-knit poufs, structural floor cushions, and tactile throws.",
    image: "assets/images/crafts/craft_hand_knitted.jpg"
  },
  {
    id: "braided",
    name: "Braided",
    desc: "Continuous braided coils of natural jute, cotton cord, or recycled fibres sewn together into organic circular and oval mats or baskets.",
    image: "assets/images/crafts/craft_braided.jpg"
  },
  {
    id: "panja-kilim",
    name: "Panja / Kilim",
    desc: "Traditional heavy iron claw (panja) beating weft yarns tight over cotton warp cords, creating authentic artisanal tribal patterns.",
    image: "assets/images/crafts/craft_panja_kilim.jpg"
  },
  {
    id: "hand-hooked",
    name: "Hand-Hooked",
    desc: "Loop pile technique pulling yarns through backing using a hooked needle tool. Produces firm, dense, pebble-textured surface aesthetics.",
    image: "assets/images/crafts/craft_hand_hooked.jpg"
  },
  {
    id: "hand-knotted",
    name: "Hand-Knotted",
    desc: "The ultimate pinnacle of carpet craftsmanship. Individual knots hand-tied row by row, resulting in lifetime heirlooms.",
    image: "assets/images/crafts/craft_hand_knotted.jpg"
  },
  {
    id: "machine-tufted",
    name: "Machine-Tufted",
    desc: "High-speed precision multi-needle tufting for consistent bathmat runs and commercial residential floor coverings at high volume.",
    image: "assets/images/crafts/craft_table_tufted.jpg"
  },
  {
    id: "printed",
    name: "Printed",
    desc: "High-definition screen and digital pigment printing on woven canvas or cotton velour bases for intricate repeat patterns and custom art.",
    image: "assets/images/crafts/craft_printed.jpg"
  }
];

export const PRODUCTS = [
  // 1. Rugs & Carpets
  {
    id: "RCI-RUG-01",
    name: "Expressionist Abstract Tufted Rug",
    category: "Rugs",
    subCategory: "Hand-Tufted",
    code: "RCI-HT-801",
    construction: "Hand-Tufted Cut Pile",
    material: "80% New Zealand Blend Wool, 20% Cotton Warp",
    pileHeight: "14 mm",
    backing: "100% Cotton Canvas with Natural Latex Compound",
    sizes: ["120 x 180 cm", "160 x 230 cm", "200 x 300 cm", "Custom B2B Sizes Available"],
    colours: ["Multi-colour Ochre, Emerald, Teal & Terracotta"],
    moq: "50 sq. metres / design",
    leadTime: "30–45 Days (Bulk)",
    applications: "High-End Residential Living, Boutique Hotel Lobbies, Creative Studios",
    customOptions: "Custom colourways, bespoke dimensions, sculpted beveling",
    certifications: ["ISO 9001:2015", "OEKO-TEX Standard 100"],
    image: "assets/images/products/rug_tufted_abstract.jpg",
    featured: true
  },
  {
    id: "RCI-RUG-02",
    name: "Heritage Floral Medallion Rug",
    category: "Rugs",
    subCategory: "Hand-Tufted",
    code: "RCI-HT-802",
    construction: "Hand-Tufted with Detailed Relief Carving",
    material: "100% Fine Indian Wool with Viscose Silk Accents",
    pileHeight: "12 mm with 8 mm carved ground",
    backing: "Cotton Canvas Backing with Odourless Latex",
    sizes: ["150 x 240 cm", "180 x 270 cm", "240 x 340 cm"],
    colours: ["Ivory Ground with Coral, Terracotta & Moss Green"],
    moq: "30 sq. metres",
    leadTime: "35–50 Days",
    applications: "Formal Living Rooms, Luxury Hospitality Suites, Heritage Properties",
    customOptions: "Custom scale, border modifications, private label branding",
    certifications: ["ISO 9001:2015", "Sedex SMETA 6.1"],
    image: "assets/images/products/rug_tufted_floral.jpg",
    featured: true
  },
  {
    id: "RCI-RUG-03",
    name: "Sculpted Chevron Dual-Tone Rug",
    category: "Rugs",
    subCategory: "Hand-Tufted",
    code: "RCI-HT-803",
    construction: "Hand-Tufted Cut & Loop Geometry",
    material: "100% Indigenous Bikaner Wool",
    pileHeight: "16 mm Cut / 10 mm Loop",
    backing: "Reinforced Cotton Duck Backing",
    sizes: ["140 x 200 cm", "160 x 230 cm", "200 x 290 cm"],
    colours: ["Warm Sand, Sage Olive & Natural Cream"],
    moq: "50 sq. metres",
    leadTime: "28–42 Days",
    applications: "Contemporary Interiors, Corporate Executive Suites, Master Bedrooms",
    customOptions: "Custom chevron angles, tone-on-tone palette adaptations",
    certifications: ["ISO 9001:2015", "RWS Responsible Wool"],
    image: "assets/images/products/rug_tufted_chevron.jpg",
    featured: false
  },
  {
    id: "RCI-RUG-04",
    name: "Savannah Safari Illustrated Rug",
    category: "Rugs",
    subCategory: "Hand-Tufted",
    code: "RCI-HT-804",
    construction: "Hand-Tufted Hypoallergenic Plush Pile",
    material: "100% Combed Indian Cotton & Soft Wool Blend",
    pileHeight: "14 mm",
    backing: "Anti-Skid Cotton Scrim with Non-Toxic Latex",
    sizes: ["120 x 180 cm", "140 x 200 cm"],
    colours: ["Sky Blue, Lion Ochre, Palm Green & Terracotta"],
    moq: "60 sq. metres",
    leadTime: "25–40 Days",
    applications: "Children's Nursery, Junior Playrooms, Daycare Centres",
    customOptions: "Novelty silhouettes, bespoke animal characters",
    certifications: ["OEKO-TEX Standard 100 (Baby Class)", "ISO 9001:2015"],
    image: "assets/images/products/rug_tufted_kids.jpg",
    featured: false
  },
  {
    id: "RCI-RUG-05",
    name: "Monochrome Geometric Wool Kilim",
    category: "Rugs",
    subCategory: "Hand-Woven",
    code: "RCI-HW-701",
    construction: "Hand-Woven Reversible Panja Kilim",
    material: "100% Pure Wool Weft on Heavy Cotton Warp",
    pileHeight: "Zero-Pile Flatweave (Approx. 6 mm thickness)",
    backing: "Reversible (Dual-sided identical finish)",
    sizes: ["120 x 180 cm", "170 x 240 cm", "200 x 300 cm", "Runners: 75 x 300 cm"],
    colours: ["Natural Undyed Charcoal & Cream"],
    moq: "40 sq. metres",
    leadTime: "25–35 Days",
    applications: "Dining Rooms, High-Traffic Corridors, Modernist Architecture",
    customOptions: "Bespoke pattern repeat, runner custom lengths",
    certifications: ["GOTS Certified Wool", "ISO 9001:2015"],
    image: "assets/images/products/rug_woven_monochrome.jpg",
    featured: true
  },
  {
    id: "RCI-RUG-06",
    name: "Braided Jute & Charcoal Border Runner",
    category: "Rugs",
    subCategory: "Hand-Woven",
    code: "RCI-HW-702",
    construction: "Braided Natural Jute with Yarn-Dyed Border",
    material: "100% Golden Indian Tossa Jute with Cotton Core",
    pileHeight: "8 mm Braided Flat",
    backing: "Natural Jute (Non-backed)",
    sizes: ["80 x 200 cm", "80 x 250 cm", "80 x 300 cm", "Oval: 120 x 180 cm"],
    colours: ["Natural Raw Jute with Solid Charcoal Inset Line"],
    moq: "100 linear metres",
    leadTime: "20–30 Days",
    applications: "Hallways, Coastal Villas, Boutique Retail Entrances",
    customOptions: "Custom border colours (Navy, Olive, Terracotta)",
    certifications: ["ISO 9001:2015", "Sedex SMETA 6.1"],
    image: "assets/images/products/rug_woven_jute_runner.jpg",
    featured: false
  },
  {
    id: "RCI-RUG-07",
    name: "Nordic Minimalist Striped Fringe Rug",
    category: "Rugs",
    subCategory: "Hand-Woven",
    code: "RCI-HW-703",
    construction: "Hand-Loomed Textured Flatweave with Knotted Tassels",
    material: "70% Wool, 30% Cotton Slub",
    pileHeight: "7 mm",
    backing: "Reversible",
    sizes: ["140 x 200 cm", "160 x 230 cm", "200 x 300 cm"],
    colours: ["Cream White with Off-Black Architectural Pinstripes"],
    moq: "50 sq. metres",
    leadTime: "28–38 Days",
    applications: "Scandinavian Interiors, Minimalist Homes, Coffee Shops",
    customOptions: "Tassel length, stripe frequency, custom sizes",
    certifications: ["ISO 9001:2015"],
    image: "assets/images/products/rug_woven_striped_fringe.jpg",
    featured: false
  },
  {
    id: "RCI-RUG-08",
    name: "Tribal Diamond Heritage Flatweave",
    category: "Rugs",
    subCategory: "Hand-Woven",
    code: "RCI-HW-704",
    construction: "Dense Panja Weave with Multi-Colour Inlay",
    material: "100% Semi-Worsted Wool Weft",
    pileHeight: "Zero-Pile Flatweave",
    backing: "Reversible",
    sizes: ["120 x 180 cm", "150 x 240 cm", "180 x 270 cm"],
    colours: ["Terracotta, Ochre, Washed Indigo & Slate"],
    moq: "40 sq. metres",
    leadTime: "30–45 Days",
    applications: "Boho Chic Spaces, Boutique Hotel Guestrooms, Sunrooms",
    customOptions: "Custom motif scale, vegetable-dye variations",
    certifications: ["ISO 9001:2015", "Sedex SMETA 6.1"],
    image: "assets/images/products/rug_woven_tribal_flatweave.jpg",
    featured: false
  },

  // 2. Bathrugs & Bathmats
  {
    id: "RCI-BAT-01",
    name: "Classic Dual-Tone Border Cotton Bathrug",
    category: "Bathmats",
    subCategory: "Cotton Bathrugs",
    code: "RCI-BM-501",
    construction: "Tufted High-Low Plush Border",
    material: "100% Combed Indian Cotton (1800 GSM)",
    pileHeight: "18 mm Border / 12 mm Field",
    backing: "Spray Latex Anti-Skid / Machine Wash Safe",
    sizes: ["50 x 80 cm", "60 x 100 cm", "Contour: 50 x 50 cm"],
    colours: ["Navy & Crisp White, Charcoal & White, Linen & Ecru"],
    moq: "200 pcs / colour",
    leadTime: "20–30 Days",
    applications: "Luxury Hospitality Bathrooms, Residential Master Baths, Spas",
    customOptions: "Custom pantone bath dyes, jacquard woven logos",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    image: "assets/images/products/bathmat_blue_border.jpg",
    featured: true
  },
  {
    id: "RCI-BAT-02",
    name: "Ultra-Absorbent Charcoal Microfibre Shag Mat",
    category: "Bathmats",
    subCategory: "Microfibre Bathmats",
    code: "RCI-BM-502",
    construction: "Machine-Tufted High-Pile Shag",
    material: "100% Soft Microfibre Polyester with Memory Foam Layer",
    pileHeight: "25 mm Shaggy Pile",
    backing: "Thermal TPR Textured Non-Slip Base",
    sizes: ["40 x 60 cm", "50 x 80 cm", "Runner: 50 x 120 cm"],
    colours: ["Graphite Charcoal, Silver Grey, Linen Beige"],
    moq: "300 pcs",
    leadTime: "20–30 Days",
    applications: "Modern Apartments, High-Turnover Hospitality, Shower Enclosures",
    customOptions: "Pile density (1400–2200 GSM), bespoke dye lot colours",
    certifications: ["ISO 9001:2015", "GRS Recycled Standard Available"],
    image: "assets/images/products/bathmat_charcoal_shaggy.jpg",
    featured: false
  },
  {
    id: "RCI-BAT-03",
    name: "Contoured Woodland Animal Die-Cut Bathmat",
    category: "Bathmats",
    subCategory: "Novelty Bathmats",
    code: "RCI-BM-503",
    construction: "Hand-Tufted Shaped Cotton Mat",
    material: "100% Ringspun Cotton",
    pileHeight: "15 mm Cut Pile",
    backing: "Natural Latex Slip-Resistant Coating",
    sizes: ["60 x 75 cm (Fox Contour)", "65 x 80 cm (Zebra Contour)"],
    colours: ["Fox Terracotta & Cream, Zebra Monochrome"],
    moq: "250 pcs / shape",
    leadTime: "25–35 Days",
    applications: "Children's Bathrooms, Boutique Nursery Ranges, Giftware",
    customOptions: "Custom die-cut silhouette shapes, bespoke character briefs",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    image: "assets/images/products/bathmat_novelty_fox_zebra.jpg",
    featured: false
  },
  {
    id: "RCI-BAT-04",
    name: "Textured Pastel Woven Bath & Door Mat Set",
    category: "Bathmats",
    subCategory: "Cotton Bathrugs",
    code: "RCI-BM-504",
    construction: "Dobby Woven Ribbed Rib-Texture",
    material: "85% Cotton, 15% Recycled Polyester (1400 GSM)",
    pileHeight: "10 mm Ribbed",
    backing: "Self-Backing / Reversible or Light Latex",
    sizes: ["50 x 80 cm", "60 x 90 cm"],
    colours: ["Powder Blue, Sage Green, Rose Dust & Soft Cream"],
    moq: "300 pcs",
    leadTime: "22–32 Days",
    applications: "Boutique Hotels, Airbnbs, Retail Department Stores",
    customOptions: "Custom border woven weaves, 2-piece set packaging",
    certifications: ["ISO 9001:2015", "Sedex SMETA 6.1"],
    image: "assets/images/products/bathmat_pastel_textures.jpg",
    featured: false
  },

  // 3. Made-Ups & Throws
  {
    id: "RCI-TH-01",
    name: "Ivory Popcorn Texture Fringe Throw",
    category: "Made-Ups",
    subCategory: "Throws & Blankets",
    code: "RCI-TH-401",
    construction: "Hand-Loomed Woven Texture with Pom-Pom Accents",
    material: "100% Slub Cotton with Hand-Tied Tassels",
    pileHeight: "Artisan Textured Weave",
    sizes: ["130 x 170 cm", "150 x 200 cm"],
    colours: ["Natural Unbleached Ivory"],
    moq: "100 pcs",
    leadTime: "20–30 Days",
    applications: "Sofa Throws, Bed Runners, Coastal Living Lounges",
    customOptions: "Bespoke dimensions, custom fringe styles, organic cotton",
    certifications: ["GOTS Scope Standard Available", "ISO 9001:2015"],
    image: "assets/images/products/throw_ivory_pompom.jpg",
    featured: true
  },
  {
    id: "RCI-TH-02",
    name: "Honeycomb Waffle Mustard Cotton Throw",
    category: "Made-Ups",
    subCategory: "Throws & Blankets",
    code: "RCI-TH-402",
    construction: "Deep Waffle Thermal Weave",
    material: "100% Yarn-Dyed Combed Cotton (450 GSM)",
    sizes: ["140 x 190 cm", "180 x 220 cm"],
    colours: ["Warm Mustard Ochre, Sage Olive, Terracotta"],
    moq: "120 pcs",
    leadTime: "20–28 Days",
    applications: "Bedding Accents, Hospitality Guest Suites, Lounge Throws",
    customOptions: "Enzyme washed for extra hand-softness, ribbon packaging",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    image: "assets/images/products/throw_mustard_waffle.jpg",
    featured: false
  },
  {
    id: "RCI-TH-03",
    name: "Terracotta Rust Bouclé Fringed Throw",
    category: "Made-Ups",
    subCategory: "Throws & Blankets",
    code: "RCI-TH-403",
    construction: "Textured Bouclé Handloom Weave",
    material: "60% Cotton, 40% Acrylic Bouclé Yarn",
    sizes: ["130 x 180 cm"],
    colours: ["Burnt Rust Terracotta with Eyelash Fringe"],
    moq: "150 pcs",
    leadTime: "22–32 Days",
    applications: "Autumn/Winter Living, Outdoor Firepits, Armchair Accents",
    customOptions: "Custom mineral dye palettes, individual polybag with retail hanger",
    certifications: ["ISO 9001:2015"],
    image: "assets/images/products/throw_terracotta_fringe.jpg",
    featured: false
  },
  {
    id: "RCI-TH-04",
    name: "Autumn Earth Palette Coordinated Throw Assortment",
    category: "Made-Ups",
    subCategory: "Throws & Blankets",
    code: "RCI-TH-404",
    construction: "Handcrafted Multi-Ply Slub Weaving",
    material: "100% Pre-Washed Indian Cotton",
    sizes: ["130 x 170 cm"],
    colours: ["Set of 4: Cream, Sage, Warm Ochre & Rust"],
    moq: "200 pcs (Assorted)",
    leadTime: "25–35 Days",
    applications: "Seasonal Retail Collections, Coordinated Showrooms",
    customOptions: "Customised palette curation for home brands",
    certifications: ["ISO 9001:2015", "Sedex SMETA 6.1"],
    image: "assets/images/products/throw_collection_autumn.jpg",
    featured: false
  },

  // 4. Cushions & Pillows
  {
    id: "RCI-CU-01",
    name: "Textured Wool & Cotton Embroidered Cushion",
    category: "Made-Ups",
    subCategory: "Cushions & Pillows",
    code: "RCI-CU-301",
    construction: "Hand-Embroidered Chain Stitch on Heavy Canvas",
    material: "100% Cotton Duck Base, Wool Embroidery Yarn",
    sizes: ["45 x 45 cm", "50 x 50 cm", "Lumbar: 30 x 50 cm"],
    colours: ["Natural Ecru Ground with Mustard & Charcoal Line Art"],
    moq: "150 pcs",
    leadTime: "20–30 Days",
    applications: "Living Room Sofas, Patio Daybeds, Boutique Lounges",
    customOptions: "Cushion shell only or complete with duck feather / polyfill insert",
    certifications: ["ISO 9001:2015"],
    image: "assets/images/products/cushion_geometric_embroidery.jpg",
    featured: true
  },
  {
    id: "RCI-CU-02",
    name: "Terracotta Tufted Loop Accent Cushion",
    category: "Made-Ups",
    subCategory: "Cushions & Pillows",
    code: "RCI-CU-302",
    construction: "Hand-Tufted Loop Pile on Woven Ground with Flange",
    material: "70% Cotton, 30% Wool Loop",
    sizes: ["45 x 45 cm", "40 x 60 cm"],
    colours: ["Terracotta Rust with Cream Linear Insets"],
    moq: "120 pcs",
    leadTime: "22–32 Days",
    applications: "Bohemian Interior Styling, Layered Bedding, Hotel Lounges",
    customOptions: "Custom corner tassels, concealed YKK zipper",
    certifications: ["ISO 9001:2015", "Sedex SMETA 6.1"],
    image: "assets/images/products/cushion_terracotta_fringed.jpg",
    featured: false
  },
  {
    id: "RCI-CU-03",
    name: "Botanical Monstera Leaf Embroidered Cushion",
    category: "Made-Ups",
    subCategory: "Cushions & Pillows",
    code: "RCI-CU-303",
    construction: "Dense Satin Stitch Multi-Green Embroidery",
    material: "100% Pure Slub Linen-Cotton Fabric",
    sizes: ["45 x 45 cm", "50 x 50 cm"],
    colours: ["Sage, Emerald & Forest Green Leaves on Oatmeal Linen Ground"],
    moq: "150 pcs",
    leadTime: "24–34 Days",
    applications: "Botanical Themes, Sunrooms, Resort Living",
    customOptions: "Custom botanical artwork digitization, self-piped edges",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    image: "assets/images/products/cushion_botanical_monstera.jpg",
    featured: false
  },
  {
    id: "RCI-CU-04",
    name: "Tribal Monochrome Jacquard & Macramé Cushion",
    category: "Made-Ups",
    subCategory: "Cushions & Pillows",
    code: "RCI-CU-304",
    construction: "Woven Jacquard with Hand-Knotted Fringe Trim",
    material: "100% Pure Heavy Indian Cotton",
    sizes: ["40 x 40 cm", "50 x 50 cm", "30 x 60 cm"],
    colours: ["Geometric Black & Off-White Patterns"],
    moq: "200 pcs",
    leadTime: "20–28 Days",
    applications: "Monochrome Minimalist Spaces, Urban Apartments",
    customOptions: "Private label packaging, woven brand labels",
    certifications: ["ISO 9001:2015"],
    image: "assets/images/products/cushion_tribal_monochrome.jpg",
    featured: false
  },

  // 5. Furniture, Poufs & Accents
  {
    id: "RCI-ACC-01",
    name: "Monochrome Woven Cylindrical Floor Pouf",
    category: "Accents & Furniture",
    subCategory: "Poufs & Ottomans",
    code: "RCI-PF-201",
    construction: "Heavy Handwoven Wool-Cotton Outer Cover",
    material: "Outer: 80% Wool, 20% Cotton. Inner: Dense Thermocol EPS Beads in Cotton Liner",
    sizes: ["45 cm Diameter x 40 cm Height", "60 cm Diameter x 35 cm Height"],
    colours: ["Textured Black & Off-White Tweed Weave"],
    moq: "50 pcs",
    leadTime: "25–35 Days",
    applications: "Casual Floor Seating, Living Room Accents, Kids Playrooms",
    customOptions: "Supplied filled or flat-packed shell for ocean freight savings",
    certifications: ["ISO 9001:2015"],
    image: "assets/images/products/pouf_woven_monochrome.jpg",
    featured: true
  },
  {
    id: "RCI-ACC-02",
    name: "Braided Jute Round Pouf with Navy Stripe",
    category: "Accents & Furniture",
    subCategory: "Poufs & Ottomans",
    code: "RCI-PF-202",
    construction: "Reinforced Braided Natural Jute Coils",
    material: "100% Natural Golden Jute with Yarn-Dyed Navy Cotton Band",
    sizes: ["50 cm Diameter x 30 cm Height"],
    colours: ["Golden Jute with Deep Indigo Stripe"],
    moq: "60 pcs",
    leadTime: "22–32 Days",
    applications: "Coastal Décor, Eco Lodges, Covered Verandas",
    customOptions: "Custom contrast band colours, jute density options",
    certifications: ["ISO 9001:2015", "Sedex SMETA 6.1"],
    image: "assets/images/products/pouf_jute_navy_stripe.jpg",
    featured: false
  },
  {
    id: "RCI-ACC-03",
    name: "Bohemian Patchwork Stool with Turned Wood Legs",
    category: "Accents & Furniture",
    subCategory: "Footstools",
    code: "RCI-FS-203",
    construction: "Upholstered Foam Top on Solid Turned Sheesham Wood Legs",
    material: "Upcycled Handwoven Kilim & Jacquard Cotton Patches, Solid Timber",
    sizes: ["40 cm Diameter x 42 cm Total Height"],
    colours: ["Multi-colour Warm Earth Kilim Patches"],
    moq: "40 pcs",
    leadTime: "28–40 Days",
    applications: "Vanity Stools, Entryway Seating, Eclectic Living Accents",
    customOptions: "Leg finishes (Natural Oak, Walnut, Matte Black)",
    certifications: ["ISO 9001:2015"],
    image: "assets/images/products/footstool_patchwork_wooden.jpg",
    featured: false
  },
  {
    id: "RCI-ACC-04",
    name: "Hand-Knitted Chunky Cable Stitch Pouf",
    category: "Accents & Furniture",
    subCategory: "Poufs & Ottomans",
    code: "RCI-PF-204",
    construction: "Artisan Hand-Knitted Heavy Cotton Cord",
    material: "100% Recycled Cotton Rope Cover with High-Density Core",
    sizes: ["50 cm Diameter x 35 cm Height"],
    colours: ["Ochre Yellow, Natural Taupe, Slate Grey, Dusty Rose"],
    moq: "60 pcs",
    leadTime: "20–30 Days",
    applications: "Nurseries, Lounge Seating, Contemporary Apartments",
    customOptions: "Zippered removable washable outer shell",
    certifications: ["GRS Scope Certified Yarn", "ISO 9001:2015"],
    image: "assets/images/products/pouf_chunky_knit_ochre.jpg",
    featured: false
  },
  {
    id: "RCI-ACC-05",
    name: "Moroccan Diamond Tufted Square Floor Cushion",
    category: "Accents & Furniture",
    subCategory: "Poufs & Ottomans",
    code: "RCI-PF-205",
    construction: "Hand-Tufted Cotton & Wool Pile with Piping",
    material: "Cotton Canvas with Wool Tufted Geometric Diamond Motif",
    sizes: ["60 x 60 x 20 cm Floor Cushion"],
    colours: ["Ivory Ground with Charcoal Diamond Grid"],
    moq: "50 pcs",
    leadTime: "24–34 Days",
    applications: "Low Lounge Seating, Reading Nooks, Moroccan Theme Interiors",
    customOptions: "Custom piping contrast, reinforced carrying handle",
    certifications: ["ISO 9001:2015"],
    image: "assets/images/products/pouf_moroccan_geometric.jpg",
    featured: false
  },

  // 6. Storage Baskets & Planters
  {
    id: "RCI-BSK-01",
    name: "Dual-Tone Navy & Natural Jute Storage Baskets (Set of 3)",
    category: "Accents & Furniture",
    subCategory: "Baskets & Planters",
    code: "RCI-BK-101",
    construction: "Braided Jute Coil with Colour-Dipped Effect",
    material: "100% Biodegradable Natural Jute Fibre",
    sizes: ["Small: 22 x 20 cm", "Medium: 28 x 26 cm", "Large: 34 x 32 cm"],
    colours: ["Natural Golden Jute Base with Deep Navy Blue Top"],
    moq: "100 sets",
    leadTime: "20–30 Days",
    applications: "Living Room Organization, Planter Covers, Towel Baskets",
    customOptions: "Nesting 3-piece packaging, custom dip colours",
    certifications: ["ISO 9001:2015"],
    image: "assets/images/products/basket_jute_duotone_navy.jpg",
    featured: true
  },
  {
    id: "RCI-BSK-02",
    name: "Coiled Cotton Rope Planter & Laundry Basket",
    category: "Accents & Furniture",
    subCategory: "Baskets & Planters",
    code: "RCI-BK-102",
    construction: "Industrial Zig-Zag Stitched Coiled Rope",
    material: "100% Soft Pure Combed Cotton Cord",
    sizes: ["35 cm Diameter x 38 cm Height", "45 cm Diameter x 48 cm Height"],
    colours: ["Natural Off-White with Striped Tan Accents"],
    moq: "120 pcs",
    leadTime: "18–26 Days",
    applications: "Nursery Laundry, Toy Storage, Indoor Plant Covers",
    customOptions: "Integrated slot handles, leather brand embossed patch",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    image: "assets/images/products/basket_coiled_rope_white.jpg",
    featured: false
  },
  {
    id: "RCI-BSK-03",
    name: "Rectangular Braided Storage Basket with Leather Handles",
    category: "Accents & Furniture",
    subCategory: "Baskets & Planters",
    code: "RCI-BK-103",
    construction: "Reinforced Rectangular Braided Jute & Cotton",
    material: "Natural Jute, Heavy Cotton Thread, Genuine Buff Leather Handles with Brass Rivets",
    sizes: ["38 x 28 x 18 cm", "44 x 32 x 22 cm"],
    colours: ["Natural Sand Jute with Rich Brown Leather"],
    moq: "100 pcs",
    leadTime: "22–32 Days",
    applications: "Bookshelf Organizers, Wardrobe Organization, Tabletop Trays",
    customOptions: "Faux leather / vegan leather alternative handles",
    certifications: ["ISO 9001:2015", "Sedex SMETA 6.1"],
    image: "assets/images/products/basket_storage_leather_handles.jpg",
    featured: false
  },

  // 7. Wall Hangings & Textile Art
  {
    id: "RCI-WAL-01",
    name: "Hand-Knotted Macramé Twin Wall Hangings",
    category: "Made-Ups",
    subCategory: "Wall Decor & Art",
    code: "RCI-WA-601",
    construction: "Artisan Macramé Knotting on Solid Wood Dowel",
    material: "100% Unbleached Single-Twist Cotton Rope, Sheesham Dowel",
    sizes: ["35 x 75 cm each (Supplied as Pair)"],
    colours: ["Natural Raw Cotton Ecru"],
    moq: "100 pairs",
    leadTime: "20–30 Days",
    applications: "Bedhead Accents, Boho Retail Wall Décor, Cafe Interiors",
    customOptions: "Custom dowel lengths, dip-dyed ombre fringe options",
    certifications: ["ISO 9001:2015"],
    image: "assets/images/products/wall_hanging_macrame_twin.jpg",
    featured: false
  },
  {
    id: "RCI-WAL-02",
    name: "Framed Kilim Textile Art in Oak Shadowbox",
    category: "Made-Ups",
    subCategory: "Wall Decor & Art",
    code: "RCI-WA-602",
    construction: "Handwoven Fine Kilim Mounted in Natural Wood Shadowbox",
    material: "Wool-Cotton Handwoven Textile, Solid Natural Ash Wood Frame, Glass Front",
    sizes: ["40 x 60 cm", "50 x 70 cm"],
    colours: ["Terracotta & Slate Diamond Kilim / Charcoal & Cream Kilim"],
    moq: "50 pcs",
    leadTime: "25–35 Days",
    applications: "Hotel Guestroom Galleries, Modern Residences, Office Corridors",
    customOptions: "Custom frame finishes (Natural Oak, Walnut, Black, White)",
    certifications: ["ISO 9001:2015"],
    image: "assets/images/products/wall_art_kilim_framed_terracotta.jpg",
    featured: true
  },
  {
    id: "RCI-WAL-03",
    name: "Sculptural Mixed-Texture Woven Wool Tapestry",
    category: "Made-Ups",
    subCategory: "Wall Decor & Art",
    code: "RCI-WA-603",
    construction: "Multi-Technique Handloom Tapestry with Looped & Unspun Wool",
    material: "Pure Unspun Wool Roving, Cotton Slub, Steel Hanging Rod",
    sizes: ["70 x 140 cm"],
    colours: ["Neutral Cream, Ecru, Grey & Deep Charcoal"],
    moq: "30 pcs",
    leadTime: "30–45 Days",
    applications: "Architectural Foyers, Luxury Master Suites, Penthouse Lobbies",
    customOptions: "Bespoke commission scales up to 2 x 3 metres",
    certifications: ["RWS Responsible Wool", "ISO 9001:2015"],
    image: "assets/images/products/wall_tapestry_wool_sculptural.jpg",
    featured: false
  },

  // 5. Kids Collection
  {
    id: "RCI-KID-01",
    name: "Nordic Woodland Illustrated Kids Rug",
    category: "Kids",
    subCategory: "Kids Tufted Rugs",
    code: "RCI-KD-101",
    construction: "Hand-Tufted Hypoallergenic Plush Cut Pile",
    material: "100% Combed Indian Cotton & Fine Soft Wool",
    pileHeight: "15 mm Plush Pile",
    backing: "Anti-Skid Cotton Canvas with Odourless Non-Toxic Latex",
    sizes: ["120 x 180 cm", "150 x 210 cm", "Round: 140 cm Dia"],
    colours: ["Pastel Mint, Baby Blue, Honey Ochre & Soft Cream"],
    moq: "40 sq. metres",
    leadTime: "25–35 Days",
    applications: "Children's Nursery, Montessori Playrooms, Junior Suites",
    customOptions: "Custom cartoon & animal motifs, alphabet/numeral adaptations",
    certifications: ["OEKO-TEX Standard 100 (Baby Class 1)", "ISO 9001:2015"],
    image: "assets/images/products/kids_nordic_woodland_rug.jpg",
    featured: true
  },
  {
    id: "RCI-KID-02",
    name: "Contoured Woodland Animal Die-Cut Playmat",
    category: "Kids",
    subCategory: "Kids Playmats",
    code: "RCI-KD-102",
    construction: "Hand-Tufted Shaped Cotton Mat",
    material: "100% Ultra-Soft Ringspun Cotton",
    pileHeight: "16 mm Cut Pile",
    backing: "Natural Latex Slip-Resistant Spray Backing",
    sizes: ["60 x 75 cm (Fox Contour)", "65 x 80 cm (Zebra Contour)", "70 x 90 cm (Bear Contour)"],
    colours: ["Fox Terracotta & Cream, Bear Honey & Beige"],
    moq: "150 pcs / shape",
    leadTime: "20–30 Days",
    applications: "Kids Bathrooms, Nursery Bedside, Baby Play Nooks",
    customOptions: "Custom character die-cuts, personalized embroidery",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    image: "assets/images/products/bathmat_novelty_fox_zebra.jpg",
    featured: true
  },
  {
    id: "RCI-KID-03",
    name: "Savannah Safari Tufted Nursery Rug",
    category: "Kids",
    subCategory: "Kids Tufted Rugs",
    code: "RCI-KD-103",
    construction: "Hand-Tufted Plush Cut Pile",
    material: "100% Combed Indian Cotton & Soft Wool Blend",
    pileHeight: "14 mm",
    backing: "Anti-Skid Cotton Scrim with Non-Toxic Latex",
    sizes: ["120 x 180 cm", "140 x 200 cm", "160 x 230 cm"],
    colours: ["Sky Blue, Lion Ochre, Palm Green & Terracotta"],
    moq: "50 sq. metres",
    leadTime: "25–35 Days",
    applications: "Children's Nursery, Daycare Centres, Playrooms",
    customOptions: "Custom dimensions, tone-on-tone or vibrant palette",
    certifications: ["OEKO-TEX Standard 100 (Baby Class)", "ISO 9001:2015"],
    image: "assets/images/products/rug_tufted_kids.jpg",
    featured: false
  },

  // 6. Fiesta Decor Collection
  {
    id: "RCI-FIE-01",
    name: "Vibrant Folk Geometric Fiesta Kilim Runner",
    category: "Fiesta Decor",
    subCategory: "Fiesta Rugs & Runners",
    code: "RCI-FD-201",
    construction: "Hand-Woven Reversible Panja Flatweave",
    material: "80% Pure Bikaner Wool, 20% Cotton Warp with Fringe",
    pileHeight: "Zero-Pile Flatweave (7 mm thickness)",
    backing: "Reversible Dual-Sided Identical Weave",
    sizes: ["80 x 250 cm (Runner)", "120 x 180 cm", "160 x 230 cm"],
    colours: ["Rich Terracotta, Fiesta Ochre, Royal Turquoise & Fuchsia"],
    moq: "40 sq. metres",
    leadTime: "25–35 Days",
    applications: "Festive Interiors, Bohemian Living Spaces, Hotel Patios, Dining Areas",
    customOptions: "Custom colour stripe sequences, braided fringe details",
    certifications: ["ISO 9001:2015", "Sedex SMETA 6.1"],
    image: "assets/images/products/fiesta_folk_kilim_runner.jpg",
    featured: true
  },
  {
    id: "RCI-FIE-02",
    name: "Artisanal Embroidered Fiesta Cushion & Wall Tapestry",
    category: "Fiesta Decor",
    subCategory: "Fiesta Cushions & Wall Art",
    code: "RCI-FD-202",
    construction: "Hand-Embroidered Folk Stitch with Multi-Tassel Finish",
    material: "100% Slub Cotton Base with Wool Embroidery & Multi-Coloured Tassels",
    sizes: ["Cushion: 45 x 45 cm", "Lumbar: 35 x 60 cm", "Tapestry: 60 x 90 cm"],
    colours: ["Multicolour Floral Fiesta & Talavera Hues"],
    moq: "100 pcs",
    leadTime: "20–30 Days",
    applications: "Festive Event Decor, Bohemian Lounges, Resort Suites, Boutique Retail",
    customOptions: "Custom embroidery motifs, private label tags, bespoke zipper finishes",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    image: "assets/images/products/fiesta_embroidered_cushions_tapestry.jpg",
    featured: true
  },
  {
    id: "RCI-FIE-03",
    name: "Festive Pom-Pom Soft Cotton Accent Throw",
    category: "Fiesta Decor",
    subCategory: "Fiesta Throws",
    code: "RCI-FD-203",
    construction: "Hand-Woven Textured Slub with Multi Pom-Pom Edging",
    material: "100% Breathable Cotton Slub with Acrylic Pom-Poms",
    sizes: ["130 x 170 cm", "150 x 200 cm"],
    colours: ["Ivory with Fiesta Multicolour Pom-Poms"],
    moq: "100 pcs",
    leadTime: "20–30 Days",
    applications: "Living Room Sofas, Outdoor Fiesta Patios, Resort Daybeds",
    customOptions: "Custom pom-pom colorways, bespoke packaging",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    image: "assets/images/products/throw_ivory_pompom.jpg",
    featured: false
  }
];

export const STORY_COLLECTIONS = [
  {
    id: "terracotta-heritage",
    title: "The Terracotta Heritage Suite",
    subtitle: "A Coordinated Kilim Narrative Across 7 Floor & Accent Categories",
    desc: "As demonstrated in our company portfolio, Real Carpets India specializes in translating a single iconic textile motif into a completely harmonious product story for international home brands. The Terracotta Heritage Suite coordinates warm mineral clay, burnt ochre, and deep slate kilim geometry across all core lifestyle essentials.",
    image: "assets/images/story/story_terracotta_suite.jpg",
    elements: [
      { name: "01. Centerpiece Rug", spec: "Handwoven Panja wool kilim flatweave" },
      { name: "02. Cushion & Pillow", spec: "Tufted & embroidered cotton accent pillow" },
      { name: "03. Wall-Hanging", spec: "Artisan tasseled wall tapestry" },
      { name: "04. Ottoman", spec: "Full-grain kilim upholstered cylinder ottoman" },
      { name: "05. Footstool", spec: "Turned sheesham wood upholstered bench stool" },
      { name: "06. Storage Basket", spec: "Reinforced braided jute storage caddy" },
      { name: "07. Framed Wall-Art", spec: "Kilim textile mounted in natural oak frame" }
    ],
    targetBuyers: "Major Home Décor Retailers, Lifestyle Brands, Luxury Catalogues"
  },
  {
    id: "nordic-indigo",
    title: "The Nordic Diamond & Indigo Suite",
    subtitle: "Scandinavian Graphic Geometry Crafted with Authentic Indian Handcraft",
    desc: "Reflecting our capabilities in modern European and Scandinavian styling, this collection deploys a refined optical diamond motif across an airy ivory, heather grey, and muted indigo palette. Designed specifically for unified retail merchandising and seasonal private-label launches.",
    image: "assets/images/story/story_nordic_suite.jpg",
    elements: [
      { name: "01. Centerpiece Rug", spec: "Dense hand-tufted cut-pile wool rug" },
      { name: "02. Cushion & Pillow", spec: "Woven jacquard pillow with macramé fringe" },
      { name: "03. Wall-Hanging", spec: "Geometric dowel-mounted wall hanging" },
      { name: "04. Ottoman", spec: "Modular square floor ottoman" },
      { name: "05. Footstool", spec: "Turned wood tapered leg accent footstool" },
      { name: "06. Storage Basket", spec: "Coiled rope graphic storage basket" },
      { name: "07. Framed Wall-Art", spec: "Geometric motif mounted in shadowbox" }
    ],
    targetBuyers: "Modern Furniture Showrooms, Scandinavian Retailers, Hospitality Groups"
  }
];

export const CUSTOM_PROGRAMME_STEPS = [
  {
    step: 1,
    title: "Share Requirements & Artwork",
    desc: "Submit your design drawings, CAD renders, mood boards, Pantone colour references, target dimensions, construction preference, and projected order volume."
  },
  {
    step: 2,
    title: "Quality Swatch Development & Approval",
    desc: "Our design and sampling studio creates physical strike-offs and quality swatches (typically 30x30 cm or 50x50 cm) in the exact yarn blend and colour specification for your review and physical touch-approval."
  },
  {
    step: 3,
    title: "Order Confirmation After Swatch Sign-Off",
    desc: "Once the physical swatch meets your exact standard of colour, texture, and density, commercial terms, packaging specs, and bulk production schedules are locked."
  },
  {
    step: 4,
    title: "Bulk In-House Production",
    desc: "With 90%–95% of processes housed under one roof in Panipat, our dedicated production supervisors execute mass manufacturing under continuous AQL monitoring."
  },
  {
    step: 5,
    title: "Final Inspection & Container Delivery",
    desc: "Every piece undergoes 100% daylight inspection, metal detector clearance, and heavy-duty export wrapping before stuffing into FCL/LCL ocean containers for direct port dispatch."
  }
];

export const WHY_REAL_CARPETS_INDIA = [
  {
    num: "01",
    title: "Experienced Manufacturing Heritage",
    desc: "Founded in 1995 with a 0% rejection track record, advancing from regional supplier to trusted direct overseas exporter since our 2012 Australian milestone."
  },
  {
    num: "02",
    title: "Dedicated Design & Merchandising",
    desc: "Experienced in-house design and merchandising teams translating international fashion forecasts, moodboards, and retail briefs into commercial collections."
  },
  {
    num: "03",
    title: "Comprehensive Construction Breadth",
    desc: "Masters across hand-tufted, hand-woven, hand-knitted, hand-hooked, hand-knotted, braided, panja/kilim, and machine-tufted constructions."
  },
  {
    num: "04",
    title: "90% to 95% In-House Production",
    desc: "Substantial infrastructure in Panipat housing weaving sheds, yarn stores, quality labs, finishing lines, and container stuffing bays under unified management."
  },
  {
    num: "05",
    title: "Systematic Multi-Stage Quality Control",
    desc: "Structured ISO 9001 practices, AQL statistical sampling, 100% artificial daylight audits, in-house laboratory testing, and conveyor metal detection."
  },
  {
    num: "06",
    title: "Private-Label Custom Development",
    desc: "Rapid swatch sampling, custom Pantone matching, bespoke retail packaging, barcodes, care labels, and coordinated 7-category Story Collections."
  },
  {
    num: "07",
    title: "Proven Global Export Logistics",
    desc: "Reliable FCL and LCL container dispatch to the USA, Canada, Europe, Brazil, South Africa, and Australia with complete documentation."
  },
  {
    num: "08",
    title: "Ethical & Environmental Compliance",
    desc: "Third-party audited manufacturing supporting Sedex SMETA 6.1, OEKO-TEX Standard 100, GRS, GOTS, and RWS certifications."
  }
];

export const EVENTS_EXHIBITIONS = [
  { year: 2023, name: "IHGF Delhi Fair (Spring & Autumn)", location: "India Expo Centre & Mart, Greater Noida", type: "Home & Lifestyle" },
  { year: 2022, name: "IHGF Delhi Fair (Autumn)", location: "India Expo Centre & Mart, Greater Noida", type: "Handicrafts & Furnishings" },
  { year: 2020, name: "DOMOTEX Hannover", location: "Hannover Exhibition Grounds, Germany", type: "World Leading Trade Fair for Floor Coverings" },
  { year: 2019, name: "IHGF Delhi Fair (Autumn)", location: "India Expo Centre & Mart, Greater Noida", type: "Textiles & Carpets" },
  { year: 2017, name: "ASD Marketweek", location: "Las Vegas Convention Center, USA", type: "Consumer Merchandise & Retail Wholesale" }
];
