"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const slides = [
  {
    id: 1,
    bg: "/logos/134421_5ae2b54d724e4bb8b02be1dc17b0.jpg",
    title: "Reliable Renovation & Property Management in Los Angeles",
    desc: "Expert full-scale renovations, ongoing maintenance for multi-family buildings, and seamless acquisition of turnkey rental properties (3-6 units). Fast, transparent, and hassle-free services tailored for your success.",
    person: "/logos/man.db64c1ff.png",
  },
  {
    id: 2,
    bg: "/assets/bg2.jpg",
    title: "Reliable Ongoing Service for Multi-Family Buildings",
    desc: "Secure long-term contracts for maintenance, repairs, and management of your multi-family properties. Enjoy peace of mind with our proactive, transparent approach to keeping your investments running smoothly.",
    person: "",
  },
  {
    id: 3,
    bg: "/assets/bg3.jpg",
    title: "Expert One-Time Renovations in Los Angeles",
    desc: "From roof repairs to full home makeovers, we handle any renovation project with precision and quality. Transform your property efficiently and affordably – no job is too big or small.",
    person: "",
  },
];

export default function Carousel() {
  return (
    <section className="relative overflow-hidden">
      <Swiper spaceBetween={0} slidesPerView={1} loop={true} className="w-full">
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
              <Image
                src={slide.bg}
                alt="Background"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
                  <div className="space-y-4 sm:space-y-6 text-white">
                    <div className="text-sm sm:text-base uppercase tracking-wider">
                      WE MAKE
                    </div>
                    <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base lg:text-xl leading-relaxed">
                      {slide.desc}
                    </p>
                    {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-4 rounded-lg font-medium transition-colors cursor-pointer">
                      Get details
                    </button> */}
                  </div>

                  {index === 0 && slide.person && (
                    <div className="relative hidden sm:block">
                      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center">
                        <Image
                          src={slide.person}
                          alt="Construction Worker"
                          width={500}
                          height={500}
                          className="w-full h-full object-contain translate-y-4 sm:translate-y-10"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
