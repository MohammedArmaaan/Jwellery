import { motion, AnimatePresence } from "motion/react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState, useEffect, useRef, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../store";
import { categoriesList } from "../data";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);
  const popularCategories = categoriesList.slice(0, 3);

  const handleSearchSubmit = (event?: FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    const query = searchTerm.trim();
    if (!query) {
      setSearchOpen(false);
      return;
    }

    const matchedCategory = categoriesList.find(
      (category) =>
        category.toLowerCase() === query.toLowerCase() ||
        category.toLowerCase().includes(query.toLowerCase())
    );

    const searchCategory = matchedCategory || query;
    setSearchOpen(false);
    setSearchTerm("");
    navigate(`/products?category=${encodeURIComponent(searchCategory)}`);
  };

  const handlePopularSearch = (category: string) => {
    setSearchOpen(false);
    setSearchTerm("");
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-[#f0ebe0]' : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b6f5e] to-[#d4a373] flex items-center justify-center shadow-md">
                <div className="w-6 h-6 border-[1.5px] border-white rounded-full" />
              </div>
              <h1 
                className="text-2xl md:text-3xl tracking-wide"
                style={{ fontFamily: "'Allura', cursive", color: '#3d2422' }}
              >
                Divine Elegance
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/products" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3d2422] hover:text-[#d4a373] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Collections
            </Link>
            <Link to="/services" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3d2422] hover:text-[#d4a373] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Services
            </Link>
            <Link to="/about" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3d2422] hover:text-[#d4a373] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
              About
            </Link>
          </nav>

          {/* Actions & Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            
            {/* Desktop Search Bar (FIXED) */}
            <div className="hidden md:flex flex-col items-end mr-1 relative">
              <motion.form
                onSubmit={handleSearchSubmit}
                initial={false}
                animate={{ 
                  width: searchOpen ? 320 : 44,
                  backgroundColor: searchOpen ? "#faf8f3" : "transparent",
                  borderColor: searchOpen ? "#e8ddd0" : "transparent"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center overflow-hidden rounded-full h-11 border shadow-sm"
                style={{ boxShadow: searchOpen ? "0 1px 2px 0 rgb(0 0 0 / 0.05)" : "none" }}
              >
                <button
                  type={searchOpen ? "submit" : "button"}
                  onClick={(e) => {
                    if (!searchOpen) {
                      e.preventDefault();
                      setSearchOpen(true);
                    }
                  }}
                  className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                >
                  <Search className="w-5 h-5 text-[#8b6f5e]" strokeWidth={1.5} />
                </button>
                
                <input
                  ref={searchInputRef}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search collections..."
                  className="w-full h-full bg-transparent text-sm text-[#3d2422] placeholder:text-[#b8a995] outline-none px-2"
                />
                
                <button 
                  type="button" 
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchTerm("");
                  }}
                  className={`w-10 h-10 flex-shrink-0 flex items-center justify-center text-[#b8a995] hover:text-[#8b6f5e] transition-colors mr-1 ${searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </motion.form>

              {/* Absolute Dropdown for Popular Categories */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-[52px] right-0 w-[320px] bg-white rounded-2xl p-4 border border-[#e8ddd0] shadow-xl flex flex-col gap-3"
                  >
                    <span className="text-[10px] font-bold text-[#b8a995] uppercase tracking-[0.2em] px-1">
                      Popular Searches
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {popularCategories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => handlePopularSearch(category)}
                          className="rounded-full border border-[#dcd4cc] px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-[#8b6f5e] hover:bg-[#faf8f3] hover:border-[#8b6f5e] transition-all"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Search Icon */}
            <motion.button
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#faf8f3] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5 text-[#8b6f5e]" strokeWidth={1.5} />
            </motion.button>

            {/* Mobile Search Overlay */}
            <AnimatePresence>
              {searchOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed inset-x-0 top-20 z-50 mx-4 rounded-[2rem] bg-white/95 border border-[#e8ddd0] p-5 shadow-2xl backdrop-blur-md md:hidden"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <input
                      ref={searchInputRef}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search collections..."
                      className="flex-1 h-12 rounded-full border border-[#dcd4cc] bg-[#faf8f3] px-5 text-sm text-[#3d2422] placeholder:text-[#b8a995] outline-none focus:border-[#d4a373] transition-colors"
                    />
                    <button
                      onClick={() => handleSearchSubmit()}
                      className="w-12 h-12 rounded-full bg-[#8b6f5e] text-white flex items-center justify-center shadow-md hover:bg-[#6b5244] transition-colors"
                    >
                      <Search className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchTerm("");
                      }}
                      className="w-12 h-12 rounded-full border border-[#dcd4cc] text-[#8b6f5e] flex items-center justify-center hover:bg-[#faf8f3] transition-colors"
                    >
                      <X className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold text-[#b8a995] uppercase tracking-[0.2em] px-1">
                      Popular Searches
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {popularCategories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => handlePopularSearch(category)}
                          className="rounded-full border border-[#dcd4cc] px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-[#8b6f5e] hover:bg-[#faf8f3] hover:border-[#8b6f5e] transition-all"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Wishlist */}
            <Link to="/wishlist">
              <motion.button
                className="relative w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#faf8f3] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5 text-[#8b6f5e]" strokeWidth={1.5} />
                {wishlist.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-[18px] h-[18px] bg-[#d4a373] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-[2px] border-white shadow-sm">
                    {wishlist.length}
                  </span>
                )}
              </motion.button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <motion.button
                className="relative w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#faf8f3] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="w-5 h-5 text-[#8b6f5e]" strokeWidth={1.5} />
                {cart.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-[18px] h-[18px] bg-[#8b6f5e] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-[2px] border-white shadow-sm">
                    {cart.length}
                  </span>
                )}
              </motion.button>
            </Link>

            {/* User Profile */}
            <motion.button
              className="hidden md:flex w-11 h-11 items-center justify-center rounded-full hover:bg-[#faf8f3] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-5 h-5 text-[#8b6f5e]" strokeWidth={1.5} />
            </motion.button>

            {/* Mobile Menu */}
            <motion.button
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#faf8f3] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-6 h-6 text-[#8b6f5e]" strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}