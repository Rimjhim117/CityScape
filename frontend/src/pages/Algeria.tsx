// src/pages/Algeria.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Algeria = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Algeria.jpg"
          alt="Algeria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Algeria
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The vast gateway between the Mediterranean and the Sahara — rich in ancient ruins and desert beauty.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Algeria</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Algeria is the largest country in Africa, offering an incredible diversity of landscapes. From the 
            snow-capped Atlas Mountains and the sparkling Mediterranean coastline in the north, to the endless, 
            mesmerizing dunes of the Sahara Desert in the south, Algeria remains a largely undiscovered gem for travelers.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Algiers", desc: "The 'White City', known for its historic Casbah and French-colonial architecture." },
              { name: "Oran", desc: "A vibrant coastal city famous as the birthplace of Rai music." },
              { name: "Constantine", desc: "The 'City of Bridges', dramatically built across a deep ravine." },
              { name: "Annaba", desc: "A beautiful coastal town home to the ancient ruins of Hippo Regius." },
              { name: "Tamanrasset", desc: "An oasis city serving as the capital of the Algerian Sahara." },
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
              { title: "The Casbah of Algiers", desc: "A UNESCO-listed walled citadel with narrow, winding streets." },
              { title: "Tassili n'Ajjer", desc: "A vast plateau in the Sahara known for prehistoric rock art." },
              { title: "Djémila", desc: "Incredibly well-preserved Roman ruins set in a beautiful mountain landscape." },
              { title: "Timgad", desc: "Known as the 'Pompeii of Africa', a massive ancient Roman city." },
              { title: "Ahaggar National Park", desc: "Stunning volcanic mountains rising out of the Sahara Desert." },
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
              <span className="font-semibold text-red-900">🏺 Berber Ceramics:</span>{" "}
              Distinctive, hand-painted pottery with intricate geometric designs.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧶 Woven Rugs:</span>{" "}
              Traditional M'zabite and Kabyle carpets made from high-quality wool.
            </li>
            <li>
              <span className="font-semibold text-red-900">💍 Silver Jewelry:</span>{" "}
              Chunky, ornate Berber jewelry often adorned with coral and enamel.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧥 Burnous & Karakou:</span>{" "}
              Traditional, elegantly embroidered Algerian garments.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍯 Dates & Olive Oil:</span>{" "}
              Some of the finest Deglet Nour dates and rich olive oil in the region.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Exploring the medinas and souks of Algeria, such as the bustling markets in Algiers or Oran, 
            offers an authentic glimpse into North African life, largely untouched by mass tourism.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Algeria;
