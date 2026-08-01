import { useEffect } from "react";
import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck } from "lucide-react";
import { useStore } from "../store";
import { allProducts } from "../data";
import { ProductCard } from "../components/product-card"; // Ye import zarur add karein

export function ProductDetail() {
  const { id } = useParams();
  
  // Current Product find karna
  const product = allProducts.find(p => p.id === id) || allProducts[0];
  
  const { isInWishlist, addToWishlist, removeFromWishlist, isInCart, addToCart } = useStore();
  const wishlisted = isInWishlist(product.id);
  const carted = isInCart(product.id);

  // Related Products filter karna (Same category, but current product ko exclude karna)
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4); // Maximum 4 products show karne ke liye

  // 1. Page load ya id change hone par top par scroll karein
  useEffect(() => {
    // Note: Routing par instant top (0,0) zyada smooth feel deta hai
    window.scrollTo(0, 0); 
  }, [id]); 

  // WhatsApp Number
  const WHATSAPP_NUMBER = "919624848904"; 

  const handleWishlist = () => {
    if (wishlisted) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  const handleAddToCart = () => {
    if (!carted) addToCart(product);
  };

  // WhatsApp Click Handler
  const handleWhatsAppClick = () => {
    const message = `Hello! I am interested in your beautiful jewellery piece:\n\n*${product.name}*\nCategory: ${product.category}\nPrice: ₹${product.price.toLocaleString('en-IN')}\n\nCould you please share more details?`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 min-h-screen bg-[#fcf9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link to="/products" className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-xs sm:text-base text-[#9e8a85] hover:text-[#8b6f5e] transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back to Collections
        </Link>

        {/* --- MAIN PRODUCT SECTION --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
          
          {/* Product Image Section */}
          <motion.div 
            className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Product Details Section */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2 font-semibold" style={{ color: '#9e8a85', fontFamily: "'Poppins', sans-serif" }}>
              {product.category}
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>
              {product.name}
            </h1>
            <p className="text-xl sm:text-3xl mb-4 sm:mb-6 font-semibold" style={{ color: '#8b6f5e' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </p>
            
            <div className="flex items-center gap-1 mb-6 sm:mb-8 text-[#d4a373]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />)}
              <span className="ml-2 text-xs sm:text-sm text-[#9e8a85]">(12 Reviews)</span>
            </div>

            <p className="text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10" style={{ color: '#9e8a85', fontFamily: "'Poppins', sans-serif" }}>
              {product.description}
            </p>

            {/* Action Buttons Section */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-12">
              
              {/* Main Row: Add to cart + Wishlist + WhatsApp (Icon on mobile) */}
              <div className="flex flex-row gap-2 sm:gap-4">
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 py-3 sm:py-4 rounded-full text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #8b6f5e 0%, #d4a373 100%)', fontFamily: "'Poppins', sans-serif" }}
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="truncate">{carted ? "Added to Cart" : "Add to Cart"}</span>
                </button>
                
                <button 
                  onClick={handleWishlist}
                  className="w-12 h-12 sm:w-auto sm:px-8 sm:py-4 rounded-full border-2 border-[#8b6f5e] text-[#8b6f5e] hover:bg-[#8b6f5e] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shrink-0 cursor-pointer font-medium"
                >
                  <Heart className="w-5 h-5 sm:w-5 sm:h-5" style={{ fill: wishlisted ? 'currentColor' : 'none' }} />
                  <span className="hidden sm:block">{wishlisted ? "Saved" : "Wishlist"}</span>
                </button>

                <button 
                  onClick={handleWhatsAppClick}
                  className="sm:hidden w-12 h-12 rounded-full text-white shadow-md hover:shadow-lg flex items-center justify-center shrink-0 cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </button>
              </div>

              {/* WhatsApp Button for DESKTOP ONLY */}
              <button 
                onClick={handleWhatsAppClick}
                className="hidden sm:flex w-full py-4 rounded-full text-white shadow-md hover:shadow-lg transition-all duration-300 items-center justify-center gap-2 font-medium cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', fontFamily: "'Poppins', sans-serif" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                Inquire on WhatsApp
              </button>
            </div>

            {/* Features/Trust Badges */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 sm:gap-3">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#d4a373]" />
                <div style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <h4 className="font-semibold text-xs sm:text-base text-[#3d2422]">100% Certified</h4>
                  <p className="text-[10px] sm:text-sm text-[#9e8a85]">Authenticity guaranteed</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-[#d4a373]" />
                <div style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <h4 className="font-semibold text-xs sm:text-base text-[#3d2422]">Free Shipping</h4>
                  <p className="text-[10px] sm:text-sm text-[#9e8a85]">Insured delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* --- RELATED PRODUCTS SECTION --- */}
        {relatedProducts.length > 0 && (
          <motion.div 
            className="mt-24 sm:mt-32 pt-12 border-t border-[#f0e6e6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>
                You May Also Like
              </h2>
              <p className="text-[#9e8a85] mt-2 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Explore more from our {product.category} collection
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p, index) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  category={p.category}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}