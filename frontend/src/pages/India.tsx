// src/pages/India.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const India = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/India.jpg"
          alt="India"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Incredible India</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About India</h2>
        <p className="text-lg mb-6">
          India, a land of diversity and heritage, is home to ancient temples, bustling cities,
          tranquil backwaters, and towering Himalayan peaks. With its vibrant culture, rich history,
          and varied cuisine, it offers a kaleidoscope of experiences for every traveler.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="list-disc list-inside mb-6">
          <li>New Delhi – Capital city and historical heart</li>
          <li>Mumbai – The city that never sleeps</li>
          <li>Jaipur – The Pink City of palaces</li>
          <li>Varanasi – Spiritual capital on the banks of the Ganges</li>
          <li>Bangalore – Silicon Valley of India</li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Taj Mahal – A symbol of love in Agra</li>
          <li>Golden Temple – Spiritual center in Amritsar</li>
          <li>Kerala Backwaters – Serene and scenic boat tours</li>
          <li>Himalayas – Adventure and spiritual retreats</li>
          <li>Goa Beaches – Relaxation and nightlife</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          India is famous for its spices, handcrafted textiles, jewelry, and artwork. Explore bustling
          markets like Chandni Chowk in Delhi or Colaba Causeway in Mumbai to truly experience the
          essence of local trade.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate('/countries')}
          className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default India;
