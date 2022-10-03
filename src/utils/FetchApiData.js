function FetchAPiData(params) {
  fetch(params.url).then((res) => {
    if (res.status !== 200) {
      params.errorFunc("error! status code is not 200");
      params.loadingFunc(false);
    }
  });
}

export default FetchAPiData;
