import { motion, useScroll } from "motion/react";
import { useRef } from "react";

const stories = [
  {
    title: "Heritage Craftsmanship",
    description: `Each piece is meticulously handcrafted by master artisans who have inherited their sacred craft through generations. We take immense pride in preserving ancient Indian techniques—from the delicate intricacies of Filigree to the majestic grandeur of Kundan and Polki settings.\n\nThese time-honored methods require hundreds of hours of focused dedication, ensuring that every curve and contour is shaped with unparalleled precision. Beyond mere tradition, we seamlessly blend these historical art forms with contemporary aesthetics to create designs that resonate with the modern connoisseur.\n\nThis unwavering dedication ensures that every creation transcends being a mere accessory. Instead, it becomes a wearable piece of history, infused with the artisan's soul and destined to be cherished as a timeless family heirloom.`,
    image: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxyeSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzY5MzA4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Pure & Certified",
    description: `Uncompromising quality is the absolute cornerstone of our brand, which is why we meticulously select only the finest ethically sourced materials. Our foundations are built on 100% BIS hallmarked gold and pristine platinum, paired with deeply vibrant, authentic gemstones that are hand-picked for their natural brilliance.\n\nWe believe that true luxury requires complete transparency, starting from the very origins of the elements we use. Every single diamond in our collection undergoes rigorous grading for its exceptional cut, color, clarity, and inner fire.\n\nTo ensure your complete peace of mind and protect your investment, every masterpiece is accompanied by an internationally recognized certificate of authenticity. Paired with our lifetime purity guarantee, we promise an eternal shine that you can trust for generations.`,
    image: "https://images.unsplash.com/photo-1762019313711-8b5d1e4f7ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwamV3ZWxyeSUyMHNldHxlbnwxfHx8fDE3NjkzMDg3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
  // {
  //   title: "Devotional Design",
  //   description: `Deeply rooted in our rich cultural heritage, our collections draw profound inspiration from sacred temple architecture, spiritual symbolism, and majestic royal archives. These designs beautifully embody the divine essence of ceremonial grace, translating the whispered prayers and ancient traditions of India into tangible works of art.\n\nEvery motif is carefully chosen to represent prosperity, purity, and eternal love. This devotion to spiritual elegance makes our jewelry the perfect companion for life's most precious milestones.\n\nWhether it is a grand bridal trousseau or a festive heirloom passed down from a mother to her daughter, our creations are crafted to capture the magic of your moments. They are not just ornaments, but eternal blessings designed to grace your new beginnings with joy and majesty.`,
  //   image: "https://images.unsplash.com/photo-1740674570372-b82fb1c43478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMGpld2VscnklMjBuYXRofGVufDF8fHx8MTc2OTMwODc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  // }
];

// Animation Variants for Staggered Effect
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Har element ke beech ka delay (Line-by-line feel)
      delayChildren: 0.2
    }
  }
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export function ScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative py-16 md:py-32 bg-gradient-to-b from-[#fef5f5] to-[#f8e8e8] overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[-10%] w-96 h-96 bg-[#d4a373] rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30rem] h-[30rem] bg-[#e8b4b8] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 
            className="text-4xl md:text-5xl mb-4 tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            The Art of Luxury
          </h2>
          <div className="w-16 h-[2px] bg-[#d4a373] mx-auto mb-4" />
          <p 
            className="text-base md:text-lg max-w-2xl mx-auto uppercase tracking-widest"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
          >
            Where tradition meets excellence
          </p>
        </motion.div>

        {/* Stories Section */}
        <div className="space-y-24 md:space-y-40">
          {stories.map((story, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 md:gap-20 items-center"
            >
              {/* Image Column */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <motion.div
                  className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5"
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-[4/5] relative group">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3d2422]/60 via-transparent to-transparent opacity-80" />
                  </div>
                </motion.div>
              </div>

              {/* Text Column (Structured with Staggered Animation) */}
              <motion.div 
                className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
                variants={textContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Title */}
                <motion.h3
                  variants={textItemVariants}
                  className="text-3xl md:text-4xl mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
                >
                  {story.title}
                </motion.h3>
                
                {/* Decorative Divider */}
                <motion.div variants={textItemVariants} className="w-12 h-1 bg-[#d4a373] mb-6 rounded-full" />

                {/* Structured Paragraphs (Line-by-Line Apperance) */}
                <div className="space-y-4">
                  {story.description.split('\n\n').map((paragraph, pIndex) => (
                    <motion.p
                      key={pIndex}
                      variants={textItemVariants}
                      className="text-sm md:text-[1.05rem] leading-relaxed md:leading-loose text-justify md:text-left"
                      style={{ fontFamily: "'Poppins', sans-serif", color: '#7a605d' }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
