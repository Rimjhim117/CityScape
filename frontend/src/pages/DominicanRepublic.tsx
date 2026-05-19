// src/pages/DominicanRepublic.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const DominicanRepublic = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "north-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Dominican Republic.jpg"
          alt="Dominican Republic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Dominican Republic
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The heart of the Caribbean — where passionate merengue, pristine beaches, and deep colonial history meet.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About the Dominican Republic</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Sharing the island of Hispaniola with Haiti, the Dominican Republic is the second-largest and most diverse 
            country in the Caribbean. It boasts stunning mountain ranges, arid deserts, and hundreds of miles of 
            world-class coastline, all deeply infused with a vibrant, welcoming culture.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Santo Domingo", desc: "The capital and the oldest continuously inhabited European settlement in the Americas." },
              { name: "Punta Cana", desc: "The famous resort town renowned for its incredible white-sand beaches." },
              { name: "Puerto Plata", desc: "A scenic coastal city backed by the towering Mount Isabel de Torres." },
              { name: "Santiago de los Caballeros", desc: "The industrial center of the country, famous for its cigar production." },
              { name: "Cabarete", desc: "A vibrant, bohemian beach town known globally as a kitesurfing paradise." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-blue-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Zona Colonial", desc: "The historic heart of Santo Domingo, filled with 16th-century Spanish architecture." },
              { title: "Bávaro Beach", desc: "Punta Cana's most famous and stunningly beautiful palm-fringed beach." },
              { title: "Los Haitises National Park", desc: "A spectacular park of mangrove forests, caverns, and limestone karsts." },
              { title: "27 Waterfalls of Damajagua", desc: "An exhilarating natural water park hidden in the northern hills." },
              { title: "Pico Duarte", desc: "The highest mountain peak in all of the Caribbean, offering incredible treks." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-blue-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-blue-900">💎 Larimar:</span>{" "}
              A rare, stunning blue gemstone found exclusively in the Dominican Republic.
            </li>
            <li>
              <span className="font-semibold text-blue-900"> Amber:</span>{" "}
              Fossilized tree resin, often containing prehistoric insects, crafted into beautiful jewelry.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🚬 Premium Cigars:</span>{" "}
              Hand-rolled cigars from the Cibao Valley, rivaling the best in the world.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🍶 Mamajuana:</span>{" "}
              A traditional, spiced rum-and-wine drink steeped with tree bark and herbs.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🎨 Faceless Dolls (Muñecas Limé):</span>{" "}
              Iconic ceramic dolls representing the country's mixed cultural heritage.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in the DR is vibrant and colorful. Strolling down Calle El Conde in the Zona Colonial 
            or visiting artisan markets in Puerto Plata allows you to find these unique, authentic treasures 
            directly from the craftsmen.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default DominicanRepublic;
