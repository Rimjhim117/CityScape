// src/pages/India.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const India = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/India.jpg"
          alt="India"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            India
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A vast, colorful subcontinent blending ancient spirituality, royal history, and incredible culinary diversity.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-orange-900 mb-6">About India</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            India is a country of staggering scale and contrast. From the snow-capped peaks of the Himalayas 
            in the north to the tropical backwaters of Kerala in the south, it is a land where ancient temples 
            sit beside booming tech hubs, and every region offers its own distinct language, culture, and flavor.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-orange-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "New Delhi", desc: "The bustling capital, blending centuries-old Mughal monuments with modern energy." },
              { name: "Mumbai", desc: "The financial and entertainment capital, home to Bollywood and vibrant street life." },
              { name: "Jaipur", desc: "The 'Pink City', famous for its majestic palaces, forts, and royal heritage." },
              { name: "Varanasi", desc: "One of the world's oldest living cities, the spiritual heart of India on the Ganges River." },
              { name: "Bengaluru", desc: "The 'Silicon Valley of India', known for its tech industry and beautiful parks." },
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
              { title: "Taj Mahal", desc: "The iconic, breathtaking white marble mausoleum in Agra." },
              { title: "Amber Fort", desc: "A magnificent hilltop fort in Jaipur with intricate Hindu-style elements." },
              { title: "Kerala Backwaters", desc: "A serene, beautiful network of canals, lagoons, and lakes best explored by houseboat." },
              { title: "Golden Temple", desc: "The holiest Gurdwara of Sikhism, stunningly gilded in gold, located in Amritsar." },
              { title: "Gateway of India", desc: "Mumbai's most famous monument, overlooking the Arabian Sea." },
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
              <span className="font-semibold text-orange-900">🧵 Handwoven Textiles:</span>{" "}
              Incredible silk sarees from Kanchipuram and Banaras, and vibrant cotton block prints from Rajasthan.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🌶️ Spices:</span>{" "}
              High-quality cardamom, pepper, turmeric, and complex masala blends straight from the spice markets.
            </li>
            <li>
              <span className="font-semibold text-orange-900">💍 Traditional Jewelry:</span>{" "}
              Elaborate Kundan and Polki gold jewelry, often adorned with precious gems.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🫖 Darjeeling & Assam Tea:</span>{" "}
              World-renowned, premium loose-leaf teas sourced directly from the Himalayan foothills.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🪵 Handicrafts:</span>{" "}
              Intricate sandalwood carvings, marble inlay work, and colorful papier-mâché from Kashmir.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in India is a sensory explosion. Markets like Chandni Chowk in Delhi or the vibrant 
            bazaars of Jaipur are perfect for haggling over magnificent textiles, gleaming brassware, and 
            aromatic spices.
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

export default India;
