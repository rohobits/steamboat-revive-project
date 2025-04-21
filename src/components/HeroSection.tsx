
const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')" }}>
      <div className="hero-overlay"></div>
      <div className="container-custom relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Explore Steamboat Springs
        </h1>
        <p className="mb-8 text-xl text-white/90 max-w-2xl">
          Premium ski and bike rentals to experience the best of Colorado's mountains
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a href="#ski" className="btn-primary">
            Ski Rentals
          </a>
          <a href="#bike" className="btn-secondary">
            Bike Rentals
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
