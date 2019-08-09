import { combineReducers } from "redux";
import { CHANGE_MAME, SELECT_FOOD, SELECT_NOON, REMOVE_FOOD } from "./action";
const initState = "نان";

const name = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_MAME:
      return action.payload;

    default:
      return state;
  }
};

const foods = (state = [], action) => {
  switch (action.type) {
    case REMOVE_FOOD:
      return [...state.filter(item => item.id !== action.payload)];
    case SELECT_FOOD:
      return [
        ...state.filter(item => item.id !== action.payload.id),
        action.payload
      ];
    case SELECT_NOON:
      return [
        ...state.filter(item => item.parentId !== action.payload.parentId),
        action.payload
      ];

    default:
      return state;
  }
};

export default combineReducers({
  name,
  foods
});
