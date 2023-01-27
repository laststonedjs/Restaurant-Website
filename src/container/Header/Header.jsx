import React from "react";
// components
import { SubHeading } from "../../components";
// constants
import { images } from "../../constants";
// styles
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Požuri za novi ukus" />
      <h1 className="app__header-h1">Ključ za savršenu trpezu</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      <button type="button" className="custom__button">
        Pogledaj Meni
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
