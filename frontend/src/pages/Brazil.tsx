// src/pages/Brazil.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Brazil = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "south-america";

  return (
    <div>
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Brazil.jpg"
          alt="Brazil"
          className="w-full h-full object-cover"
        />
        {/* Softer overlay so image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Brazil
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mt-6 max-w-3xl">
            A country of samba, sunshine, and breathtaking natural wonders —
            from the Amazon rainforest to Rio’s iconic beaches.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20 bg-gradient-to-br from-yellow-50 via-green-100 to-emerald-200">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Brazil</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Brazil is the largest country in South America, home to vibrant
            cities, stunning beaches, and diverse ecosystems. Its culture blends
            indigenous, African, and European influences, celebrated in its
            music, cuisine, and world-famous Carnival.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Rio de Janeiro", desc: "Christ the Redeemer & Carnival" },
              { name: "São Paulo", desc: "Largest city, nightlife & culture" },
              { name: "Salvador", desc: "Afro-Brazilian heritage" },
              { name: "Brasília", desc: "Modernist capital" },
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
              { title: "Christ the Redeemer", desc: "Iconic statue overlooking Rio" },
              { title: "Amazon Rainforest", desc: "World’s largest tropical forest" },
              { title: "Iguaçu Falls", desc: "Breathtaking waterfall system" },
              { title: "Pantanal", desc: "Wildlife paradise" },
              { title: "Copacabana & Ipanema", desc: "World-famous beaches" },
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

        {/* Local Goods */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-green-900">☕ Brazilian Coffee:</span> 
              Renowned worldwide for its smooth, rich flavor — Brazil is the world’s largest coffee producer.
            </li>
            <li>
              <span className="font-semibold text-green-900">💎 Gemstones:</span> 
              Amethyst, topaz, and quartz sparkle in local markets, often crafted into unique jewelry.
            </li>
            <li>
              <span className="font-semibold text-green-900">🧶 Handmade Crafts:</span> 
              Colorful hammocks, ceramics, and wood carvings showcasing traditional artistry.
            </li>
            <li>
              <span className="font-semibold text-green-900">🥤 Açaí Bowls:</span> 
              Superfood straight from the Amazon, refreshing and energizing.
            </li>
            <li>
              <span className="font-semibold text-green-900">🧀 Pão de Queijo:</span> 
              Delicious cheese bread, a beloved street food and market snack.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍶 Cachaça:</span> 
              Brazil’s traditional sugarcane spirit, the heart of the caipirinha cocktail.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Walking through Brazil’s street markets is a feast for the senses —
            bright stalls filled with tropical fruits, spices, music, and laughter. 
            From the bustling Mercado Municipal in São Paulo to artisan fairs in Salvador, 
            markets are the beating heart of Brazilian culture and community life.
          </p>
        </section>

        {/* Back */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brazil;
