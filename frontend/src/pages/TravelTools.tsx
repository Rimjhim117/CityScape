import React, { useState } from "react";
import Navbar from "../components/Navbar";
import WeatherWidget from "../components/WeatherWidget";
import CurrencyWidget from "../components/CurrencyWidget";
import { CloudRain, DollarSign, Search } from "lucide-react";

export default function TravelTools() {
  const [location, setLocation] = useState("Paris, France");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (country.trim()) {
      setLocation(city.trim() ? `${city.trim()}, ${country.trim()}` : country.trim());
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto w-full flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Essential Travel Tools
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to prepare for your journey. Check real-time weather forecasts and live currency exchange rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Weather Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <CloudRain className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Live Weather</h2>
            </div>
            
            <form onSubmit={handleSearch} className="mb-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country (e.g., France)"
                  className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                  required
                />
                <input 
                  type="text" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City (Optional, e.g., Paris)"
                  className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                />
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-bold flex items-center justify-center gap-2 shadow-sm">
                <Search className="w-4 h-4" /> Check Weather
              </button>
            </form>

            <WeatherWidget location={location} />
          </div>

          {/* Currency Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <DollarSign className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Live Currency Exchange</h2>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              Select your currencies below to get real-time conversion rates instantly.
            </p>
            <CurrencyWidget />
          </div>

        </div>
      </div>
    </div>
  );
}
