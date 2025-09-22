import React from "react";

// image paths (from public/assets)
const awardImg = "/assets/govt-projects.png";
const WinnerImg = "/assets/winner.png";
const RankImg = "/assets/rank.png";
const GoogleImg = "/assets/google-certified.png";
const iphoneImg = "/assets/iphone-toolbox.jpg";

const Card = ({ title, description, imgSrc, center }) => (
  <div
    className={`bg-[#294a63] text-white rounded-md shadow-md overflow-hidden ${
      center ? "flex flex-col items-center justify-center py-6 px-4" : ""
    }`}
  >
    {/* image area */}
    <div
      className={`bg-white flex items-center justify-center ${
        center
          ? "px-6 py-6 border-4 border-[#1f3b4d]"
          : "p-3 border-4 border-[#1f3b4d]"
      }`}
    >
      <img
        src={imgSrc}
        alt={title}
        className={`object-contain ${
          center ? "w-36 sm:w-40 md:w-48 h-auto" : "w-full h-40 sm:h-44"
        }`}
      />
    </div>

    {/* content */}
    <div className={`p-4 text-center ${center ? "pt-4" : ""}`}>
      <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide">
        {title}
      </h2>
      <p className="mt-2 text-sm sm:text-base text-justify leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function AwardsGrid() {
  const cards = [
    {
      title: "GOVERNMENT PROJECTS",
      description:
        "Digital Marketing of Swacchh Survekshan 2020 and 2021 for more than 20 cities. Digital Marketing Partner of India Smart Cities Events. Digital Marketing Partner of Indo-Latin American Business Summit, 2016. Digital Marketing Partner of UP Investor Business Summit, 2018.",
      imgSrc: awardImg,
    },
    {
      title: "WINNER OF",
      description:
        "Best Digital Marketing Company in Delhi NCR of the Year 2015. Best Digital Marketing Company in Western UP of the Year 2016. Best Digital Marketing Company in Delhi NCR of the Year 2016. 10 Best Digital Marketing Service Providers – 2019 by CEO Insight. Appreciation Certificate from ALTTC.",
      imgSrc: WinnerImg,
    },
    {
      title: "RANKED TOP AS",
      description:
        "Best SEO company in Noida Best SEO company in Ghaziabad Best ORM company in Noida Best ORM company in Ghaziabad",
      imgSrc: RankImg,
    },
    {
      title: "SHORTLISTED IN",
      description:
        "Top 20 Google Service provider company in India. Top 20 Fastest growing Digital Marketing company in India.",
      imgSrc: GoogleImg,
    },
    {
      title: "NOMINATED",
      description:
        "10 Most Trusted Digital Marketing Companies to watch in 2020. The 25 Fastest Growing Companies in India 2020 - Business Connect Magazine. 10 Most Promising Corporate reputation management service providers 2020. Innovative Zone Magazine 'The Best Company to Work for'. Business Connect Magazine: CEO’s of the Year 2020. The CEO Magazine '25 Most Trusted ERP & CRM Solution Providers in India'.",
      imgSrc: iphoneImg,
    },
  ];

  return (
    <div className="p-6 sm:p-8 bg-gray-100">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-[#294a63]">
        Awards And Achievements
      </h1>

      {/* Responsive Grid */}
      <div
        className="
          grid gap-6 sm:gap-8 max-w-6xl mx-auto
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[1fr_320px_1fr]
          auto-rows-auto
        "
      >
        {/* top-left */}
        <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-[320px]">
          <Card {...cards[0]} />
        </div>

        {/* center (spans 2 rows on lg) */}
        <div className="lg:row-span-2 lg:justify-self-center lg:w-[320px]">
          <Card {...cards[4]} center />
        </div>

        {/* top-right */}
        <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-[320px]">
          <Card {...cards[1]} />
        </div>

        {/* bottom-left */}
        <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-[320px]">
          <Card {...cards[2]} />
        </div>

        {/* bottom-right */}
        <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-[320px]">
          <Card {...cards[3]} />
        </div>
      </div>
    </div>
  );
}
