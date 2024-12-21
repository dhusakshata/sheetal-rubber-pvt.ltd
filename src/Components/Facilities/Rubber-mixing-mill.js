import React, { useEffect } from 'react';
import './subfacility3.css';
import RubberMixing from "../../Images/uni-drive-rubber-mixing-mill-12x30-removebg-preview-1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Facility8 = () => {
  useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS for animations
      }, []);
  

  return (
    <div className="facility-container3">
      {/* Heading Section */}
      <div className="facility-header3" data-aos="fade-down">
        <h1>Rubber Mixing Mills</h1>
      </div>

      {/* Main Content Section */}
      <div className="facility-main3">
        {/* Sticky Image Section */}
        <div className="facility-image3" data-aos="fade-right">
          <img src={RubberMixing} alt="Rubber Mixing Mills" style={{ width: "500px" }} />
        </div>

        {/* Scrollable Text Section */}
        <div className="facility-content3">
          <div className="facility-paragraph3">
            <p>
              Our production line is equipped with Rubber Mixing Mills, which are essential for the thorough blending
              of rubber compounds. These mills utilize two or more heavy rollers to process raw materials, ensuring a
              uniform mixture and optimal consistency. The efficient operation of rubber mixing mills allows for
              precise control over the mixing process, resulting in high-quality rubber products with desired
              properties. By facilitating the preparation of various rubber formulations, these mills enhance
              production efficiency while maintaining stringent quality standards in our finished products.
            </p>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Purpose:</h4>
            <p>
              Rubber mixing mills are essential for blending raw rubber materials with fillers and additives to create
              uniform rubber compounds.
            </p>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Advantages:</h4>
            <ul>
              <li><b>Uniform Mixing:</b> Ensures consistent properties in the final product.</li>
              <li><b>Versatility:</b> Handles various rubber formulations with different viscosities.</li>
              <li><b>Efficient Processing:</b> Can process large volumes quickly, increasing production capacity.</li>
              <li><b>Adjustable Settings:</b> Gap between rollers can be adjusted for precise formulation control.</li>
            </ul>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Applications:</h4>
            <ul>
              <li><b>Rubber Compounding:</b> Producing compounds for tires, hoses, belts, and seals.</li>
              <li><b>Color Mixing:</b> Blending color concentrates into rubber for aesthetic products.</li>
              <li><b>Additive Incorporation:</b> Uniformly distributing additives for enhanced performance.</li>
            </ul>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Benefits:</h4>
            <ul>
              <li><b>Enhanced Product Quality:</b> Consistent mixing leads to reliable rubber products.</li>
              <li><b>Increased Production Efficiency:</b> Reduces cycle times and boosts productivity.</li>
              <li><b>Customization:</b> Adjusts mixing processes for specific formulations.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility8;
