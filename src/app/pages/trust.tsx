import { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Award, Sparkles, Gem, HeartHandshake } from "lucide-react";

const trustPillars = [
  {
    id: "hallmark-certified",
    icon: Award,
    title: "Hallmark Certified",
    content: `Every piece of gold jewelry at Anny Jewels carries the hallmark of absolute purity. We strictly adhere to BIS (Bureau of Indian Standards) hallmarking regulations. This guarantees that what you are investing in is 100% authentic and holds true to its promised caratage and value.`
  },
  {
    id: "handcrafted",
    icon: Sparkles,
    title: "Handcrafted Heritage",
    content: `Our masterpieces are brought to life by master artisans whose skills have been passed down through generations. We celebrate the intricate, time-honored techniques of Indian jewelry making, dedicating hundreds of hours to a single creation to ensure unparalleled precision and soul in every curve.`
  },
  {
    id: "authentic-gems",
    icon: Gem,
    title: "Authentic Gems",
    content: `We ethically source only the finest diamonds and precious gemstones from around the globe. Each stone is meticulously graded for its cut, clarity, color, and carat weight. Furthermore, every diamond piece is backed by internationally recognized certification, ensuring eternal brilliance and peace of mind.`
  },
  {
    id: "lifetime-care",
    icon: HeartHandshake,
    title: "Lifetime Care",
    content: `Our relationship with you doesn't end the moment you step out of our store. We proudly offer lifetime free maintenance, professional cleaning, and polishing services. We are committed to ensuring that your precious Anny Jewels heirlooms retain their divine sparkle and look as stunning as the day you bought them.`
  }
];

// Motion variants for smooth staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export function TrustPage() {
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-28 md:pb-24 min-h-screen bg-gradient-to-b from-[#f8e8e8] to-[#fef5f5] relative overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 left-10 w-64 md:w-96 h-64 md:h-96 bg-[#d4a373] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-[#e8b4b8] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 md:gap-2 mb-8 md:mb-12 text-sm md:text-base text-[#8b6f5e] hover:text-[#3d2422] transition-colors duration-300 font-medium cursor-pointer"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5" />
          Back
        </button>

        {/* Header Title */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-4xl md:text-6xl mb-3 md:mb-4 tracking-wide"
            style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
          >
            Anny Jewellery | Anny Jewels
          </h1>
          <h2 
            className="text-2xl md:text-4xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            Our Pillars of Trust
          </h2>
          <div className="w-16 h-1 bg-[#d4a373] mx-auto rounded-full mb-4" />
          <p 
            className="text-sm md:text-base text-[#9e8a85] max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Since our inception, our foundation has been built on uncompromising quality, transparency, and a deep devotion to the craft of fine jewelry.
          </p>
        </motion.div>

        {/* Trust Pillars Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                id={pillar.id}
                variants={cardVariants}
                className="bg-white/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm border border-white/50 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6">
                  
                  {/* Floating Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#fcf9f9] flex items-center justify-center shrink-0 border border-[#f0ebe0] group-hover:border-[#d4a373] group-hover:bg-[#d4a373] transition-colors duration-300">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#d4a373] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 
                      className="text-xl md:text-2xl font-semibold mb-3 md:mb-4"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
                    >
                      {pillar.title}
                    </h3>
                    <p 
                      className="text-sm md:text-base leading-relaxed text-justify md:text-left"
                      style={{ fontFamily: "'Poppins', sans-serif", color: '#7a605d' }}
                    >
                      {pillar.content}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Closing Note */}
        <motion.div 
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-lg md:text-xl italic text-[#8b6f5e]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "A promise of purity, crafted for eternity."
          </p>
        </motion.div>

      </div>
    </section>
  );
}