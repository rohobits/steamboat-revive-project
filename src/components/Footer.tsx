
const Footer = () => {
  return (
    <footer className="bg-steamboat-darkBlue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">Steamboat</span>
              <span className="text-2xl font-bold text-steamboat-red">Ski&Bike</span>
            </div>
            <p className="text-gray-300">
              Premium ski and bike rentals in the heart of Steamboat Springs, Colorado. Experience the best equipment and service for your mountain adventures.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#ski" className="text-gray-300 hover:text-white transition-colors duration-300">Ski Rentals</a>
              </li>
              <li>
                <a href="#bike" className="text-gray-300 hover:text-white transition-colors duration-300">Bike Rentals</a>
              </li>
              <li>
                <a href="/bike-service" className="text-gray-300 hover:text-white transition-colors duration-300">Bike Service</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">442 Lincoln Avenue</li>
              <li className="text-gray-300">Steamboat Springs, CO 80487</li>
              <li className="text-gray-300">(970) 879-8428</li>
              <li className="text-gray-300">info@steamboatskiandbike.com</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Hours</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium text-white">Winter Season:</span>
                <br />
                8am - 6pm Daily
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-white">Summer Season:</span>
                <br />
                9am - 5pm Daily
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Steamboat Ski & Bike. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
