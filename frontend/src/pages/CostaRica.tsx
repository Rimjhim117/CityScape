// src/pages/CostaRica.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const CostaRica = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "north-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-50 to-blue-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Costa Rica.jpg"
          alt="Costa Rica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Costa Rica
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            Pura Vida! A tropical paradise of lush rainforests, towering volcanoes, and incredible biodiversity.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Costa Rica</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Costa Rica is a rugged, rainforested Central American country with coastlines on the Caribbean and Pacific. 
            Roughly a quarter of its area is made up of protected jungle, teeming with wildlife including spider monkeys 
            and quetzal birds. It is famous worldwide for its "Pura Vida" (pure life) philosophy and eco-tourism.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "San José", desc: "The capital and cultural hub, nestled in the central valley." },
              { name: "Tamarindo", desc: "A bustling surf town on the Pacific coast known for incredible beaches." },
              { name: "La Fortuna", desc: "The gateway to the mighty Arenal Volcano and relaxing hot springs." },
              { name: "Puerto Viejo", desc: "A laid-back Caribbean coastal town with beautiful beaches and Afro-Caribbean culture." },
              { name: "Monteverde", desc: "A mountainous region famous for its biodiverse cloud forests." },
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
              { title: "Arenal Volcano", desc: "An iconic, perfectly symmetrical volcano surrounded by hot springs." },
              { title: "Monteverde Cloud Forest", desc: "A mystical, high-altitude forest covered in fog and rich in wildlife." },
              { title: "Manuel Antonio National Park", desc: "A stunning mix of lush rainforest and pristine Pacific beaches." },
              { title: "Tortuguero National Park", desc: "The 'Amazon of Costa Rica', famous for sea turtle nesting." },
              { title: "Corcovado National Park", desc: "One of the most biologically intense places on earth." },
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
              <span className="font-semibold text-green-900">☕ Coffee (Grano de Oro):</span>{" "}
              Costa Rica produces some of the finest Arabica coffee beans in the world.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍫 Chocolate:</span>{" "}
              High-quality, organic cacao products grown in the rich volcanic soil.
            </li>
            <li>
              <span className="font-semibold text-green-900">🪵 Chorotega Pottery:</span>{" "}
              Beautiful, indigenous ceramic art primarily found in the Guaitil region.
            </li>
            <li>
              <span className="font-semibold text-green-900">🛒 Hand-painted Oxcarts:</span>{" "}
              Brightly painted miniature versions of the traditional Costa Rican oxcart (carreta).
            </li>
            <li>
              <span className="font-semibold text-green-900">🧴 Eco-friendly Skincare:</span>{" "}
              Soaps and lotions made locally using volcanic mud, coffee, and coconut oil.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Costa Rica reflects its eco-conscious culture. Look for local artisan markets in towns 
            like Sarchí, the traditional center of oxcart making, to find beautiful, sustainably made souvenirs 
            that capture the spirit of Pura Vida.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-green-600 to-teal-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostaRica;
