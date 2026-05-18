// src/pages/Nepal.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nepal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get('continent') || 'asia';

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/nepal.jpg"
          alt="Nepal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Enchanting Nepal</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Nepal</h2>
        <p className="text-lg mb-6">
          Nepal, nestled in the Himalayas, is a country of towering peaks, ancient temples,
          and deep spiritual traditions. From busy Kathmandu to the peaceful lakes of Pokhara
          and the wilds of Chitwan, Nepal offers trekking, culture, and unforgettable landscapes.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/kathmandu" className="text-blue-600 hover:underline">
              Kathmandu – Capital city with temples, Durbar Square, and lively markets
            </Link>
          </li>
          <li>
            <Link to="/cities/pokhara" className="text-blue-600 hover:underline">
              Pokhara – Gateway to the Annapurnas and serene Phewa Lake
            </Link>
          </li>
          <li>
            <Link to="/cities/chitwan" className="text-blue-600 hover:underline">
              Chitwan – Jungle safaris and wildlife in Chitwan National Park
            </Link>
          </li>
          <li>
            <Link to="/cities/lumbini" className="text-blue-600 hover:underline">
              Lumbini – Birthplace of Buddha and important pilgrimage site
            </Link>
          </li>
          <li>
            <Link to="/cities/bhaktapur" className="text-blue-600 hover:underline">
              Bhaktapur – Medieval art, pottery, and Newar architecture
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Mount Everest Base Camp – Classic Himalayan trekking challenge</li>
          <li>Pashupatinath Temple – Major Hindu temple in Kathmandu</li>
          <li>Phewa Lake – Boating and mountain views in Pokhara</li>
          <li>Chitwan National Park – UNESCO-listed wildlife reserve</li>
          <li>Bhaktapur Durbar Square – Rich Newari heritage and architecture</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Nepal is known for handwoven pashmina, Thangka paintings, traditional handicrafts,
          herbal teas, and Himalayan salt. Explore local markets in Thamel (Kathmandu) and
          the artisans of Bhaktapur for authentic finds.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-red-400 to-yellow-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Nepal;
