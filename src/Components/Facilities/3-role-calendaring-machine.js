import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';
import Role from "../../Images/3 role.jpeg";

const Facility5 = () => {
    // Scroll-trigger animation logic
    useEffect(() => {
      const elements = document.querySelectorAll('.facility-content, .facility-header, .facility-paragraph');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible-black');
            } else {
              entry.target.classList.remove('visible-black');
            }
          });
        },
        { threshold: 0.2 } // Trigger animation when 10% of the element is visible
      );
  
      elements.forEach((element) => observer.observe(element));
  
      return () => observer.disconnect(); // Cleanup observer on component unmount
    }, []);
    
  return (
    <div className="facility-container">
      <div className="facility-header">
        <h1>3 Role Calendaring Machine</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        Our production line is equipped with 3-Roll Calendaring Machines that play a vital role in shaping and smoothing rubber sheets. These advanced machines utilize three precisely aligned rollers to compress and control the thickness of rubber compounds, ensuring uniformity and consistency across each sheet. This calendaring process is essential for producing high-quality rubber sheets used in various applications, including conveyor belts, seals, and gaskets. By maintaining stringent quality control, our calendaring machines enhance the performance and durability of our finished products while maximizing production efficiency.
        </p>
        <div className="facility-image">
          <img src={Role}alt="Facility 1" />
        </div>
      </div>

      <div className="facility-content5">
      <h2>3-Roll Calendaring Machine Overview:</h2>
<p><b>Purpose: </b>
Shapes and finishes rubber sheets with precise thickness and uniformity.
</p>
<h4>Operation:
  
</h4>
        <ul>
          <li>
            <b>Roller System:</b>Three horizontally aligned rollers compress and stretch rubber compounds into flat sheets.
          </li>
          <li>
            <b>Uniformity:</b>Ensures even distribution and desired properties.
          </li>
        </ul>
         <h4>Advantages:</h4>
        <ul>
          <li><b>Uniform Thickness: </b>Guarantees consistent sheet thickness for quality products.</li>
          <li><b>Smooth Surface Finish:</b>Enhances both the look and functionality of rubber products.</li>
          <li><b>Versatility: </b>Suitable for various rubber compounds.</li>
          <li><b>High Efficiency: </b>Continuous operation for large-scale production.</li>
        </ul>
       
        <h4>Benefits:</h4>
        <ul>
          <li><b>Enhanced Quality: </b> Consistent thickness improves product performance.
          </li>
          <li><b>Cost-Effective:</b>High efficiency reduces costs.</li>
          <li><b>Production Flexibility:  </b> Quick adjustments for varied requirements.</li>
          
        </ul>
       
      </div>
    </div>
  );
};

export default Facility5;
