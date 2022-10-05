function DeleteApiVar(params) {
  let newData = params.props.stateVar.filter((item) => {
    return item.id !== params.props.id;
  });

  params.props.stateFunc(newData);
}

export default DeleteApiVar;
