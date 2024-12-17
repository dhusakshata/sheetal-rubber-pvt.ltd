import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';
import Role from "../../Images/3 Role Calendaring Machine.webp";

const Facility5 = () => {
  return (
    <div className="facility-container5">
      <div className="facility-header5">
        <h1>3 Role Calendaring Machine</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph5">
        <p>
        Our production line is equipped with 3-Roll Calendaring Machines that play a vital role in shaping and smoothing rubber sheets. These advanced machines utilize three precisely aligned rollers to compress and control the thickness of rubber compounds, ensuring uniformity and consistency across each sheet. This calendaring process is essential for producing high-quality rubber sheets used in various applications, including conveyor belts, seals, and gaskets. By maintaining stringent quality control, our calendaring machines enhance the performance and durability of our finished products while maximizing production efficiency.
        </p>
        <div className="facility-image5">
          <img src={Role}alt="Facility 1" />
        </div>
      </div>

      <div className="facility-content5">
      <h3>3-Roll Calendaring Machine Overview:</h3>
<p><b>Purpose: </b>
Shapes and finishes rubber sheets with precise thickness and uniformity.
</p>
<h2>Operation:</h2>
        <ul>
          <li>
            <b>Roller System:</b>Three horizontally aligned rollers compress and stretch rubber compounds into flat sheets.
          </li>
          <li>
            <b>Uniformity</b>Ensures even distribution and desired properties.
          </li>
        </ul>
         <h2>Advantages:</h2>
        <ul>
          <li><b>Uniform Thickness: </b>Guarantees consistent sheet thickness for quality products.</li>
          <li><b>Smooth Surface Finish:</b>Enhances both the look and functionality of rubber products.</li>
          <li><b>Versatility: </b>Suitable for various rubber compounds.</li>
          <li><b>High Efficiency: </b>Continuous operation for large-scale production.</li>
        </ul>
        <h2>Applications:</h2>
        <ul>
          <li><b>Rubber Sheets:  </b> Flooring, mats, and insulation.
          </li>
          <li><b>Tire Manufacturing: </b> Tread and sidewall materials.</li>
          <li><b>Industrial Belts: </b>Rubber sheets for manufacturing belts.</li>
          <li><b>Gaskets and Seals:  </b>Ensures thickness for effective sealing.</li>
        </ul>
        
        <h2>Production Process:</h2>
        <ul>
          <li><b>Material Feeding: </b> Rubber compounds are fed into the machine.
          </li>
          <li><b>Rolling Process:</b>Rubber is compressed to desired thickness and texture.</li>
          <li><b>Cooling & Finishing: </b>Sheets are cooled and stabilized for further use.</li>
          
        </ul>
            
        <h2>Benefits:</h2>
        <ul>
          <li><b>Enhanced Quality: </b> Consistent thickness improves product performance.
          </li>
          <li><b>Cost-Effective:</b>High efficiency reduces costs.</li>
          <li><b>Production Flexibility:  </b> Quick adjustments for varied requirements.</li>
          
        </ul>
        <h2>Example Products:
        </h2>
        <ul>
          <li><b>Automotive: </b> Tires, gaskets, and weather stripping.

          </li>
          <li><b>Industrial: </b>Conveyor belts, rubber goods.</li>
          <li><b>Consumer Goods:  </b> Rubber flooring and mats.</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Facility5;
