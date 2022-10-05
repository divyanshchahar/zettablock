import Urls from "../assets/Urls";

function DeleteCall(params) {
  fetch(`${Urls.baseApi}${Urls.noSort}/${params}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  }).then((res) => res.json());
}

export default DeleteCall;
