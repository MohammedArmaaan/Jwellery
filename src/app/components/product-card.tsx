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

  const WHATSAPP_NUMBER = "919624848904"; 

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (wishlisted) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, price, image, category });
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!carted) {
      addToCart({ id, name, price, image, category });
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    const message = `Hello! I am interested in your beautiful jewellery piece:\n\n*${name}*\nCategory: ${category}\nPrice: ₹${price.toLocaleString('en-IN')}\n\nCould you please share more details?`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Link to={`/product/${id}`}>
      <motion.div
        className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Wishlist Button (Mobile pe thoda chota) */}
          <motion.button
            className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md z-10"
            onClick={handleWishlist}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart
              className="w-4 h-4 md:w-5 md:h-5"
              style={{
                color: wishlisted ? '#d4183d' : '#9e8a85',
                fill: wishlisted ? '#d4183d' : 'none'
              }}
            />
          </motion.button>

          {/* Action Buttons Container (Cart & WhatsApp) */}
          <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 flex items-center gap-1 md:gap-2 z-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            
            {/* Quick Add Button */}
            <motion.button
              className="flex-1 py-1.5 px-1 md:py-3 md:px-2 rounded-lg md:rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center gap-1 md:gap-2 shadow-md truncate"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: carted ? 'green' : '#8b6f5e',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              {/* Text size responsive banaya hai */}
              <span className="truncate text-[9px] md:text-xs font-medium">
                {carted ? "In Cart" : "Quick Add"}
              </span>
            </motion.button>

            {/* WhatsApp Icon Button (Mobile pe size reduce kiya hai) */}
            <motion.button
              onClick={handleWhatsAppClick}
              className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0 rounded-lg md:rounded-xl flex items-center justify-center shadow-md text-white"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Inquire on WhatsApp"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                fill="currentColor" 
                className="w-4 h-4 md:w-6 md:h-6"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Product Info (Yahan sab text mobile ke liye chota kiya gaya hai) */}
        <div className="p-2 md:p-4 flex-1 flex flex-col justify-between">
          <div>
            <p 
              className="text-[9px] md:text-xs uppercase tracking-wider mb-0.5 md:mb-1"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
            >
              {category}
            </p>
            <h3 
              className="text-sm md:text-lg mb-1 md:mb-2 line-clamp-2 leading-tight md:leading-normal"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              {name}
            </h3>
          </div>
          
          <div className="flex items-center justify-between mt-1 md:mt-2">
            <p 
              className="text-sm md:text-xl"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#8b6f5e', fontWeight: 600 }}
            >
              ₹{price.toLocaleString('en-IN')}
            </p>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#d4a373]" />
              <p 
                className="text-[9px] md:text-xs"
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