function FetchAPiData(params) {
  fetch(params.url)
    .then((res) => {
      if (res.status !== 200) {
        params.errorFunc("error! status code is not 200");
        params.loadingFunc(false);
      }
      return res.json();
    })
    .then((data) => {
      if (data.length > 0) {
        params.loadingFunc(false);
        params.stateFunc(data);
      }
    })
    .catch((error) => {
      params.errorFunc(`Error!${error}`);
    });
}

export default FetchAPiData;
