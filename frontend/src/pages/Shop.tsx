import React from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { ShoppingBag, Star, Plus } from "lucide-react";

const MOCK_ITEMS = [
  { id: "1", name: "Premium Matcha Powder", price: 35.0, category: "Japan", image: "/assets/matcha_powder.png" },
  { id: "2", name: "Authentic French Wine", price: 85.0, category: "France", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=600&auto=format&fit=crop" },
  { id: "3", name: "Handwoven Silk Scarf", price: 120.0, category: "India", image: "/assets/silk_scarf.png" },
  { id: "4", name: "Artisanal Olive Oil", price: 28.0, category: "Italy", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format&fit=crop" },
  { id: "5", name: "Manuka Honey", price: 45.0, category: "New Zealand", image: "/assets/manuka_honey.png" },
  { id: "6", name: "Kopi Luwak Coffee", price: 95.0, category: "Indonesia", image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=600&auto=format&fit=crop" },
  { id: "7", name: "Handcrafted Leather Bag", price: 250.0, category: "Italy", image: "/assets/leather_bag.png" },
  { id: "8", name: "Swiss Artisan Chocolate", price: 40.0, category: "Switzerland", image: "/assets/swiss_chocolate.png" },
  { id: "9", name: "Scottish Cashmere Sweater", price: 180.0, category: "Scotland", image: "/assets/cashmere_sweater.png" },
  { id: "10", name: "Authentic Indian Spices", price: 25.0, category: "India", image: "/assets/indian_spices.png" },
  { id: "11", name: "Moroccan Mint Tea", price: 18.0, category: "Morocco", image: "/assets/mint_tea.png" },
  { id: "12", name: "Mexican Vanilla Extract", price: 32.0, category: "Mexico", image: "/assets/vanilla_extract.png" },
];

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full flex-grow">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <ShoppingBag className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Global Marketplace</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curated Local Goods
          </h1>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Discover and purchase premium authentic items sourced directly from our global travel destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.name}</h3>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-slate-500 ml-1">(4.9)</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-2xl font-extrabold text-slate-900">${item.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
