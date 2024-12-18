import React, { useState } from "react";
import "./hambarge.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [activeDropdown, setActiveDropdown] = useState(null);
  
//dropdown for manufacturing
const [manufacturingDropdown, setManufacturingDropdown] = useState(false);
//dropdown for Inhouse
const [inhouseDropdown, setInhouseDropdown] = useState(false);

const handleHover = (menu) => setActiveDropdown(menu);
const handleLeave = () => setActiveDropdown(null); // Hide dropdown

  const handleManufacturingHover = () => setManufacturingDropdown(true); // Show sub-dropdown
  const handleManufacturingLeave = () => setManufacturingDropdown(false);

  const handleInhouseHover = () => setInhouseDropdown(true); // Show sub-dropdown
  const handleInhouseLeave = () => setInhouseDropdown(false); // Hide sub-dropdown






  const handleLinkClick = () => setActiveDropdown(null);

 




  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
		<div className="Navbar">
		<nav className="navbar-container">
			
			<button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"} {/* Toggles between hamburger and close icon */}
        </button>
			<div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
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
<Link to="/fueltube" onClick={handleLinkClick}>FUEL HOSES</Link>
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
									<Link>MANUFACTURING FACILITIES</Link>
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
	{/* <Link to="/facility7" onClick={() => setManufacturingDropdown(false)}>
		Hydraulic Presses
	</Link> */}
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

{/* <Link to="/inhouse" onClick={handleLinkClick}>INHOUSE TESTING FACILITIES</Link>
*/}
{/* Inhouse Testing Facilities */}
<div
							className="sub-dropdown"
							onMouseEnter={handleInhouseHover}
							onMouseLeave={handleInhouseLeave}
						>
							<span className="dropdown-trigger">
								<Link >INHOUSE TESTING FACILITIES</Link>
							</span>
							{inhouseDropdown && (
								<div className="sub-dropdown-menu">
									<Link to="/inhouse1" onClick={handleLinkClick}>
									Moving Die Rheometer
									</Link>
									<Link to="/inhouse2" onClick={handleLinkClick}>
									Burst Pressure Test Machine (Horizontal) with Hydraulic testing facility
									</Link>
									<Link to="/inhouse3" onClick={handleLinkClick}>
									Ozone Test Chamber
									</Link>
									<Link to="/inhouse4" onClick={handleLinkClick}>
									UTM-1
									</Link>
									<Link to="/inhouse5" onClick={handleLinkClick}>
									Heating Ovens
									</Link>
									<Link to="/inhouse6" onClick={handleLinkClick}>
									Muffle Furnace
									</Link>
								</div>
							)}
						</div>

</div>

)}

</div>
<Link to="/news" onClick={handleLinkClick}>NEWS & BLOGS</Link>
<Link to="/career" onClick={handleLinkClick}>CAREERS</Link>
<Link to="/contact" onClick={handleLinkClick}>CONTACT US</Link>

			</div>


		</nav>
	</div>
  );
};

export default Navbar;
