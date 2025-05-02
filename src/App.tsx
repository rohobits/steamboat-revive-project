// src/App.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import BikeService from "./pages/BikeService";
import BootFittingPage from "./pages/Boot-fitting";
import SkiTuningPage from "./pages/ski-tuning";
import ShopPage from "./pages/ShopPage";
import EventsPage from "./pages/EventsPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Always render the nav bar */}
      <NavBar />

      {/* Handles both “jump to top instantly” + smooth hash-scroll */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bike-service" element={<BikeService />} />
        <Route path="/boot-fitting" element={<BootFittingPage />} />
        <Route path="/ski-tuning" element={<SkiTuningPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
