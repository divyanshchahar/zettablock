import { useState } from "react";

// IMPORTING ASSETS
import downArrow from "../assets/downward-arrow.png";

function SortingMenu() {
  const [selectedOption, setSelectedOption] = useState("Default");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div>
      <div>
        <div>{selectedOption}</div>
        <div
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          <img src={downArrow} />
        </div>
      </div>
      {showOptions && (
        <div>
          <div>Default</div>
          <div>Name: Ascending</div>
          <div>Name: Descending</div>
        </div>
      )}
    </div>
  );
}

export default SortingMenu;
