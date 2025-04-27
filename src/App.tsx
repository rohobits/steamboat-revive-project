// src/App.tsx
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import BikeService from "./pages/BikeService";
import EventsPage from "./pages/EventsPage";
import ShopPage from "./pages/ShopPage";
import NotFound from "./pages/NotFound";

// Vite will inject your base public path (e.g. "/steamboat-revive-project/")
const BASE_URL = import.meta.env.BASE_URL;

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter basename={BASE_URL}>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bike-service" element={<BikeService />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
