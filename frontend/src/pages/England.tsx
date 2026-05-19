// src/pages/England.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const England = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/England.jpg"
          alt="England"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            England
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A land of deep-rooted history, from ancient stone circles and royal palaces to rolling green countryside and vibrant global cities.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About England</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            England, the largest country in the United Kingdom, boasts a massive global influence relative 
            to its size. It perfectly balances its profound history—visible in towering cathedrals, 
            castles, and Roman ruins—with highly modern, diverse, and fast-paced cities.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "London", desc: "The sprawling, incredibly diverse global capital, home to Big Ben and the Royal Family." },
              { name: "Manchester", desc: "A powerhouse of the North, famous for its industrial heritage, music scene, and football." },
              { name: "Bath", desc: "A stunningly elegant city known for its Roman-built baths and Georgian architecture." },
              { name: "Oxford", desc: "The 'City of Dreaming Spires', centered around its prestigious, ancient university." },
              { name: "York", desc: "A deeply historic walled city featuring a massive Gothic minster and Viking history." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-red-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Stonehenge", desc: "The most famous, incredibly mysterious prehistoric stone circle in the world." },
              { title: "Tower of London", desc: "A historic castle on the River Thames, home to the Crown Jewels and dark history." },
              { title: "The British Museum", desc: "A massive institution in London dedicated to human history, art, and culture." },
              { title: "Lake District", desc: "A breathtakingly beautiful national park known for glacial ribbon lakes and rugged mountains." },
              { title: "Windsor Castle", desc: "The oldest and largest occupied castle in the world, a royal residence for over 900 years." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-red-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-red-900">☕ Fine English Tea:</span>{" "}
              High-quality blends like Earl Grey or English Breakfast, often sold in beautifully designed tins.
            </li>
            <li>
              <span className="font-semibold text-red-900">👔 Tailored Clothing:</span>{" "}
              World-renowned bespoke suits and shirts from the famous tailors of Savile Row.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧀 Cheddar Cheese:</span>{" "}
              Authentic, sharp, cave-aged cheddar sourced directly from the West Country.
            </li>
            <li>
              <span className="font-semibold text-red-900">🏺 Wedgwood Porcelain:</span>{" "}
              Iconic, high-quality fine china and porcelain, historically produced in Staffordshire.
            </li>
            <li>
              <span className="font-semibold text-red-900">🌂 Classic Umbrellas & Rainwear:</span>{" "}
              Handmade, exceptionally durable umbrellas and trench coats necessary for the British weather.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in England ranges from the ultra-luxurious department stores like Harrods in London 
            to the vibrant, eclectic stalls of Camden Market and Borough Market, where you can find 
            incredible artisanal foods and vintage goods.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default England;
