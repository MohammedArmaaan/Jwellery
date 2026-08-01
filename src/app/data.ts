// All Products List
const productCatalog = [
  // --- ORIGINAL PRODUCTS (Gold/Diamond) ---
  {
    id: "1",
    name: "Divine Diamond Necklace Set",
    price: 185000,
    image: "https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlfGVufDF8fHx8MTc2OTI5MzI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Necklaces",
    metal: "gold",
    type: "necklace",
    subcategory: "diamond-necklace",
    description: "An extraordinary piece of art, this diamond necklace set embodies the pure essence of luxury. Handcrafted with precision, it features flawless diamonds set in 18k gold."
  },
  {
    id: "2",
    name: "Traditional Gold Jhumkas",
    price: 42000,
    image: "https://images.unsplash.com/photo-1762686130435-897de4b26aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGpodW1rYSUyMGVhcnJpbmdzfGVufDF8fHx8MTc2OTMwODc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Earrings",
    metal: "gold",
    type: "jhumkas",
    subcategory: "jhumka-butti",
    description: "Timeless traditional jhumkas that echo the heritage of ancient craftsmanship. Made with 22k pure gold."
  },
  {
    id: "3",
    name: "Heritage Bridal Nath",
    price: 65000,
    image: "https://images.unsplash.com/photo-1740674570372-b82fb1c43478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMGpld2VscnklMjBuYXRofGVufDF8fHx8MTc2OTMwODc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Nose Rings",
    metal: "gold",
    type: "maharashtrian-nath",
    subcategory: "maharashtrian-nath",
    description: "A devotional symbol of grace, this heritage bridal nath is adorned with precious gemstones and pearls."
  },
  {
    id: "4",
    name: "Elegant Diamond Bracelet",
    price: 98000,
    image: "https://images.unsplash.com/photo-1763029513623-37d488cb97b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwYnJhY2VsZXQlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MjAyMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Bracelets",
    metal: "gold",
    type: "tennis-bracelet",
    subcategory: "tennis-bracelet",
    description: "A statement of refined taste, this elegant diamond bracelet is perfect for both everyday wear and special occasions."
  },
  {
    id: "5",
    name: "Antique Gold Choker",
    price: 155000,
    image: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxyeSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzY5MzA4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Necklaces",
    metal: "gold",
    type: "antique-gold-set",
    subcategory: "antique-gold-set",
    description: "A magnificent antique finish gold choker that draws inspiration from royal dynasties."
  },
  {
    id: "6",
    name: "Classic Diamond Studs",
    price: 85000,
    image: "https://images.unsplash.com/photo-1762019313711-8b5d1e4f7ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwamV3ZWxyeSUyMHNldHxlbnwxfHx8fDE3NjkzMDg3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Earrings",
    metal: "gold",
    type: "gold-studs",
    subcategory: "gold-studs",
    description: "Brilliant cut diamond studs set in a pristine white gold base. Minimalistic yet incredibly luxurious."
  },
  {
    id: "7",
    name: "Sacred Temple Bangle",
    price: 110000,
    image: "https://images.unsplash.com/photo-1763029513623-37d488cb97b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwYnJhY2VsZXQlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MjAyMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Bracelets",
    metal: "gold",
    type: "bangle-bracelet",
    subcategory: "bangle-bracelet",
    description: "Crafted using the age-old temple jewelry techniques, this bangle carries divine motifs and intricate filigree work."
  },
  {
    id: "8",
    name: "Kundan Statement Ring",
    price: 35000,
    image: "https://images.unsplash.com/photo-1762686130435-897de4b26aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGpodW1rYSUyMGVhcnJpbmdzfGVufDF8fHx8MTc2OTMwODc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Rings",
    metal: "gold",
    type: "cocktail-ring",
    subcategory: "cocktail-ring",
    description: "An oversized statement ring featuring authentic Kundan work and colorful meenakari detailing on the back."
  },
  {
    id: "9",
    name: "Royal Arabi Gold Set",
    price: 215000,
    image: "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "SET",
    metal: "gold",
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
    metal: "gold",
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
    metal: "gold",
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
    metal: "gold",
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
    metal: "gold",
    type: "turkey",
    subcategory: "turkey",
    description: "Authentic Turkish filigree pattern gold necklace and earring set."
  },
  {
    id: "14",
    name: "Single Solitaire Diamond Nosepin",
    price: 18000,
    image: "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "NOSEPIN",
    metal: "gold",
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
    metal: "gold",
    type: "gold-wire-nosepin",
    subcategory: "gold-wire-nosepin",
    description: "Handcrafted flexible 22k gold wire nosepin for delicate everyday wear."
  },
  {
    id: "16",
    name: "Pure Gold Plain Bali",
    price: 28000,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "BALI",
    metal: "gold",
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
    metal: "gold",
    type: "fancy-bali",
    subcategory: "fancy-bali",
    description: "Laser cut fancy patterned gold balis with intricate texture work."
  },
  {
    id: "18",
    name: "Gold Patla Bangle Pair",
    price: 125000,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "BANGLES",
    metal: "gold",
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
    metal: "gold",
    type: "bridal-bangles",
    subcategory: "bridal-bangles",
    description: "Heavy wedding bangle set studded with uncut gemstones and gold beads."
  },
  {
    id: "20",
    name: "Short Solitaire Diamond Mangalsutra",
    price: 68000,
    image: "https://images.unsplash.com/photo-1599643478514-4668b5952f44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "MANGALSUTRA",
    metal: "gold",
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
    metal: "gold",
    type: "long-antique-mangalsutra",
    subcategory: "long-antique-mangalsutra",
    description: "Double strand long gold mangalsutra with traditional dual vati design."
  },
  {
    id: "22",
    name: "Classic Rope Gold Chain",
    price: 45000,
    image: "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    category: "CHAIN",
    metal: "gold",
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
    metal: "gold",
    type: "temple-pendal",
    subcategory: "temple-pendal",
    description: "Sacred temple jewelry gold pendant depicting divine Lord Ganesha."
  },

  // --- NEW PRODUCTS ADDED FROM LOCAL 'public/Products' FOLDER (Silver) ---
  {
    id: "24",
    name: "Classic Silver Kada Bangle",
    price: 15000,
    image: "/Products/Bangel1.png", // Extension updated to .png
    category: "BANGLES",
    metal: "silver",
    type: "daily-wear-bangles",
    subcategory: "daily-wear-bangles",
    description: "A beautifully crafted pure silver bangle, perfect for everyday elegance."
  },
  {
    id: "25",
    name: "Twisted Silver Bangle Design",
    price: 16500,
    image: "/Products/Bangle2.png", // Extension updated to .png
    category: "BANGLES",
    metal: "silver",
    type: "daily-wear-bangles",
    subcategory: "daily-wear-bangles",
    description: "Elegant twisted design silver bangle offering a modern aesthetic."
  },
  {
    id: "26",
    name: "Beaded Silver Bangle Set",
    price: 22000,
    image: "/Products/Bangles3.png", // Extension updated to .png
    category: "BANGLES",
    metal: "silver",
    type: "daily-wear-bangles",
    subcategory: "daily-wear-bangles",
    description: "A delicate set of silver bangles detailed with fine beadwork."
  },
  {
    id: "27",
    name: "Dainty Silver Drop Earrings",
    price: 5500,
    image: "/Products/Earing1.png", // Extension updated to .png
    category: "EAR RINGS & BUTTI",
    metal: "silver",
    type: "jhumka-butti", 
    subcategory: "jhumka-butti",
    description: "Charming silver drop earrings perfect for subtle daily wear."
  },
  {
    id: "28",
    name: "Emerald-Style Silver Drop Earrings",
    price: 8500,
    image: "/Products/Earing2.png", // Extension updated to .png
    category: "EAR RINGS & BUTTI",
    metal: "silver",
    type: "diamond-butti", 
    subcategory: "diamond-butti",
    description: "Striking silver earrings set with vibrant green stones."
  },
  {
    id: "29",
    name: "Amethyst-Style Silver Earrings",
    price: 9000,
    image: "/Products/Earing3.png", // Extension updated to .png
    category: "EAR RINGS & BUTTI",
    metal: "silver",
    type: "diamond-butti",
    subcategory: "diamond-butti",
    description: "Elegant silver drop earrings featuring deep purple stones."
  },
  {
    id: "30",
    name: "Silver Floral Stud Earrings",
    price: 6500,
    image: "/Products/Earing4.png", // Extension updated to .png
    category: "EAR RINGS & BUTTI",
    metal: "silver",
    type: "silver-studs",
    subcategory: "silver-studs", 
    description: "Classic floral motif silver stud earrings presented in a luxury box."
  },
  {
    id: "31",
    name: "Minimalist Silver Pendant Set",
    price: 12000,
    image: "/Products/PendentSet1.png", // Extension updated to .png
    category: "PENDAL SET",
    metal: "silver",
    type: "silver-pendant-set",
    subcategory: "silver-pendant-set",
    description: "A refined silver pendant and chain set offering a clean, minimalist look."
  },
  {
    id: "32",
    name: "Classic Silver Pendant Set",
    price: 14500,
    image: "/Products/PendentSet2.png", // Extension updated to .png
    category: "PENDAL SET",
    metal: "silver",
    type: "silver-pendant-set",
    subcategory: "silver-pendant-set",
    description: "Beautifully designed silver pendant set suitable for all occasions."
  },
  {
    id: "33",
    name: "Purple Stone Silver Pendant Set",
    price: 18000,
    image: "/Products/PendentSet3.1.png", // Extension updated to .png
    category: "PENDAL SET",
    metal: "silver",
    type: "silver-pendant-set",
    subcategory: "silver-pendant-set",
    description: "A gorgeous silver matching pendant and earring set adorned with purple stones."
  },
  {
    id: "34",
    name: "Elegant Silver Pendant Necklace",
    price: 13500,
    image: "/Products/PendentSet3.png", // Extension updated to .png
    category: "PENDAL SET",
    metal: "silver",
    type: "silver-pendant-set",
    subcategory: "silver-pendant-set",
    description: "A stunning silver pendant showcased on a sleek chain."
  }
];

export const allProducts = productCatalog.filter((product) => product.image.startsWith("/Products/"));
export const categoriesList = [...new Set(allProducts.map((product) => product.category))];