// src/App.tsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import ScrollToTop from '@/components/ScrollToTop';

// Page components
import Index from '@/pages/Index';
import BikeService from '@/pages/BikeService';
import BikeRentalsPage from '@/pages/BikeRentalsPage';
import BootFittingPage from '@/pages/Boot-fitting';
import SkiTuningPage from '@/pages/ski-tuning';
import ShopPage from '@/pages/ShopPage';
import ShopBicyclesPage from '@/pages/ShopBicyclesPage';
import EventsPage from '@/pages/EventsPage';
import SkiRentalsPage from '@/pages/SkiRentalsPage';
import SkiRentalsMountainPage from '@/pages/SkiRentalsMountainPage';
import SkiRentalsDowntownPage from '@/pages/SkiRentalsDowntownPage';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Router>
      {/* Always present global nav and scroll handler */}
      <NavBar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bike-service" element={<BikeService />} />
        <Route path="/boot-fitting" element={<BootFittingPage />} />
        <Route path="/ski-tuning" element={<SkiTuningPage />} />
        <Route path="/bike-rentals" element={<BikeRentalsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/bicycles" element={<ShopBicyclesPage />} />
        <Route path="/events" element={<EventsPage />} />

        {/* Ski Rentals section */}
        <Route path="/ski-rentals" element={<SkiRentalsPage />} />
        <Route path="/ski-rentals/mountain" element={<SkiRentalsMountainPage />} />
        <Route path="/ski-rentals/downtown" element={<SkiRentalsDowntownPage />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
