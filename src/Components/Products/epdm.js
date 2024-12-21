import React from "react";
import { motion } from "framer-motion";
import "./product2.css";
import EPDM1 from "../../Images/EPDM-rubber1.png";
import GoBackbutton from "../Goback/goback.js";
const epdm = ({ children }) => {
  return (
    <div className="product-page">
       <div>
            <GoBackbutton />
            {children}
          </div>
      {/* Heading with Bounce Animation */}
      
            <motion.div
              className="product-head"
              initial={{ opacity: 0, y: -100 }} // Start position (top)
              animate={{ opacity: 1, y: 0 }}    // End position (normal)
              transition={{ duration: 1 }}      // Duration of animation
            >
              <h1>EPDM RUBBER HOSES</h1>
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
                 <img src={EPDM1} alt="Assembly Hoses" />
                 </motion.div>

                 
                         {/* Right Side: Info */}
                  <motion.div
                    className="content-info"
                           initial={{ opacity: 0, x: 100 }} // Start position (right)
                           animate={{ opacity: 1, x: 0 }}    // End position (center)
                           transition={{ duration: 1 }}      // Duration of animation
                         >
   <p>
  
High-performance hoses for radiator and cooling systems, built to DIN73411 & SAEJ20 Class D standards for durability, flexibility, and heat resistance.

</p>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Available in reinforcement as well as non-reinforcement options.
           </li>
            <li>Nylon/polyester reinforcement gives flexibility and aramid / Kevlar gives high strength.
            </li>
            <li>Our EPDM hoses are designed to operate continuously in temperatures ranging from -30°C to 140°C.
            </li>
            <li>Also available in peroxide-cured hoses.</li>
            
          </ul>
            </motion.div>
          </div>
          
          
        </div>
      
  );
};

export default epdm;
