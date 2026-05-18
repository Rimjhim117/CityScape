// src/pages/SriLanka.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SriLanka = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-green-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Sri-Lanka.jpg"
          alt="Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Serene Sri Lanka</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Sri Lanka</h2>
        <p className="text-lg mb-6">
          Known as the “Pearl of the Indian Ocean,” Sri Lanka is an island nation 
          with golden beaches, lush tea plantations, ancient temples, and vibrant wildlife. 
          Its blend of culture, history, and natural beauty makes it a must-visit destination.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/colombo" className="text-blue-600 hover:underline">
              Colombo – Bustling capital with colonial charm
            </Link>
          </li>
          <li>
            <Link to="/cities/kandy" className="text-blue-600 hover:underline">
              Kandy – Home to the Temple of the Tooth Relic
            </Link>
          </li>
          <li>
            <Link to="/cities/galle" className="text-blue-600 hover:underline">
              Galle – Historic fort and seaside views
            </Link>
          </li>
          <li>
            <Link to="/cities/ella" className="text-blue-600 hover:underline">
              Ella – Scenic mountain town with hiking trails
            </Link>
          </li>
          <li>
            <Link to="/cities/jafna" className="text-blue-600 hover:underline">
              Jaffna – Cultural capital of the Tamil community
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Sigiriya Rock Fortress – Ancient palace on a rock plateau</li>
          <li>Adam’s Peak – Sacred mountain pilgrimage</li>
          <li>Yala National Park – Wildlife safaris</li>
          <li>Tea Plantations in Nuwara Eliya</li>
          <li>Anuradhapura – Ancient Buddhist city</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Sri Lanka is famous for Ceylon tea, spices, gemstones, and handmade crafts. 
          Visit Pettah Market in Colombo or local bazaars to experience authentic Sri Lankan shopping.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-orange-400 to-green-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default SriLanka;
