import Image from "next/image";

export default function ServicesOverview() {
  const services = [
    {
      id: 1,
      title: "Design build",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia",
      image: "/logos/servise-logos/download.png",
    },
    {
      id: 2,
      title: "General Construction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia",
      image: "/logos/servise-logos/download (1).png",
    },
    {
      id: 3,
      title: "Floors & Roofs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia",
      image: "/logos/servise-logos/download (2).png",
    },
    {
      id: 4,
      title: "Building Construction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia",
      image: "/logos/servise-logos/download (3).png",
    },
    {
      id: 5,
      title: "Rooms & Halls",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia",
      image: "/logos/servise-logos/download (4).png",
    },
    {
      id: 6,
      title: "Architecture Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia",
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
                  }}>
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
