import React from "react";
import "./product2.css";
import Turbocharger1 from "../../Images/Turbo-charger1.png";
import { motion } from "framer-motion";
import GoBackbutton from "../Goback/goback.js";
function turbocharger({children}) {
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
      <h1
        >
          TURBOCHARGER AND CAC HOSES
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
        <img src={Turbocharger1} alt="Assembly Hoses" />
      </motion.div>

      {/* Right Side: Info */}
      <motion.div
        className="content-info"
        initial={{ opacity: 0, x: 100 }} // Start position (right)
        animate={{ opacity: 1, x: 0 }}    // End position (center)
        transition={{ duration: 1 }}      // Duration of animation
      >
   
         <p>   Engineered for high-performance connections in turbocharger and
            charge air cooler systems, ensuring durability in demanding automotive
            and industrial applications.
       
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Design to operate at Temperature range: -50°C to + 230°C.
           </li>
            <li>Our turbocharger hoses meets/exceeds SAEJ20 Class A specifications.
            </li>
            <li>Our hoses are specially engineered for use in turbocharger and intake systems across a variety of vehicles, including trucks, buses, passenger cars, and railway engines, as well as industrial applications.
            </li>
            <li>These hoses are designed to provide both rigid and flexible connections, ensuring reliable performance in demanding environments such as generators and other heavy-duty machinery.
            </li>
           
          </ul>
        
          </p>
          
        </motion.div>
      </div>
    </div>
  );
}

export default turbocharger;
