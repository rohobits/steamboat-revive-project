// src/App.tsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the NavBar and ScrollToTop from their actual relative locations
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';

// Page components
import Index from './pages/Index';
import BikeService from './pages/BikeService';
import BootFittingPage from './pages/Boot-fitting';
import SkiTuningPage from './pages/ski-tuning';
import ShopPage from './pages/ShopPage';
import EventsPage from './pages/EventsPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    // Make sure basename matches your Vite base in production
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* NavBar is now always rendered, above every route */}
      <NavBar />

      {/* Handles top-of-page jumps + smooth hash scrolling */}
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
