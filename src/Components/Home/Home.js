
import React,{ useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";



import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules"; // Correct way to import Navigation
import "swiper/css";
import "swiper/css/navigation";


import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.css";

import logo1 from "../../Images/client1.png"; 
import logo2 from "../../Images/client2.jpg";
import logo3 from "../../Images/client3.png";
import logo4 from "../../Images/client4.jpg";
import logo5 from "../../Images/client5.png";
import logo6 from "../../Images/client6.png";
import logo7 from "../../Images/client7.png";
// Import the video file
import rubberWorld from "../../video/about1.mp4";
import ProductionNarrat from "../../video/production7.mp4";
 

import Silicon from "../../Images/Silicon1.png"
import Turbocharger from "../../Images/Turbo-charger1.png";
import Marine from "../../Images/Marine-wet1.png";
import EPDM from "../../Images/EPDM-rubber1.png";
import Organic from "../../Images/organic-rubber1.png";
import Assembly from "../../Images/Assembly-rubber1.png";
import Wired from "../../Images/wired-reinforced1.png";
import FuelTube from "../../Images/Fuel-Tubes1.png";
import Moulded from "../../Images/Moulded1.png";


// Application Area Images
import Img1 from "../../Images/Truck.png";
import Img2 from "../../Images/marine.jpeg";
import Img3 from "../../Images/Image3.jpg";
import Img4 from "../../Images/Image4.png";
import Img5 from "../../Images/Image5.jpg";
import Img6 from "../../Images/Image6.jpg";

function Home() {
  
 // Array of imported images
 const images = [Img1, Img2, Img3, Img4, Img5, Img6];

 const [currentIndex, setCurrentIndex] = useState(0);

 // Automatically switch images every 3 seconds
 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentIndex((prevIndex) =>
       prevIndex === images.length - 1 ? 0 : prevIndex + 1
     );
   }, 3000); // Change slide every 3 seconds

   return () => clearInterval(interval); // Cleanup on component unmount
 }, [images.length]);

 
 
   const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

   // for sliding product images
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of products in one row
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
  autoplaySpeed: 1000, // Slide every 3 seconds
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
    prevArrow: <div className="custom-prev-arrow"></div>,  // Custom left arrow
    nextArrow: <div className="custom-next-arrow"></div>,  // Custom right arrow
  };


const aboutUsRef = useRef(null);

