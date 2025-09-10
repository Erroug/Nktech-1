import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function MenuItems({ item, depthLevel }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // current path
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  // Check if this menu item is active (current page)
  const isActive = location.pathname === item.to;

  // Set font size based on depth level
  const fontSizeClass = depthLevel === 0 ? "text-lg" : "text-base";

  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={item.to || "#"}
        className={`flex items-center justify-between gap-1 px-4 py-2 ${fontSizeClass} block whitespace-nowrap transition 
          ${depthLevel === 0 ? "font-medium" : ""}
          ${
            isActive || isOpen
              ? "text-yellow-400 font-semibold animate-pulse"
              : "hover:text-[#fbae57]"
          }`}
      >
        {item.label}
        {hasSubmenu &&
          (depthLevel === 0 ? (
            <ChevronDown
              size={18} // slightly bigger for larger menu
              className={`transition-transform duration-300 ${
                isOpen || isActive ? "rotate-180 text-yellow-400" : "rotate-0 text-gray-600"
              }`}
            />
          ) : (
            <ChevronRight size={16} />
          ))}
      </Link>

      {hasSubmenu && (
        <ul
          className={`absolute ${
            depthLevel === 0 ? "left-0 top-full" : "left-full top-0"
          } bg-white shadow-lg rounded-md min-w-max z-50 transition-all duration-200 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {item.submenu.map((subItem, index) => (
            <MenuItems
              item={subItem}
              key={index}
              depthLevel={depthLevel + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
