import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Ski rental service data
  const skiServices = [
    {
      name: "Premium Ski Package",
      description: "High-end skis, boots, and poles for experienced skiers. Includes adjustments and recommendations.",
      price: "From $45/day",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Standard Ski Package",
      description: "Quality skis for all-mountain skiing, comfortable boots, and adjustable poles.",
      price: "From $35/day",
      image: "https://images.unsplash.com/photo-1603304891649-13339d149c7b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Junior Ski Package",
      description: "Kid-specific skis, boots, and poles adjusted for safety and optimal learning.",
      price: "From $25/day",
      image: "https://images.unsplash.com/photo-1548825519-adec608dae61?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Performance Snowboard",
      description: "High-end snowboards for experienced riders with bindings and boots.",
      price: "From $40/day",
      image: "https://images.unsplash.com/photo-1613512748563-d458ab0645dc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "All-Mountain Snowboard",
      description: "Versatile snowboards for all types of terrain with comfortable boots and bindings.",
      price: "From $30/day",
      image: "https://images.unsplash.com/photo-1522056615691-da7b8106c665?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Junior Snowboard",
      description: "Kid-sized snowboards with specially designed boots and bindings for young riders.",
      price: "From $20/day",
      image: "https://images.unsplash.com/photo-1541298645675-6cc8e127831d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
  ];

  // Bike rental service data
  const bikeServices = [
    {
      name: "Full Suspension Mountain Bike",
      description: "Advanced full suspension bikes for technical terrain and trail riding.",
      price: "From $65/day",
      image: "https://images.unsplash.com/photo-1598552183423-b95d565f3ab3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Hardtail Mountain Bike",
      description: "Versatile hardtail bikes ideal for cross-country and trail riding.",
      price: "From $45/day",
      image: "https://images.unsplash.com/photo-1618254074137-c211a45caef9?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Electric Mountain Bike",
      description: "Pedal-assisted e-bikes for extended range and climbing capabilities.",
      price: "From $75/day",
      image: "https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Road Bike",
      description: "Lightweight road bikes for pavement riding and exploring Steamboat's scenic roads.",
      price: "From $55/day",
      image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Cruiser Bike",
      description: "Comfortable cruiser bikes for casual riding around town and bike paths.",
      price: "From $30/day",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Kids Bike",
      description: "Quality bikes sized for young riders with options for various ages and abilities.",
      price: "From $25/day",
      image: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <>
      <NavBar />
      <HeroSection />

      <ServiceSection
        id="ski"
        title="Ski & Snowboard Rentals"
        subtitle="Top-quality equipment for all levels of skiers and snowboarders"
        services={skiServices}
        bgColor="bg-white"
      />

      <ServiceSection
        id="bike"
        title="Bike Rentals"
        subtitle="Explore Steamboat Springs on two wheels with our premium bikes"
        services={bikeServices}
        bgColor="bg-gray-50"
      />

      <AboutSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
