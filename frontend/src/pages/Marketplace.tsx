// Marketplace.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Hero Image */}
        <img
          src="/assets/marketplace-hero.jpg"
          alt="Marketplace Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/30">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              Explore Local Goods
            </h1>
            <p className="text-lg sm:text-xl mb-6 drop-shadow-md">
              Discover handcrafted items, spices, shawls, and unique treasures from city markets worldwide.
            </p>
            <Link to="/continents">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-md transition">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
