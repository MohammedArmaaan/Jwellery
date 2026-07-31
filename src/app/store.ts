import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface AppState {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  isInWishlist: (productId: string) => boolean;
}

// Custom Storage Setup (30 Days Expiry Logic ke liye)
const storageWithExpiry: StateStorage = {
  getItem: (name: string) => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    
    try {
      const item = JSON.parse(str);
      // Agar aaj ka time expiry time se zyada ho gaya, toh delete kardo
      if (Date.now() > item.expiry) {
        localStorage.removeItem(name);
        return null;
      }
      return item.value; // Valid hai toh data return karo
    } catch (error) {
      return null;
    }
  },
  setItem: (name: string, value: string) => {
    // 30 Days in Milliseconds (30 din * 24 ghante * 60 min * 60 sec * 1000 ms)
    const expiry = Date.now() + 30 * 24 * 60 * 60 * 1000;
    
    const item = {
      value: value,
      expiry: expiry,
    };
    
    localStorage.setItem(name, JSON.stringify(item));
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
  },
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      addToCart: (product) => {
        if (!get().isInCart(product.id)) {
          set((state) => ({ cart: [...state.cart, product] }));
        }
      },
      removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
      addToWishlist: (product) => {
        if (!get().isInWishlist(product.id)) {
          set((state) => ({ wishlist: [...state.wishlist, product] }));
        }
      },
      removeFromWishlist: (id) => set((state) => ({ wishlist: state.wishlist.filter((p) => p.id !== id) })),
      isInCart: (id) => get().cart.some((p) => p.id === id),
      isInWishlist: (id) => get().wishlist.some((p) => p.id === id),
    }),
    {
      name: 'divine-collections-store', // Ye is naam se browser ke Local Storage me save hoga
      storage: createJSONStorage(() => storageWithExpiry),
    }
  )
);