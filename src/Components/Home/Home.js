

import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";


import "./Home.css";

import logo1 from "../../Images/client1.png"; 
import logo2 from "../../Images/client2.jpg";
import logo3 from "../../Images/client3.png";
import logo4 from "../../Images/client4.jpg";
import logo5 from "../../Images/client5.png";
import logo6 from "../../Images/client6.png";
import logo7 from "../../Images/client7.png";
// Import the video file
import rubberWorld from "../../video/rubber-world.mp4";
import ProductionNarrat from "../../video/production2.mp4";
 

import Silicon from "../../Images/Silicon.png"
import Turbocharger from "../../Images/Turbo-charger.png";
import Marine from "../../Images/Marine-wet.png";
import EPDM from "../../Images/EPDM-rubber.png";
import Organic from "../../Images/organic-rubber.png";
import Assembly from "../../Images/Assembly-rubber.png";
import Wired from "../../Images/wired-reinforced.png";
import FuelTube from "../../Images/Fuel-Tubes.png";
import Moulded from "../../Images/Moulded.png";

// Application Area Images
import Img1 from "../../Images/Image1.png";
import Img2 from "../../Images/image2.jpg";
import Img3 from "../../Images/Image3.jpg";
import Img4 from "../../Images/Image4.png";
import Img5 from "../../Images/Image5.jpg";
import Img6 from "../../Images/Image6.jpg";

function Home() {

 

  const buttons = [
    { label: "Vehicle", img: Img1 },
     { label: "Marine", img: Img2 },
     { label: "Automobile", img: Img3 },
     { label: "Construction", img: Img4 },
     { label: "Industrial", img: Img5 },
   { label: "Agriculture", img: Img6 },
   ];

  // // State to track the selected image
   const [selectedImage, setSelectedImage] = useState(buttons[0].img);

  return (
    <div className="home">
     <div className="video-container">
     
      <video className="production-video" src={ProductionNarrat} type="video/mp4" controls autoPlay muted loop>
        Your browser does not support the video tag.
      </video>
    </div>
     

      {/* About Section */}

      <div className="about-us-title">
    <h1>About Us</h1>
  </div>
      <div className="about-us-container">
  {/* Title Section */}
  

  {/* Content Section */}
  <div className="about-us-content">
    {/* Info Section */}
    
    <div className="about-us-info">
      <p>
      For over two decades, Sheetal Rubber Products has been a trusted leader in the
manufacturing of high-quality rubber products with 50,000 sq. ft. of manufacturing
facility.
      </p>
      <p>
      We specialize in manufacturing a full range of low-pressure hoses, including
      platinum silicone-lined, FMK-lined fuel cell hoses, flame-retardant hoses, and various
      moulded components.
      </p>
      <p>
      Our commitment to product expertise, engineering excellence,
      rigorous testing, and strict quality controls has established us as a preferred partner for
      major manufacturers in India and a favored exporter internationally.
      </p>
      <p>
        <ul>
          <li>Committed towards continual improvement, quality control and customer
          satisfaction.</li>
          <li>Believes in the concept of Total Quality Management.</li>
          <li>Fully fledged traceability system (Raw material to Finished goods).</li>
          <li> 
          All Raw Materials are tested, before being used, based on their Quality Policy.</li>
        </ul>


      </p>

      <button className="read-more"  >
              <Link to="/about">Read More</Link>
            </button>
    </div>

    {/* Video Section */}
    <div className="about-us-video">
      <video controls className="about-us-video-element">
        <source src={rubberWorld} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>

{/* products */}
<div className="our-products">
  <h1>Our Products</h1>
  <div className="products-gallery">
    <div className="product-card">
      <img src={Silicon} alt="Silicon-Polyester Hoses" className="product-images" />
      <Link to="/siliconpolyester"> <h3>Silicon-Polyester Hoses</h3></Link>
     
    </div>
    <div className="product-card">
      <img src={Turbocharger} alt="Turbocharger & CAC Hoses" className="product-images"/>
      <Link to="/turbochargerhose"><h3>Turbocharger & CAC Hoses</h3></Link>
      
    </div>
    <div className="product-card">
      <img src={Marine} alt="Marine Wet Exhaust Hoses" className="product-images"/>
      <Link to="/marinewethose"> <h3>Marine Wet Exhaust Hoses</h3></Link>
     
    </div>
    <div className="product-card">
      <img src={EPDM} alt="EPDM Rubber Hoses" className="product-images" />
      <Link to="/epdm"> <h3>EPDM Rubber Hoses</h3></Link>
     
    </div>
   
    <div className="product-card">
      <img src={Organic} alt="Organic Rubber Hoses" className="product-images"/>
      <Link to="/organic"><h3>Organic Rubber Hoses</h3></Link>
      
    </div>

    <div className="product-card">
      <img src={Assembly} alt="Assembly Hoses" className="product-images"/>
      <Link to="/Assembly"> <h3>Assembly Hoses</h3></Link>
     
    </div>
    <div className="product-card">
      <img src={Wired} alt="Wire Reinforced Hoses" className="product-images"/>
      <Link to="/wired"><h3>Wire Reinforced Hoses</h3></Link>
      
    </div>
    <div className="product-card">
      <img src={FuelTube} alt="Fuel Tubes" className="product-images"/>
      <Link to="/fueltube"> <h3>Fuel Tubes</h3></Link>
     
    </div>
    </div>
    {/* <div className="product-card">
      <img src={Moulded} alt="Moulded Hoses" />
      <h3>Moulded Hoses</h3>
    </div> */}
  
</div>


{/* 
Trusted Client */}
<div className="trusted-world">
   <div className="trusted-content">
    
   <h1>
   TRUSTED BY THE WORLD'S LARGEST
   </h1>
 <p>Completely Dedicated to Success - Our dedicated team conducts thorough quality
checks at every stage, including incoming materials, in-process operations, and
outgoing products. Each batch of raw materials is inspected, and detailed records
are meticulously maintained.</p>

<p>
Stringent Performance Measurement - A completely dedicated in-house Testing
and Validation facility, equipped with sophisticated testing equipment’s.
Partnered with Top Companies - We are a regular certified supplier to
manufacturing companies like Tata Motors Ltd, Tata Toyo Radiators, Banco
Radiators, Kirloskar Oil Engine, EV Commercial Vehicles Ltd. and also exporting to
European.
Our latest change

 </p>
   </div>
 </div>
 
 <div className="logo-container">
  <h1>ESTIMATED ClIENTS</h1>
 <div className="logo-world">
    <img src={logo1} alt="Logo 1" className="logo-item" />
    <img src={logo2} alt="Logo 2" className="logo-item" />
    <img src={logo3} alt="Logo 3" className="logo-item" />
    <img src={logo4} alt="Logo 4" className="logo-item" />
    <img src={logo5} alt="Logo 5" className="logo-item" />
    <img src={logo6} alt="Logo 6" className="logo-item" />
    <img src={logo7} alt="Logo 7" className="logo-item" />
  
</div>

 </div>
{/* 
Application Area */}

<div className="application-area">
  <div className="application-head">
    <h1>OUR OFFERINGS</h1>
  </div>
      {/* <div className="button-container">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`app-button ${
              selectedImage === button.img ? "active" : ""
            }`}
            onClick={() => setSelectedImage(button.img)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="image-display">
        <img src={selectedImage} alt="Selected Application" />
      </div> */}
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

</div>



    </div>
  );
}

export default Home;
