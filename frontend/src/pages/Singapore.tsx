// src/pages/Singapore.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Singapore = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-100 to-orange-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Singapore.jpg"
          alt="Singapore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Spectacular Singapore</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Singapore</h2>
        <p className="text-lg mb-6">
          Singapore is a vibrant island city-state known for its futuristic architecture, 
          lush gardens, multicultural heritage, and as a global hub for trade and tourism. 
          A blend of modern innovation and rich traditions makes it a top travel destination.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/marina-bay" className="text-blue-600 hover:underline">
              Marina Bay – Iconic skyline and Marina Bay Sands
            </Link>
          </li>
          <li>
            <Link to="/cities/chinatown" className="text-blue-600 hover:underline">
              Chinatown – Cultural heritage and delicious food
            </Link>
          </li>
          <li>
            <Link to="/cities/little-india" className="text-blue-600 hover:underline">
              Little India – Colorful streets and Indian culture
            </Link>
          </li>
          <li>
            <Link to="/cities/sentosa" className="text-blue-600 hover:underline">
              Sentosa – Resorts, beaches, and attractions
            </Link>
          </li>
          <li>
            <Link to="/cities/orchard-road" className="text-blue-600 hover:underline">
              Orchard Road – Shopping paradise
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Gardens by the Bay – Stunning futuristic gardens</li>
          <li>Merlion Park – The iconic half-lion, half-fish statue</li>
          <li>Singapore Flyer – Giant observation wheel</li>
          <li>Universal Studios Singapore – Family entertainment</li>
          <li>Clarke Quay – Riverside dining and nightlife</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Singapore is famous for souvenirs like Merlion figurines, local snacks, 
          traditional Peranakan crafts, and premium teas. Popular shopping spots include 
          Bugis Street Market and Mustafa Centre.
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

export default Singapore;
