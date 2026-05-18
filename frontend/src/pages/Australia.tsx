// src/pages/Australia.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Australia = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "australia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Australia.jpg"
          alt="Australia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Amazing Australia</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Australia</h2>
        <p className="text-lg mb-6">
          Australia is a vast and diverse country known for its stunning natural landscapes,
          vibrant cities, unique wildlife, and a laid-back lifestyle. From golden beaches to
          the rugged outback, it offers adventures for every traveler.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/sydney" className="text-blue-600 hover:underline">
              Sydney – Iconic Opera House and Harbour Bridge
            </Link>
          </li>
          <li>
            <Link to="/cities/melbourne" className="text-blue-600 hover:underline">
              Melbourne – Cultural hub and laneway cafes
            </Link>
          </li>
          <li>
            <Link to="/cities/brisbane" className="text-blue-600 hover:underline">
              Brisbane – Sunshine and riverside charm
            </Link>
          </li>
          <li>
            <Link to="/cities/perth" className="text-blue-600 hover:underline">
              Perth – Beaches and nature escapes
            </Link>
          </li>
          <li>
            <Link to="/cities/cairns" className="text-blue-600 hover:underline">
              Cairns – Gateway to the Great Barrier Reef
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Great Barrier Reef – World’s largest coral reef system</li>
          <li>Uluru (Ayers Rock) – Sacred red rock in the Outback</li>
          <li>Bondi Beach – Iconic surf and sand spot</li>
          <li>Blue Mountains – Scenic hikes and lookouts</li>
          <li>Kangaroo Island – Unique wildlife and landscapes</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Australia offers unique products like opals, aboriginal art, locally made wines,
          surf gear, and gourmet treats such as Tim Tams and macadamia nuts.
          Popular shopping spots include The Rocks Markets in Sydney and Queen Victoria Market in Melbourne.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Australia;
