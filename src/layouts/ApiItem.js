// IMPORTING FUNCTIONALITY
import { useState } from "react";

function ApiItem(params) {
  const items = Object.entries(params.props.apiItem);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* API NAME */}
      <div
        onClick={() => {
          params.props.hidingFunc(setIsVisible);
        }}
      >
        <h1>{params.props.name}</h1>
      </div>

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
