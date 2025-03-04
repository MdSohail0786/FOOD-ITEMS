// import "./navbar.css";
// // import { FaLuggageCart } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">FOOD ITEMS</div>
//         <div className="search">
//           <input
//             type="text"
//             placeholder="Search Food Items"
//             spellCheck="True"
//           />

//           <div className="manu">
//             <ul>
//               <li>
//                 <a href="#"></a>HOME
//               </li>
//               <li>
//                 <a href="#"></a>MENU
//               </li>
//               <li>
//                 <a href="#"></a>REVIEW
//               </li>
//               <li>
//                 <a href="#"></a>CONTECT
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* <div className="cart">
//           <a href="#">
//             <FaLuggageCart />
//           </a>
//         </div> */}
//         <div className="login">
//           <button>LOGIN</button>
//         </div>
//         <div className="cart">
//           <button>
//             <FaShoppingCart />
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };
// export default Navbar;

// src/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {" "}
        <img src="logo-search-grid-1x.png" alt="" />
        FOOD&ITEM
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search Food Items..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="cart">
        <button onClick={addToCart}>
          {" "}
          <FaShoppingCart />({cartCount})
        </button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
