import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Hungary = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Hungary.jpg"
          alt="Hungary"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Historic Hungary</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Hungary</h2>
        <p className="text-lg mb-6">
          Hungary, located in Central Europe, is famous for its rich history, stunning architecture,
          and relaxing thermal baths. The capital, Budapest, is often called the "Paris of the East"
          and is split by the beautiful Danube River.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/budapest" className="text-blue-600 hover:underline">
              Budapest – Capital city with iconic Parliament Building
            </Link>
          </li>
          <li>
            <Link to="/cities/debrecen" className="text-blue-600 hover:underline">
              Debrecen – Cultural hub of Eastern Hungary
            </Link>
          </li>
          <li>
            <Link to="/cities/eger" className="text-blue-600 hover:underline">
              Eger – Baroque architecture and wine region
            </Link>
          </li>
          <li>
            <Link to="/cities/pecs" className="text-blue-600 hover:underline">
              Pécs – Mediterranean-style city
            </Link>
          </li>
          <li>
            <Link to="/cities/lake-balaton" className="text-blue-600 hover:underline">
              Lake Balaton – Largest lake in Central Europe
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Parliament Building in Budapest</li>
          <li>Buda Castle and Fisherman’s Bastion</li>
          <li>Széchenyi Thermal Bath</li>
          <li>Lake Balaton resorts</li>
          <li>Hortobágy National Park</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Hungary is known for paprika, Tokaji wine, porcelain from Herend, handmade embroidery,
          and salami. Budapest’s Central Market Hall is a must-visit for authentic goods.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/country/${continent}`)}
          className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Hungary;
