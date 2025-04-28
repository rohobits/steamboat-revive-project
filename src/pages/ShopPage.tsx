// src/pages/ShopPage.tsx
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ShopPage() {
  useEffect(() => {
    // Inject custom styles to hide Locally branding and enforce responsiveness
    const style = document.createElement("style");
    style.innerHTML = `
      /* Hide Locally "Powered by" anchor */
      #lcly-button-0 > a { display: none !important; }
      /* Ensure widget respects container width */
      #lcly-button-0 { width: 100% !important; }
      /* Allow horizontal scroll on small screens */
      .locally-wrapper { overflow-x: auto; }
    `;
    document.head.appendChild(style);

    // Dynamically inject the Locally widget script
    const script = document.createElement("script");
    script.async = true;
    script.id = "lcly-script-0";
    document.body.appendChild(script);

    // Configure the widget
    var __lcly_channel_domain_0 = "locally";
    var lcly_config_0 = { store: "20274", uri: "search" };
    var lcly_query_0 = Object.keys(lcly_config_0)
      .reduce((a, k) => {
        a.push(
          encodeURIComponent(k) + "=" +
            encodeURIComponent(
              typeof lcly_config_0[k] === "object" && lcly_config_0[k] !== null
                ? JSON.stringify(lcly_config_0[k])
                : lcly_config_0[k]
            )
        );
        return a;
      }, [])
      .join("&");
    var lcly_endpoint_0 =
      "https://SteamboatSkiandBikeKare.locally.com/widgets/search.js?" + lcly_query_0;
    script.src = lcly_endpoint_0;
  }, []);

  return (
    <>
      <NavBar />

      <main className="container-custom py-20 bg-white">
        <h1 className="section-title text-center">Shop Our Inventory</h1>
        {/* Wrap widget for responsive scroll */}
        <div className="locally-wrapper mt-8">
          <div
            id="lcly-button-0"
            data-switchlive="true"
            data-switchlive-impression="true"
            data-switchlive-impression-id-PL="1"
            className="flex justify-center"
          >
            {/* Fallback anchor (hidden by CSS) required by widget */}
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
