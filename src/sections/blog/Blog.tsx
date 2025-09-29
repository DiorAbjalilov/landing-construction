"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Top Renovation Trends in Los Angeles for 2025",
      category: "Renovation & Design",
      date: "19 Oct",
      excerpt:
        "Discover the latest renovation trends shaping LA properties, from modern kitchen upgrades to eco-friendly roofing solutions. Our expert team highlights how these updates boost property value and appeal for multi-family units.",
      image: "/assets/blog-1.png",
    },
    {
      id: 2,
      title: "Maintaining Multi-Family Buildings in LA",
      category: "Property Maintenance",
      date: "19 Oct",
      excerpt:
        "Learn essential maintenance tips for 3-50 unit buildings in Los Angeles. We cover preventive strategies and emergency repairs to ensure your investment remains profitable and tenant-friendly.",
      image: "/assets/blog-2.png",
    },
    {
      id: 3,
      title: "Investing in Turnkey Rental Properties",
      category: "Rental Investments",
      date: "19 Oct",
      excerpt:
        "Explore the benefits of acquiring 3-6 unit rental properties in LA. Get insights on CAP rate analysis and seamless acquisition processes to grow your rental portfolio with minimal hassle.",
      image: "/assets/blog-3.png",
    },
    {
      id: 4,
      title: "Renovation Tips for LA Homeowners",
      category: "Renovation & Design",
      date: "19 Oct",
      excerpt:
        "Unlock practical advice for renovating homes and apartments in Los Angeles. From electrical upgrades to plumbing fixes, our experts share how to enhance your property efficiently.",
      image: "/assets/blog-4.png",
    },
    {
      id: 5,
      title: "Why Choose Professional Property Management in LA",
      category: "Property Maintenance",
      date: "19 Oct",
      excerpt:
        "Understand the advantages of hiring experts for tenant screening, lease management, and rent collection in Los Angeles’ multi-family market. Keep your properties thriving with ease.",
      image: "/assets/blog-5.png",
    },
    {
      id: 6,
      title: "Growing Your Rental Business in LA",
      category: "Rental Investments",
      date: "19 Oct",
      excerpt:
        "Learn strategies to expand your rental portfolio with 3-6 unit properties in Los Angeles. We dive into market trends and acquisition support for successful investments.",
      image: "/assets/blog-6.png",
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
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="w-full flex-shrink-0 px-2 lg:w-1/3 lg:px-4">
                  <article className="shadow-lg rounded-lg hover:shadow-xl overflow-hidden transition-shadow bg-white border-b border-gray-200 h-full flex flex-col">
                    {/* Post Image */}
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={400}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                      />

                      {/* Date Badge */}
                      <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-sm">
                        <div className="font-bold">19</div>
                        <div className="text-xs">Oct</div>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">
                        {post.category}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 hover:text-orange-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2 sm:mb-4 flex-1">
                        {post.excerpt}
                      </p>
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
