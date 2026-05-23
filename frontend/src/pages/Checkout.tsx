import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Loader2 } from "lucide-react";

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems, total: cartTotal * 1.08 }),
      });

      if (!response.ok) throw new Error("Checkout failed");

      const data = await response.json();
      if (data.status === "success") {
        setSuccess(true);
        clearCart();
      }
    } catch (err: any) {
      setError("An error occurred during checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center px-6">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-12 max-w-lg w-full text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Payment Successful!</h1>
            <p className="text-slate-600 mb-8 text-lg">
              Your premium local goods are being prepared. You will receive an email confirmation shortly.
            </p>
            <Link to="/shop" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-colors inline-block w-full">
              Continue Exploring
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto w-full flex-grow">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8 text-center">
          Secure Checkout
        </h1>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
          {error && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl">{error}</div>}

          <form onSubmit={handleCheckout} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Credit Card Number</label>
              <input type="text" required placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-4 rounded-xl">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>Payments are simulated securely. No actual funds will be deducted.</span>
            </div>

            <button 
              type="submit" 
              disabled={loading || cartItems.length === 0}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : `Pay $${(cartTotal * 1.08).toFixed(2)}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
