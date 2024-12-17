import React from 'react';
import './SubFacility.css'; // Importing the CSS for styling
import { Link } from 'react-router-dom';

const Facility10 = () => {
  return (
    <div className="facility-container">
      <div className="facility-header">
        <h1>Braiding Machines</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        Our production line includes advanced Braiding Machines that are vital for producing reinforced rubber components. These machines braid multiple strands of rubber or other materials to create durable, high-strength hoses, cables, and other products. Braiding enhances the structural integrity and flexibility of the rubber, ensuring superior performance under pressure. This technology allows for the production of customized braided designs, providing the perfect balance between flexibility and strength in products like hydraulic hoses, automotive cables, and industrial tubing, all while maintaining high production efficiency and consistent quality.
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

export default Facility10;
