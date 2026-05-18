// src/pages/Japan.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Japan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-100">
      {/* Hero */}
      <div className="relative h-screen">
  <img
    src="/assets/Japan.jpg"
    alt="Japan"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
      Japan
    </h1>
    <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
      Where ancient traditions meet cutting-edge technology — from serene temples to neon-lit cityscapes.
    </p>
  </div>
</div>


      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Japan</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Japan is an island nation in East Asia known for its deep traditions, 
            advanced technology, and stunning landscapes. From cherry blossoms 
            and Mount Fuji to bustling cities like Tokyo and Osaka, Japan blends 
            the old and new seamlessly, offering a truly unique cultural experience.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Tokyo", desc: "Modern capital, shopping & nightlife" },
              { name: "Kyoto", desc: "Historic temples & gardens" },
              { name: "Osaka", desc: "Street food & entertainment" },
              { name: "Hiroshima", desc: "Peace Memorial & cultural heritage" },
              { name: "Sapporo", desc: "Snow festivals & beer culture" },
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
              { title: "Mount Fuji", desc: "Iconic snow-capped peak" },
              { title: "Fushimi Inari Shrine", desc: "Torii gate pathway in Kyoto" },
              { title: "Tokyo Skytree", desc: "Modern landmark & observation deck" },
              { title: "Himeji Castle", desc: "Stunning samurai-era fortress" },
              { title: "Arashiyama Bamboo Grove", desc: "Magical bamboo forest in Kyoto" },
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
              <span className="font-semibold text-red-900">🍵 Tea & Ceramics:</span>{" "}
              Matcha green tea and handcrafted teapots.
            </li>
            <li>
              <span className="font-semibold text-red-900">👘 Traditional Wear:</span>{" "}
              Kimono, yukata, and intricate fabric designs.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍣 Food Specialties:</span>{" "}
              Sushi knives, miso, sake, and artisanal snacks.
            </li>
            <li>
              <span className="font-semibold text-red-900">🎎 Handicrafts:</span>{" "}
              Origami art, wooden toys, and lacquerware.
            </li>
            <li>
              <span className="font-semibold text-red-900">🎌 Souvenirs:</span>{" "}
              Lucky charms (omamori), fans, and calligraphy sets.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Japan’s markets are a mix of tradition and modernity. From Tokyo’s 
            Tsukiji Market to Kyoto’s Nishiki Market, shopping here is about more than buying 
            goods — it’s about experiencing Japanese culture up close.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-pink-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Japan;
