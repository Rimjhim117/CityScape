// src/pages/Kenya.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Kenya = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Kenya.jpg"
          alt="Kenya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Kenya
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            Experience the magic of the savanna, vibrant Maasai culture, and bustling city life in Nairobi.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-orange-900 mb-6">About Kenya</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Kenya is synonymous with the word "safari." Famous for the Great Migration in the Maasai Mara,
            this East African nation boasts incredible wildlife, stunning landscapes stretching from the 
            Rift Valley to the Indian Ocean coast, and a rich tapestry of cultures that welcome visitors 
            with open arms.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-orange-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Nairobi", desc: "The bustling capital, known as the 'Green City in the Sun'." },
              { name: "Mombasa", desc: "Historic coastal city with Swahili architecture and beaches." },
              { name: "Kisumu", desc: "Port city on Lake Victoria." },
              { name: "Nakuru", desc: "Famous for Lake Nakuru and its flamingos." },
              { name: "Eldoret", desc: "Agricultural hub and home of champions in athletics." },
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
              { title: "Maasai Mara", desc: "World-renowned reserve famous for the Great Migration." },
              { title: "Amboseli National Park", desc: "Elephants against the backdrop of Mt. Kilimanjaro." },
              { title: "Mount Kenya", desc: "The second-highest peak in Africa." },
              { title: "Lamu Island", desc: "UNESCO World Heritage site with deep Swahili roots." },
              { title: "Diani Beach", desc: "Stunning white sand beaches along the Indian Ocean." },
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
              <span className="font-semibold text-orange-900">☕ Coffee & Tea:</span>{" "}
              Some of the finest Arabica coffee and black tea in the world.
            </li>
            <li>
              <span className="font-semibold text-orange-900">📿 Maasai Beadwork:</span>{" "}
              Intricate, colorful handmade jewelry and ornaments.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🦒 Wood Carvings:</span>{" "}
              Beautifully sculpted animals and ebony wood crafts.
            </li>
            <li>
              <span className="font-semibold text-orange-900">👕 Kikoy & Shuka:</span>{" "}
              Traditional, versatile woven fabrics worn by locals.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🍲 Spices:</span>{" "}
              Coastal Swahili spices, especially from the Mombasa markets.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Kenya is a vibrant experience. Whether you're exploring the bustling Maasai markets 
            in Nairobi or the historic bazaars of Mombasa, you'll find authentic treasures that reflect the 
            country's rich heritage and craftsmanship.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kenya;
