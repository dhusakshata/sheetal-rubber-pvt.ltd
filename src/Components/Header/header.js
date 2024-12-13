
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate

// // import { FaSearch } from 'react-icons/fa';

// // import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // import "./header.css";



// // import { Link } from "react-router-dom";

// //  import Logos from "../../Images/logo1.png";
// // import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// // const data = [
// //   { id: 1, name: "Home", link: "/" },
// //   { id: 2, name: "Products", link: "/product" },
// //   { id: 3, name: "Facilities", link: "/facilities" },
// //   { id: 4, name: "Careers", link: "/career" },
// //   { id: 5, name: "About Us", link: "/about" },
// //   { id: 6, name: "Contact Us", link: "/contact" },
// //   { id: 7, name: "manufacturing", link: "/manufacturing" },
// //   { id: 8, name: "inhouse", link: "/inhouse" },
// //   { id: 9, name: "Assembly", link: "/Assembly" },
// //   { id: 10, name: "epdm", link: "/epdm" },
// //   { id: 11, name: "Fueltube", link: "/fueltube" },
// //   { id: 12, name: "marinwethose", link: "/marinwethose" },
// //   { id: 13, name: "moulded", link: "/moulded" },
// //   { id: 14, name: "organic", link: "/organic" },
// //   { id: 15, name: "silicon polyester", link: "/siliconpolyester" },
// //   { id: 16, name: "turbocharger", link: "/turbochargerhose" },
// // ];

