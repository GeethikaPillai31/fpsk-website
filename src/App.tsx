import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { HomePage } from "@/pages/HomePage";
import { ServicePage } from "@/pages/ServicePage";
import { ScrollToTop } from "@/components/ScrollToTop";

// Disable browser scroll restoration to prevent scroll animation on navigation
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function App() {
  // Determine basename based on the current path
  // For GitHub Pages: /fpsk-website/, for local dev: /
  const basename = window.location.pathname.startsWith("/fpsk-website")
    ? "/fpsk-website"
    : "/";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen w-full relative">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
