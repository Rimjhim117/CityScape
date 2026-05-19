import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Profile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Get user email from localStorage
    const savedEmail = localStorage.getItem("userEmail");
    if (!savedEmail) {
      // If not logged in, force them to login page
      navigate("/login");
    } else {
      setEmail(savedEmail);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center relative overflow-hidden px-4 py-24">
        {/* Background Decorative Blobs */}
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <div className="w-full max-w-xl bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/50 relative z-10 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            {email ? email.charAt(0).toUpperCase() : "👤"}
          </div>
          
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Welcome Back!
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            {email}
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Account Details</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Status</span>
                <span className="font-semibold text-green-600">Active</span>
              </li>
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Membership</span>
                <span className="font-semibold text-slate-800">Explorer</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => navigate("/explore")}
            className="w-full py-4 mt-8 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}
