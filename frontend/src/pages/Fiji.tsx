// src/pages/Fiji.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Fiji = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "oceania";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Fiji.jpg"
          alt="Fiji"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Fiji
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A tropical archipelago of over 300 islands, famous for its incredibly friendly people and crystal-clear lagoons.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-cyan-900 mb-6">About Fiji</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Fiji is the quintessential South Pacific paradise. It is renowned globally for its palm-lined beaches, 
            stunning coral reefs, and rugged landscapes. More than just a beach destination, Fiji boasts a rich 
            Melanesian culture, where visitors are famously welcomed with a booming "Bula!"
          </p>
        </section>

        {/* Top Destinations */}
        <section>
          <h3 className="text-3xl font-semibold text-cyan-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Suva", desc: "The bustling, multicultural capital city located on the main island of Viti Levu." },
              { name: "Nadi", desc: "The main transit hub, acting as the gateway to Fiji's beautiful island resorts." },
              { name: "Denarau Island", desc: "An upscale resort island offering luxury hotels and a large marina." },
              { name: "Savusavu", desc: "A charming, laid-back town on Vanua Levu, known as the 'Hidden Paradise'." },
              { name: "Mamanuca Islands", desc: "A volcanic archipelago boasting some of the most picture-perfect beaches." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-cyan-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-cyan-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Yasawa Islands", desc: "A stunning chain of mountainous islands famous for crystal-clear waters and backpacking." },
              { title: "Bouma National Heritage Park", desc: "A lush, protected rainforest on Taveuni Island featuring beautiful waterfalls." },
              { title: "Cloud 9", desc: "A spectacular, two-level floating pizzeria and bar in the middle of the ocean." },
              { title: "Sigatoka Sand Dunes", desc: "Fiji's first national park, featuring massive, undulating coastal sand dunes." },
              { title: "Sri Siva Subramaniya Temple", desc: "A massive, brightly colored Hindu temple located in Nadi." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-cyan-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-cyan-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-cyan-900">🥥 Pure Fiji Skincare:</span>{" "}
              Luxurious, globally famous skincare products made from local cold-pressed coconut oil.
            </li>
            <li>
              <span className="font-semibold text-cyan-900">🧉 Tanoa Bowls:</span>{" "}
              Beautifully carved wooden bowls used traditionally for preparing and serving Kava.
            </li>
            <li>
              <span className="font-semibold text-cyan-900">🦪 Black Pearls:</span>{" "}
              Rare, stunningly beautiful pearls cultivated in the pristine waters of Savusavu.
            </li>
            <li>
              <span className="font-semibold text-cyan-900">🪵 Lali (Wooden Drums):</span>{" "}
              Traditional slit drums, historically used for communication across villages.
            </li>
            <li>
              <span className="font-semibold text-cyan-900">🌿 Masi (Tapa Cloth):</span>{" "}
              Bark cloth adorned with striking, geometric black and brown traditional patterns.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Nadi Municipal Market and the Suva Flea Market are fantastic places to experience local Fijian 
            culture. Here you can find fresh tropical fruits, traditional spices, and authentic wooden handicrafts.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fiji;
