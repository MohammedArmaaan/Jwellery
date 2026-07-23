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
    <section className="py-16 md:py-24 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #e8b4b8 0%, #d4a373 100%)'
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm"
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
