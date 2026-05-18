import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Vanuatu = () => {
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
          src="/assets/Vanuatu.jpg"
          alt="Vanuatu"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Vanuatu
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">About Vanuatu</h2>
        <p className="text-lg mb-6 text-gray-800">
          Vanuatu is a stunning island nation in the South Pacific, known for its tropical
          beauty, active volcanoes, coral reefs, and rich cultural traditions. With over 80
          islands, it offers a mix of adventure, nature, and traditional village life that
          provides visitors with unforgettable experiences.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">
          Top Cities to Visit
        </h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/port-vila" className="text-sky-700 hover:underline">
              Port Vila – Vibrant capital with markets and waterfront views
            </Link>
          </li>
          <li>
            <Link to="/cities/luganville" className="text-sky-700 hover:underline">
              Luganville – Gateway to Espiritu Santo and world-class diving
            </Link>
          </li>
          <li>
            <Link to="/cities/tanna" className="text-sky-700 hover:underline">
              Tanna – Famous for Mount Yasur volcano
            </Link>
          </li>
          <li>
            <Link to="/cities/espiritu-santo" className="text-sky-700 hover:underline">
              Espiritu Santo – Stunning blue holes and pristine beaches
            </Link>
          </li>
        </ul>

        {/* Famous Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">
          Famous Attractions
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li>Mount Yasur – One of the world’s most accessible active volcanoes</li>
          <li>Mele Cascades – Beautiful waterfalls near Port Vila</li>
          <li>Blue Holes of Espiritu Santo – Natural freshwater swimming spots</li>
          <li>SS President Coolidge – Legendary wreck diving site</li>
          <li>Champagne Beach – White sand and turquoise waters</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">
          Local Goods & Markets
        </h3>
        <p className="text-lg mb-6 text-gray-800">
          Vanuatu’s markets are filled with local handicrafts, woven baskets,
          carvings, and fresh tropical produce. Visitors can also enjoy organic
          coffee, kava (a traditional drink), and unique cultural souvenirs
          that reflect the island’s heritage.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Vanuatu;
