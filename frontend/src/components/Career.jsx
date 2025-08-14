import React from "react";

const Career = () => {
  return (
    <div className="bg-[#294A63] text-white px-50 py-16 flex justify-between items-center rounded-md shadow-md">

  <div className="flex flex-col justify-center">
    <h2 className="text-4xl font-bold mb-2">Career With Us</h2>
    <h3 className="text-lg font-medium">
      Join the Best SEO Team.
    </h3>
  </div>

  {/* Right Section: Button */}
  <button className="border-2 border-white text-white font-bold px-28 py-2 rounded hover:bg-gray-100 hover:text-[#294A63] hover:cursor-pointer transition whitespace-nowrap">
    Click Here
  </button>
</div>

  );
};

export default Career;
