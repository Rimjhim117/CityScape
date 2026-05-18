// src/pages/England.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const England = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-100 to-orange-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/England.jpg"
          alt="England"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Enchanting England</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About England</h2>
        <p className="text-lg mb-6">
          England blends rich history, iconic landmarks, royal heritage, 
          and charming countryside. From bustling London to peaceful 
          villages, it’s a land of timeless beauty.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li><Link to="/cities/london" className="text-blue-600 hover:underline">London – Historic capital</Link></li>
          <li><Link to="/cities/oxford" className="text-blue-600 hover:underline">Oxford – City of dreaming spires</Link></li>
          <li><Link to="/cities/cambridge" className="text-blue-600 hover:underline">Cambridge – Academic excellence</Link></li>
          <li><Link to="/cities/liverpool" className="text-blue-600 hover:underline">Liverpool – Music and maritime heritage</Link></li>
          <li><Link to="/cities/bath" className="text-blue-600 hover:underline">Bath – Roman baths and Georgian architecture</Link></li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Big Ben – Iconic clock tower in London</li>
          <li>Stonehenge – Ancient prehistoric monument</li>
          <li>London Eye – Panoramic views of the city</li>
          <li>Windsor Castle – Residence of the British monarchy</li>
          <li>Lake District – Stunning national park landscapes</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          England offers tea blends, antique maps, royal memorabilia, 
          handmade pottery, and artisanal cheese. Borough Market in London 
          is a must-visit for foodies.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default England;
