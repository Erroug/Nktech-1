import React from "react";
const logo = "/assets/nktech-logo.jpg";
const PopularSearches = () => {
  const searches = [
    { text: "Best SEO company in Delhi NCR", size: "text-3xl font-bold" },
    { text: "Best SEO company in Delhi NCR", size: "text-2xl font-bold" },
    { text: "Best SEO company in Delhi NCR", size: "text-xlg font-bold" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          <h2 className="text-2xl font-semibold">Popular Searches</h2>
        </div>
        {/* Header */}
        <div className="w-[75%] bg-gray-300 px-8 py-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Popular Searches
          </h2>
        </div>

        {/* Search Items */}
        <div className="flex flex-col gap-2 mt-6 pr-175 items-start">
          {searches.map((item, index) => (
            <p key={index} className={`${item.size} text-[#294A63]`}>
              {item.text}
            </p>
          ))}
        </div>

        {/* Logo */}
        <div className="mt-6">
          <img
            src={logo} // Replace with your logo
            alt="Logo"
            className="mx-auto w-70 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
