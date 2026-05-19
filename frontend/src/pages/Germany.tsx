// src/pages/Germany.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Germany = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-yellow-600">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Germany.jpg"
          alt="Germany"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Germany
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A powerhouse of engineering, deep history, fairytale castles, and rich cultural traditions.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20 bg-white">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Germany</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located in the heart of Europe, Germany seamlessly blends an incredibly complex, 
            powerful history with a progressive, modern mindset. Visitors are drawn to its 
            vibrant, avant-garde cities, dense, mythic forests, stunning alpine scenery in the south, 
            and world-famous festivals like Oktoberfest.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Berlin", desc: "The gritty, wildly creative capital known for its intense history and unrivaled nightlife." },
              { name: "Munich", desc: "The wealthy, traditional heart of Bavaria, famous for beer halls and proximity to the Alps." },
              { name: "Hamburg", desc: "A massive, maritime port city characterized by hundreds of canals and red-brick architecture." },
              { name: "Frankfurt", desc: "The financial hub of Europe, featuring a striking skyline contrasting with traditional altstadts." },
              { name: "Cologne", desc: "A vibrant city on the Rhine River, dominated by its awe-inspiring, massive twin-spired Cathedral." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-gray-100"
              >
                <h4 className="font-bold text-xl text-gray-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Neuschwanstein Castle", desc: "The quintessential, spectacular fairytale castle nestled in the Bavarian Alps." },
              { title: "Brandenburg Gate", desc: "The iconic neoclassical monument and symbol of a reunited Berlin." },
              { title: "The Black Forest", desc: "A vast, dark, and beautiful forested mountain region known for cuckoo clocks and cake." },
              { title: "Cologne Cathedral", desc: "A masterpiece of High Gothic architecture and one of the largest cathedrals in Europe." },
              { title: "The Romantic Road", desc: "A scenic route passing through picturesque, perfectly preserved medieval towns like Rothenburg." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-gray-100"
              >
                <h4 className="font-bold text-lg text-gray-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-gray-900">🍺 Beer Steins:</span>{" "}
              Traditional, ornate stoneware or glass mugs, often featuring intricate pewter lids.
            </li>
            <li>
              <span className="font-semibold text-gray-900">🕰️ Cuckoo Clocks:</span>{" "}
              Authentic, hand-carved wooden mechanical clocks produced in the Black Forest region.
            </li>
            <li>
              <span className="font-semibold text-gray-900">🍫 German Chocolate & Marzipan:</span>{" "}
              High-quality treats, particularly the famous marzipan originating from Lübeck.
            </li>
            <li>
              <span className="font-semibold text-gray-900">🔪 Solingen Cutlery:</span>{" "}
              World-renowned, incredibly sharp, and durable kitchen knives forged in the "City of Blades."
            </li>
            <li>
              <span className="font-semibold text-gray-900">👗 Dirndl & Lederhosen:</span>{" "}
              Traditional Bavarian folk costumes (Tracht) worn proudly during festivals.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Germany is arguably the best country in the world for Christmas Markets (Weihnachtsmarkt). 
            Visiting the historic markets in Nuremberg or Dresden during winter is a magical experience 
            filled with handcrafted wooden toys, glühwein, and gingerbread.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-gray-800 to-red-800 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Germany;
