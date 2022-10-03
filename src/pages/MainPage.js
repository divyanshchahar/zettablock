//IMPORTING COMPONENTS
import ApiList from "../layouts/ApiList";

//IMPORTING ASSETS
import Urls from "../assets/Urls";

function MainPage() {
  return (
    <>
      <ApiList props={Urls.baseApi} />
    </>
  );
}

export default MainPage;