// // function Header() {
// //   const [searchInput, setSearchInput] = useState("");
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   const handleSearch = () => {
// //     const query = searchInput.toLowerCase();

// //     if (query) {
// //       const match = data.find((item) =>
// //         item.name.toLowerCase().includes(query)
// //       );
// //       if (match) {
// //         navigate(match.link); // Navigate to the matched page
// //       } else {
// //         alert("No results found.");
// //       }
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     setSearchInput(e.target.value);
// //   };

// //   // for navbar click to close functionality of dropdown
// //    // State to track which dropdown is active (clicked)
// //   const [activeDropdown, setActiveDropdown] = useState(null);

// //   // Function to toggle the dropdown state when a link is clicked
// //   const handleLinkClick = () => {
// //     setActiveDropdown(null); // Close any open dropdowns
// //   };

// //   // Function to toggle the active dropdown on hover
// //   const handleHover = (menu) => {
// //     setActiveDropdown(menu);
// //   };



  
  
// //   return (
// //     <div>
// //       <header className="header">
// //         {/* Logo Section */}
// //         <div className="logo">
// //           <img src={Logos} alt="Sheetal Rubber Industries" />
// //         </div>

// //         {/* Search Bar */}

// //       <div className="top-right">
// //       <div className="search-bar">
// //           <input
// //             type="text"
// //             placeholder="Search here..."
// //             value={searchInput}
// //             onChange={handleInputChange}
// //           />
// //           <button onClick={handleSearch}> <FaSearch /></button>
// //         </div>

// //         {/* Contact Info */}
// //         <div className="contact-info">
// //           <div className="contact-item">
// //             <FaPhoneAlt />
// //             <span className="landline">+91 – (20) 2713 0244</span>
// //           </div>
// //           <div className="contact-item">
// //             <FaEnvelope />
// //             <a href="mailto:sheetalrubber@gmail.com" className="email-button">
// //       sheetalrubber@gmail.com
// //     </a>
// //             {/* <span>sheetalrubber@gmail.com</span> */}
// //           </div>
// //         </div>
        
// //       </div>

// //       </header>

// //       {/* Navbar Section */}

     
      

// // <div className="Navbar">

// // <nav className="nav">



// // <Link to="/" onClick={handleLinkClick}>HOME</Link>

// //  <Link to="/about" onClick={handleLinkClick}>ABOUT US</Link>



// //  {/* Dropdown Menu for Products */}

// //         <div

// //           className="dropdown"

// //           onMouseEnter={() => handleHover("products")} // Show on hover

// //           onMouseLeave={() => setActiveDropdown(null)} // Hide on mouse leave

// //         >

// //           <span className="dropdown-trigger">

// //             <Link to="/product">PRODUCTS</Link>

// //           </span>

// //           {activeDropdown === "products" && (

// //             <div className="dropdown-menu">

// //               <Link to="/siliconpolyester" onClick={handleLinkClick}>SLICONE - POLYESTER HOSES</Link>

// //               <Link to="/turbochargerhose" onClick={handleLinkClick}>TURBOCHARGER AND CAC HOSES</Link>

// //               <Link to="/marinewethose" onClick={handleLinkClick}>MARINE WET EXHAUST HOSES</Link>

// //               <Link to="/epdm" onClick={handleLinkClick}>EPDM RUBBER HOSES</Link>

// //               <Link to="/organic" onClick={handleLinkClick}>ORGANIC RUBBER HOSES</Link>

// //               <Link to="/Assembly" onClick={handleLinkClick}>ASEMBLY HOSES</Link>

// //               <Link to="/wired" onClick={handleLinkClick}>WIRE REINFORCED HOSES</Link>

// //               <Link to="/fueltube" onClick={handleLinkClick}>FUEL TUBES / HOSES</Link>

// //               <Link to="/moulded" onClick={handleLinkClick}>MOULDED HOSES</Link>

// // </div>

// //  )}

// //  </div>



// //  {/* Dropdown Menu for Facilities */}

// // <div

// //  className="dropdown"

// //  onMouseEnter={() => handleHover("facilities")} // Show on hover
// //  onMouseLeave={() => setActiveDropdown(null)} // Hide on mouse leave
// //  >

// // <span className="dropdown-trigger">
// //  <Link to="/facilities">FACILITIES</Link>

// // </span>
// //  {activeDropdown === "facilities" && (

// //  <div className="dropdown-menu">

// // <Link to="/manufacturing" onClick={handleLinkClick}>MANUFACTURING FACILITIES</Link>

// //  <Link to="/inhouse" onClick={handleLinkClick}>INHOUSE TESTING FACILITIES</Link>

// //  </div>

// //  )}

// //  </div>



// //  <Link to="/news" onClick={handleLinkClick}>NEWS & BLOGS</Link>

// //  <Link to="/career" onClick={handleLinkClick}>CAREERS</Link>

// //  <Link to="/contact" onClick={handleLinkClick}>CONTACT US</Link>

// //  </nav>

// //  </div>
// //     </div>
// //   );
// // }

// // export default Header;

// import React, { useState} from "react";

// import { useNavigate } from "react-router-dom"; // Import useNavigate


// import { FaSearch } from 'react-icons/fa';



// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import 'bootstrap/dist/css/bootstrap.min.css';

// import "./header.css";


// import { Link } from "react-router-dom";



// import Logos from "../../Images/logo1.png";

// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const data = [

// { id: 1, name: "Home", link: "/" },
//  { id: 2, name: "Products", link: "/product" },
//  { id: 3, name: "Facilities", link: "/facilities" },
//  { id: 4, name: "Careers", link: "/career" },
//  { id: 5, name: "About Us", link: "/about" },
//  { id: 6, name: "Contact Us", link: "/contact" },

//  { id: 7, name: "manufacturing", link: "/manufacturing" },

//  { id: 8, name: "inhouse", link: "/inhouse" },

//  { id: 9, name: "Assembly", link: "/Assembly" },

//  { id: 10, name: "epdm", link: "/epdm" },

//  { id: 11, name: "Fueltube", link: "/fueltube" },

//  { id: 12, name: "marinwethose", link: "/marinwethose" },

//  { id: 13, name: "moulded", link: "/moulded" },

//  { id: 14, name: "organic", link: "/organic" },

// { id: 15, name: "silicon polyester", link: "/siliconpolyester" },

//  { id: 16, name: "turbocharger", link: "/turbochargerhose" },

// ];



// function Header() {
//  const [searchInput, setSearchInput] = useState("");
//   const navigate = useNavigate(); // Initialize useNavigate
//  const handleSearch = () => {
//  const query = searchInput.toLowerCase();
//  if (query) {
//  const match = data.find((item) =>
//  item.name.toLowerCase().includes(query)
//  );
//  if (match) {
//  navigate(match.link); // Navigate to the matched page
//  } else {

//  alert("No results found.");

//  }

//  }

//  };

//  const handleInputChange = (e) => {
//  setSearchInput(e.target.value);

//  };
// // for navbar click to close functionality of dropdown

// // State to track which dropdown is active (clicked)

// const [activeDropdown, setActiveDropdown] = useState(null);


//  // Function to toggle the dropdown state when a link is clicked
//  const handleLinkClick = () => {

//  setActiveDropdown(null); // Close any open dropdowns
//  };

//  // Function to toggle the active dropdown on hover
//  const handleHover = (menu) => {

// setActiveDropdown(menu);

// };


//  return (

//  <div className="container">

//  <header className="header">

//  {/* Logo Section */}

// <div className="logo">

//  <img src={Logos} alt="Sheetal Rubber Industries" />

// </div>



//  {/* Search Bar */}



// <div className="top-right">

// <div className="search-bar">

//  <input

//  type="text"
//  placeholder="Search here..."
//  value={searchInput}
//  onChange={handleInputChange}
// />
// <button onClick={handleSearch}> <FaSearch /></button>
// </div>
//  {/* Contact Info */}
// <div className="contact-info">
//  <div className="contact-item">
//  <FaPhoneAlt />
//  <span className="landline">+91 – (20) 2713 0244</span>
// </div>
//  <div className="contact-item">
//  <FaEnvelope />
// <a href="mailto:sheetalrubber@gmail.com" className="email-button">
//  sheetalrubber@gmail.com
//  </a>
//  {/* <span>sheetalrubber@gmail.com</span> */}
//  </div>
//  </div>
// </div>
//  </header>
//  {/* Navbar Section */}


// <div className="Navbar">
// <nav className="nav">
//  <Link to="/" onClick={handleLinkClick}>HOME</Link>
// <Link to="/about" onClick={handleLinkClick}>ABOUT US</Link>
//  {/* Dropdown Menu for Products */}
// <div
// className="dropdown"
//  onMouseEnter={() => handleHover("products")} // Show on hover
// onMouseLeave={() => setActiveDropdown(null)} // Hide on mouse leave
// >
//  <span className="dropdown-trigger">
//  <Link to="/product">PRODUCTS</Link>
//  </span>
//  {activeDropdown === "products" && (
//  <div className="dropdown-menu">
//  <Link to="/siliconpolyester" onClick={handleLinkClick}>SLICONE - POLYESTER HOSES</Link>
//  <Link to="/turbochargerhose" onClick={handleLinkClick}>TURBOCHARGER AND CAC HOSES</Link>

//  <Link to="/marinewethose" onClick={handleLinkClick}>MARINE WET EXHAUST HOSES</Link>
//  <Link to="/epdm" onClick={handleLinkClick}>EPDM RUBBER HOSES</Link>

//  <Link to="/organic" onClick={handleLinkClick}>ORGANIC RUBBER HOSES</Link>
//  <Link to="/Assembly" onClick={handleLinkClick}>ASEMBLY HOSES</Link>
//  <Link to="/wired" onClick={handleLinkClick}>WIRE REINFORCED HOSES</Link>
//  <Link to="/fueltube" onClick={handleLinkClick}>FUEL TUBES / HOSES</Link>
//  <Link to="/moulded" onClick={handleLinkClick}>MOULDED HOSES</Link>
// </div>
// )}
//  </div>
//  {/* Dropdown Menu for Facilities */}
//  <div
// className="dropdown"
//  onMouseEnter={() => handleHover("facilities")} // Show on hover
// onMouseLeave={() => setActiveDropdown(null)} // Hide on mouse leave
//  >
//  <span className="dropdown-trigger">
//  <Link to="/facilities">FACILITIES</Link>
//  </span>
//  {activeDropdown === "facilities" && (
// <div className="dropdown-menu">
//  <Link to="/manufacturing" onClick={handleLinkClick}>MANUFACTURING FACILITIES</Link>
//  <Link to="/inhouse" onClick={handleLinkClick}>INHOUSE TESTING FACILITIES</Link>
//  </div>
//  )}
//  </div>
//  <Link to="/news" onClick={handleLinkClick}>NEWS & BLOGS</Link>
//  <Link to="/career" onClick={handleLinkClick}>CAREERS</Link>
//  <Link to="/contact" onClick={handleLinkClick}>CONTACT US</Link>
 
//  </nav>

//  </div>
//  </div>

// );

// }



// export default Header;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
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

  const handleHover = (menu) => setActiveDropdown(menu);

  return (
    <div >
      <header className="header">
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
      </header>

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
  <Link to="/manufacturing" onClick={handleLinkClick}>MANUFACTURING FACILITIES</Link>
  <Link to="/inhouse" onClick={handleLinkClick}>INHOUSE TESTING FACILITIES</Link>
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
}

export default Header;
