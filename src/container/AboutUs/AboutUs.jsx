import React from "react";
// constants
import { images } from "../../constants";
// styles
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.K} alt="K-letter" />
    </div>
  </div>
);

export default AboutUs;
