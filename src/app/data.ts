// All Products List
const productCatalog = [
  // --- ORIGINAL PRODUCTS (Gold/Diamond) ---
  
  // --- NEW PRODUCTS ADDED FROM LOCAL 'public/Products' FOLDER (Silver) ---
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
    name: "Elegant Silver Pendant Necklace",
    price: 13500,
    image: "/Products/PendentSet3.png", // Extension updated to .png
    category: "PENDAL SET",
    metal: "silver",
    type: "silver-pendant-set",
    subcategory: "silver-pendant-set",
    description: "A stunning silver pendant showcased on a sleek chain."
  },
  {
    id: "11",
    name: "Purple Stone Silver Pendant Set",
    price: 18000,
    image: "/Products/PendentSet3.1.png", // Extension updated to .png
    category: "PENDAL SET",
    metal: "silver",
    type: "silver-pendant-set",
    subcategory: "silver-pendant-set",
    description: "A gorgeous silver matching pendant and earring set adorned with purple stones."
  }
];

export const allProducts = productCatalog.filter((product) => product.image.startsWith("/Products/"));
export const categoriesList = [...new Set(allProducts.map((product) => product.category))];