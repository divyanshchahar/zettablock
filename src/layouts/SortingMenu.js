import { useState } from "react";

// IMPORTING ASSETS
import downArrow from "../assets/downward-arrow.png";

function SortingMenu(params) {
  const [selectedOption, setSelectedOption] = useState("Default");
  const [showOptions, setShowOptions] = useState(false);

  function handleClick(sortBy) {
    setSelectedOption(sortBy);

    switch (sortBy) {
      case "Default":
        params.props.sortingFunc(params.props.sortOptions.noSort);
        break;

      case "Name: Ascending":
        params.props.sortingFunc(params.props.sortOptions.asc);
        break;

      case "Name: Descending":
        params.props.sortingFunc(params.props.sortOptions.dsc);
        break;

      default:
        break;
    }
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
