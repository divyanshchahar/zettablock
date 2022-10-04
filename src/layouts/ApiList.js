// IMPORTING FUNCTIONALITY
import { useState } from "react";
import { useEffect } from "react";

// IMPORTING COMPONENETS
import FetchAPiData from "../utils/FetchApiData";
import ApiItem from "./ApiItem";

function ApiLists(params) {
  const [apis, setApis] = useState();
  const [isError, setisError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = params.props;
  const propArgs = {
    url: url,
    loadingFunc: setIsLoading,
    errorFunc: setisError,
    stateFunc: setApis,
  };

  useEffect(() => {
    FetchAPiData(propArgs);
  }, [url]);

  return (
    <>
      {/* HANDLING LOADING */}
      {isLoading && (
        <div className="loadingContainer">
          <h1>Loading ...</h1>
        </div>
      )}
      {/* HANDLING ERROR */}
      {isError && (
        <div className="errorContainer">
          <h1>Error</h1>
          <p>{isError}</p>
        </div>
      )}
      {/* LISTING API RETURN */}
      {apis &&
        apis.map((item) => {
          let isHidden = false;

          const parentFunc = (showComponent) => {
            isHidden = !isHidden;
            showComponent(isHidden);
          };

          const propArgs = {
            apiItem: item,
            name: item.name,
            hidingFunc: parentFunc,
          };

          return (
            <div key={item.id}>
              <ApiItem props={propArgs} />
            </div>
          );
        })}
    </>
  );
}

export default ApiLists;
