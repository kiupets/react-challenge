import React, { useState } from "react";

export const OrderBy = () => {
  const [selectedOption, setSelectedOption] = useState("Ordenar por");

  const handleOptionChange = (event) => {
    setSelectedOption("Ordenar por");
    // You can perform any additional actions based on the selected option here.
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          height: "100%",
          paddingLeft: "10%",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          // marginBottom: "20px",
          // paddingBottom: "20px",
          zIndex: 40,
        }}
      >
        Ordenar por
      </div>
      {/* <h1>Ordenar por</h1> */}
      <select
        style={{
          padding: "8px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "none",
          width: "70%",
          outline: "none",
        }}
        value="Ordenar por"
        // onChange={handleOptionChange}
      >
        {/* <option value="Mas alto">Ordenar por</option> */}
        {/* <option value="" disabled>
          Ordenar por
        </option> */}
        {/* <option value="">Ordenar por</option> */}
        <option value="Mas alto"></option>

        <option value="Mas alto">De menor a mayor precio</option>
        <option value="Mas alto">De mayor a menor precio</option>
        <option value="Mas nuevo">Más nuevos primero</option>
        <option value="Mas viejo">Más viejos primero</option>
      </select>
    </div>
  );
};
