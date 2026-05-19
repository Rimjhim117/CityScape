// src/pages/Jamaica.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Jamaica = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "north-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-black/10">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Jamaica.jpg"
          alt="Jamaica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Jamaica
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The heart of the Caribbean — famous for reggae music, Blue Mountain coffee, and irie vibes.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Jamaica</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Jamaica is an island nation characterized by its lush topography of mountains, rainforests, and 
            reef-lined beaches. Beyond its stunning natural beauty, it is a cultural powerhouse, known globally 
            as the birthplace of reggae music, jerk cuisine, and a laid-back, vibrant way of life.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Kingston", desc: "The bustling capital and cultural heart, home to the Bob Marley Museum." },
              { name: "Montego Bay", desc: "A major cruise ship port and resort town famous for Doctor's Cave Beach." },
              { name: "Ocho Rios", desc: "A port town surrounded by lush rainforests and incredible waterfalls." },
              { name: "Negril", desc: "Famous for its stunning Seven Mile Beach and dramatic coral cliffs." },
              { name: "Port Antonio", desc: "A quieter, incredibly lush coastal town known for its natural beauty." },
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
              { title: "Dunn's River Falls", desc: "A famous terraced waterfall near Ocho Rios that visitors can climb." },
              { title: "Blue Mountains", desc: "Lush, misty mountains famous for producing some of the world's best coffee." },
              { title: "Bob Marley Museum", desc: "The former home and studio of the legendary reggae artist in Kingston." },
              { title: "Seven Mile Beach", desc: "A stunning, seemingly endless stretch of white sand in Negril." },
              { title: "Rick's Cafe", desc: "An iconic spot in Negril to watch cliff divers and stunning Caribbean sunsets." },
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
              <span className="font-semibold text-green-900">☕ Blue Mountain Coffee:</span>{" "}
              One of the rarest, most highly sought-after coffees in the world.
            </li>
            <li>
              <span className="font-semibold text-green-900">🌶️ Jerk Spices & Sauces:</span>{" "}
              The signature Jamaican flavor profile made with scotch bonnet peppers and allspice.
            </li>
            <li>
              <span className="font-semibold text-green-900">🪵 Wood Carvings:</span>{" "}
              Beautifully carved mahogany and cedar crafts sold in local artisan markets.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍹 Jamaican Rum:</span>{" "}
              World-renowned, robust rums, notably from the Appleton Estate.
            </li>
            <li>
              <span className="font-semibold text-green-900">🥥 Woven Straw Goods:</span>{" "}
              Hand-woven hats, bags, and baskets crafted by local women.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Jamaica is best experienced at local craft markets, like the ones in Ocho Rios or 
            Montego Bay. Here, you can find authentic, hand-crafted goods while enjoying the energetic, 
            welcoming banter of local vendors.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jamaica;
