import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty 🛒</h2>
        <Link
          to="/softwareandapps"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div className="flex items-center gap-4">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-100 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}

              <div>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-500">
                  ₹{item.price.toLocaleString()} × {item.quantity}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Total: ₹{totalPrice.toLocaleString()}</h3>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
