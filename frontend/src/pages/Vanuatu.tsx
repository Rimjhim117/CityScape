// src/pages/Vanuatu.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Vanuatu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "oceania";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Vanuatu.jpg"
          alt="Vanuatu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Vanuatu
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            An adventure paradise of active volcanoes, pristine coral reefs, and incredible, ancient Melanesian cultures.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Vanuatu</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Vanuatu is a Y-shaped archipelago in the South Pacific consisting of roughly 80 islands. It is 
            arguably the adventure capital of the Pacific, offering visitors the chance to stand on the rim 
            of accessible active volcanoes, dive legendary WWII shipwrecks, and witness deeply preserved tribal traditions.
          </p>
        </section>

        {/* Top Destinations */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Port Vila", desc: "The charming, bustling capital city set around a beautiful natural harbor on Efate." },
              { name: "Luganville", desc: "The second-largest city, located on Espiritu Santo and a major hub for diving." },
              { name: "Tanna Island", desc: "Famous for the accessible Mount Yasur volcano and strong traditional 'Kastom' villages." },
              { name: "Pentecost Island", desc: "Globally renowned for the ancient, thrilling ritual of land diving (Naghol)." },
              { name: "Malekula", desc: "An incredibly culturally diverse island, home to the Big Nambas and Small Nambas tribes." },
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
              { title: "Mount Yasur", desc: "One of the world's most accessible active volcanoes, offering a spectacular lava show." },
              { title: "SS President Coolidge", desc: "A massive WWII luxury liner turned troopship, now one of the world's best wreck dives." },
              { title: "Mele Cascades", desc: "A beautiful series of terraced, clear freshwater waterfalls just outside Port Vila." },
              { title: "Champagne Beach", desc: "A stunning, crescent-shaped beach on Espiritu Santo with incredibly white sand." },
              { title: "Millennium Cave", desc: "A massive, challenging cave trek offering an extreme, unforgettable jungle adventure." },
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
              <span className="font-semibold text-green-900">🪵 Tam Tam Drums:</span>{" "}
              Massive, intricately carved wooden slit gongs featuring stylized faces, used in ceremonies.
            </li>
            <li>
              <span className="font-semibold text-green-900">🧉 Kava Root:</span>{" "}
              High-quality Kava from Vanuatu is considered some of the strongest and best in the Pacific.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍫 Vanuatu Chocolate:</span>{" "}
              Award-winning, artisanal dark chocolate made from single-origin local cocoa beans.
            </li>
            <li>
              <span className="font-semibold text-green-900">☕ Tanna Coffee:</span>{" "}
              Rich, organic Arabica coffee grown in the volcanic soils of Tanna island.
            </li>
            <li>
              <span className="font-semibold text-green-900">🧺 Woven Pandanus Baskets:</span>{" "}
              Colorful, incredibly durable bags and mats woven from dried pandanus leaves.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Port Vila Central Market is an incredibly colorful, 24-hour hub where you can buy fresh tropical 
            fruit, vibrant flowers, and local crafts. For the best wood carvings, engaging directly with 
            artisans in local villages is highly recommended.
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

export default Vanuatu;
