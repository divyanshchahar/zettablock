function ApiItem(params) {
  return (
    <>
      {/* API NAME */}
      <div>
        <h1>{params.props.name}</h1>
      </div>
    </>
  );
}

export default ApiItem;
