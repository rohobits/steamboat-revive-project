// src/components/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // give the DOM a moment to settle
    setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      // no hash or element not found → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }, [pathname, hash]);

  return null;
}
