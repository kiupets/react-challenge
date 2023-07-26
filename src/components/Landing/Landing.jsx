import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { ReactComponent as Gray } from "../../assets/images/Gray.svg";
import { PhotoGallery } from "../PhotoGallery/PhotoGallery";
import { MenuDropdown } from "../Menu-Dropdown/MenuDropdown";
import "./Landing.css";
import { NavBar } from "../NavBar/NavBar";
import { Filter } from "../Filter/Filter";
import { Title } from "../Title/Title";
import { MainMenu } from "../../MainMenu/MainMenu";
import { OrderBy } from "../../OrderBy/OrderBy";

export const Landing = () => {
  const [DropDown, setDropDown] = useState(false);

  const onDropDownClick = () => {
    setDropDown(!DropDown);
  };

  return (
    <div className="container">
      <div className="grid_container">
        <div className="navbar-grid">
          <Filter />
        </div>
        <div className="order-by-grid">
          <OrderBy />
        </div>
        <div className="grid_logo">
          <Logo />
        </div>
        <div className="grid-menu">
          <MainMenu />
        </div>

        <MenuDropdown onDropClick={onDropDownClick} />
        <div className="grid_title">
          <Title />
        </div>
        <div className="grid_cars">
          <PhotoGallery />
        </div>
        {DropDown ? <NavBar onDropClick={onDropDownClick} /> : null}

        <div className="grid-footer"></div>
      </div>
    </div>
  );
};
