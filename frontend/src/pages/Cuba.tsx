// src/pages/Cuba.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Cuba = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "north-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-red-50 to-white">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Cuba.jpg"
          alt="Cuba"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Cuba
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A vibrant island suspended in time, filled with classic cars, salsa rhythms, and pristine beaches.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Cuba</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            The largest island in the Caribbean, Cuba is a place like no other. Known for its 1950s American 
            classic cars, stunning colonial architecture, and deep-rooted music culture, it offers travelers 
            an incredibly unique and nostalgic experience, bordered by warm, turquoise waters.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Havana", desc: "The colorful, historic capital known for Spanish colonial architecture and classic cars." },
              { name: "Trinidad", desc: "A perfectly preserved Spanish colonial settlement and UNESCO World Heritage site." },
              { name: "Santiago de Cuba", desc: "The cultural capital of the east, famous for Afro-Cuban heritage and music." },
              { name: "Cienfuegos", desc: "The 'Pearl of the South', known for its French-influenced neoclassical buildings." },
              { name: "Viñales", desc: "A lush, rural town famous for its steep limestone hills and tobacco farms." },
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
              { title: "Old Havana (Habana Vieja)", desc: "A maze of historic plazas, cathedrals, and vibrant street life." },
              { title: "El Malecón", desc: "Havana's iconic 8km seawall, perfect for sunset strolls." },
              { title: "Valle de Viñales", desc: "A stunning agricultural valley with massive limestone 'mogotes'." },
              { title: "Varadero Beach", desc: "One of the most spectacular stretches of white sand in the Caribbean." },
              { title: "Castillo de San Pedro de la Roca", desc: "A historic 17th-century fortress guarding the bay of Santiago." },
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
              <span className="font-semibold text-red-900">🚬 Cuban Cigars:</span>{" "}
              The most famous cigars in the world, rolled by hand in the Viñales Valley.
            </li>
            <li>
              <span className="font-semibold text-red-900">🥃 Rum:</span>{" "}
              World-class, authentic Cuban rum, perfect for a classic mojito or daiquiri.
            </li>
            <li>
              <span className="font-semibold text-red-900">🎨 Local Art:</span>{" "}
              Vibrant, colorful paintings and crafts found in open-air markets like Almacenes San José.
            </li>
            <li>
              <span className="font-semibold text-red-900">☕ Cuban Coffee:</span>{" "}
              Incredibly strong, sweet, and rich coffee that fuels the island.
            </li>
            <li>
              <span className="font-semibold text-red-900">🎶 Musical Instruments:</span>{" "}
              Handmade percussion instruments like maracas and claves for salsa enthusiasts.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Cuba is a deeply local experience. Due to trade restrictions, you won't find major 
            international brands, making local street markets and artisan craft fairs the best places to 
            find authentic, handmade Cuban goods.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cuba;
