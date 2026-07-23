import { motion } from "motion/react";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../store";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  delay?: number;
}

export function ProductCard({ id, name, price, image, category, delay = 0 }: ProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist, isInCart, addToCart } = useStore();
  const wishlisted = isInWishlist(id);
  const carted = isInCart(id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (wishlisted) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, price, image, category });
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!carted) {
      addToCart({ id, name, price, image, category });
    }
  };

  return (
    <Link to={`/product/${id}`}>
      <motion.div
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden group">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Wishlist Button */}
          <motion.button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md z-10"
            onClick={handleWishlist}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart
              className="w-5 h-5"
              style={{
                color: wishlisted ? '#d4183d' : '#9e8a85',
                fill: wishlisted ? '#d4183d' : 'none'
              }}
            />
          </motion.button>

          {/* Quick Add Button */}
          <motion.button
            className="absolute bottom-4 left-4 right-4 py-3 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center gap-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: carted ? 'green' : '#8b6f5e'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{carted ? "Added to Cart" : "Quick Add"}</span>
          </motion.button>
        </div>

        {/* Product Info */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <p 
              className="text-xs uppercase tracking-wider mb-1"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
            >
              {category}
            </p>
            <h3 
              className="text-lg mb-2 line-clamp-2"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              {name}
            </h3>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p 
              className="text-xl"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#8b6f5e', fontWeight: 600 }}
            >
              ₹{price.toLocaleString('en-IN')}
            </p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
              <p 
                className="text-xs"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#d4a373' }}
              >
                Certified
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
