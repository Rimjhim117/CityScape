// src/pages/Venezuela.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Venezuela = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "south-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Venezuela.jpg"
          alt="Venezuela"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Venezuela
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A land of spectacular natural wonders, from the highest waterfall in the world to pristine Caribbean coastlines.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-yellow-900 mb-6">About Venezuela</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located on the northern coast of South America, Venezuela is a country of staggering geographical beauty. 
            It is home to the towering tabletop mountains (tepuis) of the Guiana Highlands, vast grassy plains (Llanos), 
            and miles of idyllic beaches along the Caribbean Sea.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-yellow-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Caracas", desc: "The bustling capital set in a valley at the foot of Mount Ávila." },
              { name: "Mérida", desc: "A vibrant Andean university city known for adventure sports and the longest cable car." },
              { name: "Maracaibo", desc: "The oil-rich hub located on the massive Lake Maracaibo." },
              { name: "Valencia", desc: "An important industrial and cultural center in the central region." },
              { name: "Coro", desc: "A historic city famous for its colonial architecture and nearby sand dunes." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-yellow-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-yellow-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Angel Falls (Salto Ángel)", desc: "The highest uninterrupted waterfall in the world, dropping from a tepui." },
              { title: "Los Roques Archipelago", desc: "A stunning national park featuring pristine coral reefs and white sand beaches." },
              { title: "Mount Roraima", desc: "A massive, flat-topped mountain that inspired Arthur Conan Doyle's 'The Lost World'." },
              { title: "Médanos de Coro", desc: "A surreal national park characterized by massive, constantly shifting sand dunes." },
              { title: "Catatumbo Lightning", desc: "A unique meteorological phenomenon causing nearly continuous lightning over Lake Maracaibo." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-yellow-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-yellow-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-yellow-900">🍫 Venezuelan Cacao:</span>{" "}
              World-renowned, incredibly aromatic cacao used by premier chocolatiers globally.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">🥃 Rum (Ron Venezolano):</span>{" "}
              Considered some of the finest, most robust aged rums in the world.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">🪘 Indigenous Crafts:</span>{" "}
              Intricately woven baskets and hammocks crafted by the Warao or Pemon peoples.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">☕ Coffee:</span>{" "}
              Smooth, high-quality coffee historically grown in the Andean regions.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">🪵 Wood Carvings:</span>{" "}
              Detailed local art depicting wildlife and local folklore.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            While navigating local markets in Venezuela requires a bit of local know-how, seeking out 
            artisanal chocolates, high-end rum, and beautiful indigenous woven crafts offers a deeply 
            authentic connection to the country's rich heritage.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-yellow-600 to-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Venezuela;
