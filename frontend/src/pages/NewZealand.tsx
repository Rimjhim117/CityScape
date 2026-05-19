// src/pages/NewZealand.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const NewZealand = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "oceania";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/New Zealand.jpg"
          alt="New Zealand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            New Zealand
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            Aotearoa, the Land of the Long White Cloud — famous for majestic fiords, Maori culture, and Middle-earth landscapes.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About New Zealand</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            New Zealand consists of two main landmasses — the North Island and the South Island. It is globally 
            renowned for its incredibly dramatic topography, featuring active volcanoes, deep glacier-carved fiords, 
            and rugged mountains. It is a haven for adventure seekers and nature lovers alike.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Auckland", desc: "The 'City of Sails', the largest and most diverse city located around two large harbors." },
              { name: "Wellington", desc: "The cool, compact capital city, famous for its arts scene and cafe culture." },
              { name: "Queenstown", desc: "The adventure capital of the world, nestled beside a lake and dramatic alpine ranges." },
              { name: "Christchurch", desc: "The 'Garden City', constantly reinventing itself with vibrant street art and parks." },
              { name: "Rotorua", desc: "A geothermal wonderland and a deeply important center for Maori culture." },
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
              { title: "Milford Sound", desc: "A breathtaking fiord featuring towering peaks and cascading waterfalls." },
              { title: "Hobbiton", desc: "The incredibly detailed movie set used for The Lord of the Rings and The Hobbit." },
              { title: "Tongariro National Park", desc: "A dual World Heritage area featuring three active, dramatic volcanoes." },
              { title: "Waitomo Glowworm Caves", desc: "A subterranean marvel illuminated by thousands of tiny glowworms." },
              { title: "Aoraki / Mount Cook", desc: "The highest mountain in New Zealand, set in a spectacular alpine national park." },
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
              <span className="font-semibold text-green-900">💚 Pounamu (Greenstone):</span>{" "}
              Sacred Maori jade, intricately carved into meaningful pendants and jewelry.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍯 Manuka Honey:</span>{" "}
              World-renowned honey produced exclusively in New Zealand, famous for its antibacterial properties.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍷 Sauvignon Blanc:</span>{" "}
              Exceptional, crisp white wines, primarily hailing from the Marlborough region.
            </li>
            <li>
              <span className="font-semibold text-green-900">🐏 Possum Merino Knitwear:</span>{" "}
              An incredibly soft, warm, and lightweight blend of merino wool and possum fur.
            </li>
            <li>
              <span className="font-semibold text-green-900">🪵 Maori Wood Carvings:</span>{" "}
              Beautifully intricate wooden art pieces reflecting ancestral stories and legends.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Exploring local weekend markets, like the ones in Rotorua or Wellington, allows you to find authentic 
            Pounamu carvings and taste incredible artisanal foods, directly supporting local craftsmen.
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

export default NewZealand;
