// src/pages/Spain.tsx
import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Spain = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-200">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Spain.jpg"
          alt="Spain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Vibrant Spain</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Spain</h2>
        <p className="text-lg mb-6">
          Spain is a country of sun, passion, and vibrant culture. From flamenco rhythms in Andalusia
          to the architectural wonders of Barcelona and Madrid’s bustling nightlife, Spain is a 
          paradise for travelers seeking history, art, and Mediterranean charm.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/barcelona" className="text-blue-600 hover:underline">
              Barcelona – Gaudí’s masterpieces and beaches
            </Link>
          </li>
          <li>
            <Link to="/cities/madrid" className="text-blue-600 hover:underline">
              Madrid – Royal palace and vibrant plazas
            </Link>
          </li>
          <li>
            <Link to="/cities/seville" className="text-blue-600 hover:underline">
              Seville – Flamenco and Moorish heritage
            </Link>
          </li>
          <li>
            <Link to="/cities/valencia" className="text-blue-600 hover:underline">
              Valencia – City of Arts and Sciences
            </Link>
          </li>
          <li>
            <Link to="/cities/granada" className="text-blue-600 hover:underline">
              Granada – Alhambra and charming streets
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Sagrada Família – Barcelona’s iconic basilica</li>
          <li>Alhambra – Moorish palace in Granada</li>
          <li>Park Güell – Gaudí’s colorful park</li>
          <li>La Rambla – Lively street in Barcelona</li>
          <li>Running of the Bulls – Pamplona’s famous festival</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Spain is famous for olive oil, jamón ibérico, ceramics, flamenco dresses, and hand-painted fans.
          Wander through markets like Madrid’s El Rastro or Barcelona’s La Boqueria to discover authentic
          Spanish flavors and crafts.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Spain;
