import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const continents = [
  {
    name: "Asia",
    route: "/country/asia",
    description: "Spices, silks, and centuries of tradition.",
    color: "from-rose-500 to-orange-500",
    image: "/assets/India.jpg",
  },
  {
    name: "Europe",
    route: "/country/europe",
    description: "Fine arts, antiques, and timeless elegance.",
    color: "from-blue-500 to-indigo-600",
    image: "/assets/France.jpg",
  },
  {
    name: "Africa",
    route: "/country/africa",
    description: "Vibrant textiles and handcrafted treasures.",
    color: "from-amber-500 to-yellow-600",
    image: "/assets/Kenya.jpg",
  },
  {
    name: "North America",
    route: "/country/north-america",
    description: "Bold adventures and contemporary crafts.",
    color: "from-emerald-500 to-green-600",
    image: "/assets/United States.jpg",
  },
  {
    name: "South America",
    route: "/country/south-america",
    description: "Colorful passion and rainforest mysteries.",
    color: "from-pink-500 to-fuchsia-600",
    image: "/assets/Brazil.jpg",
  },
  {
    name: "Australia & Oceania",
    route: "/country/australia",
    description: "Island crafts and unique natural wonders.",
    color: "from-cyan-500 to-teal-600",
    image: "/assets/Australia.jpg",
  },
];

export default function Explore() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Destination
            </span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Select a continent and discover hidden local specialties, authentic businesses,
            and must-visit spots around the world.
          </p>
        </div>

        {/* Continent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {continents.map((c) => (
            <Link
              key={c.name}
              to={c.route}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <img
                src={c.image}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${c.color} opacity-60 group-hover:opacity-75 transition-opacity duration-500`}
              ></div>

              {/* Decorative blur circle */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">

                <h2 className="text-3xl font-bold text-white mb-1 tracking-tight drop-shadow-md">
                  {c.name}
                </h2>
                <p className="text-white/80 text-sm font-medium leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {c.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 translate-x-8 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100 z-10">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
