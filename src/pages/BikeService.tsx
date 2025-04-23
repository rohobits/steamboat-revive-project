
import { MapPin, Wrench } from "lucide-react";

const bikeServicePackages = [
  {
    name: "Flat Fix",
    description:
      "Includes labor to remove wheel and replace with new tube. Price does not include cost of tube.",
    price: "$15",
  },
  {
    name: "Basic Tune",
    description:
      "Brake and gear adjustment; lube chain; safety check all bolts; air tires.",
    price: "$70",
  },
  {
    name: "Full Tune",
    description:
      "Everything in basic tune plus: true front and rear wheels, clean and polish frame, major cleaning of drivetrain.",
    price: "$120",
  },
  {
    name: "Overhaul",
    description:
      "Complete teardown and rebuild of bike. Includes all services in Full Tune with deep cleaning and re-greasing of all major components.",
    price: "$200",
  },
  {
    name: "Suspension Service",
    description:
      "Fork & shock air sleeve service. Complete factory service available (pricing varies).",
    price: "From $45",
  },
];

export default function BikeService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="flex items-center space-x-4 mb-8">
          <Wrench className="text-steamboat-blue" size={36} />
          <h1 className="section-title mb-0">Bike Service Packages</h1>
        </div>
        <p className="section-subtitle max-w-2xl">
          Our expert mechanics offer a full range of services to keep your bike in peak condition. Estimates are always free!
        </p>
        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {bikeServicePackages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-lg shadow-lg bg-white p-6 flex flex-col justify-between border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-steamboat-darkBlue mb-2">
                {pkg.name}
              </h2>
              <p className="text-steamboat-gray mb-4 min-h-[64px]">{pkg.description}</p>
              <div className="flex items-end justify-between">
                <span className="text-lg font-bold text-steamboat-blue">
                  {pkg.price}
                </span>
                <Wrench className="text-steamboat-darkBlue" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gray-50 border border-steamboat-blue/20 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:space-x-4">
          <MapPin className="text-steamboat-blue mb-4 md:mb-0" size={28} />
          <div>
            <p className="font-medium text-steamboat-darkBlue">
              Have a service question? Stop by 442 Lincoln Avenue in Steamboat Springs or call us at (970) 879-8428.
            </p>
            <p className="text-steamboat-gray text-sm">
              Note: Prices shown are for labor only. Parts and accessories extra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
