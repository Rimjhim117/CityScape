// src/pages/Morocco.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Morocco = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Morocco.jpg"
          alt="Morocco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A gateway to Africa characterized by majestic mountains, sweeping deserts, and colorful labyrinthine medinas.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Morocco</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Morocco is a country of dizzying diversity, where epic mountain ranges give way to vast deserts and 
            ancient cities. Known for its intricate Moorish architecture, vibrant souks, and rich blend of Arab, 
            Berber, and European influences, Morocco is a feast for the senses that captivates every traveler.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Marrakech", desc: "The Red City, famous for its medina and the bustling Jemaa el-Fnaa square." },
              { name: "Fes", desc: "The cultural and spiritual heart of Morocco, with the world's oldest university." },
              { name: "Casablanca", desc: "The modern commercial capital featuring the stunning Hassan II Mosque." },
              { name: "Chefchaouen", desc: "The mesmerizing Blue City tucked away in the Rif Mountains." },
              { name: "Tangier", desc: "A historic gateway city where Europe meets Africa across the Strait of Gibraltar." },
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
              { title: "Sahara Desert", desc: "Experience camel treks and stargazing in the Erg Chebbi dunes." },
              { title: "Jardin Majorelle", desc: "A stunning botanical garden in Marrakech created by Jacques Majorelle." },
              { title: "Ait Benhaddou", desc: "An ancient fortified village and iconic film location along the former caravan route." },
              { title: "Hassan II Mosque", desc: "A breathtaking architectural masterpiece built over the ocean in Casablanca." },
              { title: "Atlas Mountains", desc: "Rugged peaks offering incredible hiking and traditional Berber villages." },
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
              <span className="font-semibold text-red-900">🏺 Ceramics & Tajines:</span>{" "}
              Beautifully hand-painted pottery, especially from Safi and Fes.
            </li>
            <li>
              <span className="font-semibold text-red-900">👜 Leather Goods:</span>{" "}
              High-quality bags, poufs, and babouches (slippers) from traditional tanneries.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧵 Rugs & Textiles:</span>{" "}
              Intricately woven Berber carpets, blankets, and colorful fabrics.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧴 Argan Oil:</span>{" "}
              "Liquid gold" used for culinary and cosmetic purposes, unique to Morocco.
            </li>
            <li>
              <span className="font-semibold text-red-900">🪔 Lanterns & Metalwork:</span>{" "}
              Intricate brass and copper lanterns that cast magical shadows.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in the medinas of Morocco is a vibrant and essential experience. Navigating the winding 
            alleys of the souks reveals artisans at work, offering authentic, handcrafted treasures that embody 
            the rich artistic heritage of the country.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Morocco;
