// src/pages/Poland.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Poland = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Poland.jpg"
          alt="Poland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Poland
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A resilient, deeply historical nation offering beautifully rebuilt old towns, hearty cuisine, and dense primeval forests.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Poland</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Poland is a large, proud country in Central Europe that has profoundly shaped the continent's history. 
            Despite immense wartime destruction, its people meticulously rebuilt its historic centers. Today, 
            it offers a fascinating blend of medieval architecture, vibrant modern culture, and deeply moving 
            historical sites.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Kraków", desc: "The remarkably preserved former royal capital, famous for its massive medieval market square." },
              { name: "Warsaw", desc: "The sprawling, dynamic capital, completely rebuilt from the rubble of WWII." },
              { name: "Gdańsk", desc: "A beautiful, deeply historical port city on the Baltic coast famous for amber." },
              { name: "Wrocław", desc: "A charming, colorful city known for its hundreds of bridges and tiny bronze gnome statues." },
              { name: "Poznań", desc: "One of the oldest cities in Poland, boasting a vibrant, Renaissance-style Old Market Square." },
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
              { title: "Auschwitz-Birkenau", desc: "The harrowing, immensely important former Nazi concentration and extermination camp." },
              { title: "Wawel Royal Castle", desc: "A stunning, fortified architectural complex and symbol of Polish royalty in Kraków." },
              { title: "Wieliczka Salt Mine", desc: "An incredible, massive underground labyrinth featuring chapels and statues carved entirely out of salt." },
              { title: "Białowieża Forest", desc: "One of the last and largest remaining parts of the immense primeval forest that once spanned Europe." },
              { title: "Malbork Castle", desc: "The largest castle in the world measured by land area, originally built by the Teutonic Knights." },
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
              <span className="font-semibold text-red-900">🪨 Baltic Amber:</span>{" "}
              Often called 'Baltic Gold', beautifully crafted fossilized tree resin jewelry, especially from Gdańsk.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍽️ Bolesławiec Pottery:</span>{" "}
              Distinctive, hand-stamped, and incredibly durable blue-and-white folk ceramics.
            </li>
            <li>
              <span className="font-semibold text-red-900">🥟 Pierogi & Kielbasa:</span>{" "}
              The ultimate Polish comfort foods: delicious filled dumplings and incredibly high-quality smoked sausages.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍸 Polish Vodka (Wódka):</span>{" "}
              World-renowned, pure vodkas, including the famous Bison Grass Vodka (Żubrówka).
            </li>
            <li>
              <span className="font-semibold text-red-900">🪵 Wooden Carvings:</span>{" "}
              Traditional, intricate folk art, wooden boxes, and handmade toys from the Tatra Mountains.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Cloth Hall (Sukiennice) in the center of Kraków's Main Market Square is one of the oldest 
            shopping malls in the world and the perfect place to buy authentic amber, wood carvings, and lace.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-gray-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poland;
