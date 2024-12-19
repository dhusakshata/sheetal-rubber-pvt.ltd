// import React, { useEffect, useRef } from "react";
// import "./subfacility3.css";
// import Autoclave from "../../Images/Auto-clave-vulcanizer.jpeg";
// import AOS from "aos";
// import "aos/dist/aos.css";
// const Facility3 = () => {
  
//     // Initialize AOS
//     useEffect(() => {
//       AOS.init({
//         duration: 1000,  // Animation duration
//         offset: 100,     // Trigger point from the top
//         once: false,     // Animates every time you scroll
//         mirror: true,    // Reverse animation when scrolling up
//       });
//       AOS.refresh(); // Refresh animations to sync with dynamic content
//     }, []);
//   return (
//     <div className="facility-container3">
//       <div className="facility-header3">
//         <h1>Auto Clave Vulcanizer (Quick Lock Type)</h1>
//       </div>

//       <div className="facility-paragraph3">
//         <div className="facility-image3" data-aos="fade-right">
//           <img src={Autoclave} alt="Auto Clave Vulcanizer" />
//         </div>
//         <div className='paraof3' data-aos="fade-left">
//         <p>
//           Our production line features Auto Clave Vulcanizers (Quick Lock Type), designed for precise and efficient vulcanization of rubber products. These advanced vulcanizers utilize high pressure and heat to cure rubber compounds, ensuring optimal strength, elasticity, and durability in the finished products. The Quick Lock mechanism enables fast and secure loading and unloading of materials, significantly reducing cycle times while maintaining stringent quality control.
//         </p>
//         </div>
//       </div>

//       <div className="facility-content3 contents">
//         <h2>Auto Clave Vulcanizer (Quick Lock Type) Overview:</h2>
//         <div className="info-boxe3 ">

//           <h4>Purpose:</h4>
//           <p>
//             Vulcanizes rubber products using heat and pressure to enhance strength, elasticity, and durability.
//           </p>
      
//           <h4>Quick Lock Mechanism:</h4>
//           <p>
//             Enables fast and secure loading/unloading, reducing cycle times and increasing efficiency.
//           </p>
        
//           </div>

//         <div className="info-boxe3">
//           <h4>Advantages:</h4>
//           <ul>
//             <li><b>Efficiency:</b> Quick Lock system shortens setup time, increasing productivity.</li>
//             <li><b>Precise Control:</b> Ensures uniform curing for consistent product quality.</li>
//             <li><b>Versatility:</b> Suitable for a variety of rubber products.</li>
//           </ul>
//         </div>

//         <div className="info-boxe3">
//           <h4>Applications:</h4>
//           <ul>
//             <li><b>Hoses:</b> Improves flexibility and resistance to extreme conditions.</li>
//             <li><b>Seals & Gaskets:</b> Enhances durability for automotive and industrial applications.</li>
//             <li><b>Tires & Conveyor Belts:</b> Strengthens products while maintaining flexibility.</li>
//           </ul>
//         </div>

//         <div className="info-boxe3">
//           <h4>Production Process:</h4>
//           <ul>
//             <li><b>Loading:</b> Quick Lock mechanism seals products in the autoclave.</li>
//             <li><b>Curing:</b> Rubber is vulcanized under heat and pressure.</li>
//             <li><b>Unloading:</b> Quick release for fast cooling and processing.</li>
//           </ul>
//         </div>

//         <div className="info-boxe3">
//           <h4>Benefits:</h4>
//           <ul>
//             <li><b>Higher Throughput:</b> Faster cycles boost production output.</li>
//             <li><b>Energy Efficiency:</b> Lowers energy consumption per batch.</li>
//             <li><b>Consistent Quality:</b> Ensures reliable performance of finished products.</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Facility3;

import React, { useState, useEffect } from "react";
import "./subfacility3.css";
import Autoclave from "../../Images/Auto-clave-vulcanizer.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Facility3 = () => {
  // State for managing the modal and full-screen image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Function to open the modal with the clicked image
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      offset: 100,     // Trigger point from the top
      once: false,     // Animates every time you scroll
      mirror: true,    // Reverse animation when scrolling up
    });
    AOS.refresh(); // Refresh animations to sync with dynamic content
  }, []);

  return (
    <div className="facility-container3">
      <div className="facility-header3">
        <h1>Auto Clave Vulcanizer (Quick Lock Type)</h1>
      </div>

      <div className="facility-paragraph3">
        <div 
          className="facility-image3" 
          data-aos="fade-right" 
          onClick={() => openModal(Autoclave)}
        >
          <img src={Autoclave} alt="Auto Clave Vulcanizer" />
        </div>
        <div className="paraof3" data-aos="fade-left">
          <p>
            Our production line features Auto Clave Vulcanizers (Quick Lock Type), designed for precise and efficient vulcanization of rubber products. These advanced vulcanizers utilize high pressure and heat to cure rubber compounds, ensuring optimal strength, elasticity, and durability in the finished products. The Quick Lock mechanism enables fast and secure loading and unloading of materials, significantly reducing cycle times while maintaining stringent quality control.
          </p>
        </div>
      </div>

      <div className="facility-content3 contents">
        <h2>Auto Clave Vulcanizer (Quick Lock Type) Overview:</h2>
        <div className="info-boxe3">
          <h4>Purpose:</h4>
          <p>
            Vulcanizes rubber products using heat and pressure to enhance strength, elasticity, and durability.
          </p>

          <h4>Quick Lock Mechanism:</h4>
          <p>
            Enables fast and secure loading/unloading, reducing cycle times and increasing efficiency.
          </p>
        </div>

        <div className="info-boxe3">
          <h4>Advantages:</h4>
          <ul>
            <li><b>Efficiency:</b> Quick Lock system shortens setup time, increasing productivity.</li>
            <li><b>Precise Control:</b> Ensures uniform curing for consistent product quality.</li>
            <li><b>Versatility:</b> Suitable for a variety of rubber products.</li>
          </ul>
        </div>

        <div className="info-boxe3">
          <h4>Applications:</h4>
          <ul>
            <li><b>Hoses:</b> Improves flexibility and resistance to extreme conditions.</li>
            <li><b>Seals & Gaskets:</b> Enhances durability for automotive and industrial applications.</li>
            <li><b>Tires & Conveyor Belts:</b> Strengthens products while maintaining flexibility.</li>
          </ul>
        </div>

        <div className="info-boxe3">
          <h4>Production Process:</h4>
          <ul>
            <li><b>Loading:</b> Quick Lock mechanism seals products in the autoclave.</li>
            <li><b>Curing:</b> Rubber is vulcanized under heat and pressure.</li>
            <li><b>Unloading:</b> Quick release for fast cooling and processing.</li>
          </ul>
        </div>

        <div className="info-boxe3">
          <h4>Benefits:</h4>
          <ul>
            <li><b>Higher Throughput:</b> Faster cycles boost production output.</li>
            <li><b>Energy Efficiency:</b> Lowers energy consumption per batch.</li>
            <li><b>Consistent Quality:</b> Ensures reliable performance of finished products.</li>
          </ul>
        </div>
      </div>

      {/* Modal for Full-Screen Image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close-button" onClick={closeModal}>×</span>
            <img src={modalImage} alt="Full-Screen" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Facility3;
