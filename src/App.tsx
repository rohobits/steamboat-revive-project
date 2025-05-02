// src/App.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import BikeService from "./pages/BikeService";
import EventsPage from "./pages/EventsPage";
import BootFittingPage from "./pages/Boot-fitting";
import SkiTuningPage from "./pages/ski-tuning";
import ShopPage from "./pages/ShopPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    // No basename here — we want all Links and routes to be rooted at "/"
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bike-service" element={<BikeService />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/Boot-fitting" element={<BootFittingPage />} />
        <Route path="/ski-tuning" element={<SkiTuningPage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
