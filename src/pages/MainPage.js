//IMPORTING COMPONENTS
import ApiList from "../layouts/ApiList";
import SortingMenu from "../layouts/SortingMenu";

//IMPORTING ASSETS
import Urls from "../assets/Urls";

function MainPage() {
  return (
    <>
      <SortingMenu />
      <ApiList props={Urls.dsc} />
    </>
  );
}

export default MainPage;
