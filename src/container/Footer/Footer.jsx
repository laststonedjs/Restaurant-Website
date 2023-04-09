import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
// components
import { FooterOverlay, Newsletter } from "../../components";
// styles
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
