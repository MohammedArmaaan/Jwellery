import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#fef5f5] via-[#f8e8e8] to-[#f0dede]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlfGVufDF8fHx8MTc2OTI5MzI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Rose petal particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#e8b4b8] rounded-full opacity-40 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 
            className="mb-4 text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
          >
            Divine Elegance
          </h1>
        </motion.div>

        <motion.h2
          className="mb-6 text-2xl md:text-3xl lg:text-4xl"
          style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Crafted for Sacred Moments
        </motion.h2>

        <motion.p
          className="mb-10 text-base md:text-lg max-w-2xl mx-auto"
          style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Experience the artistry of heritage jewellery, where every piece tells a story of devotion, tradition, and timeless beauty.
        </motion.p>

        <motion.button
          className="px-10 py-4 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            background: 'linear-gradient(135deg, #8b6f5e 0%, #d4a373 100%)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onExploreClick}
        >
          Explore Divine Collections
        </motion.button>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" style={{ color: '#8b6f5e' }} />
        </motion.div>
      </div>
    </section>
  );
}
