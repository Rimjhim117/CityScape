// src/pages/Tonga.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Tonga = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "oceania";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Tonga.jpg"
          alt="Tonga"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Tonga
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The True South Pacific — the only remaining Polynesian monarchy, famous for humpback whales and ancient traditions.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Tonga</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            The Kingdom of Tonga is an archipelago of over 170 islands in the South Pacific. It is fiercely proud 
            of its heritage, being the only Pacific nation never to completely lose its indigenous governance. 
            It offers an incredibly authentic, deeply religious, and relaxed island experience.
          </p>
        </section>

        {/* Top Destinations */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Nukuʻalofa", desc: "The quiet, coastal capital city located on the main island of Tongatapu." },
              { name: "Vavaʻu", desc: "A stunning northern island group, famous globally for sailing and whale watching." },
              { name: "Haʻapai", desc: "A tranquil, sparsely populated island group offering pristine, deserted coral beaches." },
              { name: "Pangai", desc: "The administrative capital village of the Haʻapai group, known for its historic churches." },
              { name: "Neiafu", desc: "The main town of Vava'u, set on a spectacular, deep-water harbor." },
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
              { title: "Humpback Whale Swimming", desc: "Tonga is one of the few places in the world where you can swim with wild humpback whales." },
              { title: "Mapuʻa ʻa Vaea Blowholes", desc: "A stunning stretch of coastline where waves shoot up through hundreds of coral rock holes." },
              { title: "Haʻamonga ʻa Maui", desc: "A massive, ancient stone trilithon often called the 'Stonehenge of the Pacific'." },
              { title: "Swallows' Cave", desc: "A spectacular, boat-accessible sea cave in Vava'u known for its incredible blue waters." },
              { title: "Royal Palace", desc: "The charming, Victorian-style wooden palace of the Tongan monarch in Nukuʻalofa." },
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
              <span className="font-semibold text-red-900">🌿 Ngatu (Tapa Cloth):</span>{" "}
              Incredibly detailed, painted bark cloth used for special occasions and as traditional wealth.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧺 Woven Ta'ovala:</span>{" "}
              The traditional woven mat worn around the waist by Tongans as a sign of respect.
            </li>
            <li>
              <span className="font-semibold text-red-900">🪵 Bone & Wood Carvings:</span>{" "}
              Intricate necklaces and statues carved from whale bone (historically) or local woods.
            </li>
            <li>
              <span className="font-semibold text-red-900">🥥 Coconut Oil (Lolo):</span>{" "}
              Fragrant, traditionally produced coconut oil often infused with local flowers like sandalwood.
            </li>
            <li>
              <span className="font-semibold text-red-900">☕ Tongan Coffee:</span>{" "}
              Unique, high-quality coffee beans grown in the rich volcanic soil of the islands.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Talamahu Market in Nukuʻalofa is the vibrant heart of the city. Here you can find massive mounds 
            of taro, fresh tropical fruit, and beautiful authentic Tongan handicrafts like woven baskets and Ngatu.
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

export default Tonga;
