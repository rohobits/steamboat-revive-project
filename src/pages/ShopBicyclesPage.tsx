// src/pages/ShopBicyclesPage.tsx

import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ShopBicyclesPage() {
  useEffect(() => {
    // 1) Inject some base styles + hide all filter groups
    const style = document.createElement("style");
    style.innerHTML = `
      /* Hide the Locally “Powered by” link + force full-width widget */
      #lcly-button-0 > a { display: none !important; }
      #lcly-button-0 { width: 100% !important; }
      .locally-wrapper { overflow-x: auto; }

      /* Initially hide every facet group */
      #lcly-button-0 .lcly-facet-group { display: none !important; }
    `;
    document.head.appendChild(style);

    // 2) Create & append the Locally widget script
    const script = document.createElement("script");
    script.async = true;
    script.id = "lcly-script-0";

    // 3) Once loaded, surgically unwrap only the Brand group and prune its options
    script.onload = () => {
      const wrapper = document.querySelector("#lcly-button-0");
      if (!wrapper) return;

      // Find all facet groups
      const groups = wrapper.querySelectorAll<HTMLElement>(".lcly-facet-group");
      groups.forEach((group) => {
        // A) Identify the title
        const titleEl = group.querySelector<HTMLElement>(".lcly-facet-group__title");
        if (titleEl && titleEl.textContent?.trim() === "Brand") {
          // B) Show the Brand group
          group.style.display = "";

          // C) Remove every option that isn’t Electra, Liv, or Trek
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
        }
      });
    };

    document.body.appendChild(script);

    // 4) Configure the widget to only show “Bicycles”
    //    (pre-filters your inventory to that sub-category)
    ;(window as any).__lcly_channel_domain_0 = "locally";
    const lcly_config_0 = {
      store: "20274",
      uri: "search",
      category: "Bicycles",
    };
    const lcly_query_0 = Object.entries(lcly_config_0)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("&");
    script.src = `https://SteamboatSkiandBikeKare.locally.com/widgets/search.js?${lcly_query_0}`;
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
            {/* Fallback anchor (hidden by our CSS) */}
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
