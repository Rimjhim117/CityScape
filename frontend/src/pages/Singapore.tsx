// src/pages/Singapore.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Singapore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Singapore.jpg"
          alt="Singapore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Singapore
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A hyper-modern city-state blending lush green spaces, diverse cultures, and world-class culinary experiences.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Singapore</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Singapore is a bustling global financial center and an island city-state in Southeast Asia. It is 
            renowned for its impeccably clean streets, futuristic architecture like Marina Bay Sands, and its 
            incredibly lush "City in a Garden" approach to urban planning, seamlessly blending nature with the metropolis.
          </p>
        </section>

        {/* Top Neighborhoods */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Neighborhoods
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Marina Bay", desc: "The ultra-modern heart of the city, famous for luxury and architectural marvels." },
              { name: "Chinatown", desc: "A vibrant historic district filled with heritage shophouses, temples, and incredible food." },
              { name: "Little India", desc: "A bustling, colorful neighborhood aromatic with spices and flower garlands." },
              { name: "Kampong Glam", desc: "The historic Malay-Arab quarter, now a trendy hub of boutiques and cafes." },
              { name: "Orchard Road", desc: "Asia's most famous shopping street, lined with massive retail malls." },
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
              { title: "Gardens by the Bay", desc: "A futuristic nature park famous for its massive, glowing Supertrees." },
              { title: "Marina Bay Sands", desc: "The iconic integrated resort featuring the world's largest rooftop infinity pool." },
              { title: "Singapore Botanic Gardens", desc: "A 160-year-old tropical garden and Singapore's first UNESCO World Heritage site." },
              { title: "Sentosa Island", desc: "A massive island resort featuring Universal Studios, beaches, and golf courses." },
              { title: "Jewel Changi", desc: "A nature-themed entertainment and retail complex inside the airport, featuring the Rain Vortex." },
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
              <span className="font-semibold text-red-900">🌸 Orchid Perfumes:</span>{" "}
              Fragrances inspired by Singapore's national flower, the Vanda Miss Joaquim.
            </li>
            <li>
              <span className="font-semibold text-red-900">🐅 Tiger Balm:</span>{" "}
              The world-famous, locally produced herbal ointment used for muscle pain.
            </li>
            <li>
              <span className="font-semibold text-red-900">🫖 Bacha Coffee & TWG Tea:</span>{" "}
              Luxury, beautifully packaged local coffee and tea brands perfect for gifting.
            </li>
            <li>
              <span className="font-semibold text-red-900">🥣 Kaya Jam:</span>{" "}
              A sweet, delicious coconut and pandan jam, essential for a traditional Singaporean breakfast.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧵 Peranakan Ceramics & Beaded Shoes:</span>{" "}
              Intricate, colorful crafts reflecting the unique Straits Chinese heritage.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Singapore is arguably the shopping capital of Southeast Asia. While Orchard Road offers endless luxury, 
            exploring the narrow streets of Haji Lane or the bustling markets of Chinatown provides a deeply 
            cultural and eclectic shopping experience.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singapore;
