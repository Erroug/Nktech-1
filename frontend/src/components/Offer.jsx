import React from "react";

const Offer = () => {
  return (
    <div className="bg-[#294A63] text-white px-6 md:px-12 lg:px-20 py-10 md:py-16 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 rounded-md shadow-md">
      
      {/* Left Section: Text */}
      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Best SEO company in Delhi NCR
        </h2>
        <h3 className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
          Want to know about our Guaranteed ranking program, which makes us the
          Best SEO company in <br className="hidden md:block" /> Delhi NCR?
        </h3>
      </div>

      {/* Right Section: Button */}
      <button className="border-2 border-white text-white font-bold px-8 sm:px-16 lg:px-28 py-2 rounded hover:bg-gray-100 hover:text-[#294A63] transition whitespace-nowrap">
        Get Offer
      </button>
    </div>
  );
};

export default Offer;
