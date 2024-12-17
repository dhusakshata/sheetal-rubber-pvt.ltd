import React from 'react';
import { Link } from 'react-router-dom';
import './SubFacility.css';
import Dualhead  from "../../Images/Extruder_Dual_Layer.png";
const Facility2 = () => {
  return (
    <div className="facility-container2">
      <div className="facility-header2">
        <h1>Dual Head Extruders for Multi-Layer Extrusion</h1> {/* Main heading */}
      </div>

      <div className="facility-paragraph2">
        <p>
        Our production line is equipped with dual head extruders for multi-layer extrusion, allowing for the simultaneous processing of multiple materials into a single, high-performance product. This advanced machinery ensures precise layering of different rubber compounds, each with unique properties, to create complex profiles tailored to specific applications. With the ability to extrude multiple layers in one continuous process, our dual head extruders enhance production efficiency while ensuring the highest level of consistency and quality. This capability is particularly advantageous for producing products like hoses, seals, and gaskets, where multi-layer construction improves durability, flexibility, and resistance to environmental factors.
        </p>
      </div>

      <div className="facility-content2">
        {/* Left Side Image */}
        <div className="facility-image2">
          <img src={Dualhead} alt="Facility 1" />
        </div>

        <div className='dual-head'>
          <h1>Dual Head Extruder Overview:</h1>
          <ul>
            <li>
            <b>Purpose: </b>Processes two rubber compounds simultaneously to create multi-layer profiles, combining varied properties like strength, flexibility, and heat resistance.
            </li>
            <li>
           <b> Functionality: </b>Uses separate feed systems to extrude different materials together, forming a precise multi-layer structure with consistent quality.
            </li>
          </ul>
        </div>
        <div className='dual-Application'>
        <h3>Applications of Dual Head Extruders:</h3>
         
          <ul>
          <li>
            <b>Multi-Layer Hoses:</b>Inner layer for chemical resistance, outer layer for durability.
            </li>
            <li>
           <b> Seals & Gaskets: </b>Flexible inner layer, tough outer layer for oil, heat, and weather resistance.
            </li>
            <li>
            <b> Tire Components: </b>Multi-layer treads for durability and heat dissipation.
            </li>
            <li>
            <b> Cable Insulation:  </b>Different layers for electrical insulation and protection.
            </li>
          </ul>
        </div>
        <div className='dual-advantages'>
        <h3>Advantages:</h3>
        <ul>
          <li>
            <b>Optimized Performance:</b>Custom layers improve product function.
            </li>
            <li>
           <b> Durability: </b>Multi-layer construction enhances product lifespan.
            </li>
            <li>
           <b> Cost Efficiency: </b>Combines processes into one step, reducing assembly.
            </li>
            <li>
           <b> Design Flexibility: </b>Allows tailored solutions for specific needs.
            </li>
            <li>
           <b> Consistency: </b>Ensures precise material distribution for high performance.
            </li>
            
          </ul>
        </div>
        <div className='dual-production'>
        <h3>Production Process:</h3>
        <ul>
          <li>
            <b>Material Feeding:</b>Two compounds fed into separate extruders.
            </li>
            <li>
           <b> Extrusion:</b>Heated and combined into a single, multi-layer profile.
            </li>
            <li>
           <b> Die Configuration:  </b>Controls thickness and shape for precision.
            </li>
            <li>
           <b>Post-Processing:  </b> Includes cooling, cutting, or vulcanization.
            </li>
            
          </ul>
        </div>
      </div>
    
      <h2>Comparison for a Rubber-Producing Company</h2>

<table>
  <tr>
   
    <th>Aspect</th>
    <th>Single-Layer Extrusion</th>
    <th>Dual Head Multi-Layer Extrusion</th>
    
  </tr>
  <tr>
    <td>Material Complexity</td>
    <td>One material</td>
    <td>Two materials, multi-layer structure</td>
    
  </tr>
  <tr>
    <td>Performance</td>
    <td>Limited Properties</td>
    <td>Customizable, multi-layer benefits</td>
    
  </tr>
  <tr>
    <td>Efficiency</td>
    <td>May require bonding</td>
    <td>Combines in one step </td>
    
  </tr>
  <tr>
    <td>Application</td>
    <td>Simple profile </td>
    <td>Advanced multi-layer product </td>
    
  </tr>
</table>
   
   
    
    </div>
  );
};

export default Facility2;
