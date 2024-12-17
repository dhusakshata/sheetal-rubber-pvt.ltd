import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';

const Facility7 = () => {
  return (
    <div className="facility-container">
      <div className="facility-header">
        <h1>Hydraulic Presses</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        Our production line is equipped with Hydraulic Presses that play a crucial role in shaping and molding rubber components. These powerful machines utilize hydraulic pressure to compress rubber materials into precise shapes, ensuring uniform density and optimal performance. The hydraulic presses are essential for various processes, including compression molding and vulcanization, allowing us to produce high-quality rubber products that meet stringent industry standards. By efficiently managing the molding process, our hydraulic presses enhance production capabilities while maintaining exceptional quality in our finished products.
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

export default Facility7;
