import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Trash2, ArrowRight } from "lucide-react";
import { useStore } from "../store";

export function Cart() {
  const { cart, removeFromCart } = useStore();

  const subtotal = cart.reduce((total, item) => total + item.price, 0);

  // WhatsApp Number (Aap apna actual number yaha daal sakte hain)
  const WHATSAPP_NUMBER = "919624848904";

  // Sabhi cart items ko sequence me read karke WhatsApp message generate karne ka function
  const handleWhatsAppInquiry = () => {
    if (cart.length === 0) return;

    let message = "Hello! I would like to inquire about the following items in my cart:\n\n";

    // Cart ke har item ko loop karke message string me add karna
    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n`;
      message += `   Category: ${item.category}\n`;
      message += `   Price: ₹${item.price.toLocaleString('en-IN')}\n\n`;
    });

    // Total Amount add karna
    message += `*Total Amount: ₹${subtotal.toLocaleString('en-IN')}*\n\n`;
    message += "Could you please share more details or the next steps for purchase?";

    // Message ko URL safe banana aur WhatsApp URL open karna
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#fcf9f9]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          className="text-4xl md:text-5xl mb-8"
          style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your Cart
        </motion.h1>

        {cart.length === 0 ? (
          <motion.div 
            className="text-center py-20 bg-white rounded-2xl shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl mb-6" style={{ color: '#9e8a85' }}>Your cart is beautifully empty.</p>
            <Link to="/products">
              <button 
                className="px-8 py-3 rounded-full text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
                style={{ background: 'linear-gradient(135deg, #8b6f5e 0%, #d4a373 100%)' }}
              >
                Explore Collections <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {/* Cart Items Section */}
            <div className="md:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-2xl shadow-sm relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-full sm:w-24 h-40 sm:h-24 rounded-lg overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center pr-8 sm:pr-0">
                    <h3 className="text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>{item.name}</h3>
                    <p className="text-sm uppercase tracking-wider mt-1 mb-2" style={{ color: '#9e8a85' }}>{item.category}</p>
                    <p className="font-semibold" style={{ color: '#8b6f5e' }}>₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  
                  {/* Delete Button - Positioned absolutely on mobile for better space usage, normally flow on desktop */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4 sm:static sm:self-center p-2 hover:bg-red-50 rounded-full transition-colors text-red-400 hover:text-red-600 z-10 bg-white shadow-sm sm:shadow-none"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Order Summary Section */}
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm h-fit sticky top-28"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span style={{ color: '#9e8a85' }}>Subtotal ({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
                <span style={{ color: '#3d2422' }}>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span style={{ color: '#9e8a85' }}>Shipping</span>
                <span style={{ color: '#d4a373' }}>Complimentary</span>
              </div>
              <div className="h-px bg-gray-100 my-4" />
              <div className="flex justify-between mb-8 font-semibold text-xl">
                <span style={{ color: '#3d2422' }}>Total</span>
                <span style={{ color: '#8b6f5e' }}>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              
              {/* WhatsApp Inquiry Button */}
              <button 
                onClick={handleWhatsAppInquiry}
                className="w-full py-4 px-4 rounded-full text-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 flex items-center justify-center gap-3 font-medium cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  fill="currentColor" 
                  className="w-5 h-5 flex-shrink-0"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                <span className="truncate">Inquire on WhatsApp</span>
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}