// src/pages/Samoa.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Samoa = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "australia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-cyan-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Samoa.jpg"
          alt="Samoa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Beautiful Samoa
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Samoa</h2>
        <p className="text-lg mb-6">
          Samoa is a stunning island nation in the South Pacific, known for its lush rainforests, dramatic waterfalls, and pristine beaches. It offers a blend of traditional Polynesian culture and breathtaking natural beauty.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/apia" className="text-blue-600 hover:underline">
              Apia – The vibrant capital with markets and cultural sites
            </Link>
          </li>
          <li>
            <Link to="/cities/upolu" className="text-blue-600 hover:underline">
              Upolu – Home to beaches, waterfalls, and To Sua Ocean Trench
            </Link>
          </li>
          <li>
            <Link to="/cities/savaii" className="text-blue-600 hover:underline">
              Savai'i – Volcanic landscapes and traditional villages
            </Link>
          </li>
          <li>
            <Link to="/cities/manono" className="text-blue-600 hover:underline">
              Manono Island – A peaceful, vehicle-free retreat
            </Link>
          </li>
          <li>
            <Link to="/cities/lalomanu" className="text-blue-600 hover:underline">
              Lalomanu Beach – Famous for its turquoise waters
            </Link>
          </li>
        </ul>

        {/* Famous Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>To Sua Ocean Trench – Natural swimming hole in a lush garden</li>
          <li>Papaseea Sliding Rocks – Fun natural rock slides</li>
          <li>Alofaaga Blowholes – Powerful seawater geysers</li>
          <li>Lalomanu Beach – One of the most beautiful beaches in the world</li>
          <li>Togitogiga Waterfall – Secluded swimming spot</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Samoa offers handcrafted woven mats, wooden carvings, lava lava (sarongs), and tropical fruits. Apia's Maketi Fou is the go-to place for fresh produce and souvenirs.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Samoa;
