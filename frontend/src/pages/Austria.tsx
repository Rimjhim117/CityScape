import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Austria = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-100 to-orange-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Austria.jpg"
          alt="Austria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Amazing Austria</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Austria</h2>
        <p className="text-lg mb-6">
          Austria is a landlocked gem in Central Europe known for its stunning Alpine landscapes,
          imperial history, classical music heritage, and charming cities. It’s a paradise for
          winter sports lovers and culture enthusiasts alike.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/vienna" className="text-blue-600 hover:underline">
              Vienna – Elegant palaces, coffee culture, and music
            </Link>
          </li>
          <li>
            <Link to="/cities/salzburg" className="text-blue-600 hover:underline">
              Salzburg – Mozart’s birthplace and baroque beauty
            </Link>
          </li>
          <li>
            <Link to="/cities/innsbruck" className="text-blue-600 hover:underline">
              Innsbruck – Alpine skiing and colorful architecture
            </Link>
          </li>
          <li>
            <Link to="/cities/hallstatt" className="text-blue-600 hover:underline">
              Hallstatt – Fairytale lakeside village
            </Link>
          </li>
          <li>
            <Link to="/cities/graz" className="text-blue-600 hover:underline">
              Graz – UNESCO-listed old town
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Schönbrunn Palace – Magnificent imperial residence</li>
          <li>Hallstatt Lake – Breathtaking alpine scenery</li>
          <li>Hofburg Palace – Former seat of the Habsburgs</li>
          <li>Salzburg Fortress – Stunning medieval structure</li>
          <li>Grossglockner High Alpine Road – Scenic mountain drive</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Austria is famous for products like Mozartkugel chocolates, crystal from Swarovski,
          Viennese coffee blends, and alpine cheeses. Christmas markets in Vienna and Salzburg
          are a must-visit for handmade crafts and festive treats.
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

export default Austria;
