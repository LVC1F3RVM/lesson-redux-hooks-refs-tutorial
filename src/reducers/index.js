import { combineReducers } from "redux";
import countsReducer from "./countsReducer";
import showsReducer from "./showsReducer";

const rootReducer = combineReducers({
  output: countsReducer,
  showsReducer,
});

export default rootReducer;
