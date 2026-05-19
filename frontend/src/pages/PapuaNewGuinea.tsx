// src/pages/PapuaNewGuinea.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const PapuaNewGuinea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "oceania";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Papua New Guinea.jpg"
          alt="Papua New Guinea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Papua New Guinea
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            One of the most culturally diverse countries on Earth, known for its dense rainforests and incredible tribal heritage.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Papua New Guinea</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located in the southwestern Pacific, Papua New Guinea occupies the eastern half of the island of New Guinea. 
            It is a deeply fascinating, raw, and rugged country boasting over 800 known languages and a largely rural 
            population that maintains deeply traditional ways of life in isolated highland valleys and coastal villages.
          </p>
        </section>

        {/* Top Cities & Regions */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Port Moresby", desc: "The bustling capital and main gateway city located on the Gulf of Papua." },
              { name: "Mount Hagen", desc: "A major city in the Highlands, famously known for its vibrant tribal sing-sing festivals." },
              { name: "Madang", desc: "Often called the prettiest town in the South Pacific, famous for diving and coral reefs." },
              { name: "Goroka", desc: "Another Highland city, renowned for its coffee plantations and the Asaro Mudmen." },
              { name: "Rabaul", desc: "A town on the island of New Britain, known for its dramatic active volcanoes and WWII history." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-green-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Kokoda Track", desc: "A grueling, historically significant 96-kilometer WWII jungle trail across the Owen Stanley Range." },
              { title: "Tari Basin", desc: "A high-altitude valley famous for bird watching and the traditional Huli Wigmen." },
              { title: "Sepik River", desc: "One of the largest rivers in the Asia-Pacific, offering incredible cultural cruises." },
              { title: "Tavurvur Volcano", desc: "A highly active stratovolcano near Rabaul that frequently emits ash clouds." },
              { title: "Kimbe Bay", desc: "A world-renowned diving destination boasting over 60% of the coral species in the entire Indo-Pacific." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-green-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-green-900">🪵 Sepik Wood Carvings:</span>{" "}
              Incredibly elaborate, spiritual wooden masks and statues carved by the tribes of the Sepik River.
            </li>
            <li>
              <span className="font-semibold text-green-900">☕ Goroka Coffee:</span>{" "}
              Premium, high-altitude Arabica coffee considered among the best in the world.
            </li>
            <li>
              <span className="font-semibold text-green-900">👝 Bilum Bags:</span>{" "}
              Iconic, brightly colored, handwoven string bags used traditionally to carry goods (and babies!).
            </li>
            <li>
              <span className="font-semibold text-green-900">🐚 Shell Jewelry:</span>{" "}
              Traditional necklaces and adornments made from cowrie and kina shells, historically used as currency.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍫 Bougainville Cocoa:</span>{" "}
              High-quality, rich cocoa beans produced in the autonomous region of Bougainville.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Port Moresby Nature Park occasionally hosts craft markets, but the best way to buy authentic 
            goods like Bilum bags and carvings is directly from the artisans in the Highland villages or along the Sepik River.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-green-600 to-yellow-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default PapuaNewGuinea;
