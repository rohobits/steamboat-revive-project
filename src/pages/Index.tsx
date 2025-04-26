import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Bike rental service data
  const bikeServices = [
    {
      name: "Full Suspension Mountain Bike",
      description: "Advanced full suspension bikes for technical terrain and trail riding.",
      price: "From $65/day",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80",
    },
    {
      name: "Hardtail Mountain Bike",
      description: "Versatile hardtail bikes ideal for cross-country and trail riding.",
      price: "From $45/day",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80",
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
        id="bike"
        title="Bike Rentals"
        subtitle="Explore Steamboat Springs on two wheels with our premium bikes"
        services={bikeServices}
        bgColor="bg-white"
      />

      <AboutSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
