// src/pages/Hungary.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Hungary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Hungary.jpg"
          alt="Hungary"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Hungary
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A land of spectacular architecture, thermal baths, hearty paprika-infused cuisine, and deep Central European history.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About Hungary</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Hungary sits proudly in the heart of Europe, bisected by the mighty Danube River. It is a 
            fascinating country characterized by its unique Finno-Ugric language, a complex history of empires, 
            and a rich tradition of folk art, classical music, and mineral-rich thermal springs.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Budapest", desc: "The 'Pearl of the Danube', a stunningly grand capital famous for thermal baths and ruin bars." },
              { name: "Debrecen", desc: "The second-largest city, a major cultural center of the Great Hungarian Plain." },
              { name: "Szeged", desc: "The 'City of Sunshine', known for its university, striking architecture, and spicy paprika." },
              { name: "Pécs", desc: "A southern city offering a remarkably rich history blending Roman, Ottoman, and Christian ruins." },
              { name: "Eger", desc: "A picturesque northern town famous for its historic castle and the 'Bull's Blood' red wine." },
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
              { title: "Hungarian Parliament Building", desc: "A breathtakingly massive, neo-Gothic masterpiece sitting on the banks of the Danube." },
              { title: "Széchenyi Thermal Bath", desc: "The largest and most iconic medicinal bath in Europe, featuring stunning yellow architecture." },
              { title: "Buda Castle", desc: "The historical castle and palace complex of the Hungarian kings in Budapest." },
              { title: "Lake Balaton", desc: "The largest lake in Central Europe, a major summer resort destination known as the 'Hungarian Sea'." },
              { title: "Fisherman's Bastion", desc: "A fairytale-like terrace providing the most spectacular panoramic views over Budapest." },
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
              <span className="font-semibold text-red-900">🌶️ Hungarian Paprika:</span>{" "}
              The soul of Hungarian cuisine, available in sweet, mild, and incredibly hot varieties.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍷 Tokaji Aszú:</span>{" "}
              The 'Wine of Kings', a legendary, sweet dessert wine produced in the Tokaj region.
            </li>
            <li>
              <span className="font-semibold text-red-900">🍽️ Herend Porcelain:</span>{" "}
              Exquisite, hand-painted luxury porcelain favored by European royalty since the 1800s.
            </li>
            <li>
              <span className="font-semibold text-red-900">🌿 Unicum:</span>{" "}
              A deeply bitter, herbal liqueur made from a secret family recipe, often drunk as a digestif.
            </li>
            <li>
              <span className="font-semibold text-red-900">👚 Matyó Embroidery:</span>{" "}
              Traditional, vibrantly colored floral embroidery used on clothing, tablecloths, and souvenirs.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Great Market Hall in Budapest is a must-visit. It is a stunning, cavernous neo-Gothic building 
            where you can buy strings of dried paprika, fresh lángos (fried dough), and authentic folk art.
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

export default Hungary;
