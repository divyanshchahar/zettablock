import DeleteApiVar from "./DeleteApiVar";
import DeleteCall from "./DeleteCall";

function DeleteApiData(params) {
  DeleteCall(params.id);
  DeleteApiVar({
    stateVar: params.stateVar,
    stateFunc: params.stateFunc,
    id: params.id,
  });
}

export default DeleteApiData;
