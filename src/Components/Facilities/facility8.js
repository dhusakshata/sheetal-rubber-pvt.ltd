import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';

const Facility8 = () => {
  return (
    <div className="facility-container">
      <div className="facility-header">
        <h1>Rubber Mixing Mills</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        Our production line is equipped with Rubber Mixing Mills, which are essential for the thorough blending of rubber compounds. These mills utilize two or more heavy rollers to process raw materials, ensuring a uniform mixture and optimal consistency. The efficient operation of rubber mixing mills allows for precise control over the mixing process, resulting in high-quality rubber products with desired properties. By facilitating the preparation of various rubber formulations, these mills enhance production efficiency while maintaining stringent quality standards in our finished products.
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

export default Facility8;
