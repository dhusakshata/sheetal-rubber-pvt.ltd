import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';

const Facility9 = () => {
  return (
    <div className="facility-container">
      <div className="facility-header">
        <h1>Knitting Machines</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        Our production line includes advanced Knitting Machines that play a crucial role in the production of knitted rubber components. These machines utilize precise knitting techniques to create strong and flexible rubber fabrics, ensuring consistent quality and durability. The ability to knit various patterns and thicknesses allows for customization based on specific product requirements. By streamlining the knitting process, our machines enhance production efficiency while maintaining high standards in the final rubber products, meeting the diverse needs of our customers.
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

export default Facility9;
