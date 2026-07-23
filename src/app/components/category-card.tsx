import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  delay?: number;
  onClick?: () => void;
}

export function CategoryCard({ title, image, delay = 0, onClick }: CategoryCardProps) {
  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="aspect-[3/4] relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3d2422]/80 via-[#3d2422]/40 to-transparent" />
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#d4a373]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.h3
          className="text-2xl md:text-3xl mb-2 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </motion.h3>
        
        <motion.div
          className="flex items-center gap-2 text-[#d4a373]"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <span style={{ fontFamily: "'Poppins', sans-serif" }}>Explore</span>
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#d4a373]/40 rounded-tr-2xl" />
    </motion.div>
  );
}
