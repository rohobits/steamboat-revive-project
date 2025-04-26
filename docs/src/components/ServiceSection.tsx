
interface ServiceProps {
  id: string;
  title: string;
  subtitle: string;
  services: {
    name: string;
    description: string;
    price: string;
    image: string;
  }[];
  bgColor?: string;
}

const ServiceSection = ({ id, title, subtitle, services, bgColor = "bg-white" }: ServiceProps) => {
  return (
    <section id={id} className={`py-20 ${bgColor}`}>
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-steamboat-darkBlue">{service.name}</h3>
                <p className="mb-4 text-steamboat-gray">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-steamboat-blue">{service.price}</span>
                  <a
                    href="#contact"
                    className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-steamboat-blue hover:bg-steamboat-darkBlue transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
