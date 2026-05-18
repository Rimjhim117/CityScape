// src/pages/Greece.tsx
import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Greece = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Greece.jpg"
          alt="Greece"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Magical Greece</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Greece</h2>
        <p className="text-lg mb-6">
          Greece, the cradle of Western civilization, is a land of myth, history, and breathtaking beauty.
          From the whitewashed houses of Santorini to the ancient ruins of Athens, it offers a perfect blend
          of culture, sunshine, and sea.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/athens" className="text-blue-600 hover:underline">
              Athens – Ancient landmarks and vibrant streets
            </Link>
          </li>
          <li>
            <Link to="/cities/santorini" className="text-blue-600 hover:underline">
              Santorini – Iconic sunsets and volcanic beaches
            </Link>
          </li>
          <li>
            <Link to="/cities/thessaloniki" className="text-blue-600 hover:underline">
              Thessaloniki – Byzantine history and lively nightlife
            </Link>
          </li>
          <li>
            <Link to="/cities/mykonos" className="text-blue-600 hover:underline">
              Mykonos – Beaches and luxury escapes
            </Link>
          </li>
          <li>
            <Link to="/cities/rhodes" className="text-blue-600 hover:underline">
              Rhodes – Medieval charm and seaside beauty
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Acropolis of Athens – Iconic ancient citadel</li>
          <li>Parthenon – Symbol of classical Greece</li>
          <li>Navagio Beach – Shipwreck Cove in Zakynthos</li>
          <li>Meteora – Monasteries atop towering cliffs</li>
          <li>Delphi – Ancient sanctuary of Apollo</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Greece is known for olive oil, feta cheese, handmade jewelry, and ceramics. Traditional markets like
          Athens Central Market offer fresh produce, spices, and authentic Greek flavors.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Greece;
