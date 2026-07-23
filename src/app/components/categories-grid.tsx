import { motion } from "motion/react";
import { CategoryCard } from "./category-card";

const categories = [
  {
    title: "Nose Pin",
    image: "https://images.unsplash.com/photo-1664896291033-0509a0adf4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3NlJTIwcGluJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjkzMDg3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Traditional Nath",
    image: "https://images.unsplash.com/photo-1740674570372-b82fb1c43478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMGpld2VscnklMjBuYXRofGVufDF8fHx8MTc2OTMwODc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Traditional Set",
    image: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxyeSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzY5MzA4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Diamond Set",
    image: "https://images.unsplash.com/photo-1762019313711-8b5d1e4f7ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwamV3ZWxyeSUyMHNldHxlbnwxfHx8fDE3NjkzMDg3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Diamond Mangalsutra",
    image: "https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlfGVufDF8fHx8MTc2OTI5MzI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Traditional Mangalsutra",
    image: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxyeSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzY5MzA4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Diamond Bracelet",
    image: "https://images.unsplash.com/photo-1763029513623-37d488cb97b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwYnJhY2VsZXQlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MjAyMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Fancy Earrings",
    image: "https://images.unsplash.com/photo-1769078595478-5f756986b818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZWFycmluZ3MlMjBlbGVnYW50fGVufDF8fHx8MTc2OTMwODc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Traditional Earrings",
    image: "https://images.unsplash.com/photo-1762686130435-897de4b26aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGpodW1rYSUyMGVhcnJpbmdzfGVufDF8fHx8MTc2OTMwODc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Jhumkas",
    image: "https://images.unsplash.com/photo-1762686130435-897de4b26aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGpodW1rYSUyMGVhcnJpbmdzfGVufDF8fHx8MTc2OTMwODc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function CategoriesGrid() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8e8e8] to-[#fef5f5] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
          >
            Our Collections
          </h2>
          <h3
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            Curated for Every Sacred Occasion
          </h3>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
          >
            From timeless traditions to contemporary elegance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              delay={index * 0.1}
              onClick={() => console.log(`Clicked ${category.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
