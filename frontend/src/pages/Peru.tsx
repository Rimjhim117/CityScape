// src/pages/Peru.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Peru = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "south-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Peru.jpg"
          alt="Peru"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Peru
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The heart of the ancient Inca Empire, boasting the legendary Machu Picchu, the Amazon, and incredible cuisine.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Peru</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Peru is a country of staggering historical depth and geographic diversity. It is famously home 
            to a section of the Amazon rainforest and Machu Picchu, an ancient Incan city set high in the Andes 
            mountains. In recent years, its capital, Lima, has also become one of the premier culinary capitals of the world.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Lima", desc: "The bustling coastal capital, renowned globally for its gastronomy." },
              { name: "Cusco", desc: "The historic capital of the Inca Empire and gateway to the Sacred Valley." },
              { name: "Arequipa", desc: "The 'White City', framed by three volcanoes and famous for colonial architecture." },
              { name: "Iquitos", desc: "The largest city in the world unreachable by road, nestled deep in the Amazon." },
              { name: "Puno", desc: "Located on the shores of Lake Titicaca, known as the folklore capital of Peru." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-red-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Machu Picchu", desc: "The breathtaking 15th-century Inca citadel situated on a mountain ridge." },
              { title: "Sacred Valley", desc: "A stunning Andean valley filled with Inca ruins and traditional villages." },
              { title: "Colca Canyon", desc: "One of the deepest canyons in the world, famous for Andean condors." },
              { title: "Lake Titicaca", desc: "The highest navigable lake in the world, home to the floating Uros islands." },
              { title: "Nazca Lines", desc: "Massive, mysterious ancient geoglyphs etched into the desert sands." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-red-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-red-900">🦙 Alpaca Clothing:</span>{" "}
              Incredibly soft and warm sweaters, scarves, and hats woven from alpaca wool.
            </li>
            <li>
              <span className="font-semibold text-red-900">🏺 Inca Pottery:</span>{" "}
              Replica ceramics and authentic Pucará Bulls used to ward off evil spirits.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧶 Chullo Hats:</span>{" "}
              Traditional Andean hats with earflaps, often brightly colored and intricately patterned.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧂 Maras Salt:</span>{" "}
              Pink salt harvested by hand from the ancient pre-Inca salt pans of Maras.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍸 Pisco:</span>{" "}
              The national spirit of Peru, a grape brandy essential for making Pisco Sours.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Visiting the Pisac Market in the Sacred Valley or the San Pedro Market in Cusco is an absolute must. 
            These vibrant markets are overflowing with local textiles, fresh exotic produce, and incredible 
            handicrafts deeply rooted in Andean culture.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Peru;
