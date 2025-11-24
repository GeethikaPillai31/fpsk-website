import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // Only scroll if pathname changed
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      // Immediately set scroll position without any animation
      // Direct assignment is the most reliable way to prevent animation
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      // Also use scrollTo with 'auto' behavior as fallback
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname]);

  return null;
}

