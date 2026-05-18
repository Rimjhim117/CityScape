// src/pages/China.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const China = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/China.jpg"
          alt="China"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Charming China</h1>
        </div>
      </div>
      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About China</h2>
        <p className="text-lg mb-6">
          China, one of the world’s oldest civilizations, is a fascinating blend of ancient traditions and rapid modernization.
          From the iconic Great Wall to futuristic skylines in cities like Shanghai, China’s landscape is as diverse as its culture and history.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/beijing" className="text-blue-600 hover:underline">
              Beijing – Capital city with imperial landmarks
            </Link>
          </li>
          <li>
            <Link to="/cities/shanghai" className="text-blue-600 hover:underline">
              Shanghai – Global financial hub with skyline views
            </Link>
          </li>
          <li>
            <Link to="/cities/xian" className="text-blue-600 hover:underline">
              Xi'an – Home of the Terracotta Army
            </Link>
          </li>
          <li>
            <Link to="/cities/chengdu" className="text-blue-600 hover:underline">
              Chengdu – Panda capital and spicy cuisine hotspot
            </Link>
          </li>
          <li>
            <Link to="/cities/guangzhou" className="text-blue-600 hover:underline">
              Guangzhou – Historic trading port with Cantonese flair
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>The Great Wall of China – A marvel of ancient engineering</li>
          <li>The Forbidden City – Imperial palace complex in Beijing</li>
          <li>Li River – Stunning karst mountain scenery</li>
          <li>Zhangjiajie – Avatar-style mountains and glass bridge</li>
          <li>Temple of Heaven – A serene spiritual retreat in Beijing</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Explore traditional Chinese crafts like porcelain, silk, jade jewelry, and calligraphy.
          Bustling street markets in cities like Shanghai and Xi’an offer an immersive shopping experience with local snacks, antiques, and souvenirs.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate('/country/asia')}
          className="bg-gradient-to-r from-red-400 to-yellow-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default China;
