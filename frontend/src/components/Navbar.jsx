import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuItem.js";
import MenuItems from "./MenuItems.jsx";
import { ShoppingCart, Menu, X } from "lucide-react";
import nktechLogo from "../assets/nktech.jpg";
import Topbar from "./Topbar.jsx";
import { CartContext } from "../context/CartContext.jsx";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Topbar />
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={nktechLogo} alt="NK Tech Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 text-sm font-medium items-center">
            {menuItems.map((item, index) => (
              <MenuItems key={index} item={item} depthLevel={0} />
            ))}
            <li className="relative">
              <Link to="/cart">
                <ShoppingCart
                  size={22}
                  className="cursor-pointer hover:text-[#fbae57] transition"
                />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <ul className="flex flex-col gap-4 px-4 py-4 text-gray-700 text-sm font-medium">
              {menuItems.map((item, index) => (
                <MenuItems
                  key={index}
                  item={item}
                  depthLevel={0}
                  mobile
                  onClick={() => setMobileOpen(false)}
                />
              ))}
              <li>
                <Link to="/cart" className="flex items-center gap-2">
                  <ShoppingCart 
                    size={22}
                    className="cursor-pointer hover:text-[#fbae57] transition"
                  />
                  {cartCount > 0 && (
                    <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
