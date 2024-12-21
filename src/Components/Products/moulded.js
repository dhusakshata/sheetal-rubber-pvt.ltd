import React from "react";
import "./product2.css";
import { motion } from "framer-motion";
import Moulded1 from "../../Images/Moulded1.png";
import GoBackbutton from "../Goback/goback.js";
const moulded = ({ children }) => {
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
          <h1
              >MOULDED HOSES
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
  
  <img src={Moulded1} alt="Assembly Hoses" />
  </motion.div>

  
          {/* Right Side: Info */}
          <motion.div
            className="content-info"
            initial={{ opacity: 0, x: 100 }} // Start position (right)
            animate={{ opacity: 1, x: 0 }}    // End position (center)
            transition={{ duration: 1 }}      // Duration of animation
          >

<p>We specialize in high-performance,
custom-moulded parts for various
industries, using materials like SBR,
EPDM, PVC/NBR, Silicone, Neoprene,
and more.

        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>Sheetal Rubber offers a range of moulded parts.
</li>
          <li>Grommet, Gaskets, Bellows, Mountings, Rubber to metal bonded component and custom moulded parts.
</li>
          <li>
          Transfer and compression moulding process available.

          </li>
          <li>Auto-weighing available from 0.5 grams to 5 kgs.</li>
          <li>Auto-weighing available from 0.5 grams to 5 kgs.</li>
        </ul>
        
        </p>
        </motion.div>
    </div>
  </div>
  );
};

export default moulded;
