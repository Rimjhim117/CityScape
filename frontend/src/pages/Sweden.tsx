// src/pages/Sweden.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Sweden = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Sweden.jpg"
          alt="Sweden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Sweden
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A sleek, progressive Scandinavian nation known for endless archipelagos, minimalist design, and deep green forests.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Sweden</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Sweden is the largest country in Northern Europe. It effortlessly blends vast, pristine wilderness 
            with highly sophisticated, modern cities. Known for its strong welfare state, commitment to sustainability, 
            and the cultural phenomenon of 'Fika', Sweden offers a remarkably high quality of life.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Stockholm", desc: "The stunning capital spread across 14 islands, known for its beauty and tech scene." },
              { name: "Gothenburg", desc: "A relaxed, maritime city on the west coast, featuring canals and a huge archipelago." },
              { name: "Malmö", desc: "A highly diverse, modern southern city connected to Denmark by the Öresund Bridge." },
              { name: "Uppsala", desc: "A historic university city known for its massive cathedral and youthful energy." },
              { name: "Kiruna", desc: "The northernmost city, a gateway to the Arctic Circle, the Icehotel, and the Northern Lights." },
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
              { title: "Vasa Museum", desc: "A fascinating museum in Stockholm housing a massive, almost fully intact 17th-century warship." },
              { title: "Gamla Stan", desc: "The incredibly well-preserved, colorful medieval old town of Stockholm." },
              { title: "Abisko National Park", desc: "A prime location in Swedish Lapland for experiencing the Midnight Sun and Aurora Borealis." },
              { title: "Drottningholm Palace", desc: "The spectacularly preserved private residence of the Swedish royal family." },
              { title: "The Icehotel", desc: "A world-famous hotel in Jukkasjärvi, rebuilt entirely out of snow and ice every winter." },
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
              <span className="font-semibold text-blue-900">🐴 Dala Horses (Dalahäst):</span>{" "}
              Traditional, brightly painted wooden horse statues that have become a symbol of Sweden.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🍬 Salt Licorice:</span>{" "}
              A deeply beloved, salty, and intense Scandinavian candy that is an acquired taste.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🔪 Swedish Steel:</span>{" "}
              High-quality knives and tools, famously produced by companies like Morakniv.
            </li>
            <li>
              <span className="font-semibold text-blue-900">💎 Crystal & Glassware:</span>{" "}
              World-renowned, elegant glass designs from the 'Kingdom of Crystal' in Småland.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🍒 Cloudberry Jam:</span>{" "}
              A delicious, golden jam made from rare, wild berries found in the Arctic bogs.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Sweden often focuses on clean, minimalist design and high-quality craftsmanship. 
            Exploring the boutiques of Södermalm in Stockholm allows you to find everything from cutting-edge 
            fashion to authentic, handcrafted Dala horses.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sweden;
