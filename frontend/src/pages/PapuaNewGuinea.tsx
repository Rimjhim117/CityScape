import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PapuaNewGuinea = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "australia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/PapuaNewGuinea.jpg"
          alt="Papua New Guinea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Papua New Guinea</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">About Papua New Guinea</h2>
        <p className="text-lg mb-6 text-gray-700">
          Papua New Guinea, located in the southwestern Pacific, is one of the most culturally diverse 
          nations in the world, with hundreds of indigenous languages and traditions. Known for its 
          rugged mountains, lush rainforests, and pristine coral reefs, the country is a paradise for 
          adventurers and culture enthusiasts alike.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/port-moresby" className="text-indigo-600 hover:underline">
              Port Moresby – The vibrant capital city
            </Link>
          </li>
          <li>
            <Link to="/cities/mt-hagen" className="text-indigo-600 hover:underline">
              Mount Hagen – Cultural festivals and highlands
            </Link>
          </li>
          <li>
            <Link to="/cities/lae" className="text-indigo-600 hover:underline">
              Lae – Gateway to the Highlands
            </Link>
          </li>
          <li>
            <Link to="/cities/rabaul" className="text-indigo-600 hover:underline">
              Rabaul – Volcanoes and WWII history
            </Link>
          </li>
          <li>
            <Link to="/cities/madang" className="text-indigo-600 hover:underline">
              Madang – Beautiful diving and beaches
            </Link>
          </li>
        </ul>

        {/* Famous Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Kokoda Track – Historic WWII trekking route</li>
          <li>Tufi Fjords – Stunning scenery and diving spots</li>
          <li>Sepik River – Traditional villages and culture</li>
          <li>Mount Wilhelm – Highest peak and trekking adventure</li>
          <li>Kimbe Bay – World-class coral reefs</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">Local Goods & Markets</h3>
        <p className="text-lg mb-6 text-gray-700">
          Local goods in Papua New Guinea include traditional carvings, woven bilum bags, shell jewelry, 
          and coffee grown in the Highlands. Visiting local markets offers a glimpse into the country's 
          rich artistic traditions and daily life.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default PapuaNewGuinea;
