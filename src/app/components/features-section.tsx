import { motion } from "motion/react";
import { Award, Shield, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Hallmark Certified",
    description: "Every piece is hallmarked and certified for purity"
  },
  {
    icon: Sparkles,
    title: "Handcrafted",
    description: "Meticulously crafted by master artisans"
  },
  {
    icon: Shield,
    title: "Lifetime Care",
    description: "Free lifetime maintenance and polishing"
  },
  {
    icon: Heart,
    title: "Heritage Design",
    description: "Inspired by sacred traditions and devotional art"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-24 bg-white/60 backdrop-blur-sm">
      {/* Mobile me padding kam ki hai taki 4 items fit ho sakein */}
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        
        {/* Yahan grid-cols-4 lagaya hai taki mobile me bhi 1 line me 4 aayein */}
        <div className="grid grid-cols-4 gap-2 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  // Mobile par circle chota (w-10 h-10) aur Desktop par bada (md:w-16 md:h-16) hoga
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full mb-2 md:mb-4 shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #e8b4b8 0%, #d4a373 100%)'
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon size mobile ke liye chota kiya hai (w-5 h-5) */}
                  <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </motion.div>
                
                <h3
                  // Text mobile par thoda chota hoga taki 1 line me fit aaye
                  className="text-[10px] sm:text-xs md:text-xl mb-1 md:mb-2 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422', fontWeight: 600 }}
                >
                  {feature.title}
                </h3>
                
                <p
                  // Description ko mobile par bohot chota kiya hai aur leading tight di hai
                  className="text-[8px] sm:text-[10px] md:text-sm leading-tight md:leading-normal px-1"
                  style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}