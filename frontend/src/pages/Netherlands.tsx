// src/pages/Netherlands.tsx
import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Netherlands = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Netherlands.jpg"
          alt="Netherlands"
          className="w-full h-full object-cover rounded-b-3xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-b-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Charming Netherlands
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About the Netherlands</h2>
        <p className="text-lg mb-6">
          The Netherlands is a country of picturesque canals, iconic windmills, and colorful tulip fields. 
          Famous for its innovative cities and laid-back lifestyle, it’s a perfect mix of tradition and modernity.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/amsterdam" className="text-blue-600 hover:underline">
              Amsterdam – Canals, museums, and vibrant nightlife
            </Link>
          </li>
          <li>
            <Link to="/cities/rotterdam" className="text-blue-600 hover:underline">
              Rotterdam – Modern architecture and bustling port
            </Link>
          </li>
          <li>
            <Link to="/cities/the-hague" className="text-blue-600 hover:underline">
              The Hague – Royal palaces and political hub
            </Link>
          </li>
          <li>
            <Link to="/cities/utrecht" className="text-blue-600 hover:underline">
              Utrecht – Medieval charm and student life
            </Link>
          </li>
          <li>
            <Link to="/cities/maastricht" className="text-blue-600 hover:underline">
              Maastricht – Cultural crossroads with Belgian flair
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Keukenhof Gardens – World-famous tulip display</li>
          <li>Van Gogh Museum – Masterpieces of the Dutch painter</li>
          <li>Zaanse Schans – Historic windmills and houses</li>
          <li>Anne Frank House – Historic WWII site</li>
          <li>Kinderdijk – UNESCO windmill village</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          The Netherlands is famous for cheese (Gouda, Edam), Delft blue pottery, wooden clogs, and fresh flowers. 
          Don’t miss Albert Cuyp Market in Amsterdam for local snacks and souvenirs.
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

export default Netherlands;
