import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

const AustraliaContact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-center text-[#294A63] text-2xl md:text-3xl font-semibold mb-2">
        Our Journey
      </h2>
      <div className="w-24 mx-auto border-b border-gray-400 mb-6"></div>

      {/* Description */}
      <p className="pt-7 text-center content-justify text-gray-600  mb-12">
        Starting as a Digital Marketing Agency, we have expanded into Website
        Development, Software Development, and other IT solutions. Our
        dedication to our core values has fueled our growth over the past
        decade.
      </p>


      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
        {/* Form */}
        <div className="pt-20 md:col-span-2 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
          ></textarea>
          <button className="bg-[#093256] text-white px-6 py-2 rounded hover:bg-[#0f4c81] transition">
            Submit
          </button>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg pt-30 font-semibold">Phone</h3>
            <a
              href="tel:+918920877101"
              className="text-blue-600 underline hover:underline"
            >
              +91 8920 8771 01
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Mail</h3>
            <a
              href="mailto:info@nktech.in"
              className="text-red-500 underline hover:underline"
            >
              info@nktech.in
            </a>
          </div>
          <div>
            <h3 className="text-lg pt-30 font-semibold">Address</h3>
            <a
              href="address"
              className="text-blue-600 hover:underline"
            >
              307B 3rd Floor I Thum Tower - A, sector 62 Noida 201301
            </a>
          </div>
        </div>
      </div>

      <h2 className="text-center text-[#294A63] pt-30 text-4xl font-semibold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 pt-10">
        <div>
          <p className=" px-13 text-left text-lg  text-center content-justify text-gray-600">NKTech is a leading SEO and Digital Marketing Company in Noida, India. We also serve as a
            renowned SEO and Website Designing Company in Ghaziabad, Noida, and Delhi. Since our
            inception in 2012, we have consistently delivered exceptional services, helping businesses
            grow by leveraging our expertise in SEO, PPC, SMO, and content writing.</p>

          <p className="px-13 text-left text-lg text-center pt-5 content-justify text-gray-600">With over 550 satisfied
            customers worldwide and 1000+ successful projects delivered, we are trusted by clients
            from diverse sectors, including Hotels, Hospitals, FMCG companies, Doctors, Clinics, Schools,
            Colleges, and many more.</p>



          <h3 className=" px-5 text-xl pl-13 font-bold text-[#294A63] pt-5 pb-5 ">Our Journey</h3>

          <p className="px-13  text-left text-center text-lg content-justify text-gray-600  ">Started as a Digital Marketing
            Agency, we have expanded into Website Development, Software Development, and other IT solutions.
            Our dedication to our core values has fueled our growth over the past decade.</p>
        </div>

        <div className="">
          <ul className="text-xl space-y-10  text-sm  ">
            {[
              "SEO Services",
              "ORM Services",
              "Website Designing",
              "Website Maintenance",
              "SMO Services",
              "SMM Services",
            ].map((service, i) => (
              <li
                key={i}
                className="flex items-center gap-2 border-b border-gray-600 pb-2 hover:text-orange-400 transition-colors cursor-pointer"
              >
                <FaChevronRight className="text-[#294A63] hover:text-orange-400 transition-colors cursor-pointer " /> {service}
              </li>
            ))}
          </ul>

        </div>

      </div>

            <div className="">
              <h3 className=" text-center text-4xl pl-13 font-bold text-[#294A63] pt-5 pb-5 "> Our Big Step</h3>
              <p className="px-13 text-center text-lg content-justify text-gray-600">We have developed a unique local ecosystem portal for cities, enabling users to find local businesses, jobs, news,
                 events, and much more. Currently live in 30 cities, we aim to expand to 500 cities in the coming years.</p>
              <div className=""></div>
            </div>
    </section>
  );
};
export default AustraliaContact
