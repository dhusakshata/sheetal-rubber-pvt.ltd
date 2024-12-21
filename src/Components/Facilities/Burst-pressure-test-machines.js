import React, { useEffect, useRef } from "react";
import Burst from "../../Images/burst_pressure.png";
import './inhousefacility.css';

import AOS from "aos";
import "aos/dist/aos.css";

const Inhouse2 = () => {
  // Initialize AOS
    useEffect(() => {
      AOS.init({
        duration: 1000,  // Animation duration
        offset: 100,     // Trigger point from the top
        once: false,     // Animates every time you scroll
        mirror: true,    // Reverse animation when scrolling up
      });
      AOS.refresh(); // Refresh animations to sync with dynamic content
    }, []);
  return (
    <div className="inhouse-facility-container">
         <div className="inhouse-header"> <h1>Burst Pressure Test Machine </h1></div>
     <div className="inhouse-container">
     <div className="inhouse-image"style={{width:"450px",height:"450px"}}  
     data-aos="fade-right">
          <img src={Burst} alt="inhouse 1" />
        </div>
      <div className="inhouse-paragrph" data-aos="fade-left">
      <ul>
        <li>Our Burst Pressure Test Machine (Horizontal) with Hydraulic Testing Facility ensures that silicone and rubber hoses meet high-pressure performance requirements.</li>
        <li>This service verifies the strength, flexibility, and endurance of hoses under extreme hydraulic conditions.</li>
        <li>The horizontal configuration allows for efficient handling of long hoses during testing.</li>
        <li>The hydraulic system delivers precise and consistent pressure testing for accurate results.</li>
        <li>The test ensures that silicone and rubber hoses used in critical industries (automotive, medical, industrial) are durable, safe, and compliant with stringent quality standards.</li>
      </ul>
      </div>
     </div>
   
    </div>
  );
};

export default Inhouse2;
