
import React,{useEffect,useRef,useState} from "react";

import Building from "../../Images/building3.jpeg";

import "./about.css"; // Import styles



function About() {

const handleScrollAbout = () => {
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
};

// Scroll-triggered animations for the Mission/Vision section
const handleScrollMissionVision = () => {
  const elements = document.querySelectorAll(".animate-bounce");
  elements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      setTimeout(() => {
        element.classList.add("visible");
      }, index * 700); // Delay based on index
    } else {
      element.classList.remove("visible");
    }
  });
};

useEffect(() => {
  // Add scroll event listeners
  const handleScroll = () => {
    handleScrollAbout();
    handleScrollMissionVision();
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger animations on component load

  return () => window.removeEventListener("scroll", handleScroll); // Clean up event listeners
}, []);

  return (
    <div className="about-section">
  
<div className="about-heads">
  <h1> ABOUT US</h1>
</div>
      {/* Content Section */}

      <div className="about-content">

         {/* Image with Animation */}
         <div className="about-image animate-on-scroll slide-in-left ">
          <img src={Building} alt="About Sheetal Rubber" className="building-image"
           
          />
        </div>
        {/* Text Content */}
        <div className="about-info animate-on-scroll slide-in-right " >
          <h6>WHEN QUALITY & RELIABILITY IS  VITAL , SHEETAL RUBBER PRODUCTS (P) LTD. IS YOUR BEST CHOICE.</h6>
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

       

      </div>

<div className="misson-vision ">



<div className="Mission   animate-bounce" >
<h2>OUR MISSION</h2>
<hr></hr>
<p>
To become the leading manufacturer of elastomeric products supplying to world’s prominent industries, aspiring to be the “preferred OEM” to all Tire I and II suppliers, committing to superior service and high quality
</p>
</div>

<div  className="vision animate-bounce" >

<h2>OUR VISION</h2>
<hr></hr>
    <p>
    • To be the “Manufacturer of choice”, delivering superior customer value, embracing our technology – leadership and commitment to quality.
    </p>
    <p>
    •	To respect team members as instrumental part of organization’s growth, ensuring their active involvement and continuous progress. 
    </p>
    <p>
    •	Firmly practice environmental friendly processes reflecting our strong belief to optimally contribute to society, promoting development of our country.
he vision aahe 3 points
    </p>
</div>
    </div>
</div>
     
     
    
  );
}

export default About;
