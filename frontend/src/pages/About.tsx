// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const stats = [
  { value: "50+", label: "Countries" },
  { value: "10K+", label: "Artisans" },
  { value: "25K+", label: "Products" },
  { value: "6", label: "Continents" },
];

const values = [
  {
    title: "Global Reach",
    description:
      "We source directly from over 50 countries, bringing you authentic, culturally rich items you won't find anywhere else.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Sustainable Impact",
    description:
      "Every item is crafted with respect for the environment. We prioritize sustainable materials and eco-friendly practices.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Fair Trade First",
    description:
      "We guarantee fair compensation for all artisans. By cutting out the middleman, creators earn what they truly deserve.",
    gradient: "from-rose-500 to-pink-600",
  },
];

const team = [
  { name: "Local Weavers", region: "Southeast Asia", image: "/assets/Thailand.jpg" },
  { name: "Pottery Artisans", region: "North Africa", image: "/assets/Morocco.jpg" },
  { name: "Textile Makers", region: "South America", image: "/assets/Peru.jpg" },
  { name: "Woodcraft Artists", region: "Oceania", image: "/assets/Fiji.jpg" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center px-4 py-1.5 bg-purple-100/60 backdrop-blur-sm rounded-full text-purple-700 font-medium text-sm mb-6 border border-purple-200/50">
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Bridging Cultures,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              One Product at a Time
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We believe every handcrafted product carries a story worth sharing.
            Our mission is to connect passionate artisans with conscious buyers
            across the globe.
          </p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {s.value}
              </p>
              <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Values Section ─── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            What We Stand For
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Three pillars that guide every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${v.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg`}
                >
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Full-width Image + Mission ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/India.jpg"
            alt="Local artisan marketplace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Our Mission
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              To build a world where geographical borders don't limit economic
              opportunity. We empower small-scale producers by providing them
              with a global stage to showcase their heritage, talent, and
              passion.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Every purchase on our platform directly funds artisan communities,
              preserves traditional crafts, and creates sustainable livelihoods
              for families across the developing world.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Explore Markets
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Side stat card */}
          <div className="flex-shrink-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center shadow-2xl">
            <p className="text-6xl font-extrabold text-white mb-2">50+</p>
            <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-6">
              Countries
            </p>
            <div className="flex -space-x-3 justify-center">
              {["/assets/Japan.jpg", "/assets/Brazil.jpg", "/assets/Kenya.jpg", "/assets/France.jpg"].map(
                (img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white/30 object-cover"
                  />
                )
              )}
              <div className="w-10 h-10 rounded-full bg-purple-600 border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold">
                +46
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Artisan Showcase ─── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Meet the Makers
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            The talented communities behind your favorite products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t) => (
            <div
              key={t.name}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={t.image}
                alt={t.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white">{t.name}</h3>
                <p className="text-white/70 text-sm">{t.region}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Discover Something Extraordinary?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Join thousands of conscious shoppers supporting artisan communities
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/explore"
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition shadow-xl"
            >
              Start Exploring
            </Link>
            <Link
              to="/signup"
              className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/40 hover:bg-white/10 transition"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
