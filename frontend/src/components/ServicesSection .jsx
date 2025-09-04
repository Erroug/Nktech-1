import React from "react";
import iphone from "../assets/iphone-toolbox.jpg";
import { HiCheck, HiArrowCircleRight } from "react-icons/hi";

const ServicesSection = () => {
  const cards = [
    { title: "SEO Services", description: "SEO Services ,Get unlimited suggestions of keywords and phrases related to your business." },
    { title: "ORM Services", description: "Our ORM (Online reputation management) Services includes Social Media reviews management, Google reviews." },
    { title: "Social Media Marketing", description: "SMM (Social Media Marketing) services include Social Account promotion ie Facebook page likes, Post promotion." },
    { title: "SEM Services", description: "SEM (Search engine marketing) include Google Adwords, Display advertising, Follow up marketing." },
    { title: "Social Media Services", description: "Our social media management services include Social account management, Post writing & designing, Blog writing." },
    { title: "Media Buying", description: "We are associated with many Online news websites and Popular Blogs, Where we can promote our client’s Services." },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-500 px-4 sm:px-8 py-12">
      <style>{`
        .zoom-hover:hover { animation: zoomInOut 0.8s infinite; }
        @keyframes zoomInOut {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>

      {/* Content wrapper */}
      <div className="relative flex flex-col items-center">
        {/* Top grid: cards + phone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* Left cards */}
          <div className="flex flex-col text-right items-end space-y-6 order-2 md:order-1">
            {cards.slice(0, 3).map((card, index) => (
              <div key={index} className="p-4 w-full sm:w-64">
                <h3 className="text-lg text-[#294A63] font-bold mb-2">{card.title}</h3>
                <p className="text-white mb-4 text-sm sm:text-base">{card.description}</p>
                <button
                  className="border-[2.5px] rounded-full bg-transparent text-[#294A63] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 zoom-hover hover:text-white"
                >
                  <HiCheck className="w-7 h-7 sm:w-8 sm:h-8" />
                </button>
              </div>
            ))}
          </div>

          {/* Center phone */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={iphone}
              alt="Center"
              className="border-4 border-white w-44 sm:w-56 md:w-72 lg:w-80"
            />
          </div>

          {/* Right cards */}
          <div className="flex flex-col items-start space-y-6 order-3">
            {cards.slice(3, 6).map((card, index) => (
              <div key={index} className="p-4 w-full sm:w-64">
                <h3 className="text-lg text-[#294A63] font-bold mb-2">{card.title}</h3>
                <p className="text-white mb-4 text-sm sm:text-base">{card.description}</p>
                <button
                  className="border-[2.5px] rounded-full bg-transparent text-[#294A63] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 zoom-hover hover:text-white"
                >
                  <HiCheck className="w-7 h-7 sm:w-8 sm:h-8" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons below phone */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="/learn-more"
            className="bg-[#294A63] text-white px-6 py-2 shadow-md flex items-center gap-2 text-sm sm:text-base hover:bg-[#1f3a4d] transition"
          >
            LEARN MORE <HiArrowCircleRight className="w-5 h-5" />
          </a>
          <a
            href="/get-a-quote"
            className="bg-[#294A63] text-white px-6 py-2 shadow-md flex items-center gap-2 text-sm sm:text-base hover:bg-[#1f3a4d] transition"
          >
            GET A QUOTE <HiArrowCircleRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
