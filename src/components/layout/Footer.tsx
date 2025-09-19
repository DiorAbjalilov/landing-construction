import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Contact Section */}
      <div className="bg-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 overflow-hidden">
                <Image
                  src="/logos/footer-logos/download.png"
                  alt="Phone"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">Call Us : +123 456 789</p>
                <p className="text-white text-sm">
                  Email Us At : hammer@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12  overflow-hidden">
                <Image
                  src="/logos/footer-logos/download (1).png"
                  alt="House"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">
                  Hemmer Builder, Downtown, Victoria, Australia
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 overflow-hidden">
                <Image
                  src="/logos/footer-logos/download (2).png"
                  alt="Social Media"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium mb-2">Follow Us</p>
                <div className="flex space-x-2">
                  <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">f</span>
                  </span>
                  <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </span>
                  <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">in</span>
                  </span>
                  <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Subscribe In Our Newsletter"
                  className="w-full px-4 py-2 bg-blue-800 text-white placeholder-gray-400 rounded border border-blue-700 focus:outline-none focus:border-orange-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center space-x-2 transition-colors cursor-pointer">
                  <span>Subscribe</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Opening Days */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-white font-medium mb-1">Opening Days:</p>
                  <p className="text-gray-300 text-sm">
                    Monday - Friday: 9am to 20 pm
                  </p>
                  <p className="text-gray-300 text-sm">
                    Saturday: 9am to 17 pm
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Vacations:</p>
                  <p className="text-gray-300 text-sm">All Sunday Days</p>
                  <p className="text-gray-300 text-sm">All Official Holidays</p>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Useful Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
                    All properties
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
                    FAQ&apos;S
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
                    Terms & Conditions
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
                    Sign up
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
                    Articles
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
                    Popular tags
                  </span>
                </li>
              </ul>
            </div>

            {/* Our News */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Our News</h3>
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <div className="w-16 h-16 bg-gray-600 rounded flex-shrink-0">
                    <Image
                      src="/logos/footer-logos/download (3).png"
                      alt="News 1"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">
                      We Build Your Best Home With Our Best
                    </h4>
                    <p className="text-gray-400 text-xs">On: Feb 12, 2015</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="w-16 h-16 bg-gray-600 rounded flex-shrink-0">
                    <Image
                      src="/logos/footer-logos/download (4).png"
                      alt="News 2"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">
                      The Good Plan for Design To Build Your House
                    </h4>
                    <p className="text-gray-400 text-xs">On: Feb 12, 2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-900 border-t border-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-300 text-sm">
              Copyright ©2019 Mugli. All Rights Reserved
            </p>
            <div className="flex space-x-4 text-sm">
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Disclaimer
              </span>
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Privacy
              </span>
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Advertisement
              </span>
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Contact us
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
