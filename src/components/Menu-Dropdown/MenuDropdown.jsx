import React, { useState, useEffect } from "react";
import { DropDown } from "../DropDown/DropDown";
import { ReactComponent as Gray } from "../../assets/images/Gray.svg";

import "./MenuDropdown.css";

export const MenuDropdown = ({ onDropClick }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [carModels, setCarModels] = useState([]);
  return (
    <div className="grid-menu-right">
      <div style={{ paddingRight: "20px" }}>Menu</div>
      <div onClick={onDropClick}>
        <Gray />
      </div>
    </div>
  );
};
// import React, { useState, useEffect } from "react";

// export const MenuDropdown = () => {
//   const [selectedOption, setSelectedOption] = useState(""); // State for the selected menu option
//   const [carModels, setCarModels] = useState([]); // State for the car models fetched from the API

//   // useEffect to fetch car models from the API when the component mounts
//   useEffect(() => {
//     fetchCarModels();
//   }, []);

//   // Function to fetch car models from the API
//   const fetchCarModels = async () => {
//     try {
//       const response = await fetch("https://example-api.com/car-models"); // Replace with your API endpoint
//       const data = await response.json();
//       setCarModels(data); // Update the car models state with the fetched data
//     } catch (error) {
//       console.error("Error fetching car models:", error);
//     }
//   };

//   // Function to handle the menu option selection
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Car Filter</h2>
//       <label htmlFor="car-model">Select a car model:</label>
//       <select
//         id="car-model"
//         value={selectedOption}
//         onChange={handleOptionChange}
//       >
//         <option value="">All</option>
//         <option value="sedan">Sedan</option>
//         <option value="suv">SUV</option>
//         <option value="hatchback">Hatchback</option>
//         {/* Add more options based on your car model categories */}
//       </select>

//       <h3>Filtered Car Models:</h3>
//       <ul>
//         {/* Filter and display car models based on the selected option */}
//         {carModels
//           .filter((car) => !selectedOption || car.category === selectedOption)
//           .map((car) => (
//             <li key={car.id}>{car.model}</li>
//           ))}
//       </ul>
//     </div>
//   );
// };
