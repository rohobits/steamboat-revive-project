
import { MapPin, Users, Star, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const servicePackages = [
  {
    level: "Level 1",
    price: "$119.99",
    recommendation: "Recommended Every 30 Hours",
    description: "Everything Torqued, Aligned & Adjusted",
    features: [
      "Torque All Fasteners",
      "Align & Adjust Breaks",
      "Align & Adjust Shifting",
      "Adjust Headset",
      "Inspect Bottom Bracket",
      "Bike Wash"
    ]
  },
  {
    level: "Level 2",
    price: "$169.99",
    recommendation: "Recommended Every 50 Hours",
    description: "Everything Cleaned, Tensioned & Aligned",
    features: [
      "Level 1 +",
      "Drive Train Removed For Deep Clean",
      "Lateral & Vertical Wheel True"
    ]
  },
  {
    level: "Level 3",
    price: "$369.99",
    recommendation: "Recommended Every 100 Hours",
    description: "The Entire Bike Stripped, Cleaned & Tuned To Perfection",
    features: [
      "Level 2 +",
      "Complete Tear Down & Deep Clean of All Parts",
      "Full Bearing Rebuild For Non-Functioning Bearings",
      "Reassemble bike and lube all parts",
      "Replace All Cable & Housing"
    ]
  }
];

const reviews = [
  {
    text: "The bike service team at Steamboat did an incredible job with my Trek. The suspension feels better than when it was new!",
    author: "Mike R.",
    rating: 5
  },
  {
    text: "Professional service and amazing attention to detail. These guys really know their stuff when it comes to bike maintenance.",
    author: "Sarah L.",
    rating: 5
  },
  {
    text: "Best bike shop in Steamboat! They completely restored my mountain bike and the service was outstanding.",
    author: "Tom K.",
    rating: 5
  }
];

export default function BikeService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="flex items-center space-x-4 mb-8">
          <Wrench className="text-steamboat-blue" size={36} />
          <h1 className="section-title mb-0">Bike Service Packages</h1>
        </div>

        {/* Expert Staff Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-start space-x-4 mb-6">
            <Users className="text-steamboat-blue" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-steamboat-darkBlue mb-3">Expert Bike Technicians</h2>
              <p className="text-lg text-steamboat-gray">
                Our certified bike technicians bring decades of combined experience to every service. 
                From basic tune-ups to complex repairs, our team's expertise ensures your bike performs at its best 
                on Steamboat's world-class trails.
              </p>
            </div>
          </div>
        </div>

        {/* Suspension Service Callout */}
        <div className="bg-steamboat-blue text-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Specialized Suspension Service</h2>
          <p className="text-lg mb-6">
            Our suspension experts are factory-trained to service Fox, RockShox, and other major brands. 
            We provide comprehensive fork and shock maintenance to keep your suspension performing optimally 
            on Steamboat's demanding terrain.
          </p>
          <p className="text-sm italic">
            Contact us for suspension service pricing, as costs vary based on your specific components and service needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {servicePackages.map((pkg) => (
            <Card key={pkg.level} className="border-2">
              <CardHeader className="text-center bg-gray-800 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold">{pkg.level}</CardTitle>
                <p className="text-gray-200">{pkg.recommendation}</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-steamboat-blue">{pkg.price}</span>
                  <p className="mt-2 text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <div className="flex items-center space-x-4 mb-8">
            <Star className="text-steamboat-blue" size={32} />
            <h2 className="text-2xl font-bold text-steamboat-darkBlue">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-steamboat-orange" size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-steamboat-gray mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-steamboat-darkBlue">- {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gray-50 border border-steamboat-blue/20 rounded-lg p-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <MapPin className="text-steamboat-blue mb-4 md:mb-0" size={28} />
            <div>
              <p className="font-medium text-steamboat-darkBlue">
                Have a service question? Stop by 442 Lincoln Avenue in Steamboat Springs or call us at (970) 879-8428.
              </p>
              <p className="text-steamboat-gray mt-2">
                Our expert technicians are happy to assess your bike and provide detailed service recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
