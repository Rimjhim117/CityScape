// src/pages/Italy.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Italy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Italy.jpg"
          alt="Italy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Italy
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A celebration of la dolce vita—where ancient history, Renaissance art, and world-class food collide.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Italy</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Italy holds an unparalleled concentration of history and art, acting as the epicenter of both 
            the Roman Empire and the Renaissance. From the romantic, watery streets of Venice to the rolling 
            vineyards of Tuscany and the volcanic coasts of the south, Italy is a feast for the senses.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Rome", desc: "The 'Eternal City', an open-air museum filled with ancient ruins and vibrant street life." },
              { name: "Florence", desc: "The birthplace of the Renaissance, overflowing with masterpieces of art and architecture." },
              { name: "Venice", desc: "A magical, car-free city built on more than 100 small islands in a lagoon." },
              { name: "Milan", desc: "The fast-paced, sophisticated fashion and design capital of Italy." },
              { name: "Naples", desc: "A chaotic, spirited southern city famously known as the birthplace of pizza." },
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
              { title: "The Colosseum", desc: "The massive, iconic ancient amphitheater in the center of Rome." },
              { title: "Vatican City", desc: "The independent city-state home to St. Peter's Basilica and the Sistine Chapel." },
              { title: "Leaning Tower of Pisa", desc: "The famously unintended tilted bell tower in Tuscany." },
              { title: "Pompeii", desc: "An incredibly preserved ancient Roman city buried by the eruption of Mount Vesuvius." },
              { title: "Amalfi Coast", desc: "A spectacularly dramatic coastline featuring steep cliffs and pastel-colored villages." },
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
              <span className="font-semibold text-green-900">👜 Leather Goods:</span>{" "}
              Exquisite, handcrafted leather bags, belts, and shoes, particularly famous in Florence.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍷 Italian Wine:</span>{" "}
              Incredible regional varieties like Chianti from Tuscany or Barolo from Piedmont.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍝 Balsamic Vinegar & Olive Oil:</span>{" "}
              Authentic Aceto Balsamico Tradizionale from Modena and premium cold-pressed oils.
            </li>
            <li>
              <span className="font-semibold text-green-900">🎭 Murano Glass & Venetian Masks:</span>{" "}
              Stunning glasswork and elaborate carnival masks crafted on the islands of Venice.
            </li>
            <li>
              <span className="font-semibold text-green-900">☕ Espresso & Moka Pots:</span>{" "}
              The iconic Bialetti stovetop espresso makers essential to Italian coffee culture.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Italy is an experience in pure craftsmanship and flavor. Visit the San Lorenzo Leather 
            Market in Florence for beautiful leatherwork, or get lost in the high-fashion boutiques of the 
            Quadrilatero d'Oro in Milan.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-green-600 to-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Italy;
