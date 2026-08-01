import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "Anny Jewellery | Anny Jewellers | Anny Jewels";
const defaultDescription = "Shop Anny Jewellery, Anny Jewellers and Anny Jewels, a premium jewellery store offering certified rings, necklaces, earrings, bridal jewellery and timeless luxury designs.";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": { title: "Anny Jewellery | Anny Jewels | Premium Jewellery Store", description: defaultDescription },
  "/products": { title: "Jewellery Collections | Anny Jewellers | Anny Jewels", description: "Explore premium jewellery collections from Anny Jewellers and Anny Jewels, including certified rings, necklaces, earrings and bridal jewellery." },
  "/category": { title: "Jewellery Collections | Anny Jewellery", description: "Browse Anny Jewellery collections and find timeless premium jewellery for every occasion." },
  "/category/set": { title: "Jewellery Sets | Anny Jewellers", description: "Discover coordinated premium jewellery sets from Anny Jewellers, crafted for celebrations and special occasions." },
  "/services": { title: "Jewellery Services | Anny Jewellery", description: "Book custom jewellery design, restoration, polishing and expert appraisal services with Anny Jewellery." },
  "/about": { title: "About Anny Jewellery | Anny Jewellers", description: "Learn about Anny Jewellery craftsmanship, heritage and commitment to premium certified jewellery." },
  "/contact": { title: "Contact Anny Jewellers", description: "Contact Anny Jewellers for premium jewellery consultations, product support and bespoke design enquiries." },
  "/trust": { title: "Trust and Certification | Anny Jewellery", description: "Learn about Anny Jewellery certification, quality standards and customer promises." },
  "/policy": { title: "Jewellery Store Policies | Anny Jewellery", description: "Read Anny Jewellery store policies for orders, shipping, returns and customer care." },
};

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || { title: `${siteName} | Premium Jewellery Store`, description: defaultDescription };
    document.title = metadata.title;

    const setMeta = (name: string, content: string) => {
      let element = document.head.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("description", metadata.description);
    setMeta("keywords", "Anny Jewellery, Anny Jewellers, Anny Jewels, Anny jewels, Jewellery Store, Jwellery Store, Premium Jewellery Store, Primium Jewellery Store");
  }, [pathname]);

  return null;
}