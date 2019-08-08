import { combineReducers } from "redux";

const initState = false;

const pizza = (state = initState, action) => {
  switch (action.type) {
    case "value":
      return true;

    default:
      return state;
  }
};

export default combineReducers({
  pizza
});
