// src/pages/Portugal.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Portugal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Portugal.jpg"
          alt="Portugal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Portugal
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A sun-drenched country of maritime history, melancholic Fado music, tiled facades, and incredible seafood.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-green-900 mb-6">About Portugal</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Perched on the edge of the Iberian Peninsula facing the Atlantic Ocean, Portugal has a deeply 
            entwined relationship with the sea. It is a country of incredibly charming, hilly cities, dramatic 
            cliffside coastlines in the Algarve, and world-renowned wine regions winding along river valleys.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Lisbon", desc: "The vibrant, hilly capital known for pastel buildings, historic trams, and sweeping views." },
              { name: "Porto", desc: "A fascinating, slightly gritty northern city famous for its port wine cellars." },
              { name: "Sintra", desc: "A fairytale town nestled in pine-covered hills, dotted with whimsical palaces and castles." },
              { name: "Faro", desc: "The capital of the Algarve region, acting as the gateway to stunning southern beaches." },
              { name: "Coimbra", desc: "A historic riverfront city home to one of Europe's oldest and most beautiful universities." },
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
              { title: "Belém Tower", desc: "A stunning 16th-century fortification in Lisbon, a symbol of the Age of Discovery." },
              { title: "Pena Palace", desc: "A wildly colorful, romanticist castle sitting atop the hills of Sintra." },
              { title: "Douro Valley", desc: "A breathtaking, terraced wine-producing region winding along the Douro River." },
              { title: "Jerónimos Monastery", desc: "A massive, incredibly ornate monastery in Lisbon built in the Manueline style." },
              { title: "Benagil Cave", desc: "A spectacular, naturally formed sea cave in the Algarve, accessible by boat or kayak." },
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
              <span className="font-semibold text-green-900">🟦 Azulejos (Ceramic Tiles):</span>{" "}
              Beautifully painted, often blue-and-white tin-glazed ceramic tiles that decorate buildings nationwide.
            </li>
            <li>
              <span className="font-semibold text-green-900">🍷 Port Wine:</span>{" "}
              The famous sweet, fortified wine exclusively produced in the Douro Valley.
            </li>
            <li>
              <span className="font-semibold text-green-900">🥚 Pastéis de Nata:</span>{" "}
              Incredibly delicious, crispy, and creamy egg custard tarts famously originating in Belém.
            </li>
            <li>
              <span className="font-semibold text-green-900">🪵 Cork Products:</span>{" "}
              Portugal is the world's largest producer of cork, crafting it into bags, wallets, and shoes.
            </li>
            <li>
              <span className="font-semibold text-green-900">🐟 Tinned Sardines:</span>{" "}
              High-quality seafood preserved in beautiful, vintage-style tins.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Mercado da Ribeira (Time Out Market) in Lisbon is a fantastic place to sample gourmet 
            local foods, while exploring the steep, narrow streets of Alfama will lead you to authentic 
            fado houses and traditional tile workshops.
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

export default Portugal;
