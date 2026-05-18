import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Norway = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-100 to-green-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Norway.jpg"
          alt="Norway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Natural Norway</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Norway</h2>
        <p className="text-lg mb-6">
          Norway is a Scandinavian wonderland famous for its dramatic fjords, northern lights, 
          and midnight sun. From vibrant cities to untouched wilderness, it offers some of the 
          most breathtaking landscapes in the world.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/oslo" className="text-blue-600 hover:underline">
              Oslo – Cultural capital with museums and modern design
            </Link>
          </li>
          <li>
            <Link to="/cities/bergen" className="text-blue-600 hover:underline">
              Bergen – Gateway to the fjords
            </Link>
          </li>
          <li>
            <Link to="/cities/trondheim" className="text-blue-600 hover:underline">
              Trondheim – Historic charm and Nidaros Cathedral
            </Link>
          </li>
          <li>
            <Link to="/cities/tromso" className="text-blue-600 hover:underline">
              Tromsø – Best place for Northern Lights
            </Link>
          </li>
          <li>
            <Link to="/cities/alesund" className="text-blue-600 hover:underline">
              Ålesund – Art Nouveau architecture and coastal views
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Geirangerfjord – UNESCO-listed fjord</li>
          <li>Preikestolen (Pulpit Rock) – Cliff with spectacular views</li>
          <li>Lofoten Islands – Dramatic landscapes and fishing villages</li>
          <li>North Cape – Northernmost point of Europe</li>
          <li>Vigeland Sculpture Park – Iconic Oslo landmark</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Norway is known for salmon, wool sweaters, reindeer leather goods, cloudberry jam, 
          and handmade wooden crafts. Seasonal Christmas markets in Oslo and Bergen offer 
          festive foods and traditional gifts.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Norway;
