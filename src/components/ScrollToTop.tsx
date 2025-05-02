// src/components/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (home-page anchor), smooth scroll to it:
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Otherwise, jump immediately to top of new page:
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
