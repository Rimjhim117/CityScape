// src/pages/UnitedStates.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const UnitedStates = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "north-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/United States.jpg"
          alt="United States"
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "/assets/hero.jpg"; }}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            United States
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            From neon-lit cities and iconic monuments to vast national parks and diverse local cultures.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About the United States</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Spanning an entire continent, the USA is a mosaic of different cultures, landscapes, and experiences. 
            Whether you want to explore the dense, fast-paced streets of New York, the sun-drenched beaches of 
            California, or the awe-inspiring depths of the Grand Canyon, the United States offers an unmatched 
            diversity for any traveler.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "New York City", desc: "The city that never sleeps, known for Broadway, Wall Street, and diverse neighborhoods." },
              { name: "Los Angeles", desc: "The entertainment capital, famous for Hollywood and beautiful coastline." },
              { name: "Chicago", desc: "Famed for its bold architecture, deep-dish pizza, and jazz heritage." },
              { name: "New Orleans", desc: "A vibrant city known for Mardi Gras, Creole cuisine, and live jazz." },
              { name: "Austin", desc: "The live music capital of the world with a booming tech scene and great BBQ." },
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
              { title: "Grand Canyon", desc: "A massive, breathtaking geological wonder in Arizona." },
              { title: "Yellowstone National Park", desc: "Famous for its geysers, hot springs, and wildlife." },
              { title: "Statue of Liberty", desc: "The iconic symbol of freedom standing in New York Harbor." },
              { title: "Golden Gate Bridge", desc: "San Francisco's stunning, red-orange suspension bridge." },
              { title: "Route 66", desc: "The historic highway offering a classic American road trip experience." },
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
              <span className="font-semibold text-blue-900">🍯 Maple Syrup & Preserves:</span>{" "}
              High-quality artisanal syrups and jams, especially from the Northeast.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🏺 Native American Crafts:</span>{" "}
              Authentic turquoise jewelry and woven blankets from the Southwest.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🎸 Music Memorabilia:</span>{" "}
              Vintage records and instruments from Nashville, Memphis, and Austin.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🧵 Denim & Leather:</span>{" "}
              Classic American-made denim jeans and handcrafted leather boots.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🌶️ Regional Sauces:</span>{" "}
              Local BBQ sauces, hot sauces, and unique spices from across the South.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in the US is incredibly varied. You can hunt for vintage treasures at the Rose Bowl Flea 
            Market in California, sample fresh local goods at Seattle's Pike Place Market, or explore 
            authentic artisan boutiques hidden in Brooklyn.
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

export default UnitedStates;
