// src/pages/Vietnam.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Vietnam = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Vietnam.jpg"
          alt="Vietnam"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Vietnam
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A country of staggering natural beauty, profound history, and an incredibly vibrant culinary scene.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Vietnam</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Stretching like a ribbon down the eastern edge of the Indochinese Peninsula, Vietnam is a 
            deeply captivating destination. It offers a dramatic, contrasting landscape—from the lush, 
            misty mountains and emerald rice terraces in the north to the vibrant, maze-like rivers of 
            the Mekong Delta in the south.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Hanoi", desc: "The ancient, charming capital in the north, known for its historic Old Quarter." },
              { name: "Ho Chi Minh City", desc: "Formerly Saigon, a dynamic, high-energy metropolis in the south." },
              { name: "Hoi An", desc: "A beautifully preserved ancient port town, famous for its lantern-lit streets." },
              { name: "Da Nang", desc: "A coastal city known for its sandy beaches and the nearby Ba Na Hills." },
              { name: "Hue", desc: "The former imperial capital, situated along the scenic Perfume River." },
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
              { title: "Ha Long Bay", desc: "A spectacular bay featuring thousands of towering limestone karsts." },
              { title: "Cu Chi Tunnels", desc: "An immense network of connecting underground tunnels used during the Vietnam War." },
              { title: "Mekong Delta", desc: "A vast maze of rivers, swamps, and islands featuring famous floating markets." },
              { title: "Phong Nha-Ke Bang", desc: "A stunning national park home to some of the world's largest cave systems." },
              { title: "Sapa Terraces", desc: "Incredibly beautiful, cascading rice terraces in the northern mountains." },
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
              <span className="font-semibold text-red-900">☕ Vietnamese Coffee:</span>{" "}
              Incredibly strong, rich Robusta coffee, often brewed with sweet condensed milk.
            </li>
            <li>
              <span className="font-semibold text-red-900">👗 Tailored Clothing:</span>{" "}
              High-quality, incredibly affordable custom-made suits and dresses, especially in Hoi An.
            </li>
            <li>
              <span className="font-semibold text-red-900">🏮 Silk Lanterns:</span>{" "}
              Beautiful, colorful, handcrafted silk lanterns that define the streets of Hoi An.
            </li>
            <li>
              <span className="font-semibold text-red-900">👒 Non La (Conical Hats):</span>{" "}
              The iconic, practical palm-leaf hat worn by farmers and locals across the country.
            </li>
            <li>
              <span className="font-semibold text-red-900">🏺 Lacquerware:</span>{" "}
              Exquisite, shiny, hand-painted wooden bowls, plates, and decorative boxes.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Vietnam is a vibrant experience. You can negotiate for authentic lacquerware at the 
            chaotic Ben Thanh Market in Ho Chi Minh City or get a bespoke silk suit made within 24 hours 
            by the master tailors in Hoi An.
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

export default Vietnam;
