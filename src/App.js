// 

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import ScrollToTop from "./Components/Scrolltotop.js";
import "./App.css";

import Header from "./Components/Header/header.js";
import Footer from "./Components/Footer/footer.js";
import AboutUs from "./Components/About/about.js";
//  import HamburgerMenu from "./Components/Hamburge/hambarge.js";

import Home from "./Components/Home/Home.js";
import Product from "./Components/Products/product.js";
import Career from "./Components/careers/career.js";
import Contact from "./Components/contact/contact.js";

import ManufacturingFacilities from "./Components/Facilities/manufacturing.js";
import Inhousefacilities from "./Components/Facilities/inhouse.js";




import SiliconPolyester from "./Components/Products/siliconpolyester.js";
import Turbocharger from "./Components/Products/turbochargerhose.js";
import Marine from "./Components/Products/marinewethose.js";
import EPDM from "./Components/Products/epdm.js";
import Organic from "./Components/Products/organic.js"
import Assembly from "./Components/Products/Assembly.js";
import Wired from "./Components/Products/wired.js";
import Fuletube from "./Components/Products/Fueltube.js";
import Moulded from "./Components/Products/moulded.js";


import ArrowToggle from "./Components/Arrowtoggle/arrowtoggle.js";
// import Contact from "./Components/Contact-us/contact.js";


//Facility pages
import Facility1 from "./Components/Facilities/hot-cold-feed.js";
// import Facility2 from "./Components/Facilities/Dual-head-extruders.js";
import Facility3 from "./Components/Facilities/Auto-clave-vulcanizer.js";
import Facility4 from "./Components/Facilities/Dispersion-kneader.js";
import Facility5 from "./Components/Facilities/3-role-calendaring-machine.js";
import Facility6 from "./Components/Facilities/Compression-transfer-molding.js";
// import Facility7 from "./Components/Facilities/facility7.js";
import Facility8 from "./Components/Facilities/Rubber-mixing-mill.js";
import Facility9 from "./Components/Facilities/Knitting-machine.js";
import Facility10 from "./Components/Facilities/Braiding-Machines.js";
import Facility11 from "./Components/Facilities/Conventional-machines.js";

//Inhouse Facility
import Inhouse1 from "./Components/Facilities/Moving-Die-Rheometer.js";
import Inhouse2 from "./Components/Facilities/Burst-pressure-test-machines.js";
import Inhouse3 from "./Components/Facilities/Ozone-test-chamber.js";
import Inhouse4 from "./Components/Facilities/UTM-tensil.js";
import Inhouse5 from "./Components/Facilities/Heating-oven.js";
import Inhouse6 from "./Components/Facilities/Muffle-furnance.js";

const App = () => {
  return (
    <Router>
        <ScrollToTop /> {/* Ensure it's placed above your routes */}
        
      <Header /> 
      {/* <HamburgerMenu/> */}
     
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      
        <Route path="/product" element={<Product />} />
        <Route path="/manufacturing" element={<ManufacturingFacilities/>} />
        <Route path="/inhouse" element={<Inhousefacilities/>} />

        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/siliconpolyester" element={<SiliconPolyester />} />
        <Route path="/turbochargerhose" element={<Turbocharger />} />
        <Route path="/marinewethose" element={<Marine />} />
        <Route path="/epdm" element={<EPDM />} />
        <Route path="/organic" element={<Organic/>} />
        <Route path="/Assembly" element={<Assembly />} />
        <Route path="/wired" element={<Wired />} />
        <Route path="/Fueltube" element={<Fuletube />} />
        <Route path="/moulded" element={<Moulded />} />
     
        
 {/* Facility Pages */}
 <Route path="/hot-cold-feed" element={<Facility1 />} />
        {/* <Route path="/Dual-head-extruders" element={<Facility2 />} /> */}
        <Route path="/Auto-clave-vulcanizer" element={<Facility3 />} />
        <Route path="/Dispersion-kneader" element={<Facility4 />} />
        <Route path="/3-role-calendaring-machine" element={<Facility5 />} />
        <Route path="/Compression-transfer-molding" element={<Facility6 />} />
        {/* <Route path="/facility7" element={<Facility7 />} /> */}
        <Route path="/Rubber-mixing-mill" element={<Facility8 />} />
        <Route path="/Knitting-machine" element={<Facility9 />} />
        <Route path="/Braiding-Machines" element={<Facility10 />} />
        <Route path="/Conventional-machines" element={<Facility11 />} />

        <Route path="/Moving-Die-Rheometer" element={<Inhouse1 />} />
        <Route path="/Burst-pressure-test-machines" element={<Inhouse2 />} />
        <Route path="/Ozone-test-chamber" element={<Inhouse3 />} />
        <Route path="/UTM-tensil" element={<Inhouse4 />} />
        <Route path="/Heating-oven" element={<Inhouse5 />} />
        <Route path="/Muffle-furnance" element={<Inhouse6 />} />
        
      </Routes>
      <Footer/>

      <ArrowToggle />
    </Router>

    
   
  );
};

export default App;
