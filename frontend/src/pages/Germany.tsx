// src/pages/Germany.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Germany = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-amber-200">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Germany.jpg"
          alt="Germany"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Enchanting Germany</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Germany</h2>
        <p className="text-lg mb-6">
          Germany, located in the heart of Europe, is known for its fairytale castles, vibrant cities, 
          scenic countryside, and rich cultural heritage. From Berlin’s modern art scene to Bavaria’s 
          alpine beauty, Germany offers a diverse travel experience.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/berlin" className="text-blue-600 hover:underline">
              Berlin – Capital of history and culture
            </Link>
          </li>
          <li>
            <Link to="/cities/munich" className="text-blue-600 hover:underline">
              Munich – Oktoberfest and Bavarian charm
            </Link>
          </li>
          <li>
            <Link to="/cities/hamburg" className="text-blue-600 hover:underline">
              Hamburg – Port city with maritime flair
            </Link>
          </li>
          <li>
            <Link to="/cities/frankfurt" className="text-blue-600 hover:underline">
              Frankfurt – Financial hub and skyline
            </Link>
          </li>
          <li>
            <Link to="/cities/cologne" className="text-blue-600 hover:underline">
              Cologne – Gothic cathedral and festivals
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Neuschwanstein Castle – Fairytale inspiration</li>
          <li>Berlin Wall & Brandenburg Gate – Historic landmarks</li>
          <li>Black Forest – Nature and folklore</li>
          <li>Rhine Valley – Wine and scenic cruises</li>
          <li>Oktoberfest – World-famous beer festival</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Germany is known for its sausages, pretzels, beer, cuckoo clocks, and Christmas markets. 
          Explore famous markets like Nuremberg’s Christkindlesmarkt or Cologne’s festive stalls 
          for unique souvenirs and delicious treats.
        </p>
        
        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Germany;
