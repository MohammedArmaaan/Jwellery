import { useRef } from "react";
import { HeroSection } from "../components/hero-section";
import { ScrollytellingSection } from "../components/scrollytelling-section";
import { FeaturesSection } from "../components/features-section";
import { CategoriesGrid } from "../components/categories-grid";
import { ProductCard } from "../components/product-card";
import { TestimonialsSection } from "../components/testimonials-section";
import { motion } from "motion/react";
// Import categoriesList as well from your data file
import { allProducts, categoriesList } from "../data"; 

export function Home() {
  const categoriesRef = useRef<HTMLDivElement>(null);

  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 1. Get up to the first 4 categories available
  const top4Categories = categoriesList.slice(0, 4);

  // 2. Map through those 4 categories and grab the SECOND product (index 1) of each. 
  // If a category only has 1 product, it safely falls back to the first one (index 0).
  const featuredProducts = top4Categories.map(category => {
    const productsInCategory = allProducts.filter(product => product.category === category);
    return productsInCategory.length > 1 ? productsInCategory[1] : productsInCategory[0];
  });

  return (
    <>
      <h1 className="sr-only">Anny Jewellery, Anny Jewellers and Anny Jewels — Premium Jewellery Store</h1>
      <HeroSection onExploreClick={scrollToCategories} />
      
      <FeaturesSection />

      <section className="py-20 md:py-32 bg-gradient-to-b from-[#fef5f5] to-[#f8e8e8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-5xl md:text-6xl mb-4"
              style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
            >
              Featured Treasures
            </h2>
            <h3
              className="text-xl md:text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              Handpicked for You
            </h3>
            <p 
              className="text-sm md:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
            >
              Discover our most cherished pieces, each telling its own divine story
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      <ScrollytellingSection />
      <div ref={categoriesRef}>
        <CategoriesGrid />
      </div>
      <TestimonialsSection />     
    </>
  );
}