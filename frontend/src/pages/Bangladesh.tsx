// src/pages/Bangladesh.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Bangladesh = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Bangladesh.jpg"
          alt="Bangladesh"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Bangladesh
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A lush, riverine country defined by the mighty Ganges Delta, deep mangroves, and incredibly rich heritage.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Bangladesh</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Located on the Bay of Bengal, Bangladesh is one of the most densely populated yet culturally 
            vibrant countries in the world. It is a land dominated by hundreds of winding rivers, producing 
            incredibly fertile, lush green landscapes, the majestic Sundarbans mangrove forest, and a 
            deep-rooted artistic and literary culture.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Dhaka", desc: "The frenetic, colorful capital city, known as the 'City of Mosques'." },
              { name: "Chittagong", desc: "The bustling major port city set against the scenic Chittagong Hill Tracts." },
              { name: "Sylhet", desc: "A picturesque city surrounded by rolling tea gardens and tropical forests." },
              { name: "Khulna", desc: "The gateway to the Sundarbans, a major industrial and commercial hub." },
              { name: "Rajshahi", desc: "The 'Silk City', located on the banks of the Padma River." },
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
              { title: "The Sundarbans", desc: "The world's largest mangrove forest, home to the elusive Royal Bengal Tiger." },
              { title: "Cox's Bazar", desc: "The longest unbroken natural sea beach in the world, stretching over 120km." },
              { title: "Ahsan Manzil", desc: "The stunning 'Pink Palace' situated on the banks of the Buriganga River in Dhaka." },
              { title: "Somapura Mahavihara", desc: "A massive, ancient Buddhist vihara and UNESCO site in Paharpur." },
              { title: "Srimangal Tea Gardens", desc: "The incredibly lush, rolling tea estates often called the 'Tea Capital' of Bangladesh." },
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
              <span className="font-semibold text-green-900">🧵 Muslin & Jamdani:</span>{" "}
              Incredibly fine, hand-loomed textiles that are historically world-renowned.
            </li>
            <li>
              <span className="font-semibold text-green-900">🫖 Sylhet Tea:</span>{" "}
              High-quality, robust black tea grown in the northern hilly regions.
            </li>
            <li>
              <span className="font-semibold text-green-900">🧺 Jute Products:</span>{" "}
              Eco-friendly bags, carpets, and crafts made from the 'Golden Fiber' of Bangladesh.
            </li>
            <li>
              <span className="font-semibold text-green-900">🌸 Nakshi Kantha:</span>{" "}
              Traditional, deeply cultural embroidered quilts featuring intricate local motifs.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍯 Sundarbans Honey:</span>{" "}
              Wild, pure honey collected directly from the deep mangrove forests.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Dhaka’s chaotic New Market or exploring specialized artisan villages allows you to 
            discover incredible textiles like Jamdani silk and authentic, eco-friendly jute products that 
            sustain local communities.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-green-600 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bangladesh;
