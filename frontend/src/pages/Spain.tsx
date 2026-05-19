// src/pages/Spain.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Spain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Spain.jpg"
          alt="Spain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Spain
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A vibrant, passionate country famous for flamenco, extraordinary architecture, tapas, and sun-drenched coasts.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Spain</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Spain is a remarkably diverse country occupying most of the Iberian Peninsula. It is deeply 
            regional, with unique cultures, languages, and cuisines varying wildly from the lush, green 
            mountains of the north to the arid, Moorish-influenced landscapes of Andalusia in the south.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Madrid", desc: "The elegant, central capital famous for its world-class art museums and late-night tapas culture." },
              { name: "Barcelona", desc: "The vibrant capital of Catalonia, defined by Antoni Gaudí’s surreal architecture and Mediterranean beaches." },
              { name: "Seville", desc: "The romantic, sun-baked capital of Andalusia, the heartland of flamenco dancing." },
              { name: "Valencia", desc: "A bright coastal city known for futuristic architecture and as the true birthplace of paella." },
              { name: "Granada", desc: "A stunning southern city set against the Sierra Nevada, home to the magnificent Alhambra." },
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
              { title: "Sagrada Família", desc: "Gaudí’s breathtaking, still-unfinished basilica in Barcelona." },
              { title: "The Alhambra", desc: "An incredibly intricate, ancient Moorish palace and fortress complex in Granada." },
              { title: "Prado Museum", desc: "One of the world's premier art galleries located in Madrid, featuring Velázquez and Goya." },
              { title: "Mosque-Cathedral of Córdoba", desc: "A stunning architectural marvel blending Islamic arches with a Renaissance cathedral." },
              { title: "Camino de Santiago", desc: "A legendary network of historic pilgrimage routes stretching across northern Spain." },
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
              <span className="font-semibold text-red-900">🥩 Jamón Ibérico:</span>{" "}
              The incredibly prized, melt-in-your-mouth cured ham made from acorn-fed Iberian pigs.
            </li>
            <li>
              <span className="font-semibold text-red-900">🏺 Ceramics (Cerámica):</span>{" "}
              Beautifully hand-painted plates and tiles, particularly famous from Andalusia and Toledo.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍷 Spanish Wine & Sherry:</span>{" "}
              Robust Rioja reds and authentic Sherry (Jerez) from the south.
            </li>
            <li>
              <span className="font-semibold text-red-900">👞 Leather Shoes (Espadrilles):</span>{" "}
              High-quality leather goods and traditional woven-rope espadrilles.
            </li>
            <li>
              <span className="font-semibold text-red-900">🌸 Saffron (Azafrán):</span>{" "}
              One of the most expensive spices in the world, essential for a truly authentic paella.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Markets are the lifeblood of Spanish cities. The Mercado de San Miguel in Madrid and the 
            Mercat de la Boqueria in Barcelona are sensory overloads where you can taste the finest 
            jamón, olives, and wines right at the stalls.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spain;
