import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FETCH_TASK,
  FETCH_TASKS,
} from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
    case FETCH_TASK:
      return action.payload;
    case EDIT_TASK:
      console.log("here?");
      return action.payload;
    default:
      return state;
  }
};
