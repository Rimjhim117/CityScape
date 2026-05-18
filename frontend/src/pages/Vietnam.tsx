import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Vietnam = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-100 to-green-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="/assets/Vietnam.jpg"
          alt="Vietnam"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Timeless Charm of Vietnam</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Vietnam</h2>
        <p className="text-lg mb-6">
          Vietnam is a vibrant Southeast Asian country known for its dramatic landscapes, rich
          history, and flavorful cuisine. From misty mountains in the north to the bustling delta in
          the south, Vietnam enchants travelers with every step.
        </p>

        {/* Top Cities */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Top Cities to Visit</h3>
        <ul className="space-y-2 mb-6">
          <li>
            <Link to="/cities/hanoi" className="text-blue-600 hover:underline">
              Hanoi – The historic capital with lakes, temples, and street food
            </Link>
          </li>
          <li>
            <Link to="/cities/ho-chi-minh" className="text-blue-600 hover:underline">
              Ho Chi Minh City – Modern energy, French architecture, and war museums
            </Link>
          </li>
          <li>
            <Link to="/cities/da-nang" className="text-blue-600 hover:underline">
              Da Nang – Coastal charm with golden beaches and Marble Mountains
            </Link>
          </li>
          <li>
            <Link to="/cities/hoi-an" className="text-blue-600 hover:underline">
              Hoi An – Ancient town with lantern-lit streets and tailor shops
            </Link>
          </li>
          <li>
            <Link to="/cities/hue" className="text-blue-600 hover:underline">
              Hue – Former imperial capital with royal citadel and tombs
            </Link>
          </li>
        </ul>

        {/* Attractions */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Attractions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Ha Long Bay – Emerald waters and limestone islands</li>
          <li>Cu Chi Tunnels – Underground maze from the Vietnam War</li>
          <li>Phong Nha Caves – Stunning cave systems and national parks</li>
          <li>My Son Ruins – Ancient Hindu temple remains</li>
          <li>Ben Thanh Market – Bustling hub of food and crafts</li>
        </ul>

        {/* Local Goods */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Local Goods & Markets</h3>
        <p className="text-lg mb-6">
          Discover silk lanterns, conical hats (nón lá), lacquerware, and aromatic Vietnamese
          coffee. Visit Hoi An Market or Dong Xuan Market in Hanoi for authentic finds.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate('/country/asia')}
          className="bg-gradient-to-r from-green-400 to-red-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition"
        >
          ← Back to Countries
        </button>
      </section>
    </div>
  );
};

export default Vietnam;
