// src/pages/Nigeria.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Nigeria = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "africa";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Nigeria.jpg"
          alt="Nigeria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Nigeria
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Giant of Africa — vibrant culture, booming tech hubs, and a rich tapestry of traditions.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Nigeria</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Nigeria is a vibrant powerhouse in West Africa, known globally for its booming film industry (Nollywood), 
            Afrobeats music scene, and diverse cultural heritage. With over 250 ethnic groups, Nigeria offers an 
            incredible blend of food, fashion, and history set against bustling megacities and breathtaking natural landscapes.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Lagos", desc: "The commercial heartbeat, known for nightlife and tech." },
              { name: "Abuja", desc: "The planned capital city with stunning modern architecture." },
              { name: "Kano", desc: "Historic northern hub famous for ancient walls and indigo dyeing." },
              { name: "Port Harcourt", desc: "The Garden City and a major industrial center." },
              { name: "Ibadan", desc: "One of the largest cities by area, rich in colonial history." },
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
              { title: "Zuma Rock", desc: "The iconic monolith rising north of Abuja." },
              { title: "Olumo Rock", desc: "Historic fortress and tourist attraction in Abeokuta." },
              { title: "Lekki Conservation Centre", desc: "Famous for its canopy walkway in Lagos." },
              { title: "Osun-Osogbo Sacred Grove", desc: "A UNESCO World Heritage ancient forest." },
              { title: "Obudu Mountain Resort", desc: "Stunning highland resort with cable cars." },
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
              <span className="font-semibold text-green-900">👗 Ankara & Adire Fabrics:</span>{" "}
              Vibrant printed and indigo-dyed textiles.
            </li>
            <li>
              <span className="font-semibold text-green-900">🎨 Leather Goods:</span>{" "}
              High-quality handcrafted leather from Kano's ancient dye pits.
            </li>
            <li>
              <span className="font-semibold text-green-900">🌶️ Spices & Seasonings:</span>{" "}
              Suya spice, locust beans (iru), and dried seafood for rich flavors.
            </li>
            <li>
              <span className="font-semibold text-green-900">🗿 Wood Carvings & Bronze:</span>{" "}
              Benin bronze replicas and beautifully carved wooden masks.
            </li>
            <li>
              <span className="font-semibold text-green-900">🧺 Woven Baskets:</span>{" "}
              Colorful, hand-woven raffia baskets and home decor.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            From the endless stalls of Lagos' Balogun Market to the historic Kurmi Market in Kano, 
            shopping in Nigeria offers an explosion of color, sound, and culture, revealing the true 
            essence of West Africa's creative spirit.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-green-600 to-teal-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nigeria;
