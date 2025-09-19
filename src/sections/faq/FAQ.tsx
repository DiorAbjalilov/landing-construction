"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      id: 0,
      question: "Why We Best?",
      answer:
        "There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique.",
    },
    {
      id: 1,
      question: "Feature With Great Service",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    },
    {
      id: 2,
      question: "Great Question for our customer",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    },
  ];

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      // agar ochilgan bo‘lsa yopamiz
      setOpenItems(openItems.filter((itemId) => itemId !== id));
    } else {
      // agar yopiq bo‘lsa ochamiz (arrayga qo‘shamiz)
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - House image */}
          <div className="relative">
            <Image
              src="/logos/fq-ask.251b1623.jpg"
              alt="Modern House Design"
              width={600}
              height={500}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Right side - FAQ */}
          <div className="space-y-6">
            <div className="text-sm text-gray-500 uppercase tracking-wider">
              SOME FAQ&apos;S
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
              Fequality Ask Question
            </h2>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full px-6 py-4 text-left font-medium flex justify-between items-center transition-colors cursor-pointer ${
                      openItems.includes(item.id)
                        ? "bg-blue-900 hover:bg-blue-800 text-white"
                        : "bg-orange-500 hover:bg-blue-900 text-white"
                    }`}>
                    <span>{item.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        openItems.includes(item.id) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {openItems.includes(item.id) && (
                    <div className="px-6 py-4 bg-white">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
