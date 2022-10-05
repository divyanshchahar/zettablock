function Pagination(params) {
  function handleClick(param) {
    switch (param) {
      case "1":
        params.props.pageFunc(params.props.pageOptions.p1);
        break;

      case "2":
        params.props.pageFunc(params.props.pageOptions.p2);
        break;

      case "3":
        params.props.pageFunc(params.props.pageOptions.p3);
        break;

      case "4":
        params.props.pageFunc(params.props.pageOptions.p4);
        break;

      case "5":
        params.props.pageFunc(params.props.pageOptions.p5);
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick("1");
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          handleClick("2");
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          handleClick("3");
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          handleClick("4");
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          handleClick("5");
        }}
      >
        5
      </button>
    </div>
  );
}

export default Pagination;
