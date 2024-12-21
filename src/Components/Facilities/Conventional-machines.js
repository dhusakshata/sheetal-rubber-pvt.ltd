import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';

const Facility11 = () => {
   // Scroll-trigger animation logic
      useEffect(() => {
        const elements = document.querySelectorAll('.facility-content, .facility-header, .facility-paragraph');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible-black');
              } else {
                entry.target.classList.remove('visible-black');
              }
            });
          },
          { threshold: 0.2 } // Trigger animation when 10% of the element is visible
        );
    
        elements.forEach((element) => observer.observe(element));
    
        return () => observer.disconnect(); // Cleanup observer on component unmount
      }, []);
      
  return (
    <div className="facility-container">
    <div className="facility-header">
      <h1>Other Conventional Machines</h1> {/* Main heading */}
    </div>

    <div className="facility-paragraph">
      <p>
      Our production line includes a variety of Other Conventional Machines that support critical stages in rubber manufacturing. These machines enhance precision and efficiency in operations such as cutting, shaping, and finishing rubber components. Their integration ensures consistency in product quality while optimizing production speed, making them indispensable for producing high-performance rubber products across a range of applications.
      </p>
      
    </div>
    <div className="facility-content11">
    <h2>Overview of Other Conventional Machines:</h2>
<p><b>Purpose: </b>
These machines are designed to perform specific tasks such as cutting, shaping, molding, and finishing rubber components. They help in refining the manufacturing process, contributing to overall product quality and performance.
</p>
<p><b>Operation:</b>
The machines typically operate using mechanical or hydraulic systems to exert force and shape rubber materials into desired forms. They are often user-friendly, allowing for quick adjustments to accommodate different product specifications.
</p>

       <h4>Advantages of Other Conventional Machines:</h4>
      <ul>
      <li><b>Precision: </b>These machines provide accurate cutting and shaping, which is crucial for ensuring uniformity and consistency in rubber products.</li>
        <li><b>Efficiency:  </b> Designed for high-speed operation, they reduce production time and increase throughput, enabling manufacturers to meet demand more effectively.</li>
        <li><b>Versatility</b>Capable of handling various types of rubber materials and product designs, making them suitable for a wide range of applications.</li>
     
      </ul>

      <h4>Applications:</h4>
      <ul>
        <li><b>Cutting Machines:   </b> Used to precisely cut rubber sheets or components to specified dimensions for further processing or assembly.
        </li>
        <li><b>Molding Machines: </b> Essential for shaping rubber into specific forms, such as gaskets, seals, and other molded products.</li>

        <li><b>Finishing Machines: </b>These machines refine the surface of rubber products, ensuring a smooth finish and enhancing aesthetics.</li>

        <li><b>Calendars </b>Used for producing rubber sheets by rolling out the rubber compound to the desired thickness.</li>
      </ul>
      
      <h4>Production Process Using Other Conventional Machines:</h4>
      <ul>
        <li><b>Material Preparation: </b> Rubber compounds are prepared and mixed to ensure consistency before processing.
        </li>
        <li><b>Cutting/Shaping:</b>The prepared rubber is fed into cutting or molding machines where it is shaped into the desired forms.</li>
        <li><b>Finishing: </b>  The shaped products undergo finishing processes, which may include trimming, surface treatment, or additional curing.</li>
       
        
      </ul>
          
      <h4>Benefits for Rubber-Producing Companies:</h4>
      <ul>
        <li><b>Improved Product Quality: </b>Enhanced precision in cutting and shaping leads to higher quality and more uniform products.
        </li>
        <li><b>Increased Production Capacity:</b> Efficient operation of conventional machines allows for higher output, meeting market demands effectively.</li>
        <li><b>Cost Efficiency:  </b> Reducing waste and optimizing the manufacturing process lowers production costs and increases profitability.</li>
        
      </ul>
      <h4>Conclusion:
      </h4>
      <p><b>Other Conventional Machines  </b> are integral to the rubber production process, providing essential support for shaping, cutting, and finishing rubber products. Their role in enhancing efficiency, precision, and product quality makes them indispensable in delivering high-performance rubber components tailored to various industrial applications. By incorporating these machines into the production line, rubber manufacturers can ensure a streamlined process that meets the stringent requirements of diverse markets.</p>
    </div>
  
  </div>
  );
};

export default Facility11;
