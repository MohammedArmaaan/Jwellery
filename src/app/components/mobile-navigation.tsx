import { motion } from "motion/react";
import { Home, LayoutGrid, ShoppingBag, Heart, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../store";

// Tabs exactly according to your requested layout
const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: LayoutGrid, label: "Collections", path: "/category" },
  { icon: ShoppingBag, label: "Products", path: "/products" },
  { icon: Heart, label: "Wishlist", path: "/wishlist", showBadge: 'wishlist' },
  { icon: ShoppingCart, label: "Cart", path: "/cart", showBadge: 'cart' }
];

export function MobileNavigation() {
  const location = useLocation();
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);

  // Click karne par page humesha Top par open ho
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[#f0ebe0] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom,0.5rem)]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          let badgeCount = 0;
          if (item.showBadge === 'cart') badgeCount = cart.length;
          if (item.showBadge === 'wishlist') badgeCount = wishlist.length;

          return (
            <Link 
              key={item.label} 
              to={item.path} 
              onClick={handleNavClick}
              className="flex-1"
            >
              <motion.button
                className="w-full flex flex-col items-center justify-center gap-1 min-w-[60px] py-1 relative"
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="relative flex items-center justify-center"
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ 
                      color: isActive ? '#8b6f5e' : '#b8a995',
                      strokeWidth: isActive ? 2.5 : 1.5
                    }}
                  />
                  
                  {/* Dynamic Badges for Cart & Wishlist */}
                  {badgeCount > 0 && (
                    <span 
                      className="absolute -top-1.5 -right-2 w-[16px] h-[16px] text-[9px] font-bold flex items-center justify-center rounded-full text-white border-[1.5px] border-white shadow-sm"
                      style={{
                        backgroundColor: item.showBadge === 'wishlist' ? '#d4a373' : '#8b6f5e'
                      }}
                    >
                      {badgeCount}
                    </span>
                  )}
                  
                  {/* Active Dot Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4a373]"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
                
                {/* Tab Label */}
                <span
                  className="text-[9px] sm:text-[10px] mt-1"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: isActive ? '#8b6f5e' : '#9e8a85',
                    fontWeight: isActive ? 600 : 400
                  }}
                >
                  {item.label}
                </span>
              </motion.button>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}