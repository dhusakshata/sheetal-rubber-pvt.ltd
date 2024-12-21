// import React from 'react';
// import { Link } from 'react-router-dom';
// import './SubFacility.css';
// import Dispenser from "../../Images/25-litres-rubber-dispersion-kneader-machine-250x250.jpg";
// import Stock from "../../Images/stock blender.jpg";
// const Facility4 = () => {
//   return (
//     <div className="facility-container4">
//       <div className="facility-header4">
//         <h1>Dispersion Kneader to Internal Mixer & Stock Blenders</h1> {/* Main heading */}
//         </div>
//         <div className="facility-paragraph4">
//         <p>
//         Our production line features advanced dispersion kneaders and internal mixers that ensure the uniform blending of raw materials. This equipment is essential for achieving the desired consistency and properties of rubber compounds, allowing for optimal performance in our finished products. Stock blenders further enhance the mixing process by facilitating the preparation of large batches, ensuring efficient production while maintaining high quality.
//         </p>
//       </div>
               
// <div className='"facility-paragraph4'>
//   <p>
//   For a rubber-producing company, the sequence of using a Dispersion Kneader, Internal Mixer, and Stock Blenders is crucial in ensuring high-quality rubber compounds. Each piece of equipment plays a unique role in the processing of raw rubber, fillers, and other additives, ultimately affecting the physical and chemical properties of the final product.
//   </p>
// </div>





// <div className='dispenser'>
// <div className="facility-image4">
//           <img src={Dispenser}alt="Facility 1" />
//         </div>
//   <h3>Dispersion Kneader:</h3>
//   <p>  <b>purpose:</b>   The dispersion kneader is the first step in the rubber mixing process. It is responsible for pre-mixing the base rubber with various additives such as fillers (e.g., carbon black, silica), oils, accelerators, and other chemicals. This machine ensures that the materials are evenly distributed within the rubber matrix before moving to the next stage.</p>

// <p><b>Functionality:</b>
// <ul>
// <li>The kneader contains two rotors in a chamber that rotate at different speeds, generating high shear forces.</li>
// <li>It operates under controlled temperature and pressure to avoid premature vulcanization while ensuring the additives are dispersed evenly into the rubber.</li>
// <li>
// The material in this phase is in a relatively low-viscosity state, which allows the fillers and additives to mix thoroughly without any degradation of the rubber’s mechanical properties.
// </li>
// </ul>
// </p>
// <p>
// <b>
//   Application:
// </b>
// It is used in the early stages of rubber compound manufacturing, particularly for creating the masterbatch, where base rubber is mixed with fillers.
// </p>
// </div>

// <div className='Internal-mixer'>

//   <h3>Internal Mixer (Banbury Mixer):</h3>
//   <p>  <b>purpose:</b>    The internal mixer is employed for more intensive mixing, refining the rubber compound by applying higher shear and pressure than a kneader. This is the core stage where the rubber, fillers, and all other components are fully homogenized.</p>

// <p><b>Functionality:</b>
// <ul>
// <li>The internal mixer operates under higher temperature and pressure compared to the dispersion kneader. It has a large enclosed mixing chamber with two rotors that rotate in opposite directions.</li>
// <li>The high-energy mixing allows the rubber to reach the desired viscosity and uniformity, ensuring that the fillers and chemicals are thoroughly integrated.</li>
// <li>
// Temperature control is critical to prevent over-heating, which could lead to unwanted cross-linking (vulcanization) of the rubber.
// </li>
// <li>
// The internal mixer is ideal for large-volume production, making it indispensable for rubber producers creating tires, hoses, belts, and other rubber goods.
// </li>
// </ul>
// </p>
// <p>
// <b>
//   Application:
// </b>
// It is primarily used in the tire and rubber industry for the production of highly engineered rubber products that require consistency in performance.
// </p>
// </div>


// <div className='stock-blender'>

