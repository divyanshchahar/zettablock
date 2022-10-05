function DeleteApiVar(params) {
  let newData = params.stateVar.filter((item) => {
    return item.id !== params.id;
  });

  params.stateFunc(newData);
}

export default DeleteApiVar;
