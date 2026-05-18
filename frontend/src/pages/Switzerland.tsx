import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Switzerland = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-100 to-green-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Switzerland.jpg"
          alt="Switzerland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Stunning Switzerland</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Switzerland</h2>
        <p className="text-lg mb-6">
          Switzerland is a picturesque alpine country renowned for its breathtaking mountains, 
          crystal-clear lakes, and charming villages. Known for precision watches, Swiss chocolate, 
          and neutrality, it’s a paradise for nature lovers and adventurers alike.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/zurich" className="text-blue-600 hover:underline">
              Zurich – Financial hub with cultural richness
            </Link>
          </li>
          <li>
            <Link to="/cities/geneva" className="text-blue-600 hover:underline">
              Geneva – International diplomacy and stunning lake views
            </Link>
          </li>
          <li>
            <Link to="/cities/lucerne" className="text-blue-600 hover:underline">
              Lucerne – Medieval charm and scenic beauty
            </Link>
          </li>
          <li>
            <Link to="/cities/interlaken" className="text-blue-600 hover:underline">
              Interlaken – Adventure capital of Switzerland
            </Link>
          </li>
          <li>
            <Link to="/cities/zermatt" className="text-blue-600 hover:underline">
              Zermatt – Gateway to the Matterhorn
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>The Matterhorn – Iconic mountain peak</li>
          <li>Lake Geneva – Relaxing lakeside scenery</li>
          <li>Jungfraujoch – “Top of Europe” train journey</li>
          <li>Château de Chillon – Historic lakeside castle</li>
          <li>Bern’s Old Town – UNESCO World Heritage site</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Switzerland is famous for its premium watches, artisanal cheeses, 
          Swiss chocolate, and handcrafted souvenirs. Popular shopping spots include 
          Bahnhofstrasse in Zurich and Old Town markets.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Switzerland;
