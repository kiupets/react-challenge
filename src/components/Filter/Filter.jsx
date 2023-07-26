import React from "react";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { ReactComponent as Gray } from "../../assets/images/Gray.svg";
import "./Filter.css";

export const Filter = () => {
  return (
    <nav class="navbar">
      <div class="navbar-item">Filtrar por:</div>
      <div class="navbar-item">Todos</div>
      <div class="navbar-item">Autos</div>
      <div class="navbar-item">Pickup</div>
      <div class="navbar-item">Comerciales, SUVs y Crossovers</div>
    </nav>
  );
};
