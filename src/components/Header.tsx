import { cn } from "@/lib/utils";
import TextAnimate from "@/components/ui/text-animate";
import { Link, useLocation } from "react-router-dom";
import ParticleButton from "@/components/kokonutui/particle-button";
import { ExternalLink } from "lucide-react";

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-4 left-4 right-4 z-50",
        "bg-white/30 backdrop-blur-2xl",
        "border border-white/30",
        "rounded-2xl",
        "shadow-lg shadow-black/10",
        "px-6 py-3.5",
        "transition-all duration-300"
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="FPSK Logo"
            className="w-9 h-9 object-contain"
          />
          <div className="flex items-center overflow-hidden">
            <TextAnimate
              text="Family Psychological Services of Kirkland"
              type="calmInUp"
              className="!mt-0 !py-0 !px-0 text-sm font-medium text-gray-900"
            />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <a
            href={isHomePage ? "#home" : "/#home"}
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href={isHomePage ? "#team" : "/#team"}
            onClick={(e) => handleNavClick(e, "#team")}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Our Team
          </a>
          <a
            href={isHomePage ? "#services" : "/#services"}
            onClick={(e) => handleNavClick(e, "#services")}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Services
          </a>
          <a
            href={isHomePage ? "#faq" : "/#faq"}
            onClick={(e) => handleNavClick(e, "#faq")}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Billing FAQ
          </a>
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleNavClick(e, "#contact")}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact Us
          </a>
          <ParticleButton
            onClick={() => {
              window.open("https://www.therapyportal.com/p/fpsk98033/login/", "_blank");
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
          >
            <span>Client Portal</span>
            <ExternalLink className="w-4 h-4" />
          </ParticleButton>
        </div>
      </nav>
    </header>
  );
}
