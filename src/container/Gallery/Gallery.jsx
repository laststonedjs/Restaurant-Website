import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
// components
import { SubHeading } from "../../components";
// constants
import { images } from "../../constants";
// styles
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Foto Galerija</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Duis Eu Magna Velit. Cras Ipsum Turpis, Suscipit Sit Amet Maximus Sit
          Amet, Volutpat A Metus.
        </p>
        <button type="button" className="custom__button">
          Pogledaj Više
        </button>
      </div>

      <div className="app__gallery-images">
        <div></div>
      </div>
    </div>
  );
};

export default Gallery;
