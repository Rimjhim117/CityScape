// src/pages/Australia.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Australia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "oceania";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Australia.jpg"
          alt="Australia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Australia
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A vast, sun-kissed continent famous for the Outback, the Great Barrier Reef, and incredible, unique wildlife.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-orange-900 mb-6">About Australia</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Australia is the world's smallest continent and largest island. It is a land of staggering contrast 
            and spectacular beauty, from the red, dusty expanse of the Outback to lush, ancient rainforests and 
            the dazzling blue waters of the Great Barrier Reef.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-orange-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Sydney", desc: "The iconic harbor city, famous for the Opera House, Harbour Bridge, and Bondi Beach." },
              { name: "Melbourne", desc: "The cultural and sporting capital, known for its laneway cafes and vibrant arts scene." },
              { name: "Brisbane", desc: "A sunny, relaxed river city acting as the gateway to the Gold Coast." },
              { name: "Perth", desc: "A booming, isolated coastal city known for pristine beaches and nearby wine regions." },
              { name: "Adelaide", desc: "The 'City of Churches', famous for its festivals and surrounding world-class vineyards." },
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
              { title: "Great Barrier Reef", desc: "The world's largest coral reef system, visible from space and teeming with marine life." },
              { title: "Uluru (Ayers Rock)", desc: "A massive, deeply spiritual sandstone monolith in the heart of the Red Centre." },
              { title: "Sydney Opera House", desc: "A masterpiece of modern architecture set beautifully on Sydney Harbour." },
              { title: "Great Ocean Road", desc: "A stunning, winding coastal drive featuring the Twelve Apostles limestone stacks." },
              { title: "Daintree Rainforest", desc: "The oldest continuously surviving tropical rainforest in the world." },
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
              <span className="font-semibold text-orange-900">🦘 Didgeridoos & Aboriginal Art:</span>{" "}
              Authentic, dot-painted canvases and instruments reflecting the world's oldest continuous culture.
            </li>
            <li>
              <span className="font-semibold text-orange-900">💎 Opals:</span>{" "}
              Australia produces the vast majority of the world's opals, famous for their stunning play-of-color.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🍷 Fine Wine:</span>{" "}
              World-class Shiraz from the Barossa Valley and Cabernet Sauvignon from Margaret River.
            </li>
            <li>
              <span className="font-semibold text-orange-900">👢 UGG Boots & Merino Wool:</span>{" "}
              Incredibly warm, durable sheepskin boots and premium, soft merino wool garments.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🧴 Macadamia & Pawpaw Products:</span>{" "}
              High-quality, locally sourced skincare ointments and premium roasted macadamia nuts.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Australia is wonderfully diverse. The Queen Victoria Market in Melbourne is an iconic, 
            massive open-air market perfect for finding local delicacies, artisan crafts, and fresh produce.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Australia;
