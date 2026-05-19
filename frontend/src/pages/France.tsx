// src/pages/France.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const France = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/France.jpg"
          alt="France"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            France
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The epitome of romance, art, and gastronomy—from the twinkling lights of Paris to the sun-drenched Riviera.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About France</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            France is the most visited country in the world, and it is easy to see why. It offers an incredibly 
            rich tapestry of culture, including world-class museums, spectacular Gothic architecture, idyllic 
            countryside villages, and arguably the most revered culinary and wine traditions on the planet.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Paris", desc: "The 'City of Light', a global center for art, fashion, gastronomy, and culture." },
              { name: "Lyon", desc: "The gastronomic capital of France, situated at the junction of the Rhône and Saône rivers." },
              { name: "Marseille", desc: "A vibrant, historic port city on the Mediterranean coast." },
              { name: "Bordeaux", desc: "The hub of the famed wine-growing region, featuring beautiful classical architecture." },
              { name: "Nice", desc: "The glamorous capital of the French Riviera, famous for its pebble beaches and Promenade des Anglais." },
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
              { title: "Eiffel Tower", desc: "The iconic wrought-iron lattice tower dominating the Parisian skyline." },
              { title: "The Louvre", desc: "The world's largest art museum, home to the Mona Lisa and the Venus de Milo." },
              { title: "Palace of Versailles", desc: "A spectacular, opulent former royal residence featuring the famous Hall of Mirrors." },
              { title: "Mont Saint-Michel", desc: "A breathtaking medieval abbey perched on a rocky tidal island in Normandy." },
              { title: "Château de Chambord", desc: "The largest and most majestic Renaissance château in the Loire Valley." },
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
              <span className="font-semibold text-blue-900">🍷 Wine & Champagne:</span>{" "}
              Unparalleled regional wines and authentic Champagne straight from the source.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🧀 Artisanal Cheese:</span>{" "}
              Hundreds of varieties ranging from creamy Camembert to sharp Roquefort.
            </li>
            <li>
              <span className="font-semibold text-blue-900">👗 Haute Couture & Perfume:</span>{" "}
              Luxury fashion from iconic Parisian houses and exquisite perfumes from Grasse.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🧼 Savon de Marseille:</span>{" "}
              Traditional, natural olive oil soap famously produced in the south of France.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🧁 Macarons & Pastries:</span>{" "}
              Delicate, colorful almond meringue cookies and flawless, buttery croissants.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in France is legendary. Whether you are strolling down the luxurious Champs-Élysées 
            in Paris or exploring the vibrant, aromatic food markets (Les Halles) in Lyon, you are experiencing 
            some of the finest goods in the world.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default France;
