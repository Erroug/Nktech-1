import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../data/menuItem.js";
import MenuItems from "./MenuItems.jsx";
import { ShoppingCart, Menu, X } from "lucide-react";
import Topbar from "./Topbar.jsx";
import { CartContext } from "../context/CartContext.jsx";

const bizwokeLogo = "/assets/Bizwoke.jpg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const location = useLocation();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="shadow-sm sticky top-0 z-50 bg-white">
      <Topbar />

      {/* ===== Nav Bar ===== */}
      <nav className="w-full flex flex-wrap items-center justify-between py-3 px-4 max-w-full mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={bizwokeLogo} alt="Bizwoke" className="h-12 w-auto" />
        </Link>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex flex-wrap gap-6 text-gray-700 text-sm font-medium items-center">
          {menuItems.map((item, index) => (
            <MenuItems
              key={index}
              item={item}
              depthLevel={0}
              className="whitespace-normal break-words"
            />
          ))}
          <li className="ml-2 relative">
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

        {/* ===== Mobile Menu Button ===== */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* ===== Mobile Dropdown ===== */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-screen bg-white z-50
          transition-all duration-300
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{
          maxHeight: mobileOpen ? "calc(100vh - 64px)" : "0",
          overflowY: mobileOpen ? "auto" : "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* 🔹 Close button inside menu */}
        <div className="flex justify-end px-4 pt-4">
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="text-gray-700 hover:text-red-500 transition"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-4 pb-4 text-gray-700 text-sm font-medium w-full">
          {menuItems.map((item, index) => (
            <MenuItems
              key={index}
              item={item}
              depthLevel={0}
              mobile
              className="break-words w-full"
              onClick={() => setMobileOpen(false)}
            />
          ))}

          <li>
            <Link
              to="/cart"
              className="flex items-center gap-2 w-full"
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
