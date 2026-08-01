import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { CategoryCard } from "./category-card";
import { allProducts } from "../data";

const categories = [...new Map(allProducts.map((product) => [product.category, product])).values()];

export function CategoriesGrid() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-[#f8e8e8] to-[#fef5f5] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10 pb-[40px] md:pb-[60px]">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-2 md:mb-4" style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}>
            Our Collections
          </h2>
          <h3 className="text-xl md:text-3xl mb-2 md:mb-4 px-2" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>
            Curated for Every Sacred Occasion
          </h3>
          <p className="text-sm md:text-lg max-w-2xl mx-auto px-4" style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}>
            From timeless traditions to contemporary elegance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8"
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.category}
              title={category.category}
              image={category.image}
              delay={index * 0.04}
              onClick={() => navigate(`/products?category=${encodeURIComponent(category.category)}`)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
