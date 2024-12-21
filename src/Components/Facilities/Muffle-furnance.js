

import React, { useEffect, useRef } from "react";
import muffle from "../../Images/muffle_furnace-removebg-preview.png";
import './inhousefacility.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Inhouse6 = () => {

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
         <div className="inhouse-header"> <h1>Muffle Furnace</h1></div>
     <div className="inhouse-container">
     <div className="inhouse-image" data-aos="fade-right">
          <img src={muffle} alt="inhouse 1"style={{width:"400px",height:"325px"}}  />
        </div>
      <div className="inhouse-paragrph" data-aos="fade-left">
     <ul>
      <li>
      A Muffle Furnace helps us for high-temperature testing, heating, and material treatment processes.
      </li>
      <li>The furnace provides a controlled, uniform heat environment, isolating materials from direct flame exposure for precise temperature application.</li>
      <li>It is essential for applications like ash content analysis, material decomposition, and heat treatment.</li>
      <li>The furnace allows us to evaluate the thermal resistance, durability, and purity of materials.</li>
      <li>This ensures that our rubber and silicone hoses meet the stringent quality standards required for industries such as automotive, aerospace, and industrial applications.</li>
     </ul>
      </div>
     </div>
   
    </div>
  );
};

export default Inhouse6;
