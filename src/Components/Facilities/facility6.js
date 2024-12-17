import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';
const Facility6 = () => {
  return (
    <div className="facility-container">
      <div className="facility-header">
        <h1>Compression Transfer Molding</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        Our production line utilizes Compression Transfer Molding, a highly efficient process for shaping rubber compounds into finished products. This method involves placing pre-measured rubber material into a heated mold, where it is subjected to pressure to achieve the desired shape and density. Compression transfer molding ensures uniform material distribution and optimal curing, resulting in high-quality rubber components with consistent properties. This process is ideal for producing complex shapes and larger quantities, enhancing production efficiency while maintaining rigorous quality standards in our finished products.
        </p>
      </div>

      <div className="facility-content">
        {/* Left Side Image */}
        <div className="facility-image">
          <img src="facility1-image.jpg" alt="Facility 1" />
        </div>

        {/* Right Side Content */}
        <div className="facility-right">
          <h2>Facility Overview</h2>
          <div className="facility-info">
            <div className="facility-info-left">
              <div className="info-box">Info Box 1</div>
              <div className="info-box">Info Box 2</div>
            </div>
            <div className="facility-info-right">
              <div className="info-box">Info Box 3</div>
              <div className="info-box">Info Box 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility6;
