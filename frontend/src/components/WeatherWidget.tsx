import React, { useState, useEffect } from "react";
import { CloudRain, Sun, Cloud, Loader2 } from "lucide-react";

interface WeatherWidgetProps {
  location: string;
}

export default function WeatherWidget({ location }: WeatherWidgetProps) {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError("");
      try {
        // 1. Get Coordinates using Open-Meteo Geocoding API
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          throw new Error("Location not found");
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // 2. Fetch Weather Data using coordinates
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`);
        const weatherJson = await weatherRes.json();

        setWeatherData({
          name: `${name}, ${country}`,
          currentTemp: weatherJson.current.temperature_2m,
          weatherCode: weatherJson.current.weather_code,
          daily: weatherJson.daily
        });
      } catch (err: any) {
        setError("Could not load weather for this location.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  // Open-Meteo WMO Weather interpretation codes
  const getWeatherIcon = (code: number, className: string = "w-8 h-8") => {
    if (code <= 3) return <Sun className={`${className} text-yellow-500`} />;
    if (code >= 45 && code <= 48) return <Cloud className={`${className} text-slate-400`} />;
    if (code >= 51) return <CloudRain className={`${className} text-blue-500`} />;
    return <Sun className={`${className} text-yellow-500`} />; // default
  };

  const getWeatherDescription = (code: number) => {
    if (code === 0) return "Clear sky";
    if (code === 1 || code === 2 || code === 3) return "Partly cloudy";
    if (code >= 45 && code <= 48) return "Foggy";
    if (code >= 51 && code <= 67) return "Rain";
    if (code >= 71 && code <= 77) return "Snow";
    if (code >= 95) return "Thunderstorm";
    return "Unknown";
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-center justify-center h-48">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (error || !weatherData) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-center justify-center h-48 text-slate-500 text-sm">
        {error || "Weather data unavailable"}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-lg p-6 text-white">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1">{weatherData.name}</h3>
          <p className="text-blue-100 text-sm">{getWeatherDescription(weatherData.weatherCode)}</p>
        </div>
        {getWeatherIcon(weatherData.weatherCode, "w-10 h-10")}
      </div>

      <div className="text-5xl font-extrabold mb-8">
        {weatherData.currentTemp}°C
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-white/20 pt-4">
        {weatherData.daily.time.slice(1, 4).map((date: string, index: number) => (
          <div key={date} className="text-center">
            <p className="text-xs text-blue-200 mb-2">
              {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <div className="flex justify-center mb-1">
              {getWeatherIcon(weatherData.daily.weather_code[index + 1], "w-5 h-5")}
            </div>
            <p className="text-sm font-semibold">
              {Math.round(weatherData.daily.temperature_2m_max[index + 1])}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
