// IMPORTing FUNCTIONALITY
import { useState } from "react";

//IMPORTING COMPONENTS
import ApiList from "../layouts/ApiList";
import SortingMenu from "../layouts/SortingMenu";

//IMPORTING ASSETS
import Urls from "../assets/Urls";

function MainPage() {
  const [sorting, setSorting] = useState(Urls.dsc);
  const propArgs = { sortingFunc: changeSorting, sortOptions: Urls };

  function changeSorting(param) {
    setSorting(param);
  }

  return (
    <>
      <SortingMenu props={propArgs} />
      <ApiList props={sorting} />
    </>
  );
}

export default MainPage;
