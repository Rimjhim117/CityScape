// src/pages/Bhutan.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Bhutan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Bhutan.jpg"
          alt="Bhutan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Bhutan
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Land of the Thunder Dragon — a mystical Himalayan kingdom prioritizing Gross National Happiness.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-orange-900 mb-6">About Bhutan</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Tucked deep within the eastern Himalayas, Bhutan is a deeply spiritual, incredibly well-preserved 
            Buddhist kingdom. It famously measures its success through "Gross National Happiness" rather than GDP, 
            ensuring its striking mountain landscapes and ancient cultural traditions remain intact against mass tourism.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-orange-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Thimphu", desc: "The only capital city in the world without traffic lights, set in a scenic valley." },
              { name: "Paro", desc: "Home to Bhutan's only international airport and the iconic Tiger's Nest." },
              { name: "Punakha", desc: "The ancient winter capital, known for its stunning riverside Dzong." },
              { name: "Bumthang", desc: "The spiritual heartland of Bhutan, featuring some of the oldest temples." },
              { name: "Phobjikha", desc: "A stunning, vast glacial valley famous for the rare black-necked cranes." },
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
              { title: "Tiger's Nest (Paro Taktsang)", desc: "A breathtaking sacred monastery clinging to a sheer cliff face." },
              { title: "Punakha Dzong", desc: "Often considered the most beautiful fortress-monastery in Bhutan." },
              { title: "Buddha Dordenma", desc: "A massive, gilded statue of Shakyamuni Buddha overlooking Thimphu." },
              { title: "Dochula Pass", desc: "A scenic mountain pass featuring 108 memorial chortens and panoramic Himalayan views." },
              { title: "Tashichho Dzong", desc: "An impressive fortress that houses the throne room and government offices." },
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
              <span className="font-semibold text-orange-900">🧵 Handwoven Textiles (Yathra):</span>{" "}
              Incredibly intricate, brightly colored woolen cloth used for garments and bags.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🪵 Dappa (Wooden Bowls):</span>{" "}
              Beautifully carved, traditional wooden bowls made in the Trashiyangtse region.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🎨 Thangka Paintings:</span>{" "}
              Sacred Buddhist scroll paintings created with natural mineral pigments.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🌶️ Ema Datshi Ingredients:</span>{" "}
              Dried red chilies and local cheese to make Bhutan's fiery national dish.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🌿 Lemongrass Oil:</span>{" "}
              Pure, organic essential oils produced from lemongrass growing wild in the mountains.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Bhutan is intensely protective of its crafts. Visiting the Authentic Bhutanese Crafts Bazaar in 
            Thimphu ensures you are purchasing genuine, locally produced goods that directly support rural 
            artisans and the preservation of traditional arts.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bhutan;
