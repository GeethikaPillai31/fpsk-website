import { cn } from "@/lib/utils";
import TextAnimate from "@/components/ui/text-animate";
import { Link, useLocation } from "react-router-dom";
import ParticleButton from "@/components/kokonutui/particle-button";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get the base URL for constructing navigation links
  // This ensures links work correctly when deployed to a subdirectory (e.g., /fpsk-website/)
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, ""); // Remove trailing slash if present

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
            src={`${import.meta.env.BASE_URL}favicon.png`}
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
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href={isHomePage ? "#home" : `${baseUrl}/#home`}
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href={isHomePage ? "#team" : `${baseUrl}/#team`}
            onClick={(e) => handleNavClick(e, "#team")}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Our Team
          </a>
          <a
            href={isHomePage ? "#services" : `${baseUrl}/#services`}
            onClick={(e) => handleNavClick(e, "#services")}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Services
          </a>
          <a
            href={isHomePage ? "#faq" : `${baseUrl}/#faq`}
            onClick={(e) => handleNavClick(e, "#faq")}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Billing FAQ
          </a>
          <a
            href={isHomePage ? "#contact" : `${baseUrl}/#contact`}
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
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-gray-200/50">
              <div className="flex flex-col gap-3">
                <motion.a
                  href={isHomePage ? "#home" : `${baseUrl}/#home`}
                  onClick={(e) => handleNavClick(e, "#home")}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2 px-2 rounded-lg hover:bg-gray-100/50"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href={isHomePage ? "#team" : `${baseUrl}/#team`}
                  onClick={(e) => handleNavClick(e, "#team")}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2 px-2 rounded-lg hover:bg-gray-100/50"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  Our Team
                </motion.a>
                <motion.a
                  href={isHomePage ? "#services" : `${baseUrl}/#services`}
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2 px-2 rounded-lg hover:bg-gray-100/50"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Services
                </motion.a>
                <motion.a
                  href={isHomePage ? "#faq" : `${baseUrl}/#faq`}
                  onClick={(e) => handleNavClick(e, "#faq")}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2 px-2 rounded-lg hover:bg-gray-100/50"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  Billing FAQ
                </motion.a>
                <motion.a
                  href={isHomePage ? "#contact" : `${baseUrl}/#contact`}
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2 px-2 rounded-lg hover:bg-gray-100/50"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Contact Us
                </motion.a>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <ParticleButton
                    onClick={() => {
                      window.open("https://www.therapyportal.com/p/fpsk98033/login/", "_blank");
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium w-full mt-2"
                  >
                    <span>Client Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </ParticleButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
