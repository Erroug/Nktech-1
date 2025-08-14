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
    <div className="p-6 max-w-7xl mx-auto bg-white min-h-screen">
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
          className="border border-gray-300 px-4 py-2 rounded-md shadow-sm bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 relative w"
          >
            {/* Sale badge */}
            {product.sale && (
              <span className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
                Sale!
              </span>
            )}

            {/* Image */}
            <div className="h-56 bg-gray-100 overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <span className="text-gray-400 flex items-center justify-center h-full">
                  No Image
                </span>
              )}
            </div>

            {/* Details */}
            <div className="p-4 text-center">
              <h2 className="text-pink-700 font-medium mb-1 hover:text-pink-300 transition">
                {product.title}
              </h2>

              {/* Prices */}
              <div className="mb-3">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm mr-2">
                    ₹{product.oldPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-green-700 font-bold text-lg">
                  ₹{product.price.toLocaleString()}
                </span>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 rounded-md font-medium transition"
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
