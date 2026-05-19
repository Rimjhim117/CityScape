// src/pages/SouthKorea.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const SouthKorea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/South-ksorea.jpg"
          alt="South Korea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            South Korea
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A dynamic country where tranquil ancient palaces exist side-by-side with high-tech, futuristic cities.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About South Korea</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            South Korea is known for its incredibly fast-paced, high-tech culture, juxtaposed beautifully
            with deep-rooted traditions. It is a land of green, hilly countryside dotted with cherry trees
            and centuries-old Buddhist temples, alongside coastal fishing villages and massive, glowing metropolises.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Seoul", desc: "The massive, 24/7 capital city blending modern skyscrapers with ancient palaces." },
              { name: "Busan", desc: "A large port city known for its beaches, mountains, and spectacular seafood." },
              { name: "Incheon", desc: "A bustling coastal city featuring an ultra-modern airport and a vibrant Chinatown." },
              { name: "Jeju City", desc: "The capital of Jeju Island, famous for volcanic landscapes and beach resorts." },
              { name: "Gyeongju", desc: "The 'Museum Without Walls', known for extensive ruins of the ancient Silla kingdom." },
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
              { title: "Gyeongbokgung Palace", desc: "The grandest of Seoul's five ancient royal palaces." },
              { title: "N Seoul Tower", desc: "An iconic communication and observation tower offering panoramic views of Seoul." },
              { title: "Bukchon Hanok Village", desc: "A beautifully preserved traditional Korean village in the heart of the city." },
              { title: "Jeju Volcanic Island", desc: "A stunning UNESCO World Heritage site with lava tubes and unique geology." },
              { title: "DMZ (Demilitarized Zone)", desc: "The heavily fortified border separating North and South Korea." },
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
              <span className="font-semibold text-blue-900">🧴 K-Beauty Products:</span>{" "}
              World-leading skincare and cosmetics known for innovative ingredients and high quality.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🌿 Ginseng:</span>{" "}
              High-grade Korean red ginseng, prized globally for its health and medicinal properties.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🍵 Traditional Tea Sets:</span>{" "}
              Beautifully crafted celadon and porcelain ceramics used in traditional Korean tea ceremonies.
            </li>
            <li>
              <span className="font-semibold text-blue-900">👗 Hanbok:</span>{" "}
              The stunning, brightly colored traditional Korean attire, often tailored custom for visitors.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🌶️ Gochujang & Kimchi:</span>{" "}
              The essential, deeply flavorful fermented pastes and vegetables that define Korean cuisine.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in South Korea is a serious pastime. Visit the sprawling, endless stalls of Namdaemun
            Market for traditional goods and incredible street food, or explore the trendy, cosmetic-filled
            streets of Myeongdong.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default SouthKorea;
