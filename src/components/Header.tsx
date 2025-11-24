import { cn } from "@/lib/utils";
import TextAnimate from "@/components/ui/text-animate";
import { Link, useLocation } from "react-router-dom";
import ParticleButton from "@/components/kokonutui/particle-button";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50",
        "bg-white/30 backdrop-blur-2xl",
        "border border-white/30",
        "rounded-xl md:rounded-2xl",
        "shadow-lg shadow-black/10",
        "px-4 py-3 md:px-6 md:py-3.5",
        "transition-all duration-300"
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/favicon.png"
            alt="FPSK Logo"
            className="w-9 h-9 object-contain"
          />
          <div className="hidden md:flex items-center overflow-hidden">
            <TextAnimate
              text="Family Psychological Services of Kirkland"
              type="calmInUp"
              className="!mt-0 !py-0 !px-0 text-sm font-medium text-gray-900"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-gray-200/50">
          <div className="flex flex-col gap-4">
            <a
              href={isHomePage ? "#home" : "/#home"}
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              Home
            </a>
            <a
              href={isHomePage ? "#team" : "/#team"}
              onClick={(e) => handleNavClick(e, "#team")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              Our Team
            </a>
            <a
              href={isHomePage ? "#services" : "/#services"}
              onClick={(e) => handleNavClick(e, "#services")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              Services
            </a>
            <a
              href={isHomePage ? "#faq" : "/#faq"}
              onClick={(e) => handleNavClick(e, "#faq")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              Billing FAQ
            </a>
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
            >
              Contact Us
            </a>
            <ParticleButton
              onClick={() => {
                window.open("https://www.therapyportal.com/p/fpsk98033/login/", "_blank");
                setIsMobileMenuOpen(false);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium w-full"
            >
              <span>Client Portal</span>
              <ExternalLink className="w-4 h-4" />
            </ParticleButton>
          </div>
        </div>
      )}
    </header>
  );
}
