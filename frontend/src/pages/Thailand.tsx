// src/pages/Thailand.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Thailand = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-red-50 to-orange-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Thailand.jpg"
          alt="Thailand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Thailand
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Land of Smiles — an intoxicating mix of ornate temples, incredible street food, and tropical beaches.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Thailand</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located in the center of the Indochinese Peninsula, Thailand is famous globally for its tropical 
            beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha. 
            It is a deeply welcoming country that perfectly balances centuries-old tradition with modern vibrancy.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Bangkok", desc: "The sprawling, vibrant capital known for ornate shrines and intense street life." },
              { name: "Chiang Mai", desc: "A culturally rich city in the mountainous north, famous for its old city temples." },
              { name: "Phuket", desc: "The country's largest island, boasting some of the most popular beaches in Asia." },
              { name: "Ayutthaya", desc: "The ancient capital featuring incredible, historic temple ruins." },
              { name: "Pattaya", desc: "A bustling coastal city known for its beaches and energetic nightlife." },
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
              { title: "The Grand Palace", desc: "A spectacular, complex of buildings at the heart of Bangkok." },
              { title: "Phi Phi Islands", desc: "Stunning, jungle-covered limestone islands rising from turquoise waters." },
              { title: "Wat Arun", desc: "The 'Temple of Dawn', a stunning riverside temple with colorful spires." },
              { title: "Doi Suthep", desc: "A majestic mountain overlooking Chiang Mai, featuring a golden temple." },
              { title: "Railay Beach", desc: "A stunning beach peninsula accessible only by boat due to high limestone cliffs." },
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
              <span className="font-semibold text-red-900">🧵 Thai Silk:</span>{" "}
              Incredibly vibrant and high-quality silk, famously popularized by Jim Thompson.
            </li>
            <li>
              <span className="font-semibold text-red-900">🐘 Celadon Ceramics:</span>{" "}
              Beautiful, green-glazed pottery primarily crafted in the Chiang Mai region.
            </li>
            <li>
              <span className="font-semibold text-red-900">🥥 Coconut Oil & Spa Products:</span>{" "}
              High-quality, organic massage oils, soaps, and herbal compresses.
            </li>
            <li>
              <span className="font-semibold text-red-900">📿 Amulets & Carvings:</span>{" "}
              Intricate Buddha amulets and beautiful wooden elephant carvings.
            </li>
            <li>
              <span className="font-semibold text-red-900">🌶️ Thai Spices:</span>{" "}
              Authentic curry pastes, dried chilies, and lemongrass to recreate the flavors at home.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            From navigating boats through the Damnoen Saduak Floating Market to exploring the massive, 
            endless stalls of the Chatuchak Weekend Market in Bangkok, shopping in Thailand is a thrilling 
            adventure in itself.
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

export default Thailand;
