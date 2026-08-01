import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { MobileNavigation } from "./mobile-navigation";
import { Seo } from "./seo";

export function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Seo />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileNavigation />
      <div className="h-20 md:hidden" />
    </div>
  );
}
