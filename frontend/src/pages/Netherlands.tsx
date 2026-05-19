// src/pages/Netherlands.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Landmark, ShoppingBag } from "lucide-react";

const Netherlands = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get("continent") || "europe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero */}
      <div className="relative h-screen">
        <img
          src="/assets/Netherlands.jpg"
          alt="Netherlands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Netherlands
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl">
            A flat, vibrant country famous for its intricate canals, tulip fields, windmills, and cycling culture.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-4xl font-bold text-orange-900 mb-6">About the Netherlands</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Much of the Netherlands sits below sea level, protected by a stunningly complex system of dikes 
            and canals. It is a highly progressive, meticulously organized country boasting a deep history in 
            art, maritime trade, and some of the most beautiful spring flower displays in the world.
          </p>
        </section>

        {/* Top Cities */}
        <section>
          <h3 className="text-3xl font-semibold text-orange-800 mb-10 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> Top Cities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Amsterdam", desc: "The iconic capital, famous for its historic canal ring, museums, and liberal culture." },
              { name: "Rotterdam", desc: "A major port city boasting striking, futuristic modern architecture." },
              { name: "The Hague", desc: "The seat of government, home to the UN's International Court of Justice and beautiful palaces." },
              { name: "Utrecht", desc: "A lively student city featuring unique, split-level canals and a medieval center." },
              { name: "Maastricht", desc: "A distinctly southern city, known for its historic squares and close ties to Roman history." },
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
              { title: "Keukenhof Gardens", desc: "One of the world's largest flower gardens, spectacularly blooming with millions of tulips every spring." },
              { title: "Rijksmuseum", desc: "The premier art museum in Amsterdam, housing masterpieces by Rembrandt and Vermeer." },
              { title: "Anne Frank House", desc: "The somber, incredibly moving museum preserving the annex where Anne Frank hid during WWII." },
              { title: "Kinderdijk", desc: "A UNESCO World Heritage site featuring a stunning, iconic network of 18th-century windmills." },
              { title: "Van Gogh Museum", desc: "The largest collection of artworks by Vincent van Gogh in the world." },
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
              <span className="font-semibold text-orange-900">🧀 Gouda & Edam Cheese:</span>{" "}
              Massive, wax-coated wheels of delicious local cheese sold in traditional markets.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🏺 Delftware (Delft Blue):</span>{" "}
              Beautifully intricate blue-and-white pottery historically produced in the city of Delft.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🌷 Tulip Bulbs:</span>{" "}
              Certified bulbs ready for export, allowing you to bring a piece of the Dutch spring home.
            </li>
            <li>
              <span className="font-semibold text-orange-900">🧇 Stroopwafels:</span>{" "}
              Two thin, crispy waffles stuck together with a layer of sweet caramel syrup.
            </li>
            <li>
              <span className="font-semibold text-orange-900">👞 Wooden Clogs (Klompen):</span>{" "}
              Traditional, brightly painted wooden shoes, now mostly sold as iconic souvenirs.
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 max-w-4xl leading-relaxed">
            The Albert Cuyp Market in Amsterdam is the largest daytime market in Europe, perfect for grabbing 
            fresh, hot stroopwafels and local cheese. If you want authentic Delftware, purchasing directly from 
            the Royal Delft factory ensures highest quality.
          </p>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(`/country/${continent}`)}
            className="bg-gradient-to-r from-orange-600 to-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            ← Back to Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Netherlands;
