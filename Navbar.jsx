import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuItem.js";
import MenuItems from "./MenuItems.jsx";
import { ShoppingCart, Menu, X } from "lucide-react";
const nktechLogo = "/assets/Bizwoke.jpg";
import Topbar from "./Topbar.jsx";
import { CartContext } from "../context/CartContext.jsx";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="shadow-sm sticky top-0 z-50 bg-white">
      <Topbar />
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={nktechLogo} alt="NKTech" className="h-10 w-auto" />
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
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
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
              <Link
                to="/cart"
                className="flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
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
    </header>
  );
}
