import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Marketplace from "./pages/Marketplace";
import Continents from "./pages/Continents";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import India from "./pages/India";
import Japan from "./pages/Japan";
import China from "./pages/China";
import Thailand from "./pages/Thailand";
import SouthKorea from "./pages/SouthKorea";
import Indonesia from "./pages/Indonesia";
import Vietnam from "./pages/Vietnam";
import Nepal from "./pages/Nepal";
import Malaysia from "./pages/Malaysia";
import Philippines from "./pages/Philippines";
import SriLanka from "./pages/SriLanka";
import Bangladesh from "./pages/Bangladesh";
import Singapore from "./pages/Singapore";
import Bhutan from "./pages/Bhutan";
import Uzbekistan from "./pages/Uzbekistan";
import France from "./pages/France";
import Italy from "./pages/Italy";
import Germany from "./pages/Germany";
import Spain from "./pages/Spain";
import Greece from './pages/Greece';
import Netherlands from './pages/Netherlands';
import Portugal from './pages/Portugal';
import Switzerland from './pages/Switzerland';
import Austria from './pages/Austria';
import Norway from './pages/Norway';
import CzechRepublic from './pages/CzechRepublic';
import Poland from './pages/Poland';
import Hungary from './pages/Hungary';
import Sweden from './pages/Sweden';
import Croatia from './pages/Croatia';
import Finland from './pages/Finland';
import England from './pages/England';
import Australia from "./pages/Australia";
import NewZealand from "./pages/NewZealand";
import Fiji from "./pages/Fiji";
import Samoa from "./pages/Samoa";
import PapuaNewGuinea from './pages/PapuaNewGuinea';
import Tonga from "./pages/Tonga"; 
import Vanuatu from "./pages/Vanuatu"; 
import SolomonIslands from "./pages/SolomonIslands";
import Brazil from "./pages/Brazil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/country/:continent" element={<Country />} />
        <Route path="/countries/India" element={<India />} />
        <Route path="/countries/japan" element={<Japan />} />
        <Route path="/countries/China" element={<China />} />
        <Route path="/countries/Thailand" element={<Thailand />} />
        <Route path="/countries/south-korea" element={<SouthKorea />} />
        <Route path="/countries/Indonesia" element={<Indonesia />} />
        <Route path="/countries/Vietnam" element={<Vietnam />} />
        <Route path="/countries/Nepal" element={<Nepal />} />
        <Route path="/countries/Malaysia" element={<Malaysia />} />
        <Route path="/countries/Philippines" element={<Philippines />} />
        <Route path="/countries/Sri-Lanka" element={<SriLanka />} />
        <Route path="/countries/Bangladesh" element={<Bangladesh />} />
        <Route path="/countries/Singapore" element={<Singapore />} />
        <Route path="/countries/Bhutan" element={<Bhutan />} />
        <Route path="/countries/Uzbekistan" element={<Uzbekistan />} />
        <Route path="/countries/France" element={<France />} />
        <Route path="/countries/Italy" element={<Italy />} />
        <Route path="/countries/Germany" element={<Germany />} />
        <Route path="/countries/Spain" element={<Spain />} />
        <Route path="/countries/greece" element={<Greece />} />
        <Route path="/countries/netherlands" element={<Netherlands />} />
        <Route path="/countries/portugal" element={<Portugal />} />
        <Route path="/countries/switzerland" element={<Switzerland />} />
        <Route path="/countries/austria" element={<Austria />} />
        <Route path="/countries/norway" element={<Norway />} />
        <Route path="/countries/czech-republic" element={<CzechRepublic />} />
        <Route path="/countries/poland" element={<Poland />} />
        <Route path="/countries/hungary" element={<Hungary />} />
        <Route path="/countries/sweden" element={<Sweden />} />
        <Route path="/countries/croatia" element={<Croatia />} />
        <Route path="/countries/finland" element={<Finland />} />
        <Route path="/countries/england" element={<England />} />
        <Route path="/countries/australia" element={<Australia />} />
        <Route path="/countries/new-zealand" element={<NewZealand />} />
        <Route path="/countries/fiji" element={<Fiji />} />
        <Route path="/countries/samoa" element={<Samoa />} />
        <Route path="/countries/papua-new-guinea" element={<PapuaNewGuinea />} />
        <Route path="/countries/tonga" element={<Tonga />} />
        <Route path="/countries/vanuatu" element={<Vanuatu />} />
        <Route path="/countries/solomon-islands" element={<SolomonIslands />} />
        <Route path="/countries/brazil" element={<Brazil />} />

      </Routes>
    </Router>
  );
}

export default App;
