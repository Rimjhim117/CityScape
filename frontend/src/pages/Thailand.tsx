// src/pages/Thailand.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Thailand = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Thailand.jpg"
          alt="Thailand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Timeless Thailand</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Thailand</h2>
        <p className="text-lg mb-6">
          Thailand, known as the Land of Smiles, is a captivating blend of golden temples, vibrant street life,
          tropical beaches, and rich cultural heritage. Whether you're exploring ancient ruins or island hopping,
          Thailand offers unforgettable experiences.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/bangkok" className="text-blue-600 hover:underline">
              Bangkok – Bustling capital with temples and nightlife
            </Link>
          </li>
          <li>
            <Link to="/cities/chiangmai" className="text-blue-600 hover:underline">
              Chiang Mai – Mountain town with ancient temples
            </Link>
          </li>
          <li>
            <Link to="/cities/phuket" className="text-blue-600 hover:underline">
              Phuket – Tropical island paradise
            </Link>
          </li>
          <li>
            <Link to="/cities/pattaya" className="text-blue-600 hover:underline">
              Pattaya – Beachfront city known for entertainment
            </Link>
          </li>
          <li>
            <Link to="/cities/ayutthaya" className="text-blue-600 hover:underline">
              Ayutthaya – Historical ruins of the ancient capital
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Grand Palace – Royal complex in Bangkok</li>
          <li>Wat Arun – Temple of Dawn by the Chao Phraya River</li>
          <li>Phi Phi Islands – Crystal clear waters and beaches</li>
          <li>Doi Suthep – Mountain temple near Chiang Mai</li>
          <li>Floating Markets – Unique shopping on water</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Thailand’s markets are bursting with color and character. Discover handwoven Thai silk, coconut-based products,
          wooden carvings, herbal balms, and delicious snacks. Chatuchak Market in Bangkok and Chiang Mai’s Night Bazaar
          are must-visits for local shopping.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate('/country/asia')}
          className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Thailand;
