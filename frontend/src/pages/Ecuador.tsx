// src/pages/Ecuador.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Ecuador = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "south-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Ecuador.jpg"
          alt="Ecuador"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Ecuador
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            Straddling the equator, a micro-universe of Amazonian jungles, towering volcanoes, and the unique Galápagos Islands.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-yellow-900 mb-6">About Ecuador</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Ecuador may be one of the smallest countries in South America, but it packs an astonishing amount of 
            geographic diversity into its borders. From the dense, biologically intense Amazon Basin to the snow-capped 
            Andean volcanoes, and the wildly unique ecosystems of the Galápagos Islands out in the Pacific, Ecuador 
            is a paradise for nature lovers.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-yellow-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Quito", desc: "The high-altitude capital featuring one of the best-preserved historic centers in the Americas." },
              { name: "Guayaquil", desc: "The bustling commercial heart and main port city on the Pacific coast." },
              { name: "Cuenca", desc: "A beautiful, colonial-era city known for its cobblestone streets and expat community." },
              { name: "Baños", desc: "The adventure capital of Ecuador, famous for its hot springs and waterfalls." },
              { name: "Otavalo", desc: "An Andean town renowned worldwide for its massive, vibrant indigenous market." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-yellow-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-yellow-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Galápagos Islands", desc: "A volcanic archipelago legendary for its fearless and unique wildlife." },
              { title: "Cotopaxi National Park", desc: "Home to one of the world's highest active volcanoes." },
              { title: "Mitad del Mundo", desc: "The monument marking the exact line of the Equator just outside Quito." },
              { title: "Yasuni National Park", desc: "A heavily protected biosphere reserve deep in the Amazon rainforest." },
              { title: "Swing at the End of the World", desc: "A famous tree swing in Baños offering terrifyingly beautiful views of an active volcano." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-yellow-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-yellow-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-yellow-900">👒 Genuine Panama Hats:</span>{" "}
              Despite the name, these iconic, finely woven straw hats are originally from Ecuador (Montecristi).
            </li>
            <li>
              <span className="font-semibold text-yellow-900">🧶 Alpaca Textiles:</span>{" "}
              Brightly colored, incredibly soft blankets, sweaters, and scarves woven in the Andes.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">🍫 Arriba Nacional Chocolate:</span>{" "}
              Some of the finest, most sought-after cacao in the world originates in Ecuador.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">📿 Tagua Nut Carvings:</span>{" "}
              Also known as "vegetable ivory," carved into intricate jewelry and small figurines.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">🖼️ Tigua Paintings:</span>{" "}
              Vibrant folk art painted on sheepskin canvases depicting life in the Andean highlands.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Otavalo Market is arguably the most famous indigenous market in South America. Exploring its 
            endless stalls of textiles, jewelry, and crafts is a vibrant, chaotic, and deeply rewarding experience.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-yellow-600 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ecuador;
