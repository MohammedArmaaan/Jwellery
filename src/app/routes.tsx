import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout";
import { SubCategoryGrid } from "./components/sub-category-grid";
import { CategoriesGrid } from "./components/categories-grid"; 
import { Home } from "./pages/home";
import About from "./pages/about";
import { Cart } from "./pages/cart";
import { ProductDetail } from "./pages/product-detail";
import { Products } from "./pages/products";
import { Services } from "./pages/services";
import { SetsCollection } from "./pages/sets-collection"; 
import { Wishlist } from "./pages/wishlist";

// 🔥 New Imports Added Here
import { PolicyPage } from "./pages/policy";
import { ContactPage } from "./pages/contact";
import { TrustPage } from "./pages/trust";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      // Home
      {
        index: true,
        Component: Home,
      },

      // Products
      {
        path: "products",
        Component: Products,
      },
      {
        path: "product/:id",
        Component: ProductDetail,
      },

      // Main Category Route (Collections page)
      {
        path: "category",
        Component: CategoriesGrid, 
      },
      
      // Special Category Route for "Sets"
      {
        path: "category/set",
        Component: SetsCollection, 
      },

      // Dynamic Category Route (Nosepin, Bali, etc.)
      {
        path: "category/:slug",
        Component: SubCategoryGrid,
      },

      // User Pages
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "wishlist",
        Component: Wishlist,
      },

      // Information Pages
      {
        path: "services",
        Component: Services,
      },
      {
        path: "about",
        Component: About,
      },

      // 🔥 New Routes Added Here
      {
        path: "policy",
        Component: PolicyPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "trust",
        Component: TrustPage,
      }
    ],
  },
]);
