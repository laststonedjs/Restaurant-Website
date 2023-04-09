import React from "react";
// components
import { SubHeading } from "../../components";
// constants
import { images } from "../../constants";
// styles

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Kontakt" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Mozete nas pronaci
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Hilandarska ulica, br. 11, Istocno Sarajevo
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0 1rem 0" }}
        >
          Mozete nas posjetiti u periodu
        </p>
        <p className="p__opensans">Pon - Pet: 08:00h - 20:00h</p>
        <p className="p__opensans">Sub: do 18:00h</p>
        <p className="p__opensans">Ned: Nismo otvoreni</p>
      </div>
      <button className="custom__button" style={{ marginTop: "3rem" }}>
        Posjetite Nas
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findUs" />
    </div>
  </div>
);

export default FindUs;
