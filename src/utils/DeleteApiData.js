function DeleteApiData(params) {
  // console.log(params);
  fetch(params, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });
}

export default DeleteApiData;
