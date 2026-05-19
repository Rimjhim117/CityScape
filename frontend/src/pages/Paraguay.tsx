// src/pages/Paraguay.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Paraguay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "south-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Paraguay.jpg"
          alt="Paraguay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Paraguay
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Heart of South America — rich in Guaraní culture, historic ruins, and untamed nature.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Paraguay</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Landlocked in the center of South America, Paraguay is a deeply authentic destination off the beaten path. 
            It is unique for its bilingual population, seamlessly blending Spanish with the indigenous Guaraní language, 
            and it features incredible Jesuit ruins, vast swamplands, and genuine, warm hospitality.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Asunción", desc: "The historic and relaxed capital city set along the Paraguay River." },
              { name: "Ciudad del Este", desc: "A bustling, massive commercial border city near Iguazú Falls." },
              { name: "Encarnación", desc: "Known as the 'Pearl of the South', famous for its beaches and Carnival." },
              { name: "Concepción", desc: "An important trading center offering beautiful colonial architecture." },
              { name: "Areguá", desc: "A charming lakeside town famous for its pottery and strawberries." },
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
              { title: "Jesuit Missions of La Santísima Trinidad", desc: "A stunning UNESCO World Heritage site featuring impressive 18th-century ruins." },
              { title: "Itaipu Dam", desc: "One of the largest and most powerful hydroelectric dams in the world." },
              { title: "The Gran Chaco", desc: "A vast, wild region of dry forests and savannas full of unique wildlife." },
              { title: "Saltos del Monday", desc: "A breathtaking waterfall complex near Ciudad del Este." },
              { title: "Ybycuí National Park", desc: "A beautiful protected area with lush forests, clear streams, and historic iron foundries." },
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
              <span className="font-semibold text-red-900">🧶 Ñandutí Lace:</span>{" "}
              Intricate, brightly colored, spiderweb-like lace typical of the town of Itauguá.
            </li>
            <li>
              <span className="font-semibold text-red-900">🥤 Guampas for Tereré:</span>{" "}
              Carved cattle horns used to drink Tereré (cold yerba mate), the national drink.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧵 Ao Po'i Embroidery:</span>{" "}
              Fine cotton cloth adorned with delicate, traditional embroidery.
            </li>
            <li>
              <span className="font-semibold text-red-900">🏺 Clay Pottery:</span>{" "}
              Beautifully rustic, hand-shaped pottery, most notably from the town of Areguá.
            </li>
            <li>
              <span className="font-semibold text-red-900">🎵 Filigree Jewelry:</span>{" "}
              Exquisite, delicate silver or gold filigree work crafted by artisans in Luque.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping for crafts in Paraguay is best done directly in the artisan towns. Visiting Itauguá for 
            ñandutí lace or Areguá for pottery allows you to witness the incredible craftsmanship firsthand and 
            purchase deeply authentic pieces.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paraguay;
