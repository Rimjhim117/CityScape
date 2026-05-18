// src/pages/Uzbekistan.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Uzbekistan = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-100 to-green-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Uzbekistan.jpg"
          alt="Uzbekistan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Majestic Uzbekistan</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Uzbekistan</h2>
        <p className="text-lg mb-6">
          Uzbekistan, a jewel of Central Asia, is famous for its Silk Road heritage, 
          intricate Islamic architecture, and bustling bazaars. 
          With cities like Samarkand and Bukhara, it’s a living museum of history and culture.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/samarkand" className="text-blue-600 hover:underline">
              Samarkand – Registan Square & ancient mosques
            </Link>
          </li>
          <li>
            <Link to="/cities/bukhara" className="text-blue-600 hover:underline">
              Bukhara – UNESCO World Heritage city
            </Link>
          </li>
          <li>
            <Link to="/cities/khiva" className="text-blue-600 hover:underline">
              Khiva – Open-air museum of history
            </Link>
          </li>
          <li>
            <Link to="/cities/tashkent" className="text-blue-600 hover:underline">
              Tashkent – Modern capital with cultural gems
            </Link>
          </li>
          <li>
            <Link to="/cities/fergana" className="text-blue-600 hover:underline">
              Fergana Valley – Fertile landscapes & crafts
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Registan Square – Iconic symbol of Samarkand</li>
          <li>Ark Fortress – Bukhara’s historic stronghold</li>
          <li>Itchan Kala – Walled city in Khiva</li>
          <li>Chorsu Bazaar – Bustling market in Tashkent</li>
          <li>Shah-i-Zinda – Necropolis with stunning blue tiles</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Uzbekistan is renowned for handwoven silk, ceramics, embroidered textiles, 
          and spices. Popular spots include Chorsu Bazaar in Tashkent and Siyob Bazaar in Samarkand.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-yellow-500 to-blue-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Uzbekistan;
