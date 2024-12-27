import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import './hambarge.css';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [manufacturingDropdown, setManufacturingDropdown] = useState(false);
  const [inhouseDropdown, setInhouseDropdown] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  const handleManufacturingHover = () => {
    setManufacturingDropdown(true);
  };

  const handleManufacturingLeave = () => {
    setManufacturingDropdown(false);
  };

  const handleInhouseHover = () => {
    setInhouseDropdown(true);
  };

  const handleInhouseLeave = () => {
    setInhouseDropdown(false);
  };

  return (
    <div className="SidebarContainer">
      <button className="HamburgerIcon" onClick={handleSidebarToggle}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`Sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav className="navs">
          <Link to="/" onClick={handleLinkClick}>HOME</Link>
          <Link to="/about" onClick={handleLinkClick}>ABOUT US</Link>
          <div
            className="dropdowns"
            onMouseEnter={() => handleHover("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
          
              <Link to="/product" className="dropdown-triggers" >PRODUCTS<FaChevronDown style={{ fontSize: "15px", marginLeft: "5px" }} /></Link>
         
            {activeDropdown === "products" && (
              <div className="dropdown-menus">
                <Link to="/siliconpolyester" onClick={handleLinkClick}>SILICONE - POLYESTER HOSES</Link>
                <Link to="/turbochargerhose" onClick={handleLinkClick}>TURBOCHARGER AND CAC HOSES</Link>
                <Link to="/marinewethose" onClick={handleLinkClick}>MARINE WET EXHAUST HOSES</Link>
                <Link to="/epdm" onClick={handleLinkClick}>EPDM RUBBER HOSES</Link>
                <Link to="/organic" onClick={handleLinkClick}>ORGANIC RUBBER HOSES</Link>
                <Link to="/Assembly" onClick={handleLinkClick}>ASSEMBLY HOSES</Link>
                <Link to="/wired" onClick={handleLinkClick}>WIRE REINFORCED HOSES</Link>
                <Link to="/fueltube" onClick={handleLinkClick}>FUEL HOSES</Link>
                <Link to="/moulded" onClick={handleLinkClick}>MOULDED HOSES</Link>
              </div>
            )}
          </div>
          <div
            className="dropdowns"
            onMouseEnter={() => handleHover("facilities")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-triggers">
              <Link className="dropdown-triggers" >FACILITIES<FaChevronDown style={{ fontSize: "15px", marginLeft: "5px" }} /></Link>
            </span>
            {activeDropdown === "facilities" && (
              <div className="dropdown-menus">
                <div
                  className="sub-dropdowns"
                  onMouseEnter={handleManufacturingHover}
                  onMouseLeave={handleManufacturingLeave}
                >
                 
                    <Link to="/manufacturing" className="dropdown-triggers" onClick={() => 
                    {
                    
                      setInhouseDropdown(false)
                    }
                    
                      
                    }>MANUFACTURING FACILITIES</Link>
                 
                  {manufacturingDropdown && (
                    <div className="sub-dropdown-menus submenus">
                      <Link to="/hot-cold-feed"onClick={handleLinkClick}>Hot Feed, Cold Feed & Co-Extrusion Extruders</Link>
                      <Link to="/Auto-clave-vulcanizer"onClick={handleLinkClick}>Auto Clave Vulcanizer (Quick Lock Type)</Link>
                      <Link to="/Dispersion-kneader" onClick={handleLinkClick}>Dispersion Kneader to Internal Mixer & Stock Blenders</Link>
                      <Link to="/3-role-calendaring-machine" onClick={handleLinkClick}>3 Role Calendaring Machine</Link>
                      <Link to="/Compression-transfer-molding" onClick={handleLinkClick}>Compression Transfer Moulding</Link>
                      <Link to="/Rubber-mixing-mill"onClick={handleLinkClick}>Rubber Mixing Mills</Link>
                      <Link to="/Knitting-machine" onClick={handleLinkClick}>Knitting Machines</Link>
                      <Link to="/Braiding-Machines"onClick={handleLinkClick}>Braiding Machines</Link>
                      <Link to="/Conventional-machines" onClick={handleLinkClick}>Other Conventional Machines</Link>
                    </div>
                  )}
                </div>
                <div
                  className="sub-dropdowns"
                  onMouseEnter={handleInhouseHover}
                  onMouseLeave={handleInhouseLeave}
                >
              
                    <Link to="/inhouse" className="dropdown-triggers" onClick={() => {
                    
                      setManufacturingDropdown(false)}}S

                    >INHOUSE TESTING FACILITIES</Link>
                
                  {inhouseDropdown && (
                    <div className="sub-dropdown-menus submenus">
                      <Link to="/Moving-Die-Rheometer" onClick={handleLinkClick}>Moving Die Rheometer</Link>
                      <Link to="/Burst-pressure-test-machines" onClick={handleLinkClick}>Burst Pressure Test Machine (Horizontal) with Hydraulic testing facility</Link>
                      <Link to="/Ozone-test-chamber" onClick={handleLinkClick}>Ozone Test Chamber</Link>
                      <Link to="/UTM-tensil" onClick={handleLinkClick}>UTM-1</Link>
                      <Link to="/Heating-oven" onClick={handleLinkClick}>Heating Ovens</Link>
                      <Link to="/Muffle-furnance" onClick={handleLinkClick}>Muffle Furnace</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <Link to="/news" onClick={handleLinkClick}>NEWS & BLOGS</Link>
          <Link to="/career" onClick={handleLinkClick}>CAREERS</Link>
          <Link to="/contact" onClick={handleLinkClick}>CONTACT US</Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
