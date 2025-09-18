import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/assets/Bizwoke.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#2B2F32] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Left - Logo & SEO text */}
        <div>
          <Link to="/">
            <img src={logo} alt="Bizwoke" className="w-50 h-25 mb-4" />
          </Link>
          <ul className="space-y-1 text-sm">
            {[
              "Best SEO Company in Noida",
              "Best SEO agency in Noida",
              "SEO company in Noida",
              "Digital Marketing company in Noida",
            ].map((item, i) => (
              <li key={i} className="text-gray-300">{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "SEO Services", link: "/services/digitalmarketing/seoservices" },
              { name: "ORM Services", link: "/services/digitalmarketing/ormservices" },
              { name: "Website Designing", link: "/services/webdevelopment/webdesigning" },
              { name: "Website Maintenance", link: "/services/webdevelopment/webmaintanence" },
              { name: "SMO Services", link: "/services/digitalmarketing/smoservices" },
              { name: "SMM Services", link: "/services/digitalmarketing/smmservices" },
            ].map((service, i) => (
              <li key={i} className="flex items-center gap-2 border-b border-gray-600 pb-2 hover:text-orange-400 transition-colors">
                <FaChevronRight className="text-orange-500" />
                <Link to={service.link}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Free Consultation", link: "/free-consultation" },
              { name: "Customer Support", link: "/contact" },
              { name: "Terms and Conditions", link: "/terms" },
              { name: "Privacy Policy", link: "/privacy-policy" },
            ].map((linkItem, i) => (
              <li key={i} className="flex items-center gap-2 border-b border-gray-600 pb-2 hover:text-orange-400 transition-colors">
                <FaChevronRight className="text-orange-500" />
                <Link to={linkItem.link}>{linkItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            {[
              { icon: <FaPhoneAlt className="text-orange-500" />, text: "+91 7836055511", link: "tel:+917836055511" },
              { icon: <FaPhoneAlt className="text-orange-500" />, text: "+91 7836055511", link: "tel:+917836055511" },
              { icon: <FaMapMarkerAlt className="text-orange-500" />, text: "Noida, India", link: "/contact/noida" },
              { icon: <FaMapMarkerAlt className="text-orange-500" />, text: "Gurugram, India", link: "/contact/gurugram" },
              { icon: <FaMapMarkerAlt className="text-orange-500" />, text: "Melbourne, Australia", link: "/contact/australia" },
              { icon: <FaMapMarkerAlt className="text-orange-500" />, text: "New Jersey, USA", link: "/contact" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 border-b border-gray-600 pb-2 hover:text-orange-400 transition-colors">
                {item.icon}{" "}
                {item.link.startsWith("tel:") ? (
                  <a href={item.link}>{item.text}</a>
                ) : (
                  <Link to={item.link}>{item.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <p className="mr-18">
            Bizwoke © 2012-{new Date().getFullYear()} All rights reserved. Terms of Use and Privacy Policy
          </p>
          {[
            { name: "CRM Clients", link: "/crm-clients" },
            { name: "CRM Employees", link: "/crm-employees" },
            { name: "Career", link: "/career" },
            { name: "Internship", link: "/internship" },
            { name: "Blogs", link: "/blogs" },
            { name: "Refer & Earn", link: "/refer-earn" },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="cursor-pointer hover:text-orange-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
