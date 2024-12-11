// import React from "react";
// import { motion } from "framer-motion";


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules"; // Correct way to import Navigation
// import "swiper/css";
// import "swiper/css/navigation";
// import { Pagination } from 'swiper'

// import Slider from "react-slick"; 
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import "./facilities.css";

// import Facility1 from "../../Images/facilities1.png";
// import Facility2 from "../../Images/facilities2.png";
// import Facility3 from "../../Images/facilities3.png";

// const inhouse = () => {
//   // for sliding product images
//   const settings= {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Number of products in one row
//     slidesToScroll: 1,
//     autoplay: true, // Enable automatic sliding
//   autoplaySpeed: 1000, // Slide every 3 seconds
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 992,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };
//   return (

//     <div className="facilities-container">
//       <h1>INHOUSE TESTING FACILITIE</h1>
//       {/* Image Section */}
//       <div className="facilities-images">
      
//          <div className="products-gallery">
//          <Slider {...settings}>
//     <div className="product-card">
//       <img src={Facility1} alt="Burst pressure" />
//       <h3>Burst Pressure Test Machine</h3>
//     </div>
//     <div className="product-card">
//       <img src={Facility2} alt="heating ovens" />
//       <h3>Heating Ovens</h3>
//     </div>
//     <div className="product-card">
//       <img src={Facility3} alt="UTM" />
//       <h3>UTM - Universal Testing Machine</h3>
//     </div>
//     </Slider>
      
//       </div>

//            {/* Information Section */}
//       <div className="facilities-info">
//           <p>
//           Quality has always been the cornerstone of our
// continued excellence and superior customer value, and
// to ensure that we put-to-work multiple sophisticated
// equipment's which we have such as:
//             <div>
//               <ul>
//                 <li>Moving Die Rheometer (MDR) used for testing
//                 rubber property, vulcanization characteristics.</li>
//                 <li>Burst Pressure Test Machine (Horizontal) with
// Hydraulic testing facility up to 150 bar pressure with
// temperature up to 90°C of water for Hydraulic
// testing
// </li>
//                 <li>Ozone Test Chamber</li>
//                 <li>UTM -Tensile machine load 200kg to 5000kg</li>
//                 <li>Heating Ovens – Temp. up to 400°C</li>
//                 <li>Muffle Furnace – Temp. up to 1200°C
//                 </li>
                
//               </ul>
//             </div>
//           </p>
//         </div>
//       </div>
//       </div>
    
//   );
// };

// export default inhouse;

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
      <motion.h1
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        INHOUSE TESTING FACILITIES
      </motion.h1>

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
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Quality has always been the cornerstone of our continued excellence and superior customer value.
          To ensure that we put-to-work multiple sophisticated equipment's such as:
        </motion.p>
        <ul>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Moving Die Rheometer (MDR) used for testing rubber property, vulcanization characteristics.
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Burst Pressure Test Machine (Horizontal) with Hydraulic testing facility up to 150 bar pressure
            with temperature up to 90°C for Hydraulic testing.
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Ozone Test Chamber
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            UTM -Tensile machine load 200kg to 5000kg
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Heating Ovens – Temp. up to 400°C
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Muffle Furnace – Temp. up to 1200°C
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Inhouse;
