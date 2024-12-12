

import React from "react";
import { motion } from "framer-motion"; // For animation
import Slider from "react-slick"; // Importing Slick Carousel
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS

import "./facilities.css"; // Your custom CSS

import Facility1 from "../../Images/facilities1.png";
import Facility2 from "../../Images/facilities2.png";
import Facility3 from "../../Images/facilities3.png";

const Inhouse = () => {
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
      {/* Title Section */}
      <h1
        
      >
        INHOUSE TESTING FACILITIES
      </h1>

      {/* Image Section */}
      <motion.div className="facilities-images" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Slider {...settings}>
          {/* Slider Images */}
          <div className="product-card">
          <h3>Burst Pressure Test Machine</h3>
            <img src={Facility1} alt="Burst Pressure" />
           
          </div>
          <div className="product-card">
          <h3>Heating Ovens</h3>
            <img src={Facility2} alt="Heating Ovens" />
            
          </div>
          <div className="product-card">
          <h3>UTM - Universal Testing Machine</h3>
            <img src={Facility3} alt="UTM" />
            
          </div>
        </Slider>
      </motion.div>

      {/* Information Section */}
      <div className="facilities-info">
        <p
          
        >
          Quality has always been the cornerstone of our continued excellence and superior customer value.
          To ensure that we put-to-work multiple sophisticated equipment's such as:
        </p>
        <ul>
          <li
            
          >
            Moving Die Rheometer (MDR) used for testing rubber property, vulcanization characteristics.
          </li>
          <li
            
          >
            Burst Pressure Test Machine (Horizontal) with Hydraulic testing facility up to 150 bar pressure
            with temperature up to 90°C for Hydraulic testing.
          </li>
          <li
            
          >
            Ozone Test Chamber
          </li>
          <li
            
          >
            UTM -Tensile machine load 200kg to 5000kg
          </li>
          <li
            
          >
            Heating Ovens – Temp. up to 400°C
          </li>
          <li
            
          >
            Muffle Furnace – Temp. up to 1200°C
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Inhouse;
