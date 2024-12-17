import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';// Importing the CSS for styling

const Facility1 = () => {
  return (
    <div className="facility-container">
      <div className="facility-header">
        <h1>Hot Feed, Cold Feed & Co-Extrusion Extruders</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph">
        <p>
        We utilize both hot feed and cold feed extruders, along with co-extrusion technology, to manufacture a variety of rubber products with precision and efficiency. Hot feed extruders allow for better control of material flow and temperature, while cold feed extruders are ideal for processing various rubber compounds. Co-extrusion enables the production of multi-layered hoses, combining different materials for enhanced performance and durability.
        </p>
      </div>

      <div className="facility-content">
        {/* Left Side Image */}
        <div className="facility-image">
          <img src="facility1-image.jpg" alt="Facility 1" />
        </div>

        {/* Right Side Content */}
        <div className="facility-right">
          <h2>Hot Feed Extruder:</h2>
          <div className="facility-info">
            <div className="facility-info-left">
              <div className="info-box">
                <h4>Application:</h4>
                <ul>
                  <li><b>Purpose:</b> Processes pre-heated rubber compounds into various profiles and shapes, reducing mechanical energy needed for extrusion.</li>
                </ul>
               
              </div>
              <div className="info-box">
              <h4>Functionality:</h4>
              <ul>
                <li>
                <b> Pre-Heated Input:</b> Rubber compound is pre-heated and softened before entering the extruder. 
                </li>
                <li>
                <b>Screw and Barrel:</b> A screw inside a heated barrel pushes the rubber through a die, forming continuous shapes like hoses, sheets, or tire treads.
                </li>
                <li>
                <b>Efficiency:</b> Suitable for simpler profiles and works with preheated materials from earlier processing steps, reducing energy costs.
                </li>
              </ul>



              </div>
            </div>
            <div className="facility-info-right">
              <div className="info-box">
                <ul>
                  <li> <b>Products:</b> Used for tire treads, rubber sheets, and strips.</li>
                  <li><b>Preheated Material:</b> Ideal when rubber is preheated or comes from a heated stage of processing.</li>
                </ul>
                
              
              </div>
              <div className="info-box"><h4>Advantages:</h4>
              <ul>
                <li>
                <b>Cost-Effective</b>: Optimized for continuous production of large volumes.
                </li>
                <li>
                <b>Energy Savings:</b> Requires less mechanical force due to pre-heated rubber.
                </li>
                <li><b>Tire Industry: </b>Commonly used in tire production facilities for uniform output.</li>
              </ul>

 </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cold Feed Extruder: */}

<div className='cold-feed'>
  <h2>Cold Feed Extruder:</h2>

  <div className="facility-content">
       

        {/* Right Side Content */}
        <div className="facility-right">
         
          <div className="facility-info">
            <div className="facility-info-left">
              <div className="info-box">
                <h4>Application:</h4>
                <ul>
                  <li><b>Purpose:</b>  Processes rubber compounds at ambient or slightly elevated temperatures without pre-heating, offering versatility in handling various compounds and profiles.</li>
                </ul>
               
              </div>
              <div className="info-box">
              <h4>Functionality:</h4>
<ul>
<li> 
<b> Room Temperature Input:</b> Rubber is fed into the extruder at room temperature, with mechanical energy driving the extrusion process.
  </li>
  <li>
  <b>Gradual Heating:</b> The screw compresses and heats the rubber gradually, plasticizing it before it exits through the die.

  </li>
  <li>
  <b>Energy Efficiency:</b> Eliminates the need for pre-heating, making it suitable for continuous processing of diverse rubber compounds.

  </li>
</ul>


              </div>
            </div>
            <div className="facility-info-right">
              <h4>Advantages:</h4>
              <div className="info-box">
                <ul>
                  <li>
                  <b> Flexibility:</b> Capable of handling different materials and complex shapes. 
                  </li>
                  <li>
                  <b>Energy Efficient:</b> More efficient than hot feed extruders, as no external pre-heating is needed.
                  </li>
                  <li>
                  <b>Temperature Control:</b> Better control over temperature, reducing scorching and improving quality.
                  </li>
                  <li>
                  <b>Reduced Downtime:</b> Faster product changes without the need for pre-heating.
                  </li>
                </ul>
             

 </div>
            </div>

          </div>
        </div>
      
       {/* Left Side Image */}
       <div className="facility-image">
          <img src="facility1-image.jpg" alt="Facility 1" />
        </div>
      
      </div>

</div>

<div className="facility-content">
        {/* Left Side Image */}
        <div className="facility-image">
          <img src="facility1-image.jpg" alt="Facility 1" />
        </div>

        {/* Right Side Content */}
        <div className="facility-right">
          <h2>Co-Extrusion Extruder:</h2>
          <div className="facility-info">
            <div className="facility-info-left">
              <div className="info-box">
                <h4>Application:</h4>
               <p>
               <b>Purpose:</b> Simultaneously extrudes multiple layers of rubber or different materials to create complex profiles with varying properties in different sections.
               </p>
              </div>
              <div className="info-box">
              <h4>Functionality:</h4>
              <ul>
                <li>
                <b>Multi-Extruder System:</b> Two or more extruders feed different materials into a single die.
                </li>
                <li>
                <b>Layering: </b> Materials with different properties (hardness, color, composition) are extruded together to form a multi-layered or multi-component product.
                </li>
                <li>

                <b>Combination:</b> Allows integration of different rubber compounds or materials like plastic or metal into one profile.
                </li>
              </ul>


 
              </div>
            </div>
            <div className="facility-info-right">
              <div className="info-box">
                <ul>
                  <li>
                  <b>Products:</b> Used for seals, hoses, tires, gaskets, and complex automotive parts with multi-layer or multi-material requirements.
                  </li>
                  <li>
                  <b>Varied Properties:</b> Ideal for products needing distinct sections, such as a soft inner layer and hard outer layer.
                  </li>
                </ul>
             
              
              </div>
              <div className="info-box"><h3>Advantages:</h3>
              <ul>
                <li><b>Versatility: </b> Custom solutions for advanced performance characteristics in products.</li>
                <li><b>Cost-Effective:</b> Single-step process for producing multi-layer products, reducing manufacturing complexity.</li>
                <li><b>Industry Use:</b> Popular in automotive, construction, and manufacturing for creating durable and functional multi-layered rubber products.</li>
              </ul>



 </div>
            </div>
          </div>
        </div>
      </div>




      <h2>Comparison for a Rubber-Producing Company</h2>

<table>
  <tr>
   
    <th>Extruder Type</th>
    <th>Feed Type</th>
    <th>Advantages</th>
    <th>Application</th>
  </tr>
  <tr>
    <td>Hot Feed Extruder</td>
    <td>Hot Feed Extruder</td>
    <td>Lower mechanical energy required; continuous production.</td>
    <td>Lower mechanical energy required; continuous production.</td>
  </tr>
  <tr>
    <td>Cold Feed Extruder</td>
    <td>Room temperature rubber</td>
    <td>Versatile; energy-efficient; greater control over compound.</td>
    <td>Hoses, seals, complex profiles; best for varied product lines.</td>
  </tr>
  <tr>
    <td>Co-Extrusion Extruder</td>
    <td>Multiple material feeds</td>
    <td>Multi-layer or multi-component products in one process.</td>
    <td>Tires, seals, gaskets, complex profiles with varying properties.</td>
  </tr>
</table>
   
   
   
   
   
    
    
    
    </div>
  );
};

export default Facility1;
