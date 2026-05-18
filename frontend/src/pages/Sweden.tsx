import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sweden = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Sweden.jpg"
          alt="Sweden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Scenic Sweden</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Sweden</h2>
        <p className="text-lg mb-6">
          Sweden, located in Northern Europe, is renowned for its stunning natural landscapes,
          innovative cities, and high quality of life. From the northern lights to medieval towns,
          Sweden offers a unique blend of history, culture, and nature.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/stockholm" className="text-blue-600 hover:underline">
              Stockholm – Capital city built on 14 islands
            </Link>
          </li>
          <li>
            <Link to="/cities/gothenburg" className="text-blue-600 hover:underline">
              Gothenburg – Coastal charm and vibrant food scene
            </Link>
          </li>
          <li>
            <Link to="/cities/malmo" className="text-blue-600 hover:underline">
              Malmö – Modern architecture meets history
            </Link>
          </li>
          <li>
            <Link to="/cities/kiruna" className="text-blue-600 hover:underline">
              Kiruna – Gateway to the Northern Lights
            </Link>
          </li>
          <li>
            <Link to="/cities/uppsala" className="text-blue-600 hover:underline">
              Uppsala – University city with rich heritage
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Vasa Museum in Stockholm</li>
          <li>Gamla Stan (Old Town)</li>
          <li>Abisko National Park</li>
          <li>Icehotel in Jukkasjärvi</li>
          <li>Drottningholm Palace</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Sweden is known for handicrafts, glassware from Kosta Boda and Orrefors, wool products,
          cloudberry jam, and Dala horses. Christmas markets and food halls like Östermalms Saluhall
          are popular spots for local shopping.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-blue-500 to-yellow-400 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Sweden;
