import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "One-time Jobs — Renovation & Remodeling",
      description:
        "Full renovations of apartments, houses, roofing, electrical, plumbing.",
      image: "/assets/card1-min.webp",
    },
    {
      id: 2,
      title: "Ongoing Service — Multi-family Maintenance",
      description:
        "Service contracts for 3-50 unit buildings, inspections, repairs.",
      image: "/assets/card2-min.webp",
    },
    {
      id: 3,
      title: "Buy & Find — Ready Rental Business (3-6 Units)",
      description:
        "Search for multi-family homes, CAP rate analysis, deal support.",
      image: "/assets/card3-min.webp",
    },
    {
      id: 4,
      title: "Property Management",
      description:
        "Tenant screening, lease management, maintenance, rent collection.",
      image: "/assets/card4-min.webp",
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            One-time Jobs — Renovation & Remodeling
          </h2>
          {/* <p className="text-xl text-orange-500 font-medium">
            services, digital storytelling.
          </p> */}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="text-center group">
              {/* Service Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        {/* <div className="text-center space-x-4">
          <button className="bg-orange-500 hover:bg-blue-900 text-white px-8 py-3 font-medium transition-colors cursor-pointer border-2 border-transparent">
            All Services
          </button>
          <button className="border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-500 text-gray-700 hover:text-gray-100 px-8 py-3 font-medium transition-colors cursor-pointer">
            Contact us now
          </button>
        </div> */}
      </div>
    </section>
  );
}
