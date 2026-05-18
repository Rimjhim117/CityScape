// src/pages/Malaysia.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Malaysia = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia"; 

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-100 to-teal-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Malaysia.jpg"
          alt="Malaysia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Magical Malaysia</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Malaysia</h2>
        <p className="text-lg mb-6">
          Malaysia is a melting pot of cultures, offering a blend of modern cities, tropical beaches, 
          lush rainforests, and rich heritage. Known for its delicious street food, vibrant festivals, 
          and stunning natural landscapes, Malaysia is a must-visit destination for travelers.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/kuala-lumpur" className="text-blue-600 hover:underline">
              Kuala Lumpur – Modern skyline and cultural diversity
            </Link>
          </li>
          <li>
            <Link to="/cities/george-town" className="text-blue-600 hover:underline">
              George Town – Colonial charm and street art
            </Link>
          </li>
          <li>
            <Link to="/cities/malacca" className="text-blue-600 hover:underline">
              Malacca – Historical city with rich heritage
            </Link>
          </li>
          <li>
            <Link to="/cities/kota-kinabalu" className="text-blue-600 hover:underline">
              Kota Kinabalu – Gateway to Borneo's natural wonders
            </Link>
          </li>
          <li>
            <Link to="/cities/ipoh" className="text-blue-600 hover:underline">
              Ipoh – Food paradise and colonial architecture
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Petronas Twin Towers – Iconic skyscrapers in Kuala Lumpur</li>
          <li>Langkawi – Island paradise with beaches and cable cars</li>
          <li>Batu Caves – Colorful Hindu temple in limestone caves</li>
          <li>Taman Negara – One of the world's oldest rainforests</li>
          <li>Mount Kinabalu – Malaysia's highest peak</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Malaysia is famous for its batik fabrics, handmade crafts, tropical fruits, and aromatic spices. 
          Explore night markets like Petaling Street in Kuala Lumpur or Jonker Street in Malacca 
          for unique finds and delicious street food.
        </p>
        
        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Malaysia;
