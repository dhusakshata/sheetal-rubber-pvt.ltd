


import React, { useEffect } from 'react';
import './SubFacility.css'; // Importing the CSS for styling
import HotFeed from "../../Images/hot-feed-rubber-extruder-machine-removebg-preview.png";
import ColdFeed from "../../Images/cold-feed.jpg";
import CoExtrusion from "../../Images/coextrusion.png";

const Facility1 = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.facility-header, .facility-paragraph, .facility-item, .facility-image, .facility-text');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible-black');
            entry.target.classList.add('image-visible'); // For images
          } else {
            entry.target.classList.remove('visible-black');
            entry.target.classList.remove('image-visible'); // For images
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
  
    elements.forEach((element) => observer.observe(element));
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <div className="facility-container">
      <header className="facility-header">
        <h1>Hot Feed, Cold Feed & Co-Extrusion Extruders</h1>
      </header>
      <p className="facility-paragraph">
        We utilize both hot feed and cold feed extruders, along with co-extrusion technology, 
        to manufacture a variety of rubber products with precision and efficiency. Hot feed 
        extruders allow for better control of material flow and temperature, while cold feed 
        extruders are ideal for processing various rubber compounds. Co-extrusion enables the 
        production of multi-layered hoses, combining different materials for enhanced performance 
        and durability.
      </p>
      <div className="facility-content">
        <div className="facility-item">
          <div className="facility-image">
            <img src={HotFeed} alt="Hot Feed Extruder" />
          </div>
          <div className="facility-text">
            <h2>Hot Feed Extruder:</h2>
            <ul>
              <li>A hot feed extruder for rubber hoses shapes rubber into hoses by feeding heated rubber through a die.</li>
              <li>The extruder applies controlled heat and pressure to maintain consistent quality and dimensions.</li>
              <li>This process ensures the rubber is molded to the desired shape with properties like flexibility and durability.</li>
              <li>It is optimized for continuous production of large volumes.</li>
            </ul>
          </div>
        </div>
        <div className="facility-item">
          <div className="facility-image">
            <img src={ColdFeed} alt="Cold Feed Extruder" />
          </div>
          <div className="facility-text">
            <h2>Cold Feed Extruder:</h2>
            <ul>
              <li>Processes rubber compounds at ambient or slightly elevated temperatures without pre-heating, offering versatility in handling various compounds and profiles.</li>
              <li>The flexibility of the system allows it to handle different materials and complex shapes.</li>
              <li>It is more energy-efficient than hot feed extruders, as no external pre-heating is required.</li>
              <li>Better temperature control reduces scorching and improves the overall quality of the product.</li>
              <li>It minimizes downtime by enabling faster product changes without the need for pre-heating.</li>
            </ul>
          </div>
        </div>
        <div className="facility-item">
          <div className="facility-image">
            <img src={CoExtrusion} alt="Co-Extrusion Extruder" />
          </div>
          <div className="facility-text">
            <h2>Co-Extrusion Extruder:</h2>
            <ul>
              <li>Simultaneously extrudes multiple layers of rubber or different materials to create complex profiles with varying properties in different sections.</li>
              <li><b>Multi-Extruder System:</b> Two or more extruders feed different materials into a single die.</li>
              <li><b>Layering:</b> Materials with different properties (hardness, color, composition) are extruded together to form a multi-layered or multi-component product.</li>
              <li><b>Versatility:</b> Custom solutions for advanced performance characteristics in products.</li>
              <li><b>Cost-Effective:</b> Single-step process for producing multi-layer products, reducing manufacturing complexity.</li>
              <li><b>Industry Use:</b> Popular in automotive, construction, and manufacturing for creating durable and functional multi-layered rubber products.</li>
              <li>Allows integration of different rubber compounds or materials into one profile.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility1;
