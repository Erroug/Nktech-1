import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext.jsx";

export default function SoftwareAndApps() {
  const [sortOption, setSortOption] = useState("default");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  const fetchProducts = async (sort) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:3000/api/product/products?sort=${sort}`
      );
      setProducts(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(sortOption);
  }, [sortOption]);

  const handleSort = (option) => {
    setSortOption(option);
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-lg text-gray-500 animate-pulse">
        Loading products...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <p className="text-gray-500 text-sm mb-2">Home / Software & Apps</p>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">
        Software & Apps
      </h1>
      <p className="text-gray-500 mb-6">
        Showing all {products.length} results
      </p>

      {/* Sorting */}
      <div className="flex justify-end mb-6">
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
        >
          <option value="default">Default sorting</option>
          <option value="popularity">Sort by popularity</option>
          <option value="rating">Sort by average rating</option>
          <option value="latest">Sort by latest</option>
          <option value="lowToHigh">Sort by price: low to high</option>
          <option value="highToLow">Sort by price: high to low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white relative group"
          >
            {product.sale && (
              <span className="absolute top-3 left-3 bg-gray-800 text-white px-3 py-1 text-xs rounded-full shadow-md">
                Sale
              </span>
            )}

            {/* Image */}
            <div className="overflow-hidden h-48 flex items-center justify-center bg-gray-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                />
              ) : (
                <span className="text-gray-400">No Image</span>
              )}
            </div>

            {/* Details */}
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-1 text-gray-800 group-hover:text-gray-600 transition">
                {product.title}
              </h2>

              {product.oldPrice && (
                <p className="text-gray-400 line-through text-sm">
                  ₹{product.oldPrice.toLocaleString()}
                </p>
              )}

              <p className="text-gray-900 font-bold text-xl mb-4">
                ₹{product.price.toLocaleString()}
              </p>

              {/* Button */}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gray-900 text-white py-2 rounded-full shadow hover:bg-gray-700 transition-all duration-300 font-medium"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
