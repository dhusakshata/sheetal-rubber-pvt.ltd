import React from "react";
import { motion } from "framer-motion";
import "./product2.css";
import Wired from "../../Images/wired-reinforced.png";

const wired = () => {
  return (
    <div className="page">
    <div className="container">
    <h1
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >WIRE REINFORCED
      HOSES</h1>

      <div className="content">
      <motion.img
            src={Wired}
            alt="..."
            className="image"
            initial={{ opacity: 0, y: -50 }} // Initial state: hidden, above
            animate={{ opacity: 1, y: 0 }} // Animate to visible, normal position
            transition={{ duration: 1 }} // Transition duration
          />
        <p
            
          >
        Engineered for reliability in demanding
environments, with a temperature range of
-40°C to +140°C and sizes from 20 mm to
200 mm.
         <div>
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>Suction Hose: Vacuum integrity
for fluid/air transfer.
</li>
          <li>Air Filter Hose: Durable for clean
engine air intake.
</li>
          <li>Flexible Hose: Versatile for fluids
and gases.

          </li>
          <li>Exhaust Hose: Heat-resistant for
          exhaust gases.
          </li>
          
        </ul>
        </div>
        </p>
       
        
      </div>
    </div>
  </div>
  );
};

export default wired;
