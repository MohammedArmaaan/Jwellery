// All Products List
const productCatalog = [
  // --- ORIGINAL PRODUCTS (Gold/Diamond) ---
  
  // --- NEW PRODUCTS ADDED FROM LOCAL 'public/Products' FOLDER (Silver) ---
  {
    id: "1",
    name: "Classic Silver Kada Bangle",
    price: 15000,
    image: "/Products/Bangel1.png", 
    category: "BANGLES",
    metal: "silver",
    type: "daily-wear-bangles",
    subcategory: "daily-wear-bangles",
    description: "A beautifully crafted pure silver bangle, perfect for everyday elegance."
  },
  {
    id: "2",
    name: "Twisted Silver Bangle Design",
    price: 16500,
    image: "/Products/Bangle2.png", 
    category: "BANGLES",
    metal: "silver",
    type: "daily-wear-bangles",
    subcategory: "daily-wear-bangles",
    description: "Elegant twisted design silver bangle offering a modern aesthetic."
  },
  {
    id: "3",
    name: "Beaded Silver Bangle Set",
    price: 22000,
    image: "/Products/Bangles3.png", 
    category: "BANGLES",
    metal: "silver",
    type: "daily-wear-bangles",
    subcategory: "daily-wear-bangles",
    description: "A delicate set of silver bangles detailed with fine beadwork."
  },
  {
    id: "4",
    name: "Dainty Silver Drop Earrings",
    price: 5500,
    image: "/Products/Earing1.png", 
    category: "EAR RINGS & BUTTI",
    metal: "silver",
    type: "jhumka-butti", 
    subcategory: "jhumka-butti",
    description: "Charming silver drop earrings perfect for subtle daily wear."
  },
  {
    id: "5",
    name: "Emerald-Style Silver Drop Earrings",
    price: 8500,
    image: "/Products/Earing2.png", 
    category: "EAR RINGS & BUTTI",
    metal: "silver",
    type: "diamond-butti", 
    subcategory: "diamond-butti",
    description: "Striking silver earrings set with vibrant green stones."
  },
  {
    id: "6",
    name: "Amethyst-Style Silver Earrings",
    price: 9000,
    image: "/Products/Earing3.png", 
    category: "EAR RINGS & BUTTI",
    metal: "silver",
    type: "diamond-butti",
    subcategory: "diamond-butti",
    description: "Elegant silver drop earrings featuring deep purple stones."
  },
  {
    id: "7",
    name: "Silver Floral Stud Earrings",
    price: 6500,
    image: "/Products/Earing4.png", 
    category: "EAR RINGS & BUTTI",
    metal: "silver",
    type: "silver-studs",
    subcategory: "silver-studs", 
    description: "Classic floral motif silver stud earrings presented in a luxury box."
  },
  {
    id: "8",
    name: "Purple Stone Silver Pendant Set",
    price: 18000,
    image: "/Products/PendentSet3.1.png", 
    category: "PENDAL SET",
    metal: "silver",
    type: "silver-pendant-set",
    subcategory: "silver-pendant-set",
    description: "A gorgeous silver matching pendant and earring set adorned with purple stones."
  },
  {
    id: "9",
    name: "Classic Silver Pendant Set",
    price: 14500,
    image: "/Products/PendentSet2.png", 
    category: "PENDAL SET",
    metal: "silver",
    type: "silver-pendant-set",
    subcategory: "silver-pendant-set",
    description: "Beautifully designed silver pendant set suitable for all occasions."
  },
  {
    id: "10",
    name: "Elegant Silver Pendant Necklace",
    price: 13500,
    image: "/Products/PendentSet3.png", 
    category: "PENDAL SET",
    metal: "silver",
    type: "silver-pendant-set",
    subcategory: "silver-pendant-set",
    description: "A stunning silver pendant showcased on a sleek chain."
  },
  {
    id: "11",
    name: "Minimalist Silver Pendant Set",
    price: 12000,
    image: "/Products/PendentSet1.png", 
    category: "PENDAL SET",
    metal: "silver",
    type: "silver-pendant-set",
    subcategory: "silver-pendant-set",
    description: "A refined silver pendant and chain set offering a clean, minimalist look."
  },
  // --- NEW BRACELET PRODUCTS ---
  {
    id: "12",
    name: "Pink Stone Snake Chain Silver Bracelet",
    price: 8500,
    image: "/Products/Breslate1.png", 
    category: "BRACELETS",
    metal: "silver",
    type: "silver-bracelet",
    subcategory: "silver-bracelet",
    description: "Elegant snake chain silver bracelet featuring a striking pink stone centerpiece."
  },
  {
    id: "13",
    name: "Emerald Green Stone Silver Bracelet",
    price: 10500,
    image: "/Products/Breslate5.png", 
    category: "BRACELETS",
    metal: "silver",
    type: "silver-bracelet",
    subcategory: "silver-bracelet",
    description: "A gorgeous silver bracelet featuring vibrant emerald green stone settings."
  },
  {
    id: "14",
    name: "Multicolor Beaded Silver Bracelet",
    price: 8000,
    image: "/Products/Breslate6.png", 
    category: "BRACELETS",
    metal: "silver",
    type: "silver-bracelet",
    subcategory: "silver-bracelet",
    description: "A unique and playful silver bracelet featuring purple and green beaded accents."
  },
  {
    id: "15",
    name: "Classic Cylinder Link Silver Bracelet",
    price: 7500,
    image: "/Products/Breslate4.png", 
    category: "BRACELETS",
    metal: "silver",
    type: "silver-bracelet",
    subcategory: "silver-bracelet",
    description: "Minimalist and classic silver bracelet crafted with polished cylinder-style links."
  },
  {
    id: "16",
    name: "Ruby Heart Silver Link Bracelet",
    price: 11000,
    image: "/Products/Breslate3.png", 
    category: "BRACELETS",
    metal: "silver",
    type: "silver-bracelet",
    subcategory: "silver-bracelet",
    description: "Stunning silver link bracelet adorned with ruby-colored stones and romantic heart motifs."
  },
  {
    id: "17",
    name: "Geometric Link Silver Bracelet",
    price: 9200,
    image: "/Products/Breslate2.png", 
    category: "BRACELETS",
    metal: "silver",
    type: "silver-bracelet",
    subcategory: "silver-bracelet",
    description: "Beautiful silver bracelet with intricate geometric links and subtle stone details."
  },
  // --- NEW RING SETS ---
  {
    id: "18",
    name: "Complete Silver Ring Assortment",
    price: 45000,
    image: "/Products/Set1.png", 
    category: "Ring sets",
    metal: "silver",
    type: "ring-set",
    subcategory: "silver-rings",
    description: "A comprehensive collection of beautiful silver rings featuring various stones and designs."
  },
  {
    id: "19",
    name: "Classic Gold Ring Collection",
    price: 85000,
    image: "/Products/Set2.png", 
    category: "Ring sets",
    metal: "gold",
    type: "ring-set",
    subcategory: "gold-rings",
    description: "An elegant display set featuring a wide variety of traditional and modern gold rings."
  },
  {
    id: "20",
    name: "Premium Gemstone Ring Display",
    price: 65000,
    image: "/Products/Set3.png", 
    category: "Ring sets",
    metal: "silver",
    type: "ring-set",
    subcategory: "gemstone-rings",
    description: "A luxurious set of elegant rings set with vibrant, colorful gemstones presented in a red velvet box."
  }
];

export const allProducts = productCatalog.filter((product) => product.image.startsWith("/Products/"));
export const categoriesList = [...new Set(allProducts.map((product) => product.category))];