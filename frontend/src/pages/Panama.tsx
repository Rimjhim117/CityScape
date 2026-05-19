// src/pages/Panama.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Panama = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "north-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Panama.jpg"
          alt="Panama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Panama
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The crossroads of the Americas — an incredible mix of dense rainforests, modern skylines, and historic canals.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-teal-900 mb-6">About Panama</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Linking Central and South America, Panama is a vibrant country known worldwide for the Panama Canal. 
            Beyond this engineering marvel, it offers a stunningly modern capital city, lush cloud forests, 
            beautiful Caribbean and Pacific beaches, and deep indigenous roots.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-teal-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Panama City", desc: "A bustling metropolis known for its skyline, Casco Viejo, and the Canal." },
              { name: "Boquete", desc: "A mountainous town in the Chiriquí Highlands famous for its coffee and cool climate." },
              { name: "Bocas del Toro", desc: "A laid-back archipelago with pristine beaches and vibrant Caribbean culture." },
              { name: "David", desc: "The commercial hub of the western Chiriquí province." },
              { name: "Portobelo", desc: "A historic coastal town known for its Spanish forts and pirate history." },
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
              { title: "Panama Canal", desc: "One of the greatest engineering feats in the world, connecting two oceans." },
              { title: "Casco Viejo", desc: "The historic district of Panama City, rich in colonial architecture and vibrant nightlife." },
              { title: "San Blas Islands", desc: "An archipelago of over 300 stunning islands governed by the indigenous Guna people." },
              { title: "Coiba National Park", desc: "A spectacular marine reserve often compared to the Galapagos." },
              { title: "Volcán Barú", desc: "Panama's highest peak, where you can see both oceans on a clear day." },
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
              <span className="font-semibold text-teal-900">👒 Panama Hats:</span>{" "}
              Actually woven in Ecuador, but made globally famous here. Authentic, lightweight, and stylish.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🧵 Mola Textiles:</span>{" "}
              Incredibly intricate, colorful reverse-appliqué textiles made by the indigenous Guna women.
            </li>
            <li>
              <span className="font-semibold text-teal-900">☕ Geisha Coffee:</span>{" "}
              Some of the most expensive and highly prized coffee beans in the world, grown in Boquete.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🎭 Diablico Sucio Masks:</span>{" "}
              Hand-painted, frightening papier-mâché masks used in traditional Panamanian folklore dances.
            </li>
            <li>
              <span className="font-semibold text-teal-900">📿 Tagua Nut Carvings:</span>{" "}
              Eco-friendly, beautifully carved figures and jewelry known as "vegetable ivory."
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Panama offers incredible diversity. You can visit the modern luxury malls in Panama City, 
            or explore artisanal markets like the Mercado Nacional de Artesanías to find authentic local goods 
            steeped in tradition.
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

export default Panama;
