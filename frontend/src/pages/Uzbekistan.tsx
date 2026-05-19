// src/pages/Uzbekistan.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Uzbekistan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Uzbekistan.jpg"
          alt="Uzbekistan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Uzbekistan
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The heart of the Silk Road, adorned with staggering Islamic architecture, blue mosaics, and ancient history.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-teal-900 mb-6">About Uzbekistan</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located in Central Asia, Uzbekistan is deeply defined by its pivotal role on the ancient Silk Road. 
            It is a country of breathtaking architectural wonders, featuring massive madrasas and mosques covered 
            in intricate, turquoise tilework that have stood the test of time through centuries of empires.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-teal-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Samarkand", desc: "A legendary Silk Road city known for its magnificent Registan square." },
              { name: "Bukhara", desc: "An ancient 'museum city' featuring over 140 architectural monuments." },
              { name: "Tashkent", desc: "The sprawling, modern capital blending Soviet-era architecture with Islamic heritage." },
              { name: "Khiva", desc: "A spectacularly preserved, walled desert oasis city." },
              { name: "Nukus", desc: "Located in the remote west, famous for the avant-garde Savitsky Art Museum." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-teal-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-teal-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Registan", desc: "The jaw-dropping public square in Samarkand, framed by three massive madrasas." },
              { title: "Gur-e-Amir", desc: "The incredibly ornate mausoleum of the Asian conqueror Timur (Tamerlane)." },
              { title: "Itchan Kala", desc: "The incredibly preserved, sand-colored walled inner town of Khiva." },
              { title: "Kalyan Minaret", desc: "A towering, intricate brick minaret in Bukhara that survived Genghis Khan." },
              { title: "Shah-i-Zinda", desc: "A stunning, vivid blue necropolis featuring some of the richest tilework in the world." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-teal-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-teal-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-teal-900">🧵 Ikat Silk (Adras):</span>{" "}
              Vibrant, geometrically patterned silk fabric woven predominantly in the Margilan region.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🏺 Rishtan Ceramics:</span>{" "}
              Beautifully intricate, blue-and-green glazed pottery renowned throughout Central Asia.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🔪 Pchak Knives:</span>{" "}
              Traditional, handmade daggers with curved blades and intricately adorned handles.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🧢 Chust Skullcaps (Tubeteika):</span>{" "}
              The traditional, embroidered square hats worn by men across the country.
            </li>
            <li>
              <span className="font-semibold text-teal-900">🍇 Dried Fruits & Nuts:</span>{" "}
              World-class dried apricots, raisins, and almonds sourced from the fertile Fergana Valley.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Uzbekistan feels like stepping back in time. The Trading Domes of Bukhara are an 
            unforgettable experience, where ancient, vaulted brick bazaars are still filled with silk weavers, 
            blacksmiths, and spice merchants today.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Uzbekistan;
