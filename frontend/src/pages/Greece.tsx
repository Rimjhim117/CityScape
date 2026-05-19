// src/pages/Greece.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Greece = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Greece.jpg"
          alt="Greece"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Greece
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The cradle of Western civilization, a sun-drenched paradise of mythical ruins and deep blue seas.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Greece</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Greece is a country steeped in mythology, philosophy, and history, consisting of a mountainous 
            mainland and thousands of beautiful islands scattered across the Aegean and Ionian seas. It offers 
            a spectacular mix of ancient archaeological sites, white-washed villages, and stunning coastlines.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Athens", desc: "The historical capital, dominated by 5th-century BC landmarks like the Acropolis." },
              { name: "Santorini", desc: "A spectacular volcanic island famous for its cliffside, blue-domed villages." },
              { name: "Mykonos", desc: "A vibrant, glamorous island known for its beautiful beaches and intense summer party scene." },
              { name: "Crete", desc: "The largest Greek island, blending ancient Minoan ruins with dramatic mountain landscapes." },
              { name: "Thessaloniki", desc: "The cultural capital of the north, famous for its festivals, food, and Byzantine history." },
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
              { title: "The Acropolis", desc: "The ancient citadel overlooking Athens, home to the iconic Parthenon." },
              { title: "Meteora", desc: "Breathtaking Eastern Orthodox monasteries built precariously on top of immense natural sandstone pillars." },
              { title: "Delphi", desc: "The ancient sanctuary that was once considered the center of the world and home to the Oracle." },
              { title: "Knossos Palace", desc: "The incredibly complex ancient Minoan palace on Crete, associated with the Minotaur myth." },
              { title: "Navagio Beach (Shipwreck Beach)", desc: "A stunning, secluded cove in Zakynthos featuring a rusted shipwreck on white sands." },
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
              <span className="font-semibold text-blue-900">🫒 Olive Oil:</span>{" "}
              Often called "liquid gold," Greece produces some of the finest extra virgin olive oil in the world.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🍯 Greek Honey:</span>{" "}
              Thick, incredibly flavorful honey, often infused with wild thyme or pine.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🧿 Evil Eye (Mati) Jewelry:</span>{" "}
              Traditional blue glass charms used to ward off curses, crafted into beautiful jewelry.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🏺 Komboloi (Worry Beads):</span>{" "}
              Strings of beads made from amber, glass, or wood, traditionally used to pass the time and relieve stress.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🧼 Olive Oil Soap:</span>{" "}
              Natural, gentle soaps that are a staple of Greek skincare.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Monastiraki Flea Market in Athens is a vibrant, chaotic place to hunt for antiques, handmade 
            leather sandals, and authentic jewelry in the shadow of the Acropolis.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Greece;
