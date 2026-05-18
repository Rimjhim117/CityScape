import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const SolomonIslands = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "australia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-200">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/SolomonIslands.jpg"
          alt="Solomon Islands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Solomon Islands</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4 text-green-900">About Solomon Islands</h2>
        <p className="text-lg mb-6 text-gray-700">
          The Solomon Islands, located in the South Pacific, is an island nation known for its lush 
          rainforests, vibrant marine life, and rich WWII history. With over 900 islands, it offers 
          pristine beaches, coral reefs, and authentic cultural traditions.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-green-800">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/honiara" className="text-teal-700 hover:underline">
              Honiara – The capital city with museums and markets
            </Link>
          </li>
          <li>
            <Link to="/cities/gizo" className="text-teal-700 hover:underline">
              Gizo – Stunning diving spots and WWII relics
            </Link>
          </li>
          <li>
            <Link to="/cities/kirakira" className="text-teal-700 hover:underline">
              Kirakira – Remote town with unspoiled beaches
            </Link>
          </li>
          <li>
            <Link to="/cities/auki" className="text-teal-700 hover:underline">
              Auki – Traditional markets and cultural charm
            </Link>
          </li>
        </ul>

        {/* Famous Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-green-800">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>WWII relics and museums in Honiara</li>
          <li>Diving at Marovo Lagoon – the world’s largest saltwater lagoon</li>
          <li>Tetepare Island – a protected conservation area</li>
          <li>Kennedy Island – historic WWII site</li>
          <li>Bonegi Beach – snorkeling and diving paradise</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-green-800">Local Goods & Markets</h3>
        <p className="text-lg mb-6 text-gray-700">
          The Solomon Islands are known for their hand-carved wooden crafts, shell jewelry, woven baskets, 
          and local produce. Markets are full of tropical fruits, root crops, and fish, giving visitors 
          a true taste of island life.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default SolomonIslands;
