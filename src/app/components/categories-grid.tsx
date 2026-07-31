import { motion } from "motion/react";
import { CategoryCard } from "./category-card";
import { useNavigate } from "react-router-dom";
import { SetsCollection } from "../pages/sets-collection";

const categories = [
  { title: "NOSEPIN", image: "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "BALI", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "PENDAL", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "TARBUTTI", image: "https://images.unsplash.com/photo-1605100804763-247f67b1544e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "BABY RING", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "BUTTI", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "PENDAL SET", image: "https://images.unsplash.com/photo-1599643478514-4668b5952f44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "LADIES RING", image: "https://images.unsplash.com/photo-1535632787350-4e68e0d16c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "GENTS RING", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "CHAIN", image: "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "SET", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "ZULA", image: "https://images.unsplash.com/photo-1605100804763-247f67b1544e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "BANGLES", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "MANGALSUTRA", image: "https://images.unsplash.com/photo-1599643478514-4668b5952f44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "LUCKY", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "BRACELET", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "KADI JUMMAKI", image: "https://images.unsplash.com/photo-1535632787350-4e68e0d16c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "KANCHAIN", image: "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "TIKA & NATH", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "BHUGADI", image: "https://images.unsplash.com/photo-1605100804763-247f67b1544e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "BALL CHAIN", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" },
  { title: "VEL KATI", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" }
];

export function CategoriesGrid() {
  const navigate = useNavigate();

  // 🔥 Slug generator for URLs
  const generateSlug = (title: string) => 
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-[#f8e8e8] to-[#fef5f5] relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10 pb-[40px] md:pb-[60px]">
        
        {/* Header Content */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} // Fast animation (was 0.8)
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-6xl mb-2 md:mb-4" 
            style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
          >
            Our Collections
          </h2>
          <h3 
            className="text-xl md:text-3xl mb-2 md:mb-4 px-2" 
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            Curated for Every Sacred Occasion
          </h3>
          <p 
            className="text-sm md:text-lg max-w-2xl mx-auto px-4" 
            style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
          >
            From timeless traditions to contemporary elegance
          </p>
        </motion.div>

        {/* 
          Grid Layout: 
          Mobile: grid-cols-2 (2 cards per line), smaller gap (gap-3) 
          Desktop: grid-cols-3 or 4, larger gap (md:gap-8)
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              delay={index * 0.04} // Fast sequential appear (was 0.1)
              onClick={() => navigate(`/category/${generateSlug(category.title)}`)}
            />
          ))}
        </div>
      </div>
      
      {/* Sets Collection Component */}
      <SetsCollection />
      
    </section> 
  );
}
