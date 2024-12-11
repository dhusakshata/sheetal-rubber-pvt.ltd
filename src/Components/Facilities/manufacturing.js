
import React from "react";
import "./facilities.css";
import { motion } from "framer-motion"; // For animation

import Slider from "react-slick"; // Importing Slick Carousel
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS

import Facility4 from "../../Images/facility4.png"; // Replace with your image path
import Facility5 from "../../Images/facility5.png"; // Replace with your image path
import Facility6 from "../../Images/facility6.png"; // Replace with your image path

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
  };
  return (
    
    <div className="facilities-container">
       <motion.h1
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >MANUFACTURINF FACILITIES</motion.h1>

      {/* Image Section */}
     <motion.div className="facilities-images" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
       
     <Slider {...settings}>
     {/* Slider Images */}
    <div className="product-card">
      <img src={Facility4} alt="Burst pressure" />
      <h3>Cold Feed Extruder</h3>
    </div>
    <div className="product-card">
      <img src={Facility5} alt="heating ovens" />
      <h3>Auto Clave Vulcanizar
      (Quick Lock Type)</h3>
    </div>
    <div className="product-card">
      <img src={Facility6} alt="UTM" />
      <h3>Hydraulic Presses</h3>
    </div>
    </Slider>
    </motion.div>

      {/* Information Section */}
      <div className="facilities-info">
      <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
        To help our customers with high-performance products and a cost advantage, we continually strive to improve our manufacturing and business processes, such as:
        </motion.p>
        <ul>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.1 }}
  >
    Cold Feed Vended Extruders
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    Dual Head Extruders for Multi-Layer Extrusion
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    Outer: Neoprene (weather/abrasion resistant)
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration:1, delay: 0.4 }}
  >
    Hot Feed Extruders
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration:1, delay: 0.5 }}
  >
    Auto Clave Vulcanizer (Quick Lock Type)
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    Dispersion Kneader
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    3 Role Calendaring Machine
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration:1, delay: 0.8 }}
  >
    Compression Transfer Moulding
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    Hydraulic Presses
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
    Rubber Mixing Mills
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.1 }}
  >
    Knitting Machines
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.2 }}
  >
    Braiding Machines
  </motion.li>
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.3 }}
  >
    Other Conventional Machines
  </motion.li>
</ul>
      </div>
    </div>
    
  );
};

export default manufacturing;
