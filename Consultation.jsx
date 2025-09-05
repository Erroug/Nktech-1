import React from "react";
import backGround from '../assets/nktech-consultation.jpg'; 

const ConsultationSection = () => {
  return (
    <section
      className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backGround})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text */}
      <h2 className="relative text-white text-3xl md:text-4xl font-bold text-center">
        Get Free Consultation With Experts
      </h2> 
    </section>
  );
};

export default ConsultationSection;
