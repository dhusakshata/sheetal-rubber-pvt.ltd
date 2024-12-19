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
import Facility1 from "./Components/Facilities/facility1.js";
import Facility2 from "./Components/Facilities/facility2.js";
import Facility3 from "./Components/Facilities/facility3.js";
import Facility4 from "./Components/Facilities/facility4.js";
import Facility5 from "./Components/Facilities/facility5.js";
import Facility6 from "./Components/Facilities/facility6.js";
// import Facility7 from "./Components/Facilities/facility7.js";
import Facility8 from "./Components/Facilities/facility8.js";
import Facility9 from "./Components/Facilities/facility9.js";
import Facility10 from "./Components/Facilities/facility10.js";
import Facility11 from "./Components/Facilities/facility11.js";

//Inhouse Facility
import Inhouse1 from "./Components/Facilities/inhouse1.js";
import Inhouse2 from "./Components/Facilities/inhouse2.js";
import Inhouse3 from "./Components/Facilities/inhouse3.js";
import Inhouse4 from "./Components/Facilities/inhouse4.js";
import Inhouse5 from "./Components/Facilities/inhouse5.js";
import Inhouse6 from "./Components/Facilities/inhouse6.js";

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
 <Route path="/facility1" element={<Facility1 />} />
        <Route path="/facility2" element={<Facility2 />} />
        <Route path="/facility3" element={<Facility3 />} />
        <Route path="/facility4" element={<Facility4 />} />
        <Route path="/facility5" element={<Facility5 />} />
        <Route path="/facility6" element={<Facility6 />} />
        {/* <Route path="/facility7" element={<Facility7 />} /> */}
        <Route path="/facility8" element={<Facility8 />} />
        <Route path="/facility9" element={<Facility9 />} />
        <Route path="/facility10" element={<Facility10 />} />
        <Route path="/facility11" element={<Facility11 />} />

        <Route path="/inhouse1" element={<Inhouse1 />} />
        <Route path="/inhouse2" element={<Inhouse2 />} />
        <Route path="/inhouse3" element={<Inhouse3 />} />
        <Route path="/inhouse4" element={<Inhouse4 />} />
        <Route path="/inhouse5" element={<Inhouse5 />} />
        <Route path="/inhouse6" element={<Inhouse6 />} />
        
      </Routes>
      <Footer/>

      <ArrowToggle />
    </Router>

    
   
  );
};

export default App;
