// src/pages/Ghana.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Ghana = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Ghana.jpg"
          alt="Ghana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Ghana
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Gateway to West Africa — rich in gold, cocoa, history, and incredibly welcoming people.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Ghana</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located along the Gulf of Guinea and the Atlantic Ocean, Ghana is celebrated for its rich history, 
            diverse wildlife, and stunning coastline. Known for the Ashanti Empire and a powerful legacy of 
            pan-Africanism, modern Ghana offers vibrant cities, ancient forts, and a dynamic cultural scene.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Accra", desc: "The bustling capital, known for Makola Market and Labadi Beach." },
              { name: "Kumasi", desc: "The historical and spiritual capital of the Ashanti Kingdom." },
              { name: "Cape Coast", desc: "A coastal city rich in colonial history and famous for its castle." },
              { name: "Tamale", desc: "The fastest-growing city in West Africa, known for traditional mud houses." },
              { name: "Takoradi", desc: "The 'Oil City', offering a blend of industrial growth and beautiful beaches." },
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
              { title: "Cape Coast Castle", desc: "A profound historical site reflecting the transatlantic slave trade." },
              { title: "Kakum National Park", desc: "Tropical rainforest famous for its exhilarating canopy walkway." },
              { title: "Mole National Park", desc: "Ghana's largest wildlife refuge, great for spotting elephants." },
              { title: "Lake Volta", desc: "The largest artificially created reservoir in the world by surface area." },
              { title: "Kwame Nkrumah Mausoleum", desc: "The memorial park dedicated to Ghana's first President." },
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
              <span className="font-semibold text-red-900">🧵 Kente Cloth:</span>{" "}
              The iconic, colorful, handwoven silk and cotton fabric of the Akan people.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍫 Chocolate & Cocoa:</span>{" "}
              Some of the finest, richest chocolate sourced directly from local cocoa farms.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧴 Shea Butter:</span>{" "}
              Pure, unrefined shea butter used globally for skin and hair care.
            </li>
            <li>
              <span className="font-semibold text-red-900">📿 Glass Beads:</span>{" "}
              Beautifully crafted recycled glass beads, especially from the Krobo region.
            </li>
            <li>
              <span className="font-semibold text-red-900">🪵 Wood Carvings & Drums:</span>{" "}
              Traditional Djembe drums and intricately carved Adinkra symbols.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Markets in Ghana, such as Accra's sprawling Makola Market or Kumasi's Kejetia Market (one of the 
            largest in West Africa), are vibrant, energetic hubs where you can truly immerse yourself in the 
            local way of life and discover incredible local goods.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ghana;
