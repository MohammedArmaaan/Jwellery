import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#faf8f5]">
      {/* 1. Background Base & Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdfbfb] via-[#f4eee8] to-[#e6dcd3]" />
        <motion.div
          className="absolute inset-0 opacity-40 mix-blend-multiply"
          style={{
  backgroundImage: `url('/Banner/Hero.png')`, 
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Soft Vignette Overlay for better text contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(61,36,34,0.15)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf8f5]/90" />
      </motion.div>

      {/* 2. Floating Golden Dust/Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              background: "linear-gradient(135deg, #d4a373 0%, #faedcd 100%)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(212, 163, 115, 0.5)",
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* 3. Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
        {/* Soft glow behind text for readability */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/20 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Custom spring-like ease
        >
          <h1 
            className="mb-2 text-7xl md:text-8xl lg:text-9xl drop-shadow-sm"
            style={{ fontFamily: "'Allura', cursive", color: '#684f42' }}
          >
            Anny Jewels
          </h1>
        </motion.div>

        <motion.h2
          className="mb-6 text-xl md:text-2xl lg:text-3xl tracking-[0.2em] uppercase font-light"
          style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Crafted for Sacred Moments
        </motion.h2>

        <motion.p
          className="mb-12 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif", color: '#7a6a65' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          Experience the artistry of heritage jewellery, where every piece tells a story of devotion, tradition, and timeless beauty.
        </motion.p>

        <motion.button
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-white shadow-lg transition-all duration-300 overflow-hidden border border-white/20"
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            background: 'linear-gradient(135deg, #8b6f5e 0%, #b38b6d 50%, #d4a373 100%)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(139,111,94,0.5)" }}
          whileTap={{ scale: 0.97 }}
          onClick={onExploreClick}
        >
          {/* Shine effect on hover */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          
          <span className="relative tracking-wide font-medium">Explore Divine Collections</span>
          <Sparkles className="relative w-4 h-4 text-[#faedcd]" />
        </motion.button>
      </div>

      {/* 4. Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity" style={{ color: '#8b6f5e' }} />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
