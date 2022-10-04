import { useState } from "react";

// IMPORTING ASSETS
import downArrow from "../assets/downward-arrow.png";

function SortingMenu() {
  const [selectedOption, setSelectedOption] = useState("Default");
  const [showOptions, setShowOptions] = useState(false);

  function handleClick(sortBy) {
    setSelectedOption(sortBy);
  }

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
          <div
            onClick={() => {
              handleClick("Default");
            }}
          >
            Default
          </div>
          <div
            onClick={() => {
              handleClick("Name: Ascending");
            }}
          >
            Name: Ascending
          </div>
          <div
            onClick={() => {
              handleClick("Name: Descending");
            }}
          >
            Name: Descending
          </div>
        </div>
      )}
    </div>
  );
}

export default SortingMenu;