//   <h3>Stock Blender:</h3>
//  <p>
//  <b>purpose:</b>   After the rubber compound has been processed in the internal mixer, a stock blender is used to enhance the homogeneity of the mix and prevent temperature build-up, which could negatively impact the material properties.
//  </p>
// <p><b>Functionality:</b>
// <ul>
// <li>A stock blender is generally attached to a two-roll mill. It feeds the compound back into the mill after each pass, ensuring that the material is cooled and reworked for better uniformity.</li>
// <li>The stock blender helps to further mix and cool the compound, ensuring a balanced temperature across the rubber sheet before it moves to the next stage, such as calendering or extrusion.</li>
// <li>
// It prevents overheating of the compound, which could cause scorching (premature vulcanization) and degrade the quality of the final rubber product.
// </li>
// </ul>
// </p>
// <p>
// <b>
//   Application:
// </b>
// Stock blenders are especially useful in rubber processing plants where continuous mixing is required, ensuring uniform texture and quality in the finished product.
// </p>
// <div className="facility-image4">
//           <img src={Stock} alt="Facility 1" />
//         </div>
// </div>


// <div className='Importance'>
//   <h2>
//   Why This Sequence is Important for a Rubber-Producing Company?
//   </h2>
//   <ul>
//     <li>
//     <b>Efficiency:</b>The use of dispersion kneaders, internal mixers, and stock blenders in sequence ensures that the rubber compound is efficiently mixed, with each stage optimizing different aspects of the material blending process.
//     </li>
//     <li>
//     <b>Quality Control:</b> Proper mixing at each stage helps maintain the uniformity of the rubber’s mechanical properties, which is vital for ensuring consistent performance in the end products (e.g., tires, seals, hoses).
//     </li>
//     <li>
//     <b>Temperature Management:</b> The stock blender ensures that the rubber compound cools down properly after intensive mixing, which helps to avoid defects such as scorching or uneven curing.
//     </li>
//     <li>
//    <b> Cost Reduction:</b> By using these machines in sequence, a rubber-producing company can reduce wastage and improve the overall quality of their product, thus cutting down on rejects and optimizing production efficiency.
//     </li>
//   </ul>
// </div>

// <div className='facility-paragraph4'>
//   <p>
//   In summary, for a rubber-producing company, the combination of a Dispersion Kneader, Internal Mixer, and Stock Blender ensures thorough, consistent, and efficient mixing of rubber compounds. This process is essential for producing high-quality rubber goods like tires, seals, hoses, and other rubber-based components that meet industry standards.
//   </p>
// </div>
      

        
      
//     </div>
//   );
// };

// export default Facility4;

import React, { useState,useEffect } from 'react';
import './SubFacility.css';
import Dispenser from "../../Images/25-litres-rubber-dispersion-kneader-machine-250x250.jpg";
import Stock from "../../Images/stock blender.jpg";

