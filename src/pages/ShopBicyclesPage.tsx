// src/pages/ShopBicyclesPage.tsx

import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ShopBicyclesPage() {
  useEffect(() => {
    // 1) Inject CSS to hide the filter sidebar & fallback link, make results full-width
    const style = document.createElement("style");
    style.innerHTML = `
      /* Hide the "Powered by Locally" fallback link */
      #lcly-button-0 > a { display: none !important; }

      /* Hide the entire filter pane */
      #lcly-button-0 .lcly-sidebar,
      #lcly-button-0 .lcly-facets,
      #lcly-button-0 .lcly-facet-group,
      #lcly-button-0 .lcly-facet-list {
        display: none !important;
      }

      /* Force the results panel to fill the space */
      #lcly-button-0 .lcly-results {
        width: 100% !important;
      }

      /* Allow horizontal scrolling on small screens */
      .locally-wrapper { overflow-x: auto; }
    `;
    document.head.appendChild(style);

    // 2) Inject the Locally widget script
    const script = document.createElement("script");
    script.async = true;
    script.id = "lcly-script-0";
    document.body.appendChild(script);

    // 3) Configure the widget: Bicycles category + only three brands
    ;(window as any).__lcly_channel_domain_0 = "locally";
    const lcly_config_0 = {
      store: "20274",
      uri: "search",
      category: "Bicycles",
      brand: ["Electra", "Liv", "Trek"],
    };
    const lcly_query_0 = Object.entries(lcly_config_0)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(
        typeof v === "object" ? JSON.stringify(v) : v
      )}`)
      .join("&");
    script.src = `https://SteamboatSkiandBikeKare.locally.com/widgets/search.js?${lcly_query_0}`;

    // clean up if React ever unmounts this page
    return () => {
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
            {/* fallback anchor (hidden by CSS) */}
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
