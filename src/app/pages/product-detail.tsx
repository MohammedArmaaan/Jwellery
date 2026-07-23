import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck } from "lucide-react";
import { useStore } from "../store";
import { allProducts } from "../data";

export function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === id) || allProducts[0];
  
  const { isInWishlist, addToWishlist, removeFromWishlist, isInCart, addToCart } = useStore();
  const wishlisted = isInWishlist(product.id);
  const carted = isInCart(product.id);

  const handleWishlist = () => {
    if (wishlisted) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  const handleAddToCart = () => {
    if (!carted) addToCart(product);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#fcf9f9]">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/products" className="inline-flex items-center gap-2 mb-8 text-[#9e8a85] hover:text-[#8b6f5e] transition-colors">
          <ArrowLeft className="w-5 h-5" /> Back to Collections
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div 
            className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-wider mb-2" style={{ color: '#9e8a85' }}>{product.category}</p>
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>
              {product.name}
            </h1>
            <p className="text-3xl mb-6 font-semibold" style={{ color: '#8b6f5e' }}>₹{product.price.toLocaleString('en-IN')}</p>
            
            <div className="flex items-center gap-1 mb-8 text-[#d4a373]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              <span className="ml-2 text-[#9e8a85]">(12 Reviews)</span>
            </div>

            <p className="text-lg leading-relaxed mb-10" style={{ color: '#9e8a85' }}>
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={handleAddToCart}
                className="flex-1 py-4 rounded-full text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #8b6f5e 0%, #d4a373 100%)' }}
              >
                <ShoppingCart className="w-5 h-5" />
                {carted ? "Added to Cart" : "Add to Cart"}
              </button>
              <button 
                onClick={handleWishlist}
                className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-[#8b6f5e] text-[#8b6f5e] hover:bg-[#8b6f5e] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" style={{ fill: wishlisted ? 'currentColor' : 'none' }} />
                {wishlisted ? "Saved" : "Wishlist"}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#d4a373]" />
                <div>
                  <h4 className="font-semibold text-[#3d2422]">100% Certified</h4>
                  <p className="text-sm text-[#9e8a85]">Authenticity guaranteed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-8 h-8 text-[#d4a373]" />
                <div>
                  <h4 className="font-semibold text-[#3d2422]">Free Shipping</h4>
                  <p className="text-sm text-[#9e8a85]">Insured delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
