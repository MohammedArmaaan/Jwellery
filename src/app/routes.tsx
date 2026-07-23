import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { ProductDetail } from "./pages/product-detail";
import { Cart } from "./pages/cart";
import { Wishlist } from "./pages/wishlist";
import { Services } from "./pages/services";
import About from "./pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "product/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "wishlist", Component: Wishlist },
      { path: "services", Component: Services },
      { path: "about", Component: About },
    ],
  },
]);
