// src/pages/Norway.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Norway = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Norway.jpg"
          alt="Norway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Norway
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A rugged, spectacular land defined by immense, deep-blue fjords, the Northern Lights, and Viking heritage.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Norway</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Norway is an incredibly dramatic, prosperous Scandinavian nation. It is globally famous for its 
            unparalleled natural beauty—specifically its massive, glacier-carved fjords that slice deep into 
            its mountainous coastline. It is a haven for outdoor enthusiasts and nature lovers.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Oslo", desc: "The fast-growing, highly modern capital city surrounded by forests and a beautiful fjord." },
              { name: "Bergen", desc: "A stunning, rainy coastal city known for its historic, colorful wooden wharf (Bryggen)." },
              { name: "Tromsø", desc: "The 'Capital of the Arctic', arguably the best place in the world to see the Northern Lights." },
              { name: "Stavanger", desc: "A wealthy, oil-rich city featuring well-preserved wooden houses and access to Lysefjord." },
              { name: "Trondheim", desc: "A historic, technological hub famous for the spectacular Nidaros Cathedral." },
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
              { title: "Geirangerfjord", desc: "A deeply spectacular, UNESCO-protected fjord known for massive, cascading waterfalls." },
              { title: "Preikestolen (Pulpit Rock)", desc: "A massive, flat-topped cliff rising 604 meters sheer above the Lysefjord." },
              { title: "Lofoten Islands", desc: "An incredibly dramatic archipelago known for jagged peaks rising straight from the sea." },
              { title: "Vigeland Sculpture Park", desc: "A massive outdoor park in Oslo displaying over 200 striking human sculptures." },
              { title: "Flåm Railway", desc: "One of the steepest, most incredibly scenic train rides in the world." },
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
              <span className="font-semibold text-blue-900">🧶 Dale of Norway Sweaters:</span>{" "}
              High-quality, incredibly warm, and iconic traditional Norwegian wool sweaters.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🧀 Brunost (Brown Cheese):</span>{" "}
              A unique, sweet, caramel-like cheese that is a staple of the Norwegian diet.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🐟 Smoked Salmon & Caviar:</span>{" "}
              Some of the freshest, highest quality cold-water seafood available in the world.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🪵 Rosemaling Crafts:</span>{" "}
              Traditional, decorative folk-art painting applied to wooden bowls, plates, and furniture.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🔪 Freia Chocolate:</span>{" "}
              Beloved, classic Norwegian milk chocolate, famously wrapped in yellow packaging.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Mathallen food hall in Oslo is an excellent place to sample high-quality, artisanal 
            Norwegian foods, including reindeer meat and local cheeses, in a warm, modern setting.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Norway;
