// src/pages/Namibia.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Namibia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Namibia.jpg"
          alt="Namibia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Namibia
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A land of stark contrasts — towering red sand dunes, desolate coastlines, and incredible wildlife.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-orange-900 mb-6">About Namibia</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located in Southern Africa, Namibia is defined by the Namib Desert, one of the oldest deserts in the world. 
            It is a country of breathtaking, other-worldly landscapes, from the towering red dunes of Sossusvlei to the 
            hauntingly beautiful Skeleton Coast, offering an unforgettable adventure for nature lovers.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-orange-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Windhoek", desc: "The clean, safe capital city with German colonial architecture." },
              { name: "Swakopmund", desc: "A coastal town blending German charm with adrenaline sports." },
              { name: "Walvis Bay", desc: "A major port city famous for its lagoon filled with flamingos." },
              { name: "Lüderitz", desc: "A surreal, isolated coastal town near an abandoned diamond mining settlement." },
              { name: "Ondangwa", desc: "An important commercial hub in the northern Ovambo region." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-orange-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-orange-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Sossusvlei", desc: "Iconic towering red sand dunes in the heart of the Namib Desert." },
              { title: "Etosha National Park", desc: "A massive salt pan surrounded by incredible wildlife viewing." },
              { title: "Skeleton Coast", desc: "A desolate, foggy coastline littered with historic shipwrecks." },
              { title: "Fish River Canyon", desc: "The second largest canyon in the world, offering spectacular hikes." },
              { title: "Deadvlei", desc: "A haunting clay pan featuring ancient, dead camel thorn trees." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-orange-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-orange-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-orange-900">💎 Gemstones:</span>{" "}
              High-quality diamonds and semi-precious stones like tourmaline and amethyst.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🪵 Wood Carvings:</span>{" "}
              Beautifully crafted bowls, masks, and animal figurines from local markets.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🥩 Biltong:</span>{" "}
              Traditional dried meat, similar to jerky, often made from game like springbok or kudu.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🛖 Himba Crafts:</span>{" "}
              Unique leather and metal jewelry crafted by the semi-nomadic Himba people.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🧶 Swakara Wool:</span>{" "}
              Premium Karakul sheep wool used in high-end fashion and traditional weaving.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Namibia offers a mix of modern boutiques in Windhoek and Swakopmund alongside 
            roadside craft markets where you can find authentic goods directly from local artisans.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Namibia;
