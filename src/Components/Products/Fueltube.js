import React from "react";

import { motion } from "framer-motion";
import "./product2.css";
import FuelTube from "../../Images/Fuel-Tubes.png";

const fueltube = () => {
  return (
    <div className="page">
    <div className="container">

      <motion.h1
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >FUEL TUBES / HOSES</motion.h1>

      <div className="content">
      <motion.img
            src={FuelTube}
            alt="..."
            className="image"
            initial={{ opacity: 0, y: -50 }} // Initial state: hidden, above
            animate={{ opacity: 1, y: 0 }} // Animate to visible, normal position
            transition={{ duration: 1 }} // Transition duration
          />

        <motion.p
            animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
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
        </motion.p>
          
       
        
      </div>
    </div>
  </div>
  );
};

export default fueltube;
