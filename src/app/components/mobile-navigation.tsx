import { motion } from "motion/react";
import { Home, Grid3x3, Heart, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../store";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Grid3x3, label: "Collections", path: "/products" },
  { icon: Heart, label: "Wishlist", path: "/wishlist", showBadge: 'wishlist' },
  { icon: ShoppingCart, label: "Cart", path: "/cart", showBadge: 'cart' },
  { icon: User, label: "Profile", path: "#" }
];

export function MobileNavigation() {
  const location = useLocation();
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-lg border-t border-[#e8b4b8]/30 shadow-lg pb-safe"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center justify-around px-4 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          let badgeCount = 0;
          if (item.showBadge === 'cart') badgeCount = cart.length;
          if (item.showBadge === 'wishlist') badgeCount = wishlist.length;

          return (
            <Link key={item.label} to={item.path} className="flex-1">
              <motion.button
                className="w-full flex flex-col items-center justify-center gap-1 min-w-[60px] py-2 relative"
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ 
                      color: isActive ? '#8b6f5e' : '#9e8a85',
                      strokeWidth: isActive ? 2.5 : 2
                    }}
                  />
                  {badgeCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] flex items-center justify-center rounded-full text-white bg-[#d4183d]">
                      {badgeCount}
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4a373]"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
                <span
                  className="text-[10px]"
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
