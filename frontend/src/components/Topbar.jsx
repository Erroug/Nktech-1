import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
  PhoneCall,
  MessageCircle, // For WhatsApp icon
} from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-[#093256] h-16 text-white text-sm py-2 px-4 flex justify-between items-center">
      {/* Phone */}
      <div className="flex items-center gap-2">
        <PhoneCall size={18} />
        <a 
          href="tel:+918920877101" 
          className="hover:underline"
        >
          +91 8920 8771 01
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 text-lg">
        <a
          href="https://www.linkedin.com/company/nktech"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-white text-[#0F4C81] hover:scale-105 transition"
        >
          <Linkedin size={18} />
        </a>

        <a
          href="https://www.instagram.com/nktechipl/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-white text-[#0F4C81] hover:scale-105 transition"
        >
          <Instagram size={18} />
        </a>

        <a
          href="https://www.youtube.com/@nktechipl"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-white text-[#0F4C81] hover:scale-105 transition"
        >
          <Youtube size={18} />
        </a>

        <a
          href="https://www.facebook.com/NKTechPvtLtd"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-white text-[#0F4C81] hover:scale-105 transition"
        >
          <Facebook size={18} />
        </a>

        <a
          href="https://x.com/NktechInfo"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-white text-[#0F4C81] hover:scale-105 transition"
        >
          <X size={18} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918920877101"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-white text-[#0F4C81] hover:scale-105 transition"
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
