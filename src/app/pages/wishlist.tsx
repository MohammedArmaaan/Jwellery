import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/product-card";
import { useStore } from "../store";

export function Wishlist() {
  const { wishlist } = useStore();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#fcf9f9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 
          className="text-4xl md:text-5xl mb-8 text-center"
          style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your Wishlist
        </motion.h1>

        {wishlist.length === 0 ? (
          <motion.div 
            className="text-center py-20 bg-white rounded-2xl shadow-sm max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl mb-6" style={{ color: '#9e8a85' }}>You haven't saved any treasures yet.</p>
            <Link to="/products">
              <button 
                className="px-8 py-3 rounded-full text-white shadow-md hover:shadow-lg transition-all duration-300 mx-auto"
                style={{ background: 'linear-gradient(135deg, #8b6f5e 0%, #d4a373 100%)' }}
              >
                Discover Pieces
              </button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {wishlist.map((product, index) => (
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
        )}
      </div>
    </div>
  );
}
