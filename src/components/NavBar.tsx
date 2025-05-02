// src/components/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // give the DOM a moment to settle
    setTimeout(() => {
      if (hash) {
        // if there's a hash, find that section and smooth-scroll to it
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      // otherwise (no hash) jump immediately to top of the new page
      window.scrollTo(0, 0);
    }, 50);
  }, [pathname, hash]);

  return null;
}
