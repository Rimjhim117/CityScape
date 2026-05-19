// src/pages/Uganda.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Uganda = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-yellow-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Uganda.jpg"
          alt="Uganda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Uganda
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Pearl of Africa — breathtaking landscapes, mountain gorillas, and the source of the Nile.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Uganda</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Uganda is a landlocked country in East Africa known for its incredibly diverse and lush landscapes. 
            From the snow-capped Rwenzori Mountains and the immense Lake Victoria to the dense rainforests 
            that harbor endangered mountain gorillas, Uganda offers some of the most spectacular wildlife 
            viewing in the world.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Kampala", desc: "The vibrant capital city built across several hills." },
              { name: "Entebbe", desc: "A relaxed town on Lake Victoria, home to the international airport." },
              { name: "Jinja", desc: "The adventure capital of East Africa, situated at the source of the Nile." },
              { name: "Mbarara", desc: "A major hub in western Uganda, famous for its long-horned Ankole cattle." },
              { name: "Fort Portal", desc: "A scenic town surrounded by tea plantations and crater lakes." },
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
              { title: "Bwindi Impenetrable Forest", desc: "A dense rainforest famous for gorilla trekking." },
              { title: "Murchison Falls", desc: "Where the Nile River explodes through a narrow gorge." },
              { title: "Queen Elizabeth National Park", desc: "Known for diverse wildlife, including tree-climbing lions." },
              { title: "Rwenzori Mountains", desc: "The legendary 'Mountains of the Moon' offering incredible hiking." },
              { title: "Source of the Nile", desc: "Located in Jinja, a popular spot for white-water rafting." },
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
              <span className="font-semibold text-green-900">☕ Ugandan Coffee & Tea:</span>{" "}
              Some of the finest Robusta and Arabica coffee grown in the fertile volcanic soil.
            </li>
            <li>
              <span className="font-semibold text-green-900">🧺 Woven Baskets:</span>{" "}
              Intricately woven traditional baskets made from banana leaves and raffia.
            </li>
            <li>
              <span className="font-semibold text-green-900">🪵 Wood Carvings:</span>{" "}
              Beautifully carved masks, statues, and walking sticks made from mahogany and ebony.
            </li>
            <li>
              <span className="font-semibold text-green-900">👗 Kitenge Fabrics:</span>{" "}
              Colorful, wax-printed cotton fabrics widely worn and tailored into custom outfits.
            </li>
            <li>
              <span className="font-semibold text-green-900">🥁 Traditional Instruments:</span>{" "}
              Authentic drums and stringed instruments used in traditional Buganda music.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Uganda is a colorful experience. Whether you visit the bustling Owino Market in Kampala 
            or small craft villages near the national parks, you'll find an array of locally produced goods that 
            reflect the country's vibrant culture.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Uganda;
