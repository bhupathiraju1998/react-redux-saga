import { combineReducers } from "redux";
import actionReducer from "./album.reducer";

const rootReducer = combineReducers({
  actionReducer,
});

export default rootReducer;
