import { combineReducers } from "redux";
import palleteReducer from "./palleteReducer";

export default combineReducers({
  palletes: palleteReducer,
});
