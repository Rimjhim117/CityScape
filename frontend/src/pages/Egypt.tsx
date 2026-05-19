// src/pages/Egypt.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Egypt = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Egypt.jpg"
          alt="Egypt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Egypt
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Land of the Pharaohs — where ancient history meets the bustling modern life along the Nile.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-amber-900 mb-6">About Egypt</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Spanning the northeast corner of Africa and southwest corner of Asia, Egypt is a country steeped in rich history. 
            From the iconic pyramids and magnificent temples to the beautiful Red Sea coast and the bustling streets of Cairo, 
            Egypt offers a journey back in time alongside a vibrant modern culture.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-amber-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Cairo", desc: "The bustling capital, home to the Giza Pyramids and Egyptian Museum." },
              { name: "Luxor", desc: "An open-air museum featuring the Valley of the Kings and Karnak Temple." },
              { name: "Alexandria", desc: "A historic Mediterranean port city founded by Alexander the Great." },
              { name: "Aswan", desc: "A tranquil city on the Nile known for ancient temples and Nubian culture." },
              { name: "Sharm El-Sheikh", desc: "A popular resort town on the Red Sea, famous for diving and beaches." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-amber-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-amber-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Pyramids of Giza & the Sphinx", desc: "The last surviving Wonder of the Ancient World." },
              { title: "Valley of the Kings", desc: "Ancient royal tombs, including that of Tutankhamun." },
              { title: "Karnak Temple", desc: "A vast complex of decayed temples, chapels, and pylons." },
              { title: "Abu Simbel", desc: "Massive rock temples built by Ramesses II in southern Egypt." },
              { title: "The Nile River", desc: "The lifeblood of Egypt, perfect for felucca rides and cruises." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-amber-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-amber-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-amber-900">📜 Papyrus Scrolls:</span>{" "}
              Beautifully painted ancient-style paper made from the papyrus plant.
            </li>
            <li>
              <span className="font-semibold text-amber-900">🏺 Alabaster & Stonework:</span>{" "}
              Hand-carved vases, statues, and decorative items.
            </li>
            <li>
              <span className="font-semibold text-amber-900">🧵 Egyptian Cotton:</span>{" "}
              World-renowned for its supreme quality, softness, and durability.
            </li>
            <li>
              <span className="font-semibold text-amber-900">🌿 Spices & Perfumes:</span>{" "}
              Aromatic spices, hibiscus tea (Karkadeh), and custom blended perfume oils.
            </li>
            <li>
              <span className="font-semibold text-amber-900">🏅 Gold & Silver Jewelry:</span>{" "}
              Customized cartouches featuring names written in ancient hieroglyphics.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Exploring the souks of Egypt, especially the famous Khan el-Khalili bazaar in Cairo, is an immersive 
            experience. The narrow alleys are filled with the scent of spices, the glow of brass lanterns, and 
            the sounds of artisans crafting the perfect authentic souvenirs.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Egypt;
