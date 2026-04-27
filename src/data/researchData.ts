// Centralized placeholder field data for the Haat Bazar research site

export type Haat = {
  name: string;
  block: string;
  marketDay: string;
  villages: string;
  products: string;
  sellers: number;
  buyers: number;
  productTags: string[];
  sellerGroups: string[];
  problems: string[];
  fieldNote: string;
};

export const haats: Haat[] = [
  {
    name: "Kondagaon Main Haat",
    block: "Kondagaon",
    marketDay: "Monday",
    villages: "Kondagaon, Baderajpur, Amdai, Bhongapal",
    products: "Vegetables, NTFP, cloth, grain",
    sellers: 220,
    buyers: 1200,
    productTags: ["Vegetables", "Mahua", "NTFP", "Grains", "Cloth", "Cooked food", "Plastic goods"],
    sellerGroups: ["Tribal women", "Farmers", "NTFP collectors", "Outside traders", "SHG members"],
    problems: ["Low prices", "Middlemen", "No storage", "Poor shelter"],
    fieldNote:
      "The largest weekly market in the district. Active from early morning till late evening. NTFP traders from Jagdalpur arrive by truck.",
  },
  {
    name: "Pharasgaon Haat",
    block: "Pharasgaon",
    marketDay: "Wednesday",
    villages: "Pharasgaon, Kukanar, Bade Dongar",
    products: "Mahua, vegetables, pulses",
    sellers: 140,
    buyers: 700,
    productTags: ["Mahua", "Vegetables", "Pulses", "NTFP", "Pickles"],
    sellerGroups: ["Tribal women", "SHG members", "Farmers", "NTFP collectors"],
    problems: ["Transport cost", "Middlemen", "No shelter"],
    fieldNote:
      "Strong SHG presence — women's groups sell pickles, papad, and processed mahua. Fewer outside traders than Kondagaon.",
  },
  {
    name: "Makdi Haat",
    block: "Makdi",
    marketDay: "Thursday",
    villages: "Makdi, Bhanpuri, Chhotedongar",
    products: "Tendu, char, vegetables",
    sellers: 110,
    buyers: 520,
    productTags: ["Tendu leaves", "Char", "Vegetables", "Chironji", "Bamboo"],
    sellerGroups: ["NTFP collectors", "Tribal women", "Artisans", "Farmers"],
    problems: ["Low prices", "Poor roads", "No storage"],
    fieldNote:
      "Heavy NTFP focus. Char and chironji prices fluctuate weekly based on Jagdalpur trader demand.",
  },
  {
    name: "Baderajpur Haat",
    block: "Kondagaon",
    marketDay: "Saturday",
    villages: "Baderajpur, Amdai, Bayanar",
    products: "Livestock, grain, NTFP",
    sellers: 95,
    buyers: 480,
    productTags: ["Livestock", "Grains", "NTFP", "Vegetables", "Tools"],
    sellerGroups: ["Farmers", "Livestock traders", "Tribal households"],
    problems: ["No shelter", "Weighing disputes", "Middlemen"],
    fieldNote:
      "Cattle and goat trade is significant here. A separate corner is informally allocated for livestock.",
  },
  {
    name: "Keshkal Haat",
    block: "Keshkal",
    marketDay: "Tuesday",
    villages: "Keshkal, Keoribhat, Batrali",
    products: "Bamboo products, vegetables",
    sellers: 130,
    buyers: 620,
    productTags: ["Bamboo products", "Vegetables", "NTFP", "Handicrafts", "Cooked food"],
    sellerGroups: ["Artisans", "Tribal women", "Farmers", "SHG members"],
    problems: ["Weak branding", "Transport cost", "Poor roads"],
    fieldNote:
      "Bamboo basket and broom artisans dominate. Many products travel from here to urban handicraft buyers.",
  },
  {
    name: "Narayanpur Haat",
    block: "Narayanpur",
    marketDay: "Friday",
    villages: "Narayanpur, Orchha, Benoor",
    products: "Forest produce, cattle",
    sellers: 105,
    buyers: 460,
    productTags: ["NTFP", "Livestock", "Mahua", "Vegetables", "Grains"],
    sellerGroups: ["NTFP collectors", "Tribal households", "Livestock traders"],
    problems: ["Poor roads", "Low prices", "No storage"],
    fieldNote:
      "Remote location with strong forest dependence. Most buyers are from within a 15 km radius.",
  },
];

export type Stakeholder = {
  name: string;
  ring: 1 | 2 | 3;
  role: string;
  products: string;
  needs: string;
  problems: string;
};

