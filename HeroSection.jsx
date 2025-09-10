import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/assets/slider_full1.jpg",
    title: "INCREASE WEB SEARCH PRESENCE",
    subtitle: "HELLO, ARE YOU READY TO START ?",
  },
  {
    image: "/assets/slider_full2.jpg",
    title: "BRILLIANT SMART & BIG WEBSITE",
    subtitle: "HELLO, ARE YOU READY TO START ?",
  },
  {
    image: "/assets/slider_full3.jpg",
    title: "WELCOME TO BEST SEO COMPANY",
    subtitle: "HELLO, ARE YOU READY TO START ?",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-130 bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl">
          {slides[current].title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-orange-400">
          {slides[current].subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm md:text-base px-6 py-3">
            WATCH VIDEOS
          </button>
          <button className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm md:text-base px-6 py-3">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/40 p-3 rounded-full z-20"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/40 p-3 rounded-full z-20"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
