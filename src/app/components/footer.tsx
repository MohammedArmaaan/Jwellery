import { motion } from "motion/react";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#f8e8e8] to-[#f0dede] py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Brand Story Section */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
          >
            Anny Jewellery
          </h2>
          <p 
            className="text-lg leading-relaxed mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            We believe that jewellery is more than adornment—it's a sacred expression of love, devotion, and heritage. Each piece in our collection is crafted to honor life's most precious moments and timeless traditions.
          </p>
          <div className="flex items-center justify-center gap-1">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4a373]" />
            <div className="w-2 h-2 bg-[#d4a373] rounded-full" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4a373]" />
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-xl mx-auto">
            <h3 
              className="text-2xl md:text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              Stay Connected
            </h3>
            <p 
              className="mb-6"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
            >
              Subscribe to receive exclusive offers and new collection updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-[#e8b4b8] bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#d4a373] transition-all"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              />
              <motion.button
                className="px-8 py-4 rounded-full text-white shadow-md hover:shadow-lg transition-all"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: 'linear-gradient(135deg, #8b6f5e 0%, #d4a373 100%)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 
              className="mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              Shop
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {['New Arrivals', 'Traditional', 'Diamond', 'Gold'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#9e8a85] hover:text-[#8b6f5e] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 
              className="mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              About
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {['Our Story', 'Craftsmanship', 'Certifications', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#9e8a85] hover:text-[#8b6f5e] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 
              className="mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              Support
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {['Contact Us', 'FAQs', 'Shipping', 'Returns'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#9e8a85] hover:text-[#8b6f5e] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 
              className="mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              Trust
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {['Hallmark Certified', 'Handcrafted', 'Authentic Gems', 'Lifetime Care'].map((item) => (
                <li key={item} className="text-[#9e8a85]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-[#e8b4b8]/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p 
              className="text-sm"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
            >
              © 2026 Anny Jewellery. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
                { icon: Mail, label: "Email" }
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.1, backgroundColor: '#d4a373' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" style={{ color: '#8b6f5e' }} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
