
import React from "react";
import "./facilities.css";
import { motion } from "framer-motion"; // For animation
import { Link } from "react-router-dom"
import Slider from "react-slick"; // Importing Slick Carousel
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS

import Facility4 from "../../Images/hot-feed-rubber-extruder-machine-removebg-preview.png"; 
import Facility5 from "../../Images/coextrusion.png"; 
import Facility6 from "../../Images/cold-feed.jpg"; 
import Facility7 from "../../Images/Auto-clave-vulcanizer.jpeg"; 
import Facility8 from "../../Images/25-litres-rubber-dispersion-kneader-machine-250x250.jpg"; 
import Facility9 from "../../Images/stock blender.jpg"; 

import Facility10 from "../../Images/3 role.jpeg"; 
import Facility11 from "../../Images/Compression Molding.jpg"; 
import Facility12 from "../../Images/uni-drive-rubber-mixing-mill-12x30-removebg-preview-1.webp"; 
import Facility13 from "../../Images/knitting2.png"; 
import Facility14 from "../../Images/braiding-machine__1_-removebg-preview.png"; 

const manufacturing = () => {
  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of images shown at once
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 1000, // Slide every 2 seconds
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 1 }, // 3 images in a row for larger screens
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 }, // 2 images in a row for medium screens
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }, // 1 image in a row for smaller screens
      },
    ],
    prevArrow: <div className="custom-prev-arrow"></div>,  // Custom left arrow
    nextArrow: <div className="custom-next-arrow"></div>,  // Custom right arrow
  };
  return (
    
    <div className="facilities-container">
       {/* Title Section */}
           <motion.div className="facility-head"
           initial={{ opacity: 0, y: -100 }} // Start position (top)
           animate={{ opacity: 1, y: 0 }}    // End position (normal)
           transition={{ duration: 1 }}      // Duration of animation
           >
       <h1
      >MANUFACTURING FACILITIES</h1>
</motion.div>
{/* <hr className="facility-hr"/> */}
      {/* Image Section */}
    

      <motion.div
  className="facilities-images"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <Slider {...settings}>
    {/* Slider Images with Links */}
    <Link to="/hot-cold-feed" className="products-card">
      <h3>Hot Feed Extruder</h3>
      <img src={Facility4} alt="Burst pressure" />
    </Link>
    <Link to="/hot-cold-feed" className="products-card">
      <h3>Co-Extrusion Extruder</h3>
      <img src={Facility5} alt="heating ovens" />
    </Link>
    <Link to="/hot-cold-feed" className="products-card">
      <h3>Cold Feed Extruder</h3>
      <img src={Facility6} alt="UTM" />
    </Link>
    <Link to="/Auto-clave-vulcanizer" className="products-card">
      <h3>Auto-Clave-Vulcanizer</h3>
      <img src={Facility7} alt="UTM" />
    </Link>
    <Link to="/Dispersion-kneader" className="products-card">
      <h3>Dispersion-Kneader</h3>
      <img src={Facility8} alt="UTM" />
    </Link>
    <Link to="/Dispersion-kneader" className="products-card">
      <h3>Stock Blender</h3>
      <img src={Facility9} alt="UTM" />
    </Link>
    <Link to="/3-role-calendaring-machine" className="products-card">
      <h3>3 Role Calendaring Machine</h3>
      <img src={Facility10} alt="UTM" />
    </Link>
    <Link to="/Compression-transfer-molding" className="products-card">
      <h3>Compression Moulding</h3>
      <img src={Facility11} alt="UTM" />
    </Link>
    <Link to="/Rubber-mixing-mill" className="products-card">
      <h3>Rubber Mixing Mill</h3>
      <img src={Facility12} alt="UTM" />
    </Link>
    <Link to="/Knitting-machine" className="products-card">
      <h3>Knitting Machine</h3>
      <img src={Facility13} alt="UTM" />
    </Link>
    <Link to="/Braiding-Machines" className="products-card">
      <h3>Braiding Machine</h3>
      <img src={Facility14} alt="UTM" />
    </Link>
  </Slider>
</motion.div>
      {/* Information Section */}
      <div className="facilities-info">
      <p 
        >
        To help our customers with high-performance products and a cost advantage, we continually strive to improve our manufacturing and business processes, such as:
        </p>
        <ul>
  <li
    
  >
    Cold Feed Vended Extruders
  </li>
 
  <li
    
  >
    Outer: Neoprene (weather/abrasion resistant)
  </li>
  <li
    
  >
    Hot Feed Extruders
  </li>
  <li
   
  >
    Auto Clave Vulcanizer (Quick Lock Type)
  </li>
  <li
    
  >
    Dispersion Kneader
  </li>
  <li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    3 Role Calendaring Machine
  </li>
  <li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration:1, delay: 0.8 }}
  >
    Compression Transfer Moulding
  </li>
 
  <li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
    Rubber Mixing Mills
  </li>
  <li
    
  >
    Knitting Machines
  </li>
  <li
  >
    Braiding Machines
  </li>
  <li
    
  >
    Other Conventional Machines
  </li>
</ul>
      </div>
    </div>
    
  );
};

export default manufacturing;
