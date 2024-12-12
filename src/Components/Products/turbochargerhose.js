import React from "react";
import "./product2.css";
import Turbocharger from "../../Images/Turbo-charger.png";
import { motion } from "framer-motion";

function turbocharger() {
  return (
    <div className="page">
      <div className="container">
       {/* Applying Framer Motion to the h1 text */}
       <h1
        >
          TURBOCHARGER AND CAC HOSES
        </h1>
        <div className="content">
          {/* Image with Framer Motion effects */}
          <motion.img
            src={Turbocharger}
            alt="..."
            className="image"
            initial={{ opacity: 0, y: -50 }} // Initial state: hidden, above
            animate={{ opacity: 1, y: 0 }} // Animate to visible, normal position
            transition={{ duration: 1 }} // Transition duration
          />
           <p
            animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
          >
            Engineered for high-performance connections in turbocharger and
            charge air cooler systems, ensuring durability in demanding automotive
            and industrial applications.
          
          <div>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Wide Temperature Range: Operates from
         -50°C to +230°C.
           </li>
            <li>Meets SAE J20 Class A standards.
            </li>
            <li>Reinforced Options:
               Polyester: Standard flexibility and durability.
               Aramid: High tensile strength and heat
               resistance.
            </li>
            <li>Special Linings:
                 Fluorosilicone: Resistant to oil, acids, and fuels.
                  FKM/Viton: Withstands diesel by-products
and exhaust gases.
            </li>
           
          </ul>
          </div>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default turbocharger;