export const stakeholders: Stakeholder[] = [
  { name: "Tribal Households", ring: 1, role: "Primary producers and sellers", products: "Mahua, char, vegetables, grains", needs: "Fair prices, market access", problems: "Low prices, exploitation by middlemen" },
  { name: "Farmers", ring: 1, role: "Agricultural producers", products: "Paddy, vegetables, pulses", needs: "Stable prices, storage", problems: "Crop loss, transport cost" },
  { name: "Forest Produce Collectors", ring: 1, role: "Collect & process NTFP", products: "Tendu, mahua, char, lac", needs: "Recognition of forest rights", problems: "Price volatility, trader dependence" },
  { name: "Women Sellers", ring: 1, role: "Daily market sellers", products: "Vegetables, processed food", needs: "Safe space, shelter, toilets", problems: "Safety, undervaluation" },
  { name: "Local Vendors", ring: 1, role: "Resell at haat", products: "Cloth, plastic goods, utensils", needs: "Designated stall space", problems: "Space conflict" },
  { name: "SHG Members", ring: 1, role: "Group-based selling & savings", products: "Pickles, papad, processed mahua", needs: "Branding, credit", problems: "Limited buyer base" },
  { name: "VDVKs", ring: 1, role: "Village-level NTFP aggregation", products: "Aggregated forest produce", needs: "Working capital, storage", problems: "Pricing, logistics" },
  { name: "Traders / Middlemen", ring: 2, role: "Bulk buyers, urban resale", products: "NTFP, grains, livestock", needs: "Volume supply", problems: "Trust deficit with sellers" },
  { name: "Buyers", ring: 2, role: "Local consumers", products: "Daily essentials", needs: "Quality, fair weight", problems: "Weighing disputes" },
  { name: "Transporters", ring: 2, role: "Shared and informal transport", products: "Transport service", needs: "Stable demand", problems: "Fuel cost" },
  { name: "Gram Panchayat", ring: 3, role: "Local governance, haat oversight", products: "Permits, basic facilities", needs: "Funds, planning", problems: "Limited capacity" },
  { name: "FES", ring: 3, role: "Ecological & livelihood support", products: "Training, institutions", needs: "Community participation", problems: "Scale & continuity" },
  { name: "Forest Department", ring: 3, role: "NTFP regulation, protection", products: "Permits, MFP support", needs: "Monitoring", problems: "Conflict with collectors" },
  { name: "NRLM / SHG Institutions", ring: 3, role: "Group formation, credit", products: "Loans, training", needs: "Federation strength", problems: "Repayment, market linkage" },
  { name: "Local Administration", ring: 3, role: "Schemes & infrastructure", products: "Welfare schemes", needs: "Coordination", problems: "Last-mile delivery" },
];

export type FieldRow = {
  id: string;
  date: string;
  haat: string;
  village: string;
  type: "Seller" | "Buyer" | "SHG Member" | "VDVK" | "Trader";
  gender: "Female" | "Male";
  category: string;
  product: string;
  source: string;
  qty: string;
  price: string;
  dailySale: number;
  profit: number;
  transport: number;
  buyerType: string;
  problems: string;
  circular: string;
  suggestion: string;
  photo: string;
  quote: string;
};

