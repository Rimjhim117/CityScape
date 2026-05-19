// src/pages/Switzerland.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Switzerland = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Switzerland.jpg"
          alt="Switzerland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Switzerland
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A pristine alpine paradise famous for soaring peaks, turquoise lakes, precision watchmaking, and incredible chocolate.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Switzerland</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Nestled in the heart of the Alps, Switzerland is a landlocked country renowned for its spectacular 
            natural beauty and exceptionally high quality of life. It is culturally diverse, seamlessly blending 
            German, French, and Italian influences across its impeccably clean, hyper-efficient cities and idyllic mountain villages.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Zurich", desc: "The global financial center, offering high-end shopping and beautiful lakeside views." },
              { name: "Geneva", desc: "A highly international city, home to the UN headquarters and the massive Jet d'Eau." },
              { name: "Lucerne", desc: "A stunning, picturesque city known for its preserved medieval architecture and wooden bridges." },
              { name: "Bern", desc: "The charming capital city featuring a beautifully preserved medieval Old Town." },
              { name: "Interlaken", desc: "The adventure capital of the Alps, situated perfectly between two crystal-clear lakes." },
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
              { title: "The Matterhorn", desc: "The iconic, jagged, pyramidal peak rising dramatically above Zermatt." },
              { title: "Jungfraujoch", desc: "Known as the 'Top of Europe', home to the highest railway station in the continent." },
              { title: "Lake Geneva (Lac Léman)", desc: "A massive, crescent-shaped lake surrounded by vineyards and the Alps." },
              { title: "Chillon Castle", desc: "An incredibly romantic, historic medieval island castle located on Lake Geneva." },
              { title: "Rhine Falls", desc: "The largest, most powerful waterfall in Europe, located in northern Switzerland." },
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
              <span className="font-semibold text-red-900">⌚ Luxury Watches:</span>{" "}
              The undisputed world capital of horology, home to brands like Rolex, Patek Philippe, and Omega.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍫 Swiss Chocolate:</span>{" "}
              Exceptionally smooth and creamy chocolate crafted by world-renowned chocolatiers.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧀 Alpine Cheese:</span>{" "}
              World-class Gruyère and Emmental, essential for traditional Swiss fondue and raclette.
            </li>
            <li>
              <span className="font-semibold text-red-900">🔪 Swiss Army Knives:</span>{" "}
              The iconic, multi-functional red pocket knives famously produced by Victorinox.
            </li>
            <li>
              <span className="font-semibold text-red-900">🔔 Cowbells:</span>{" "}
              Traditional, heavy brass bells often beautifully painted or engraved, a symbol of the Alps.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            While Bahnhofstrasse in Zurich is famous for high-end luxury shopping, you can find the most 
            authentic cheeses and artisanal chocolates in the small boutique shops and weekly farmers' markets 
            found in nearly every town square.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Switzerland;
