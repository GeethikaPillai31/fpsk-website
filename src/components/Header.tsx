import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header
      className={cn(
        "fixed top-4 left-4 right-4 z-50",
        "bg-white/80",
        "backdrop-blur-2xl",
        "border border-gray-200/50",
        "rounded-2xl",
        "shadow-lg shadow-black/5",
        "px-6 py-3.5",
        "transition-all duration-300"
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xs">FPSK</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900 leading-tight">
              FPSK
            </span>
            <span className="text-[10px] text-gray-600 leading-tight">
              Family Psychological Services of Kirkland
            </span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="#home"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#team"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Our Team
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
