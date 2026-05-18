// src/pages/Fiji.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Fiji = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "australia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Fiji.jpg"
          alt="Fiji"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Tropical Fiji
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Fiji</h2>
        <p className="text-lg mb-6">
          Fiji is an island paradise in the South Pacific, known for its crystal-clear lagoons, white-sand beaches, and warm hospitality. With over 300 islands, it offers a perfect blend of relaxation, adventure, and cultural experiences.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/nadi" className="text-blue-600 hover:underline">
              Nadi – Gateway to Fiji with beaches and markets
            </Link>
          </li>
          <li>
            <Link to="/cities/suva" className="text-blue-600 hover:underline">
              Suva – Capital city with rich culture and history
            </Link>
          </li>
          <li>
            <Link to="/cities/denarau" className="text-blue-600 hover:underline">
              Denarau Island – Luxury resorts and golf courses
            </Link>
          </li>
          <li>
            <Link to="/cities/taveuni" className="text-blue-600 hover:underline">
              Taveuni – The Garden Island with waterfalls and hiking
            </Link>
          </li>
          <li>
            <Link to="/cities/coral-coast" className="text-blue-600 hover:underline">
              Coral Coast – Stunning beaches and diving spots
            </Link>
          </li>
        </ul>

        {/* Famous Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Yasawa Islands – Remote, scenic island chain</li>
          <li>Garden of the Sleeping Giant – Orchid gardens in Nadi</li>
          <li>Beqa Lagoon – World-famous shark diving</li>
          <li>Bouma National Heritage Park – Rainforests and waterfalls</li>
          <li>Cloud 9 – Floating bar and pizzeria in the ocean</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Fiji is known for its handcrafted jewelry, masi (tapa cloth), wooden carvings, and fresh tropical fruits. Suva Municipal Market and Nadi Handicraft Market are popular spots to shop for authentic Fijian goods.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Fiji;
