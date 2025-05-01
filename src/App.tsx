import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import BikeService from "./pages/BikeService";
import EventsPage from "./pages/EventsPage";
import BootFittingPage from "./pages/Boot-fitting";
import SkiTuningPage from "./pages/ski-tuning";
import ShopPage from "./pages/ShopPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router basename="/steamboat-revive-project">
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/bike-service" element={<BikeService />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/boot-fitting" element={<BootFittingPage />} />
      <Route path="/ski-tuning" element={<SkiTuningPage />} />
      <Route path="/shop" element={<ShopPage />} />
      {/* catch-all must go last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
