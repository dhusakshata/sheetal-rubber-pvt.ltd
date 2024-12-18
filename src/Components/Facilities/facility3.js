import React from 'react';
import "./subfacility3.css";
import Autoclave from "../../Images/Autoclave-Vulcanizers-2-1.avif";

const Facility3 = () => {
  return (
    <div className="facility-container3">
      <div className="facility-header3">
        <h1>Auto Clave Vulcanizer (Quick Lock Type)</h1>
      </div>

      <div className="facility-paragraph3">
        <div className="facility-image3">
          <img src={Autoclave} alt="Auto Clave Vulcanizer" />
        </div>
        <div className='paraof3'>
        <p>
          Our production line features Auto Clave Vulcanizers (Quick Lock Type), designed for precise and efficient vulcanization of rubber products. These advanced vulcanizers utilize high pressure and heat to cure rubber compounds, ensuring optimal strength, elasticity, and durability in the finished products. The Quick Lock mechanism enables fast and secure loading and unloading of materials, significantly reducing cycle times while maintaining stringent quality control.
        </p>
        </div>
      </div>

      <div className="facility-content3 contents">
        <h2>Auto Clave Vulcanizer (Quick Lock Type) Overview:</h2>
        <div className="info-boxe3 ">

          <h2>Purpose:</h2>
          <p>
            Vulcanizes rubber products using heat and pressure to enhance strength, elasticity, and durability.
          </p>
      
          <h2>Quick Lock Mechanism:</h2>
          <p>
            Enables fast and secure loading/unloading, reducing cycle times and increasing efficiency.
          </p>
        
          </div>

        <div className="info-boxe3">
          <h2>Advantages:</h2>
          <ul>
            <li><b>Efficiency:</b> Quick Lock system shortens setup time, increasing productivity.</li>
            <li><b>Precise Control:</b> Ensures uniform curing for consistent product quality.</li>
            <li><b>Versatility:</b> Suitable for a variety of rubber products.</li>
          </ul>
        </div>

        <div className="info-boxe3">
          <h2>Applications:</h2>
          <ul>
            <li><b>Hoses:</b> Improves flexibility and resistance to extreme conditions.</li>
            <li><b>Seals & Gaskets:</b> Enhances durability for automotive and industrial applications.</li>
            <li><b>Tires & Conveyor Belts:</b> Strengthens products while maintaining flexibility.</li>
          </ul>
        </div>

        <div className="info-boxe3">
          <h2>Production Process:</h2>
          <ul>
            <li><b>Loading:</b> Quick Lock mechanism seals products in the autoclave.</li>
            <li><b>Curing:</b> Rubber is vulcanized under heat and pressure.</li>
            <li><b>Unloading:</b> Quick release for fast cooling and processing.</li>
          </ul>
        </div>

        <div className="info-boxe3">
          <h2>Benefits:</h2>
          <ul>
            <li><b>Higher Throughput:</b> Faster cycles boost production output.</li>
            <li><b>Energy Efficiency:</b> Lowers energy consumption per batch.</li>
            <li><b>Consistent Quality:</b> Ensures reliable performance of finished products.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Facility3;
