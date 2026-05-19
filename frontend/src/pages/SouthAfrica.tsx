// src/pages/SouthAfrica.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const SouthAfrica = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-blue-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/South Africa.jpg"
          alt="South Africa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            South Africa
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Rainbow Nation — from the majestic Table Mountain to thrilling safaris and rich history.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About South Africa</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located at the southernmost tip of the African continent, South Africa is renowned for its diverse cultures, 
            languages, and breathtaking landscapes. Whether exploring the iconic Winelands, spotting the Big Five in 
            Kruger National Park, or experiencing the vibrant energy of its cities, South Africa offers a deeply moving 
            and unforgettable travel experience.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Cape Town", desc: "Famous for Table Mountain and the V&A Waterfront." },
              { name: "Johannesburg", desc: "The bustling economic heart, known as the City of Gold." },
              { name: "Durban", desc: "Coastal city with beautiful beaches and rich Indian heritage." },
              { name: "Pretoria", desc: "The administrative capital known for jacaranda-lined streets." },
              { name: "Port Elizabeth (Gqeberha)", desc: "Known as the Friendly City and gateway to the Garden Route." },
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
              { title: "Kruger National Park", desc: "One of Africa's largest game reserves for Big Five safaris." },
              { title: "Table Mountain", desc: "Iconic flat-topped mountain overlooking Cape Town." },
              { title: "Robben Island", desc: "Historic island where Nelson Mandela was imprisoned." },
              { title: "Blyde River Canyon", desc: "One of the largest canyons on Earth, with stunning views." },
              { title: "The Garden Route", desc: "A scenic coastal drive stretching from Mossel Bay to Storms River." },
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
              <span className="font-semibold text-green-900">🍷 Wine & Rooibos Tea:</span>{" "}
              World-class wines from Stellenbosch and naturally caffeine-free Rooibos tea.
            </li>
            <li>
              <span className="font-semibold text-green-900">🥩 Biltong:</span>{" "}
              A traditional dried, cured meat that is a must-try local snack.
            </li>
            <li>
              <span className="font-semibold text-green-900">💍 Diamonds & Tanzanite:</span>{" "}
              High-quality precious stones crafted into beautiful jewelry.
            </li>
            <li>
              <span className="font-semibold text-green-900">🎨 Wire & Bead Art:</span>{" "}
              Intricate handmade crafts often shaped into local wildlife.
            </li>
            <li>
              <span className="font-semibold text-green-900">🏺 Pottery & Ceramics:</span>{" "}
              Vibrant, hand-painted Ardmore ceramics telling African stories.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in South Africa is an adventure. Whether you're exploring the upscale V&A Waterfront, 
            browsing the vibrant Greenmarket Square in Cape Town, or visiting local craft markets, you will 
            find authentic goods that perfectly capture the spirit of the Rainbow Nation.
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

export default SouthAfrica;
