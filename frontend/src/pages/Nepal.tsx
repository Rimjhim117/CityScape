// src/pages/Nepal.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Nepal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Nepal.jpg"
          alt="Nepal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Nepal
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The roof of the world — where ancient spiritual traditions meet the towering peaks of the Himalayas.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Nepal</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Nestled between India and China, Nepal is defined by its breathtaking mountain landscapes, 
            including Mount Everest. Beyond the trekking trails, it is a deeply spiritual country where 
            Hinduism and Buddhism seamlessly intertwine, evident in its countless ancient temples and stupas.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Kathmandu", desc: "The vibrant capital, rich in ancient architecture and bustling, winding streets." },
              { name: "Pokhara", desc: "A serene lakeside city, acting as the gateway to the Annapurna Circuit." },
              { name: "Lalitpur (Patan)", desc: "Known for its incredibly preserved Durbar Square and fine artisan heritage." },
              { name: "Bhaktapur", desc: "An ancient, medieval city-state famous for its pottery and woodwork." },
              { name: "Lumbini", desc: "The revered birthplace of Siddhartha Gautama, the Lord Buddha." },
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
              { title: "Mount Everest", desc: "The highest mountain on Earth, drawing trekkers and climbers globally." },
              { title: "Boudhanath Stupa", desc: "One of the largest spherical stupas in the world and a center of Tibetan Buddhism." },
              { title: "Pashupatinath Temple", desc: "A sacred Hindu temple complex situated on the banks of the Bagmati River." },
              { title: "Swayambhunath (Monkey Temple)", desc: "An ancient religious complex perched on a hill overlooking Kathmandu." },
              { title: "Chitwan National Park", desc: "A preserved jungle region famous for its Bengal tigers and one-horned rhinos." },
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
              <span className="font-semibold text-red-900">🧶 Pashmina:</span>{" "}
              Ultra-soft, high-quality cashmere shawls woven from Himalayan mountain goat wool.
            </li>
            <li>
              <span className="font-semibold text-red-900">🎵 Singing Bowls:</span>{" "}
              Hand-hammered brass and copper bowls used for meditation and sound healing.
            </li>
            <li>
              <span className="font-semibold text-red-900">🖼️ Thangka Paintings:</span>{" "}
              Intricate, spiritual Tibetan Buddhist paintings usually depicting deities or mandalas.
            </li>
            <li>
              <span className="font-semibold text-red-900">🗡️ Khukuri Knives:</span>{" "}
              The traditional, inwardly curved knife associated with the Gurkha warriors.
            </li>
            <li>
              <span className="font-semibold text-red-900">📿 Mala Beads:</span>{" "}
              Strands of prayer beads made from bodhi seeds, sandalwood, or yak bone.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Thamel district in Kathmandu is a legendary hub for shopping, where you can browse endless 
            alleyways filled with mountaineering gear, artisan crafts, and the soothing sound of singing bowls.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nepal;
