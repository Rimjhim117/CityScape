// src/pages/Indonesia.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Indonesia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Indonesia.jpg"
          alt="Indonesia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Indonesia
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A vast archipelago of thousands of islands, blending fiery volcanoes, dense jungles, and rich spiritual heritage.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Indonesia</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Spanning the equator, Indonesia is the world's largest island country. It is incredibly diverse, 
            with hundreds of distinct native ethnic and linguistic groups. From the serene, spiritual atmosphere 
            of Bali to the chaotic energy of Jakarta and the ancient temples of Java, it offers endless exploration.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Jakarta", desc: "The massive, dynamic capital city located on the island of Java." },
              { name: "Ubud", desc: "The cultural heart of Bali, known for traditional crafts and dance." },
              { name: "Yogyakarta", desc: "The soul of Java, famous for traditional arts and ancient temples." },
              { name: "Bandung", desc: "A cooler, high-altitude city known for its colonial architecture and fashion." },
              { name: "Surabaya", desc: "Indonesia's second-largest city and a bustling commercial hub." },
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
              { title: "Borobudur", desc: "The world's largest Buddhist temple, a majestic 9th-century monument." },
              { title: "Komodo National Park", desc: "A protected volcanic region home to the giant Komodo dragon." },
              { title: "Mount Bromo", desc: "An active volcano set in a massive, otherworldly caldera in East Java." },
              { title: "Prambanan", desc: "An incredible 9th-century Hindu temple compound dedicated to Shiva." },
              { title: "Raja Ampat", desc: "A breathtaking archipelago offering some of the best scuba diving on Earth." },
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
              <span className="font-semibold text-red-900">🧵 Batik Fabric:</span>{" "}
              The iconic Indonesian textile created using a delicate, wax-resist dyeing technique.
            </li>
            <li>
              <span className="font-semibold text-red-900">☕ Kopi Luwak & Sumatra Coffee:</span>{" "}
              Some of the most unique and highly regarded coffee beans in the world.
            </li>
            <li>
              <span className="font-semibold text-red-900">🪵 Wood Carvings:</span>{" "}
              Intricate Balinese wooden masks, statues, and furniture.
            </li>
            <li>
              <span className="font-semibold text-red-900">💍 Silver Jewelry:</span>{" "}
              Detailed silver smithing, particularly famous from the Celuk village in Bali.
            </li>
            <li>
              <span className="font-semibold text-red-900">🗡️ Kris (Keris):</span>{" "}
              Traditional asymmetrical daggers, often considered to hold spiritual power.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Indonesia ranges from the massive modern malls of Jakarta to traditional art markets 
            like the Ubud Art Market in Bali, where you can find genuine handcrafted textiles and woodwork 
            while interacting directly with the artisans.
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

export default Indonesia;