// Set up the Intersection Observer
useEffect(() => {
  const options = {
    root: null, // Observing relative to the viewport
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 50% of the element is in view
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const textElement = entry.target.querySelector('.about-us-info');
      const videoElement = entry.target.querySelector('.about-us-video');
      const headingElement = entry.target.querySelector('.about-us-title h1');

     
      if (entry.isIntersecting) {
        textElement.classList.add('in-view');
        videoElement.classList.add('in-view');
        headingElement.classList.add('in-view');
        
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  if (aboutUsRef.current) {
    observer.observe(aboutUsRef.current);
  }

  return () => {
    if (aboutUsRef.current) {
      observer.unobserve(aboutUsRef.current);
    }
  };
}, []);
//for product section annimation
useEffect(() => {
  const handleScroll = () => {
    const elements = document.querySelectorAll(".animate-slide-top");
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        element.classList.add("visible"); // Trigger animation when visible
      } else {
        element.classList.remove("visible"); // Remove animation when out of view
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger animation on component load
  return () => window.removeEventListener("scroll", handleScroll); // Clean up event listener
}, []);


  return (
    <div className="home">
  <section className="video-container">
    <video className="production-video" src={ProductionNarrat} autoPlay muted loop
    preload="auto" 
    ></video>
  </section>

  <section className="about-us-container"ref={aboutUsRef}>
    <div className="about-us-title">
      <h1>ABOUT US</h1>
    </div>
    <div className="about-us-content">
      <div className="about-us-info">
      <p>
      Welcome to Sheetal Rubber Products, where innovation meets quality in the manufacturing of rubber solutions. Established with a vision to provide superior rubber products, we specialize in a wide range of offerings, including  moulded hoses, silicone hoses, fuel tubes, assembly hoses, and wire-reinforced hoses.
      </p>
      <p    
            >Our commitment to excellence is reflected in our state-of-the-art manufacturing processes and rigorous quality control measures. 
      </p>
      <p  
            >
   With years of experience in the industry, our team of skilled professionals is dedicated to delivering customized solutions tailored to meet the specific needs of our clients. We take pride in our ability to understand client requirements and provide innovative products that enhance efficiency and reliability.
      </p>
   
    <p>
    At Sheetal Rubber Products, customer satisfaction is our top priority. We believe in building long-term relationships with our clients by offering exceptional service, timely delivery, and continuous support.
    </p>


        <button className="read-more">
          <Link to="/about">Read More</Link>
        </button>
      </div>
      <div className="about-us-video">
  <video className="about-us-video-element" autoPlay muted loop>
    <source src={rubberWorld} type="video/mp4" />
  </video>
</div>

    </div>
  </section>

{/* Product Section */}
 <div className="our-products">
     <div className="product-h1 animate-slide-top"> <h1>OUR PRODUCTS</h1></div>
<div className="product-info animate-slide-top">
  <p >
  At Sheetal Rubber Products, we specialize in a comprehensive range of high-performance rubber solutions, including <b> Silicone Polyester Hoses,Turbocharger Hoses,Marin Wet Exhaust Hoses,EPDM Rubber Hoses,Organic Rubber Hoses,Assembly Hoses,Wire Reinforced Hoses,Fuel Hoses,Moulded Hoses .</b> Each product is meticulously crafted to ensure superior durability, flexibility, and resistance, catering to diverse industrial and automotive applications. Our commitment to quality and precision engineering ensures reliable performance, even in the most demanding environments.

  </p>
</div>

      
      <Slider {...settings}>
        <div className="product-cards">
          <Link to="/siliconpolyester">
            <img src={Silicon} alt="Silicon-Polyester Hoses" className="product-images" />
            <h3>Silicone-Polyester Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/turbochargerhose">
            <img src={Turbocharger} alt="Turbocharger & CAC Hoses" className="product-images" />
            <h3>Turbocharger & CAC Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/marinewethose">
            <img src={Marine} alt="Marine Wet Exhaust Hoses" className="product-images" />
            <h3>Marine Wet Exhaust Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/epdm">
            <img src={EPDM} alt="EPDM Rubber Hoses" className="product-images"
            />
            <h3>EPDM Rubber Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/organic">
            <img src={Organic} alt="Organic Rubber Hoses" className="product-images" />
            <h3>Organic Rubber Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/assembly">
            <img src={Assembly} alt="Assembly Hoses" className="product-images" />
            <h3>Assembly Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/wired">
            <img src={Wired} alt="Wire Reinforced Hoses" className="product-images" 
            
            />
            <h3>Wire Reinforced Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/fueltube">
            <img src={FuelTube} alt="Fuel Tubes" className="product-images" />
            <h3>Fuel Tubes</h3>
          </Link>
        </div>
        <div className="product-cards">
  <Link to="/moulded">
    <img src={Moulded} alt="Moulded Hoses" className="product-images" />
    <h3>Moulded Hoses</h3>
  </Link>
</div>

      </Slider>
    </div>

{/* Logo container */}
<div className="logo-container ">
      <div className="logo-title animate-slide-top"><h1>ESTEEMED CLIENTS</h1></div>
      <Swiper
        modules={[Navigation,Autoplay]}
        slidesPerView={5}
        spaceBetween={5}
        navigation={true}
        pagination={{ clickable: true }} // Enable pagination
       autoplay={{
             delay: 1000, // Slide every 2 seconds
             disableOnInteraction: false, // Prevent autoplay from pausing on user interaction
           }}

        loop={true}

      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="logo-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
 
{/* 
Application Area */}
{/* 
<div className="application-area">
  <div className="application-head animate-slide-top">
    <h1>OUR APPLICATIONS</h1>
  </div>
      
      <div className="button-container">
  {buttons.map((button, index) => (
    <button
      key={index}
      className={`app-button ${
        selectedImage === button.img ? "active" : ""
      }`}
      onClick={() => setSelectedImage(button.img)} // Update image on click
      onMouseEnter={() => setSelectedImage(button.img)} // Update image on hover
    >
      {button.label}
    </button>
  ))}
</div>
<div className="image-display">
  <img src={selectedImage} alt="Selected Application" />
</div>

</div> */}
{/* 
<div className="slideshow-container">
<div className="application-head animate-slide-top">
    <h1>OUR APPLICATIONS</h1>
  </div>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div> */}
<div className="slideshow-container">
  <div className="application-head animate-slide-top">
    <h1>APPLICATIONS</h1>
  </div>
  <div className="slideshow-wrapper">
    <img
      src={images[currentIndex]}
      alt={`Slide ${currentIndex + 1}`}
      className="slideshow-image"
    />
    <div className="slideshow-dots">
      {images.map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentIndex ? "active" : ""}`}
        ></span>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;
