// src/pages/SolomonIslands.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const SolomonIslands = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "oceania";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Solomon Islands.jpg"
          alt="Solomon Islands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Solomon Islands
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            An unspoiled frontier of hundreds of tropical islands, famous for WWII history, incredible diving, and vibrant marine life.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-teal-900 mb-6">About the Solomon Islands</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            The Solomon Islands remain one of the least visited and most pristine destinations in the South Pacific. 
            It is an archipelago of nearly 1,000 islands, offering a raw, deeply authentic experience. It is globally 
            revered by scuba divers for its incredibly rich coral reefs and massive collection of sunken WWII shipwrecks.
          </p>
        </section>

        {/* Top Destinations */}
        <section>
          <h3 className="text-3xl font-semibold text-teal-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Honiara", desc: "The bustling capital city on the island of Guadalcanal, rich in WWII history." },
              { name: "Gizo", desc: "The capital of the Western Province, a stunning hub for diving and island hopping." },
              { name: "Munda", desc: "A coastal settlement in the Roviana Lagoon, famous for its incredible WWII wrecks." },
              { name: "Auki", desc: "The capital of Malaita Province, known for traditional shell money making." },
              { name: "Marovo Lagoon", desc: "The longest saltwater lagoon in the world, renowned for eco-tourism and wood carvings." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-teal-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-teal-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Iron Bottom Sound", desc: "A stretch of water holding dozens of sunken WWII ships and aircraft." },
              { title: "Kennedy Island", desc: "A tiny, beautiful island where JFK and his crew washed ashore during WWII." },
              { title: "Skull Island", desc: "A sacred, eerie island in the Vona Vona Lagoon housing the skulls of ancient chiefs." },
              { title: "Tenaru Falls", desc: "A spectacular, powerful 60-meter waterfall hidden deep in the Guadalcanal jungle." },
              { title: "Langa Langa Lagoon", desc: "Famous for its artificial islands built of coral and traditional shell money." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-teal-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-teal-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-teal-900">🪵 Nguzunguzu Wood Carvings:</span>{" "}
              Iconic, intricate wooden figureheads inlaid with nautilus shell, traditionally used on war canoes.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🐚 Shell Money (Tafuliae):</span>{" "}
              Traditional currency made from carefully polished red, white, and black shells, still used in ceremonies today.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🧺 Woven Buka Baskets:</span>{" "}
              Extremely fine, tightly woven, and highly durable baskets originating from the region.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🥥 Local Copra & Coconut Oil:</span>{" "}
              High-quality coconut products which form a major part of the local economy.
            </li>
            <li>
              <span className="font-semibold text-teal-900">📿 Custom Jewelry:</span>{" "}
              Beautiful necklaces and bracelets made from local shells, seeds, and carved wood.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Central Market in Honiara is a fantastic, bustling place to buy fresh produce and catch a glimpse 
            of local life. However, for the famous wood carvings, visiting the artisan villages in Marovo Lagoon 
            is a truly special experience.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-teal-600 to-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolomonIslands;
