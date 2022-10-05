function DeleteCall(params) {
  // console.log(params);
  fetch(params, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  }).then((res) => console.log(res));
}

export default DeleteCall;
