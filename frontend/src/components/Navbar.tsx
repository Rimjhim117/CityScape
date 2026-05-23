import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const { cartCount } = useCart();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/explore", label: "Explore" },
    { to: "/shop", label: "Shop" },
    { to: "/itinerary", label: "AI Itinerary" },
    { to: "/tools", label: "Travel Tools" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🌍</span>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors duration-200">
            LocalGoods
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(link.to)
                  ? "text-purple-700 bg-purple-50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="w-px h-6 bg-slate-200 mx-3"></div>

          <Link to="/cart" className="relative p-2 text-slate-600 hover:text-purple-600 transition-colors duration-200 mr-2">
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="w-px h-6 bg-slate-200 mx-3 mr-4"></div>

          {localStorage.getItem("userEmail") ? (
            <>
              <Link to="/profile">
                <button className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200">
                  Profile
                </button>
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("userEmail");
                  window.location.href = "/";
                }}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition ${
                isActive(link.to)
                  ? "text-purple-700 bg-purple-50"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex gap-3">
            <Link to="/login" className="flex-1" onClick={() => setMobileOpen(false)}>
              <button className="w-full py-3 text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition">
                Log in
              </button>
            </Link>
            <Link to="/signup" className="flex-1" onClick={() => setMobileOpen(false)}>
              <button className="w-full py-3 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
