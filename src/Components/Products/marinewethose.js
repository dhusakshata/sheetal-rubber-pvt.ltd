import React from "react";
import { motion } from "framer-motion";
import "./product2.css";
import Marinewet from "../../Images/Marine-wet.png";

function Marine() {
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
        > Marine Wet
        Exhaust Hoses </motion.h1>

        <div className="content">

        <motion.img
            src={Marinewet}
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
          Sheetal Rubber provides high-quality Marine Wet
Exhaust Hoses for engine and generator systems
in in-board pleasure boats, ensuring durability and
top performance in marine environments.

          <div>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Standard Hoses: Operate up to +180°C.

           </li>
            <li>HT Hoses: Withstand up to +230°C for
            turbocharged applications.
            </li>
            <li>
            Standards Compliance: SAE J2006 R3 (Wet
Exhaust), SAE J2006 R2 (EPDM).

            </li>
            <li>Heat Resistance: Handles extreme
            temperatures.
            </li>
            <li>Durability: Resists water, salt, and
chemicals.
Ideal for reliable, high-performance marine
systems.

            </li>
          </ul>
          </div>
          </motion.p>
          
        </div>
      </div>
    </div>
  );
}

export default Marine;
