import React from "react";
// components
import { SubHeading, MenuItem } from "../../components";
// constants
import { images, data } from "../../constants";
// styles
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Meni koji odgovara vašem ukusu" />
      <h1 className="headtext__cormorant">Iz naše ponude izdvajamo..</h1>
    </div>

    {/* LEFT SIDE */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_readyMeal flex__center">
        <p className="app__specialMenu-menu_heading">Gotova Jela</p>
        <div className="app__specialMenu_menu_items">
          {data.readyMeals.map((readyMeal, index) => (
            <MenuItem
              key={readyMeal.title + index}
              title={readyMeal.title}
              price={readyMeal.price}
              tags={readyMeal.tags}
            />
          ))}
        </div>
      </div>

      {/* SPLIT IMAGE */}
      <div className="app__specialMenu-menu_img">
        <img src={images.specialMenu} alt="menu_soup" />
      </div>

      {/* RIGHT SIDE */}
      <div className="app__specialMenu-menu_grillMeal flex__center">
        <p className="app__specialMenu-menu_heading">Jela sa roštilja</p>
        <div className="app__specialMenu_menu_items">
          {data.grillMeals.map((grillMeal, index) => (
            <MenuItem
              key={grillMeal.title + index}
              title={grillMeal.title}
              price={grillMeal.price}
              tags={grillMeal.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
