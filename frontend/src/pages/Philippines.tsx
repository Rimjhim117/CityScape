// src/pages/Philippines.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Philippines = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia"; 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-100 to-teal-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Philippines.jpg"
          alt="Philippines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Paradise Philippines</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About the Philippines</h2>
        <p className="text-lg mb-6">
          The Philippines is an archipelago of over 7,000 islands, known for its crystal-clear waters,
          white sand beaches, vibrant festivals, and warm hospitality. From bustling cities to serene islands, 
          the Philippines offers diverse experiences for every traveler.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/manila" className="text-blue-600 hover:underline">
              Manila – Capital city with rich history and modern flair
            </Link>
          </li>
          <li>
            <Link to="/cities/cebu" className="text-blue-600 hover:underline">
              Cebu – Beaches, diving spots, and cultural heritage
            </Link>
          </li>
          <li>
            <Link to="/cities/davao" className="text-blue-600 hover:underline">
              Davao – Known for durian and Mount Apo
            </Link>
          </li>
          <li>
            <Link to="/cities/iloilo" className="text-blue-600 hover:underline">
              Iloilo – Spanish colonial churches and food culture
            </Link>
          </li>
          <li>
            <Link to="/cities/baguio" className="text-blue-600 hover:underline">
              Baguio – The summer capital of the Philippines
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Boracay – Famous for its powdery white sand beaches</li>
          <li>Chocolate Hills – Unique geological formations in Bohol</li>
          <li>Puerto Princesa Underground River – UNESCO World Heritage Site</li>
          <li>Palawan – Pristine islands and lagoons</li>
          <li>Vigan – Spanish colonial architecture and heritage streets</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          From handmade crafts and woven fabrics to dried mangoes and local coffee, 
          the Philippines offers a variety of unique goods. Visit public markets like 
          Divisoria in Manila or Carbon Market in Cebu for a truly local shopping experience.
        </p>
        
        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Philippines;
