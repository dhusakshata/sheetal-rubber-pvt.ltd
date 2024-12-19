import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';
import Compression from "../../Images/Compression Molding.jpg";
const Facility6 = () => {
  return (
    <div className="facility-container6">
      <div className="facility-header6">
        <h1>Compression Transfer Molding</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph6">
        <p>
        Our production line utilizes Compression Transfer Molding, a highly efficient process for shaping rubber compounds into finished products. This method involves placing pre-measured rubber material into a heated mold, where it is subjected to pressure to achieve the desired shape and density. Compression transfer molding ensures uniform material distribution and optimal curing, resulting in high-quality rubber components with consistent properties. This process is ideal for producing complex shapes and larger quantities, enhancing production efficiency while maintaining rigorous quality standards in our finished products.
        </p>
        <div className="facility-image6">
          <img src={Compression} alt="Facility 1" />
        </div>
      </div>
      <div className="facility-content6">
      <h2>Compression Transfer Molding Overview:</h2>
<p><b>Purpose: </b>
Compression transfer molding is a vital process for shaping rubber compounds into high-quality, complex products using heat and pressure.
</p>
<p><b>Process:</b>
Pre-measured rubber material is placed in a transfer pot, heated, and forced into mold cavities through runners, ensuring even material distribution and curing.
</p>

         <h4>Advantages:</h4>
        <ul>
        <li><b>Versatility: </b>Accommodates various rubber compounds for tailored properties.</li>
          <li><b>Precision:  </b>Ensures uniform thickness and density for reliable performance.</li>
          <li><b>Complex Shapes:</b>Capable of producing intricate designs.</li>
         
          <li><b>Reduced Waste: </b>Minimizes scrap, leading to cost savings.</li>
        </ul>

        <h4>Applications:</h4>
        <ul>
          <li><b>Automotive Components:  </b> Seals, gaskets, and vibration isolators.
          </li>
          <li><b>Industrial Products: </b> O-rings, bushings, and grommets.</li>
          <li><b>Consumer Goods:  </b>Grips, handles, and flooring mats.</li>
          <li><b>Electrical Insulation:  </b>Insulating components for safety and performance.</li>
        </ul>
        
        <h4>Production Process:</h4>
        <ul>
          <li><b>Material Preparation: </b>  Pre-measured rubber compounds.
          </li>
          <li><b>Loading:</b>Rubber is placed into the transfer pot.</li>
          <li><b>Molding: </b> The mold is closed, heat is applied, and pressure forces the rubber into cavities.</li>
          <li><b>Cooling and Ejection:</b> Finished products are cooled and ejected for inspection.</li>
          
        </ul>
            
        <h4>Benefits:</h4>
        <ul>
          <li><b>Enhanced Quality: </b>Produces high-quality, reliable components.
          </li>
          <li><b>Efficiency</b>Increases throughput and reduces lead times.</li>
          <li><b>Customization:  </b> Easily modified for different formulations and designs.</li>
          
        </ul>
        <h4>Conclusion:
        </h4>
        <p><b>Compression Transfer Molding </b>is essential for producing efficient, precise, and high-quality rubber components, making it a key process in rubber manufacturing.</p>
      </div>
    
    </div>
  );
};

export default Facility6;
