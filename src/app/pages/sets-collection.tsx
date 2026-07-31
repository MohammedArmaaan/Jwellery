import { useEffect } from "react";
import { motion } from "motion/react"; // Agar error aaye toh isko "framer-motion" kar ke dekhein
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react"; 

const setsData = [
  { title: "ARABI", count: 13, image: "https://images.unsplash.com/photo-1599643477874-5c36ea280947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "FANCY", count: 9, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "LONG", count: 4, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "TURKEY", count: 12, image: "https://images.unsplash.com/photo-1599643478514-4668b5952f44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
];

export function SetsCollection() {
  const navigate = useNavigate();

  // ✅ FIX: "instant" hata diya gaya hai taki browser crash na ho
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8e8e8] to-[#fef5f5] relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-10 text-[#8b6f5e] hover:text-[#3d2422] transition-colors duration-300 font-medium cursor-pointer"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <ArrowLeft size={20} />
          Home / <span className="font-semibold text-[#3d2422]">SET</span>
        </button> */}

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}>
            Exclusive Sets
          </h2>
          <p className="text-lg text-[#9e8a85]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Select a collection to view all designs
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-6">
          {setsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              onClick={() => navigate(`/products?category=set&type=${item.title.toLowerCase()}`)}
              className="flex items-center p-3 md:p-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 cursor-pointer transition-all"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden rounded-xl shadow-inner bg-gray-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              <div className="ml-6 flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-[#3d2422] tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.title} <span className="text-[#d4a373] text-lg font-medium ml-1">({item.count})</span>
                </h3>
              </div>

              <div className="pr-4">
                <ChevronRight size={28} className="text-[#8b6f5e] opacity-70" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}