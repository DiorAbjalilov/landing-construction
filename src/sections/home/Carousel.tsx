"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const slides = [
  {
    id: 1,
    bg: "/logos/134421_5ae2b54d724e4bb8b02be1dc17b0.jpg",
    title: "Dream House",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dicta sapiente, quo in minus nostrum praesentium quidem.",
    person: "/logos/man.db64c1ff.png",
  },
  {
    id: 2,
    bg: "/logos/bg2.jpg",
    title: "Dream House",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dicta sapiente, quo in minus nostrum praesentium quidem.",
    person: "/logos/man.db64c1ff.png",
  },
  {
    id: 3,
    bg: "/logos/bg3.jpg",
    title: "Dream House",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dicta sapiente, quo in minus nostrum praesentium quidem.",
    person: "/logos/man.db64c1ff.png",
  },
];

export default function Carousel() {
  return (
    <section className="relative overflow-hidden">
      <Swiper spaceBetween={0} slidesPerView={1} loop={true}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[700px]">
              <Image
                src={slide.bg}
                alt="Background"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 text-white">
                    <div className="text-sm uppercase tracking-wider">
                      WE MAKE
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg leading-relaxed">{slide.desc}</p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-colors cursor-pointer">
                      Get details
                    </button>
                  </div>

                  <div className="relative">
                    <div className="w-full h-96 lg:h-[500px] overflow-hidden flex items-center justify-center">
                      <Image
                        src={slide.person}
                        alt="Construction Worker"
                        width={500}
                        height={500}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
