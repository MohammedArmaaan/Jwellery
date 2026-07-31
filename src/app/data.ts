// All Categories List (Original + All New Categories)
export const categoriesList = [
  "All",
  "Necklaces",
  "Earrings",
  "Bracelets",
  "Nose Rings",
  "Rings",
  "NOSEPIN",
  "BALI",
  "PENDAL",
  "TARBUTTI",
  "BABY RING",
  "BUTTI",
  "PENDAL SET",
  "LADIES RING",
  "GENTS RING",
  "CHAIN",
  "SET",
  "ZULA",
  "BANGLES",
  "MANGALSUTRA",
  "LUCKY",
  "BRACELET",
  "KADI JUMMAKI",
  "KANCHAIN",
  "TIKA & NATH",
  "BHUGADI",
  "BALL CHAIN",
  "VEL KATI"
];

// Sidebar Accordion / Dropdown Hierarchy Data
export const categoryHierarchy = [
  {
    name: "SET",
    slug: "set",
    subCategories: [
      { name: "Arabi", slug: "arabi" },
      { name: "Fancy", slug: "fancy" },
      { name: "Long", slug: "long" },
      { name: "Turkey", slug: "turkey" }
    ]
  },
  {
    name: "NOSEPIN",
    slug: "nosepin",
    subCategories: [
      { name: "Diamond Nosepin", slug: "diamond-nosepin" },
      { name: "Gold Wire Nosepin", slug: "gold-wire-nosepin" },
      { name: "Maharashtrian Nath", slug: "maharashtrian-nath" },
      { name: "Oxidized Nose Pin", slug: "oxidized-nose-pin" }
    ]
  },
  {
    name: "BALI",
    slug: "bali",
    subCategories: [
      { name: "Gold Plain Bali", slug: "gold-plain-bali" },
      { name: "Fancy Bali", slug: "fancy-bali" },
      { name: "Diamond Bali", slug: "diamond-bali" }
    ]
  },
  {
    name: "MANGALSUTRA",
    slug: "mangalsutra",
    subCategories: [
      { name: "Short Mangalsutra", slug: "short-mangalsutra" },
      { name: "Long Antique Mangalsutra", slug: "long-antique-mangalsutra" },
      { name: "Diamond Mangalsutra", slug: "diamond-mangalsutra" }
    ]
  },
  {
    name: "BANGLES",
    slug: "bangles",
    subCategories: [
      { name: "Gold Patla", slug: "gold-patla" },
      { name: "Bridal Bangles", slug: "bridal-bangles" },
      { name: "Daily Wear Bangles", slug: "daily-wear-bangles" }
    ]
  },
  {
    name: "EAR RINGS & BUTTI",
    slug: "butti",
    subCategories: [
      { name: "Gold Studs", slug: "gold-studs" },
      { name: "Jhumka Butti", slug: "jhumka-butti" },
      { name: "Diamond Butti", slug: "diamond-butti" }
    ]
  },
  {
    name: "CHAIN",
    slug: "chain",
    subCategories: [
      { name: "Rope Chain", slug: "rope-chain" },
      { name: "Box Chain", slug: "box-chain" },
      { name: "Ball Chain", slug: "ball-chain" }
    ]
  }
];

