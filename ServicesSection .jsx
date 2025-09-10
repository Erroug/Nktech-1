import React from "react";
import { HiCheck } from "react-icons/hi";

export default function ServicesShowcase() {
  const servicesLeft = [
    { title: "SEO Services", desc: "SEO Services, Get unlimited suggestions of keywords and phrases related to your business." },
    { title: "ORM Services", desc: "Our ORM (Online reputation management) services include Social Media reviews management, Google reviews." },
    { title: "Social Media Marketing", desc: "SMM (Social Media Marketing) services include Social Account promotion i.e. Facebook page likes, Post promotion." },
  ];

  const servicesRight = [
    { title: "SEM Services", desc: "SEM (Search engine marketing) includes Google Adwords, Display advertising, Follow up marketing." },
    { title: "Social Media Services", desc: "Our social media management services include Social account management, Post writing & designing, Blog writing." },
    { title: "Media Buying", desc: "We are associated with many online news websites and popular blogs, where we can promote our client’s services." },
  ];

  return (
    <>
      {/* Desktop & Tablet Layout */}
      <section className="hidden sm:flex bg-orange-500 text-gray-900 py-20 sm:py-28 px-2 sm:px-6 min-h-[500px] sm:min-h-[600px] items-center relative">
        {/* Hover Animation */}
        <style>{`
          .zoom-hover:hover { 
            animation: zoomInOut 0.8s infinite; 
          }
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto grid grid-cols-3 items-stretch gap-8 sm:gap-12 w-full">
          {/* Left Services */}
          <div className="space-y-10 text-right flex flex-col justify-center">
            {servicesLeft.map((service, i) => (
              <div key={i} className="p-2 sm:p-4">
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-[#294A63] flex items-center justify-end gap-3">
                  {service.title}
                  <span className="border-[2.5px] rounded-full text-[#294A63] w-9 h-9 flex items-center justify-center transition-transform duration-300 hover:text-white zoom-hover">
                    <HiCheck className="w-6 h-6" />
                  </span>
                </h3>
                <p className="mt-4 text-white text-base max-w-xs ml-auto">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Middle Image + Buttons */}
          <div className="relative flex items-center justify-center">
            <img
              src="/assets/iphone-toolbox.jpg"
              alt="ToolsBox"
              className="w-44 md:w-56 lg:w-64 border-4 border-white rounded-lg shadow-lg"
            />
            <div className="absolute bottom-[-80px] flex gap-6">
              <button className="bg-blue-900 text-white px-7 py-4 rounded-md font-medium hover:bg-blue-800 transition text-base">
                LEARN MORE ➜
              </button>
              <button className="bg-blue-900 text-white px-7 py-4 rounded-md font-medium hover:bg-blue-800 transition text-base">
                GET A QUOTE ➜
              </button>
            </div>
          </div>

          {/* Right Services */}
          <div className="space-y-10 text-left flex flex-col justify-center">
            {servicesRight.map((service, i) => (
              <div key={i} className="p-2 sm:p-4">
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-[#294A63] flex items-center justify-start gap-3">
                  <span className="border-[2.5px] rounded-full text-[#294A63] w-9 h-9 flex items-center justify-center transition-transform duration-300 hover:text-white zoom-hover">
                    <HiCheck className="w-6 h-6" />
                  </span>
                  {service.title}
                </h3>
                <p className="mt-4 text-white text-base max-w-xs mr-auto">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="block sm:hidden bg-orange-500 text-gray-900 py-10 px-4 min-h-[550px] flex items-center relative">
        <div className="grid grid-cols-3 gap-4 w-full items-center justify-items-center">
          {/* Left */}
          <div className="space-y-6 text-right flex flex-col justify-center">
            {servicesLeft.map((service, i) => (
              <div key={i} className="p-2">
                <h3 className="text-sm font-bold text-[#294A63] flex items-center justify-end gap-2">
                  {service.title}
                  <span className="border-2 rounded-full text-[#294A63] w-7 h-7 flex items-center justify-center bg-white">
                    <HiCheck className="w-4 h-4" />
                  </span>
                </h3>
                <p className="mt-2 text-white text-xs max-w-[160px] ml-auto">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Middle */}
          <div className="relative flex items-center justify-center col-span-1">
            <img
              src="/assets/iphone-toolbox.jpg"
              alt="ToolsBox"
              className="w-24 border-2 border-white rounded-lg shadow-lg"
            />
            <div className="absolute bottom-[-60px] flex flex-col gap-3">
              {/* Mobile button color fallback */}
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-xs hover:bg-blue-600">
                LEARN MORE ➜
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-xs hover:bg-blue-600">
                GET A QUOTE ➜
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 text-left flex flex-col justify-center">
            {servicesRight.map((service, i) => (
              <div key={i} className="p-2">
                <h3 className="text-sm font-bold text-[#294A63] flex items-center justify-start gap-2">
                  <span className="border-2 rounded-full text-[#294A63] w-7 h-7 flex items-center justify-center bg-white">
                    <HiCheck className="w-4 h-4" />
                  </span>
                  {service.title}
                </h3>
                <p className="mt-2 text-white text-xs max-w-[160px] mr-auto">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
