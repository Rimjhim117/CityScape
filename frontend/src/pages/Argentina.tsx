// src/pages/Argentina.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Argentina = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "south-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Argentina.jpg"
          alt="Argentina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Argentina
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A land of passionate tango, world-class wine, and the breathtaking peaks of Patagonia.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Argentina</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Stretching down the southern half of South America, Argentina is a country of immense geographic 
            and cultural scale. From the European-inspired elegance of Buenos Aires to the dramatic glaciers 
            of Patagonia and the thundering Iguazú Falls, Argentina offers a truly dramatic and unforgettable journey.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Buenos Aires", desc: "The vibrant capital known as the 'Paris of South America', famous for its tango and nightlife." },
              { name: "Mendoza", desc: "The heart of Argentina's wine country, nestled at the foothills of the Andes." },
              { name: "Córdoba", desc: "A historic city known for its colonial architecture and lively student population." },
              { name: "Ushuaia", desc: "The southernmost city in the world, the gateway to Antarctica." },
              { name: "Rosario", desc: "A major port city on the Paraná River, known for its neoclassical architecture." },
            ].map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-xl text-blue-900">{city.name}</h4>
                <p className="text-gray-600 mt-2">{city.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <Landmark className="w-7 h-7" /> Famous Attractions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Iguazú Falls", desc: "A spectacular waterfall system on the border with Brazil." },
              { title: "Perito Moreno Glacier", desc: "A massive, stunning blue glacier in Los Glaciares National Park." },
              { title: "Mount Fitz Roy", desc: "A striking, jagged mountain peak in Patagonia beloved by hikers." },
              { title: "La Boca", desc: "A colorful, vibrant neighborhood in Buenos Aires, rich in tango history." },
              { title: "Quebrada de Humahuaca", desc: "A dramatic, multi-colored desert valley in the Andean northwest." },
            ].map((attraction) => (
              <div
                key={attraction.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg text-blue-900">
                  {attraction.title}
                </h4>
                <p className="text-gray-600 mt-2">{attraction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Goods & Markets */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" /> Local Goods & Markets
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-blue-900">🥩 Leather Goods:</span>{" "}
              Incredibly high-quality belts, bags, and jackets crafted from Argentine leather.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🍷 Malbec Wine:</span>{" "}
              World-renowned, deep red wine primarily produced in the Mendoza region.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🧉 Mate Gourds & Bombillas:</span>{" "}
              Traditional carved wooden or calabash gourds and metal straws used for drinking yerba mate.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🧶 Alpaca & Llama Wool:</span>{" "}
              Beautifully woven ponchos and blankets, especially from the northern Andean regions.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🍬 Alfajores:</span>{" "}
              Delicious, traditional sandwich cookies filled with rich dulce de leche.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in Argentina is a fantastic experience. The famous San Telmo Sunday Market in Buenos 
            Aires is incredible for finding vintage leather goods, antiques, and local artisanal crafts, all 
            while enjoying street tango performances.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Argentina;
