// src/pages/SriLanka.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const SriLanka = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-green-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Sri-Lanka.jpg"
          alt="Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Sri Lanka
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Teardrop of India — a lush island of ancient ruins, rolling tea plantations, and stunning coastlines.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-orange-900 mb-6">About Sri Lanka</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Lying just south of India, Sri Lanka is a tropical paradise with a history dating back thousands
            of years. It offers an incredible diversity of experiences packed into a small island, from spotting
            leopards in national parks and exploring ancient Buddhist temples, to surfing pristine Indian Ocean waves.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-orange-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Colombo", desc: "The bustling, ocean-facing commercial capital blending modern and colonial architecture." },
              { name: "Kandy", desc: "The cultural heart of the island, nestled among the misty central hills." },
              { name: "Galle", desc: "A stunning coastal city famous for its preserved 16th-century Dutch fort." },
              { name: "Nuwara Eliya", desc: "Known as 'Little England', the epicenter of Sri Lanka's tea industry." },
              { name: "Anuradhapura", desc: "An ancient capital filled with towering, millennia-old stupas and ruins." },
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
              { title: "Sigiriya Rock Fortress", desc: "An ancient palace and fortress carved into a massive, sheer rock column." },
              { title: "Temple of the Sacred Tooth Relic", desc: "A deeply sacred Buddhist temple in Kandy housing the tooth of the Buddha." },
              { title: "Yala National Park", desc: "A vast wildlife sanctuary known for having the highest density of leopards in the world." },
              { title: "Nine Arch Bridge", desc: "A spectacular colonial-era railway bridge hidden deep in the jungle near Ella." },
              { title: "Dambulla Cave Temple", desc: "An incredible, well-preserved cave temple complex filled with Buddhist statues." },
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
              <span className="font-semibold text-orange-900">🫖 Ceylon Tea:</span>{" "}
              Considered some of the finest, most robust black tea in the world.
            </li>
            <li>
              <span className="font-semibold text-orange-900">💎 Gemstones:</span>{" "}
              Sri Lanka is globally famous for its high-quality sapphires, rubies, and moonstones.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🌶️ Cinnamon & Spices:</span>{" "}
              The island is the historical birthplace of true cinnamon, offering incredible local spices.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🎭 Traditional Masks:</span>{" "}
              Brightly painted, intricately carved wooden masks used in traditional dances.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🧵 Handloom Textiles:</span>{" "}
              Vibrant, colorful cotton and silk fabrics woven using traditional methods.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping for genuine Ceylon Tea directly in the misty estates of Nuwara Eliya or hunting for
            certified sapphires in the gem markets of Ratnapura offers an incredibly authentic Sri Lankan
            experience.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-orange-600 to-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default SriLanka;
