"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Design to next level",
      category: "STAFFSTARTUPWORK",
      date: "19 Oct",
      excerpt:
        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      image:
        "/logos/blog-logos/00000000000000000000000000000000000000000000000000000032123132as1d654as65d4a6s54.jpg",
    },
    {
      id: 2,
      title: "Design to next level",
      category: "STAFFSTARTUPWORK",
      date: "19 Oct",
      excerpt:
        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      image: "/logos/blog-logos/190120234.jpg",
    },
    {
      id: 3,
      title: "Design to next level",
      category: "STAFFSTARTUPWORK",
      date: "19 Oct",
      excerpt:
        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      image: "/logos/blog-logos/342c3cde973f63a90b18a2979d327100_cleanup.jpg",
    },
    {
      id: 4,
      title: "Design to next level",
      category: "STAFFSTARTUPWORK",
      date: "19 Oct",
      excerpt:
        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      image: "/logos/blog-logos/190120234.jpg",
    },
    {
      id: 5,
      title: "Design to next level",
      category: "STAFFSTARTUPWORK",
      date: "19 Oct",
      excerpt:
        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      image:
        "/logos/blog-logos/00000000000000000000000000000000000000000000000000000032123132as1d654as65d4a6s54.jpg",
    },
    {
      id: 6,
      title: "Design to next level",
      category: "STAFFSTARTUPWORK",
      date: "19 Oct",
      excerpt:
        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      image: "/logos/blog-logos/342c3cde973f63a90b18a2979d327100_cleanup.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev + 1;
      if (newSlide >= blogPosts.length) {
        return 0;
      }
      return newSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev - 1;
      if (newSlide < 0) {
        return blogPosts.length - 1;
      }
      return newSlide;
    });
  };

  return (
    <section id="news" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            BLOG UPDATES
          </div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
              News & Blogs
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Blog Carousel */}
        <div className="relative">
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}>
              {blogPosts.map((post) => (
                <div key={post.id} className="w-1/3 flex-shrink-0 px-4">
                  <article className="shadow-lg rounded-lg hover:shadow-2xl transition-shadow bg-white border-b border-gray-200">
                    {/* Post Image */}
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />

                      {/* Date Badge */}
                      <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-2 rounded">
                        <div className="text-lg font-bold">19</div>
                        <div className="text-xs">Oct</div>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                        {post.category}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3 hover:text-orange-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-blue-900 hover:text-orange-500 font-medium transition-colors cursor-pointer">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        READ MORE
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
