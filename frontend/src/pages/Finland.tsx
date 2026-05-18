// src/pages/Finland.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Finland = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-100 to-orange-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Finland.jpg"
          alt="Finland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Magical Finland</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Finland</h2>
        <p className="text-lg mb-6">
          Finland, the land of a thousand lakes, is famous for its pristine nature, 
          northern lights, sauna culture, and innovative cities. It offers a unique 
          blend of tranquility and adventure.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li><Link to="/cities/helsinki" className="text-blue-600 hover:underline">Helsinki – Stylish capital by the sea</Link></li>
          <li><Link to="/cities/rovaniemi" className="text-blue-600 hover:underline">Rovaniemi – Santa Claus Village</Link></li>
          <li><Link to="/cities/turku" className="text-blue-600 hover:underline">Turku – Historic city and archipelago</Link></li>
          <li><Link to="/cities/lapland" className="text-blue-600 hover:underline">Lapland – Northern lights wonderland</Link></li>
          <li><Link to="/cities/kuopio" className="text-blue-600 hover:underline">Kuopio – Lakeside beauty</Link></li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Northern Lights – Spectacular aurora displays in Lapland</li>
          <li>Santa Claus Village – Festive magic year-round in Rovaniemi</li>
          <li>Helsinki Cathedral – Iconic neoclassical landmark</li>
          <li>Suomenlinna Fortress – UNESCO World Heritage sea fortress</li>
          <li>Lake Saimaa – Finland’s largest and most scenic lake</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Finland is known for reindeer leather, wool clothing, handmade knives, 
          cloudberry jam, and traditional wooden crafts. Markets in Helsinki offer 
          authentic Finnish treats.
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

export default Finland;
