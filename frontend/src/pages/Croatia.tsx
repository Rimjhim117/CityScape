// src/pages/Croatia.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Croatia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Croatia.jpg"
          alt="Croatia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Croatia
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A stunning Mediterranean jewel famous for its sapphire waters, thousands of islands, and ancient walled cities.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Croatia</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Croatia boasts one of the most spectacularly jagged and beautiful coastlines in Europe. Stretching 
            along the Adriatic Sea, it offers a perfect blend of Roman ruins, Venetian-style coastal towns, 
            immense national parks with cascading waterfalls, and an incredibly relaxed Mediterranean lifestyle.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Dubrovnik", desc: "The 'Pearl of the Adriatic', an impossibly beautiful, heavily fortified ancient walled city." },
              { name: "Split", desc: "A bustling coastal city built around the sprawling, ancient ruins of Diocletian's Palace." },
              { name: "Zagreb", desc: "The inland capital, known for its Austro-Hungarian architecture, museums, and vibrant cafe culture." },
              { name: "Zadar", desc: "A historic coastal town famous for its Roman ruins and the unique Sea Organ." },
              { name: "Rovinj", desc: "A romantic, colorful fishing port on the Istrian peninsula with strong Venetian influences." },
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
              { title: "Plitvice Lakes National Park", desc: "A breathtaking network of 16 terraced lakes connected by hundreds of waterfalls." },
              { title: "Walls of Dubrovnik", desc: "Massive, 16th-century stone walls that completely encircle the historic Old Town." },
              { title: "Diocletian's Palace", desc: "A massive Roman palace in Split that forms the living heart of the modern city." },
              { title: "Hvar Island", desc: "A glamorous, sun-drenched island known for lavender fields and vibrant nightlife." },
              { title: "Krka National Park", desc: "Another spectacular national park featuring swimmable, cascading waterfalls." },
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
              <span className="font-semibold text-red-900">👔 The Cravat (Tie):</span>{" "}
              Croatia is the historical birthplace of the necktie, offering premium silk cravats.
            </li>
            <li>
              <span className="font-semibold text-red-900">🌿 Lavender Products:</span>{" "}
              High-quality essential oils, soaps, and sachets sourced from the fields of Hvar.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍷 Truffles & Olive Oil:</span>{" "}
              Istria is globally renowned for its incredibly rich white truffles and premium olive oils.
            </li>
            <li>
              <span className="font-semibold text-red-900">🪨 Brač Stone:</span>{" "}
              A brilliant white limestone from the island of Brač, used to craft beautiful bowls and jewelry.
            </li>
            <li>
              <span className="font-semibold text-red-900">🥃 Rakija:</span>{" "}
              The potent, traditional fruit brandy available in many flavors like plum or honey.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Dolac Market in Zagreb, with its iconic red umbrellas, is the perfect place to buy fresh 
            produce and local Rakija. On the coast, small artisan shops sell beautiful items carved from 
            authentic Brač stone and hand-harvested sea salt.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Croatia;
