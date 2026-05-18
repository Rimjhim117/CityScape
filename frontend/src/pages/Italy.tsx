// src/pages/Italy.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Italy = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Italy.jpg"
          alt="Italy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Captivating Italy</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Italy</h2>
        <p className="text-lg mb-6">
          Italy, a country of timeless beauty, is famous for its art, history, and mouthwatering cuisine.
          From the ancient ruins of Rome to the romantic canals of Venice, and from rolling Tuscan hills
          to the vibrant Amalfi Coast, Italy offers endless charm.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/rome" className="text-blue-600 hover:underline">
              Rome – Eternal City of history
            </Link>
          </li>
          <li>
            <Link to="/cities/venice" className="text-blue-600 hover:underline">
              Venice – Floating city of romance
            </Link>
          </li>
          <li>
            <Link to="/cities/florence" className="text-blue-600 hover:underline">
              Florence – Renaissance art capital
            </Link>
          </li>
          <li>
            <Link to="/cities/milan" className="text-blue-600 hover:underline">
              Milan – Fashion and design hub
            </Link>
          </li>
          <li>
            <Link to="/cities/naples" className="text-blue-600 hover:underline">
              Naples – Gateway to Pompeii
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Colosseum – Ancient Roman amphitheatre</li>
          <li>Leaning Tower of Pisa – Iconic architectural wonder</li>
          <li>Vatican City – Spiritual and artistic treasures</li>
          <li>Amalfi Coast – Breathtaking coastal beauty</li>
          <li>Lake Como – Picturesque lakeside escapes</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Italy is world-famous for pasta, pizza, olive oil, wines, leather goods, and handmade ceramics. 
          Visit local markets like Mercato di San Lorenzo in Florence or Campo de' Fiori in Rome for 
          authentic Italian delicacies and crafts.
        </p>
        
        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Italy;
