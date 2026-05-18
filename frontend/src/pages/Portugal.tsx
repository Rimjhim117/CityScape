// src/pages/Portugal.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Portugal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-100 to-orange-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Portugal.jpg"
          alt="Portugal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Picturesque Portugal</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Portugal</h2>
        <p className="text-lg mb-6">
          Portugal is a stunning European destination known for its golden beaches, historic cities,
          delicious cuisine, and warm Mediterranean climate. From ancient castles to charming fishing
          villages, Portugal offers a blend of tradition and modern living.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/lisbon" className="text-blue-600 hover:underline">
              Lisbon – Capital city with historic neighborhoods
            </Link>
          </li>
          <li>
            <Link to="/cities/porto" className="text-blue-600 hover:underline">
              Porto – Famous for port wine and riverside views
            </Link>
          </li>
          <li>
            <Link to="/cities/algarve" className="text-blue-600 hover:underline">
              Algarve – Stunning beaches and coastal cliffs
            </Link>
          </li>
          <li>
            <Link to="/cities/coimbra" className="text-blue-600 hover:underline">
              Coimbra – University city rich in culture
            </Link>
          </li>
          <li>
            <Link to="/cities/evora" className="text-blue-600 hover:underline">
              Évora – UNESCO-listed historic center
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Belém Tower – Iconic Lisbon landmark</li>
          <li>Pena Palace – Fairy-tale castle in Sintra</li>
          <li>Douro Valley – Scenic wine region</li>
          <li>Jerónimos Monastery – Architectural masterpiece</li>
          <li>Benagil Cave – Breathtaking sea cave</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Portugal is famous for cork products, azulejos (ceramic tiles), port wine, olive oil,
          and traditional pastries like Pastéis de Nata. Local markets and artisan shops can be
          found in every major city.
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

export default Portugal;
