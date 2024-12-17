import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';
const Facility5 = () => {
  return (
    <div className="facility-container">
      <div className="facility-header">
        <h1>3 Role Calendaring Machine</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        Our production line is equipped with 3-Roll Calendaring Machines that play a vital role in shaping and smoothing rubber sheets. These advanced machines utilize three precisely aligned rollers to compress and control the thickness of rubber compounds, ensuring uniformity and consistency across each sheet. This calendaring process is essential for producing high-quality rubber sheets used in various applications, including conveyor belts, seals, and gaskets. By maintaining stringent quality control, our calendaring machines enhance the performance and durability of our finished products while maximizing production efficiency.
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

export default Facility5;
