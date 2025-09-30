import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: "/assets/build-1.jpg",
      alt: "Modern Multi-Family Building – A stunning example of our renovation expertise in LA.",
    },
    {
      id: 2,
      src: "/assets/build1.webp",
      alt: "Contemporary Home Design – Tailored architectural solutions for your property.",
    },
    {
      id: 3,
      src: "/assets/build2.webp",
      alt: "Sleek Interior Space – Transformative design for multi-unit residences.",
    },
    {
      id: 4,
      src: "/assets/build3.png",
      alt: "Elegant Rental Property – Ready-to-rent 3-6 unit acquisition showcase.",
    },
    {
      id: 5,
      src: "/assets/build.webp",
      alt: "Innovative Building Structure – Cutting-edge construction in Los Angeles.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="w-full mx-auto">
        {/* Scroll container */}
        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden flex-shrink-0 w-full sm:w-[50%] md:w-[33.33%] min-w-[100%] sm:min-w-[50%] md:min-w-[33.33%] snap-center">
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-orange-600 text-white p-4 sm:p-6 flex flex-col justify-between transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                    Working in new case
                  </h3>
                  <p className="text-xs sm:text-sm mb-2 sm:mb-4">{image.alt}</p>
                  <div className="flex items-center gap-1 sm:gap-2 font-medium">
                    <span className="w-6 sm:w-10 border-b border-white"></span>
                    Building
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
