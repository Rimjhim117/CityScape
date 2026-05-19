// src/pages/Philippines.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Philippines = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-red-50 to-yellow-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Philippines.jpg"
          alt="Philippines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Philippines
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            An archipelago of over 7,000 islands, offering world-class beaches, vibrant festivals, and incredibly warm hospitality.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About the Philippines</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            The Philippines is a breathtaking Southeast Asian archipelago known for having some of the most 
            beautiful beaches and marine biodiversity on the planet. Deeply influenced by centuries of Spanish 
            and American presence, it boasts a unique cultural blend, vibrant mega-cities, and a famously 
            cheerful and welcoming population.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Manila", desc: "The densely populated, historic, and chaotic capital set on the bay." },
              { name: "Cebu City", desc: "The oldest city in the country, blending rich history with a booming economy." },
              { name: "Davao City", desc: "A massive, prosperous city in Mindanao, gateway to Mount Apo." },
              { name: "Boracay", desc: "A tiny island globally renowned for its spectacular White Beach." },
              { name: "Palawan", desc: "Often voted the best island in the world, known for its pristine, dramatic beauty." },
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
              { title: "Banaue Rice Terraces", desc: "Ancient, incredibly complex rice terraces carved into the Cordillera mountains." },
              { title: "Chocolate Hills", desc: "A bizarre and beautiful geological formation of over 1,200 grassy hills in Bohol." },
              { title: "Puerto Princesa Subterranean River", desc: "A spectacular UNESCO-listed underground river in Palawan." },
              { title: "Intramuros", desc: "The historic, walled inner city of Manila built during the Spanish colonial period." },
              { title: "Mayon Volcano", desc: "A highly active volcano renowned for its almost perfectly symmetrical cone shape." },
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
              <span className="font-semibold text-blue-900">🦪 South Sea Pearls:</span>{" "}
              Incredibly beautiful and valuable golden pearls sourced directly from Palawan.
            </li>
            <li>
              <span className="font-semibold text-blue-900">👚 Barong Tagalog:</span>{" "}
              The traditional, lightweight, embroidered formal shirt made from piña (pineapple) fiber.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🪵 Wood Carvings:</span>{" "}
              Intricate tribal carvings and furniture primarily sourced from the northern mountain regions.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🥭 Dried Mangoes:</span>{" "}
              World-famous, incredibly sweet, and chewy dried mangoes, especially from Cebu.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🎸 Handcrafted Guitars:</span>{" "}
              High-quality, locally made acoustic guitars, another specialty of Cebu.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in the Philippines is an extreme sport. You can explore the massive, modern SM Mall of Asia 
            in Manila, or dive into the historic Quiapo Market to bargain for authentic local crafts and delicacies.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Philippines;
