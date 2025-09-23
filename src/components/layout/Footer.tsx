import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Main Footer */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Your Trusted Partner for Renovation and Property Solutions in
                Los Angeles
              </p>
            </div>
            {/* Opening Days */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Opening Days
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 text-sm">
                    Monday - Friday: 9am to 20 pm
                  </p>
                  <p className="text-gray-300 text-sm">
                    Saturday: 9am to 17 pm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
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
                  <p className="text-gray-300 font-medium">
                    Call Us : +123 456 789
                  </p>
                  <p className="text-gray-300 text-sm">
                    Email Us At : hammer@gmail.com
                  </p>
                </div>
              </div>

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
                  <p className="text-gray-300 font-medium">
                    Address: 1234 Renovation Lane, Los Angeles, CA 90001
                  </p>
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
            <p className="text-gray-300 text-sm">Copyright ©2025 </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
