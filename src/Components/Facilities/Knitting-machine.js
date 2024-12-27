import React, { useEffect } from 'react';
import './subfacility3.css';
import Knitting from "../../Images/knitting2.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Facility9 = () => {
  useEffect(() => {
        AOS.init({ duration: 800 }); // Initialize AOS for animations
      }, []);
  return (
    <div className="facility-container3">
      {/* Header Section */}
      <div className="facility-header3" data-aos="fade-down">
        <h1>Knitting Machines</h1>
      </div>

      {/* Main Content Section */}
      <div className="facility-main3">
        {/* Image Section */}
        <div className="facility-image3" data-aos="fade-right">
          <img src={Knitting} alt="Knitting Machines" style={{ width: "500px", height: "350px", marginTop: "-220px" }} 
          className='knitting-img'
          />
        </div>

        {/* Text Section */}
        <div className="facility-content" data-aos="fade-left">
          <div className="facility-paragraph"style={{marginRight:"20px"}} >
            <p>
              Our production line includes advanced Knitting Machines that play a crucial role in the production of
              knitted rubber components. These machines utilize precise knitting techniques to create strong and
              flexible rubber fabrics, ensuring consistent quality and durability. The ability to knit various patterns
              and thicknesses allows for customization based on specific product requirements. By streamlining the
              knitting process, our machines enhance production efficiency while maintaining high standards in the
              final rubber products, meeting the diverse needs of our customers.
            </p>
          </div>

          <div className="info-box3" >
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Purpose:</h4>
            <p>Produce knitted rubber fabrics for automotive, industrial, and consumer products.</p>
          </div>

          <div className="info-box3" >
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Advantages:</h4>
            <ul>
              <li><b>Customization:</b> Diverse patterns, thicknesses, and densities.</li>
              <li><b>Flexibility:</b> Excellent stretch and recovery.</li>
              <li><b>Strength:</b> Superior tensile strength.</li>
              <li><b>Efficiency:</b> High-speed operation for faster production.</li>
            </ul>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Facility9;
