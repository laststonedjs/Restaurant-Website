import React from "react";
import { GIHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
// constants
import images from "../../constants/images";
// styles
import "./Navbar.css";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <p>
        <img src={images.logo} alt="logo" />
      </p>
    </div>
    <ul className="app__navbar-links">
      <li className="p__links">
        <a href="#home">Home</a>
      </li>
      <li className="p__links">
        <a href="#home">About</a>
      </li>
      <li className="p__links">
        <a href="#home">Menu</a>
      </li>
      <li className="p__links">
        <a href="#home">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
