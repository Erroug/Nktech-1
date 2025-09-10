import React from "react";
import logo from "/assets/Bizwoke.jpg";

const PopularSearches = () => {
  const searches = [
    { text: "Best SEO company in Delhi NCR", size: "text-3xl md:text-4xl font-bold" },
    { text: "Top SEO services in Delhi NCR", size: "text-2xl md:text-3xl font-semibold" },
    { text: "Affordable SEO agency in Delhi", size: "text-xl md:text-2xl font-medium" },
  ];

  return (
    <section className="w-full flex flex-col items-center py-8 bg-white px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="w-full max-w-4xl bg-gray-200 px-6 py-3 rounded-md shadow-sm">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          Popular Searches
        </h2>
      </div>

      {/* Search Items */}
      <div className="flex flex-col gap-3 mt-6 w-full max-w-4xl">
        {searches.map((item, index) => (
          <p
            key={index}
            className={`${item.size} text-[#294A63] leading-snug ${
              index === searches.length - 1 ? "mb-10" : ""
            }`}
          >
            {item.text}
          </p>
        ))}
      </div>

      {/* Logo */}
      <div className="mt-10">
        <img
          src={logo}
          alt="Logo"
          className="mx-auto w-64 sm:w-80 md:w-[28rem] lg:w-[32rem] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default PopularSearches;
