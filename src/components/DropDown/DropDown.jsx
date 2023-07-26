import React from "react";
import "./DropDown.css";
import { menudown } from "./utils";
export const DropDown = () => {
  const menu = menudown.map((m) => (
    <div className="grid-item">
      <a href="#">{m}</a>
    </div>
  ));
  return <div className="drop-down">{menu}</div>;
};
