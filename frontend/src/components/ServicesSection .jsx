import React from "react";
import iphone from "../assets/iphone-toolbox.jpg";
import { HiCheck } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";

const ServicesSection = () => {
  const cards = [
    {
      title: "SEO Services",
      description:
        "SEO Services ,Get unlimited suggestions of keywords and phrases related to your business.",
    },
    {
      title: "ORM Services",
      description:
        "Our ORM (Online reputation management) Services includes Social Media reviews management, Google reviews.",
    },
    {
      title: "Social Media Marketing",
      description:
        "SMM (Social Media Marketing) services include Social Account promotion ie Facebook page likes, Post promotion.",
    },
    {
      title: "SEM Services",
      description:
        "SEM (Search engine marketing) include Google Adwords, Display advertising, Follow up marketing.",
    },
    {
      title: "Social Media Services",
      description:
        "Our social media management services include Social account management, Post writing & designing, Blog writing.",
    },
    {
      title: "Media Buying",
      description:
        "We are associated with many Online news websites and Popular Blogs, Where we can promote our client’s Services.",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-500 relative">
      {/* Custom animation for check button */}
      <style>{`
        .check-btn:hover { animation: pulseScale 800ms infinite; }
        @keyframes pulseScale {
          0% { transform: scale(1); }
          50% { transform: scale(1.18); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* Buttons behind the image */}
      <div className="absolute z-0 flex mt-160 justify-between items-center w-[400px]">
        <button className="bg-[#294A63] text-right text-white px-4 py-2  shadow-md flex items-center gap-2">
          LEARN MORE
          <span className="">
            <HiArrowCircleRight className="w-5 h-5" />
          </span>
        </button>

        <button className="bg-[#294A63] text-white px-4 py-2  shadow-md flex items-center gap-2">
          GET A QUOTE
          <span className="">
            <HiArrowCircleRight className="w-5 h-5" />
          </span>
        </button>
      </div>

      {/* Center Image */}
      <div className="absolute z-10">
        <img src={iphone} alt="Center" className=" border-4 border-white" />
      </div>

      {/* Cards container */}
      <div className="grid grid-cols-2 mt-6 gap-x-100 gap-y-6">
        <div className="flex flex-col text-right items-end space-y-6">
          {cards.slice(0, 3).map((card, index) => (
            <div key={index} className=" p-4  w-64">
              <h3 className="text-lg text-[#294A63] font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-white  mb-4">{card.description}</p>
              <button className="">
                {/* Check icon */}
                <style>
                  {`
    @keyframes zoomInOut {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    .zoom-hover:hover {
      animation: zoomInOut 0.8s infinite;
    }
  `}
                </style>

                <button
                  className="
                           bord
                            border-[2.5px]
                            rounded-full
                            bg-transparent
                            text-[#294A63]
                            w-10
                            h-10
                            flex
                            items-center
                            justify-center
                            transition-transform
                            duration-300
                            zoom-hover
                            hover:text-white
                          "
                >
                  <HiCheck className="w-8 h-8" />
                </button>
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-start space-y-6">
          {cards.slice(3, 6).map((card, index) => (
            <div key={index} className=" p-4 rounded-lg  w-64">
              <h3 className="text-lg text-[#294A63] font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-white mb-4">{card.description}</p>
              <button className="">
                <>
                <style>
                    {`
    @keyframes zoomInOut {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
      }
      .zoom-hover:hover {
        animation: zoomInOut 0.8s infinite;
        }
        `}
  </style>
 <button className="
    border-[2.5px]
    rounded-full
    bg-transparent
    text-[#294A63]
    w-10
    h-10
    flex
    items-center
    justify-center
    transition-transform
    duration-300
    zoom-hover
    hover:text-white
  "
                  >
                    <HiCheck className="w-8 h-8" />
                  </button>
                </>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
