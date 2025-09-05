import React from "react";

const backGround = "/assets/nktech-consultation.jpg"; 

const ConsultationSection = () => {
  return (
    <section
      className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backGround})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white">
        <h2 className="text-3xl font-bold mb-2">Career With Us</h2>
        <p className="mb-4">Join the Best SEO Team.</p>
        <a
          href="#"
          className="inline-block border px-6 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Click Here
        </a>
      </div>
    </section>
  );
};

export default ConsultationSection;
