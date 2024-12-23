import React from "react";
import "./product2.css";
import Assemblyy1 from "../../Images/Assembly-rubber1.png";
import { motion } from "framer-motion";
import GoBackbutton from "../Goback/goback.js";

const Assembly = ({children}) => {
  return (
    <div className="product-page">
      {/* Heading with Bounce Animation */}
      
      <div>
            <GoBackbutton />
            {children}
          </div>
      <motion.div
        className="product-head"
        initial={{ opacity: 0, y: -100 }} // Start position (top)
        animate={{ opacity: 1, y: 0 }}    // End position (normal)
        transition={{ duration: 1 }}      // Duration of animation
      >
        <h1>ASSEMBLY HOSES</h1>
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
          <img src={Assemblyy1} alt="Assembly Hoses" />
        </motion.div>

        {/* Right Side: Info */}
        <motion.div
          className="content-info"
          initial={{ opacity: 0, x: 100 }} // Start position (right)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration: 1 }}      // Duration of animation
        >
<p> Sheetal Rubber provides flexible hoses with custom couplings for efficient media transfer, operating from -40°C to +140°C in sizes 6–75 mm.
          </p>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>
            A hose or multiple hoses connected to transfer media to or from a vehicle tank, portable tank, or storage receptacle.
            </li>
            <li>Sheetal Rubber can assemble flexible hoses and couplings into hose assemblies.</li>
            <li>Hose assembly applications include engine hoses, oil resistance, suction hoses, and radiators.</li>
            <li>We have an in-house crimping machine facility for hose assemblies.</li>
            
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Assembly;
