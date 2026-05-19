// src/pages/Samoa.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Samoa = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "oceania";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Samoa.jpg"
          alt="Samoa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Samoa
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The heart of Polynesia — incredibly lush, stunningly beautiful, and deeply rooted in Fa'a Samoa.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-teal-900 mb-6">About Samoa</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Samoa consists of two main volcanic islands, Upolu and Savai'i, offering a remarkably untouched 
            South Pacific experience. It is a country where traditional "Fa'a Samoa" (the Samoan Way) still 
            dictates daily life, characterized by deep respect for elders, vibrant culture, and close-knit villages.
          </p>
        </section>

        {/* Top Destinations */}
        <section>
          <h3 className="text-3xl font-semibold text-teal-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Apia", desc: "The relaxed and charming capital city located on the northern coast of Upolu." },
              { name: "Salelologa", desc: "The main township and entry port for the large, rugged island of Savai'i." },
              { name: "Lalomanu", desc: "A village famous for having one of the most stunning, pristine beaches in the South Pacific." },
              { name: "Manase", desc: "A popular coastal village in Savai'i offering beautiful, traditional beach fales." },
              { name: "Vailima", desc: "A village near Apia, famously the final home of the author Robert Louis Stevenson." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-teal-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-teal-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "To Sua Ocean Trench", desc: "A spectacular, incredibly photogenic giant swimming hole surrounded by lush gardens." },
              { title: "Alofaaga Blowholes", desc: "Incredible, powerful blowholes that shoot ocean water hundreds of feet into the air." },
              { title: "Piula Cave Pool", desc: "A beautiful, crystal-clear freshwater pool formed by a natural spring." },
              { title: "Af Aau Waterfall", desc: "A stunning, cascading waterfall plunging into a deep, swimmable basin." },
              { title: "Robert Louis Stevenson Museum", desc: "The beautifully restored former home of the famous 'Treasure Island' author." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-teal-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-teal-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-teal-900">🌿 Siapo (Tapa Cloth):</span>{" "}
              Traditional bark cloth intricately painted with natural dyes, often used for ceremonies.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🪵 Kava Bowls (Tanoa):</span>{" "}
              Expertly carved, multi-legged wooden bowls essential for traditional Ava ceremonies.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🥥 Coconut Oil & Soap:</span>{" "}
              High-quality, organic skincare products infused with local tropical fragrances.
            </li>
            <li>
              <span className="font-semibold text-teal-900">👗 Puletasi:</span>{" "}
              The beautiful, traditional matching tunic and skirt set worn by Samoan women.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🔪 Nifo Oti:</span>{" "}
              The traditional Samoan war club, often carved and sold as a ceremonial display piece.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Maketi Fou (Fugalei Market) in Apia is a vibrant hub of Samoan life. It is the perfect place to 
            find fresh tropical produce, handwoven baskets, and beautifully painted Siapo cloth.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-teal-600 to-green-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Samoa;
