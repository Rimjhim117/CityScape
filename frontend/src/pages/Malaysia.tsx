// src/pages/Malaysia.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Malaysia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Malaysia.jpg"
          alt="Malaysia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Malaysia
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            Truly Asia — a dynamic melting pot of Malay, Chinese, and Indian cultures, set against jungles and skyscrapers.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Malaysia</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Split into two distinct regions, Peninsula Malaysia and East Malaysia (Borneo), the country is a 
            fascinating blend of the ancient and the hyper-modern. You can explore dense, ancient rainforests 
            and pristine beaches one day, and wander through ultra-modern cities packed with some of the best 
            street food in the world the next.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Kuala Lumpur", desc: "The dynamic capital city, famous for its skyline and the Petronas Twin Towers." },
              { name: "George Town (Penang)", desc: "A vibrant, historic city renowned globally as a street food paradise." },
              { name: "Malacca", desc: "A UNESCO World Heritage city rich in colonial history and Peranakan culture." },
              { name: "Kota Kinabalu", desc: "The bustling capital of Sabah on Borneo, gateway to Mount Kinabalu." },
              { name: "Kuching", desc: "A relaxed, charming riverside city in Sarawak, known as the 'Cat City'." },
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
              { title: "Petronas Twin Towers", desc: "The iconic, gleaming 88-story twin towers in Kuala Lumpur." },
              { title: "Batu Caves", desc: "A massive limestone hill featuring a series of caves and Hindu temples." },
              { title: "Mount Kinabalu", desc: "The highest mountain in Malaysia, offering spectacular, challenging climbs." },
              { title: "Taman Negara", desc: "One of the world's oldest deciduous rainforests, featuring a famous canopy walk." },
              { title: "Perhentian Islands", desc: "A group of beautiful, coral-fringed islands on the east coast." },
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
              <span className="font-semibold text-blue-900">🧵 Batik & Songket:</span>{" "}
              Beautifully dyed batik prints and luxurious songket fabric woven with gold or silver threads.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🏺 Pewter Goods:</span>{" "}
              High-quality, incredibly detailed pewter crafts, famously produced by Royal Selangor.
            </li>
            <li>
              <span className="font-semibold text-blue-900">☕ White Coffee:</span>{" "}
              Rich, smooth coffee beans roasted with palm oil margarine, originally from Ipoh.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🪁 Wau (Traditional Kites):</span>{" "}
              Elaborate, beautifully decorated traditional Malay kites, often hung as art.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🥥 Dodol:</span>{" "}
              A sweet, sticky toffee-like confection made from coconut milk, jaggery, and rice flour.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Central Market (Pasar Seni) in Kuala Lumpur is an excellent place to browse Malaysian arts and crafts, 
            while the Jonker Street Night Market in Malacca offers a spectacular mix of antiques, local snacks, and souvenirs.
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

export default Malaysia;
