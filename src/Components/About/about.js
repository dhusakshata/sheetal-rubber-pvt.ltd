
import React from "react";
import Building from "../../Images/building2.jpeg";
import "./about.css"; // Import styles

function about() {
  return (
    <div className="about-section">
  
<div className="about-head">
  <h1> ABOUT US</h1>
</div>
      {/* Content Section */}

      <div className="about-content">
        {/* Text Content */}
        <div className="about-info">
          
        <p>
        For over two decades, Sheetal Rubber Products has been a trusted leader in the manufacturing of high-quality rubber products with 50,000 sq. ft. of manufacturing facility. We specialize in manufacturing a full range of low-pressure hoses, including platinum silicone-lined, FMK-lined fuel cell hoses, flame-retardant hoses, and various moulded components. Our commitment to product expertise, engineering excellence, rigorous testing, and strict quality controls has established us as a preferred partner for major manufacturers in India and a favored exporter internationally. 
      </p>
      
      <ul
          >
          <li>Committed towards continual improvement, quality control and customer
          satisfaction.</li>
          <li>Believes in the concept of Total Quality Management.</li>
          <li>Fully fledged traceability system (Raw material to Finished goods).</li>
          <li> 
          All Raw Materials are tested, before being used, based on their Quality Policy.</li>
        </ul>
        </div>

        {/* Image with Animation */}
        <div className="about-image">
          <img src={Building} alt="About Sheetal Rubber" className="building-image" />
        </div>

      </div>

<div className="misson-vision">

<div className="Mission">

<h2>OUR MISSION</h2>
<hr></hr>
<p>
To become the leading manufacturer of elastomeric products supplying to world’s prominent industries, aspiring to be the “preferred OEM” to all Tire I and II suppliers, committing to superior service and high quality.
</p>
</div>
<div className="vision">
<h2>OUR VISION</h2>
<hr></hr>
    <p>
    • To be the “Manufacturer of choice”, delivering superior customer value, embracing our technology – leadership and commitment to quality.
    </p>
    <p>
    •	To respect team members as instrumental part of organization’s growth, ensuring their active involvement and continuous progress. 
    </p>
    <p>
    •	To respect team members as instrumental part of organization’s growth, ensuring their active involvement and continuous progress. 
    </p>
    </div>
</div>
      </div>
     
    
  );
}

export default about;
