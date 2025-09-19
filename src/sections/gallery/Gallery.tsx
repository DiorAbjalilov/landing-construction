import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: "/logos/gallery-logo/image-20250108164230-3.jpeg",
      alt: "Modern Building Architecture",
    },
    {
      id: 2,
      src: "/logos/gallery-logo/photo_2022-08-31_18-20-55.jpg",
      alt: "Interior Design Space",
    },
    {
      id: 3,
      src: "/logos/gallery-logo/qur4-wECmTZ--.jpg",
      alt: "Contemporary Architecture",
    },
    {
      id: 4,
      src: "/logos/gallery-logo/qur4-wECmTZ--.jpg",
      alt: "Contemporary Architecture",
    },
    {
      id: 5,
      src: "/logos/gallery-logo/image-20250108164230-3.jpeg",
      alt: "Modern Building Architecture",
    },
  ];

  return (
    <section className="bg-white">
      <div className="w-full mx-auto ">
        {/* Scroll container */}
        <div className="flex overflow-x-auto scrollbar-hide">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden flex-shrink-0 w-[33.33%] min-w-[33.33%]">
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-orange-600 text-white p-8 flex flex-col justify-between transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Working in new case
                  </h3>
                  <p className="text-sm mb-6">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-10 border-b border-white"></span>
                    Building
                  </div>
                </div>
                <div className="flex items-center gap-2 font-semibold uppercase text-sm">
                  Read More
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
