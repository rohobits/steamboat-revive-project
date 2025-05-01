import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import BikeService from "./pages/BikeService";
import EventsPage from "./pages/EventsPage";
import BootFittingPage from "./pages/Boot-fitting";
import SkiTuningPage from "./pages/ski-tuning";    // ← import your new page
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter basename="/steamboat-revive-project">
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/bike-service" element={<BikeService />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/Boot-fitting" element={<BootFittingPage />} />
      <Route path="/ski-tuning" element={<SkiTuningPage />} />    {/* ← new */}
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
