// src/pages/Bhutan.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Bhutan = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-100 to-orange-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Bhutan.jpg"
          alt="Bhutan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Beautiful Bhutan</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Bhutan</h2>
        <p className="text-lg mb-6">
          Bhutan, known as the "Land of the Thunder Dragon," is a Himalayan kingdom 
          famous for its pristine landscapes, Buddhist culture, and emphasis on Gross National Happiness. 
          This peaceful nation offers breathtaking views, sacred monasteries, and warm hospitality.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/paro" className="text-blue-600 hover:underline">
              Paro – Gateway to Tiger’s Nest Monastery
            </Link>
          </li>
          <li>
            <Link to="/cities/thimphu" className="text-blue-600 hover:underline">
              Thimphu – The serene capital city
            </Link>
          </li>
          <li>
            <Link to="/cities/punakha" className="text-blue-600 hover:underline">
              Punakha – Famous for Punakha Dzong
            </Link>
          </li>
          <li>
            <Link to="/cities/bumthang" className="text-blue-600 hover:underline">
              Bumthang – Cultural heartland of Bhutan
            </Link>
          </li>
          <li>
            <Link to="/cities/phobjikha" className="text-blue-600 hover:underline">
              Phobjikha Valley – Winter home of black-necked cranes
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Tiger’s Nest Monastery – Iconic cliffside temple</li>
          <li>Punakha Dzong – Stunning riverside fortress</li>
          <li>Dochula Pass – Panoramic Himalayan views</li>
          <li>Phobjikha Valley – Wildlife and scenic beauty</li>
          <li>National Memorial Chorten – Spiritual landmark in Thimphu</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Bhutan is known for traditional handicrafts, woven textiles, handmade paper, 
          and Bhutanese chili blends. Popular spots include Thimphu Craft Bazaar and Paro’s local markets.
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

export default Bhutan;
