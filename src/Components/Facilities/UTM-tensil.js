

import React, { useEffect, useRef } from "react";
import utm from "../../Images/utm.png";
import './inhousefacility.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Inhouse4 = () => {
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
         <div className="inhouse-header"> <h1>UTM -Tensile machine load 200kg to 5000kg</h1></div>
     <div className="inhouse-container">
     <div className="inhouse-image" data-aos="fade-right" >
          <img src={utm} alt="inhouse 1"style={{width:"400px",height:"350px"}}  />
        </div>
      <div className="inhouse-paragrph" data-aos="fade-left">
      <ul>
        <li>This machine performs a range of tests, including tensile, compressive, and flexural evaluations, providing critical data on material behavior under stress.</li>
        <li>Equipped with advanced load cells, the UTM-1 ensure us for high accuracy in measuring forces, and its digital display offers real-time monitoring of load and elongation during testing.</li>
        <li>The machine generates stress-strain curves that illustrate how materials deform under different loads, revealing important characteristics like yield strength, ultimate tensile strength, elongation at break, and modulus of elasticity.</li>
        <li>This data is very essential for us to quality control, material selection, and failure analysis.</li>
        <li>A user-friendly interface, customizable testing protocols, and complies with international testing standards, giving us valuable data for research and quality assurance.</li>
        <li>
        It plays a key role in optimizing material performance and durability in applications ranging from construction to manufacturing and product development.
        </li>
        <li>
        The UTM-1 has a load capacity ranging from 200 kg to 5000 kg.
        </li>
      </ul>
      </div>
     </div>
    
    </div>
  );
};

export default Inhouse4;
