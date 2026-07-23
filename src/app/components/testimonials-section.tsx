import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The craftsmanship is exceptional! I purchased a traditional nath for my wedding, and it was absolutely divine. The attention to detail and the purity of gold exceeded my expectations.",
    product: "Heritage Bridal Nath"
  },
  {
    name: "Anjali Kapoor",
    location: "Delhi",
    rating: 5,
    text: "Beautiful jewellery with authentic certification. The diamond set I received was exactly as shown, and the customer service was wonderful. Perfect for special occasions!",
    product: "Diamond Set"
  },
  {
    name: "Meera Patel",
    location: "Bangalore",
    rating: 5,
    text: "I'm in love with my new jhumkas! The traditional design with modern touch is exactly what I was looking for. Highly recommend for anyone seeking premium quality.",
    product: "Traditional Jhumkas"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8e8e8] to-[#fef5f5] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
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
            Cherished Moments
          </h2>
          <h3
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            Stories from Our Beloved Customers
          </h3>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
          >
            Every piece holds a special place in someone's heart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{ color: '#d4a373', fill: '#d4a373' }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p 
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#3d2422' }}
              >
                "{testimonial.text}"
              </p>

              {/* Product Tag */}
              <div 
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: '#f5e5e5' }}
              >
                <p 
                  className="text-xs"
                  style={{ fontFamily: "'Poppins', sans-serif", color: '#8b6f5e' }}
                >
                  {testimonial.product}
                </p>
              </div>

              {/* Customer Info */}
              <div className="border-t border-[#e8b4b8]/30 pt-4">
                <p 
                  className="font-medium mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
                >
                  {testimonial.name}
                </p>
                <p 
                  className="text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
                >
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p 
              className="text-3xl md:text-4xl mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: '#8b6f5e', fontWeight: 600 }}
            >
              10,000+
            </p>
            <p 
              className="text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
            >
              Happy Customers
            </p>
          </div>

          <div className="w-px h-12 bg-[#e8b4b8]" />

          <div className="text-center">
            <p 
              className="text-3xl md:text-4xl mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: '#8b6f5e', fontWeight: 600 }}
            >
              25+ Years
            </p>
            <p 
              className="text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
            >
              Heritage Craft
            </p>
          </div>

          <div className="w-px h-12 bg-[#e8b4b8]" />

          <div className="text-center">
            <p 
              className="text-3xl md:text-4xl mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: '#8b6f5e', fontWeight: 600 }}
            >
              100%
            </p>
            <p 
              className="text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
            >
              Certified Gold
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
