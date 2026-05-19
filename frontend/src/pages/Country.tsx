import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// Country images mapping — matches exact filenames in public/assets/
const countryImages: Record<string, string> = {
  "India": "India.jpg", "Japan": "Japan.jpg", "Thailand": "Thailand.jpg",
  "Indonesia": "Indonesia.jpg", "Vietnam": "Vietnam.jpg", "Nepal": "Nepal.jpg",
  "Malaysia": "Malasiya.jpg", "Philippines": "Philippines.jpg",
  "Sri Lanka": "Sri-Lanka.jpg", "Bangladesh": "Bangladesh.jpg",
  "China": "China.jpg", "Singapore": "Singapour.jpg", "Bhutan": "Bhutan.jpg",
  "South Korea": "South-korea.jpg", "Uzbekistan": "Uzbekistan.jpg",
  "France": "France.jpg", "Italy": "Italy.jpg", "Germany": "Germany.jpg",
  "Spain": "Spain.jpg", "Greece": "Greeze.jpg", "Netherlands": "Netherland.jpg",
  "Portugal": "Portugal.jpg", "Switzerland": "Switzerland.jpg",
  "Austria": "Austria.jpg", "Norway": "Norway.jpg",
  "Czech Republic": "Czech Republic.jpg", "Poland": "Poland.jpg",
  "Hungary": "Hungary.jpg", "Sweden": "Sweden.jpg", "Croatia": "Croatia.jpg",
  "Finland": "Finland.jpg", "England": "England.jpg",
  "Kenya": "Kenya.jpg", "Nigeria": "Nigeria.jpg", "South Africa": "South Africa.jpg",
  "Egypt": "Egypt.jpg", "Morocco": "Morocco.jpg", "Ghana": "Ghana.jpg",
  "Ethiopia": "Ethiopia.jpg", "Tanzania": "Tanzania.jpg", "Senegal": "Senegal.jpg",
  "Algeria": "Algeria.jpg", "Uganda": "Uganda.jpg", "Namibia": "Namibia.jpg",
  "United States": "United States.jpg", "Canada": "Canada.jpg",
  "Mexico": "Mexico.jpg", "Cuba": "Cuba.jpg", "Jamaica": "Jamaica.jpg",
  "Costa Rica": "Costa Rica.jpg", "Panama": "Panama.jpg",
  "Bahamas": "Bahamas.jpg", "Honduras": "Honduras.jpg",
  "Dominican Republic": "Dominican Republic.jpg",
  "Brazil": "Brazil.jpg", "Argentina": "Argentina.jpg", "Chile": "Chile.jpg",
  "Colombia": "Colombia.jpg", "Peru": "Peru.jpg", "Uruguay": "Uruguay.jpg",
  "Paraguay": "Paraguay.jpg", "Ecuador": "Ecuador.jpg",
  "Bolivia": "Bolivia.jpg", "Venezuela": "Venezuela.jpg",
  "Australia": "Australia.jpg", "New Zealand": "New Zealand.jpg",
  "Fiji": "Fiji.jpg", "Samoa": "Samoa.jpg",
  "Papua New Guinea": "Papua New Guinea.jpg", "Tonga": "Tonga.jpg",
  "Vanuatu": "Vanuatu.jpg", "Solomon Islands": "Solomon Islands.jpg",
};

// Countries per continent
const countriesByContinent: Record<string, string[]> = {
  Africa: ["Kenya", "Nigeria", "South Africa", "Egypt", "Morocco", "Ghana",
    "Ethiopia", "Tanzania", "Senegal", "Algeria", "Uganda", "Namibia"],
  Asia: ["India", "Japan", "Thailand", "Indonesia", "Vietnam", "Nepal",
    "Malaysia", "Philippines", "Sri Lanka", "Bangladesh", "China", "Singapore",
    "Bhutan", "South Korea", "Uzbekistan"],
  Europe: ["France", "Italy", "Germany", "Spain", "Greece", "Netherlands",
    "Portugal", "Switzerland", "Austria", "Norway", "Czech Republic", "Poland",
    "Hungary", "Sweden", "Croatia", "Finland", "England"],
  "North America": ["United States", "Canada", "Mexico", "Cuba", "Jamaica",
    "Costa Rica", "Panama", "Bahamas", "Honduras", "Dominican Republic"],
  "South America": ["Brazil", "Argentina", "Chile", "Colombia", "Peru",
    "Uruguay", "Paraguay", "Ecuador", "Bolivia", "Venezuela"],
  Australia: ["Australia", "New Zealand", "Fiji", "Samoa", "Papua New Guinea",
    "Tonga", "Vanuatu", "Solomon Islands"],
};

const continentDescriptions: Record<string, string> = {
  Africa: "Home to vast deserts, jungles, and wildlife — Africa offers rich traditions and natural wonders.",
  Asia: "A melting pot of cultures, flavors, and spiritual heritage stretching from the Middle East to the Pacific.",
  Europe: "Timeless cities, iconic landmarks, and centuries of historical depth.",
  "North America": "From tech cities to natural wonders, bold adventures await.",
  "South America": "Colorful, vibrant, and tropical — discover passion, history, and rainforest mysteries.",
  Australia: "The land down under — wild coasts, Aboriginal roots, and unique wildlife await you.",
};

const continentGradients: Record<string, string> = {
  Africa: "from-amber-500 to-yellow-600",
  Asia: "from-rose-500 to-orange-500",
  Europe: "from-blue-500 to-indigo-600",
  "North America": "from-emerald-500 to-green-600",
  "South America": "from-pink-500 to-fuchsia-600",
  Australia: "from-cyan-500 to-teal-600",
};

function formatContinentName(param: string = ""): string {
  return param.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function toKebabCase(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export default function Country() {
  const { continent } = useParams<{ continent: string }>();
  const navigate = useNavigate();

  const formattedContinent = formatContinentName(continent);
  const countries = countriesByContinent[formattedContinent] || [];
  const description = continentDescriptions[formattedContinent] || "";
  const gradient = continentGradients[formattedContinent] || "from-purple-500 to-pink-500";

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Banner */}
      <div className={`relative bg-gradient-to-r ${gradient} pt-32 pb-16 px-6`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-10 blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            {formattedContinent}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">{description}</p>
        </div>
      </div>

      {/* Country Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-slate-800">
            {countries.length} Countries to Explore
          </h2>
          <button
            onClick={() => navigate("/explore")}
            className="text-sm font-medium text-slate-500 hover:text-slate-800 transition flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Continents
          </button>
        </div>

        {countries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {countries.map((country) => {
              const imgFile = countryImages[country];
              return (
                <button
                  key={country}
                  onClick={() => navigate(`/countries/${toKebabCase(country)}?continent=${continent}`)}
                  className="group relative h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-left"
                >
                  {/* Country Image */}
                  {imgFile ? (
                    <img
                      src={`/assets/${imgFile}`}
                      alt={country}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-500"></div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Country Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="text-xl font-bold text-white drop-shadow-md">
                      {country}
                    </h3>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <p className="text-slate-500 text-lg text-center mt-12">
            No countries listed for this continent yet.
          </p>
        )}
      </div>
    </div>
  );
}
