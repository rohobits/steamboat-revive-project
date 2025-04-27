import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  // Google Maps embed URLs for each address
  const downtownMap =
    "https://maps.google.com/maps?q=442%20Lincoln%20Ave%2C%20Steamboat%20Springs%2C%20CO%2080487&output=embed";
  const mountainMap =
    "https://maps.google.com/maps?q=2250%20Apres%20Ski%20Way%2C%20Steamboat%20Springs%2C%20CO%2080487&output=embed";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or ready to reserve your equipment? Get in touch with
            us!
          </p>
        </div>

        {/* Two-column layout: map & info for each location */}
        <div className="grid grid-cols-1 gap-12 mt-16 lg:grid-cols-2">
          {/* Downtown Location */}
          <div className="rounded-lg overflow-hidden h-96">
            <iframe
              src={downtownMap}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Downtown Steamboat Springs Map"
            />
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-steamboat-darkBlue">
                    Downtown
                  </h3>
                  <p className="mt-1 text-steamboat-gray">
                    442 Lincoln Avenue
                    <br />
                    Steamboat Springs, CO 80487
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-steamboat-darkBlue">
                    Phone
                  </h3>
                  <p className="mt-1 text-steamboat-gray">
                    (970) 879-9144
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-steamboat-darkBlue">
                    Hours
                  </h3>
                  <p className="mt-1 text-steamboat-gray">
                    <strong>Winter:</strong> 8am–6pm Mon–Sat, 8am–5pm Sun
                  </p>
                  <p className="text-steamboat-gray">
                    <strong>Summer:</strong> 9am–6pm Mon–Sat, 9am–5pm Sun
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mountain Location */}
          <div className="rounded-lg overflow-hidden h-96">
            <iframe
              src={mountainMap}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mountain Location Map"
            />
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-steamboat-darkBlue">
                    Mountain
                  </h3>
                  <p className="mt-1 text-steamboat-gray">
                    2250 Apres Ski Way
                    <br />
                    Steamboat Springs, CO 80487
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-steamboat-darkBlue">
                    Phone
                  </h3>
                  <p className="mt-1 text-steamboat-gray">
                    (970) 879-6350
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-steamboat-darkBlue">
                    Hours
                  </h3>
                  <p className="mt-1 text-steamboat-gray">
                    <strong>Winter:</strong> 7:45am–5pm Daily
                  </p>
                  <p className="text-steamboat-gray">
                    <strong>Summer:</strong> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
