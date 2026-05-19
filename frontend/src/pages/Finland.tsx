// src/pages/Finland.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Finland = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Finland.jpg"
          alt="Finland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Finland
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The Land of a Thousand Lakes, famous for its intense sauna culture, endless forests, and the Northern Lights.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Finland</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Consistently ranked as the happiest country in the world, Finland is a haven of pristine nature 
            and modern, functional design. It is heavily forested, dotted with nearly 200,000 lakes, and 
            deeply tied to the outdoors, experiencing intense Midnight Suns in summer and long, snowy winters.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-blue-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Helsinki", desc: "The coastal capital, known for its cutting-edge design, islands, and Neoclassical architecture." },
              { name: "Rovaniemi", desc: "The official hometown of Santa Claus and the gateway to Finnish Lapland." },
              { name: "Turku", desc: "The oldest city in Finland, featuring a medieval castle and a vibrant riverfront." },
              { name: "Tampere", desc: "A former industrial hub located between two lakes, now a major cultural center." },
              { name: "Oulu", desc: "A northern coastal city known as a major tech hub and for its extensive cycling network." },
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
              { title: "Suomenlinna", desc: "A massive, incredibly preserved 18th-century sea fortress spread across six islands in Helsinki." },
              { title: "Santa Claus Village", desc: "An amusement park in Rovaniemi where you can meet Santa and cross the Arctic Circle." },
              { title: "Nuuksio National Park", desc: "A serene area of forests and lakes located very close to the capital, Helsinki." },
              { title: "Temppeliaukio Church", desc: "A spectacular, modern church in Helsinki carved entirely directly into solid rock." },
              { title: "Lake Saimaa", desc: "The largest lake in Finland, known for its thousands of islands and the rare Saimaa ringed seal." },
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
              <span className="font-semibold text-blue-900">🔪 Puukko Knives:</span>{" "}
              Traditional, highly practical, and beautifully crafted Finnish belt knives used for carving.
            </li>
            <li>
              <span className="font-semibold text-blue-900">☕ Kuksa Cups:</span>{" "}
              Hand-carved wooden drinking cups made from birch burl, traditionally used by the Sami people.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🍬 Salmiakki:</span>{" "}
              The intensely loved, salty black licorice that is ubiquitous across Finland.
            </li>
            <li>
              <span className="font-semibold text-blue-900">👗 Marimekko:</span>{" "}
              World-famous textiles and clothing known for their bold, vibrant, and timeless floral prints.
            </li>
            <li>
              <span className="font-semibold text-blue-900">🥃 Fazer Chocolate & Koskenkorva:</span>{" "}
              Premium, highly prized milk chocolate and traditional Finnish clear spirit.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Market Square (Kauppatori) in Helsinki is the best place to find traditional foods like 
            smoked salmon and reindeer meat, while the surrounding Design District offers world-class, 
            minimalist Finnish glasswork and textiles.
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

export default Finland;
