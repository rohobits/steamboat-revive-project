import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  // Clickable full Google Maps URLs
  const downtownMapUrl =
    "https://www.google.com/maps/place/Steamboat+Ski+%26+Bike+Kare/@40.4842758,-106.8360165,17z/data=!3m1!4b1!4m6!3m5!1s0x874268da15fbba5f:0x7a95cdcaa994ae5b!8m2!3d40.4842759!4d-106.8311456!16s%2Fg%2F1tff8264?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D";
  const mountainMapUrl =
    "https://www.google.com/maps/place/Steamboat+Ski+%26+Bike+Kare+-+Gondola+Square/@40.4565424,-106.804615,17z/data=!3m1!4b1!4m6!3m5!1s0x87426eba1111b891:0xf42b39da70b52b27!8m2!3d40.4565424!4d-106.804615!16s%2Fg%2F11g9vxtwmb?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D";

  // Embed using the full address to force the place pin
  const downtownEmbed =
    "https://maps.google.com/maps?q=Steamboat%20Ski%20%26%20Bike%20Kare%2C%20442%20Lincoln%20Ave%2C%20Steamboat%20Springs%2C%20CO%2080487&z=17&output=embed";
  const mountainEmbed =
    "https://maps.google.com/maps?q=Steamboat%20Ski%20%26%20Bike%20Kare%20-%20Gondola%20Square%2C%202250%20Apres%20Ski%20Way%2C%20Steamboat%20Springs%2C%20CO%2080487&z=17&output=embed";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or ready to reserve your equipment? Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-16 lg:grid-cols-2">
          {/* Downtown */}
          <div className="rounded-lg overflow-hidden h-96">
            <iframe
              src={downtownEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Downtown Steamboat Ski & Bike Kare"
            />
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-lg space-y-6">
            {/* Address (clickable) */}
            <a
              href={downtownMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start hover:text-steamboat-blue"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-steamboat-darkBlue">Downtown</h3>
                <p className="mt-1 text-steamboat-gray">
                  442 Lincoln Avenue
                  <br />
                  Steamboat Springs, CO 80487
                </p>
              </div>
            </a>

            {/* Phone (clickable) */}
            <a
              href="tel:9708799144"
              className="flex items-start hover:text-steamboat-blue"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-steamboat-darkBlue">Phone</h3>
                <p className="mt-1 text-steamboat-gray">(970) 879-9144</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-steamboat-darkBlue">Hours</h3>
                <p className="mt-1 font-bold text-steamboat-darkBlue">Winter Hours</p>
                <p className="text-steamboat-gray">Mon–Sat | 8 am – 6 pm</p>
                <p className="text-steamboat-gray">Sun | 8 am – 5 pm</p>
                <p className="mt-2 font-bold text-steamboat-darkBlue">Summer Hours</p>
                <p className="text-steamboat-gray">Mon–Sat | 9 am – 6 pm</p>
                <p className="text-steamboat-gray">Sun | 9 am – 5 pm</p>
              </div>
            </div>
          </div>

          {/* Mountain */}
          <div className="rounded-lg overflow-hidden h-96">
            <iframe
              src={mountainEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gondola Square Steamboat Ski & Bike Kare"
            />
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-lg space-y-6">
            {/* Address (clickable) */}
            <a
              href={mountainMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start hover:text-steamboat-blue"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-steamboat-darkBlue">Mountain</h3>
                <p className="mt-1 text-steamboat-gray">
                  2250 Apres Ski Way
                  <br />
                  Steamboat Springs, CO 80487
                </p>
              </div>
            </a>

            {/* Phone (clickable) */}
            <a
              href="tel:9708796350"
              className="flex items-start hover:text-steamboat-blue"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-steamboat-darkBlue">Phone</h3>
                <p className="mt-1 text-steamboat-gray">(970) 879-6350</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steamboat-blue">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-steamboat-darkBlue">Hours</h3>
                <p className="mt-1 font-bold text-steamboat-darkBlue">Winter Hours</p>
                <p className="text-steamboat-gray">Daily | 7:45 am – 5 pm</p>
                <p className="mt-2 font-bold text-steamboat-darkBlue">Summer Hours</p>
                <p className="text-steamboat-gray">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
