import React from "react";
import { motion } from "framer-motion";
import "./product2.css";
import EPDM from "../../Images/EPDM-rubber.png";

const epdm = () => {
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
        >EPDM RUBBER HOSES
      </motion.h1>

        <div className="content">

         <motion.img
            src={EPDM}
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
          High-performance hoses for radiator and cooling
systems, built to DIN73411 & SAEJ20 Class D
standards for durability, flexibility, and heat
resistance.
          <div>
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
          </div>
          </motion.p>
          
        </div>
      </div>
    </div>
  );
};

export default epdm;
