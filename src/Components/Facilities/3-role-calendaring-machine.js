import React, { useEffect } from 'react';
import "./subfacility3.css"
import Role from "../../Images/3 role.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
const Facility5 = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS for animations
    }, []);

  return (
    <div className="facility-container3">
      {/* Heading Section */}
      <div className="facility-header3" data-aos="fade-down">
        <h1>3-Roll Calendaring Machine</h1>
      </div>

      {/* Main Content Section */}
      <div className="facility-main3">
        {/* Sticky Image Section */}
        <div className="facility-image3" data-aos="fade-right">
          <img src={Role} alt="3-Roll Calendaring Machine" style={{ width: "500px" }}
          className='roll-img' />
        </div>

        {/* Scrollable Text Section */}
        <div className="facility-content3">
          <div className="facility-paragraph3">
            <p>
            The calendaring process is essential for producing high quality rubber products which are used in various applications. By maintaining stringent quality control, our calendaring
              machines enhance the performance and durability of our finished products while maximizing production
              efficiency.
            </p>
          </div>

          <div className="info-box3">
            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Purpose:</h4>
            <p>Shapes and finishes rubber sheets with precise thickness and uniformity.</p>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Operation:</h4>
            <ul>
              <li><b>Roller System:</b> Three horizontally aligned rollers compress and stretch rubber compounds into flat sheets.</li>
              <li><b>Uniformity:</b> Ensures even distribution and desired properties.</li>
            </ul>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Advantages:</h4>
            <ul>
              <li><b>Uniform Thickness:</b> Guarantees consistent sheet thickness for quality products.</li>
              <li><b>Smooth Surface Finish:</b> Enhances both the look and functionality of rubber products.</li>
              <li><b>Versatility:</b> Suitable for various rubber compounds.</li>
              <li><b>High Efficiency:</b> Continuous operation for large-scale production.</li>
            </ul>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Benefits:</h4>
            <ul>
              <li><b>Enhanced Quality:</b> Consistent thickness improves product performance.</li>
              <li><b>Cost-Effective:</b> High efficiency reduces costs.</li>
              <li><b>Production Flexibility:</b> Quick adjustments for varied requirements.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility5;
