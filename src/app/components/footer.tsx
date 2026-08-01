import { motion } from "motion/react";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  // Navigation Mappings
  const policyLinks = [
    { label: 'Shipping', path: '/policy#shipping' },
    { label: 'Returns', path: '/policy#returns' },
    { label: 'Terms of Service', path: '/policy#terms' },
    { label: 'Policy', path: '/policy#privacy' }
  ];

  const supportLinks = [
    { label: 'Contact Us', path: '/contact' },
    { label: 'FAQs', path: '/contact' }
  ];

  const trustLinks = [
    { label: 'Hallmark Certified', path: '/trust#hallmark-certified' },
    { label: 'Handcrafted', path: '/trust#handcrafted' },
    { label: 'Authentic Gems', path: '/trust#authentic-gems' },
    { label: 'Lifetime Care', path: '/trust#lifetime-care' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#f8e8e8] to-[#f0dede] pt-16 pb-8 md:py-20 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Brand Story Section */}
        <motion.div
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 tracking-wide"
            style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
          >
            Anny Jewellery
          </h2>
          <p 
            className="text-sm md:text-lg leading-relaxed mb-6 md:mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            We believe that jewellery is more than adornment—it's a sacred expression of love, devotion, and heritage. Each piece in our collection is crafted to honor life's most precious moments and timeless traditions.
          </p>
          <div className="flex items-center justify-center gap-1">
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-[#d4a373]" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#d4a373] rounded-full" />
            <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-[#d4a373]" />
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 mb-12 md:mb-16 shadow-lg border border-white/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-xl mx-auto">
            <h3 
              className="text-2xl md:text-3xl mb-2 md:mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              Stay Connected
            </h3>
            <p 
              className="text-xs md:text-sm mb-6"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
            >
              Subscribe to receive exclusive offers and new collection updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-5 md:px-6 py-3 md:py-4 rounded-full border border-[#e8b4b8] bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#d4a373] transition-all text-sm md:text-base"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#3d2422' }}
              />
              <motion.button
                className="w-full sm:w-auto px-8 py-3 md:py-4 rounded-full text-white shadow-md hover:shadow-lg transition-all text-sm md:text-base font-medium"
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

        {/* Links Grid (Now strictly 3 columns on Mobile) */}
        <div className="grid grid-cols-3 gap-x-2 md:gap-x-8 gap-y-8 mb-12 md:mb-16 justify-items-start max-w-4xl mx-auto w-full">
          
          {/* Privacy & Policy */}
          <div className="w-full">
            <h4 
              className="mb-3 md:mb-4 text-[11px] sm:text-sm md:text-xl font-semibold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              Privacy & Policy
            </h4>
            <ul className="space-y-1.5 md:space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {policyLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-[9px] sm:text-xs md:text-sm text-[#9e8a85] hover:text-[#8b6f5e] transition-colors block py-0.5 md:py-1">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="w-full">
            <h4 
              className="mb-3 md:mb-4 text-[11px] sm:text-sm md:text-xl font-semibold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              Support
            </h4>
            <ul className="space-y-1.5 md:space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-[9px] sm:text-xs md:text-sm text-[#9e8a85] hover:text-[#8b6f5e] transition-colors block py-0.5 md:py-1">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div className="w-full">
            <h4 
              className="mb-3 md:mb-4 text-[11px] sm:text-sm md:text-xl font-semibold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              Trust
            </h4>
            <ul className="space-y-1.5 md:space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {trustLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-[9px] sm:text-xs md:text-sm text-[#9e8a85] hover:text-[#8b6f5e] transition-colors block py-0.5 md:py-1">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Social & Copyright */}
        <div className="border-t border-[#e8b4b8]/40 pt-6 md:pt-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            
            <p 
              className="text-xs md:text-sm text-center md:text-left"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
            >
              © 2026 Anny jewels. All rights reserved.
            </p>

            <div className="flex items-center gap-3 md:gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
                { icon: Mail, label: "Email" }
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  className="group w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                  whileHover={{ scale: 1.1, backgroundColor: '#d4a373' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#8b6f5e] group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}