import React, { useState } from "react";
import "./MainMenu.css";
export const MainMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="main-menu">
      <div
        onClick={() => handleItemClick("modelos")}
        className={`menu-item ${selectedItem === "modelos" ? "selected" : ""}`}
        style={{ paddingLeft: "2%", marginRight: "5%" }}
      >
        Modelos
      </div>
      <div
        className={`menu-item ${
          selectedItem === "ficha_de_modelos" ? "selected" : ""
        }`}
        onClick={() => handleItemClick("ficha_de_modelos")}
      >
        Ficha de Modelos
      </div>
    </div>
  );
};
