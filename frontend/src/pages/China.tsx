// src/pages/China.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const China = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "asia";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/China.jpg"
          alt="China"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            China
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A vast, complex country blending millennia of ancient civilization with ultra-modern innovation.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-red-900 mb-6">About China</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            China is a country of staggering scale and incredible diversity. It is the birthplace of one 
            of the world's oldest continuous civilizations. From the futuristic, neon-lit skyline of Shanghai 
            to the ancient, snaking walls built across its northern mountains, China offers a travel experience 
            like no other.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-red-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Beijing", desc: "The political and cultural capital, home to the Forbidden City and the Great Wall." },
              { name: "Shanghai", desc: "A massive, global financial hub known for its futuristic skyline and the historic Bund." },
              { name: "Xi'an", desc: "An ancient capital and the starting point of the Silk Road, famous for the Terracotta Army." },
              { name: "Chengdu", desc: "The relaxed, culinary capital of Sichuan province, and home to the Giant Panda." },
              { name: "Guangzhou", desc: "A sprawling port city known for its avant-garde architecture and exceptional Cantonese cuisine." },
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
              { title: "The Great Wall", desc: "An awe-inspiring series of ancient fortifications stretching across northern China." },
              { title: "The Forbidden City", desc: "The magnificent, sprawling imperial palace complex located in the heart of Beijing." },
              { title: "Terracotta Army", desc: "Thousands of life-sized clay soldiers buried with China's first emperor in Xi'an." },
              { title: "Li River (Guilin)", desc: "A stunning river cutting through spectacular karst mountain landscapes." },
              { title: "Pothala Palace (Tibet)", desc: "The breathtaking winter palace of the Dalai Lamas, perched high in the Himalayas." },
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
              <span className="font-semibold text-red-900">🍵 Premium Tea:</span>{" "}
              Incredible varieties of green, oolong, and pu'er tea, essential to Chinese culture.
            </li>
            <li>
              <span className="font-semibold text-red-900">🧵 Silk:</span>{" "}
              High-quality silk garments, scarves, and embroidery, particularly famous from Suzhou and Hangzhou.
            </li>
            <li>
              <span className="font-semibold text-red-900">💚 Jade Carvings:</span>{" "}
              Considered more valuable than gold, expertly carved jade jewelry and sculptures.
            </li>
            <li>
              <span className="font-semibold text-red-900">🖌️ Calligraphy & Art:</span>{" "}
              Traditional ink wash paintings and masterfully crafted calligraphy scrolls.
            </li>
            <li>
              <span className="font-semibold text-red-900">🏺 Porcelain:</span>{" "}
              Beautifully painted ceramics, especially the famous blue-and-white ware from Jingdezhen.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            Shopping in China can range from the luxury mega-malls of Shanghai to historic markets like 
            Panjiayuan Antique Market in Beijing. Here, you can hunt for incredibly authentic antiques, 
            jade, and traditional arts.
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

export default China;
