import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-300">
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-24 pt-32 pb-20 gap-16 overflow-hidden">
        
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100/50 backdrop-blur-md rounded-full text-purple-700 font-medium text-sm mb-4 border border-purple-200/50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-600 mr-2 animate-pulse"></span>
            Discover hidden local gems
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Travel Like a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Local.
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Discover the best local spots, unique specialties, and hidden businesses. Experience the true essence of your destination, far from the usual tourist traps.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              to="/explore"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-slate-800 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            >
              Start Exploring
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 font-bold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-900 shadow-sm"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative z-10 w-full max-w-lg lg:max-w-xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
          <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform transition duration-500 hover:scale-[1.02]">
            <img
              src="/assets/hero.jpg"
              alt="Authentic Marketplace"
              className="w-full h-auto object-cover rounded-2xl"
            />
            

          </div>
        </div>

      </main>
    </div>
  );
}
