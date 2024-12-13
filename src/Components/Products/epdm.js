import React from "react";
import { motion } from "framer-motion";
import "./product2.css";
import EPDM from "../../Images/EPDM-rubber.png";

const epdm = () => {
  return (
    <div className="product-page">
      {/* Heading with Bounce Animation */}
            <motion.div
              className="product-head"
              initial={{ opacity: 0, y: -100 }} // Start position (top)
              animate={{ opacity: 1, y: 0 }}    // End position (normal)
              transition={{ duration: 1 }}      // Duration of animation
            >
              <h1>EPDM RUBBER HOSES</h1>
            </motion.div>
            <hr className="product-hr"/>

      
      <div className="product-container">
      
       {/* Left Side: Image */}
               <motion.div
                 className="content-image"
                 initial={{ opacity: 0, x: -100 }} // Start position (left)
                 animate={{ opacity: 1, x: 0 }}    // End position (center)
                 transition={{ duration:1 }}      // Duration of animation
               >
                 <img src={EPDM} alt="Assembly Hoses" />
                 </motion.div>

                 
                         {/* Right Side: Info */}
                  <motion.div
                    className="content-info"
                           initial={{ opacity: 0, x: 100 }} // Start position (right)
                           animate={{ opacity: 1, x: 0 }}    // End position (center)
                           transition={{ duration: 1 }}      // Duration of animation
                         >
   <p>
          High-performance hoses for radiator and cooling
systems, built to DIN73411 & SAEJ20 Class D
standards for durability, flexibility, and heat
resistance.
</p>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Nylon/Polyester: Flexible.
           </li>
            <li>Meets SAE J20 Class A standards.Aramid/Kevlar: High-strength, heatresistant
            </li>
            <li>Peroxide-Cured: Heat, ozone, and aging
           resistant.
           Reinforced/Non-Reinforced: High or lowpressure use.

            </li>
            <li>Applications:
Automotive: Radiators and charge air
coolers.
Industrial: Cooling systems in generators
and compressors.
Heavy Equipment: Engines in
construction, mining, and agriculture.
            </li>
           
          </ul>
            </motion.div>
          </div>
          
          
        </div>
      
  );
};

export default epdm;
