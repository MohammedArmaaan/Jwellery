import { motion } from "motion/react";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  // Navigation Mappings
  const policyLinks = [
    { label: 'Shipping', path: '/policy#shipping' },
    { label: 'Returns', path: '/policy#returns' },
    { label: 'Terms of Service', path: '/policy#terms' },
    { label: 'Privacy Policy', path: '/policy#privacy' }
  ];

  const supportLinks = [
    { label: 'Contact Us', path: '/contact' },
    { label: 'FAQs', path: '/contact' },
    { label: 'Track Order', path: '/track' },
    { label: 'Store Locator', path: '/stores' }
  ];

  const trustLinks = [
    { label: 'Hallmark Certified', path: '/trust#hallmark-certified' },
    { label: 'Handcrafted', path: '/trust#handcrafted' },
    { label: 'Authentic Gems', path: '/trust#authentic-gems' },
    { label: 'Lifetime Care', path: '/trust#lifetime-care' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#f8e8e8] to-[#f0dede] pt-16 pb-8 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Content Split: Links (Left) and Brand/Subscribe/Social (Right) */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          
          {/* Left Side: Links Grid (3 Columns) */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* 1st Column: Privacy & Policy */}
            <div>
              <h4 
                className="mb-4 text-sm md:text-base font-bold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
              >
                Privacy & Policy
              </h4>
              <ul className="space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {policyLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-sm text-[#9e8a85] hover:text-[#8b6f5e] transition-colors block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2nd Column: Support */}
            <div>
              <h4 
                className="mb-4 text-sm md:text-base font-bold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
              >
                Support
              </h4>
              <ul className="space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {supportLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-sm text-[#9e8a85] hover:text-[#8b6f5e] transition-colors block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3rd Column: Trust */}
            <div>
              <h4 
                className="mb-4 text-sm md:text-base font-bold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
              >
                Trust
              </h4>
              <ul className="space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {trustLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-sm text-[#9e8a85] hover:text-[#8b6f5e] transition-colors block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Side: Brand Story, Subscription & Socials */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end text-left lg:text-right">
            
            {/* Brand Name & Paragraph */}
            <div className="max-w-md mb-8">
              <h2 
                className="text-4xl md:text-5xl mb-3 tracking-wide"
                style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
              >
                Anny Jewellery
              </h2>
              <p 
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
              >
                We believe that jewellery is more than adornment—it's a sacred expression of love, devotion, and heritage. Each piece in our collection is crafted to honor life's most precious moments and timeless traditions.
              </p>
            </div>
            
            <p 
              className="text-sm md:text-base font-medium mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
            >
              Sign up to receive exclusive offers and updates
            </p>
            
            {/* Newsletter Input + Button */}
            <div className="flex w-full flex-col sm:flex-row gap-3 mb-8 justify-end">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full lg:max-w-sm px-6 py-3 rounded-full border border-[#e8b4b8] bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#d4a373] text-sm md:text-base placeholder-[#9e8a85]"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#3d2422' }}
              />
              <motion.button
                className="w-full sm:w-auto px-8 py-3 rounded-full text-white shadow-md hover:shadow-lg transition-all text-sm md:text-base font-medium whitespace-nowrap"
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

            {/* Social Icons */}
            <div className="flex items-center gap-5 justify-end">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
                { icon: Mail, label: "Email" }
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  className="group flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#8b6f5e] hover:text-[#d4a373] transition-colors" />
                </motion.a>
              ))}
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-[#e8b4b8]/60 pt-6 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          
          <p 
            className="text-sm text-[#9e8a85] w-full lg:w-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            © 2026 Anny jewels. All rights reserved.
          </p>

          {/* Designed & Developed Credit */}
          <p 
            className="text-sm text-[#9e8a85] w-full lg:w-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Designed and developed with <span className="text-red-500">❤️</span> by{' '}
            <a 
              href="https://navgaj.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8b6f5e] hover:text-[#d4a373] transition-colors font-semibold"
            >
              Navgaj TechnoLabs
            </a>
          </p>

          <div className="flex items-center justify-center lg:justify-end gap-4 md:gap-6 w-full lg:w-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <Link to="/policy#terms" className="text-xs text-[#9e8a85] hover:text-[#8b6f5e] transition-colors">
              Terms of Service
            </Link>
            <Link to="/policy#privacy" className="text-xs text-[#9e8a85] hover:text-[#8b6f5e] transition-colors">
              Privacy Policy
            </Link>
          </div>
          
        </div>

      </div>
    </footer>
  );
}