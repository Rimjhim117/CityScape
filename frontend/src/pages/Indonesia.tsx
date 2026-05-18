import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Indonesia = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-100 to-red-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Indonesia.jpg"
          alt="Indonesia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Island Wonders of Indonesia</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Indonesia</h2>
        <p className="text-lg mb-6">
          Indonesia is a sprawling archipelago of over 17,000 islands, offering stunning beaches,
          active volcanoes, ancient temples, and vibrant cultures. From Bali’s serene shores to
          Yogyakarta’s royal heritage, Indonesia is a land of diverse beauty.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/jakarta" className="text-blue-600 hover:underline">
              Jakarta – Bustling capital city full of modern energy and historical sites
            </Link>
          </li>
          <li>
            <Link to="/cities/bali" className="text-blue-600 hover:underline">
              Bali – Famed for beaches, surf, temples, and digital nomad vibes
            </Link>
          </li>
          <li>
            <Link to="/cities/yogyakarta" className="text-blue-600 hover:underline">
              Yogyakarta – Cultural heartland known for temples and traditions
            </Link>
          </li>
          <li>
            <Link to="/cities/medan" className="text-blue-600 hover:underline">
              Medan – Gateway to Lake Toba and Sumatran cuisine
            </Link>
          </li>
          <li>
            <Link to="/cities/makassar" className="text-blue-600 hover:underline">
              Makassar – Port city known for sea trade and seafood
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Borobudur Temple – UNESCO site and world’s largest Buddhist temple</li>
          <li>Mount Bromo – Active volcano with sunrise hikes</li>
          <li>Komodo National Park – Home of the famous Komodo dragons</li>
          <li>Ubud – Cultural and artistic center of Bali</li>
          <li>Lake Toba – One of the world’s largest volcanic lakes</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Explore batik textiles, silver jewelry, traditional masks, and locally sourced coffee.
          Don’t miss markets like Ubud Art Market or Pasar Badung in Denpasar for authentic crafts.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate('/country/asia')}
          className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Indonesia;
