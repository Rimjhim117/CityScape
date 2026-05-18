// src/pages/France.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const France = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/France.jpg"
          alt="France"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Enchanting France</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About France</h2>
        <p className="text-lg mb-6">
          France, a country of romance, art, and culinary excellence, is known for its charming villages,
          iconic landmarks, and rich cultural heritage. From the fashion capital of Paris to the sunny
          beaches of the French Riviera, every corner offers something unique.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/paris" className="text-blue-600 hover:underline">
              Paris – The City of Light and romance
            </Link>
          </li>
          <li>
            <Link to="/cities/nice" className="text-blue-600 hover:underline">
              Nice – Gateway to the French Riviera
            </Link>
          </li>
          <li>
            <Link to="/cities/lyon" className="text-blue-600 hover:underline">
              Lyon – Capital of gastronomy
            </Link>
          </li>
          <li>
            <Link to="/cities/marseille" className="text-blue-600 hover:underline">
              Marseille – Historic port city
            </Link>
          </li>
          <li>
            <Link to="/cities/bordeaux" className="text-blue-600 hover:underline">
              Bordeaux – World-famous wine region
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Eiffel Tower – Iconic symbol of Paris</li>
          <li>Louvre Museum – Home to the Mona Lisa</li>
          <li>Palace of Versailles – Grandeur of French royalty</li>
          <li>Mont Saint-Michel – Magical island commune</li>
          <li>Provence Lavender Fields – Stunning seasonal blooms</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          France is renowned for its fine wines, cheeses, pastries, perfumes, and fashion. 
          Visit bustling markets like Marché Bastille in Paris or Cours Saleya in Nice to 
          experience authentic French flavors and crafts.
        </p>
        
        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-blue-400 to-pink-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default France;
