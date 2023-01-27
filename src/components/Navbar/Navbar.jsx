import React, { useState } from "react";
// assets
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoIosRestaurant } from "react-icons/io";
import { IoRestaurantOutline } from "react-icons/io5";
import { BiRestaurant } from "react-icons/bi";
import { RiRestaurant2Line } from "react-icons/ri";
// constants
import images from "../../constants/images";
// styles
import "./Navbar.css";

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <IoRestaurantOutline color="#fff" fontSize={27} />
        <li className="p__opensans">
          <a href="#home">Početna</a>
        </li>
        <IoIosRestaurant color="#fff" fontSize={27} />
        <li className="p__opensans">
          <a href="#about">O Nama</a>
        </li>
        <BiRestaurant color="#fff" fontSize={27} />
        <li className="p__opensans">
          <a href="#menu">Meni</a>
        </li>
        <RiRestaurant2Line color="#fff" fontSize={27} />
        <li className="p__opensans">
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
      <div className="app__navbar-social">
        <a href="#" className="fa fa-facebook"></a>
        <div />
        <a href="#" className="fa fa-instagram"></a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToogleMenu(true)}
        />

        {toogleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToogleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <IoRestaurantOutline
                  style={{
                    color: "#dcca87",
                    marginRight: "10px",
                  }}
                  fontSize={28}
                />
                <a href="#home">Početna</a>
              </li>
              <li className="p__opensans">
                <IoIosRestaurant
                  style={{ color: "#dcca87", marginRight: "10px" }}
                  fontSize={28}
                />
                <a href="#about">O Nama</a>
              </li>
              <li className="p__opensans">
                <BiRestaurant
                  style={{ color: "#dcca87", marginRight: "10px" }}
                  fontSize={28}
                />
                <a href="#menu">Meni</a>
              </li>
              <li className="p__opensans">
                <RiRestaurant2Line
                  style={{ color: "#dcca87", marginRight: "10px" }}
                  fontSize={28}
                />
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
