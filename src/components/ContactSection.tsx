
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or ready to reserve your equipment? Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2">
          <div className="rounded-lg overflow-hidden h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7806208850647!2d-106.83001152424245!3d40.630969871653666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87427081f1fc7799%3A0x287da8d07c7fb28!2sSteamboat%20Springs%2C%20CO%2080487!5e0!3m2!1sen!2sus!4v1713841235880!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Steamboat Ski & Bike Map"
            ></iframe>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-steamboat-blue">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-steamboat-darkBlue">Location</h3>
                  <p className="mt-1 text-steamboat-gray">
                    442 Lincoln Avenue
                    <br />
                    Steamboat Springs, CO 80487
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-steamboat-blue">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-steamboat-darkBlue">Phone</h3>
                  <p className="mt-1 text-steamboat-gray">(970) 879-8428</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-steamboat-blue">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-steamboat-darkBlue">Email</h3>
                  <p className="mt-1 text-steamboat-gray">info@steamboatskiandbike.com</p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-steamboat-darkBlue">Hours</h3>
                <div className="grid grid-cols-1 gap-2 mt-3 sm:grid-cols-2">
                  <div>
                    <span className="font-medium">Winter Season:</span>
                    <p className="text-steamboat-gray">8am - 6pm Daily</p>
                  </div>
                  <div>
                    <span className="font-medium">Summer Season:</span>
                    <p className="text-steamboat-gray">9am - 5pm Daily</p>
                  </div>
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
