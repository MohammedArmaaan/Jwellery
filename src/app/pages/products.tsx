import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/product-card";
import { allProducts, categoryHierarchy } from "../data";
import { ChevronDown, ChevronRight, Filter, X } from "lucide-react";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL Params read kar rahe hain
  const activeCategory = searchParams.get("category") || "All";
  const activeSubcategory = searchParams.get("type") || "";

  const [openDropdown, setOpenDropdown] = useState(activeCategory !== "All" ? activeCategory : null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default 6, responsive override below

  // Page Load Effect: Scroll to top & set responsive items per page
  useEffect(() => {
    // 1. Scroll to top immediately when page loads
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 2. Function to update items per page based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(10); // Mobile view: 10 products
      } else {
        setItemsPerPage(6);  // Desktop view: 6 products
      }
    };

    // Set initial value on load
    handleResize();

    // Listen for screen size changes
    window.addEventListener("resize", handleResize);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Jab filter change ho, page 1 par wapas aao aur top par scroll karo
  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory, activeSubcategory]);

  // Jab pagination (Next/Prev/Page No) change ho, tab top par scroll karein
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Filter Logic
  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = activeCategory === "All" || product.category.toLowerCase() === activeCategory.toLowerCase();
    const subcategoryMatch = activeSubcategory === "" || product.subcategory?.toLowerCase() === activeSubcategory.toLowerCase();
    return categoryMatch && subcategoryMatch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleCategoryClick = (catSlug) => {
    if (openDropdown === catSlug) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(catSlug);
    }
  };

  const selectCategory = (catSlug, typeSlug = "") => {
    if (catSlug === "All") {
      setSearchParams({});
    } else if (typeSlug) {
      setSearchParams({ category: catSlug, type: typeSlug });
    } else {
      setSearchParams({ category: catSlug });
    }
    setIsMobileFilterOpen(false); // Mobile menu close
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#fcf9f9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div className="text-center mb-8 md:mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>
            {activeSubcategory 
              ? activeSubcategory.replace(/-/g, ' ').toUpperCase()
              : activeCategory !== "All" 
                ? activeCategory.toUpperCase() 
                : "Divine Collections"}
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#9e8a85', fontFamily: "'Poppins', sans-serif" }}>
            Explore our complete range of meticulously crafted jewelry.
          </p>
        </motion.div>

        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-end mb-6">
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#e8d5d5] text-[#8b6f5e] font-medium"
          >
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* SIDEBAR (Categories Dropdown) */}
          <div className={`md:w-1/4 flex-shrink-0 ${isMobileFilterOpen ? 'fixed inset-0 z-50 bg-black/40 backdrop-blur-sm' : 'hidden md:block'}`}>
            <div className={`bg-white h-full md:h-auto md:sticky md:top-28 md:rounded-2xl shadow-xl md:shadow-sm border-r md:border border-[#f0e6e6] p-6 w-[80%] md:w-full overflow-y-auto transition-transform duration-300 ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
              
              <div className="flex justify-between items-center mb-6 md:mb-4">
                <h3 className="text-xl font-semibold text-[#3d2422]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Categories
                </h3>
                <button className="md:hidden text-[#8b6f5e]" onClick={() => setIsMobileFilterOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => selectCategory("All")}
                  className={`text-left px-4 py-3 rounded-xl transition-all font-medium ${activeCategory === "All" ? "bg-[#f8e8e8] text-[#8b6f5e]" : "text-[#5a4340] hover:bg-[#fcf9f9]"}`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  All Collections
                </button>

                {categoryHierarchy.map((cat) => (
                  <div key={cat.slug} className="rounded-xl overflow-hidden">
                    <button
                      onClick={() => handleCategoryClick(cat.slug)}
                      className={`w-full flex items-center justify-between px-4 py-3 transition-all font-medium ${activeCategory === cat.slug || openDropdown === cat.slug ? "bg-[#f8e8e8] text-[#8b6f5e]" : "text-[#5a4340] hover:bg-[#fcf9f9]"}`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {cat.name}
                      {openDropdown === cat.slug ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </button>
                    
                    {/* Subcategories Dropdown (Accordion) */}
                    <AnimatePresence>
                      {openDropdown === cat.slug && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="bg-[#fcf9f9]">
                          <div className="flex flex-col py-2 px-4">
                            <button
                              onClick={() => selectCategory(cat.slug)}
                              className={`text-left py-2 px-4 text-sm transition-colors rounded-lg ${activeCategory === cat.slug && !activeSubcategory ? "text-[#d4a373] font-semibold bg-white" : "text-[#7a605d] hover:text-[#d4a373]"}`}
                            >
                              View All {cat.name}
                            </button>
                            {cat.subCategories.map((sub) => (
                              <button
                                key={sub.slug}
                                onClick={() => selectCategory(cat.slug, sub.slug)}
                                className={`text-left py-2 px-4 text-sm transition-colors rounded-lg ${activeSubcategory === sub.slug ? "text-[#d4a373] font-semibold bg-white shadow-sm" : "text-[#7a605d] hover:text-[#d4a373]"}`}
                              >
                                {sub.name}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN PRODUCT GRID */}
          <div className="md:w-3/4 flex flex-col">
            {currentItems.length > 0 ? (
              <>
                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                  {currentItems.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      category={product.category}
                      delay={index * 0.05}
                    />
                  ))}
                </motion.div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <button 
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg border border-[#e8d5d5] text-[#8b6f5e] disabled:opacity-50 hover:bg-[#f8e8e8] transition-colors cursor-pointer"
                    >
                      Prev
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${currentPage === i + 1 ? "bg-[#8b6f5e] text-white" : "text-[#8b6f5e] hover:bg-[#f8e8e8]"}`}
                      >
                        {i + 1}
                      </button>
                    ))}

                    <button 
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg border border-[#e8d5d5] text-[#8b6f5e] disabled:opacity-50 hover:bg-[#f8e8e8] transition-colors cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              // Empty State
              <div className="flex-1 flex flex-col items-center justify-center py-20 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#e8d5d5]">
                <p className="text-xl text-[#8b6f5e] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  No products found in this category.
                </p>
                <button 
                  onClick={() => selectCategory("All")}
                  className="px-6 py-2 bg-[#8b6f5e] text-white rounded-full hover:bg-[#3d2422] transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}