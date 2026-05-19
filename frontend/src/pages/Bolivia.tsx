// src/pages/Bolivia.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Bolivia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "south-america";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-green-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Bolivia.jpg"
          alt="Bolivia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Bolivia
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            The rugged heart of the Andes — home to endless salt flats, striking indigenous cultures, and dramatic altitudes.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Bolivia</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Landlocked and predominantly high-altitude, Bolivia is arguably the most indigenous and traditional 
            country in South America. It is a land of extreme, raw beauty, from the mirror-like expanse of the 
            Uyuni Salt Flats to the treacherous "Death Road" and the vibrant, chaotic markets of La Paz.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "La Paz", desc: "The dizzyingly high administrative capital, nestled in a dramatic canyon." },
              { name: "Sucre", desc: "The constitutional capital, known as the 'White City' for its beautiful colonial architecture." },
              { name: "Santa Cruz", desc: "The booming, tropical economic center located in the eastern lowlands." },
              { name: "Potosí", desc: "Once one of the wealthiest cities in the world due to its massive silver mountain." },
              { name: "Copacabana", desc: "A charming town serving as the main Bolivian gateway to Lake Titicaca." },
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
              { title: "Salar de Uyuni", desc: "The world's largest salt flat, creating a spectacular mirror effect after rain." },
              { title: "North Yungas Road", desc: "Famously known as 'Death Road', a popular and terrifying mountain biking route." },
              { title: "Lake Titicaca & Isla del Sol", desc: "The legendary birthplace of the Inca, set in stunning, high-altitude waters." },
              { title: "Madidi National Park", desc: "One of the most biologically diverse jungle regions on the planet." },
              { title: "Tiwanaku", desc: "An incredibly ancient, pre-Inca archaeological site full of mystery." },
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
              <span className="font-semibold text-red-900">🧶 Aguayo Textiles:</span>{" "}
              Bright, multicolored striped cloths traditionally used to carry babies or goods.
            </li>
            <li>
              <span className="font-semibold text-red-900">👚 Llama & Alpaca Knitwear:</span>{" "}
              Extremely warm, durable, and uniquely patterned Andean sweaters and ponchos.
            </li>
            <li>
              <span className="font-semibold text-red-900">💍 Bolivian Ametrine:</span>{" "}
              A rare, naturally occurring quartz blending amethyst and citrine, mined heavily in Bolivia.
            </li>
            <li>
              <span className="font-semibold text-red-900">🔮 Witches' Market Goods:</span>{" "}
              Traditional Andean herbal medicines, amulets, and offerings to Pachamama (Mother Earth).
            </li>
            <li>
              <span className="font-semibold text-red-900">🧂 Uyuni Salt:</span>{" "}
              Locally harvested pink or white salt straight from the famous flats.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Witches' Market (Mercado de las Brujas) in La Paz is one of the most fascinating shopping 
            experiences in the world, where you can find everything from beautifully woven aguayos to bizarre, 
            ancient spiritual items.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-red-600 to-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bolivia;
