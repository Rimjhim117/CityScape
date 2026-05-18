import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Poland = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Poland.jpg"
          alt="Poland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Picturesque Poland</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Poland</h2>
        <p className="text-lg mb-6">
          Poland, located in Central Europe, is known for its medieval architecture, vibrant cities,
          and breathtaking natural landscapes. From historic Kraków to the Baltic Sea coast, Poland
          offers a mix of history, culture, and scenic beauty.
        </p>

        {/* Top Areas */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Areas to Explore</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/krakow" className="text-blue-600 hover:underline">
              Kraków – Historic city with Wawel Castle
            </Link>
          </li>
          <li>
            <Link to="/cities/warsaw" className="text-blue-600 hover:underline">
              Warsaw – Capital with a blend of old and new
            </Link>
          </li>
          <li>
            <Link to="/cities/gdansk" className="text-blue-600 hover:underline">
              Gdańsk – Port city with colorful architecture
            </Link>
          </li>
          <li>
            <Link to="/cities/zakopane" className="text-blue-600 hover:underline">
              Zakopane – Gateway to the Tatra Mountains
            </Link>
          </li>
          <li>
            <Link to="/cities/wroclaw" className="text-blue-600 hover:underline">
              Wrocław – City of bridges and colorful squares
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Wawel Castle in Kraków</li>
          <li>Auschwitz-Birkenau Memorial and Museum</li>
          <li>Old Town Warsaw – UNESCO World Heritage Site</li>
          <li>Białowieża Forest – Europe's last primeval forest</li>
          <li>Masurian Lake District</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Poland is known for amber jewelry, Bolesławiec pottery, traditional wool products,
          pierogi, and smoked cheese from the mountains. Local markets are perfect for handmade crafts.
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

export default Poland;
