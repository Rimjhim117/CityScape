// src/pages/Chile.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Chile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "south-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Chile.jpg"
          alt="Chile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Chile
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A land of extremes — from the driest desert on Earth to the icy, stunning fjords of Patagonia.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Chile</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Chile is a long, narrow country stretching along South America's western edge, with more than 6,000km 
            of Pacific Ocean coastline. Isolated by the Andes to the east and the ocean to the west, it features 
            an incredible variety of landscapes, including the arid Atacama Desert, fertile wine valleys, and 
            the dramatic peaks of Torres del Paine.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Santiago", desc: "The bustling, modern capital set in a valley surrounded by snow-capped Andes." },
              { name: "Valparaíso", desc: "A vibrant, bohemian port city famous for its colorful, steep hills and funiculars." },
              { name: "Punta Arenas", desc: "A southern city acting as a major base for Patagonian and Antarctic excursions." },
              { name: "Antofagasta", desc: "A northern port city bordered by the dramatic Atacama Desert." },
              { name: "San Pedro de Atacama", desc: "An oasis town and the gateway to the spectacular desert landscapes." },
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
              { title: "Torres del Paine", desc: "A breathtaking national park in Patagonia known for its soaring granite pillars." },
              { title: "Atacama Desert", desc: "The driest non-polar desert in the world, featuring geysers and salt flats." },
              { title: "Easter Island (Rapa Nui)", desc: "A remote volcanic island famous for its massive monumental statues called moai." },
              { title: "Valle de la Luna", desc: "A stunning lunar-like landscape of sand and stone formations in the Atacama." },
              { title: "Marble Caves", desc: "Spectacular, naturally sculpted marble caves set in a vivid turquoise lake." },
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
              <span className="font-semibold text-red-900">💎 Lapis Lazuli:</span>{" "}
              A brilliant blue semi-precious stone; Chile is one of the world's primary sources.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍷 Chilean Wine:</span>{" "}
              Exceptional Cabernet Sauvignon and Carménère from the Central Valley vineyards.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧶 Alpaca Textiles:</span>{" "}
              Warm, incredibly soft ponchos and sweaters woven by indigenous artisans in the north.
            </li>
            <li>
              <span className="font-semibold text-red-900">🏺 Pomaire Pottery:</span>{" "}
              Traditional, dark clay pottery crafted in a small town near Santiago.
            </li>
            <li>
              <span className="font-semibold text-red-900">🗿 Moai Carvings:</span>{" "}
              Miniature replicas of Easter Island's famous statues carved from stone or wood.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Chile ranges from the high-end boutiques of Santiago to excellent artisan markets. 
            The Pueblito Los Dominicos in Santiago is a fantastic handicraft village where you can find authentic 
            copperwork, lapis lazuli jewelry, and Mapuche silver.
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

export default Chile;
