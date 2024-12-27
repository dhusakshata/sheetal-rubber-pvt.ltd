import React, { useEffect } from 'react';
import './subfacility3.css';
import Compression from "../../Images/Compression Molding.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Facility6 = () => {
   useEffect(() => {
     AOS.init({ duration: 1000 }); // Initialize AOS for animations
   }, []);

  return (
    <div className="facility-container3">
      {/* Heading Section */}
      <div className="facility-header3" data-aos="fade-down">
        <h1>Compression Transfer Moulding</h1>
      </div>

      {/* Main Content Section */}
      <div className="facility-main3">
        {/* Sticky Image Section */}
        <div className="facility-image3" data-aos="fade-right">
          <img src={Compression} alt="Compression Transfer Moulding" style={{ width: "500px" }} 
          className='compression-img'
          />
        </div>

        {/* Scrollable Text Section */}
        <div className="facility-content3">
          <div className="facility-paragraph3">
            <p>
              Our production line utilizes Compression Transfer Moulding, a highly efficient process for shaping rubber
              compounds into finished products. This method involves placing pre-measured rubber material into a heated
              mould, where it is subjected to pressure to achieve the desired shape and density. Compression transfer
              moulding ensures uniform material distribution and optimal curing, resulting in high-quality rubber
              components with consistent properties. This process is ideal for producing complex shapes and larger
              quantities, enhancing production efficiency while maintaining rigorous quality standards in our finished
              products.
            </p>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Purpose:</h4>
            <p>
              Compression transfer moulding is a vital process for shaping rubber compounds into high-quality, complex
              products using heat and pressure.
            </p>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Process:</h4>
            <p>
              Pre-measured rubber material is placed in a transfer pot, heated, and forced into mold cavities through
              runners, ensuring even material distribution and curing.
            </p>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Advantages:</h4>
            <ul>
              <li><b>Versatility:</b> Accommodates various rubber compounds for tailored properties.</li>
              <li><b>Precision:</b> Ensures uniform thickness and density for reliable performance.</li>
              <li><b>Complex Shapes:</b> Capable of producing intricate designs.</li>
              <li><b>Reduced Waste:</b> Minimizes scrap, leading to cost savings.</li>
            </ul>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Applications:</h4>
            <ul>
              <li><b>Automotive Components:</b> Seals, gaskets, and vibration isolators.</li>
              <li><b>Industrial Products:</b> O-rings, bushings, and grommets.</li>
              <li><b>Consumer Goods:</b> Grips, handles, and flooring mats.</li>
              <li><b>Electrical Insulation:</b> Insulating components for safety and performance.</li>
            </ul>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Benefits:</h4>
            <ul style={{fontSize:"16px"}}>
              <li ><b>Enhanced Quality:</b> Produces high-quality, reliable components.</li>
              <li><b>Efficiency:</b> Increases throughput and reduces lead times.</li>
              <li><b>Customization:</b> Easily modified for different formulations and designs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility6;
