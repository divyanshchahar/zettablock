import { useState } from "react";

// IMPORTING ASSETS
import downArrow from "../assets/downward-arrow.png";

function SortingMenu() {
  const [selectedOption, setSelectedOption] = useState("Default");
  return (
    <div>
      <div>{selectedOption}</div>
      <div>
        <img src={downArrow} />
      </div>
    </div>
  );
}

export default SortingMenu;
