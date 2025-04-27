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
      image: "/images/full-suspension.jpg",
    },
    {
      name: "Hardtail Mountain Bike",
      description: "Versatile hardtail bikes ideal for cross-country and trail riding.",
      price: "From $45/day",
      image: "/images/hardtail.jpg",
    },
    {
      name: "Electric Mountain Bike",
      description: "Pedal-assisted e-bikes for extended range and climbing capabilities.",
      price: "From $75/day",
      image: "/images/electric.jpg",
    },
    {
      name: "Road Bike",
      description:
        "Lightweight road bikes for pavement riding and exploring Steamboat's scenic roads.",
      price: "From $55/day",
      image: "/images/road-bike.jpg",
    },
    {
      name: "Cruiser Bike",
      description: "Comfortable cruiser bikes for casual riding around town and bike paths.",
      price: "From $30/day",
      image: "/images/cruiser.jpg",
    },
    {
      name: "Kids Bike",
      description:
        "Quality bikes sized for young riders with options for various ages and abilities.",
      price: "From $25/day",
      image: "/images/kids-bike.jpg",
    },
  ];

  return (
    <>
      <NavBar />
      <HeroSection />

      {/* Bike Rentals */}
      <ServiceSection
        id="bike"
        title="Bike Rentals"
        subtitle="Explore Steamboat Springs on two wheels with our premium bikes"
        services={bikeServices}
        bgColor="bg-white"
      />

      {/* About Us */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
};

export default Index;
