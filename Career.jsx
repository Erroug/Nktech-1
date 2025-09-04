import React from "react";

const Career = () => {
  return (
    <div className="bg-[#294A63] text-white px-6 md:px-16 lg:px-24 py-12 flex flex-col md:flex-row justify-between items-center rounded-md shadow-md gap-6 md:gap-0">
      
      {/* Left Section: Text */}
      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Career With Us
        </h2>
        <h3 className="text-base sm:text-lg md:text-xl font-medium">
          Join the Best SEO Team.
        </h3>
      </div>

      {/* Right Section: Button */}
      <button className="border-2 border-white text-white font-bold px-8 sm:px-12 md:px-20 lg:px-28 py-2 rounded hover:bg-gray-100 hover:text-[#294A63] transition whitespace-nowrap">
        Click Here
      </button>
    </div>
  );
};

export default Career;
