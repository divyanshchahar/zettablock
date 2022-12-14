// IMPORTING FUNCTIONALITY
import { useState } from "react";

//IMPORTING COMPONENTS
import DeleteApiData from "../utils/DeleteApiData";

//IMPORTING ASSETS
import Urls from "../assets/Urls";

function ApiItem(params) {
  const items = Object.entries(params.props.apiItem);
  const [isVisible, setIsVisible] = useState(false);

  const deleteProps = {
    id: params.props.apiItem.id,
    stateVar: params.props.stateVar,
    stateFunc: params.props.stateFunc,
  };

  return (
    <>
      {/* API NAME AND DELETE BUTTON*/}
      <div
        onClick={() => {
          params.props.hidingFunc(setIsVisible);
        }}
      >
        <h1>{params.props.name}</h1>
      </div>
      <button
        onClick={() => {
          DeleteApiData(deleteProps);
        }}
      >
        Delete
      </button>

      {/* TABLE */}
      {isVisible && (
        <table>
          <tr>
            <th>property</th>
            <th>value</th>
          </tr>

          {/* TABLE ROWS */}
          {items.map((item) => {
            return (
              <tr>
                <td>{item[0].toString()}</td>
                <td>{item[1].toString()}</td>
              </tr>
            );
          })}
        </table>
      )}
    </>
  );
}

export default ApiItem;
