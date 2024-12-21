
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';
import Knitting from "../../Images/knitting2.png";

const Facility9 = () => {
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
    useEffect(() => {
      const images = document.querySelectorAll(".facility-image img");
  
      // Intersection Observer to detect when images come into the viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("image-visible");  // Add the visible class to trigger the animation
            }
          });
        },
        { threshold: 0.5 }  // Trigger when 50% of the image is visible in the viewport
      );
  
      images.forEach((image) => observer.observe(image));  // Observe each image
  
      return () => observer.disconnect();  // Clean up observer on component unmount
    }, []);
  
  return (
    <div className="facility-containers">
      <div className="facility-header">
        <h1>Knitting Machines</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        Our production line includes advanced Knitting Machines that play a crucial role in the production of knitted rubber components. These machines utilize precise knitting techniques to create strong and flexible rubber fabrics, ensuring consistent quality and durability. The ability to knit various patterns and thicknesses allows for customization based on specific product requirements. By streamlining the knitting process, our machines enhance production efficiency while maintaining high standards in the final rubber products, meeting the diverse needs of our customers.
        </p>
        <div className="facility-image">
          <img src={Knitting} alt="Facility 1" />
        </div>
      </div>

      <div className="facility-content9">
      <h2>Knitting Machines Overview</h2>
<p><b>Purpose: </b>
Produce knitted rubber fabrics for automotive, industrial, and consumer products.
</p>


         <h4>Advantages:</h4>
        <ul>
        <li><b>Customization: </b> Diverse patterns, thicknesses, and densities.</li>
          <li><b>Flexibility:  </b> Excellent stretch and recovery.</li>
          <li><b>Strength:</b>Superior tensile strength.</li>
         
          <li><b>Efficiency:</b> High-speed operation for faster production.
          </li>
        </ul>

      
            
        <h4>Benefits:</h4>
        <ul>
          <li><b>High Quality: </b>Ensures stringent standards.
          </li>
          <li><b>Efficiency:</b>Rapid production.</li>
          <li><b>Innovation:  </b>  Supports unique product development.</li>
          
        </ul>
       

   
      </div>
    </div>
  );
};

export default Facility9;
