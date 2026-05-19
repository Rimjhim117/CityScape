// src/pages/Honduras.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Honduras = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "north-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Honduras.jpg"
          alt="Honduras"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Honduras
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A beautiful blend of ancient Maya ruins, incredibly lush rainforests, and world-class Caribbean diving.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Honduras</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Situated in the heart of Central America, Honduras offers an untouched, rugged beauty. 
            It is home to the spectacular ancient Maya city of Copán, vast stretches of protected cloud forests, 
            and the Bay Islands, which sit on the second-largest barrier reef system in the world.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Tegucigalpa", desc: "The bustling, mountainous capital city situated in a picturesque valley." },
              { name: "San Pedro Sula", desc: "The primary industrial and commercial center of the country." },
              { name: "Copán Ruinas", desc: "A charming colonial town serving as the gateway to the famous Maya ruins." },
              { name: "Roatán", desc: "The largest of the Bay Islands, famous globally for its scuba diving." },
              { name: "La Ceiba", desc: "The vibrant eco-tourism capital located on the northern Caribbean coast." },
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
              { title: "Copán Ruins", desc: "An incredible ancient Maya site known for its detailed stone sculptures." },
              { title: "Mesoamerican Barrier Reef", desc: "Explore the vibrant underwater world off the coast of the Bay Islands." },
              { title: "Pico Bonito National Park", desc: "A dense, towering rainforest with spectacular waterfalls and wildlife." },
              { title: "Cayos Cochinos", desc: "A group of pristine, remote islands perfect for snorkeling and relaxing." },
              { title: "Lago de Yojoa", desc: "The largest natural lake in Honduras, renowned for bird watching." },
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
              <span className="font-semibold text-blue-900">☕ Honduran Coffee:</span>{" "}
              High-altitude Arabica coffee prized for its smooth, chocolatey notes.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🏺 Lenca Pottery:</span>{" "}
              Distinctive black-and-white geometric pottery made by the indigenous Lenca women.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🍫 Artisanal Chocolate:</span>{" "}
              High-quality chocolate often sourced directly from the Copán region.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🪵 Mahogany Carvings:</span>{" "}
              Intricately carved wooden chests, doors, and sculptures.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🚬 Hand-rolled Cigars:</span>{" "}
              Honduras produces some of the finest premium cigars in the world.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            When in Honduras, visiting artisan markets, especially around the Copán region or outside the capital, 
            allows you to discover incredibly authentic, locally produced crafts like Lenca pottery that have been 
            made using the same techniques for centuries.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Honduras;
