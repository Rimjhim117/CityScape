import React, { useState } from "react";
import { Sparkles, MapPin, Calendar, Heart, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";

export default function Itinerary() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [days, setDays] = useState(3);
  const [preferences, setPreferences] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!country) {
      setError("Please enter a country.");
      return;
    }

    setLoading(true);
    setError("");
    setItinerary("");

    const destination = city ? `${city}, ${country}` : country;

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
      const response = await fetch(`${API_URL}/api/itinerary/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination, days, preferences }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate itinerary. Please try again.");
      }

      const data = await response.json();
      setItinerary(data.itinerary);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden flex-grow flex flex-col items-center justify-center">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-pink-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl w-full z-10 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-purple-100 shadow-sm backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-900 tracking-wide uppercase">AI-Powered Travel</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Design Your Dream <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Itinerary in Seconds
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tell our AI where you want to go and what you love doing. We'll instantly generate a personalized, day-by-day travel plan.
          </p>
        </div>

        {/* Input Form & Results Container */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 z-10">
          
          {/* Form Section */}
          <div className="lg:col-span-4 h-fit">
            <form onSubmit={handleGenerate} className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl rounded-3xl p-8 transition-all">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Trip Details</h2>
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                  {error}
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Country</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g., France, Japan, India"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">City (Optional)</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g., Paris, Tokyo, Mumbai"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Duration (Days)</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="number"
                      min="1"
                      max="14"
                      value={days}
                      onChange={(e) => setDays(parseInt(e.target.value))}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Preferences & Interests</label>
                  <div className="relative">
                    <Heart className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      value={preferences}
                      onChange={(e) => setPreferences(e.target.value)}
                      placeholder="e.g., Art museums, local street food, historical walking tours..."
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all min-h-[120px] resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 mt-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating Magic...
                    </span>
                  ) : (
                    <>
                      Generate Itinerary
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-8">
            {itinerary ? (
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Your Personalized Itinerary</h3>
                <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed marker:text-purple-500">
                  <ReactMarkdown>{itinerary}</ReactMarkdown>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 border-dashed text-slate-400">
                <Sparkles className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-lg font-medium text-center">
                  Your personalized AI itinerary will appear here. <br/> Fill out the form to get started!
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
