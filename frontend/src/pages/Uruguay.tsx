// src/pages/Uruguay.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Uruguay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "south-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Uruguay.jpg"
          alt="Uruguay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Uruguay
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A peaceful, progressive nation known for its beach-lined coast, historic capital, and rich gaucho culture.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-sky-900 mb-6">About Uruguay</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Nestled between Brazil and Argentina, Uruguay is often considered one of South America's best-kept secrets. 
            It is characterized by its lush, green interior, a relaxed and progressive way of life, and a stunning 
            coastline along the South Atlantic and the Río de la Plata.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-sky-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Montevideo", desc: "The laid-back capital city featuring an eclectic mix of colonial and art deco architecture." },
              { name: "Punta del Este", desc: "A glamorous resort city famous for its pristine beaches and vibrant nightlife." },
              { name: "Colonia del Sacramento", desc: "A perfectly preserved historic colonial town and UNESCO site." },
              { name: "Salto", desc: "A northern city known for its hot springs and citrus production." },
              { name: "Carmelo", desc: "A serene town offering rustic wineries and beautiful riverfront views." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-sky-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-sky-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Barrio Sur & Palermo", desc: "Neighborhoods in Montevideo famous for Candombe drum performances." },
              { title: "Casapueblo", desc: "A stunning, Santorini-esque structure sculpted by artist Carlos Páez Vilaró." },
              { title: "La Mano en la Arena", desc: "The iconic sculpture of a giant hand emerging from the sand in Punta del Este." },
              { title: "Cabo Polonio", desc: "A remote, rustic coastal village situated within a beautiful national park." },
              { title: "Rambla of Montevideo", desc: "A 22-kilometer uninterrupted waterfront promenade perfect for sunset walks." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-sky-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-sky-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-sky-900">🧉 Yerba Mate Cups:</span>{" "}
              High-quality, handcrafted leather-bound mate gourds and silver bombillas.
            </li>
            <li>
              <span className="font-semibold text-sky-900">🧥 Wool Sweaters:</span>{" "}
              Excellent quality, deeply warm sweaters made from Uruguayan sheep's wool.
            </li>
            <li>
              <span className="font-semibold text-sky-900">🍷 Tannat Wine:</span>{" "}
              Uruguay’s signature, robust red wine, perfect for pairing with local beef.
            </li>
            <li>
              <span className="font-semibold text-sky-900">🥩 Leather Goods:</span>{" "}
              Jackets, belts, and boots reflecting the country’s strong gaucho (cowboy) heritage.
            </li>
            <li>
              <span className="font-semibold text-sky-900">💎 Amethyst Geodes:</span>{" "}
              Some of the world’s most beautiful, deep purple amethysts are mined in northern Uruguay.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Tristán Narvaja Sunday Market in Montevideo is an absolute must-visit. Stretching for blocks, 
            it offers everything from vintage antiques and rare books to fresh local cheese and beautiful artisanal crafts.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-sky-600 to-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Uruguay;
