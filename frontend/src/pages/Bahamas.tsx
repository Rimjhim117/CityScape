// src/pages/Bahamas.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Bahamas = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "north-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Bahamas.jpg"
          alt="The Bahamas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            The Bahamas
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A coral-based archipelago offering some of the clearest, most spectacular waters on Earth.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-cyan-900 mb-6">About The Bahamas</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Comprising over 700 islands and cays in the Atlantic Ocean, The Bahamas is a tropical paradise known 
            for its incredibly clear turquoise waters and pristine white and pink sand beaches. It’s a premier 
            destination for snorkeling, scuba diving, and relaxing in a deeply serene environment.
          </p>
        </section>

        {/* Top Cities & Islands */}
        <section>
          <h3 className="text-3xl font-semibold text-cyan-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Nassau", desc: "The bustling capital city known for its colonial heritage and vibrant resorts." },
              { name: "Freeport", desc: "The second-largest city, featuring beautiful parks and great shopping." },
              { name: "Exuma", desc: "An archipelago famous for its sapphire-blue waters and the swimming pigs." },
              { name: "Eleuthera", desc: "A long, thin island known for stunning pink sand beaches." },
              { name: "Andros", desc: "The largest yet least-explored island, home to incredible blue holes and barrier reefs." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-cyan-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-cyan-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Pig Beach (Big Major Cay)", desc: "The world-famous uninhabited island where feral pigs swim in the ocean." },
              { title: "Atlantis Paradise Island", desc: "A massive, iconic resort featuring incredible water parks and marine habitats." },
              { title: "Pink Sands Beach", desc: "Located on Harbour Island, renowned for its pale pink sand and calm waters." },
              { title: "Dean's Blue Hole", desc: "One of the world's deepest known saltwater blue holes, located on Long Island." },
              { title: "Lucayan National Park", desc: "Home to one of the longest underwater cave systems in the world." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-cyan-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-cyan-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-cyan-900">🐚 Conch Shell Art:</span>{" "}
              Beautiful jewelry, carvings, and polished shells sourced locally.
            </li>
            <li>
              <span className="font-semibold text-cyan-900">🧺 Straw Market Goods:</span>{" "}
              Hand-woven hats, bags, and mats crafted by local Bahamian artisans.
            </li>
            <li>
              <span className="font-semibold text-cyan-900">🌶️ Bahamian Hot Sauce:</span>{" "}
              Fiercely spicy sauces made using native goat peppers.
            </li>
            <li>
              <span className="font-semibold text-cyan-900">🪵 Androsia Batik:</span>{" "}
              Brightly colored, hand-dyed fabrics featuring Bahamian motifs, made on Andros Island.
            </li>
            <li>
              <span className="font-semibold text-cyan-900">🍹 Rum Cake:</span>{" "}
              Moist, delicious cakes baked and soaked in authentic Bahamian rum.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Nassau's famous Straw Market is the ultimate destination to find authentic Bahamian crafts. 
            Here, you can watch local vendors weave beautiful baskets and negotiate for unique, hand-crafted 
            souvenirs that capture the island spirit.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bahamas;
