

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaPhoneAlt, FaEnvelope , FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logos from "../../Images/logo1.png";
import "./header.css";
import twitter from "../../Images/twitter image.webp";
import linkedin from "../../Images/linked in image.webp";

const data = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/product" },
  { id: 3, name: "Facilities", link: "/facilities" },
  { id: 4, name: "Careers", link: "/career" },
  { id: 5, name: "About Us", link: "/about" },
  { id: 6, name: "Contact Us", link: "/contact" },
  { id: 7, name: "Manufacturing", link: "/manufacturing" },
  { id: 8, name: "Inhouse", link: "/inhouse" },
  { id: 9, name: "Assembly", link: "/assembly" },
  { id: 10, name: "EPDM", link: "/epdm" },
  { id: 11, name: "Fuel Tube", link: "/fueltube" },
  { id: 12, name: "Marine Wet Hose", link: "/marinewethose" },
  { id: 13, name: "Moulded", link: "/moulded" },
  { id: 14, name: "Organic", link: "/organic" },
  { id: 15, name: "Silicon Polyester", link: "/siliconpolyester" },
  { id: 16, name: "Turbocharger", link: "/turbochargerhose" },
];

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
//dropdown for manufacturing
const [manufacturingDropdown, setManufacturingDropdown] = useState(false);

const handleHover = (menu) => setActiveDropdown(menu);
const handleLeave = () => setActiveDropdown(null); // Hide dropdown
  const handleManufacturingHover = () => setManufacturingDropdown(true); // Show sub-dropdown
  const handleManufacturingLeave = () => setManufacturingDropdown(false);


  const handleSearch = () => {
    const query = searchInput.toLowerCase();
    const match = data.find((item) => item.name.toLowerCase().includes(query));
    if (match) {
      navigate(match.link);
    } else {
      alert("No results found.");
    }
  };

  const handleInputChange = (e) => setSearchInput(e.target.value);

  const handleLinkClick = () => setActiveDropdown(null);

 
// for humbarg
const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Track mobile menu state

const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen); // Toggle menu state


  return (
  
      <header className="header">
       <div className="main-header">
       <div className="logo">
          <img src={Logos} alt="Sheetal Rubber Industries" />
        </div>
        <div className="top-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search here..."
              value={searchInput}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt />
              <span className="landline">+91 – (20) 2713 0244</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:sheetalrubber@gmail.com" className="email-button">
                sheetalrubber@gmail.com
              </a>
           
           
            </div>
            <div className="contact-item">
            <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" className="social-icons" />
          </a>
          <a href="https://linkedin.com/company/yourLinkedInHandle" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="social-icons" />
          </a>
            </div>
          </div>
        </div>
       </div>


        
        <div className="Navbar">
        <nav className="nav">
          <Link to="/" onClick={handleLinkClick}>
            HOME
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            ABOUT US
          </Link>
          <div
            className="dropdown"
            onMouseEnter={() => handleHover("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-trigger">
              <Link to="/product">PRODUCTS</Link>
            </span>
            {activeDropdown === "products" && (
              <div className="dropdown-menu">
                <Link to="/siliconpolyester" onClick={handleLinkClick}>
                  SILICONE - POLYESTER HOSES
                </Link>
                <Link to="/turbochargerhose" onClick={handleLinkClick}>
                  TURBOCHARGER AND CAC HOSES
                </Link>
                <Link to="/marinewethose" onClick={handleLinkClick}>
                  MARINE WET EXHAUST HOSES
                </Link>
                <Link to="/epdm" onClick={handleLinkClick}>
                  EPDM RUBBER HOSES
                </Link>
                <Link to="/organic" onClick={handleLinkClick}>ORGANIC RUBBER HOSES</Link>
 <Link to="/Assembly" onClick={handleLinkClick}>ASSEMBLY HOSES</Link>
  <Link to="/wired" onClick={handleLinkClick}>WIRE REINFORCED HOSES</Link>
  <Link to="/fueltube" onClick={handleLinkClick}>FUEL TUBES / HOSES</Link>
 <Link to="/moulded" onClick={handleLinkClick}>MOULDED HOSES</Link>
              </div>
            )}
          </div>
{/* Dropdown Menu for Facilities */}
  <div
 className="dropdown"
  onMouseEnter={() => handleHover("facilities")} // Show on hover
 onMouseLeave={() => setActiveDropdown(null)} // Hide on mouse leave
  >
  <span className="dropdown-trigger">
  <Link >FACILITIES</Link>
  </span>
  {activeDropdown === "facilities" && (

 <div className="dropdown-menu">

  <div
                    className="sub-dropdown"
                    onMouseEnter={handleManufacturingHover}
                    onMouseLeave={handleManufacturingLeave}
                  >
                    <span className="dropdown-trigger">
                      <Link to="/manufacturing">MANUFACTURING FACILITIES</Link>
                    </span>
                    {manufacturingDropdown && (
                     
                     <div className="sub-dropdown-menu">
      <Link to="/facility1" onClick={() => setManufacturingDropdown(false)}>
        Hot Feed, Cold Feed & Co-Extrusion Extruders
      </Link>
      <Link to="/facility2" onClick={() => setManufacturingDropdown(false)}>
        Dual Head Extruders for Multi-Layer Extrusion
      </Link>
      <Link to="/facility3" onClick={() => setManufacturingDropdown(false)}>
        Auto Clave Vulcanizar (Quick Lock Type)
      </Link>
      <Link to="/facility4" onClick={() => setManufacturingDropdown(false)}>
        Dispersion Kneader to Internal Mixer & Stock Blenders
      </Link>
      <Link to="/facility5" onClick={() => setManufacturingDropdown(false)}>
        3 Role Calendaring Machine
      </Link>
      <Link to="/facility6" onClick={() => setManufacturingDropdown(false)}>
        Compression Transfer Molding
      </Link>
      <Link to="/facility7" onClick={() => setManufacturingDropdown(false)}>
        Hydraulic Presses
      </Link>
      <Link to="/facility8" onClick={() => setManufacturingDropdown(false)}>
        Rubber Mixing Mills
      </Link>
      <Link to="/facility9" onClick={() => setManufacturingDropdown(false)}>
        Knitting Machines
      </Link>
      <Link to="/facility10" onClick={() => setManufacturingDropdown(false)}>
        Braiding Machines
      </Link>
      <Link to="/facility11" onClick={() => setManufacturingDropdown(false)}>
        Other Conventional Machines
      </Link>
    </div>
                    )}
                  </div>
  <Link to="/inhouse" onClick={handleLinkClick}>INHOUSE TESTING FACILITIES</Link>
  </div>
  )}
  </div>
  <Link to="/news" onClick={handleLinkClick}>NEWS & BLOGS</Link>
 <Link to="/career" onClick={handleLinkClick}>CAREERS</Link>
  <Link to="/contact" onClick={handleLinkClick}>CONTACT US</Link>



        </nav>
      </div>

      </header>

    
  );
}

export default Header;
