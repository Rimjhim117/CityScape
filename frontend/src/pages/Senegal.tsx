// src/pages/Senegal.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Senegal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Senegal.jpg"
          alt="Senegal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Senegal
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Land of Teranga — renowned for its vibrant music, colorful markets, and world-class hospitality.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-orange-900 mb-6">About Senegal</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located on the westernmost point of Africa, Senegal is a country characterized by its rich French 
            colonial heritage and its deeply ingrained tradition of "Teranga" (hospitality). From the bustling 
            streets of Dakar to the peaceful mangroves of the Sine-Saloum delta, Senegal offers a deeply immersive 
            cultural experience.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-orange-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Dakar", desc: "The vibrant capital known for its lively arts scene, music, and markets." },
              { name: "Saint-Louis", desc: "The former colonial capital, famous for its colorful historic architecture." },
              { name: "Touba", desc: "A holy city and the spiritual center of the Mouride brotherhood." },
              { name: "Ziguinchor", desc: "The chief city of the lush, tropical Casamance region." },
              { name: "Thiès", desc: "A major hub known for its tapestry-making industry." },
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
              { title: "Gorée Island", desc: "A poignant UNESCO site with deep historical ties to the transatlantic slave trade." },
              { title: "Lake Retba (Pink Lake)", desc: "A stunning lake with a pink hue caused by unique algae." },
              { title: "Djoudj National Bird Sanctuary", desc: "A massive wetland that serves as a haven for millions of migratory birds." },
              { title: "African Renaissance Monument", desc: "A colossal bronze statue dominating the Dakar skyline." },
              { title: "Sine-Saloum Delta", desc: "A beautiful maze of mangroves and islands perfect for boat tours." },
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
              <span className="font-semibold text-orange-900">🧵 Senegalese Tailoring:</span>{" "}
              Custom-made garments using vibrant fabrics, highly regarded across West Africa.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🧺 Woven Baskets & Mats:</span>{" "}
              Intricately woven, colorful grass and plastic baskets used for everything from decor to shopping.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🎨 Sand Art:</span>{" "}
              Unique paintings created using differently colored sands found throughout Senegal.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🐟 Dried Hibiscus (Bissap):</span>{" "}
              The main ingredient for Senegal's delicious, refreshing national drink.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🪘 Musical Instruments:</span>{" "}
              Authentic sabar and djembe drums crafted by local artisans.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Exploring markets like the massive Marché Sandaga or the artisanal Village Artisanal in Soumbédioune 
            provides an incredible glimpse into the artistic soul of Senegal, where you can find everything from 
            intricate woodcarvings to stunning textiles.
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

export default Senegal;
