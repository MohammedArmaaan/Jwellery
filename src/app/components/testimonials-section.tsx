import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

// Added more reviews for a better Marquee effect
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
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "The Temple Jewellery collection is breathtaking. I wore their antique necklace for my housewarming, and everyone kept asking about it. Truly feels like a royal heirloom.",
    product: "Antique Temple Necklace"
  },
  {
    name: "Rahul Desai",
    location: "Ahmedabad",
    rating: 5,
    text: "Bought a platinum ring for my anniversary. The finish is flawless, and the entire purchasing experience was so transparent and professional. My wife absolutely loves it.",
    product: "Platinum Couple Rings"
  },
  {
    name: "Kavita Singh",
    location: "Jaipur",
    rating: 5,
    text: "Their Polki bangles are out of this world! The un-cut diamonds shine brilliantly in the light. It's rare to find such authentic handiwork these days.",
    product: "Kundan Polki Bangles"
  }
];

export function TestimonialsSection() {
  // Duplicating the array to create a seamless infinite scrolling effect
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8e8e8] to-[#fef5f5] relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#d4a373] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#e8b4b8] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-20 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-6xl mb-3 md:mb-4 tracking-wide"
            style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
          >
            Cherished Moments
          </h2>
          <h3
            className="text-xl md:text-3xl mb-3 md:mb-4 px-2"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            Stories from Our Beloved Customers
          </h3>
          <p 
            className="text-sm md:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
          >
            Every piece holds a special place in someone's heart
          </p>
        </motion.div>

        {/* Marquee (Infinite Continuous Scroll) */}
        <div className="relative flex overflow-hidden py-4">
          
          <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8e8e8] to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fef5f5] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 md:gap-8 px-4 md:px-0 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {marqueeItems.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-[280px] sm:w-[350px] md:w-[420px] flex-shrink-0 bg-white/70 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-white/50 relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white/90"
              >
                <Quote className="absolute top-6 right-6 w-16 h-16 text-[#f0e6e6] opacity-50 -z-10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5"
                      style={{ color: '#d4a373', fill: '#d4a373' }}
                    />
                  ))}
                </div>

                <p 
                  className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 text-justify"
                  style={{ fontFamily: "'Poppins', sans-serif", color: '#5a4340' }}
                >
                  "{testimonial.text}"
                </p>

                <div className="mt-auto">
                  <div 
                    className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4"
                    style={{ backgroundColor: '#fdf8f8', border: '1px solid #f0e6e6' }}
                  >
                    <p 
                      className="text-[10px] md:text-xs uppercase tracking-wider font-medium"
                      style={{ fontFamily: "'Poppins', sans-serif", color: '#d4a373' }}
                    >
                      {testimonial.product}
                    </p>
                  </div>

                  <div className="border-t border-[#f0e6e6] pt-4">
                    <p 
                      className="text-base md:text-lg font-semibold mb-0.5"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
                    >
                      {testimonial.name}
                    </p>
                    <p 
                      className="text-xs md:text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trust Indicators - FIXED FOR 1 LINE ON MOBILE */}
        <motion.div
          className="mt-16 md:mt-28 max-w-4xl mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Changed to grid-cols-3 always, divide-x always */}
          <div className="grid grid-cols-3 divide-x divide-[#e8b4b8]/50 bg-white/40 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-8 shadow-sm items-center">
            
            <div className="text-center px-1 sm:px-4">
              <p 
                className="text-2xl sm:text-4xl md:text-5xl mb-1 sm:mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: '#8b6f5e', fontWeight: 600 }}
              >
                10k+
              </p>
              <p 
                className="text-[8px] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-[0.2em] font-medium leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
              >
                Happy<br className="sm:hidden" /> Customers
              </p>
            </div>

            <div className="text-center px-1 sm:px-4">
              <p 
                className="text-2xl sm:text-4xl md:text-5xl mb-1 sm:mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: '#8b6f5e', fontWeight: 600 }}
              >
                25+
              </p>
              <p 
                className="text-[8px] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-[0.2em] font-medium leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
              >
                Years of<br className="sm:hidden" /> Trust
              </p>
            </div>

            <div className="text-center px-1 sm:px-4">
              <p 
                className="text-2xl sm:text-4xl md:text-5xl mb-1 sm:mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: '#8b6f5e', fontWeight: 600 }}
              >
                100%
              </p>
              <p 
                className="text-[8px] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-[0.2em] font-medium leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
              >
                Certified<br className="sm:hidden" /> Gold
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
