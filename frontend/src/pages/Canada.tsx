// src/pages/Canada.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Canada = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "north-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Canada.jpg"
          alt="Canada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Canada
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A vast expanse of stunning wilderness, vibrant multicultural cities, and boundless outdoor adventure.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Canada</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            The second-largest country in the world, Canada boasts diverse landscapes spanning from the 
            rugged peaks of the Rocky Mountains to the maritime charm of the East Coast. It is celebrated 
            for its incredibly welcoming people, multicultural urban centers, and a deep respect for nature.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Toronto", desc: "Canada's largest city, incredibly diverse and home to the CN Tower." },
              { name: "Vancouver", desc: "A bustling west coast seaport surrounded by majestic mountains." },
              { name: "Montreal", desc: "A vibrant city in Quebec that beautifully blends European charm with modern flair." },
              { name: "Banff", desc: "A picturesque resort town nestled high in the Canadian Rockies." },
              { name: "Quebec City", desc: "One of the oldest European settlements in North America with a stunning fortified center." },
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
              { title: "Niagara Falls", desc: "A group of three massive, powerful waterfalls on the US border." },
              { title: "Banff National Park", desc: "Canada's oldest national park, famous for its striking turquoise lakes." },
              { title: "CN Tower", desc: "The iconic, towering concrete communications and observation tower in Toronto." },
              { title: "Old Quebec", desc: "A historic neighborhood with cobblestone streets and stunning chateaus." },
              { title: "Stanley Park", desc: "Vancouver's magnificent urban park, larger than Central Park." },
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
              <span className="font-semibold text-red-900">🍁 Pure Maple Syrup:</span>{" "}
              Canada produces over 70% of the world's maple syrup, deeply embedded in local culture.
            </li>
            <li>
              <span className="font-semibold text-red-900">🐟 Smoked Salmon:</span>{" "}
              High-quality, delicious Pacific salmon sourced directly from British Columbia.
            </li>
            <li>
              <span className="font-semibold text-red-900">💎 Ammolite Jewelry:</span>{" "}
              A rare, iridescent gemstone found primarily along the eastern slopes of the Rockies.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧥 Indigenous Art & Crafts:</span>{" "}
              Beautiful soapstone carvings, cedar wood art, and traditional beadwork.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍷 Icewine:</span>{" "}
              A decadent, sweet dessert wine produced predominantly in Ontario and British Columbia.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Wandering through places like the St. Lawrence Market in Toronto or the Granville Island 
            Public Market in Vancouver lets you taste the true flavors of Canada and find handcrafted 
            local specialties straight from the makers.
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

export default Canada;
