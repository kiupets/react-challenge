import React from "react";
import { DropDown } from "../DropDown/DropDown";
import "./NavBar.css";
export const NavBar = ({ onDropClick }) => {
  return (
    <div className="grid-navigation-container">
      <div onClick={onDropClick} className="grid-nav-item-button">
        Cerrar x
      </div>

      <DropDown />
    </div>
  );
};
