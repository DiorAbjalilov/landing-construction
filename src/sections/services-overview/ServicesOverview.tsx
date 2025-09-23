import Image from "next/image";

export default function ServicesOverview() {
  const services = [
    {
      id: 1,
      title: "Roof & Renovation Repairs",
      description:
        "Expert one-time roof fixes and full renovations for homes and apartments in Los Angeles.",
      image: "/logos/servise-logos/download.png",
    },
    {
      id: 2,
      title: "Home Renovation Services",
      description:
        "Comprehensive renovation solutions for any property type in LA.",
      image: "/logos/servise-logos/download (1).png",
    },
    {
      id: 3,
      title: "Multi-Family Maintenance",
      description:
        "Ongoing service contracts for 3-50 unit multi-family buildings in Los Angeles.",
      image: "/logos/servise-logos/download (2).png",
    },
    {
      id: 4,
      title: "Building Upkeep Solutions",
      description:
        "Proactive maintenance and emergency repairs for multi-family properties.",
      image: "/logos/servise-logos/download (3).png",
    },
    {
      id: 5,
      title: "Turnkey Rental Acquisitions",
      description:
        "Services to find and purchase ready-to-rent multi-family homes (3-6 units) in LA.",
      image: "/logos/servise-logos/download (4).png",
    },
    {
      id: 6,
      title: "Rental Business Support",
      description:
        "Expert guidance on CAP rate analysis and deal support for rental investments.",
      image: "/logos/servise-logos/download (5).png",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.id} className="text-center">
              {/* Hexagon Icon */}
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div
                  className="w-20 h-20 bg-orange-100 flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
