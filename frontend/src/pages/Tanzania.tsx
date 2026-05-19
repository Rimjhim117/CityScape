// src/pages/Tanzania.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Tanzania = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Tanzania.jpg"
          alt="Tanzania"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Tanzania
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            Home to Mount Kilimanjaro, the Serengeti, and the beautiful spice island of Zanzibar.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Tanzania</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Tanzania is an East African country known for its vast wilderness areas. They include the plains of 
            Serengeti National Park, a safari mecca populated by the “big five” game, and Kilimanjaro National Park, 
            home to Africa’s highest mountain. Offshore lies the tropical islands of Zanzibar, with Arabic influences 
            and a marine park home to whale sharks and coral reefs.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Dar es Salaam", desc: "The bustling commercial capital and major port city." },
              { name: "Zanzibar City", desc: "Historic coastal city known for Stone Town and beautiful beaches." },
              { name: "Arusha", desc: "The safari capital and gateway to Kilimanjaro and the Serengeti." },
              { name: "Dodoma", desc: "The official political capital of Tanzania." },
              { name: "Mwanza", desc: "The 'Rock City' situated on the shores of Lake Victoria." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-green-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Serengeti National Park", desc: "Famous for the massive annual migration of wildebeest and zebra." },
              { title: "Mount Kilimanjaro", desc: "Africa's highest peak and the world's tallest free-standing mountain." },
              { title: "Zanzibar Archipelago", desc: "Stunning white-sand beaches, clear waters, and the historic Stone Town." },
              { title: "Ngorongoro Crater", desc: "A breathtaking volcanic caldera teeming with wildlife." },
              { title: "Lake Victoria", desc: "Africa's largest lake, offering incredible views and fishing experiences." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-green-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-green-900">💎 Tanzanite:</span>{" "}
              A stunning blue-violet gemstone found exclusively in Tanzania.
            </li>
            <li>
              <span className="font-semibold text-green-900">🎨 Tingatinga Paintings:</span>{" "}
              Colorful, stylized paintings originating in Dar es Salaam, often depicting wildlife.
            </li>
            <li>
              <span className="font-semibold text-green-900">🌿 Spices from Zanzibar:</span>{" "}
              Cloves, nutmeg, cinnamon, and black pepper from the famous Spice Islands.
            </li>
            <li>
              <span className="font-semibold text-green-900">🪵 Makonde Wood Carvings:</span>{" "}
              Intricate, expressive sculptures carved from African blackwood.
            </li>
            <li>
              <span className="font-semibold text-green-900">🧵 Kangas & Kitenges:</span>{" "}
              Vibrantly printed cotton fabrics worn traditionally and used for diverse purposes.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Tanzania ranges from exploring the lively Kariakoo Market in Dar es Salaam to wandering 
            through the narrow, aromatic alleys of Stone Town in Zanzibar. It is a fantastic way to connect with 
            the local culture and find truly unique, locally crafted goods.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tanzania;
