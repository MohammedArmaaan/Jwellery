import { create } from 'zustand';

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

export const useStore = create<AppState>((set, get) => ({
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
}));
