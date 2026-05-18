// src/pages/Bangladesh.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Bangladesh = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-100 to-green-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Bangladesh.jpg"
          alt="Bangladesh"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Beautiful Bangladesh</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Bangladesh</h2>
        <p className="text-lg mb-6">
          Bangladesh is a country of rivers, lush greenery, and rich cultural heritage. 
          Known for its warm hospitality and vibrant traditions, it offers visitors 
          a chance to experience scenic beauty, history, and bustling urban life.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/dhaka" className="text-blue-600 hover:underline">
              Dhaka – Lively capital with rich history
            </Link>
          </li>
          <li>
            <Link to="/cities/chittagong" className="text-blue-600 hover:underline">
              Chittagong – Gateway to the Hill Tracts and beaches
            </Link>
          </li>
          <li>
            <Link to="/cities/sylhet" className="text-blue-600 hover:underline">
              Sylhet – Tea gardens and rolling hills
            </Link>
          </li>
          <li>
            <Link to="/cities/khulna" className="text-blue-600 hover:underline">
              Khulna – Gateway to the Sundarbans
            </Link>
          </li>
          <li>
            <Link to="/cities/rajshahi" className="text-blue-600 hover:underline">
              Rajshahi – Mango capital and historical sites
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Sundarbans Mangrove Forest – Home of the Bengal tiger</li>
          <li>Cox’s Bazar – Longest natural sea beach in the world</li>
          <li>Srimangal – Tea capital of Bangladesh</li>
          <li>Sixty Dome Mosque in Bagerhat</li>
          <li>Lalbagh Fort – Mughal-era fortress</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Bangladesh is famous for jute products, muslin fabrics, handicrafts, and spices. 
          Visit New Market in Dhaka or local bazaars for authentic shopping experiences.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Bangladesh;
