import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/product-card";
import { allProducts, categoriesList } from "../data";

export function Products() {
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category") || "All";

  const [activeCategory, setActiveCategory] = useState(
    categoriesList.find(
      (category) =>
        category.toLowerCase() === categoryQuery.toLowerCase() ||
        category.toLowerCase().includes(categoryQuery.toLowerCase())
    ) || (categoryQuery.trim() === "" ? "All" : categoryQuery)
  );

  useEffect(() => {
    const matchedCategory = categoriesList.find(
      (category) =>
        category.toLowerCase() === categoryQuery.toLowerCase() ||
        category.toLowerCase().includes(categoryQuery.toLowerCase())
    );
    setActiveCategory(matchedCategory || (categoryQuery.trim() === "" ? "All" : categoryQuery));
  }, [categoryQuery]);

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter(
          (product) =>
            product.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#fcf9f9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            Divine Collections
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9e8a85' }}>
            Explore our complete range of meticulously crafted jewelry. Filter by category to find your perfect piece.
          </p>
        </motion.div>

        <div className="flex gap-4 mb-10 overflow-x-auto pb-4 hide-scrollbar justify-center">
          {categoriesList.map((cat, i) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#8b6f5e] to-[#d4a373] text-white shadow-md' 
                    : 'bg-white text-[#8b6f5e] hover:bg-[#f5e5e5] shadow-sm'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                delay={index * 0.05}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-[#9e8a85]">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
