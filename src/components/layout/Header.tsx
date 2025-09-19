import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white h-20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="/logos/logo.png"
              alt="FreeBuild Logo"
              width={120}
              height={32}
              className="h-9 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-10">
            <span className="text-blue-900 hover:text-orange-500 transition-colors cursor-pointer">
              Home
            </span>
            <span className="text-blue-900 hover:text-orange-500 transition-colors cursor-pointer">
              About
            </span>
            <span className="text-blue-900 hover:text-orange-500 transition-colors cursor-pointer">
              Services
            </span>
            <span className="text-blue-900 hover:text-orange-500 transition-colors cursor-pointer">
              All Project
            </span>
            <span className="text-blue-900 hover:text-orange-500 transition-colors cursor-pointer">
              News
            </span>
            <span className="text-blue-900 hover:text-orange-500 transition-colors cursor-pointer">
              Contact
            </span>
            <span className="text-blue-900 hover:text-orange-500 transition-colors cursor-pointer">
              Pages
            </span>
          </nav>

          <div className="md:hidden">
            <div className="flex space-x-4 text-sm">
              <span className="text-blue-900 hover:text-orange-500 transition-colors cursor-pointer">
                Home
              </span>
              <span className="text-blue-900 hover:text-orange-500 transition-colors cursor-pointer">
                About
              </span>
              <span className="text-orange-500 font-bold">Services</span>
              <span className="text-blue-900 hover:text-orange-500 transition-colors cursor-pointer">
                News
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
