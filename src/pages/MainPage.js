// IMPORTing FUNCTIONALITY
import { useState } from "react";

//IMPORTING COMPONENTS
import ApiList from "../layouts/ApiList";
import SortingMenu from "../layouts/SortingMenu";
import Pagination from "../layouts/Pagination";

//IMPORTING ASSETS
import Urls from "../assets/Urls";

function MainPage() {
  const [sorting, setSorting] = useState(Urls.baseApi);
  const [page, setPage] = useState(Urls.baseApi);

  function changeSorting(param) {
    setSorting(param);
  }

  function changePage(param) {
    setPage(param);
  }

  const sortingPropArgs = { sortingFunc: changeSorting, sortOptions: Urls };
  const pagePropArgs = { pageFunc: changePage, pageOptions: Urls };

  return (
    <>
      <SortingMenu props={sortingPropArgs} />
      <ApiList props={sorting} />
      <Pagination props={pagePropArgs} />
    </>
  );
}

export default MainPage;
