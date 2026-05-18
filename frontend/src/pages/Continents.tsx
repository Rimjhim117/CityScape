import React from "react";
import { Link } from "react-router-dom";

interface Continent {
  name: string;
  image: string;
  route: string;
}

const continents: Continent[] = [
  {
    name: "Africa",
    image: "/assets/africa.jpg",
    route: "/country/africa",
  },
  {
    name: "Asia",
    image: "/assets/asia.jpg",
    route: "/country/asia",
  },
  {
    name: "Europe",
    image: "/assets/europe.jpg",
    route: "/country/europe",
  },
  {
    name: "North America",
    image: "/assets/north-america.jpg",
    route: "/country/north-america",
  },
  {
    name: "South America",
    image: "/assets/south-america.jpg",
    route: "/country/south-america",
  },
  {
    name: "Australia",
    image: "/assets/australia.jpg",
    route: "/country/australia",
  },
];

export default function Continents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 px-6 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-orange-800 mb-12">
        Choose a Continent
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {continents.map((continent) => (
          <Link to={continent.route} key={continent.name}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition duration-300">
              <img
                src={continent.image}
                alt={continent.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-orange-800">
                  {continent.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
