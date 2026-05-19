// src/pages/Mexico.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Mexico = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "north-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Mexico.jpg"
          alt="Mexico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Mexico
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A vibrant tapestry of ancient ruins, spicy cuisine, and stunning coastal paradises.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Mexico</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Mexico is a country bursting with color, flavor, and history. It is home to ancient Mesoamerican 
            civilizations like the Maya and Aztecs, alongside incredibly preserved Spanish colonial architecture. 
            From the bustling metropolis of Mexico City to the turquoise waters of the Riviera Maya, Mexico 
            offers an unforgettable journey of discovery.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Mexico City", desc: "A massive, high-altitude capital known for its food, museums, and history." },
              { name: "Oaxaca", desc: "The culinary heart of Mexico, famous for mezcal and indigenous culture." },
              { name: "Cancún", desc: "A vibrant resort city known for its beaches and energetic nightlife." },
              { name: "Guadalajara", desc: "The birthplace of mariachi music and tequila." },
              { name: "Merida", desc: "The cultural capital of the Yucatán Peninsula, steeped in Maya history." },
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
              { title: "Chichén Itzá", desc: "A massive step pyramid and one of the New Seven Wonders of the World." },
              { title: "Teotihuacan", desc: "An ancient Mesoamerican city featuring the massive Pyramid of the Sun." },
              { title: "Cenotes of Yucatán", desc: "Stunning natural sinkholes exposing groundwater, perfect for swimming." },
              { title: "Frida Kahlo Museum", desc: "The iconic 'Blue House' in Mexico City dedicated to the famous artist." },
              { title: "Copper Canyon", desc: "A spectacular group of deep canyons located in the Sierra Madre Occidental." },
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
              <span className="font-semibold text-green-900">🥃 Mezcal & Tequila:</span>{" "}
              Authentic, artisanal agave spirits crafted in regions like Oaxaca and Jalisco.
            </li>
            <li>
              <span className="font-semibold text-green-900">🧵 Talavera Pottery:</span>{" "}
              Beautifully intricate, colorful, and glazed ceramics originating from Puebla.
            </li>
            <li>
              <span className="font-semibold text-green-900">💍 Silver Jewelry:</span>{" "}
              World-renowned, high-quality silver works, especially from the town of Taxco.
            </li>
            <li>
              <span className="font-semibold text-green-900">🎨 Alebrijes:</span>{" "}
              Brightly colored, fantastical wood-carved folk art sculptures.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍫 Mexican Chocolate & Mole:</span>{" "}
              Rich, stone-ground chocolate and complex culinary spice pastes.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Mexican markets, or 'mercados', like La Ciudadela in Mexico City or the vibrant markets of Oaxaca, 
            are sensory explosions. They are the best places to interact with locals, taste authentic street 
            food, and find handcrafted artisanal treasures.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-green-600 to-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mexico;
