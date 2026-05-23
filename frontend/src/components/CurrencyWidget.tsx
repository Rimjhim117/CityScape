import React, { useState, useEffect } from "react";
import { DollarSign, ArrowRightLeft, Loader2 } from "lucide-react";

export default function CurrencyWidget() {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR"];

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();
        
        if (data.result === "success") {
          setRates(data.rates);
        } else {
          throw new Error("Failed to fetch rates");
        }
      } catch (err) {
        setError("Currency rates unavailable.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const convertCurrency = () => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return 0;
    
    // Convert to USD first (base), then to target
    const amountInUSD = amount / rates[fromCurrency];
    const convertedAmount = amountInUSD * rates[toCurrency];
    return convertedAmount.toFixed(2);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 flex items-center justify-center h-48">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 flex items-center justify-center h-48 text-slate-500 text-sm">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
          <DollarSign className="w-4 h-4" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Currency Converter</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">Amount</label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none font-semibold text-slate-900"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1">
            <select 
              value={fromCurrency} 
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold text-slate-700"
            >
              {currencies.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          
          <ArrowRightLeft className="w-5 h-5 text-slate-400 flex-shrink-0" />
          
          <div className="flex-1">
            <select 
              value={toCurrency} 
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold text-slate-700"
            >
              {currencies.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-100">
          <div className="text-xs text-slate-500 mb-1">Converted Amount</div>
          <div className="text-3xl font-extrabold text-slate-900">
            {convertCurrency()} <span className="text-lg text-slate-400 font-medium">{toCurrency}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
