import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Tonga = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "australia";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        {/* Background Image */}
        <img
          src="/assets/Tonga.jpg"
          alt="Tonga"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Tonga
          </h1>
        </div>
      </div>

      {/* About Section with only gradient */}
      <section className="px-6 md:px-20 py-10 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">About Tonga</h2>
        <p className="text-lg mb-6 text-gray-800">
          Tonga, known as the "Friendly Islands," is a Polynesian kingdom made
          up of more than 170 islands, many uninhabited. It offers stunning
          beaches, crystal-clear waters, coral reefs, and a vibrant culture
          rooted in traditions and royal heritage. Tonga is one of the few
          Pacific nations never colonized, preserving its strong cultural
          identity.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">
          Top Cities to Visit
        </h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/nuku-alofa" className="text-sky-700 hover:underline">
              Nukuʻalofa – The lively capital with royal palaces
            </Link>
          </li>
          <li>
            <Link to="/cities/neiafu" className="text-sky-700 hover:underline">
              Neiafu – Scenic harbor and gateway to Vavaʻu Islands
            </Link>
          </li>
          <li>
            <Link to="/cities/pangai" className="text-sky-700 hover:underline">
              Pangai – Traditional town on Lifuka Island
            </Link>
          </li>
          <li>
            <Link to="/cities/haapai" className="text-sky-700 hover:underline">
              Haʻapai – Peaceful island group with pristine beaches
            </Link>
          </li>
        </ul>

        {/* Famous Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">
          Famous Attractions
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li>Mapuʻa ʻa Vaea Blowholes – Powerful ocean geysers</li>
          <li>ʻEua National Park – Dense rainforest and rugged cliffs</li>
          <li>Haʻamonga ʻa Maui – Ancient trilithon stone monument</li>
          <li>Vavaʻu Islands – Whale watching and sailing paradise</li>
          <li>Anahulu Cave – Underground freshwater pools</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">
          Local Goods & Markets
        </h3>
        <p className="text-lg mb-6 text-gray-800">
          Tonga is famous for its traditional woven mats, tapa cloth, wood
          carvings, and fresh produce from local markets. Visitors can also
          enjoy locally made vanilla, root crops, and handicrafts that reflect
          the island’s Polynesian heritage.
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

export default Tonga;
