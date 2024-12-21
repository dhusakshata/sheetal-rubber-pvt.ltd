import React, { useEffect } from 'react';
import './SubFacility.css'; // Importing the CSS for styling
import { Link } from 'react-router-dom';
import Braiding from "../../Images/braiding-machine__1_-removebg-preview.png";

const Facility10 = () => {
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
        <h1>Braiding Machines</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        Our production line includes advanced Braiding Machines that are vital for producing reinforced rubber components. These machines braid multiple strands of rubber or other materials to create durable, high-strength hoses, cables, and other products. Braiding enhances the structural integrity and flexibility of the rubber, ensuring superior performance under pressure. This technology allows for the production of customized braided designs, providing the perfect balance between flexibility and strength in products like hydraulic hoses, automotive cables, and industrial tubing, all while maintaining high production efficiency and consistent quality.
        </p>
        <div className="facility-image10">
          <img src={Braiding}alt="Facility 1" />
        </div>
      </div>

      <div className="facility-content10">
      <h2>Braiding Machines Overview</h2>
<p><b>Purpose: </b>
<ul>
  <li>Weave reinforcing material around a rubber core to improve mechanical properties like strength, wear resistance, and flexibility.</li>
</ul>
</p>
<p><b>Operation:</b>
<ul>
  <li>
  Uses multiple spools to weave materials in circular/spiral patterns around a rubber core or tube.
  </li>
  
</ul>
</p>

         <h4>Advantages:</h4>
        <ul>
        <li><b>Enhanced Strength:</b>  Superior tensile strength, essential for hydraulic hoses and cables.</li>
          <li><b>Flexibility:  </b>Maintains flexibility despite added reinforcement.</li>
          <li><b>Customization:</b>Different materials and patterns for specific applications.</li>
         
          <li><b>Durability:</b> Protects rubber core from damage, extending product lifespan.
          </li>
        </ul>

        <h4>Applications:</h4>
        <ul>
          <li><b>Hydraulic Hoses</b>   High-pressure hoses reinforced with steel or synthetic fibers.
          </li>
          <li><b>Cables:</b>   Electrical and automotive cables with added insulation and protection.</li>
          <li><b>Seals and Gaskets:   </b>Better pressure and environmental resistance.</li>
        <li>
          <b>Industrial Hoses:</b>
          For oil, gas, and chemical industries.
        </li>
        </ul>
        
        <h4>Production Process:</h4>
        <ul>
          <li>Material preparation (core and reinforcement selection).
          </li>
          <li>Braiding of reinforcing material around the rubber core.</li>
          <li>Post-braiding (vulcanization or coating as needed).</li>
          
          
        </ul>
            
        <h4>Benefits for Rubber Producers:</h4>
        <ul>
          <li><b>Improved Performance: </b>Enhanced strength, flexibility, and durability.
          </li>
          <li><b>Expanded Product Range:</b>Ability to offer high-performance products.</li>
          <li><b>Cost Efficiency:  </b> Increases product lifespan, reducing maintenance costs.</li>
          
        </ul>
        <h4>Examples of Products:</h4>
        <ul>
          <li>High-pressure hydraulic hoses, reinforced automotive cables, seals, and gaskets.
          </li>
          
          
        </ul>

        <h4>Conclusion:
        </h4>
        <p><b>Braiding machines </b>are essential for producing high-performance, reinforced rubber products, offering versatility, strength, and durability across industries.</p>
      </div>
    </div>
  );
};

export default Facility10;
