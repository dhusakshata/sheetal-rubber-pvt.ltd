import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';
import Knitting from "../../Images/Knitting-Machines.webp";

const Facility9 = () => {
  return (
    <div className="facility-container9">
      <div className="facility-header9">
        <h1>Knitting Machines</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph9">
        <p>
        Our production line includes advanced Knitting Machines that play a crucial role in the production of knitted rubber components. These machines utilize precise knitting techniques to create strong and flexible rubber fabrics, ensuring consistent quality and durability. The ability to knit various patterns and thicknesses allows for customization based on specific product requirements. By streamlining the knitting process, our machines enhance production efficiency while maintaining high standards in the final rubber products, meeting the diverse needs of our customers.
        </p>
        <div className="facility-image9">
          <img src={Knitting} alt="Facility 1" />
        </div>
      </div>

      <div className="facility-content9">
      <h2>Knitting Machines Overview</h2>
<p><b>Purpose: </b>
Produce knitted rubber fabrics for automotive, industrial, and consumer products.
</p>
<p><b>Operation:</b>
<ul>
  <li>
  nterlocks loops of rubber yarn/threads to create flexible, durable fabrics.
  </li>
  <li>Techniques: Flat and circular knitting.</li>
</ul>
</p>

         <h4>Advantages:</h4>
        <ul>
        <li><b>Customization: </b> Diverse patterns, thicknesses, and densities.</li>
          <li><b>Flexibility:  </b> Excellent stretch and recovery.</li>
          <li><b>Strength:</b>Superior tensile strength.</li>
         
          <li><b>Efficiency:</b> High-speed operation for faster production.
          </li>
        </ul>

        <h4>Applications:</h4>
        <ul>
          <li><b>Automotive</b>  Rubber mats, seals, upholstery fabrics.
          </li>
          <li><b>Industrial</b>  Conveyor belts, protective covers, hoses.</li>
          <li><b>Consumer Goods:  </b>Sportswear, footwear, protective gear.</li>
        <li>
          <b>Medical:</b>
          Elastic bandages and supports.
        </li>
        </ul>
        
        <h4>Production Process:</h4>
        <ul>
          <li>Material preparation.
          </li>
          <li>Material feeding.</li>
          <li>Knitting process.</li>
          <li>Fabric finishing.</li>
          
        </ul>
            
        <h4>Benefits:</h4>
        <ul>
          <li><b>High Quality: </b>Ensures stringent standards.
          </li>
          <li><b>Efficiency:</b>Rapid production.</li>
          <li><b>Innovation:  </b>  Supports unique product development.</li>
          
        </ul>
        <h4>Examples of Products:</h4>
        <ul>
          <li>Automotive upholstery, protective gear, conveyor belts, medical supports.
          </li>
          <li><b>Industrial Rubber Goods:</b>Hoses, belts, and conveyor systems.</li>
          <li><b>Consumer Products:  </b>Rubber mats, footwear, and toys.</li>
          <li><b>Specialty Applications:   </b>Heat-resistant or chemically resistant components.</li>
          
        </ul>

        <h4>Conclusion:
        </h4>
        <p><b>Knitting machines </b>Knitting machines produce high-quality rubber fabrics efficiently, offering customization and innovation for diverse industries.</p>
      </div>
    </div>
  );
};

export default Facility9;
