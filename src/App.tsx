import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

import Index           from "./pages/Index";
import BikeService     from "./pages/BikeService";
import EventsPage      from "./pages/EventsPage";
import BootFittingPage from "./pages/Boot-fitting";
import SkiTuningPage   from "./pages/ski-tuning";
import ShopPage        from "./pages/ShopPage";
import NotFound        from "./pages/NotFound";

const App = () => (
  <Router basename={import.meta.env.BASE_URL}>
    <ScrollToTop />

    <Routes>
      {/* Home */}
      <Route path="/" element={<Index />} />

      {/* Services */}
      <Route path="/bike-service" element={<BikeService />} />
      <Route path="/events"       element={<EventsPage />} />
      <Route path="/boot-fitting" element={<BootFittingPage />} />
      <Route path="/ski-tuning"   element={<SkiTuningPage />} />

      {/* Shop */}
      <Route path="/shop" element={<ShopPage />} />

      {/* Catch-all for anything else */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
