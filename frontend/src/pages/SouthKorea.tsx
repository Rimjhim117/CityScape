import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SouthKorea = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/South-Korea.jpg"
          alt="South Korea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Soul of South Korea
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About South Korea</h2>
        <p className="text-lg mb-6">
          South Korea is a dynamic blend of ancient heritage and modern innovation. From the
          high-tech streets of Seoul to serene temples and scenic mountains, the country offers a
          unique mix of tradition and trendsetting culture.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/seoul" className="text-blue-600 hover:underline">
              Seoul – Vibrant capital filled with palaces, K-pop, and street food
            </Link>
          </li>
          <li>
            <Link to="/cities/busan" className="text-blue-600 hover:underline">
              Busan – Coastal city known for beaches and seafood
            </Link>
          </li>
          <li>
            <Link to="/cities/jeju" className="text-blue-600 hover:underline">
              Jeju Island – Volcanic island with nature and waterfalls
            </Link>
          </li>
          <li>
            <Link to="/cities/daegu" className="text-blue-600 hover:underline">
              Daegu – City of fashion and traditional medicine
            </Link>
          </li>
          <li>
            <Link to="/cities/gyeongju" className="text-blue-600 hover:underline">
              Gyeongju – Open-air museum of historical sites
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Gyeongbokgung Palace – Royal palace in the heart of Seoul</li>
          <li>N Seoul Tower – Panoramic city views from the top</li>
          <li>Hanok Villages – Traditional Korean houses in Bukchon</li>
          <li>Jeju’s Hallasan – South Korea’s highest mountain</li>
          <li>DMZ – A glimpse into the border between North and South Korea</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Discover Korean skincare products, hanbok (traditional clothing), K-pop merchandise, and
          handmade crafts. Visit places like Namdaemun Market and Myeongdong Street for an authentic
          local shopping experience.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate('/country/asia')}
          className="bg-gradient-to-r from-indigo-500 to-pink-400 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default SouthKorea;