// All Products List (Original 1-8 Intact + Added All Category Products)
export const allProducts = [
  // --- AAPKE ORIGINAL 8 PRODUCTS (Unchanged) ---
  {
    id: "1",
    name: "Divine Diamond Necklace Set",
    price: 185000,
    image: "https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlfGVufDF8fHx8MTc2OTI5MzI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Necklaces",
    type: "necklace",
    subcategory: "diamond-necklace",
    description: "An extraordinary piece of art, this diamond necklace set embodies the pure essence of luxury. Handcrafted with precision, it features flawless diamonds set in 18k gold, designed to make you shine on your most sacred moments."
  },
  {
    id: "2",
    name: "Traditional Gold Jhumkas",
    price: 42000,
    image: "https://images.unsplash.com/photo-1762686130435-897de4b26aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGpodW1rYSUyMGVhcnJpbmdzfGVufDF8fHx8MTc2OTMwODc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Earrings",
    type: "jhumkas",
    subcategory: "jhumka-butti",
    description: "Timeless traditional jhumkas that echo the heritage of ancient craftsmanship. Made with 22k pure gold, these earrings are an essential part of any traditional ensemble."
  },
  {
    id: "3",
    name: "Heritage Bridal Nath",
    price: 65000,
    image: "https://images.unsplash.com/photo-1740674570372-b82fb1c43478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMGpld2VscnklMjBuYXRofGVufDF8fHx8MTc2OTMwODc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Nose Rings",
    type: "maharashtrian-nath",
    subcategory: "maharashtrian-nath",
    description: "A devotional symbol of grace, this heritage bridal nath is adorned with precious gemstones and pearls, completing the quintessential bridal look with Anny Jewellery."
  },
  {
    id: "4",
    name: "Elegant Diamond Bracelet",
    price: 98000,
    image: "https://images.unsplash.com/photo-1763029513623-37d488cb97b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwYnJhY2VsZXQlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MjAyMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Bracelets",
    type: "tennis-bracelet",
    subcategory: "tennis-bracelet",
    description: "A statement of refined taste, this elegant diamond bracelet is perfect for both everyday wear and special occasions. The subtle interplay of light and flawless diamonds creates an unforgettable aura."
  },
  {
    id: "5",
    name: "Antique Gold Choker",
    price: 155000,
    image: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxyeSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzY5MzA4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Necklaces",
    type: "antique-gold-set",
    subcategory: "antique-gold-set",
    description: "A magnificent antique finish gold choker that draws inspiration from royal dynasties. Each intricate detail tells a story of unmatched devotion to the craft."
  },
  {
    id: "6",
    name: "Classic Diamond Studs",
    price: 85000,
    image: "https://images.unsplash.com/photo-1762019313711-8b5d1e4f7ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwamV3ZWxyeSUyMHNldHxlbnwxfHx8fDE3NjkzMDg3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Earrings",
    type: "gold-studs",
    subcategory: "gold-studs",
    description: "Brilliant cut diamond studs set in a pristine white gold base. Minimalistic yet incredibly luxurious, designed to catch the light from every angle."
  },
  {
    id: "7",
    name: "Sacred Temple Bangle",
    price: 110000,
    image: "https://images.unsplash.com/photo-1763029513623-37d488cb97b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwYnJhY2VsZXQlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MjAyMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Bracelets",
    type: "bangle-bracelet",
    subcategory: "bangle-bracelet",
    description: "Crafted using the age-old temple jewelry techniques, this bangle carries divine motifs and intricate filigree work that honors traditional artisans."
  },
  {
    id: "8",
    name: "Kundan Statement Ring",
    price: 35000,
    image: "https://images.unsplash.com/photo-1762686130435-897de4b26aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGpodW1rYSUyMGVhcnJpbmdzfGVufDF8fHx8MTc2OTMwODc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Rings",
    type: "cocktail-ring",
    subcategory: "cocktail-ring",
    description: "An oversized statement ring featuring authentic Kundan work and colorful meenakari detailing on the back. A true collector's piece."
  },

  // --- ADDED PRODUCTS FOR EXCLUSIVE SETS COLLECTION ---
  {
    id: "9",
    name: "Royal Arabi Gold Set",
    price: 215000,
    image: "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "SET",
    type: "arabi",
    subcategory: "arabi",
    description: "Exquisite Arabian style gold necklace set with detailed hand engraving."
  },
  {
    id: "10",
    name: "Arabi Deluxe Choker Set",
    price: 195000,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "SET",
    type: "arabi",
    subcategory: "arabi",
    description: "Intricately woven Arabian gold choker with matching statement earrings."
  },
  {
    id: "11",
    name: "Fancy Designer Gold Set",
    price: 145000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b1544e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "SET",
    type: "fancy",
    subcategory: "fancy",
    description: "Modern fusion fancy gold set crafted for contemporary celebratory wear."
  },
  {
    id: "12",
    name: "Traditional Long Haram Set",
    price: 260000,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "SET",
    type: "long",
    subcategory: "long",
    description: "Grand traditional long gold necklace set with divine goddess carvings."
  },
  {
    id: "13",
    name: "Turkish Filigree Gold Set",
    price: 230000,
    image: "https://images.unsplash.com/photo-1599643478514-4668b5952f44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "SET",
    type: "turkey",
    subcategory: "turkey",
    description: "Authentic Turkish filigree pattern gold necklace and earring set."
  },

  // --- ADDED PRODUCTS FOR NOSEPIN & NATH ---
  {
    id: "14",
    name: "Single Solitaire Diamond Nosepin",
    price: 18000,
    image: "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "NOSEPIN",
    type: "diamond-nosepin",
    subcategory: "diamond-nosepin",
    description: "Minimalist single stone diamond nosepin set in 18k yellow gold."
  },
  {
    id: "15",
    name: "Classic Gold Wire Nose Pin",
    price: 9500,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "NOSEPIN",
    type: "gold-wire-nosepin",
    subcategory: "gold-wire-nosepin",
    description: "Handcrafted flexible 22k gold wire nosepin for delicate everyday wear."
  },

  // --- ADDED PRODUCTS FOR BALI & EARRINGS ---
  {
    id: "16",
    name: "Pure Gold Plain Bali",
    price: 28000,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "BALI",
    type: "gold-plain-bali",
    subcategory: "gold-plain-bali",
    description: "Smooth polished classic gold hoops designed for comfort and shine."
  },
  {
    id: "17",
    name: "Fancy Carved Gold Bali",
    price: 36000,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "BALI",
    type: "fancy-bali",
    subcategory: "fancy-bali",
    description: "Laser cut fancy patterned gold balis with intricate texture work."
  },

  // --- ADDED PRODUCTS FOR BANGLES & BRACELETS ---
  {
    id: "18",
    name: "Gold Patla Bangle Pair",
    price: 125000,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "BANGLES",
    type: "gold-patla",
    subcategory: "gold-patla",
    description: "Broad traditional gold patlas with royal meenakari border finish."
  },
  {
    id: "19",
    name: "Bridal Heavy Chooda Bangles",
    price: 240000,
    image: "https://images.unsplash.com/photo-1535632787350-4e68e0d16c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "BANGLES",
    type: "bridal-bangles",
    subcategory: "bridal-bangles",
    description: "Heavy wedding bangle set studded with uncut gemstones and gold beads."
  },

  // --- ADDED PRODUCTS FOR MANGALSUTRA ---
  {
    id: "20",
    name: "Short Solitaire Diamond Mangalsutra",
    price: 68000,
    image: "https://images.unsplash.com/photo-1599643478514-4668b5952f44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "MANGALSUTRA",
    type: "diamond-mangalsutra",
    subcategory: "diamond-mangalsutra",
    description: "Modern office-wear short black-bead mangalsutra with diamond pendant."
  },
  {
    id: "21",
    name: "Antique Traditional Vati Mangalsutra",
    price: 115000,
    image: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "MANGALSUTRA",
    type: "long-antique-mangalsutra",
    subcategory: "long-antique-mangalsutra",
    description: "Double strand long gold mangalsutra with traditional dual vati design."
  },

  // --- ADDED PRODUCTS FOR CHAINS & PENDALS ---
  {
    id: "22",
    name: "Classic Rope Gold Chain",
    price: 45000,
    image: "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "CHAIN",
    type: "rope-chain",
    subcategory: "rope-chain",
    description: "Sturdy 22k yellow gold twisted rope chain with high durability."
  },
  {
    id: "23",
    name: "Ganesh Motif Temple Pendal",
    price: 32000,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "PENDAL",
    type: "temple-pendal",
    subcategory: "temple-pendal",
    description: "Sacred temple jewelry gold pendant depicting divine Lord Ganesha."
  }
];