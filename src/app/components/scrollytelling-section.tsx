import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const stories = [
  {
    title: "Heritage Craftsmanship",
    description: `Each piece is meticulously handcrafted by master artisans who have inherited their sacred craft through generations. We take immense pride in preserving ancient Indian techniques—from the delicate intricacies of Filigree to the majestic grandeur of Kundan and Polki settings. These time-honored methods require hundreds of hours of focused dedication, ensuring that every curve and contour is shaped with unparalleled precision.

Beyond mere tradition, we seamlessly blend these historical art forms with contemporary aesthetics to create designs that resonate with the modern connoisseur. This unwavering dedication ensures that every creation transcends being a mere accessory. Instead, it becomes a wearable piece of history, infused with the artisan's soul and destined to be cherished as a timeless family heirloom.`,
    image: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxyeSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzY5MzA4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Pure & Certified",
    description: `Uncompromising quality is the absolute cornerstone of our brand, which is why we meticulously select only the finest ethically sourced materials. Our foundations are built on 100% BIS hallmarked gold and pristine platinum, paired with deeply vibrant, authentic gemstones that are hand-picked for their natural brilliance. We believe that true luxury requires complete transparency, starting from the very origins of the elements we use.

Every single diamond in our collection undergoes rigorous grading for its exceptional cut, color, clarity, and inner fire. To ensure your complete peace of mind and protect your investment, every masterpiece is accompanied by an internationally recognized certificate of authenticity. Paired with our lifetime purity guarantee, we promise an eternal shine that you can trust for generations.`,
    image: "https://images.unsplash.com/photo-1762019313711-8b5d1e4f7ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwamV3ZWxyeSUyMHNldHxlbnwxfHx8fDE3NjkzMDg3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Devotional Design",
    description: `Deeply rooted in our rich cultural heritage, our collections draw profound inspiration from sacred temple architecture, spiritual symbolism, and majestic royal archives. These designs beautifully embody the divine essence of ceremonial grace, translating the whispered prayers and ancient traditions of India into tangible works of art. Every motif is carefully chosen to represent prosperity, purity, and eternal love.

This devotion to spiritual elegance makes our jewelry the perfect companion for life's most precious milestones. Whether it is a grand bridal trousseau or a festive heirloom passed down from a mother to her daughter, our creations are crafted to capture the magic of your moments. They are not just ornaments, but eternal blessings designed to grace your new beginnings with joy and majesty.`,
    image: "https://images.unsplash.com/photo-1740674570372-b82fb1c43478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMGpld2VscnklMjBuYXRofGVufDF8fHx8MTc2OTMwODc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function ScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative py-20 md:py-32 bg-gradient-to-b from-[#fef5f5] to-[#f8e8e8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            The Art of Luxury
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
          >
            Where tradition meets excellence
          </p>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="aspect-[4/5] relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8b6f5e]/30 to-transparent" />
                  </div>
                </motion.div>
              </div>

              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <motion.h3
                  className="text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
                >
                  {story.title}
                </motion.h3>
                <motion.p
                  className="text-lg leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
                >
                  {story.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
