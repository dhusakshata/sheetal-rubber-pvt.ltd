import React from "react";

import { motion } from "framer-motion";
import "./product2.css";
import FuelTube from "../../Images/Fuel-Tubes.png";

const fueltube = () => {
  return (
    <div className="page">
    <div className="container">

      <h1
        >FUEL TUBES / HOSES</h1>

      <div className="content">
      <motion.img
            src={FuelTube}
            alt="..."
            className="image"
            initial={{ opacity: 0, y: -50 }} // Initial state: hidden, above
            animate={{ opacity: 1, y: 0 }} // Animate to visible, normal position
            transition={{ duration: 1 }} // Transition duration
          />

        <p
            
          >
        Engineered for safe and efficient fluid
transfer in automotive and industrial
systems, with inner diameters ranging from
2 mm to 45 mm.
         <div>
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>Multilayer Fuel Tubes: Fuelresistant for automotive systems.
</li>
          <li>Fuel Tubes with Sleeves: Heat and
          abrasion-resistant.
</li>
          <li>
          Fuel Flow Tubes: Minimize pressure drop.


          </li>
          <li>Oil Flow Tubes: Durable for hightemp lubricants.

          </li>
          <li>
          Air Flow Tubes: Reliable for intake
and exhaust systems.

          </li>
          
        </ul>
        </div>
        </p>
          
       
        
      </div>
    </div>
  </div>
  );
};

export default fueltube;
