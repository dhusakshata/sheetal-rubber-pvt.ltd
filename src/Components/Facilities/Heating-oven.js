

import React, { useEffect, useRef } from "react";
import Heatingoven from "../../Images/heating oven.png";
import './inhousefacility.css';
import AOS from "aos";
import "aos/dist/aos.css";
const Inhouse5 = () => {
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
    <div className="inhouse-facility-container" style={{gap:"0px"}}>
         <div className="inhouse-header"> <h1>Heating Ovens</h1></div>
     <div className="inhouse-container"style={{gap:"10px"}}>
     <div className="inhouse-image" data-aos="fade-right">
          <img src={Heatingoven} alt="inhouse 1"style={{width:"450px",height:"350px"}} />
        </div>
      <div className="inhouse-paragrph" data-aos="fade-left">
     <ul>
      <li>Those Heating Ovens are essential for curing, drying, and preheating for our rubber and silicone hoses during production process.</li>
      <li>This procedure ensures precise temperature control, enhancing the strength, flexibility, and durability to our hoses.</li>
      <li>The controlled heating environment provides uniform heat distribution, ensuring consistent quality to all hoses.</li>
      <li>This process guarantees that silicone and rubber hoses meet the required standards for industrial, automotive, and specialized uses.</li>
      
     </ul>
      </div>
     </div>
     
    </div>
  );
};

export default Inhouse5;
