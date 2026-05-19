// src/pages/Ethiopia.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Ethiopia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Ethiopia.jpg"
          alt="Ethiopia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Ethiopia
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Cradle of Humankind — unparalleled historical depth, dramatic landscapes, and the birthplace of coffee.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Ethiopia</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located in the Horn of Africa, Ethiopia is a land of ancient origins and dramatic geological contrasts. 
            It is one of the only African nations never to be colonized, preserving a wholly unique cultural identity, 
            its own alphabet, and a calendar unlike any other.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Addis Ababa", desc: "The bustling capital, home to the African Union and the National Museum." },
              { name: "Lalibela", desc: "A holy city famous for its monolithic rock-hewn churches." },
              { name: "Gondar", desc: "Known as the 'Camelot of Africa', featuring ancient castles and palaces." },
              { name: "Axum", desc: "An ancient city known for its towering obelisks and as the claimed home of the Ark of the Covenant." },
              { name: "Bahir Dar", desc: "Situated on Lake Tana, the gateway to the Blue Nile Falls." },
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
              { title: "Rock-Hewn Churches of Lalibela", desc: "11 medieval monolithic cave churches carved from solid rock." },
              { title: "Simien Mountains", desc: "Dramatic peaks and deep valleys, home to the rare Gelada baboon." },
              { title: "Danakil Depression", desc: "One of the hottest and lowest places on Earth, featuring neon-colored springs." },
              { title: "Fasil Ghebbi", desc: "The fortress city of the Ethiopian emperors in Gondar." },
              { title: "Blue Nile Falls", desc: "Spectacular waterfalls locally known as 'Tis Abay' (Great Smoke)." },
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
              <span className="font-semibold text-green-900">☕ Ethiopian Coffee:</span>{" "}
              The birthplace of Arabica coffee, renowned globally for its distinct flavors.
            </li>
            <li>
              <span className="font-semibold text-green-900">🧣 Traditional Textiles (Netela):</span>{" "}
              Beautifully woven cotton scarves and garments with colorful borders.
            </li>
            <li>
              <span className="font-semibold text-green-900">🌶️ Spices & Berbere:</span>{" "}
              The quintessential Ethiopian spice blend essential for making traditional stews (wots).
            </li>
            <li>
              <span className="font-semibold text-green-900">🍯 Tej (Honey Wine):</span>{" "}
              A traditional, sweet mead often served in unique flask-like glasses called berele.
            </li>
            <li>
              <span className="font-semibold text-green-900">🏺 Traditional Pottery:</span>{" "}
              Hand-crafted clay coffee pots (jebena) used in the elaborate Ethiopian coffee ceremony.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Addis Ababa's Merkato is widely considered the largest open-air market in Africa. Navigating its 
            labyrinthine alleys offers an incredibly authentic experience where you can find everything from 
            frankincense and myrrh to traditional woven baskets and exquisite silver crosses.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ethiopia;
