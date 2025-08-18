import React from 'react';
import { motion } from "framer-motion";
import aboutImg from "../assets/about/content_img1_grey.jpg";

const AboutUs = () => {
  return (
    <section className="flex items-center gap-8 px-50 py-20">
      {/* Left side - Image */}
      
       <motion.div
        className="flex-shrink-0 w-130 h-130"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right side - Text */}
      <motion.div
        className="w-1/2 pb-35"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-5xl font-semibold mb-4 text-[#294A63]">ABOUT US</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
          NKTech is one of the Best SEO Company in Noida and also Best Digital
          Marketing Company in Noida, India. We are also a well-known SEO
          company in Ghaziabad. Website Designing Company in Ghaziabad, Noida,
          and Delhi, India. We began our operations as Digital Marketing Agency
          in the year 2012 and since then have grown by leaps and bounds. From
          the very beginning, we have stayed true to our core beliefs and have
          delivered an exceptional experience for our customers. We have more
          than 500 satisfied customers over the globe and delivered more than
          1000 projects in the last 12 years. Our expertise in Digital marketing
          services includes SEO, PPC, SMO, and content writing. We have made
          websites and done SEO for Hotels, Hospitals, FMCG companies, Doctors,
          Clinics, Schools, and Colleges.
        </p>
      </motion.div>
      
      <p className="absolute left-50 text-justify pr-50 top-170 text-gray-600  ">
          We began our operations as Website Development and Digital Marketing Agency in 
          the year 2010 and since then have grown by leaps and bounds. From the very beginning 
          we have stayed true to our core beliefs and have delivered an exceptional experience 
          for our customers. We have more than 550 satisfied customers over the globe and delivered 
          more than 1000 projects in the last 12 years. Our expertise in Software Development,
           Website Designing & Development, Digital marketing services which includes SEO, PPC,
            SMO and content writing. We have developed websites and done SEO for Colleges, Universities, 
          Hotels, Hospitals, FMCG companies, Doctors, Clinics, and multiple product based companies.
        </p>

        <h3 className="absolute text-justify pr-50 top-205">Our Big Step :</h3>
        <p className="absolute text-justify pr-50 top-215">We have made a local ecosystem portal for 
          cities where one can find local businesses, Jobs, News, Events, citizens and many more for
           that specific city. We made it in the shape of a city portal and currently live in 30 cities 
           and we are planning to come to 500 cities in the next few years.</p>
           <h3 className="absolute text-justify pr-50 top-230">Vision</h3>
           <p className="absolute text-justify pr-50 top-240">Our Vision is to expand globally and provide the best IT Services all over the globe through
             local. To provide optimal IT solutions and consulting thinking according to the customers needs
              and capabilities.</p>
            <h3 className="absolute text-justify pr-50 top-255">Mission</h3>
            <p className="absolute text-justify pr-50 top-265">Dedicated to bringing innovation and creating value for customers
               by developing products and services of technological excellence.</p>

           <h3 className="absolute  text-justify text-5xl font-bold underline pr-50 top-300 text-[#294A63]">AWARDS AND ACHIEVEMENTS:</h3>
          {/* <div> 

           <p className="absolute text-justify  top-265">
            Best Digital Marketing Company in Delhi NCR of the Year 2015.
            Best Digital Marketing Company in Western UP of the Year 2016.
            Best Digital Marketing Company in Delhi NCR of the Year 2016</p>
          </div> */}

          {/* <div>
             <h3 className="absolute text-justify text-small font-bold underline pr-50 top-300 text-[#294A63]">SHORTLISTED IN:</h3>
          <p className="absolute text-justify  top-265">
            Best Digital Marketing Company in Delhi NCR of the Year 2015.
            Best Digital Marketing Company in Western UP of the Year 2016.
            Best Digital Marketing Company in Delhi NCR of the Year 2016</p> */}
          {/* </div> */}
           

    </section>
  ); 
};

export default AboutUs;