export const fieldRows: FieldRow[] = [
  { id: "R-001", date: "08-Apr-2026", haat: "Kondagaon Main Haat", village: "Baderajpur", type: "Seller", gender: "Female", category: "NTFP", product: "Mahua flowers", source: "Forest", qty: "12 kg", price: "45/kg", dailySale: 540, profit: 420, transport: 60, buyerType: "Trader", problems: "Low prices", circular: "Sal leaf wrapping", suggestion: "Common weighing", photo: "Pending", quote: "Mahua season is short — we earn for school fees." },
  { id: "R-002", date: "08-Apr-2026", haat: "Kondagaon Main Haat", village: "Amdai", type: "Seller", gender: "Female", category: "Vegetables", product: "Bhindi, brinjal", source: "Home farm", qty: "8 kg", price: "35/kg", dailySale: 280, profit: 200, transport: 40, buyerType: "Consumer", problems: "Transport", circular: "Reuse of bamboo basket", suggestion: "Shared transport", photo: "Pending", quote: "Direct selling means no middleman cut." },
  { id: "R-003", date: "10-Apr-2026", haat: "Pharasgaon Haat", village: "Kukanar", type: "SHG Member", gender: "Female", category: "Cooked Food", product: "Pickle, papad", source: "SHG kitchen", qty: "20 jars", price: "60/jar", dailySale: 1200, profit: 720, transport: 80, buyerType: "Consumer", problems: "Weak branding", circular: "Reusable jars", suggestion: "SHG branded corner", photo: "Pending", quote: "Our group saves together and lends together." },
  { id: "R-004", date: "10-Apr-2026", haat: "Pharasgaon Haat", village: "Pharasgaon", type: "Seller", gender: "Male", category: "Grains", product: "Kodo millet", source: "Own farm", qty: "30 kg", price: "40/kg", dailySale: 1200, profit: 800, transport: 100, buyerType: "Trader", problems: "Middlemen", circular: "Gunny sack reuse", suggestion: "Direct buyer link", photo: "Pending", quote: "Trader sets the price, we have no choice." },
  { id: "R-005", date: "11-Apr-2026", haat: "Makdi Haat", village: "Bhanpuri", type: "Seller", gender: "Male", category: "NTFP", product: "Char (chironji)", source: "Forest", qty: "5 kg", price: "320/kg", dailySale: 1600, profit: 1300, transport: 120, buyerType: "Trader", problems: "Price volatility", circular: "Cloth bag", suggestion: "Price display board", photo: "Pending", quote: "Char prices change every week." },
  { id: "R-006", date: "11-Apr-2026", haat: "Makdi Haat", village: "Makdi", type: "Buyer", gender: "Female", category: "Vegetables", product: "Mixed", source: "—", qty: "—", price: "—", dailySale: 0, profit: 0, transport: 20, buyerType: "—", problems: "Weighing disputes", circular: "—", suggestion: "Verified scales", photo: "Pending", quote: "Sometimes the scale is not fair." },
  { id: "R-007", date: "12-Apr-2026", haat: "Baderajpur Haat", village: "Bayanar", type: "Seller", gender: "Male", category: "Livestock", product: "Goat", source: "Household", qty: "2", price: "4500/each", dailySale: 9000, profit: 1800, transport: 300, buyerType: "Trader", problems: "Low prices", circular: "—", suggestion: "Livestock zone", photo: "Pending", quote: "Goats are our savings — sold when needed." },
  { id: "R-008", date: "12-Apr-2026", haat: "Baderajpur Haat", village: "Amdai", type: "VDVK", gender: "Male", category: "NTFP", product: "Aggregated mahua", source: "VDVK collection", qty: "150 kg", price: "42/kg", dailySale: 6300, profit: 1500, transport: 500, buyerType: "Trader", problems: "Working capital", circular: "Bulk packaging", suggestion: "Storage facility", photo: "Pending", quote: "We need credit to pay collectors upfront." },
  { id: "R-009", date: "14-Apr-2026", haat: "Keshkal Haat", village: "Keoribhat", type: "Seller", gender: "Male", category: "Handicrafts", product: "Bamboo basket", source: "Home workshop", qty: "10", price: "120/each", dailySale: 1200, profit: 800, transport: 80, buyerType: "Consumer", problems: "Weak branding", circular: "Local raw material", suggestion: "Local branding", photo: "Pending", quote: "If branded, our baskets could sell in cities." },
  { id: "R-010", date: "14-Apr-2026", haat: "Keshkal Haat", village: "Keshkal", type: "SHG Member", gender: "Female", category: "Handicrafts", product: "Sal leaf plates", source: "SHG", qty: "200", price: "3/each", dailySale: 600, profit: 360, transport: 50, buyerType: "Consumer", problems: "Limited buyers", circular: "100% natural product", suggestion: "Institutional buyers", photo: "Pending", quote: "Our plates are eco-friendly — schools should buy them." },
  { id: "R-011", date: "15-Apr-2026", haat: "Narayanpur Haat", village: "Orchha", type: "Seller", gender: "Female", category: "NTFP", product: "Tendu leaves", source: "Forest", qty: "20 bundles", price: "30/bundle", dailySale: 600, profit: 480, transport: 70, buyerType: "Trader", problems: "Poor roads", circular: "Leaf bundling", suggestion: "Storage", photo: "Pending", quote: "Roads are bad — we walk many kilometres." },
  { id: "R-012", date: "15-Apr-2026", haat: "Narayanpur Haat", village: "Benoor", type: "Trader", gender: "Male", category: "NTFP", product: "Mixed forest produce", source: "Bulk buy", qty: "Varies", price: "Varies", dailySale: 0, profit: 0, transport: 0, buyerType: "Urban resale", problems: "Quality variation", circular: "—", suggestion: "Grading system", photo: "Pending", quote: "Quality varies a lot from haat to haat." },
  { id: "R-013", date: "17-Apr-2026", haat: "Kondagaon Main Haat", village: "Bhongapal", type: "Seller", gender: "Female", category: "Vegetables", product: "Leafy greens", source: "Home farm", qty: "5 kg", price: "30/kg", dailySale: 150, profit: 110, transport: 25, buyerType: "Consumer", problems: "Low prices", circular: "Banana leaf wrap", suggestion: "Price board", photo: "Pending", quote: "Fresh greens spoil if unsold — we give to cows." },
  { id: "R-014", date: "17-Apr-2026", haat: "Pharasgaon Haat", village: "Bade Dongar", type: "SHG Member", gender: "Female", category: "Cooked Food", product: "Mahua laddu", source: "SHG", qty: "60", price: "10/each", dailySale: 600, profit: 380, transport: 60, buyerType: "Consumer", problems: "Limited buyers", circular: "Natural ingredients", suggestion: "SHG corner", photo: "Pending", quote: "Mahua laddu is liked by children — but only locals buy." },
  { id: "R-015", date: "18-Apr-2026", haat: "Makdi Haat", village: "Chhotedongar", type: "Seller", gender: "Male", category: "Grains", product: "Maize", source: "Own farm", qty: "25 kg", price: "22/kg", dailySale: 550, profit: 380, transport: 70, buyerType: "Consumer", problems: "Storage", circular: "Sack reuse", suggestion: "Storage shed", photo: "Pending", quote: "Without storage, I have to sell all in one day." },
];
