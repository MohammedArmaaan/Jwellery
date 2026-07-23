import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Trash2, ArrowRight } from "lucide-react";
import { useStore } from "../store";

export function Cart() {
  const { cart, removeFromCart } = useStore();

  const subtotal = cart.reduce((total, item) => total + item.price, 0);

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
            <div className="md:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-lg" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>{item.name}</h3>
                    <p className="text-sm uppercase tracking-wider mt-1 mb-2" style={{ color: '#9e8a85' }}>{item.category}</p>
                    <p className="font-semibold" style={{ color: '#8b6f5e' }}>₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 self-center hover:bg-red-50 rounded-full transition-colors text-red-400 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm h-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span style={{ color: '#9e8a85' }}>Subtotal</span>
                <span style={{ color: '#3d2422' }}>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span style={{ color: '#9e8a85' }}>Shipping</span>
                <span style={{ color: '#d4a373' }}>Complimentary</span>
              </div>
              <div className="h-px bg-gray-100 my-4" />
              <div className="flex justify-between mb-8 font-semibold text-lg">
                <span style={{ color: '#3d2422' }}>Total</span>
                <span style={{ color: '#8b6f5e' }}>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <button 
                className="w-full py-4 rounded-full text-white shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #8b6f5e 0%, #d4a373 100%)' }}
              >
                Proceed to Checkout
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
