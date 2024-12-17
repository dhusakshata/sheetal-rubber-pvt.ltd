import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';

const Facility11 = () => {
  return (
    <div className="facility-detail-container">
      <h1>Other Conventional Machines</h1>
      
      <div className="facility-info">
        <p>Our production line includes a variety of Other Conventional Machines that support critical stages in rubber manufacturing. These machines enhance precision and efficiency in operations such as cutting, shaping, and finishing rubber components. Their integration ensures consistency in product quality while optimizing production speed, making them indispensable for producing high-performance rubber products across a range of applications.</p>
        
        <div className="facility-description">
          <h2>Facility Overview</h2>
          <p>Facility 1 is one of our key manufacturing units, specializing in...</p>
        </div>

        <div className="facility-operations">
          <h2>Operations</h2>
          <ul>
            <li>Manufacturing Process 1</li>
            <li>Manufacturing Process 2</li>
            <li>Quality Control</li>
          </ul>
        </div>

        <div className="facility-contact">
          <h2>Contact Information</h2>
          <p>If you need more information, feel free to contact us:</p>
          <p>Email: <a href="mailto:facility1@example.com">facility1@example.com</a></p>
          <p>Phone: +123-456-7890</p>
        </div>

        <div className="facility-navigation">
          <Link to="/facilities">Back to Facilities</Link>
        </div>
      </div>
    </div>
  );
};

export default Facility11;
