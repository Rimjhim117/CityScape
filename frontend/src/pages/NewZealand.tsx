// src/pages/NewZealand.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NewZealand = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "australia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-100 to-teal-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/NewZealand.jpg"
          alt="New Zealand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Majestic New Zealand
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About New Zealand</h2>
        <p className="text-lg mb-6">
          New Zealand is a land of breathtaking landscapes, from snow-capped
          mountains and rolling green hills to pristine beaches and geothermal
          wonders. Known for its friendly people and Maori culture, it’s a
          paradise for nature lovers and adventure seekers.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Top Areas to Explore
        </h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link
              to="/cities/queenstown"
              className="text-blue-600 hover:underline"
            >
              Queenstown – Adventure capital of the world
            </Link>
          </li>
          <li>
            <Link
              to="/cities/auckland"
              className="text-blue-600 hover:underline"
            >
              Auckland – City of Sails
            </Link>
          </li>
          <li>
            <Link
              to="/cities/wellington"
              className="text-blue-600 hover:underline"
            >
              Wellington – Arts, culture, and coffee
            </Link>
          </li>
          <li>
            <Link
              to="/cities/christchurch"
              className="text-blue-600 hover:underline"
            >
              Christchurch – Gateway to the South Island
            </Link>
          </li>
          <li>
            <Link
              to="/cities/rotorua"
              className="text-blue-600 hover:underline"
            >
              Rotorua – Geothermal wonders and Maori culture
            </Link>
          </li>
        </ul>

        {/* Famous Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Famous Attractions
        </h3>
        <ul className="list-disc list-inside mb-6">
          <li>Milford Sound – Stunning fjords and waterfalls</li>
          <li>Hobbiton – Movie set from The Lord of the Rings</li>
          <li>Franz Josef Glacier – Majestic ice formations</li>
          <li>Bay of Islands – Beautiful beaches and sailing</li>
          <li>Tongariro National Park – Volcanic landscapes and hikes</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Local Goods & Markets
        </h3>
        <p className="text-lg mb-6">
          New Zealand is famous for wool products, Manuka honey, greenstone
          carvings, and artisanal cheeses. Local markets like Wellington
          Night Market and Matakana Village Farmers’ Market are must-visits.
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

export default NewZealand;
