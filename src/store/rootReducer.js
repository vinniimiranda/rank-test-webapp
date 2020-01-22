import { combineReducers } from "redux";
import modal from "./modal/reducer";
import alert from "./alert/reducer";

export default combineReducers({
  modal,
  alert
});
