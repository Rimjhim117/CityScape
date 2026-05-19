// src/pages/Austria.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Austria = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Austria.jpg"
          alt="Austria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Austria
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A land of imperial grandeur, classical music, and some of the most dramatic alpine scenery in Europe.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Austria</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Nestled in the heart of the Alps, Austria is a breathtakingly beautiful country blending high 
            mountain adventure with elegant, historic cities. It is deeply proud of its heritage as the 
            former center of the Habsburg Empire and the undisputed classical music capital of the world.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Vienna", desc: "The magnificent, imperial capital, famous for opulent palaces and classical music." },
              { name: "Salzburg", desc: "The birthplace of Mozart and setting of 'The Sound of Music', dominated by a hilltop fortress." },
              { name: "Innsbruck", desc: "A colorful, vibrant city nestled deep in a valley, surrounded by towering, snow-capped Alps." },
              { name: "Graz", desc: "A creative, relaxed city known for its striking mix of Renaissance and modern architecture." },
              { name: "Hallstatt", desc: "A wildly picturesque, impossibly charming village situated on a glassy alpine lake." },
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
              { title: "Schönbrunn Palace", desc: "The spectacular, massive former summer residence of the Habsburg monarchs in Vienna." },
              { title: "Hohensalzburg Fortress", desc: "One of the largest fully preserved medieval castles in Europe, overlooking Salzburg." },
              { title: "The Hofburg", desc: "The sprawling imperial palace complex in the center of Vienna, housing numerous museums." },
              { title: "Grossglockner High Alpine Road", desc: "A breathtaking, winding panoramic toll road leading to Austria's highest peak." },
              { title: "Belvedere Palace", desc: "A stunning historic building complex in Vienna holding an incredible art collection, including works by Klimt." },
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
              <span className="font-semibold text-red-900">🍰 Sachertorte:</span>{" "}
              The world-famous, dense chocolate cake layered with apricot jam, originating in Vienna.
            </li>
            <li>
              <span className="font-semibold text-red-900">💎 Swarovski Crystal:</span>{" "}
              High-quality, brilliantly cut crystal jewelry and figurines produced in Tyrol.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍫 Mozartkugel:</span>{" "}
              A delicious confection of pistachio marzipan and nougat covered in dark chocolate from Salzburg.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍷 Austrian Wine:</span>{" "}
              Excellent, crisp white wines like Grüner Veltliner, particularly from the Wachau Valley.
            </li>
            <li>
              <span className="font-semibold text-red-900">🎃 Pumpkin Seed Oil:</span>{" "}
              A dark, intensely nutty, and healthy oil famously produced in the Styria region.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Austria often revolves around its incredible café culture. Spending an afternoon in 
            a historic Viennese coffee house allows you to sample legendary pastries before exploring boutique 
            shops for authentic local crafts and delicacies.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Austria;
