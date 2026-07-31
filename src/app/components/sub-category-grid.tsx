import { useEffect } from "react";
import { motion } from "motion/react";
import { CategoryCard } from "./category-card"; 
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type SubCategory = {
  title: string;
  image: string;
};

type SubCategoryData = {
  [key: string]: SubCategory[];
};

// Reliable placeholder images for jewelry
const img1 = "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80";
const img2 = "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80";
const img3 = "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80";
const img4 = "https://images.unsplash.com/photo-1605100804763-247f67b1544e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80";
const img5 = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80";
const img6 = "https://images.unsplash.com/photo-1535632787350-4e68e0d16c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80";

// Sabhi categories ke slugs ke hisaab se unka data
const subCategoryData: SubCategoryData = {
  "nosepin": [
    { title: "Diamond Nosepin", image: img1 },
    { title: "Gold Wire Nosepin", image: img2 },
    { title: "Maharashtrian Nath", image: img4 },
  ],
  "bali": [
    { title: "Gold Plain Bali", image: img2 },
    { title: "Fancy Bali", image: img3 },
    { title: "Diamond Bali", image: img1 },
  ],
  "pendal": [
    { title: "Antique Pendal", image: img6 },
    { title: "Temple Pendal", image: img3 },
    { title: "Fancy Gold Pendal", image: img2 },
  ],
  "tarbutti": [
    { title: "Traditional Tarbutti", image: img4 },
    { title: "Daily Wear Tarbutti", image: img5 },
  ],
  "baby-ring": [
    { title: "Gold Baby Ring", image: img5 },
    { title: "Name Engraved Ring", image: img2 },
  ],
  "butti": [
    { title: "Gold Studs", image: img1 },
    { title: "Jhumka Butti", image: img4 },
    { title: "Diamond Butti", image: img3 },
  ],
  "pendal-set": [
    { title: "Kundan Pendal Set", image: img3 },
    { title: "Antique Pendal Set", image: img6 },
  ],
  "ladies-ring": [
    { title: "Engagement Ring", image: img1 },
    { title: "Cocktail Ring", image: img3 },
    { title: "Solitaire Ring", image: img5 },
  ],
  "gents-ring": [
    { title: "Gold Band", image: img2 },
    { title: "Signet Ring", image: img6 },
    { title: "Diamond Gents Ring", image: img1 },
  ],
  "chain": [
    { title: "Rope Chain", image: img2 },
    { title: "Box Chain", image: img5 },
    { title: "Curb Chain", image: img6 },
  ],
  "zula": [
    { title: "Traditional Zula", image: img4 },
    { title: "Bridal Zula", image: img6 },
  ],
  "bangles": [
    { title: "Gold Patla", image: img5 },
    { title: "Bridal Bangles", image: img6 },
    { title: "Daily Wear Bangles", image: img2 },
  ],
  "mangalsutra": [
    { title: "Short Mangalsutra", image: img1 },
    { title: "Long Antique Mangalsutra", image: img6 },
    { title: "Diamond Mangalsutra", image: img3 },
  ],
  "lucky": [
    { title: "Baby Lucky", image: img5 },
    { title: "Gents Lucky", image: img2 },
    { title: "Ladies Gold Lucky", image: img1 },
  ],
  "bracelet": [
    { title: "Tennis Bracelet", image: img1 },
    { title: "Charm Bracelet", image: img3 },
    { title: "Chain Bracelet", image: img2 },
  ],
  "kadi-jummaki": [
    { title: "Traditional Kadi", image: img4 },
    { title: "Bridal Jummaki", image: img6 },
  ],
  "kanchain": [
    { title: "Gold Kanchain", image: img2 },
    { title: "Moti Kanchain", image: img5 },
  ],
  "tika-nath": [ // 🔥 FIX: Updated slug to match generated URL from CategoriesGrid
    { title: "Bridal Tika", image: img6 },
    { title: "Kundan Tika", image: img3 },
    { title: "Peshwai Nath", image: img4 },
  ],
  "bhugadi": [
    { title: "Gold Bhugadi", image: img4 },
    { title: "Pearl Bhugadi", image: img5 },
  ],
  "ball-chain": [
    { title: "Simple Ball Chain", image: img2 },
    { title: "Fancy Ball Chain", image: img3 },
  ],
  "vel-kati": [
    { title: "Traditional Vel", image: img4 },
    { title: "Bridal Vel Kati", image: img6 },
  ]
};

export function SubCategoryGrid() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>(); 
  
  // Page load hone par top par scroll karega
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const safeSlug = slug || "";
  const subCategories = subCategoryData[safeSlug] || [];
  
  // Format slug to readable title (e.g. "ladies-ring" -> "Ladies Ring")
  const categoryTitle = safeSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('&', '&');

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#f8e8e8] to-[#fef5f5] relative min-h-screen overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10 pb-[40px]">
        
        {/* Back Button (Mobile par thoda chota) */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 md:gap-2 mb-6 md:mb-8 text-sm md:text-base text-[#8b6f5e] hover:text-[#3d2422] transition-colors duration-300 font-medium cursor-pointer ml-1 md:ml-0"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5" />
          Back to Collections
        </button>

        {/* Header Section (Scaled for mobile) */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} // Fast animation
        >
          <h2 className="text-4xl md:text-6xl mb-2 md:mb-4" style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}>
            {categoryTitle || "Collection"}
          </h2>
          <h3 className="text-xl md:text-3xl mb-2 md:mb-4 px-2" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>
            Discover Our Exclusive Range
          </h3>
          <p className="text-sm md:text-lg max-w-2xl mx-auto px-4" style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}>
            Explore the beautiful variations and styles within {categoryTitle ? categoryTitle.toLowerCase() : "this category"}
          </p>
        </motion.div>

        {subCategories.length > 0 ? (
          /* Grid Layout: grid-cols-2 for mobile with gap-3 */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
            {subCategories.map((subCategory, index) => (
              <CategoryCard
                key={subCategory.title}
                title={subCategory.title}
                image={subCategory.image}
                delay={index * 0.04} // Fast sequential appear
                onClick={() => navigate(`/products?category=${safeSlug}&type=${subCategory.title.toLowerCase().replace(/\s+/g, '-')}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#8b6f5e]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <p className="text-lg md:text-xl">No collections found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}