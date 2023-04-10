import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
// components
import { FooterOverlay, Newsletter } from "../../components";
// constants
import { images } from "../../constants";
// styles
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Kontakt</h1>
        <p className="p__opensans">Hilandarska ulica 11, Istočno Sarajevo</p>
        <p className="p__opensans">066 327-462</p>
        <p className="p__email">domkuhinjica@gmail.com</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.kuhinjica} alt="footer_logo" />
        <p className="p__opensans">
          "Najbolji način da pronađete sebe je da se izgubite u službi drugih."
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Radno vrijeme</h1>
        <p className="p__opensans">Ponedjeljak-Petak:</p>
        <p className="p__opensans">08:00 - 20:00</p>
        <p className="p__opensans">Subota:</p>
        <p className="p__opensans">08:00 - 18:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Kuhinjica. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
