// src/pages/ShopBicyclesPage.tsx

import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ShopBicyclesPage() {
  useEffect(() => {
    // 1) Inject base styles + hide the fallback anchor
    const style = document.createElement("style");
    style.innerHTML = `
      /* Hide "Powered by Locally" fallback link */
      #lcly-button-0 > a { display: none !important; }
      /* Force widget to fill container */
      #lcly-button-0 { width: 100% !important; }
      .locally-wrapper { overflow-x: auto; }

      /* Hide all filter groups by default */
      #lcly-button-0 .lcly-facet-group { display: none !important; }
    `;
    document.head.appendChild(style);

    // 2) Set up a MutationObserver to prune facet-groups once they appear
    const observer = new MutationObserver(() => {
      const widget = document.getElementById("lcly-button-0");
      if (!widget) return;

      const groups = widget.querySelectorAll<HTMLElement>(".lcly-facet-group");
      let sawBrand = false;

      groups.forEach((group) => {
        const titleEl = group.querySelector<HTMLElement>(".lcly-facet-group__title");
        const title = titleEl?.textContent?.trim() ?? "";

        if (title === "Brand") {
          sawBrand = true;
          // Show Brand group
          group.style.display = "";

          // Remove every brand except Electra, Liv, Trek
          group
            .querySelectorAll<HTMLElement>(".lcly-facet-group__option")
            .forEach((opt) => {
              const label = opt
                .querySelector<HTMLElement>(".lcly-facet-group__option-label")
                ?.textContent?.trim();
              if (label && !["Electra", "Liv", "Trek"].includes(label)) {
                opt.remove();
              }
            });
        } else {
          // remove all other facet groups
          group.remove();
        }
      });

      // Once we've pruned the Brand group, we can stop observing
      if (sawBrand) {
        observer.disconnect();
      }
    });

    // Observe the entire document for widget insertion
    observer.observe(document.body, { childList: true, subtree: true });

    // 3) Inject the Locally widget script
    const script = document.createElement("script");
    script.async = true;
    script.id = "lcly-script-0";

    // Embed config: only Bicycles + Electra/Liv/Trek brands
    ;(window as any).__lcly_channel_domain_0 = "locally";
    const lcly_config_0 = {
      store: "20274",
      uri: "search",
      category: "Bicycles",
      brand: "Electra OR Liv OR Trek",
    };
    const lcly_query_0 = Object.entries(lcly_config_0)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v as string)}`)
      .join("&");

    script.src = `https://SteamboatSkiandBikeKare.locally.com/widgets/search.js?${lcly_query_0}`;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      style.remove();
      script.remove();
    };
  }, []);

  return (
    <>
      <NavBar />

      <main className="container-custom py-20 bg-white">
        <h1 className="section-title text-center">Shop Bicycles</h1>
        <div className="locally-wrapper mt-8">
          <div
            id="lcly-button-0"
            data-switchlive="true"
            data-switchlive-impression="true"
            data-switchlive-impression-id-PL="1"
            className="flex justify-center"
          >
            {/* Fallback anchor (hidden by CSS) */}
            <a
              id="lcly-link-0"
              data-switchlive="true"
              data-switchlive-mode="auto"
              data-switchlive-id-PL="6"
              role="button"
              href="https://www.locally.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Locally
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
