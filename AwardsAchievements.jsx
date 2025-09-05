import awardImg from "../assets/govt-projects.png"; // update path if needed
import WinnerImg from "../assets/winner.png";
import RankImg from "../assets/rank.png";
import GoogleImg from "../assets/google-certified.png";
import iphoneImg from "../assets/iphone-toolbox.jpg";
const Card = ({ title, description, imgSrc, width, height }) => (
  <div className="w-75 p-1 bg-[#1f3b4d] text-white rounded-lg shadow-lg overflow-hidden">
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-70 object-contain bg-white p-2"
    />
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold uppercase tracking-wide">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function AwardsGrid() {
  const cards = [
    {
      title: "GOVERNMENT PROJECTS",
      description: "Digital Marketing of Swacchh Survekshan 2020 and 2021 for more than 20 cities. Digital Marketing Partner of India Smart Cities Events. Digital Marketing Partner of Indo-Latin American Business Summit, 2016. Digital Marketing Partner of UP Investor Business Summit, 2018.",
      imgSrc: awardImg,
    },
    {
      title: "WINNER OF",
      description: "Best Digital Marketing Company in Delhi NCR of the Year 2015. Best Digital Marketing Company in Western UP of the Year 2016. Best Digital Marketing Company in Delhi NCR of the Year 2016. 10 Best Digital Marketing Service Providers – 2019 by CEO Insight. Appreciation Certificate from ALTTC.",
      imgSrc: WinnerImg,
      width: "289px",
    },
    {
      title: "RANKED TOP AS",
      description: "Best SEO company in Noida Best SEO company in Ghaziabad Best ORM company in Noida Best ORM company in Ghaziabad",
      imgSrc: RankImg,
    },
    {
      title: "SHORTLISTED IN",
      description: "Top 20 Google Service provider company in India. Top 20 Fastest growing Digital Marketing company in India.",
      imgSrc: GoogleImg,
    },
    {
      title: "NOMINATED5",
      description: "10 Most Trusted Digital Marketing Companies to watch in 2020. The 25 Fastest Growing Companies in India 2020-Business Connect Magazine. 10 Most Promising Corporate reputation management service providers 2020. Innovative Zone Magazine ‘The Best Company to Work for’. Business Connect Magazine:- CEO’s of the Year 2020. The CEO Magazine “25 Most Trusted ERP & CRM Solution Providers in India”. Company in Focus – 2020 by The CEO Story.",
      imgSrc: iphoneImg,
    },
  ];

  return (
 <div className="p-8 bg-gray-100">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8 text-[#1f3b4d]">
        Awards And Achievements
      </h1>


    <div className="relative flex flex-col items-center gap-12 mt-20">
      {/* First row */}
      <div className="flex gap-90">
        <Card {...cards[0]} />
        <Card {...cards[1]} />
      </div>

      {/* Second row */}
      <div className="flex gap-90">
        <Card {...cards[2]} />
        <Card {...cards[3]} />
      </div>

      {/* Middle card */}
      <div className="absolute top-1/2  transform -translate-y-1/2">
        <Card {...cards[4]} />
      </div>
    </div>
    </div>
  );
}
