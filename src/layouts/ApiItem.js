function ApiItem(params) {
  return (
    <>
      {/* API NAME */}
      <div>
        <h1>{params.props.name}</h1>
      </div>

      {/* TABLE */}
      <table>
        <tr>
          <th>property</th>
          <th>value</th>
        </tr>
      </table>
    </>
  );
}

export default ApiItem;
