import React from "react";
 import "./product2.css";
import Silicon1 from "../../Images/Silicon1.png";
import { motion } from 'framer-motion';

function siliconpolyester() {

  
  return (

<div className="product-page">
      {/* Heading with Bounce Animation */}
      <motion.div
        className="product-head"
        initial={{ opacity: 0, y: -100 }} // Start position (top)
        animate={{ opacity: 1, y: 0 }}    // End position (normal)
        transition={{ duration: 1 }}      // Duration of animation
      ><h1>
      SILICON-POLYESTER HOSES
      </h1>
      </motion.div>
      {/* <hr className="product-hr"/> */}
      
      <div className="product-container">
        {/* Left Side: Image */}
        <motion.div
          className="content-image"
          initial={{ opacity: 0, x: -100 }} // Start position (left)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration:1 }}      // Duration of animation
        >
          <img src={Silicon1} alt="Assembly Hoses"
         style={{marginTop:"-140px"}}
          
          />
        </motion.div>

        {/* Right Side: Info */}
        <motion.div
          className="content-info"
          initial={{ opacity: 0, x: 100 }} // Start position (right)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration: 1 }}      // Duration of animation
        >
   
<p
          >
          Silicone-Polyester hoses are designed specifically for use in demanding radiator, heater,
          and coolant transfer applications. Constructed from high-quality silicone reinforced with
          durable polyester fabric, these hoses offer excellent resilience and a reliable performance
          in harsh conditions.
          This combination of versatility, durability, and adaptability to extreme environments makes
          Silicone-Polyester hoses a premium choice for automotive, industrial, and other
          applications requiring reliable coolant and heat transfer solutions.
          
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li><b>Durable & Weather-Resistant:</b> Good resistance to weather and ozone and resists
            deterioration from coolant and heat transfer.</li>
            <li>deterioration from coolant and heat transfer.
            Wide Temperature Range: Operates from -50°C to +180°C.</li>
            <li><b>Coolant & Heat Resistant:</b> Prevents deterioration from fluids and heat.
            </li>
            <li>our Silicone Polyster Hoses meet / exceeds SAEJ20 CLASS A standard
            </li>
            <li><b>Customized hoses with Liners: </b>Available with the option of Fluorosilicone lining for added oil/ acids/ fuel resistance, or FKM/ Viton® lining for diesel combustion by-products/ exhaust gas recycle.
          </li>
          <li>Also available in different RAL colors.</li>
          </ul>
        
          </p>
         
          
        </motion.div>
      </div>
    </div>
  );
}

export default siliconpolyester;
