import { FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import logo from "/assets/Bizwoke.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#2B2F32] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left - Logo & SEO text */}
        <div>
          <img src={logo} alt="Bizwoke" className="w-50 h-25 mb-4" />
          <ul className="space-y-1 text-sm">
            {[
              "Best SEO Company in Noida",
              "Best SEO agency in Noida",
              "SEO company in Noida",
              "Digital Marketing company in Noida",
            ].map((item, i) => (
              <li key={i} className="text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
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
                <FaChevronRight className="text-orange-500" /> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Free Consultation",
              "Customer Support",
              "Terms and Conditions",
              "Privacy Policy",
            ].map((link, i) => (
              <li
                key={i}
                className="flex items-center gap-2 border-b border-gray-600 pb-2 hover:text-orange-400 transition-colors cursor-pointer"
              >
                <FaChevronRight className="text-orange-500" /> {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            {[
              { icon: <FaPhoneAlt className="text-orange-500" />, text: "+91 7836055511" },
              { icon: <FaPhoneAlt className="text-orange-500" />, text: "+91 7836055511" },
              { icon: <FaMapMarkerAlt className="text-orange-500" />, text: "Noida, India" },
              { icon: <FaMapMarkerAlt className="text-orange-500" />, text: "Gurgaon, India" },
              { icon: <FaMapMarkerAlt className="text-orange-500" />, text: "Melbourne, Australia" },
              { icon: <FaMapMarkerAlt className="text-orange-500" />, text: "New Jersey, USA" },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 border-b border-gray-600 pb-2 hover:text-orange-400 transition-colors cursor-pointer"
              >
                {item.icon} {item.text}
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
    {["CRM Clients", "CRM Employees", "Career", "Internship", "Blogs", "Refer & Earn"].map((item, i) => (
      <span
        key={i}
        className="cursor-pointer hover:text-orange-400 transition-colors"
      >
        {item}
      </span>
    ))}
  </div>
</div>

    </footer>
  );
}
