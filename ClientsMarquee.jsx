// ClientsMarquee.jsx
import React from "react";
import drSweta from "../assets/dr-sweta-gupta.png";
import fyra from "../assets/fyra.png";
import mulBerry from "../assets/mulberry.png";
import hawaHawai from "../assets/hawa-hawai.png";
import medicarthIndia from "../assets/medicarthindia.webp";
import realtyNerve from "../assets/realty-nerve.webp";
import patentDraw from "../assets/patentdraw.webp";

const logos = [
  drSweta,
  fyra,
  mulBerry,
  hawaHawai,
  medicarthIndia,
  realtyNerve,
  patentDraw,
];


export default function ClientsMarquee() {
  // duplicate logos so the animation can loop seamlessly
  const logosDup = [...logos, ...logos];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center  justify-betwee mb-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 text-center w-full">Our Clients</h2>
          </div>
        </div>

        {/* marquee container */}
        <div className="overflow-hidden">
          {/* The inner track is wide and will be translated by CSS animation */}
          <div
            className="flex whitespace-nowrap items-center gap-6"
            style={{
              // width is not strictly required; kept flexible
              animation: "marquee 20s linear infinite",
            }}
          >
            {logosDup.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-1/5 md:w-1/5 lg:w-1/5"
                // w-1/5 makes 5 logos visible in the container width
                style={{ maxWidth: "20%" }}
              >
                <div className="px-2">
                  <img
                    src={src}
                    alt={`client-${i}`}
                    className="mx-auto h-16 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        /* The animation moves the entire duplicated list leftwards.
           Duration controls speed. Increase for slower scroll, decrease for faster.
        */
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* move by half since we duplicated logos */
        }

        /* Pause animation on hover (nice UX) */
        .overflow-hidden > div:hover {
          animation-play-state: paused !important;
        }

        /* Make sure the track fits and hides overflow */
        @media (max-width: 768px) {
          /* On small screens keep 3 visible: change widths & possible speed */
          .flex.whitespace-nowrap > div { max-width: 33.3333% !important; }
          /* optional: slower on small screens */
          .flex.whitespace-nowrap { animation-duration: 24s !important; }
        }
      `}</style>
    </section>
  );
}
