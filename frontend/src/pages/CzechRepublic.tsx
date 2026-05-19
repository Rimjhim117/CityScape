// src/pages/CzechRepublic.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const CzechRepublic = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Czech Republic.jpg"
          alt="Czech Republic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Czech Republic
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A landlocked gem of Central Europe, famous for spectacularly preserved medieval cities, majestic castles, and world-class beer.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About the Czech Republic</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            The Czech Republic (Czechia) boasts an incredibly rich, turbulent history at the crossroads of Europe. 
            Because it largely escaped the bombings of WWII, it features some of the most stunning, perfectly 
            preserved Gothic, Renaissance, and Baroque architecture in the world.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Prague", desc: "The 'City of a Hundred Spires', one of the most beautiful and atmospheric capitals in Europe." },
              { name: "Český Krumlov", desc: "A spectacularly preserved, fairytale medieval town nestled in a horseshoe bend of the Vltava River." },
              { name: "Brno", desc: "The vibrant, student-focused capital of the Moravia region, known for modernist architecture." },
              { name: "Karlovy Vary", desc: "A deeply historic spa town famous for its thermal springs and grand colonnades." },
              { name: "Plzeň (Pilsen)", desc: "The birthplace of Pilsner beer, featuring extensive underground historical tunnels." },
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
              { title: "Prague Castle", desc: "The largest ancient castle complex in the world, dominating the Prague skyline." },
              { title: "Charles Bridge", desc: "A stunning, historic stone bridge lined with statues crossing the Vltava River." },
              { title: "Old Town Square & Astronomical Clock", desc: "The spectacular heart of Prague, featuring a 600-year-old working mechanical clock." },
              { title: "Sedlec Ossuary (Bone Church)", desc: "A small, fascinating chapel creatively adorned with the bones of tens of thousands of people." },
              { title: "Karlštejn Castle", desc: "A massive, classic Gothic castle built by Emperor Charles IV to safeguard royal treasures." },
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
              <span className="font-semibold text-red-900">🍺 Czech Beer (Pivo):</span>{" "}
              Considered by many to be the best in the world, specifically authentic Pilsner Urquell.
            </li>
            <li>
              <span className="font-semibold text-red-900">💎 Bohemian Crystal:</span>{" "}
              Incredibly high-quality, hand-cut, and engraved glass that is world-renowned.
            </li>
            <li>
              <span className="font-semibold text-red-900">🔴 Bohemian Garnet:</span>{" "}
              Deep, fiery red semi-precious stones traditionally set in beautiful gold or silver jewelry.
            </li>
            <li>
              <span className="font-semibold text-red-900">🎭 Wooden Marionettes:</span>{" "}
              Elaborate, hand-carved string puppets reflecting a deep national tradition of puppetry.
            </li>
            <li>
              <span className="font-semibold text-red-900">🌿 Becherovka:</span>{" "}
              A traditional, herbal bitter liqueur famously produced in the spa town of Karlovy Vary.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Wandering the cobblestone streets near Charles Bridge offers endless opportunities to browse 
            shops for authentic Bohemian crystal and garnets. During the holidays, the Prague Christmas 
            Markets are among the most beautiful and traditional in all of Europe.
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

export default CzechRepublic;
