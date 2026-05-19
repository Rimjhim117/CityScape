// src/pages/Colombia.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Colombia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "south-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Colombia.jpg"
          alt="Colombia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Colombia
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A land of magical realism, featuring the lush Andes, Caribbean coasts, and rich coffee culture.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-yellow-900 mb-6">About Colombia</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Situated at the northern tip of South America, Colombia is incredibly diverse. It is the only 
            South American country with coastlines on both the Pacific Ocean and the Caribbean Sea. From the 
            vibrant, salsa-filled streets of Cali to the stunningly preserved colonial architecture of Cartagena, 
            Colombia is full of life and color.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-yellow-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Bogotá", desc: "The sprawling, high-altitude capital known for its history, art, and museums." },
              { name: "Medellín", desc: "The 'City of Eternal Spring', a highly innovative city set in an Andean valley." },
              { name: "Cartagena", desc: "A gorgeous, colorful colonial port city on the Caribbean coast." },
              { name: "Cali", desc: "The undisputed salsa capital of the world, full of energy and music." },
              { name: "Santa Marta", desc: "The oldest surviving city in South America, gateway to Tayrona National Park." },
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
              { title: "Cocora Valley", desc: "A stunning Andean valley home to the world's tallest wax palm trees." },
              { title: "Tayrona National Park", desc: "Where dense, lush jungle meets pristine Caribbean beaches." },
              { title: "Gold Museum (Museo del Oro)", desc: "Located in Bogotá, featuring the world's largest collection of pre-Hispanic gold." },
              { title: "Ciudad Perdida", desc: "The 'Lost City' hidden deep in the jungle, predating Machu Picchu." },
              { title: "Walled City of Cartagena", desc: "A UNESCO World Heritage site full of colorful balconies and historic forts." },
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
              <span className="font-semibold text-yellow-900">☕ Colombian Coffee:</span>{" "}
              Widely considered some of the best coffee in the world, sourced directly from the Coffee Triangle.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">💎 Emeralds:</span>{" "}
              Colombia produces the majority of the world's finest emeralds, famous for their deep green color.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">🎒 Wayuu Mochilas:</span>{" "}
              Vibrant, hand-woven, geometric bags created by the indigenous Wayuu women of the Guajira Peninsula.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">👒 Aguadeño Hats:</span>{" "}
              Traditional, finely woven hats similar to Panama hats, made in the town of Aguadas.
            </li>
            <li>
              <span className="font-semibold text-yellow-900">👚 Ruana:</span>{" "}
              A traditional, warm, poncho-like garment worn in the colder Andean regions.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Markets in Colombia are incredibly colorful and lively. The Paloquemao Market in Bogotá is fantastic 
            for discovering exotic fruits and flowers, while artisan markets like Usaquén are perfect for finding 
            authentic, handmade Wayuu bags and beautifully crafted jewelry.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Colombia;
