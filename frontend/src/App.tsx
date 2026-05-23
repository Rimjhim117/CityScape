import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import TravelTools from "./pages/TravelTools";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Marketplace from "./pages/Marketplace";
import Continents from "./pages/Continents";
import Contact from "./pages/Contact";
import Itinerary from "./pages/Itinerary";
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
import Kenya from "./pages/Kenya";
import Nigeria from "./pages/Nigeria";
import SouthAfrica from "./pages/SouthAfrica";
import Egypt from "./pages/Egypt";
import Morocco from "./pages/Morocco";
import Ghana from "./pages/Ghana";
import Ethiopia from "./pages/Ethiopia";
import Tanzania from "./pages/Tanzania";
import Senegal from "./pages/Senegal";
import Algeria from "./pages/Algeria";
import Uganda from "./pages/Uganda";
import Namibia from "./pages/Namibia";
import UnitedStates from "./pages/UnitedStates";
import Canada from "./pages/Canada";
import Mexico from "./pages/Mexico";
import Cuba from "./pages/Cuba";
import Jamaica from "./pages/Jamaica";
import CostaRica from "./pages/CostaRica";
import Panama from "./pages/Panama";
import Bahamas from "./pages/Bahamas";
import Honduras from "./pages/Honduras";
import DominicanRepublic from "./pages/DominicanRepublic";
import Argentina from "./pages/Argentina";
import Chile from "./pages/Chile";
import Colombia from "./pages/Colombia";
import Peru from "./pages/Peru";
import Uruguay from "./pages/Uruguay";
import Paraguay from "./pages/Paraguay";
import Ecuador from "./pages/Ecuador";
import Bolivia from "./pages/Bolivia";
import Venezuela from "./pages/Venezuela";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/tools" element={<TravelTools />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/country/:continent" element={<Country />} />
        <Route path="/profile" element={<Profile />} />
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
        <Route path="/countries/Kenya" element={<Kenya />} />
        <Route path="/countries/Nigeria" element={<Nigeria />} />
        <Route path="/countries/South%20Africa" element={<SouthAfrica />} />
        <Route path="/countries/South-Africa" element={<SouthAfrica />} />
        <Route path="/countries/Egypt" element={<Egypt />} />
        <Route path="/countries/Morocco" element={<Morocco />} />
        <Route path="/countries/Ghana" element={<Ghana />} />
        <Route path="/countries/Ethiopia" element={<Ethiopia />} />
        <Route path="/countries/Tanzania" element={<Tanzania />} />
        <Route path="/countries/Senegal" element={<Senegal />} />
        <Route path="/countries/Algeria" element={<Algeria />} />
        <Route path="/countries/Uganda" element={<Uganda />} />
        <Route path="/countries/Namibia" element={<Namibia />} />
        <Route path="/countries/United%20States" element={<UnitedStates />} />
        <Route path="/countries/United-States" element={<UnitedStates />} />
        <Route path="/countries/Canada" element={<Canada />} />
        <Route path="/countries/Mexico" element={<Mexico />} />
        <Route path="/countries/Cuba" element={<Cuba />} />
        <Route path="/countries/Jamaica" element={<Jamaica />} />
        <Route path="/countries/Costa%20Rica" element={<CostaRica />} />
        <Route path="/countries/Costa-Rica" element={<CostaRica />} />
        <Route path="/countries/Panama" element={<Panama />} />
        <Route path="/countries/Bahamas" element={<Bahamas />} />
        <Route path="/countries/The%20Bahamas" element={<Bahamas />} />
        <Route path="/countries/The-Bahamas" element={<Bahamas />} />
        <Route path="/countries/Honduras" element={<Honduras />} />
        <Route path="/countries/Dominican%20Republic" element={<DominicanRepublic />} />
        <Route path="/countries/Dominican-Republic" element={<DominicanRepublic />} />
        <Route path="/countries/Argentina" element={<Argentina />} />
        <Route path="/countries/Chile" element={<Chile />} />
        <Route path="/countries/Colombia" element={<Colombia />} />
        <Route path="/countries/Peru" element={<Peru />} />
        <Route path="/countries/Uruguay" element={<Uruguay />} />
        <Route path="/countries/Paraguay" element={<Paraguay />} />
        <Route path="/countries/Ecuador" element={<Ecuador />} />
        <Route path="/countries/Bolivia" element={<Bolivia />} />
        <Route path="/countries/Venezuela" element={<Venezuela />} />

      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
