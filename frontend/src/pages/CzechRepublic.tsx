import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const CzechRepublic = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/CzechRepublic.jpg"
          alt="Czech Republic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Charming Czech Republic</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Czech Republic</h2>
        <p className="text-lg mb-6">
          The Czech Republic, located in the heart of Europe, is famous for its medieval towns, 
          fairy-tale castles, and world-renowned beer. Its capital, Prague, is one of the most 
          beautiful cities in the world.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/prague" className="text-blue-600 hover:underline">
              Prague – The City of a Hundred Spires
            </Link>
          </li>
          <li>
            <Link to="/cities/cesky-krumlov" className="text-blue-600 hover:underline">
              Český Krumlov – Fairytale riverside town
            </Link>
          </li>
          <li>
            <Link to="/cities/brno" className="text-blue-600 hover:underline">
              Brno – Modern culture and historic charm
            </Link>
          </li>
          <li>
            <Link to="/cities/karlovy-vary" className="text-blue-600 hover:underline">
              Karlovy Vary – Spa city with healing waters
            </Link>
          </li>
          <li>
            <Link to="/cities/olomouc" className="text-blue-600 hover:underline">
              Olomouc – Historic squares and baroque fountains
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Prague Castle – Largest ancient castle in the world</li>
          <li>Charles Bridge – Iconic medieval bridge</li>
          <li>Old Town Square & Astronomical Clock</li>
          <li>Bohemian Switzerland National Park</li>
          <li>Kutná Hora – UNESCO-listed silver mining town</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          The Czech Republic is known for crystal glassware, beer, spa wafers, traditional puppets, 
          and wooden toys. Prague’s Christmas markets are a magical shopping experience.
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

export default CzechRepublic;
