// src/App.tsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import Index from "./pages/Index";
import BikeService from "./pages/BikeService";
import EventsPage from "./pages/EventsPage";
import BootFittingPage from "./pages/Boot-fitting";
import SkiTuningPage from "./pages/ski-tuning";
import NotFound from "./pages/NotFound";
import ShopPage from "./pages/ShopPage";

const App = () => (
  <Router basename="/steamboat-revive-project">
    <ScrollToTop />
    <NavBar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/bike-service" element={<BikeService />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/boot-fitting" element={<BootFittingPage />} />
      <Route path="/ski-tuning" element={<SkiTuningPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
