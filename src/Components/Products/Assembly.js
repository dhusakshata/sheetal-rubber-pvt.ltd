import React from "react";
import "./product2.css";
import Assemblyy from "../../Images/Assembly-rubber.png";
import { motion } from "framer-motion";

const Assembly = () => {
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
        >ASSEMBLY HOSES
       </motion.h1>

        <div className="content">

        <motion.img
            src={Assemblyy}
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
          Sheetal Rubber provides flexible hoses with
custom couplings for efficient media
transfer, operating from -40°C to +140°C in
sizes 6–75 mm.
           <div>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Assembly Options:
Crimping: High-pressure durability.
CPC Clamps: Leak-free in highvibration setups.</li>
            <li>Oil Resistant: For engines, fuel, and
            oil.</li>
            <li>Engine: Heat-resistant connections.

            </li>
            <li>Suction: Maintains vacuum integrity.
            </li>
            <li>Radiator: Heat and pressureresistant for cooling.

          </li>
          </ul>
          </div>
          </motion.p>
         
          
        </div>
      </div>
    </div>
  );
};

export default Assembly;
