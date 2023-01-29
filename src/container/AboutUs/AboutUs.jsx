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

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">O Nama</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p__opensans">
          Nullam a tristique sem. Donec feugiat diam in urna congue, sed porta
          nunc sagittis. Etiam consectetur id nibh in ultricies. Sed ut mollis
          neque. Duis eu magna velit. Cras ipsum turpis, suscipit sit amet
          maximus sit amet, volutpat a metus. Praesent vel sem eget diam egestas
          pulvinar. Maecenas auctor nisl a finibus iaculis.
        </p>
        <button type="button" className="custom__button">
          Saznajte više
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Šta nudimo</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p__opensans">
          Nullam a tristique sem. Donec feugiat diam in urna congue, sed porta
          nunc sagittis. Etiam consectetur id nibh in ultricies. Sed ut mollis
          neque. Duis eu magna velit. Cras ipsum turpis, suscipit sit amet
          maximus sit amet, volutpat a metus. Praesent vel sem eget diam egestas
          pulvinar. Maecenas auctor nisl a finibus iaculis.
        </p>
        <button type="button" className="custom__button">
          Saznajte više
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
