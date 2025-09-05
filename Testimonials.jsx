'use client';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajiv Khanna",
      designation: "MD Jukaso Hotels Pvt. Ltd.",
      text: "This is an amazing service!",
      fullText:
        "This is a Jukaso Journeys reviews, if you are looking for the best SEO company in Noida then NKtech is the best choice. I am thankful to the Team NKtech for providing result-oriented SEO services for my business. My overall experience with them was amazing. They have a good team of digital marketing experts. They are the fastest growing SEO Company in Noida. Keep it Up.",
      rating: 5,
      image: "/assets/rajivkhana.jpg",
    },
    {
      id: 2,
      name: "Yajus Khanna",
      designation: "CEO, Jukaso Journeys",
      text: "Highly recommend to everyone.",
      fullText:
        "I am very much pleased with the services of Nktech. They are providing the best SEO services in Noida. Initially, our website performance was not good but when we gave our work to them and now our website is performing well. I found, traffic is increased and rank has improved. Great work was done by the team",
      rating: 4,
      image: "/assets/yajush-khanna-1.jpg",
    },
    {
      id: 3,
      name: "Vinita Gupta",
      designation: "Client",
      text: "Great value for money.",
      fullText:
        "The experience was very nice with NKTech. Mr. Rajeev Sharma is the best person I have ever meet. he helped & guide me to grow my business online with the company. Must say genuine Company. Looking for Best SEO company in Noida ? NKTech is will be the best choice.",
      rating: 5,
      image: "/assets/noprofile-06.svg",
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section className="py-10 bg-[#294A63]">
      <h2 className="text-5xl font-bold text-center text-white mb-8">
        Testimonials
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            onClick={() =>
              setExpandedCard(expandedCard === t.id ? null : t.id)
            }
            className={`bg-white rounded-xl shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 p-6 w-80 ${
              expandedCard === t.id ? "h-auto" : "h-60 overflow-hidden"
            }`}
          >
            {/* Header with image, name, and designation */}
            <div className="flex items-center mb-3 relative">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-200"
                onError={(e) => {
                  e.currentTarget.src = "/vite.svg";
                }}
              />
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.designation}</p>
              </div>
            </div>

            {/* Star rating */}
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={`${
                    index < t.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-600">
              {expandedCard === t.id ? t.fullText : t.text}
            </p>

            {/* Button */}
            <button className="mt-4 text-blue-500 underline">
              {expandedCard === t.id ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
