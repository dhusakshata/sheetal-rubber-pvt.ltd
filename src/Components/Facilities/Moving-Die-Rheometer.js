import React, { useEffect, useRef } from "react";
import Rheometer from "../../Images/Rheometer.png";
import './inhousefacility.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Inhouse1 = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      offset: 100,     // Trigger point from the top
      once: false,     // Animates every time you scroll
      mirror: true,    // Reverse animation when scrolling up
    });
    AOS.refresh(); // Refresh animations to sync with dynamic content
  }, []);
  return (
    <div className="inhouse-facility-container">
         <div className="inhouse-header" > <h1>
          Moving Die Rheometer
          
         </h1>
         </div>
     <div className="inhouse-container">
     <div className="inhouse-image" data-aos="fade-right" >
          <img src={Rheometer} alt="inhouse 1" style={{width:"300px",height:"400px"}}/>
        </div>
      <div className="inhouse-paragrph" data-aos="fade-left">
     <ul>
      <li>A Moving Die Rheometer (MDR) is essential in the rubber industry for measuring the dynamic curing characteristics of rubber and elastomers during vulcanization.</li>
      <li>
      The instrument works by placing a rubber sample in a closed cavity between two dies, one of which oscillates at a constant frequency and amplitude, subjecting the sample to shear deformation.
      </li>
      <li>
      As the rubber cures, the MDR records the resistance to oscillation, generating a torque-time curve that reveals key information, including minimum and maximum torque, scorch time (when curing begins), and cure time (when vulcanization is complete).
      </li>
      <li>
      MDRs are equipped with precise temperature control, replicating real-world curing conditions for accurate predictions of processing and end-use performance.
Remove rest of the data

      </li>
     </ul>
      </div>
     </div>
     
    </div>
  );
};

export default Inhouse1;
