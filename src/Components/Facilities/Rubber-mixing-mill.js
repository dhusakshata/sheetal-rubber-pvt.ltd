import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';
import RubberMixing from "../../Images/uni-drive-rubber-mixing-mill-12x30-removebg-preview-1.webp";

const Facility8 = () => {

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
        <h1>Rubber Mixing Mills</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        Our production line is equipped with Rubber Mixing Mills, which are essential for the thorough blending of rubber compounds. These mills utilize two or more heavy rollers to process raw materials, ensuring a uniform mixture and optimal consistency. The efficient operation of rubber mixing mills allows for precise control over the mixing process, resulting in high-quality rubber products with desired properties. By facilitating the preparation of various rubber formulations, these mills enhance production efficiency while maintaining stringent quality standards in our finished products.
        </p>
        <div className="facility-image8" style={{width:"1000px"}}>
          <img src={RubberMixing} alt="Facility 1"  />
        </div>
      </div>

      <div className="facility-content8">
      <h2>Rubber Mixing Mills Overview:</h2>
<p><b>Purpose: </b>
Rubber mixing mills are essential for blending raw rubber materials with fillers and additives to create uniform rubber compounds.
</p>


         <h4>Advantages:</h4>
        <ul>
        <li><b>Uniform Mixing: </b>Ensures consistent properties in the final product.</li>
          <li><b>Versatility:  </b> Handles various rubber formulations with different viscosities.</li>
          <li><b>Efficient Processing: </b>Can process large volumes quickly, increasing production capacity.</li>
         
          <li><b>Adjustable Settings:</b>Gap between rollers can be adjusted for precise formulation control.</li>
        </ul>

        <h4>Applications:</h4>
        <ul>
          <li><b>Rubber Compounding: </b>  Producing compounds for tires, hoses, belts, and seals.
          </li>
          <li><b>Color Mixing: </b> Blending color concentrates into rubber for aesthetic products.</li>
          <li><b>Additive Incorporation:  </b>Uniformly distributing additives for enhanced performance.</li>
        
        </ul>
        
      
            
        <h4>Benefits:</h4>
        <ul>
          <li><b>Enhanced Product Quality: </b>Consistent mixing leads to reliable rubber products.
          </li>
          <li><b>Increased Production Efficiency:</b>Reduces cycle times and boosts productivity.</li>
          <li><b>Customization:  </b> Adjusts mixing processes for specific formulations.</li>
          
        </ul>
       
      </div>
    </div>
  );
};

export default Facility8;
