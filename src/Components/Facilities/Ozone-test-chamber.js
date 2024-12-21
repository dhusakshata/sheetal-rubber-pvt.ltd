import React, { useEffect, useRef } from "react";
import OzenTest from "../../Images/ozone_test_chamber-removebg-preview.png";
import './inhousefacility.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Inhouse3 = () => {
  
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
         <div className="inhouse-header"> <h1>Ozone Test Chamber</h1></div>
     <div className="inhouse-container">
     <div className="inhouse-image"data-aos="fade-right" >
          <img src={OzenTest} alt="inhouse 1"style={{width:"400px",height:"350px"}} />
        </div>
      <div className="inhouse-paragrph" data-aos="fade-left">
     <ul>
      <li>We have Ozone Test Chamber that is a specialized facility designed to evaluate the ozone resistance of rubber and silicone products.</li>
      <li>The chamber simulates high-ozone environments to test the durability of hoses, seals, gaskets, and other components exposed to ozone.</li>
      <li>This machine helps us to identify cracks, brittleness, or other forms of degradation in our rubber and silicone products.</li>
      <li>This service ensures that our rubber and silicone hoses meet industry standards for longevity and performance.</li>
      <li>It is particularly essential for applications in automotive, industrial, and outdoor environments where exposure to ozone is common.</li>
     </ul>
      </div>
     </div>
   
    </div>
  );
};

export default Inhouse3;
