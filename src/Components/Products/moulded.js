import React from "react";
import "./product2.css";
import { motion } from "framer-motion";
import Moulded from "../../Images/Moulded.png";

const moulded = () => {
  return (
    <div className="page">
    <div className="container">
    <h1
        >MOULDED HOSES
      </h1>
      <div className="content">

      <motion.img
            src={Moulded}
            alt="..."
            className="image"
            initial={{ opacity: 0, y: -50 }} // Initial state: hidden, above
            animate={{ opacity: 1, y: 0 }} // Animate to visible, normal position
            transition={{ duration: 1 }} // Transition duration
          />

<p
          >
        Engineered for safe and efficient fluid
transfer in automotive and industrial
systems, with inner diameters ranging from
2 mm to 45 mm.We specialize in high-performance,
custom-moulded parts for various
industries, using materials like SBR,
EPDM, PVC/NBR, Silicone, Neoprene,
and more.

         <div>
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>Applications:
Grommets: Wire and cable
protection.
Gaskets & Seals: Reliable sealing
under pressure.
Vibration Dampeners: Noise
reduction and shock absorption.
</li>
          <li>Part Range: 0.5 grams to 5 kg, with
          press sizes up to 480 mm.
</li>
          <li>
          Facility: In-house lab for quality and
testing.


          </li>
          
        </ul>
        </div>
        </p>
       
        
      </div>
    </div>
  </div>
  );
};

export default moulded;