const Facility4 = () => {
  // Scroll-trigger animation logic
    useEffect(() => {
      const elements = document.querySelectorAll('.facility-content, .facility-header, .facility-paragraph');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible-black');
            } else {
              entry.target.classList.remove('visible-black');
            }
          });
        },
        { threshold: 0.2 } // Trigger animation when 10% of the element is visible
      );
  
      elements.forEach((element) => observer.observe(element));
  
      return () => observer.disconnect(); // Cleanup observer on component unmount
    }, []);
    useEffect(() => {
      const images = document.querySelectorAll(".facility-image img");
  
      // Intersection Observer to detect when images come into the viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("image-visible");  // Add the visible class to trigger the animation
            }
          });
        },
        { threshold: 0.5 }  // Trigger when 50% of the image is visible in the viewport
      );
  
      images.forEach((image) => observer.observe(image));  // Observe each image
  
      return () => observer.disconnect();  // Clean up observer on component unmount
    }, []);
  
  
  return (
    <div className="facility-container">
      <div className="facility-header">
        <h1>Dispersion Kneader to Internal Mixer & Stock Blenders</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
          Our production line features advanced dispersion kneaders and internal mixers that ensure the uniform blending of raw materials. This equipment is essential for achieving the desired consistency and properties of rubber compounds, allowing for optimal performance in our finished products. Stock blenders further enhance the mixing process by facilitating the preparation of large batches, ensuring efficient production while maintaining high quality.
        </p>
      </div>

      <div className="facility-paragraph">
        <p>
          For a rubber-producing company, the sequence of using a Dispersion Kneader, Internal Mixer, and Stock Blenders is crucial in ensuring high-quality rubber compounds. Each piece of equipment plays a unique role in the processing of raw rubber, fillers, and other additives, ultimately affecting the physical and chemical properties of the final product.
        </p>
      </div>

      <div className="dispenser">
        <div className="facility-image">
          <img src={Dispenser} alt="Dispersion Kneader" />
        </div>
        <h3>Dispersion Kneader:</h3>
        <p>•	The dispersion kneader is the first step in the rubber mixing process. It is responsible for pre-mixing the base rubber with various additives. This machine ensures that the materials are evenly distributed within the rubber matrix before moving to the next stage.</p>

        <p><b>Functionality:</b>
          <ul>
            <li>The kneader contains two rotors in a chamber that rotate at different speeds, generating high shear forces.</li>
            <li>It operates under controlled temperature and pressure to avoid premature vulcanization while ensuring the additives are dispersed evenly into the rubber.</li>
            <li>The material in this phase is in a relatively low-viscosity state, which allows the fillers and additives to mix thoroughly without any degradation of the rubber’s mechanical properties.</li>
          </ul>
        </p>

        <p><b>Application:</b> It is used in the early stages of rubber compound manufacturing, particularly for creating the masterbatch, where base rubber is mixed with fillers.</p>
      </div>

      <div className="internal-mixer">
        <h3>Internal Mixer:</h3>
        <p><b>Purpose:</b> The internal mixer is employed for more intensive mixing, refining the rubber compound by applying higher shear and pressure than a kneader. This is the core stage where the rubber, fillers, and all other components are fully homogenized.</p>

        <p><b>Functionality:</b>
          <ul>
            <li>The internal mixer operates under higher temperature and pressure compared to the dispersion kneader. It has a large enclosed mixing chamber with two rotors that rotate in opposite directions.</li>
            <li>The high-energy mixing allows the rubber to reach the desired viscosity and uniformity, ensuring that the fillers and chemicals are thoroughly integrated.</li>
            <li>Temperature control is critical to prevent over-heating, which could lead to unwanted cross-linking (vulcanization) of the rubber.</li>
            <li>The internal mixer is ideal for large-volume production, making it indispensable for rubber producers creating tires, hoses, belts, and other rubber goods.</li>
          </ul>
        </p>

        <p><b>Application:</b>To produce of highly engineered hoses that require consistency in performance.</p>
      </div>

      <div className="stock-blender">
        <h3>Stock Blender:</h3>
        <p><b>Purpose:</b> After the rubber compound has been processed in the internal mixer, a stock blender is used to enhance the homogeneity of the mix and prevent temperature build-up, which could negatively impact the material properties.</p>

        <p><b>Functionality:</b>
          <ul>
            <li>A stock blender is generally attached to a two-roll mill. It feeds the compound back into the mill after each pass, ensuring that the material is cooled and reworked for better uniformity.</li>
            <li>The stock blender helps to further mix and cool the compound, ensuring a balanced temperature across the rubber sheet before it moves to the next stage, such as calendering or extrusion.</li>
            <li>It prevents overheating of the compound, which could cause scorching (premature vulcanization) and degrade the quality of the final rubber product.</li>
          </ul>
        </p>

        <p><b>Application:</b> It helps to continuous mixing, ensuring uniform texture and quality in the finished product.</p>

        <div className="facility-image">
          <img src={Stock} alt="Stock Blender" />
        </div>
      </div>

      <div className="Importance">
        <h2>Why This Sequence is Important for a Rubber-Producing Company?</h2>
        <ul>
          <li><b>Efficiency:</b> The use of dispersion kneaders, internal mixers, and stock blenders in sequence ensures that the rubber compound is efficiently mixed, with each stage optimizing different aspects of the material blending process.</li>
          <li><b>Quality Control:</b> Proper mixing at each stage helps maintain the uniformity of the rubber’s mechanical properties, which is vital for ensuring consistent performance in the end products </li>
          <li><b>Temperature Management:</b> The stock blender ensures that the rubber compound cools down properly after intensive mixing, which helps to avoid defects such as scorching or uneven curing.</li>
          <li><b>Cost Reduction:</b> By using these machines in sequence, a rubber-producing company can reduce wastage and improve the overall quality of their product, thus cutting down on rejects and optimizing production efficiency.</li>
          <li>
            <b>Improved Product Consistency: </b>
            The sequential blending process helps achieve consistent material properties across batches, ensuring uniformity in the final rubber products and enhancing their reliability.
          </li>
        </ul>
      </div>

      

     
    </div>
  );
};

export default Facility4;
