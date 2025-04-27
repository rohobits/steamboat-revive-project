// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On each navigation:
 *  - if there's a hash (e.g. "#about"), scroll to that element
 *  - otherwise, scroll to top
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // strip the "#" and scroll to the element
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // no hash or element not found → scroll to top
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
