import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X } from "lucide-react";
import { ProductCard } from "../components/product-card";
import { allProducts, categoriesList } from "../data";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => setItemsPerPage(window.innerWidth < 768 ? 10 : 6);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const filteredProducts = allProducts.filter(
    (product) => activeCategory === "All" || product.category.toLowerCase() === activeCategory.toLowerCase()
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const selectCategory = (category: string) => {
    if (category === "All") setSearchParams({});
    else setSearchParams({ category });
    setIsMobileFilterOpen(false);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#fcf9f9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div className="text-center mb-8 md:mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>
            {activeCategory === "All" ? "Divine Collections" : activeCategory}
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#9e8a85', fontFamily: "'Poppins', sans-serif" }}>
            Explore our complete range of meticulously crafted jewelry.
          </p>
        </motion.div>

        <div className="md:hidden flex justify-end mb-6">
          <button onClick={() => setIsMobileFilterOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#e8d5d5] text-[#8b6f5e] font-medium">
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className={`md:w-1/4 flex-shrink-0 ${isMobileFilterOpen ? 'fixed inset-0 z-50 bg-black/40 backdrop-blur-sm' : 'hidden md:block'}`}>
            <div className={`bg-white h-full md:h-auto md:sticky md:top-28 md:rounded-2xl shadow-xl md:shadow-sm border-r md:border border-[#f0e6e6] p-6 w-[80%] md:w-full overflow-y-auto ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
              <div className="flex justify-between items-center mb-6 md:mb-4">
                <h3 className="text-xl font-semibold text-[#3d2422]" style={{ fontFamily: "'Playfair Display', serif" }}>Categories</h3>
                <button className="md:hidden text-[#8b6f5e]" onClick={() => setIsMobileFilterOpen(false)}><X size={24} /></button>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => selectCategory("All")} className={`text-left px-4 py-3 rounded-xl transition-all font-medium ${activeCategory === "All" ? "bg-[#f8e8e8] text-[#8b6f5e]" : "text-[#5a4340] hover:bg-[#fcf9f9]"}`}>All Collections</button>
                {categoriesList.map((category) => (
                  <button key={category} onClick={() => selectCategory(category)} className={`text-left px-4 py-3 rounded-xl transition-all font-medium ${activeCategory.toLowerCase() === category.toLowerCase() ? "bg-[#f8e8e8] text-[#8b6f5e]" : "text-[#5a4340] hover:bg-[#fcf9f9]"}`}>{category}</button>
                ))}
              </div>
            </div>
          </aside>

          <main className="md:w-3/4 flex flex-col">
            {currentItems.length > 0 ? (
              <>
                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                  {currentItems.map((product, index) => <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} category={product.category} delay={index * 0.05} />)}
                </motion.div>
                {totalPages > 1 && <div className="mt-12 flex justify-center items-center gap-2">
                  <button onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} disabled={currentPage === 1} className="px-4 py-2 rounded-lg border border-[#e8d5d5] text-[#8b6f5e] disabled:opacity-50">Prev</button>
                  {[...Array(totalPages)].map((_, index) => <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className={`w-10 h-10 flex items-center justify-center rounded-lg ${currentPage === index + 1 ? "bg-[#8b6f5e] text-white" : "text-[#8b6f5e] hover:bg-[#f8e8e8]"}`}>{index + 1}</button>)}
                  <button onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))} disabled={currentPage === totalPages} className="px-4 py-2 rounded-lg border border-[#e8d5d5] text-[#8b6f5e] disabled:opacity-50">Next</button>
                </div>}
              </>
            ) : <div className="flex-1 flex flex-col items-center justify-center py-20"><p className="text-xl text-[#8b6f5e] mb-4">No products found in this category.</p><button onClick={() => selectCategory("All")} className="px-6 py-2 bg-[#8b6f5e] text-white rounded-full">Clear Filters</button></div>}
          </main>
        </div>
      </div>
    </div>
  );
}
